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
    
    public partial class T_BAND_PROMOTION
    {
        public string COMPANY_CD { get; set; }
        public int ASSESSMENT_YEAR { get; set; }
        public int FILE_ID { get; set; }
        public int STAFF_ID { get; set; }
        public string CURRENT_BAND { get; set; }
        public string NEW_BAND { get; set; }
        public Nullable<int> PROMOTION { get; set; }
        public Nullable<System.DateTime> CREATE_DATE { get; set; }
        public Nullable<int> CREATE_PERSON_CD { get; set; }
    }
}
