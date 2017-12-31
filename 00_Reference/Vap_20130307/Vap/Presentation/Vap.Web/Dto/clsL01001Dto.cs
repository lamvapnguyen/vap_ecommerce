using System;
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
using Vap.Core.Dto;
using Vap.Settings.Enums;
using Vap.Settings;
using Vap.Settings.Constants;
using System.ComponentModel;

namespace Vap.Web.Dto
{
    public class clsL01001Dto : clsGenaralDto
    {
        string logCD = string.Empty;

        public string LogCD
        {
            get { return logCD; }
            set { logCD = value; }
        }
        string logType = string.Empty;
        
        [DisplayName("Log Type")]
        public string LogType
        {
            get { return logType; }
            set { logType = value; }
        }
        string screenName = string.Empty;

        [DisplayName("Screen Name")]
        public string ScreenName
        {
            get { return screenName; }
            set { screenName = value; }
        }
        string actionType = string.Empty;

        [DisplayName("Action")]
        public string ActionType
        {
            get { return actionType; }
            set { actionType = value; }
        }
        string logData = string.Empty;

        [DisplayName("Data")]
        public string LogData
        {
            get { return logData; }
            set { logData = value; }
        }
        DateTime logDate = DateTime.Now;

        [DisplayName("Log Date")]
        public DateTime LogDate
        {
            get { return logDate; }
            set { logDate = value; }
        }
        bool delFlg = false;

        public bool DelFlg
        {
            get { return delFlg; }
            set { delFlg = value; }
        }
        int personCD = 0;

        public int PersonCD
        {
            get { return personCD; }
            set { personCD = value; }
        }

        string personName = string.Empty;

        [DisplayName("Person Name")]
        public string PersonName
        {
            get { return personName; }
            set { personName = value; }
        }


        public clsL01001Dto()
        {
            this.ScreenMode = EnumScreenMode.Show;
            this.ScreenName = ConstFunctionTitle.titleL01001Index;
        }
    }
}
