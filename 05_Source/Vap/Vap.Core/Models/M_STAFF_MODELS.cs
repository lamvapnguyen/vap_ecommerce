using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Vap.Core.Com;
using Vap.Settings.Constants;

namespace Vap.Core.Models
{
    public class M_STAFF_MODELS
    {
        /// <summary>
        /// Get full staff id from short staff id.
        /// </summary>
        /// <param name="staffID">Staff id in database.</param>
        /// <remarks>
        /// Author: Nguyen Tien Lam
        /// Date create: 15/07/2011
        /// </remarks>
        /// <returns>
        /// Full staff id as string.
        /// </returns>
        public string GetFullStaffID(int staffID)
        {
            if (Common.ParseString(staffID).Length < 5)
            {
                return String.Format("{0:" + CommonConst.StaffIDFormat + "}", staffID);
            }
            else
            {
                return Common.ParseString(staffID);
            }
        }
    }
}
