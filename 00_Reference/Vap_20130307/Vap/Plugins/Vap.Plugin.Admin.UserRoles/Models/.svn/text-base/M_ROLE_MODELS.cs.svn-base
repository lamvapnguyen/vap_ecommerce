//Author:       NguyenNA
//Create date:  16/06/2011
//Description:   
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Common;
using HRA_KUMON.Bussiness;

namespace HRA_KUMON.Models
{

    public class M_ROLE_MODELS
    {
        DBHelpDataContext db = null;
        DbTransaction tx = null;
        /// <summary>
        /// Get All roles in system.
        /// </summary>
        /// <param></param>
        /// <returns></returns>
        public List<M_ROLE> getAllRoles()
        {
            List<M_ROLE> listRole = new List<M_ROLE>();
            
            try
            {
                db = new DBHelpDataContext();
                listRole = db.M_ROLEs.Where(o => o.DEL_FLG == false).ToList();
            }
            catch (Exception ex)
            {
                //We can use log4net to track log error.
                throw ex;
            }
            return listRole;

        }


        /// <summary>
        /// Get the Role By ROLE_CD
        /// </summary>
        /// <param name="RoleCD"></param>
        /// <returns></returns>
        internal M_ROLE GetRoleByCD(int RoleCD)
        {
           
            db = new DBHelpDataContext();
            return db.M_ROLEs.FirstOrDefault(m => m.ROLE_CD == RoleCD);
        }
        /// <summary>
        /// Get Role by Name
        /// </summary>
        ///     Author:      Nhan Anh Nguyen
        ///     Create Date: 25/06/2011
        /// <param name="roleName"></param>
        /// <returns></returns>
        internal bool GetRoleByName(string roleName)
        {
            db = new DBHelpDataContext();
            M_ROLE role = db.M_ROLEs.FirstOrDefault(m => m.ROLE_NAME.Equals(roleName));
            //if user role is already existed
            if (!Common.IsNullOrEmpty(role))
            {
                //if existed with del_flg = true
                if (role.DEL_FLG)
                {
                    return false;
                }//if del+flg = false
                else
                {
                    return true;
                }
            }
                //if not existed
            else 
            {
                return false;
            }
        }
        /// <summary>
        /// To check User role be fore editing
        /// </summary>
        ///     Author:      Nhan Anh Nguyen
        ///     Create Date: 25/06/2011
        /// <param name="roleCd,roleName"></param>
        /// <returns></returns>
        internal bool CheckUserRoleBeforeEdit(int roleCd, string roleName)
        {
            bool result = false;
            db = new DBHelpDataContext();
            M_ROLE oldRole = db.M_ROLEs.Where(o => o.ROLE_NAME == roleName && o.DEL_FLG == false).FirstOrDefault();
            if (Common.IsNullOrEmpty(oldRole))
            {
                result = true;
            }
            else
            {
                if (oldRole.ROLE_CD.Equals(roleCd))
                {
                    result = true;
                }

                else
                {
                    result = false;
                }
            }
            return result;

        }
    }
}

    
    

