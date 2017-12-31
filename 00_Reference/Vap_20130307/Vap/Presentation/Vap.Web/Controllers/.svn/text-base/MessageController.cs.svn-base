using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Vap.Web.Models;
using Vap.Web.Dto.Message;
using Vap.Core;
using Vap.Settings.Enums;
using Vap.Commons;
using log4net;
using Vap.Web.Models.Authorization;

namespace Vap.Web.Controllers
{
    public class MessageController : Controller
    {
        private static readonly ILog logger = LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        //
        // GET: /Message/
        [CustomAuthorize]
        public ActionResult Index()
        {
            MessageModels model = new MessageModels();
            StaffLoginInfo staffInfo = Common.GetStaffLoginInfo();
            MessageDto dto = new MessageDto();
            dto.SenderID = staffInfo.PERSON_CD;
            PluginMessageInfo pluginSesstion = new PluginMessageInfo();
            pluginSesstion.Folders = model.GetFolders(staffInfo.PERSON_CD);
            Session["SessionPluginMessageInfo"] = pluginSesstion;

            return View(model.GetAllSubject(dto));
        }

        /// <summary>
        /// Get all email of each user follow the folder.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public ActionResult Mail(string id)
        {
            MessageModels model = new MessageModels();
            StaffLoginInfo staffInfo = Common.GetStaffLoginInfo();
            MessageDto dto = new MessageDto();
            dto.SenderID = staffInfo.PERSON_CD;
            return PartialView("UCMessageList", model.GetAllSubject(dto.SenderID, Common.ParseString(id)));
        }

        /// <summary>
        /// To compose new email.
        /// </summary>
        /// <returns></returns>
        [Privilege]
        [HttpGet]
        public ActionResult Compose()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Compose(SubjectDto dto)
        {
            StaffLoginInfo staffInfo = Common.GetStaffLoginInfo();
            MessageModels model = new MessageModels();
            dto.SenderID = staffInfo.PERSON_CD;
            bool result = model.Send(dto);

            return RedirectToAction("Index");
        }

        [Privilege]
        public ActionResult Reply(string id)
        {
            MessageDto dto = new MessageDto();
            dto.SubjectCD = id;
            return View(dto);
        }

        [Privilege]
        [HttpPost]
        public ActionResult Reply(MessageDto dto)
        {
            StaffLoginInfo staffInfo = Common.GetStaffLoginInfo();
            dto.SenderID = staffInfo.PERSON_CD;
            MessageModels model = new MessageModels();
            model.Reply(dto);
            return RedirectToAction("Index");
        }

        [Privilege]
        public ActionResult Detail(string sid)
        {
            MessageDto dto = this.SetDataToDto();
            dto.SubjectCD = sid;

            MessageModels model = new MessageModels();
            List<MessageDto> listMessage = model.GetMessagesOnSubject(dto);
            return View(listMessage);

        }

        private MessageDto SetDataToDto()
        {
            StaffLoginInfo staffInfo = Common.GetStaffLoginInfo();
            MessageDto dto = new MessageDto();
            dto.SenderID = staffInfo.PERSON_CD;
            return dto;
        }

        /// <summary>
        /// To create new folder.
        /// </summary>
        /// <returns></returns>
        [Privilege]
        public ActionResult CreateFolder()
        {
            //return PartialView("CreateFolder", new FolderDto() { Mode = EScreenMode.Edit, FolderCD ="d4b42615a8be4fa5b40c" });
            return PartialView("CreateFolder", new FolderDto() { Mode = EnumScreenMode.Add });
        }

        /// <summary>
        /// To create new folder
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        [Privilege]
        [HttpPost]
        public ActionResult SaveFolder(FolderDto dto)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return PartialView("CreateFolder", dto);
                }

                MessageModels model = new MessageModels();
                dto.FolderName = Common.Trim(dto.FolderName);
                StaffLoginInfo staffInfo = Common.GetStaffLoginInfo();

                dto.CreateUserId = staffInfo.PERSON_CD;
                //dto.FolderCD = Common.IsNullOrEmpty(dto.FolderCD) ? Common.GenerateRandomString() : dto.FolderCD;

                //Add Mode
                if (dto.Mode == EnumScreenMode.Add)
                {

                    //Check duplicate folder name
                    EnumChecking checking = model.IsFolderDublicate(dto.FolderName, staffInfo.PERSON_CD);
                    if (checking == EnumChecking.Exited)
                    {
                        ModelState.AddModelError("FolderName", Vap.Commons.CommonMessages.ERR0082);
                        return PartialView("CreateFolder", dto);
                    }

                    //Update to database
                    if (checking == EnumChecking.ExitedButDeleted)
                    {
                        //Update this folder
                        model.UpdateDeletedFolder(dto.FolderName, dto.CreateUserId);
                    }

                    if (checking == EnumChecking.NotExited)
                    {
                        //Insert this folder
                        model.InsertFolder(dto.FolderName, dto.CreateUserId);
                    }
                }

                if (dto.Mode == EnumScreenMode.Edit)
                {
                    //Check duplicate folder name
                    EnumChecking checking = model.IsEdtingFolderDublicate(dto.FolderCD, dto.FolderName, staffInfo.PERSON_CD);
                    if (checking == EnumChecking.Exited)
                    {
                        ModelState.AddModelError("FolderName", Vap.Commons.CommonMessages.ERR0082);
                        return PartialView("CreateFolder", dto);
                    }

                    //Update the folder.
                    if (checking == EnumChecking.NotExited)
                    {
                        //Insert this folder
                        model.UpdateFolder(dto.FolderCD, dto.FolderName, dto.CreateUserId);
                    }

                }
                return RedirectToAction("Index");
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return View("Error");
            }
        }
    }
}
