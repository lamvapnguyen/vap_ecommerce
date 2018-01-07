using System;
using System.Data;
using System.Linq;
using System.Web.UI.WebControls;
using System.Collections.Generic;
using Vap.Core.Com;
using System.Web.Mvc;
using Vap.EAdmin.Dto;

namespace Vap.EAdmin.Models
{
    public class M0110_Models
    {
        DBHelpDataContext db = null;

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
                listRole = db.M_ROLE.Where(o => o.DEL_FLG == false).ToList();
            }
            catch (Exception ex)
            {
                //We can use log4net to track log error.
                throw ex;
            }
            return listRole;

        }

        /// <summary>
        /// Get all menu of system
        /// </summary>
        /// <returns></returns>
        internal List<M_MENU> GetAllMenu()
        {
            DBHelpDataContext db = new DBHelpDataContext();
            //query except 2 menu above
            List<M_MENU> allMenus = (from t in db.M_MENU.Where(o => o.DEL_FLG == false
                    && (!o.URL.Contains("M0110/Index") && !o.URL.Contains("Home/Index")))
                                     select t).OrderBy(o => o.SORT_ORDER).ToList();

            return allMenus;
        }

        /// <summary>
        /// Get Menu by menu CD
        /// </summary>
        /// <param name="menuCd"></param>
        /// <returns></returns>
        internal M_MENU GetMenuByCd(int menuCd)
        {
            DBHelpDataContext db = new DBHelpDataContext();
            return db.M_MENU.Where(m => m.MENU_CD == menuCd && (!m.MENU_NAME.Equals("M0110 User Role"))).FirstOrDefault();
        }

        /// <summary>
        /// Get all menu that had been privilage
        /// </summary>
        /// <param name="roleCd"></param>
        /// <returns></returns>
        public RoleMenuInfoDto GetAllMenuPermited(int roleCd)
        {
            db = new DBHelpDataContext();
            RoleMenuInfoDto info = new RoleMenuInfoDto();
            M_ROLE role = db.M_ROLE.Where(o => o.ROLE_CD == roleCd).FirstOrDefault();

            var menuList = (from t in db.M_MENU.Where(o => o.DEL_FLG == false && (!o.URL.Contains("M0110/Index") && !o.URL.Contains("Home/Index"))) select t).OrderBy(o => o.SORT_ORDER).ToList();

            RoleItemPermitedDto roleItem = new RoleItemPermitedDto();
            int accessMethod = 0;
            foreach (var item in menuList)
            {
                roleItem = new RoleItemPermitedDto();
                var t_role_menu_item = db.T_ROLE_MENU.Where(o => o.MENU_CD == item.MENU_CD && o.ROLE_CD == roleCd).FirstOrDefault();
                if (Common.IsNullOrEmpty(t_role_menu_item))
                {
                    accessMethod = 0;
                }
                else
                {
                    if (t_role_menu_item.READONLY)
                    {
                        accessMethod = 1;
                    }
                    else
                        accessMethod = 2;
                }
                roleItem.menuCd = item.MENU_CD;
                roleItem.menuName = item.MENU_NAME;
                roleItem.acessMethod = accessMethod;
                roleItem.menuName = item.MENU_NAME;
                info.allCompanyFlg = role.ALL_COMPANY_FLAG.ToString();
                info.roleCd = role.ROLE_CD;
                info.roleName = role.ROLE_NAME;
                info.RolePermiteds.Add(roleItem);
                info.menus = menuList;
            }
            return info;
        }

        /// <summary>
        /// Get role by role name
        /// </summary>
        /// <param name="roleName"></param>
        /// <returns></returns>
        internal bool GetRoleByName(string roleName)
        {
            db = new DBHelpDataContext();
            M_ROLE role = db.M_ROLE.FirstOrDefault(m => m.ROLE_NAME.Equals(roleName));
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

        internal bool AddRoleMenu(M_ROLE newlyRole, SortedDictionary<int, string> menuIdAndPermissons)
        {
            db = new DBHelpDataContext();
            bool result = false;
            //get home/Index's menu Url
            M_MENU home = this.getMenuByUrl("Home/Index");
            if (!Common.IsNullOrEmpty(home))
            {
                //assign home menu is full access to role by default 
                menuIdAndPermissons.Add(home.MENU_CD, "2");
            }

            try
            {
                foreach (var item in menuIdAndPermissons.Keys)
                {
                    string key = Common.ParseString(menuIdAndPermissons[item]);

                    if (key.Equals("1") || key.Equals("2"))
                    {
                        T_ROLE_MENU roleMenu = new T_ROLE_MENU();
                        roleMenu.MENU_CD = item;
                        roleMenu.ROLE_CD = newlyRole.ROLE_CD;
                        if (key.Equals("1"))
                        {
                            bool readOnly = true;
                            roleMenu.READONLY = readOnly;
                        } if (key.Equals("2"))
                        {
                            bool readOnly = false;
                            roleMenu.READONLY = readOnly;
                        }
                        newlyRole.T_ROLE_MENU.Add(roleMenu);
                    }
                }
                db.M_ROLE.Add(newlyRole);
                db.SaveChanges();
                result = true;
            }
            catch (Exception)
            {
                result = false;
            }
            return result;

        }

        public M_MENU getMenuByUrl(string menuUrl)
        {
            DBHelpDataContext db = new DBHelpDataContext();
            M_MENU menu = db.M_MENU.Where(o => o.URL.Contains(Common.replaceSpaces(menuUrl))).FirstOrDefault();
            if (!Common.IsNullOrEmpty(menu))
            {//have menu 
                bool isInsensity = String.Equals(menu.URL, menuUrl, StringComparison.OrdinalIgnoreCase);
                if (isInsensity)
                {//ignore insensity
                    return menu;
                }
            }
            else
            {
                menu = null;
            }
            return menu;
        }

        /// <summary>
        /// create Model for handling eror in save and edit Role - remember previous state
        /// </summary>
        /// <param name="FormCollection form, string roleName, bool all_company_flg"></param>
        /// <returns></returns>
        public RoleMenuInfoDto CreateRoleMenuInfo(FormCollection form, string roleName, bool all_company_flg)
        {
            RoleMenuInfoDto roleMenuInfo = new RoleMenuInfoDto();
            roleMenuInfo.roleName = roleName;
            roleMenuInfo.allCompanyFlg = form["all_company_flg"];
            List<RoleItemPermitedDto> rolepermites = new List<RoleItemPermitedDto>();
            foreach (var key in form)
            {
                if (key.ToString().StartsWith("readonly"))
                {
                    RoleItemPermitedDto rolePermited = new RoleItemPermitedDto();
                    int oneMenucd = Common.ParseInt(Common.ParseString(key).Replace("readonly", ""));
                    string menuName = this.GetMenuByCd(oneMenucd).MENU_NAME;
                    string oneReadonly = form[key.ToString()].Trim();
                    if (oneReadonly.Equals("2"))
                    {
                        rolePermited.acessMethod = 2;
                    }
                    else if (oneReadonly.Equals("1"))
                    {
                        rolePermited.acessMethod = 1;
                    }
                    else if (oneReadonly.Equals("0"))
                    {
                        rolePermited.acessMethod = 0;
                    }
                    rolePermited.menuCd = oneMenucd;
                    rolePermited.menuName = menuName;
                    rolepermites.Add(rolePermited);
                }
            }
            roleMenuInfo.menus = this.GetAllMenu();
            roleMenuInfo.RolePermiteds = rolepermites;
            roleMenuInfo.allCompanyFlg = all_company_flg.ToString();
            return roleMenuInfo;
        }


        /// <summary>
        /// To check User role be fore editing
        /// </summary>
        /// <param name="roleCd,roleName"></param>
        /// <returns></returns>
        internal bool CheckUserRoleBeforeEdit(int roleCd, string roleName)
        {
            bool result = false;
            db = new DBHelpDataContext();
            M_ROLE oldRole = db.M_ROLE.Where(o => o.ROLE_NAME == roleName && o.DEL_FLG == false).FirstOrDefault();
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

        /// <summary>
        /// Get the Role By ROLE_CD
        /// </summary>
        /// <param name="RoleCD"></param>
        /// <returns></returns>
        internal M_ROLE GetRoleByCD(int RoleCD)
        {

            db = new DBHelpDataContext();
            return db.M_ROLE.FirstOrDefault(m => m.ROLE_CD == RoleCD);
        }


        /// <summary>
        /// Get staff name by person cd
        /// </summary>
        /// <param name="personCD"></param>
        /// <returns></returns>
        public string GetStaffNameByPersonCD(int personCD)
        {
            using (var data = new DBHelpDataContext())
            {
                return data.M_PERSON.FirstOrDefault(s => s.PERSON_CD == personCD).M_STAFF.FULL_NAME;
            }
        }

        /// <summary>
        /// Edit role menu
        /// </summary>
        /// <param name="roleCd"></param>
        /// <param name="newlyRole"></param>
        /// <param name="menuIdAndPermissons"></param>
        /// <returns></returns>
        internal bool EditRoleMenu(int roleCd, M_ROLE newlyRole, SortedDictionary<int, string> menuIdAndPermissons)
        {
            db = new DBHelpDataContext();
            bool result = false;
            //get home/Index's menu Url
            M_MENU home = this.getMenuByUrl("Home/Index");

            //in case menu not yet assign to role
            T_ROLE_MENU role = db.T_ROLE_MENU.Where(o => o.MENU_CD == home.MENU_CD
                        && o.ROLE_CD == roleCd).FirstOrDefault();
            if (Common.IsNullOrEmpty(role) && !Common.IsNullOrEmpty(home))
            {
                //assign home menu is full access to role by default 
                menuIdAndPermissons.Add(home.MENU_CD, "2");
            }
            try
            {
                //M_ROLE updateRole = roleModels.GetRoleByCD(roleCd);
                M_ROLE updateRole = db.M_ROLE.Where(o => o.ROLE_CD == roleCd).FirstOrDefault();

                if (Common.IsNullOrEmpty(updateRole))
                {
                    return false;
                }
                updateRole.ROLE_NAME = newlyRole.ROLE_NAME;
                updateRole.ALL_COMPANY_FLAG = newlyRole.ALL_COMPANY_FLAG;
                updateRole.UPDATE_DATE = newlyRole.UPDATE_DATE;
                updateRole.UPDATE_PERSON_CD = newlyRole.UPDATE_PERSON_CD;
                foreach (var menuCd in menuIdAndPermissons.Keys)
                {
                    string key = Common.ParseString(menuIdAndPermissons[menuCd]);
                    T_ROLE_MENU roleMenu = db.T_ROLE_MENU.Where(m => m.MENU_CD == menuCd && m.ROLE_CD == roleCd).FirstOrDefault();
                    if (!Common.IsNullOrEmpty(roleMenu))
                    {
                        if (key.Equals("1") || key.Equals("2"))
                        {
                            if (key.Equals("1"))
                            {
                                bool readOnly = true;
                                roleMenu.READONLY = readOnly;
                            }
                            if (key.Equals("2"))
                            {
                                bool readOnly = false;
                                roleMenu.READONLY = readOnly;
                            }
                        }
                        else
                        {
                            updateRole.T_ROLE_MENU.Remove(roleMenu);
                            db.T_ROLE_MENU.Remove(roleMenu);
                        }
                    }
                    else
                    {
                        roleMenu = new T_ROLE_MENU();
                        roleMenu.ROLE_CD = roleCd;
                        roleMenu.MENU_CD = menuCd;
                        if (key.Equals("1") || key.Equals("2"))
                        {
                            if (key.Equals("1"))
                            {
                                bool readOnly = true;
                                roleMenu.READONLY = readOnly;
                            }
                            if (key.Equals("2"))
                            {
                                bool readOnly = false;
                                roleMenu.READONLY = readOnly;
                            }
                            updateRole.T_ROLE_MENU.Add(roleMenu);
                        }
                    }
                }
                db.SaveChanges();
                result = true;
            }
            catch (Exception)
            {
                result = false;
            }
            return result;
        }
    }
}
