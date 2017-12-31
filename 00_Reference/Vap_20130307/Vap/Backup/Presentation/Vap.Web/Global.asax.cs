using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Hosting;
using Vap.Framework.Configuration.PluginLib;

namespace Vap.Web
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class MvcApplication : System.Web.HttpApplication
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            //routes.MapRoute(
            //    "Default", // Route name
            //    "{controller}/{action}/{id}", // URL with parameters
            //    new { controller = "Home", action = "Index", id = UrlParameter.Optional } // Parameter defaults
            //);
            routes.MapRoute(
                    "Default",
                    "{controller}/{action}/{id}",
                    new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                    new string[] { "Vap.Web.Controllers", "Vap.Framework.Authorization.Controllers" }  // <------------New string array with namespaces to search
                );
        }

        //protected void Application_Start()
        //{
        //    AreaRegistration.RegisterAllAreas();

        //    HostingEnvironment.RegisterVirtualPathProvider(new AssemblyResourceProvider());

        //    ViewEngines.Engines.Clear();
        //    ViewEngines.Engines.Add(new PluginViewEngine(new string[] { "~/Plugins/Vap.Plugin.Olt.Category.dll/Vap.Plugin.Olt.Category.Views.{1}.{0}.aspx" }));
        //    //ViewEngines.Engines.Add(new PluginViewEngine(new string[] { "~/Plugins/Vap.Plugin.Olt.Category.dll/Vap.Plugin.Olt.Category.Views.{1}.{0}.aspx" }));

        //    RegisterRoutes(RouteTable.Routes);
        //}

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            HostingEnvironment.RegisterVirtualPathProvider(new AssemblyResourceProvider());

            PluginHelper.InitializePluginsAndLoadViewLocations();

            RegisterRoutes(RouteTable.Routes);
        }
    }
}