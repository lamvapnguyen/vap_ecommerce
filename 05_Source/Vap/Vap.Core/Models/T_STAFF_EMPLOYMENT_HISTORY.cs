//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Vap.Core.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class T_STAFF_EMPLOYMENT_HISTORY
    {
        public string COMPANY_CD { get; set; }
        public int STAFF_ID { get; set; }
        public int STAFF_EMPLOYMENT_HISTORY_ID { get; set; }
        public Nullable<System.DateTime> EFFECTIVE_DATE { get; set; }
        public string STAFF_BAND { get; set; }
        public int JOBTITLE_CD { get; set; }
        public string SECTION_CD { get; set; }
        public string DIVISION_CD { get; set; }
        public Nullable<decimal> BASIC_SALARY { get; set; }
        public Nullable<decimal> ALLOWANCE { get; set; }
        public Nullable<decimal> BONUS { get; set; }
        public string EVALUATION_INDIVIDUAL { get; set; }
        public string EVALUATION_TEAM { get; set; }
        public string EVALUATION_RESULT { get; set; }
    
        public virtual M_STAFF M_STAFF { get; set; }
    }
}
