using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Vap.Framework.Authorization;
using Vap.Data.Mapping;

namespace Vap.Plugin.HRA.TestAuthor.Controllers
{
    public class M0101Controller : Controller
    {
        //
        // GET: /M0101/
        [CustomAuthorize]
        public ActionResult Index()
        {
            DBHelpDataContext db = new DBHelpDataContext();
            return View(db.M_STAFFs.Where(o => o.DEL_FLG == false).ToList());
            //return View();
        }

    }
}
