﻿using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;

namespace Vap.Settings
{
    public static class Setting
    {
        /// <summary>
        /// Min Required Password Length. (Default = 6)
        /// </summary>
        public const int MinRequiredPasswordLength = 6;

        /// <summary>
        /// To define the type of loading of data context
        /// </summary>
        public const bool DeferredLoadingEnabled = true;

        /// <summary>
        /// The default separator.
        /// </summary>
        public const char DefaultSeparator= ',';
    }
}
