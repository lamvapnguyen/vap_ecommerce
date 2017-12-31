using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Reflection;
using System.Collections.Generic;
using System.Web.Mvc;

namespace Vap.Framework.Configuration.PluginLib
{
    public class PluginHelper
    {
        public static void InitializePluginsAndLoadViewLocations()
        {
            Assembly[] pluginAssemblies = GetPluginAssemblies();

            List<string> viewLocations = new List<string>();

            foreach (Assembly plugin in pluginAssemblies)
            {
                var pluginAttribute = plugin.GetCustomAttributes(typeof(PluginViewLocations), false).FirstOrDefault() as PluginViewLocations;

                if (pluginAttribute != null)
                    viewLocations.AddRange(pluginAttribute.viewLocations);
            }

            //The PluginViewEngine is used to locate views in the assemlbies 
            ViewEngines.Engines.Clear();
            ViewEngines.Engines.Add(new PluginViewEngine(viewLocations.ToArray()));
        }

        public static List<PluginAction> GetPluginActions()
        {
            Assembly[] pluginAssemblies = GetPluginAssemblies();

            List<PluginAction> pluginLinks = new List<PluginAction>();

            foreach (Assembly plugin in pluginAssemblies)
            {
                var pluginAttribute = plugin.GetCustomAttributes(typeof(PluginViewLocations), false).FirstOrDefault() as PluginViewLocations;

                if (pluginAttribute.addLink)
                {
                    pluginLinks.Add(new PluginAction()
                    {
                        Name = pluginAttribute.name,
                        Action = pluginAttribute.action,
                        Controller = pluginAttribute.controller
                    });
                }
            }

            return pluginLinks;
        }

        private static Assembly[] GetPluginAssemblies()
        {
            IEnumerable<Assembly> loadedPluginAssemblies = AppDomain.CurrentDomain.GetAssemblies().Where(a => a.GetCustomAttributes(typeof(PluginViewLocations), false).Count() > 0).AsEnumerable();
            Assembly[] distinctLoadedPluginAssemblies = loadedPluginAssemblies.Distinct(new DLLComparer()).ToArray();
            return distinctLoadedPluginAssemblies;
        }

        public class PluginAction
        {
            public string Name { get; set; }
            public string Controller { get; set; }
            public string Action { get; set; }
        }

        private class DLLComparer : IEqualityComparer<Assembly>
        {
            #region IEqualityComparer<Assembly> Members

            public bool Equals(Assembly x, Assembly y)
            {
                return x.ManifestModule.ScopeName == y.ManifestModule.ScopeName;
            }

            public int GetHashCode(Assembly obj)
            {
                return obj.ManifestModule.ScopeName.GetHashCode();
            }

            #endregion
        }
    }
}
