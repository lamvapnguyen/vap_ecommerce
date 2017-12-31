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

namespace Vap.Plugin.Admin.UserRoles.Dto
{
    public class RoleItemPermitedDto
    {
        public int menuCd { get; set; }
        public string menuName { get; set; }
        public int acessMethod { get; set; }
        /*
         * 0: No access
         * 1: Readonly
         * 2: full access.
         */


    }
}
