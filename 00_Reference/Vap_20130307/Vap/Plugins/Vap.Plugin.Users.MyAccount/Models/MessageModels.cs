using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using Vap.Plugin.Users.MyAccount.DTO;
using System.Collections.Generic;
using Vap.Data.Mapping;
using System.Data.Linq;
using Vap.Core;
using Vap.Commons;
using Vap.Settings.Emums;

namespace Vap.Plugin.Users.MyAccount.Models
{
    public class MessageModels
    {

        /// <summary>
        /// Get all subject foreach user login.
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        public List<SubjectDto> GetAllSubject(MessageDto dto)
        {
            List<SubjectDto> listMessage = new List<SubjectDto>();
            DBHelpDataContext db = new DBHelpDataContext();
            List<MSG_SUBJECT> listSubject = (from subject in db.MSG_SUBJECTs
                                             join partcipant in db.MSG_SUBJECT_PARTICIPANTs on subject.SUBJECT_ID equals partcipant.SUBJECT_ID
                                             where partcipant.USER_ID == dto.SenderID
                                             select subject).ToList();

            foreach (var item in listSubject)
            {
                listMessage.Add(new SubjectDto()
                {
                    LastedMessageDate = DateTime.Now,
                    HasAttachment = true,
                    SenderName = item.CREATE_USER_ID.ToString(),
                    SubjectName = item.SUBJECT,
                    SubjectCD = item.SUBJECT_ID
                });
            }
            return listMessage;
        }

        /// <summary>
        /// Get all subject foreach user login in the folder.
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        public List<SubjectDto> GetAllSubject(int userId, string folderCD)
        {
            List<SubjectDto> listMessage = new List<SubjectDto>();
            DBHelpDataContext db = new DBHelpDataContext();
            List<MSG_SUBJECT> listSubject = (from inbox in db.MSG_SUBJECT_FOLDERs
                                             //join subject in db.MSG_SUBJECTs on inbox.SUBJECT_ID equals subject.SUBJECT_ID
                                             //join partcipant in db.MSG_SUBJECT_PARTICIPANTs on subject.SUBJECT_ID equals partcipant.SUBJECT_ID
                                             from partcipant in db.MSG_SUBJECT_PARTICIPANTs
                                             from subject in db.MSG_SUBJECTs
                                             where
                                             inbox.SUBJECT_ID == partcipant.SUBJECT_ID
                                             && inbox.USER_ID == partcipant.USER_ID
                                             && partcipant.SUBJECT_ID == subject.SUBJECT_ID
                                             && partcipant.USER_ID == userId
                                             && inbox.FOLDER_CD == folderCD
                                             select subject).ToList();

            foreach (var item in listSubject)
            {
                listMessage.Add(new SubjectDto()
                {
                    LastedMessageDate = DateTime.Now,
                    HasAttachment = true,
                    SenderName = item.CREATE_USER_ID.ToString(),
                    SubjectName = item.SUBJECT,
                    SubjectCD = item.SUBJECT_ID
                });
            }
            return listMessage;
        }

        /// <summary>
        /// Add new email
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        public bool Send(SubjectDto dto)
        {
            try
            {
                //StaffInfo loginPerson = Commons.Common.Get

                DateTime currentDateTime = DateTime.Now;

                DBHelpDataContext db = new DBHelpDataContext();
                MSG_SUBJECT theSubject = new MSG_SUBJECT();
                theSubject.SUBJECT_ID = Guid.NewGuid().ToString().Substring(0, 20);
                theSubject.SUBJECT = dto.SubjectName;
                theSubject.CREATE_USER_ID = dto.SenderID;
                theSubject.CREATE_DATE = currentDateTime;

                MSG_MESSAGE message = new MSG_MESSAGE()
                                {
                                    CONTENTS = dto.Content,
                                    SENDING_USER_ID = dto.SenderID,
                                    SENT_DATE = currentDateTime,
                                };

                message.MSG_MESAGES_USERs.Add(new MSG_MESAGES_USER()
                {
                    USER_ID = dto.SenderID,
                    IS_READ = 1,
                    READ_DATE = currentDateTime
                });

                theSubject.MSG_MESSAGEs.Add(message);

                List<int> participantList = this.getAllUserIdSentTo(dto.MailTo);
                participantList.Insert(0, dto.SenderID); //Add the sender to participant list
                foreach (var id in participantList)
                {
                    theSubject.MSG_SUBJECT_PARTICIPANTs.Add(new MSG_SUBJECT_PARTICIPANT() { USER_ID = id });
                }

                db.MSG_SUBJECTs.InsertOnSubmit(theSubject);
                db.SubmitChanges();

            }
            catch (Exception ex)
            {
                throw ex;
            }
            return true;
        }

        /// <summary>
        /// Slipt and get all user id who will recive new subject.
        /// </summary>
        /// <param name="mailTo">string of user will receive this subject. Seperate by ';' character.</param>
        /// <returns></returns>
        private List<int> getAllUserIdSentTo(string mailTo)
        {
            List<int> userIdList = new List<int>() { };

            string[] temp = Common.Trim(mailTo).Split(';');
            foreach (var item in temp)
            {
                int userId = this.getUserIdByUserName(item);
                if (userId != 0)
                {
                    userIdList.Add(userId);
                }
            }
            return userIdList;
        }

        /// <summary>
        /// To return user_id (or person_id: int) by user_name that use to login.
        /// If user_name not fount, system will return 0 as default.
        /// </summary>
        /// <param name="userName"></param>
        /// <returns></returns>
        private int getUserIdByUserName(string userName)
        {
            using (DBHelpDataContext db = new DBHelpDataContext())
            {
                var thePerson = db.M_PERSONs.Where(o => o.USER_ID.ToLower().Trim().Equals(Common.Trim(userName))).FirstOrDefault();
                if (!Common.IsNullOrEmpty(thePerson))
                {
                    return thePerson.PERSON_CD;
                }
                return 0;
            }
        }

        /// <summary>
        /// Get all message in the subject
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        public List<MessageDto> GetMessagesOnSubject(MessageDto dto)
        {

            List<MessageDto> listMessage = new List<MessageDto>();
            using (DBHelpDataContext db = new DBHelpDataContext())
            {
                listMessage = (from subject in db.MSG_SUBJECTs
                               join message in db.MSG_MESSAGEs on subject.SUBJECT_ID equals message.SUBJECT_ID
                               join person in db.M_PERSONs on message.SENDING_USER_ID equals person.PERSON_CD
                               join staff in db.M_STAFFs on person.STAFF_ID equals staff.STAFF_ID
                               where subject.SUBJECT_ID == Common.Trim(dto.SubjectCD).ToLower()
                               select new MessageDto()
                               {
                                   SentDate = Common.ParseDate(message.SENT_DATE),
                                   Content = message.CONTENTS,
                                   HasAttachment = message.MSG_ATTACHMENTs.Count() > 0,
                                   SenderID = Common.ParseInt(message.SENDING_USER_ID),
                                   SenderName = Common.ParseString(staff.FULL_NAME),
                                   SubjectName = subject.SUBJECT,
                                   SubjectCD = subject.SUBJECT_ID
                               }).ToList();
            }
            return listMessage;
        }

        /// <summary>
        /// Get all system folders and custome folders.
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        public List<FolderDto> GetFolders(int personCD)
        {
            /*
             * Folder type = 0: Custome folder
             * Folder type = 1: Default folder
            */
            DBHelpDataContext db = new DBHelpDataContext();
            return (from f in db.MSG_FOLDERs
                    where (f.FOLDER_TYPE == 1) || (f.CREATE_USER_ID == personCD && f.DEL_FLG == false)
                    select new FolderDto()
                    {
                        FolderCD = f.FOLDER_CD,
                        FolderName = f.FOLDER_NAME,
                        CreateDate = Common.ParseDate(f.CREATE_DATE),
                        CreateUserId = Common.ParseInt(f.CREATE_USER_ID),
                        DelFlg = f.DEL_FLG,
                        FolderType = f.FOLDER_TYPE
                    }).ToList();

        }

        /// <summary>
        /// To reply the message
        /// </summary>
        /// <param name="dto"></param>
        internal void Reply(MessageDto dto)
        {
            DBHelpDataContext db = new DBHelpDataContext();
            DateTime currentDateTime = DateTime.Now;

            MSG_MESSAGE message = new MSG_MESSAGE()
            {
                SUBJECT_ID = dto.SubjectCD,
                CONTENTS = dto.Content,
                SENDING_USER_ID = dto.SenderID,
                SENT_DATE = currentDateTime,
            };

            message.MSG_MESAGES_USERs.Add(new MSG_MESAGES_USER()
            {
                USER_ID = dto.SenderID,
                IS_READ = 1,
                READ_DATE = currentDateTime
            });

            //theSubject.MSG_MESSAGEs.Add(message);

            //List<int> participantList = this.getAllUserIdSentTo(dto.MailTo);
            //participantList.Insert(dto.SenderID, dto.SenderID); //Add the sender to participant list
            //foreach (var id in participantList)
            //{
            //    message.MSG_SUBJECT_PARTICIPANTs.Add(new MSG_SUBJECT_PARTICIPANT() { USER_ID = id });
            //}

            db.MSG_MESSAGEs.InsertOnSubmit(message);
            db.SubmitChanges();
        }

        /// <summary>
        /// To check is folder name is exited or not.
        /// </summary>
        /// <param name="folderName"></param>
        /// <returns></returns>
        internal EChecking IsFolderDublicate(string folderName, int userId)
        {
            EChecking checking = EChecking.NotExited;
            try
            {
                DBHelpDataContext db = new DBHelpDataContext();
                //Check exited
                checking = db.MSG_FOLDERs.Where(o => o.FOLDER_NAME == folderName && o.CREATE_USER_ID == userId).Count() > 0 ? EChecking.Exited : EChecking.NotExited;
                //Check deleted
                if (checking == EChecking.Exited)
                {
                    checking = db.MSG_FOLDERs.Where(o => o.FOLDER_NAME == folderName && o.CREATE_USER_ID == userId && o.DEL_FLG == true).Count() > 0 ? EChecking.ExitedButDeleted : EChecking.Exited;
                }
                return checking;
            }
            catch
            {
                return checking;
            }

        }

        /// <summary>
        /// To insert new folder.
        /// </summary>
        /// <param name="dto"></param>
        internal void InsertFolder(string folderName, int userId)
        {
            try
            {
                DBHelpDataContext db = new DBHelpDataContext();
                MSG_FOLDER theFolder = new MSG_FOLDER();
                theFolder.FOLDER_CD = Common.GenerateRandomString();
                theFolder.FOLDER_NAME = folderName;
                theFolder.CREATE_USER_ID = userId;
                theFolder.CREATE_DATE = Common.GetCurrentDate();
                theFolder.DEL_FLG = false;
                theFolder.FOLDER_TYPE = 0;
                db.MSG_FOLDERs.InsertOnSubmit(theFolder);
                db.SubmitChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// To update the deleted folder.
        /// </summary>
        /// <param name="dto"></param>
        internal void UpdateDeletedFolder(string folderName, int userId)
        {
            try
            {
                DBHelpDataContext db = new DBHelpDataContext();
                MSG_FOLDER theFolder = db.MSG_FOLDERs.Where(o => o.FOLDER_NAME == folderName && o.CREATE_USER_ID == userId).FirstOrDefault();
                if (!Common.IsNullOrEmpty(theFolder))
                {
                    theFolder.FOLDER_NAME = folderName;
                    theFolder.DEL_FLG = false;
                    theFolder.UPDATE_USER_ID = userId;
                    theFolder.UPDATE_DATE = Common.GetCurrentDate();
                    db.SubmitChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// To update the folder.
        /// </summary>
        /// <param name="dto"></param>
        internal void UpdateFolder(string folderCd, string folderName, int userId)
        {
            try
            {
                DBHelpDataContext db = new DBHelpDataContext();
                MSG_FOLDER theFolder = db.MSG_FOLDERs.Where(o => o.FOLDER_CD == folderCd && o.CREATE_USER_ID == userId).FirstOrDefault();
                if (!Common.IsNullOrEmpty(theFolder))
                {
                    theFolder.FOLDER_NAME = folderName;
                    theFolder.DEL_FLG = false;
                    theFolder.UPDATE_USER_ID = userId;
                    theFolder.UPDATE_DATE = Common.GetCurrentDate();
                    db.SubmitChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// To check the edting folder is existed or not.
        /// </summary>
        /// <param name="folderCD"></param>
        /// <param name="folderName"></param>
        /// <param name="userId"></param>
        /// <returns></returns>
        internal EChecking IsEdtingFolderDublicate(string folderCD, string folderName, int userId)
        {
            EChecking checking = EChecking.NotExited;
            try
            {
                DBHelpDataContext db = new DBHelpDataContext();
                //Check exited
                checking = db.MSG_FOLDERs.Where(o => o.FOLDER_NAME == folderName && o.CREATE_USER_ID == userId && o.FOLDER_CD != folderCD).Count() > 0 ? EChecking.Exited : EChecking.NotExited;
                return checking;
            }
            catch
            {
                return checking;
            }
        }
    }
}
