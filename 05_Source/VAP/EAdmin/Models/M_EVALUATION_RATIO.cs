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
    
    public partial class M_EVALUATION_RATIO
    {
        public int ASSESSMENT_YEAR { get; set; }
        public int STAFF_BAND_CATEGORY { get; set; }
        public string STAFF_BAND { get; set; }
        public Nullable<int> INDIVIDUAL_RATIO { get; set; }
        public Nullable<int> TEAM_RATIO { get; set; }
        public Nullable<System.DateTime> CREATE_DATE { get; set; }
        public Nullable<int> CREATE_PERSON_CD { get; set; }
        public Nullable<System.DateTime> UPDATE_DATE { get; set; }
        public Nullable<int> UPDATE_PERSON_CD { get; set; }
    }
}
