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
    
    public partial class M_CURRENCY
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public M_CURRENCY()
        {
            this.M_COMPANY = new HashSet<M_COMPANY>();
        }
    
        public string CURRENCY_CD { get; set; }
        public string CURRENCY { get; set; }
        public int SORT_ORDER { get; set; }
        public bool DEL_FLG { get; set; }
        public Nullable<System.DateTime> CREATE_DATE { get; set; }
        public Nullable<int> CREATE_PERSON_CD { get; set; }
        public Nullable<System.DateTime> UPDATE_DATE { get; set; }
        public Nullable<int> UPDATE_PERSON_CD { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<M_COMPANY> M_COMPANY { get; set; }
    }
}