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
using Vap.Core;
using Vap.Commons;

namespace Vap.Plugin.Users.MyAccount.Commons
{
    public static class clsUserCommon
    {
        /// <summary>
        /// Get all information of the staff logined.
        /// </summary>
        /// <returns></returns>
        public static StaffLoginInfo GetStaffLoginInfo()
        {
            StaffLoginInfo info = new StaffLoginInfo();
            try
            {
                if (!Common.IsNullOrEmpty(HttpContext.Current.Session))
                {
                    if (!Common.IsNullOrEmpty(HttpContext.Current.Session["StaffLoginInfoSection"]))
                    {
                        info = (StaffLoginInfo)HttpContext.Current.Session["StaffLoginInfoSection"];
                    }
                }
            }
            catch { }
            return info;
        }
    }
}
