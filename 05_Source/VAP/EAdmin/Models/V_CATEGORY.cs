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
    
    public partial class V_CATEGORY
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public V_CATEGORY()
        {
            this.V_CATEGORY1 = new HashSet<V_CATEGORY>();
            this.V_PRODUCT = new HashSet<V_PRODUCT>();
        }
    
        public string CATEGORY_CD { get; set; }
        public string CATEGORY_NAME { get; set; }
        public Nullable<int> SORT_ORDER { get; set; }
        public Nullable<int> CATEGORY_LEVEL { get; set; }
        public string PARENT_CATEGORY_CD { get; set; }
        public bool DEL_FLG { get; set; }
        public Nullable<System.DateTime> CREATE_DATE { get; set; }
        public Nullable<int> CREATE_PERSON_CD { get; set; }
        public Nullable<System.DateTime> UPDATE_DATE { get; set; }
        public Nullable<int> UPDATE_PERSON_CD { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<V_CATEGORY> V_CATEGORY1 { get; set; }
        public virtual V_CATEGORY V_CATEGORY2 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<V_PRODUCT> V_PRODUCT { get; set; }
    }
}
