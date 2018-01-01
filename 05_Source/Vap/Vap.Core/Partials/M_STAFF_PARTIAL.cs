//Author:       Nguyen Tien Lam
//Date created: 05/20/2011
//Desc:         To get the action name of the URL.
//Date update:  MM/dd/yyyy   
//Upadate desc: 

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using Vap.Core.Com;
using Vap.Core.Models;

namespace Vap.Core.Models
{
    [MetadataType(typeof(StaffValidate))]
    public partial class M_STAFF
    {
        public string FULL_STAFF_ID
        {
            get
            {
                if (Common.ParseString(this.STAFF_ID).Length < 5)
                {
                    return new M_STAFF_MODELS().GetFullStaffID(this.STAFF_ID);
                }
                else
                {
                    return Common.ParseString(this.STAFF_ID);
                }
            }
        }

        public string NAME_AND_CODE
        {
            get { return this.FIRST_NAME + " " + this.MIDDLE_NAME + " " + this.LAST_NAME + " (" + this.COMPANY_CD + new M_STAFF_MODELS().GetFullStaffID(this.STAFF_ID) + ")"; }
        }
        public string FULL_NAME
        {
            get { return this.FIRST_NAME + " " + this.MIDDLE_NAME + " " + this.LAST_NAME; }
        }

        public string SECTION_NAME
        {
            get
            {
                using (DBHelpDataContext data = new DBHelpDataContext())
                {
                    try
                    {
                        M_STAFF staff = data.M_STAFF.FirstOrDefault(c => c.STAFF_ID == this.STAFF_ID);
                        return Common.ParseString(staff.M_SECTION.SECTION_NAME);
                    }
                    catch
                    {
                        return string.Empty;
                    }
                }
            }
        }
        public string JOBTITLE_NAME
        {
            get
            {
                using (DBHelpDataContext data = new DBHelpDataContext())
                {
                    try
                    {
                        M_STAFF staff = data.M_STAFF.FirstOrDefault(c => c.STAFF_ID == this.STAFF_ID);
                        return Common.ParseString(staff.M_STAFF_JOBTITLE.JOBTITLE_NAME);
                    }
                    catch
                    {
                        return string.Empty;
                    }
                }
            }
        }
        public string EVALUATION_INDIVIDUAL
        {
            get
            {
                using (DBHelpDataContext data = new DBHelpDataContext())
                {
                    try
                    {
                        return Common.ParseString(data.T_STAFF_EMPLOYMENT_HISTORY.FirstOrDefault(c => c.STAFF_ID == this.STAFF_ID).EVALUATION_INDIVIDUAL);
                    }
                    catch
                    {
                        return string.Empty;
                    }
                }
            }
        }
        public string STAFF_BAND
        {
            get
            {
                using (DBHelpDataContext data = new DBHelpDataContext())
                {
                    try
                    {
                        return Common.ParseString(data.M_STAFF_BAND_SALARY.FirstOrDefault(c => c.STAFF_ID == this.STAFF_ID).STAFF_BAND);
                    }
                    catch
                    {
                        return string.Empty;
                    }
                }
            }
        }
        public string DIVISION_NAME
        {
            get
            {
                using (DBHelpDataContext data = new DBHelpDataContext())
                {
                    try
                    {
                        M_STAFF staff = data.M_STAFF.FirstOrDefault(c => c.STAFF_ID == this.STAFF_ID);
                        return Common.ParseString(staff.M_DIVISION.DIVISION_NAME);
                    }
                    catch
                    {
                        return string.Empty;
                    }
                }
            }
        }
        public string GROUP_NAME
        {
            get
            {
                using (DBHelpDataContext data = new DBHelpDataContext())
                {
                    try
                    {
                        M_STAFF staff = data.M_STAFF.FirstOrDefault(c => c.STAFF_ID == this.STAFF_ID);
                        return Common.ParseString(staff.M_GROUP.GROUP_NAME);
                    }
                    catch
                    {
                        return string.Empty;
                    }
                }
            }
        }
        public bool GROUP_LEADER_FLG
        {
            get
            {
                try
                {
                    using (DBHelpDataContext data = new DBHelpDataContext())
                    {
                        M_STAFF staff = data.M_STAFF.FirstOrDefault(c => c.STAFF_ID == this.STAFF_ID);
                        return Common.ParseBoolean(staff.M_STAFF_JOBTITLE.GROUP_LEADER_FLG);
                    }
                }
                catch
                {
                    return false;
                }
            }
        }
        public bool DIV_LEADER_FLG
        {
            get
            {
                using (DBHelpDataContext data = new DBHelpDataContext())
                {
                    try
                    {
                        M_STAFF staff = data.M_STAFF.FirstOrDefault(c => c.STAFF_ID == this.STAFF_ID);
                        return Common.ParseBoolean(staff.M_STAFF_JOBTITLE.DIV_LEADER_FLG);
                    }
                    catch
                    {
                        return false;
                    }
                }
            }
        }
        public bool SEC_LEADER_FLG
        {
            get
            {
                using (DBHelpDataContext data = new DBHelpDataContext())
                {
                    try
                    {
                        M_STAFF staff = data.M_STAFF.FirstOrDefault(c => c.STAFF_ID == this.STAFF_ID);
                        return Common.ParseBoolean(staff.M_STAFF_JOBTITLE.SEC_LEADER_FLG);
                    }
                    catch
                    {
                        return false;
                    }
                }
            }
        }

        public string CURRENT_BAND
        {
            get
            {
                try
                {
                    using (DBHelpDataContext data = new DBHelpDataContext())
                    {
                        M_STAFF staff = data.M_STAFF.FirstOrDefault(c => c.STAFF_ID == this.STAFF_ID);
                        if (Common.IsNullOrEmpty(staff))
                            return string.Empty;
                        return Common.ParseString(staff.M_STAFF_BAND_SALARY.STAFF_BAND);
                    }
                }
                catch
                {
                    return string.Empty;
                }
            }
        }
        [Required(ErrorMessage = " ")]
        public string DOB_NEW
        {
            get { return Common.ParseTime(DOB, "dd/MM/yyyy"); }
            set { DOB = Common.ConvertDateTime(value); }
        }
        [Required(ErrorMessage = " ")]
        public string JOINED_DATE_NEW
        {
            get { return Common.ParseTime(JOINED_DATE, "dd/MM/yyyy"); }
            set { JOINED_DATE = Common.ConvertDateTime(value); }
        }
        public string RESIGNATION_DATE_NEW
        {
            get { return Common.ParseTime(RESIGNATION_DATE, "dd/MM/yyyy"); }
            set { RESIGNATION_DATE = Common.ConvertDateTime(value); }
        }

    }
    public class StaffValidate
    {
        [Required(ErrorMessage = " ")]
        public string FIRST_NAME { get; set; }

        [Required(ErrorMessage = " ")]
        public string NICKNAME { get; set; }

        [Required(ErrorMessage = " ")]
        public string HOME_TOWN { get; set; }

        [Required(ErrorMessage = " ")]
        public string GROUP_CD { get; set; }

        [Required(ErrorMessage = " ")]
        public string DIVISION_CD { get; set; }

        [Required(ErrorMessage = " ")]
        public string SECTION_CD { get; set; }

        [Required(ErrorMessage = " ")]
        public string JOBTITLE_CD { get; set; }
    }
}
