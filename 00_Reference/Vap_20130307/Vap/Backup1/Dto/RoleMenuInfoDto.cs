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
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using Vap.Data.Mapping;

namespace Vap.Plugin.Admin.UserRoles.Dto
{
    public class RoleMenuInfoDto
    {
         [Required(ErrorMessage = " ")]
        public string roleName { get; set; }
        public int roleCd { get; set; }
        public List<M_MENU> menus { get; set; }
        public List<RoleItemPermitedDto> RolePermiteds { get; set; }
        public string fullName { get; set; }
        public string allCompanyFlg { get; set; }
        public long UpdateDate { get; set; }
        public RoleMenuInfoDto()
        {
            roleName = "";
            this.RolePermiteds = new List<RoleItemPermitedDto>();
        }
    }
}
