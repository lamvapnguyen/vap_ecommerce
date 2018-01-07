using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Threading;
using System.Globalization;

namespace Vap.EAdmin.Controllers
{
    public class HomeController : Controller
    {
        public CultureInfo CultrureInfo { get; private set; }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult ChangeLang(string lang)
        {
            if(lang!=null)
            {
                Thread.CurrentThread.CurrentCulture = CultureInfo.CreateSpecificCulture(lang);
                Thread.CurrentThread.CurrentUICulture = new CultureInfo(lang);
            }
            HttpCookie cookie = new HttpCookie("Language");
            cookie.Value = lang;
            Response.Cookies.Add(cookie);
            return RedirectToAction("Index");
        }

    }
}