//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Vap.EAdmin.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class T_STAFF_EDUCATION
    {
        public string COMPANY_CD { get; set; }
        public int STAFF_ID { get; set; }
        public int QUALIFICATION_CD { get; set; }
        public string INSTITUTION { get; set; }
        public string MAJOR { get; set; }
        public Nullable<int> YEAR_FROM { get; set; }
        public Nullable<int> YEAR_TO { get; set; }
    
        public virtual M_EDUCATION_QUALIFICATION M_EDUCATION_QUALIFICATION { get; set; }
        public virtual M_STAFF M_STAFF { get; set; }
    }
}
