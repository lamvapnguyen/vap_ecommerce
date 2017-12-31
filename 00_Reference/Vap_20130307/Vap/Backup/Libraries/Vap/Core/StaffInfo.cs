using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Vap.Data.Mapping;

namespace Vap.Core
{
    public class StaffInfo
    {
        [Required(ErrorMessage = " ")]
        [RegularExpression(@"^[0-9]{2}$")]
        public string PREFIX { get; set; }

        [DisplayName("STAFF")]
        public M_STAFF STAFF { get; set; }

        [DisplayName("STAFF_CONTACT")]
        public T_STAFF_CONTACT STAFF_CONTACT { get; set; }

        [DisplayName("STAFF EDUCATION")]
        public List<T_STAFF_EDUCATION> STAFF_EDUCATION { get; set; }

        [DisplayName("STAFF PERSON")]
        public M_PERSON STAFF_PERSON { get; set; }
    }
}
