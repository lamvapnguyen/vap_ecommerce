using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Vap.Commons;

namespace Vap.Plugin.HRA.TestAuthor.Controllers
{
    public class TestCommonFunctionsController : Controller
    {
        //
        // GET: /TestCommonFunctions/

        public ActionResult Index()
        {
            ViewData["Message"] = Common.ParseString("Common functions had been interaged successfully");

            return View();
        }

    }
}
