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
    
    public partial class T_ROLE_MENU
    {
        public int ROLE_MENU_ID { get; set; }
        public int ROLE_CD { get; set; }
        public int MENU_CD { get; set; }
        public bool READONLY { get; set; }
    
        public virtual M_MENU M_MENU { get; set; }
        public virtual M_ROLE M_ROLE { get; set; }
    }
}
