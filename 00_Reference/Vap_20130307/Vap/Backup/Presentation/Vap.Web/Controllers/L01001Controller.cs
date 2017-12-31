using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Vap.Web.Models;
using Vap.Web.Models.Authorization;
using log4net;

namespace Vap.Web.Controllers
{
    public class L01001Controller : Controller
    {
        private static readonly ILog logger = LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        //
        // GET: /L01001/
        [CustomAuthorize]
        public ActionResult Index()
        {
            try
            {
                clsL01001Models model = new clsL01001Models();
                return View(model.GetAllEvents());
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return View("Error");
            }
        }

    }
}
