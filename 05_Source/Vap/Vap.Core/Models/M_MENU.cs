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
    
    public partial class M_MENU
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public M_MENU()
        {
            this.M_MENU1 = new HashSet<M_MENU>();
            this.T_ROLE_MENU = new HashSet<T_ROLE_MENU>();
        }
    
        public int MENU_CD { get; set; }
        public string MENU_NAME { get; set; }
        public int SORT_ORDER { get; set; }
        public Nullable<int> MENU_LEVEL { get; set; }
        public string MENU_TYPE { get; set; }
        public string URL { get; set; }
        public Nullable<int> PARENT_MENU_CD { get; set; }
        public bool DEL_FLG { get; set; }
        public Nullable<System.DateTime> CREATE_DATE { get; set; }
        public Nullable<int> CREATE_PERSON_CD { get; set; }
        public Nullable<System.DateTime> UPDATE_DATE { get; set; }
        public Nullable<int> UPDATE_PERSON_CD { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<M_MENU> M_MENU1 { get; set; }
        public virtual M_MENU M_MENU2 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<T_ROLE_MENU> T_ROLE_MENU { get; set; }
    }
}