//Author:       Nguyen Tien Lam
//Date created: 26/08/2012
//Description: 

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Common;
using System.Web.Mvc;
using Vap.Core.Com;
using Vap.Core.Models;

namespace EAdmin.Helpers.Authorization
{
    public class M_PERSON_MODELS
    {
        //DbTransaction trans = null;

        /// <summary>
        /// Get the person by userid and password.
        /// </summary>
        /// <param name="userName"></param>
        /// <param name="passWord"></param>
        /// <remarks>
        /// Author:      Nguyen Tien Lam
        /// Create Date: 13/06/2011
        /// </remarks>
        /// <returns>Return the Person, else return null </returns>
        public M_PERSON GetPersonObjByUserNameAndPassword(string userName, string passWordFromScreen)
        {
            try
            {
                userName = userName.Trim();
                //int userID = Common.ParseInt(userName);
                //if (userID == 0)
                //    return null;
                //userName = Common.ParseString(userID);
                string passwordSalt = this.GetPasswordSaltFromUserID(userName);
                string password = Common.GetMD5EncyptString(passWordFromScreen, passwordSalt);
                DBHelpDataContext db = new DBHelpDataContext();
                return (db.M_PERSON.Where(o => o.USER_ID == userName && o.PASSWORD == password && o.DEL_FLG == false && o.M_STAFF.DEL_FLG == false).FirstOrDefault());
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Get password salt from user id.
        /// </summary>
        /// <param name="user_id"></param>
        /// <remarks>
        ///  Author:      Nguyen Tien Lam
        ///  Create Date: 13/06/2011
        /// </remarks>
        /// <returns></returns>
        private string GetPasswordSaltFromUserID(string user_id)
        {
            try
            {
                user_id = user_id.Trim();
                DBHelpDataContext db = new DBHelpDataContext();
                M_PERSON thePerson = db.M_PERSON.Where(o => o.USER_ID == user_id).FirstOrDefault();
                if (thePerson != null)
                    return thePerson.PASSWORD_SALT;
                else
                    return string.Empty;
            }
            catch (Exception ex)
            {
                return string.Empty;
                //Log ex;
                throw ex;
            }

        }

        /// <summary>
        /// Change password of user logined.
        /// </summary>
        /// <param name="username">User name</param>
        /// <param name="oldPassword">The old password</param>
        /// <param name="newPassword">The new password</param>
        /// <remarks>
        ///  Author:      Nguyen Tien Lam
        ///  Create Date: 15/06/2011
        /// </remarks>
        /// <returns>True: if change password was successfully. </returns>
        public bool ChangePassword(string username, string oldPassword, string newPassword)
        {
            username = username.Trim();
            oldPassword = oldPassword.Trim();
            newPassword = newPassword.Trim();

            DBHelpDataContext db = new DBHelpDataContext();
            M_PERSON person = db.M_PERSON.Where(o => o.USER_ID == username).FirstOrDefault();

            //If no person was found --> Return false;
            if (person == null)
                return false;

            //If the person was found but oldpass is invalid --> Return false;
            string MD5Password = Common.GetMD5EncyptString(oldPassword, person.PASSWORD_SALT);
            if (!MD5Password.Equals(person.PASSWORD))
                return false;

            //Update Person password and password salt
            string NewSaltPassword = Common.GenaratePasswordSalt();
            string NewMD5Password = Common.GetMD5EncyptString(newPassword, NewSaltPassword);

            //Set new password and new passwordsalt for the person.
            person.RESET_FLG = false;
            person.LAST_CHANGE_PWD_DATE = DateTime.Now;
            person.PASSWORD = NewMD5Password;
            person.PASSWORD_SALT = NewSaltPassword;

            try
            {
                //Save the change data to database.
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
                throw ex;
            }
        }

        /// <summary>
        /// Validate the password is match. Return True: If password is match.
        /// </summary>
        /// <param name="username">User name</param>
        /// <param name="password">Password</param>
        /// <remarks>
        ///  Author:      Nguyen Tien Lam
        ///  Create Date: 15/06/2011
        /// </remarks>
        /// <returns>True: If password is match.</returns>
        public bool IsPasswordMatch(string username, string password)
        {
            username = username.Trim();
            password = password.Trim();

            DBHelpDataContext db = new DBHelpDataContext();
            M_PERSON person = db.M_PERSON.Where(o => o.USER_ID == username).FirstOrDefault();

            //If no person was found --> Return false;
            if (person == null)
                return false;

            //If the person was found but oldpass is invalid --> Return false;
            string MD5Password = Common.GetMD5EncyptString(password, person.PASSWORD_SALT);
            if (!MD5Password.Equals(person.PASSWORD))
                return false;

            return true;
        }

        /// <summary>
        /// Get the M_PERSON by StaffId 
        /// </summary>
        public M_PERSON GetPersonByStaffId(int id)
        {
            using (var data = new DBHelpDataContext())
            {
                M_PERSON list = data.M_PERSON.FirstOrDefault(person => person.STAFF_ID == id && person.DEL_FLG == false);
                return list;
            }
        }
        /// <summary>
        /// Get the M_PERSON by StaffId 
        /// </summary>
        public M_PERSON GetPersonByStaffIdExist(int id)
        {
            using (var data = new DBHelpDataContext())
            {
                M_PERSON list = data.M_PERSON.FirstOrDefault(person => person.STAFF_ID == id);
                return list;
            }
        }

        /// <summary>
        /// Get List of M_PERSON  
        /// </summary>
        public List<M_PERSON> GetAllPerson()
        {
            using (var data = new DBHelpDataContext())
            {
                var list = data.M_PERSON.Where(person => person.DEL_FLG == false).ToList();
                return list;
            }
        }
        public bool Insert(M_PERSON person)
        {
            using (var data = new DBHelpDataContext())
            {
                //data.Connection.Open();
                using (var dbContextTransaction = data.Database.BeginTransaction())
                {
                    try
                    {
                        data.M_PERSON.Add(person);
                        data.SaveChanges();
                        dbContextTransaction.Commit();
                        return true;
                    }
                    catch (Exception)
                    {
                        dbContextTransaction.Rollback();
                    }
                }
                return false;
            }
        }
        public bool Update(int id, StaffInfo staffinfo, int personCd, bool changePassFlg, bool removeRole)
        {
            using (var data = new DBHelpDataContext())
            {
                using (var dbContextTransaction = data.Database.BeginTransaction())
                {
                    try
                    {
                        M_PERSON person = data.M_PERSON.FirstOrDefault(c => c.STAFF_ID == id);
                        //If not remove role
                        if (!removeRole)
                        {
                            person.ROLE_CD = staffinfo.STAFF_PERSON.ROLE_CD;
                        }
                        //If change Pass
                        string passSalt = Common.GenaratePasswordSalt();
                        string password = Common.GetMD5EncyptString(staffinfo.STAFF_PERSON.PASSWORD, passSalt);
                        //If not change Pass
                        if (!changePassFlg)
                        {
                            passSalt = staffinfo.STAFF_PERSON.PASSWORD_SALT;
                            password = staffinfo.STAFF_PERSON.PASSWORD;
                        }
                        person.PASSWORD = password;
                        person.PASSWORD_SALT = passSalt;
                        DateTime currentDate = Common.GetCurrentDate();
                        person.UPDATE_DATE = currentDate;
                        person.UPDATE_PERSON_CD = personCd;
                        person.LAST_CHANGE_PWD_DATE = currentDate;
                        person.DEL_FLG = false;
                        if (removeRole)
                        {
                            person.DEL_FLG = true;
                        }

                        data.SaveChanges();
                        dbContextTransaction.Commit();
                        return true;
                    }
                    catch (Exception)
                    {
                        dbContextTransaction.Rollback();
                    }
                }
            }
            return false;
        }

        public M_PERSON GetLastId()
        {
            using (var data = new DBHelpDataContext())
            {
                return data.M_PERSON.ToList().OrderBy(c => c.PERSON_CD).Last();
            }
        }
        public bool ExistPassword(int id)
        {
            using (var data = new DBHelpDataContext())
            {
                var pass = data.M_PERSON.FirstOrDefault(c => c.STAFF_ID == id && c.DEL_FLG == false);
                if (Common.IsNullOrEmpty(pass))
                {
                    return false;
                }
                else
                {
                    return true;
                }
            }

        }

        public string GetStaffNameByPersonCD(int personCD)
        {
            using (var data = new DBHelpDataContext())
            {
                return data.M_PERSON.FirstOrDefault(s => s.PERSON_CD == personCD).M_STAFF.FULL_NAME;
            }
        }
    }
}
