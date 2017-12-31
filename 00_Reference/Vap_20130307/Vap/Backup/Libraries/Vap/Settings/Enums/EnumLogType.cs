using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel;

namespace Vap.Settings.Enums
{
    /// <summary>
    /// To define all log type in system.
    /// </summary>
    public enum EnumLogType
    {
        [Description("Admin")]
        Admin,

        [Description("Transaction")]
        Transaction
    }
}
