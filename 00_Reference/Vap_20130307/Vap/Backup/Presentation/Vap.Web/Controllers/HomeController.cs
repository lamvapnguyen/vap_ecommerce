using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Vap.Core;
using Vap.Commons;
using log4net;
using Vap.Web.Models.Authorization;

namespace Vap.Web.Controllers
{
    [HandleError]
    public class HomeController : Controller
    {
        private static readonly ILog logger = LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        [CustomAuthorize]
        public ActionResult Index()
        {
            try
            {
                ViewData["Message"] = "Welcome to ASP.NET MVC!";
                throw new Exception("Data is being used by another user. Please refresh data and try again.");
            }
            catch (Exception ex)
            {
                logger.Error(ex);
            }

            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        /// <summary>
        /// To list all css design.
        /// </summary>
        /// <returns></returns>
        public ActionResult ViewStandards()
        {
            List<Object> list = new List<object>();
            list.Add(new { ID = 1, Name = "Item 1" });
            list.Add(new { ID = 2, Name = "Item 2" });
            list.Add(new { ID = 3, Name = "Item 3" });
            list.Add(new { ID = 4, Name = "Item 4" });
            list.Add(new { ID = 5, Name = "Item 5" });
            ViewData["ItemList"] = new SelectList(list, "ID", "Name");
            return View();
        }

        /// <summary>
        /// To view the design modal of main tempalte
        /// </summary>
        /// <returns></returns>
        public ActionResult MainTemplate()
        {
            return View();
        }

        /// <summary>
        /// Get navigation.
        /// </summary>
        /// <param name="act"></param>
        /// <param name="cont"></param> 
        /// <remarks>
        ///     Author: Nguyen Tien Lam
        /// </remarks>
        /// <returns></returns>
        public ActionResult NavigationList(string act, string cont)
        {
            try
            {
                List<NavigationItem> list = new List<NavigationItem>();
                List<NavigationItem> listOld = new List<NavigationItem>();
                M_MENU_MODELS model = new M_MENU_MODELS();
                int personCD = 0;

                if (!Common.IsNullOrEmpty(Session["StaffLoginInfoSection"]))
                {
                    StaffLoginInfo info = (StaffLoginInfo)Session["StaffLoginInfoSection"];
                    if (!Common.IsNullOrEmpty(info))
                    {
                        personCD = info.PERSON_CD;
                    }
                }

                list = model.GetNavigations(personCD, Common.ParseString(act), Common.ParseString(cont));
                list.Reverse();
                return PartialView("NavigationList", list);
            }
            catch
            {
                return View("Error");
            }

        }

        /// <summary>
        /// Temmp
        /// </summary>
        /// <returns></returns>
        public ActionResult Right()
        {
            return View();
        }
        public ActionResult Left()
        {
            return View();
        }
        public ActionResult Categories()
        {
            return View();
        }

    }
}
