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
using Vap.Data.Mapping;
using System.Data.Linq;
using System.Collections.Generic;
using Vap.Commons;

namespace Vap.Plugin.Admin.Menu.Models
{
    public class M0112Models
    {

        #region Private Fields
        DBHelpDataContext db = null;

        #endregion

        public Table<M_MENU> Menus;

        public M0112Models()
        {
            Menus = new DBHelpDataContext().M_MENUs;
        }

        /// <summary>
        /// Get all root menu. (Root menu is the menu doesn't have parrent)
        /// </summary>
        /// <returns></returns>
        public List<M_MENU> GetAllRootMenus()
        {
            /*
            * Author:       Nguyen Tien Lam
            * Date created: 05/20/2011
            * Desc:         Get all root menu.
            * Date update:  MM/dd/yyyy   
            * Upadate desc: 
            */

            db = new DBHelpDataContext();
            List<M_MENU> list = new List<M_MENU>();

            try
            {
                list = db.M_MENUs.Where(o => o.DEL_FLG == false && (o.PARENT_MENU_CD == 0 || o.PARENT_MENU_CD == null)).OrderBy(o => o.SORT_ORDER).ToList();
            }
            catch
            {
                //Log(ex)
            }
            finally
            {
                db.Connection.Close();
            }
            return list;
        }

        /// <summary>
        /// Get all menu.
        /// </summary>
        /// <returns></returns>
        public List<M_MENU> GetAllMenus()
        {
            /*
           * Author:       Nguyen Tien Lam
           * Date created: 05/20/2011
           * Desc:         Get all menu.
           * Date update:  MM/dd/yyyy   
           * Upadate desc: 
           */

            db = new DBHelpDataContext();
            List<M_MENU> list = new List<M_MENU>();

            try
            {
                list = db.M_MENUs.Where(o => o.DEL_FLG == false).OrderBy(o => o.SORT_ORDER).ToList();
            }
            catch
            {
                //Log(ex)
            }
            finally
            {
                db.Connection.Close();
            }
            return list;
        }

        internal bool SaveMenu(M_MENU theMenu)
        {
            db = new DBHelpDataContext();
            try
            {



                theMenu.URL = theMenu.GetControlName() + "/" + theMenu.GetActionName();
                db.M_MENUs.InsertOnSubmit(theMenu);

                //if(!this.IsExitEntryFollowCD(theMenu.MENU_CD))
                //    Menus.InsertOnSubmit(theMenu);
                ////else if (Menus.GetOriginalEntityState(theMenu) == null)
                //else
                //{
                //    Menus.Attach(theMenu);
                //    Menus.Context.Refresh(RefreshMode.KeepCurrentValues, theMenu);
                //}

                db.M_MENUs.Context.SubmitChanges();
                return true;
            }
            catch
            {
                return false;
            }
            finally
            {
                if (db.Connection.State == System.Data.ConnectionState.Open)
                    db.Connection.Close();
            }
        }

        internal M_MENU GetMenuByCD(string id)
        {
            /*
          * Author:       Nguyen Tien Lam
          * Date created: 05/23/2011
          * Desc:         Get all menu.
          * Date update:  MM/dd/yyyy   
          * Upadate desc: 
          */

            db = new DBHelpDataContext();
            M_MENU theMenu = new M_MENU();
            try
            {
                //theMenu = db.M_MENUs.Where(o => o.MENU_CD == id).FirstOrDefault();
                theMenu = Menus.Where(o => o.MENU_CD == Common.ParseInt(id)).FirstOrDefault();
            }
            catch
            {
                //Log(ex)
            }
            finally
            {
                db.Connection.Close();
            }
            return theMenu;
        }
        private bool IsExitEntryFollowCD(string Code)
        {

            /*
          * Author:       Nguyen Tien Lam
          * Date created: 05/23/2011
          * Desc:         Get all menu.
          * Date update:  MM/dd/yyyy   
          * Upadate desc: 
          */

            db = new DBHelpDataContext();
            try
            {
                var theMenu = Menus.Where(o => o.MENU_CD == Common.ParseInt(Code)).Single();
                if (theMenu != null)
                    return true;
            }
            catch
            {
                //Log(ex)
            }
            finally
            {
                db.Connection.Close();
            }
            return false;
        }
    }

}
