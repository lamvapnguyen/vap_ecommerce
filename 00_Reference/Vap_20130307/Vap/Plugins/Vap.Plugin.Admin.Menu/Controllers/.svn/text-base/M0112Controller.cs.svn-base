using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Vap.Plugin.Admin.Menu.Models;
using Vap.Data.Mapping;

namespace Vap.Plugin.Admin.Menu.Controllers
{
    public class M0112Controller : Controller
    {
       //
            // GET: /Menu/

            public ActionResult Index()
            {
                try
                {
                    return View(new M0112Models().GetAllMenus());
                }
                catch
                {
                    return View("Error");
                }
            }

            //
            // GET: /Menu/Details/5

            public ActionResult Details(int id)
            {
                return View();
            }

            //
            // GET: /Menu/Create

            public ActionResult Create()
            {
                M0112Models menuModels = new M0112Models();
                if (!ViewData.ContainsKey("Menus"))
                {
                    ViewData["Menus"] = new SelectList(menuModels.GetAllMenus(), "MENU_CD", "MENU_NAME");
                }

                //return PartialView("frmCreate");
                return View();
            }

            //
            // POST: /Menu/Create

            [HttpPost]
            public ActionResult Create(FormCollection collection)
            {

                try
                {
                    M0112Models menuModels = new M0112Models();
                    M_MENU theMenu = new M_MENU();
                    TryUpdateModel(theMenu);
                    if (menuModels.SaveMenu(theMenu))
                        return RedirectToAction("Index");
                    else return View("Error");

                    //return PartialView("ucMenuList", new MenuModels().GetAllMenus());
                }
                catch
                {
                    return View("Error");
                }
            }

            //
            // GET: /Menu/Edit/5

            public ActionResult Edit(string id)
            {
                try
                {
                    M0112Models menuModels = new M0112Models();
                    if (!ViewData.ContainsKey("Menus"))
                    {
                        ViewData["Menus"] = new SelectList(menuModels.GetAllMenus(), "MENU_CD", "MENU_NAME");
                    }
                    return View(menuModels.GetMenuByCD(id));

                }
                catch
                {

                    return View("Error");
                }
            }

            //
            // POST: /Menu/Edit/5

            [HttpPost]
            public ActionResult Edit(string id, FormCollection collection)
            {
                try
                {
                    M0112Models menuModels = new M0112Models();
                    M_MENU theMenu = new M_MENU();
                    if (!string.IsNullOrEmpty(id))
                        theMenu = menuModels.GetMenuByCD(id);
                    if (theMenu == null)
                        return View("Error");

                    TryUpdateModel(theMenu);

                    if (menuModels.SaveMenu(theMenu))
                        return RedirectToAction("Index");
                    else return View("Error");

                    //return PartialView("ucMenuList", new MenuModels().GetAllMenus());
                }
                catch
                {
                    return View("Error");
                }
            }

            //
            // GET: /Menu/Delete/5

            public ActionResult Delete(int id)
            {
                return View();
            }

            //
            // POST: /Menu/Delete/5

            [HttpPost]
            public ActionResult Delete(int id, FormCollection collection)
            {
                try
                {
                    // TODO: Add delete logic here

                    return RedirectToAction("Index");
                }
                catch
                {
                    return View();
                }
            }
        }

}

