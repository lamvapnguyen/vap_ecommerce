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
    
    public partial class MSG_GROUPS
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MSG_GROUPS()
        {
            this.MSG_USERS_IN_GROUPS = new HashSet<MSG_USERS_IN_GROUPS>();
            this.MSG_USERS_IN_GROUPS1 = new HashSet<MSG_USERS_IN_GROUPS>();
        }
    
        public string GROUP_CD { get; set; }
        public string GROUP_NAME { get; set; }
        public Nullable<System.DateTime> CREATE_DATE { get; set; }
        public Nullable<int> CREATE_USER_ID { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MSG_USERS_IN_GROUPS> MSG_USERS_IN_GROUPS { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MSG_USERS_IN_GROUPS> MSG_USERS_IN_GROUPS1 { get; set; }
    }
}
