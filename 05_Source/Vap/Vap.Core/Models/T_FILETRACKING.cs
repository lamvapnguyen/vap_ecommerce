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
    
    public partial class T_FILETRACKING
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public T_FILETRACKING()
        {
            this.T_EVALUATION = new HashSet<T_EVALUATION>();
        }
    
        public string COMPANY_CD { get; set; }
        public int FILE_ID { get; set; }
        public string FILENAME { get; set; }
        public Nullable<System.DateTime> FILE_CREATE_DATE { get; set; }
        public string DIRECTION { get; set; }
        public long BATCH_NO { get; set; }
        public string BATCH_TYPE { get; set; }
        public string FILE_URL { get; set; }
        public string STATUS { get; set; }
        public Nullable<System.DateTime> CREATE_DATE { get; set; }
        public Nullable<int> CREATE_PERSON_CD { get; set; }
        public Nullable<System.DateTime> UPDATE_DATE { get; set; }
        public Nullable<int> UPDATE_PERSON_CD { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<T_EVALUATION> T_EVALUATION { get; set; }
    }
}
