using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Vap.Framework.Authorization;
using Vap.Commons;

namespace Vap.Plugin.HRA.TestAuthor.Controllers
{
    [HandleError]
    public class HomeController : Controller
    {
        [CustomAuthorize] 
        public ActionResult Index()
        {
            ViewData["Message"] = Common.ParseString("Common functions had been interaged successfully");

            return View();
        }
        [Privilege]
        public ActionResult About()

        {
           
            ViewData["testCommon"] = Common.ParseString("Common functions had been interaged successfully");
            return View();
        }
    }
}
