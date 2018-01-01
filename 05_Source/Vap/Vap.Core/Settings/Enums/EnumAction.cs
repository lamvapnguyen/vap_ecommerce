using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel;

namespace Vap.Settings.Enums
{
    /// <summary>
    /// To define all action in system.
    /// </summary>
    public enum EnumAction
    {
        [Description("Added")]
        Add,

        [Description("Approved")]
        Approve,
        
        [Description("Cancelled")]
        Cancel,
        
        [Description("Confirmed")]
        Confirm,
        
        [Description("Deleted")]
        Delete,
        
        Detail,

        [Description("Edited")]
        Edit,
        
        [Description("Denied")]
        Deny,
        
        [Description("Rejected")]
        Reject,
        
        [Description("Show")]
        View
    }
}
