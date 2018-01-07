using System.ComponentModel.DataAnnotations;
using Vap.EAdmin.Resources;

namespace Vap.EAdmin.Models
{

    [MetadataType(typeof(M_ROLE_Metadata))]
    public partial class M_ROLE
    {
    }
    class M_ROLE_Metadata
    {
        [Display(Name = nameof(UserRoleText.ROLE_CD), ResourceType = typeof(UserRoleText))]
        public int ROLE_CD;
        [Display(Name = nameof(UserRoleText.ROLE_NAME), ResourceType = typeof(UserRoleText))]
        public string ROLE_NAME;
        [Display(Name = nameof(UserRoleText.SORT_ORDER), ResourceType = typeof(UserRoleText))]
        public int SORT_ORDER;
        [Display(Name = nameof(UserRoleText.DEL_FLG), ResourceType = typeof(UserRoleText))]
        public bool DEL_FLG;
    }
}
