using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Vap.Core.Resources;

namespace Vap.Core.Models
{

    [MetadataType(typeof(M_ROLE_Metadata))]
    public partial class M_ROLE
    {
    }
    class M_ROLE_Metadata
    {
        public int ROLE_CD;
        [Display(Name = nameof(CommonMessages.Common_Msg_DeleteConfirm), ResourceType = typeof(CommonMessages))]
        public string ROLE_NAME;
        public int SORT_ORDER;
        public bool ALL_COMPANY_FLAG;
        public bool DEL_FLG;
    }
}
