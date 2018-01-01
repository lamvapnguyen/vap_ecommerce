using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using Vap.Core.Models;

namespace EAdmins.Dto
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
