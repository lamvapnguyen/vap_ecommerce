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
    
    public partial class M_ORGCHART
    {
        public int ORGCHART_CD { get; set; }
        public string COMPANY_CD { get; set; }
        public Nullable<int> PRESIDENT_CD { get; set; }
        public Nullable<int> GM_CD { get; set; }
        public Nullable<int> DEPUTY_GM_CD { get; set; }
        public string GROUP_CD { get; set; }
        public string DIVISION_CD { get; set; }
        public string SECTION_CD { get; set; }
        public Nullable<int> SORT_ORDER { get; set; }
    
        public virtual M_DIVISION M_DIVISION { get; set; }
        public virtual M_GROUP M_GROUP { get; set; }
        public virtual M_SECTION M_SECTION { get; set; }
    }
}