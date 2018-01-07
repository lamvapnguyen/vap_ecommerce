using System.Collections.Generic;
using System.ComponentModel;
using Vap.EAdmin.Models;

namespace Vap.EAdmin.Dto
{
    public class StaffLoginInfo
    {
        [DisplayName("Staff ID")]
        public int STAFF_ID { get; set; }

        [DisplayName("Staff Name")]
        public string STAFF_NAME { get; set; }

        [DisplayName("Company CD")]
        public string COMPANY_CD { get; set; }

        [DisplayName("Person CD")]
        public int PERSON_CD { get; set; }

        /// <summary>
        /// The list Company option for super user
        /// </summary>
        [DisplayName("COMPANY")]
        public List<M_COMPANY> COMPANIES { get; set; }

        /// <summary>
        /// The menu list of user login can access to.
        /// </summary>
        public List<M_MENU> Menus { get; set; }

        /// <summary>
        /// The navigation list
        /// </summary>
        public List<M_MENU> Navigations { get; set; }
        public StaffLoginInfo()
        {
            this.STAFF_ID = 0;
            this.STAFF_NAME = string.Empty;
            this.COMPANY_CD = string.Empty;
            this.PERSON_CD = 0;
            this.COMPANIES = new List<M_COMPANY>();
            this.Menus = new List<M_MENU>();
            this.Navigations = new List<M_MENU>();
        }

    }
}
