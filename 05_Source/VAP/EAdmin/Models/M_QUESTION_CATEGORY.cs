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
    
    public partial class M_QUESTION_CATEGORY
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public M_QUESTION_CATEGORY()
        {
            this.M_QUESTION = new HashSet<M_QUESTION>();
        }
    
        public int CATEGORY_ID { get; set; }
        public string CATEGORY_NAME { get; set; }
        public Nullable<System.DateTime> CREATE_DATE { get; set; }
        public Nullable<int> CREATE_PERSON_ID { get; set; }
        public Nullable<System.DateTime> UPDATE_DATE { get; set; }
        public Nullable<int> UPDATE_PERSON_ID { get; set; }
        public Nullable<bool> DEL_FLG { get; set; }
        public Nullable<int> PARENT_ID { get; set; }
        public string DESCRIPTION { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<M_QUESTION> M_QUESTION { get; set; }
    }
}
