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
    
    public partial class T_STAFF_CONTACT
    {
        public string COMPANY_CD { get; set; }
        public int STAFF_CD { get; set; }
        public string COMPANY_PHONE { get; set; }
        public string COMPANY_MOBILE { get; set; }
        public string COMPANY_FAX { get; set; }
        public string COMPANY_EMAIL { get; set; }
        public string HOME_STREET { get; set; }
        public string HOME_DISTRICT { get; set; }
        public string HOME_AREA { get; set; }
        public string HOME_CITY { get; set; }
        public string HOME_STATE { get; set; }
        public string HOME_ZIP { get; set; }
        public string HOME_COUNTRY_CD { get; set; }
    
        public virtual M_STAFF M_STAFF { get; set; }
    }
}