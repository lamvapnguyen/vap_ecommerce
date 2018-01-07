using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Security.AccessControl;
using System.Security.Cryptography;
using System.Runtime.InteropServices;
using System.Text.RegularExpressions;
using System.Globalization;
using System.Diagnostics;
using System.Reflection;
using System.ComponentModel;
using System.Web;
using Vap.Core.Com;
using Vap.EAdmin.Dto;

namespace Vap.EAdmin.Models
{
    public static class CommonDL
    {

        #region Secsion

        /// <summary>
        /// Get all information of the staff logined.
        /// </summary>
        /// <returns></returns>
        public static StaffLoginInfo GetStaffLoginInfo()
        {
            StaffLoginInfo info = new StaffLoginInfo();
            try
            {
                if (!Common.IsNullOrEmpty(HttpContext.Current.Session))
                {
                    if (!Common.IsNullOrEmpty(HttpContext.Current.Session["StaffLoginInfoSection"]))
                    {
                        info = (StaffLoginInfo)HttpContext.Current.Session["StaffLoginInfoSection"];
                    }
                }
            }
            catch { }
            return info;
        }

        #endregion


        /// <summary>
        /// To get description of enum.
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public static string GetEnumDescription(Enum value)
        {
            FieldInfo fi = value.GetType().GetField(value.ToString());

            DescriptionAttribute[] attributes =
                (DescriptionAttribute[])fi.GetCustomAttributes(typeof(DescriptionAttribute), false);

            if (attributes != null && attributes.Length > 0)
                return attributes[0].Description;
            else
                return value.ToString();
        }




    }
}
