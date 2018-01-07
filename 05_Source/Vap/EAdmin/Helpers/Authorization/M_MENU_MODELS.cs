//Author:       Nguyen Tien Lam
//Date created: 26/08/2012
//Description: 

using Vap.EAdmin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI.WebControls;
using Vap.Core.Com;

namespace Vap.EAdmin.Helpers.Authorization
{
    public class M_MENU_MODELS
    {

        /// <summary>
        /// Get the right type of user for the URL.
        /// </summary>
        /// <param name="actionName"></param>
        /// <param name="controllerName"></param>
        /// <remarks>
        ///     Author:      Nguyen Tien Lam
        ///     Create Date: 20/05/2011
        /// </remarks>
        /// <returns>
        ///     0: Not access.
        ///     1: ReadOnly.
        ///     2: Full Access.
        /// </returns>
        public int GetRightTypeToAccess(string userID, string actionName, string controllerName)
        {
            int RightType = 0;
            //userID = Common.GetShortStaffID(userID).ToString();
            try
            {
                string url = controllerName.Trim() + "/" + actionName.Trim();
                DBHelpDataContext db = new DBHelpDataContext();
                T_ROLE_MENU tRoleMenu = (from p in db.M_PERSON
                                         from r in db.M_ROLE
                                         from t in db.T_ROLE_MENU
                                         from m in db.M_MENU
                                         where
                                             p.USER_ID == userID &&
                                             p.ROLE_CD == r.ROLE_CD &&
                                             r.ROLE_CD == t.ROLE_CD &&
                                             t.MENU_CD == m.MENU_CD &&
                                             m.URL.Trim() == url
                                         select t).FirstOrDefault();
                if (tRoleMenu != null)
                {
                    RightType = tRoleMenu.READONLY == true ? 1 : 2;
                }

            }
            catch
            {
                RightType = 0;
            }
            return RightType;

        }

        /// <summary>
        /// Get all root menu. (Root menu is the menu doesn't have parrent)
        /// </summary>
        /// <remarks>
        /// Author:      Nguyen Tien Lam
        /// Create Date: 20/05/2011
        /// </remarks>
        /// <returns></returns>
        public List<M_MENU> GetAllRootMenus()
        {
            DBHelpDataContext db = new DBHelpDataContext();

            List<M_MENU> list = new List<M_MENU>();

            try
            {
                list = db.M_MENU.Where(o => o.DEL_FLG == false && (o.PARENT_MENU_CD == null)).OrderBy(o => o.SORT_ORDER).ToList();
            }
            catch (Exception ex)
            {
                //Log(ex)
                throw ex;
            }
            finally
            {
                db.Dispose();
            }
            return list;
        }

        /// <summary>
        ///  Get all root menu by person cd.
        /// </summary>
        /// <param name="person_CD"></param>
        /// <remarks>
        ///     Author:      Nguyen Tien Lam
        ///     Create Date: 16/06/2011
        /// </remarks>
        /// <returns></returns>
        internal List<M_MENU> GetRootMenusByPersonCD(int person_cd)
        {
            DBHelpDataContext db = new DBHelpDataContext();
            List<M_MENU> list = new List<M_MENU>();
            try
            {
                list = (from m in db.M_MENU
                        from t in db.T_ROLE_MENU
                        from r in db.M_ROLE
                        from p in db.M_PERSON
                        where
                             p.ROLE_CD == r.ROLE_CD &&
                             r.ROLE_CD == t.ROLE_CD &&
                             t.MENU_CD == m.MENU_CD &&
                             p.PERSON_CD == person_cd &&
                             m.DEL_FLG == false
                        select m).OrderBy(o => o.SORT_ORDER).ToList();

            }
            catch (Exception ex)
            {
                //Log(ex)
                throw ex;
            }
            finally
            {
                db.Dispose();
            }
            return list;
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
        /// Get All Menu
        /// </summary>
        /// <remarks>
        ///     Author:      Nhan Anh Nguyen
        ///     Create Date: 24/05/2011
        /// </remarks>
        /// <param></param>
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
        /// Get all menu item and it's menu parent to show navigation. (Don't show the menu parent that this person can't access)
        /// </summary>
        /// <param name="personCD"></param>
        /// <param name="action"></param>
        /// <param name="controller"></param>
        /// <remarks>
        ///     Author:      Nguyen Tien Lam
        ///     Create Date: 06/07/2011
        /// <returns></returns>
        public List<NavigationItem> GetNavigations(int personCD, string action, string controller)
        {
            List<NavigationItem> list = new List<NavigationItem>();

            if (!action.Trim().ToLower().Equals("index"))
            {
                action = "Index";
            }
            action = action.Trim();
            DBHelpDataContext db = new DBHelpDataContext();
            string url = controller + "/" + action;
            M_MENU theMenu = db.M_MENU.Where(o => o.URL.ToUpper().Trim() == url.ToLower().Trim()).FirstOrDefault();
            NavigationItem navigationItem = new NavigationItem();
            if (theMenu != null)
            {
                navigationItem = new NavigationItem(theMenu.MENU_NAME, theMenu.ActionName, theMenu.ControlName, true,theMenu.MENU_TYPE);
                list.Add(navigationItem);
                if (theMenu.PARENT_MENU_CD.HasValue)
                {
                    this.AddNavigationItem(theMenu.PARENT_MENU_CD.Value, personCD, list);

                }
            }
            return list;
        }

        /// <summary>
        /// Add menu item to navigation list.
        /// </summary>
        /// <param name="parentMenuCD"></param>
        /// <param name="personCD"></param>
        /// <param name="list"></param>
        /// <remarks>
        ///     Author:      Nguyen Tien Lam
        ///     Create Date: 06/07/2011
        /// </remarks>
        private void AddNavigationItem(int parentMenuCD, int personCD, List<NavigationItem> list)
        {
            DBHelpDataContext db = new DBHelpDataContext();
            M_MENU theMenu = db.M_MENU.Where(o => o.MENU_CD == parentMenuCD).FirstOrDefault();
            bool isAccess = (from m in db.M_MENU
                             from t in db.T_ROLE_MENU
                             from r in db.M_ROLE
                             from p in db.M_PERSON
                             where
                                  p.ROLE_CD == r.ROLE_CD &&
                                  r.ROLE_CD == t.ROLE_CD &&
                                  t.MENU_CD == m.MENU_CD &&
                                  p.PERSON_CD == personCD &&
                                  m.MENU_CD == parentMenuCD
                             select m
                              ).FirstOrDefault() != null ? true : false;

            NavigationItem navigationItem = new NavigationItem();
            if (theMenu != null)
            {
                if (isAccess)
                {
                    navigationItem = new NavigationItem(theMenu.MENU_NAME, theMenu.ActionName, theMenu.ControlName, false,theMenu.MENU_TYPE);
                    list.Add(navigationItem);
                }
                if (theMenu.PARENT_MENU_CD.HasValue)
                {
                    this.AddNavigationItem(theMenu.PARENT_MENU_CD.Value, personCD, list);

                }
            }
        }
        /// <summary>
        /// get Menu by URL
        /// </summary>
        /// <param name="URL"></param>
        /// <remarks>
        ///     Author:     Nhan Anh Nguyen
        ///     Create Date: 17/08/2011
        /// </remarks>
        public M_MENU getMenuByUrl(string menuUrl) {
            DBHelpDataContext db = new DBHelpDataContext();
            M_MENU menu = db.M_MENU.Where(o => o.URL.Contains(Common.replaceSpaces(menuUrl))).FirstOrDefault();
            if(!Common.IsNullOrEmpty(menu)){//have menu 
                bool isInsensity = String.Equals(menu.URL, menuUrl, StringComparison.OrdinalIgnoreCase);
                if(isInsensity){//ignore insensity
                    return menu;
                }
            }else{
                menu = null;
            }
            return menu;
        }
    }
}
