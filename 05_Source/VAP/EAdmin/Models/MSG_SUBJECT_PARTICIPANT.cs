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
    
    public partial class MSG_SUBJECT_PARTICIPANT
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MSG_SUBJECT_PARTICIPANT()
        {
            this.MSG_FOLDER = new HashSet<MSG_FOLDER>();
        }
    
        public string SUBJECT_ID { get; set; }
        public int USER_ID { get; set; }
    
        public virtual MSG_SUBJECT MSG_SUBJECT { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MSG_FOLDER> MSG_FOLDER { get; set; }
    }
}
