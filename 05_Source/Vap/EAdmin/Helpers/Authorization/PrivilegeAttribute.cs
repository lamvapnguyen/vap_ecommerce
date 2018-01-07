//Author: Nguyen Tien Lam
//Create date: 20/07/2011

using Vap.EAdmin.Dto;
using System.Web;
using System.Web.Mvc;
using Vap.Core.Com;

namespace Vap.EAdmin.Helpers.Authorization
{
    public class PrivilegeAttribute : AuthorizeAttribute
    {
        public IFormsAuthenticationService formsService { get; set; }

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
                if (filterContext.HttpContext.Request.IsAjaxRequest())
                {
                    filterContext.Result = new JsonResult();
                }
                else
                {
                    filterContext.Result = new RedirectResult(System.Web.Security.FormsAuthentication.LoginUrl + "?returnUrl=" +
                    filterContext.HttpContext.Server.UrlEncode(filterContext.HttpContext.Request.RawUrl));
                }
                return;
            }
            if (filterContext.HttpContext.User.Identity.IsAuthenticated)
            {

                if (filterContext.HttpContext.User.Identity != null)
                {
                    //Check the access type
                    int RightType = 0;
                    RightType = new M_MENU_MODELS().GetRightTypeToAccess(filterContext.HttpContext.User.Identity.Name, "Index", filterContext.ActionDescriptor.ControllerDescriptor.ControllerName);
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
}
