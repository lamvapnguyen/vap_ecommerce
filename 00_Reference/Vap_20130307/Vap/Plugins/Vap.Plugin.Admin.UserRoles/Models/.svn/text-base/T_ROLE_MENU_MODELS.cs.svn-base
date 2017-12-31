//Author:       NTLam
//Create date:  29/08/2012
//Description:   
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Common;
using System.Web.Mvc;
using System.ComponentModel.DataAnnotations;
using Vap.Framework.Authorization.Models;
using Vap.Data.Mapping;
using Vap.Commons;
using Vap.Plugin.Admin.UserRoles.Dto;
using System.Linq;

namespace Vap.Plugin.Admin.UserRoles.Models
{
    [MetadataType(typeof(RoleMenuInfoDto))]
    public class T_ROLE_MENU_MODELS
    {
        //M_MENU_MODELS menuModels = new M_MENU_MODELS();
        //M_ROLE_MODELS roleModels = new M_ROLE_MODELS();
        M0110_Models model = new M0110_Models();

        DBHelpDataContext db = null;
        DbTransaction trans = null;

        /// <summary>
        /// Add new User Role
        /// </summary>
        /// <remarks>
        ///     Author:      Nhan Anh Nguyen
        ///     Create Date: 25/06/2011
        /// <param name="roleName"></param>
        /// <returns></returns>
        internal bool AddRoleMenu(M_ROLE newlyRole, SortedDictionary<int, string> menuIdAndPermissons)
        {
            db = new DBHelpDataContext();
            bool result = false;
            //get home/Index's menu Url
            M_MENU home = model.getMenuByUrl("Home/Index");
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
                        newlyRole.T_ROLE_MENUs.Add(roleMenu);
                    }
                }
                db.M_ROLEs.InsertOnSubmit(newlyRole);
                db.SubmitChanges();
                result = true;
            }
            catch (Exception ex)
            {
                result = false;
            }
            return result;

        }

        /// <summary>
        /// To get all menu by role CD
        /// </summary>
        ///     Author:      Nhan Anh Nguyen
        ///     Create Date: 25/06/2011
        /// <param name="roleName"></param>
        /// <returns></returns>
        public List<T_ROLE_MENU> GetAllMenuByRoleCd(int roleCd)
        {
            db = new DBHelpDataContext();
            return db.T_ROLE_MENUs.Where(m => m.ROLE_CD == roleCd).ToList();
        }
        /// <summary>
        /// To edit User Role
        /// </summary>
        ///     Author:      Nhan Anh Nguyen
        ///     Create Date: 26/06/2011
        /// <param name="roleName"></param>
        /// <returns></returns>
        internal bool EditRoleMenu(int roleCd, M_ROLE newlyRole, SortedDictionary<int, string> menuIdAndPermissons)
        {
            db = new DBHelpDataContext();
            bool result = false;
            //get home/Index's menu Url
            M_MENU home = model.getMenuByUrl("Home/Index");

            //in case menu not yet assign to role
            T_ROLE_MENU role = db.T_ROLE_MENUs.Where(o => o.MENU_CD == home.MENU_CD
                        && o.ROLE_CD == roleCd).FirstOrDefault();
            if (Common.IsNullOrEmpty(role) && !Common.IsNullOrEmpty(home))
            {
                //assign home menu is full access to role by default 
                menuIdAndPermissons.Add(home.MENU_CD, "2");
            }
            try
            {
                //M_ROLE updateRole = roleModels.GetRoleByCD(roleCd);
                M_ROLE updateRole = db.M_ROLEs.Where(o => o.ROLE_CD == roleCd).FirstOrDefault();

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
                    T_ROLE_MENU roleMenu = db.T_ROLE_MENUs.Where(m => m.MENU_CD == menuCd && m.ROLE_CD == roleCd).FirstOrDefault();
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
                            updateRole.T_ROLE_MENUs.Remove(roleMenu);
                            db.T_ROLE_MENUs.DeleteOnSubmit(roleMenu);
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
                            updateRole.T_ROLE_MENUs.Add(roleMenu);
                        }
                    }
                }
                db.SubmitChanges();
                result = true;
            }
            catch (Exception ex)
            {
                result = false;
            }
            return result;
        }

        /// <summary>
        /// Get all menu assigned to user role
        /// </summary>
        ///     Author:      Nhan Anh Nguyen
        ///     Create Date: 27/06/2011
        /// <param name="roleName"></param>
        /// <returns></returns>
        public RoleMenuInfoDto GetAllMenuPermited(int roleCd)
        {
            db = new DBHelpDataContext();
            RoleMenuInfoDto info = new RoleMenuInfoDto();
            M_ROLE role = db.M_ROLEs.Where(o => o.ROLE_CD == roleCd).FirstOrDefault();

            var menuList = (from t in db.M_MENUs.Where(o => o.DEL_FLG == false && (!o.URL.Contains("M0110/Index") && !o.URL.Contains("Home/Index"))) select t).OrderBy(o => o.SORT_ORDER).ToList();

            RoleItemPermitedDto roleItem = new RoleItemPermitedDto();
            int accessMethod = 0;
            foreach (var item in menuList)
            {
                roleItem = new RoleItemPermitedDto();
                var t_role_menu_item = db.T_ROLE_MENUs.Where(o => o.MENU_CD == item.MENU_CD && o.ROLE_CD == roleCd).FirstOrDefault();
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
        /// create Model for handling eror in save and edit Role - remember previous state
        /// </summary>
        ///     Author:      Nhan Anh Nguyen
        ///     Create Date: 28/06/2011 
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
                    string menuName = menuModels.GetMenuByCd(oneMenucd).MENU_NAME;
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
            roleMenuInfo.menus = menuModels.GetAllMenu();
            roleMenuInfo.RolePermiteds = rolepermites;
            roleMenuInfo.allCompanyFlg = all_company_flg.ToString();
            return roleMenuInfo;
        }
    }
}

