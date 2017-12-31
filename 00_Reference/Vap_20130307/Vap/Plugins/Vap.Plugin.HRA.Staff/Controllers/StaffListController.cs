using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Vap.Data.Mapping;
using System.Data.Linq;
using Vap.Framework.Authorization;

namespace Vap.Plugin.HRA.Staff.Controllers
{
    public class StaffListController : Controller
    {
        //
        // GET: /StaffList/
        [CustomAuthorize]
        public ActionResult Index()
        {
            DBHelpDataContext db = new DBHelpDataContext();
            return View(db.M_STAFFs.Where(o => o.DEL_FLG == false).ToList());
            //return View();
        }

    }
}
