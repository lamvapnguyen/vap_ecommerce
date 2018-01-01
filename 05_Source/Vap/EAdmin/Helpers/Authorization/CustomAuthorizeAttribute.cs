//Author:       Nguyen Tien Lam
//Date created: 26/Aug/2011
//Description: To overwrite AuthorizeAttribute

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Vap.Core.Com;

namespace EAdmin.Helpers.Authorization
{
    public class CustomAuthorizeAttribute : AuthorizeAttribute
    {

        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            base.OnAuthorization(filterContext);

            //Check session time out
            bool isSessionTimout = true;
            if (!Common.IsNullOrEmpty(HttpContext.Current.Session))
            {
                if (!Common.IsNullOrEmpty(HttpContext.Current.Session["StaffLoginInfoSection"]))
                {
                    StaffLoginInfo info = (StaffLoginInfo)HttpContext.Current.Session["StaffLoginInfoSection"];
                    if (!Common.IsNullOrEmpty(info))
                    {
                        isSessionTimout = (Common.IsNullOrEmpty(info.STAFF_ID)) ? true : false;
                    }
                }
            }

            if (isSessionTimout || filterContext.HttpContext.User.Identity == null || !filterContext.HttpContext.User.Identity.IsAuthenticated)
            {
                filterContext.Result = new RedirectResult(System.Web.Security.FormsAuthentication.LoginUrl + "?returnUrl=" +
                filterContext.HttpContext.Server.UrlEncode(filterContext.HttpContext.Request.RawUrl));
                return;
            }
            if (filterContext.HttpContext.User.Identity.IsAuthenticated)
                if (filterContext.HttpContext.User.Identity != null)
                {
                    //Check the access type
                    int RightType = 0;
                    RightType = new CustomAuthorizModels().GetRightTypeToAccess(filterContext.HttpContext.User.Identity.Name, filterContext.ActionDescriptor.ActionName, filterContext.ActionDescriptor.ControllerDescriptor.ControllerName);
                    if (RightType == 0)
                    {
                        filterContext.Result = new ViewResult { ViewName = "UnAuthorize" };
                    }
                    else if (RightType == 1)
                    {
                        filterContext.HttpContext.Session["CommonIsReadOnly"] = @"disabled = 'disabled' ";
                    }
                    else if (RightType == 2)
                    {
                        filterContext.HttpContext.Session["CommonIsReadOnly"] = string.Empty;
                    }

                }
        }
    }


}
