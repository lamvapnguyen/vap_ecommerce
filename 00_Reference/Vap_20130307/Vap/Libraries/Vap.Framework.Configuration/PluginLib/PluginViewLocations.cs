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

namespace Vap.Framework.Configuration.PluginLib
{
    [AttributeUsage(AttributeTargets.Assembly)]
    public class PluginViewLocations : Attribute
    {
        public string[] viewLocations { get; set; }
        public bool addLink { get; set; }
        public string name { get; set; }
        public string controller { get; set; }
        public string action { get; set; }

        public PluginViewLocations(string[] viewLocations, bool addLink)
        {
            this.viewLocations = viewLocations;
            this.addLink = addLink;
        }
    }
}
