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
using Vap.Data.Mapping;
using Vap.Settings.Enums;
using Vap.Commons;
using System.Web.UI.MobileControls;
using Vap.Web.Dto;
using Vap.Settings;
using System.Collections.Generic;

namespace Vap.Web.Models
{
    public class clsL01001Models
    {
        /// <summary>
        /// To add new event log.
        /// </summary>
        /// <param name="logCD"></param>
        /// <param name="logType"></param>
        /// <param name="screenName"></param>
        /// <param name="actionType"></param>
        /// <param name="logData"></param>
        /// <param name="personID"></param>
        /// <returns></returns>
        public bool AddNewEvent(string logCD, EnumLogType logType, string screenName, EnumAction actionType, string logData, int personID)
        {
            try
            {
                DBHelpDataContext db = new DBHelpDataContext();
                db.DeferredLoadingEnabled = Setting.DeferredLoadingEnabled;
                T_LOG theLog = new T_LOG();

                theLog.LOG_CD = logCD;
                theLog.LOG_TYPE = Common.GetEnumDescription(logType);
                theLog.SCREEN_NAME = screenName;
                theLog.ACTION_TYPE = Common.GetEnumDescription(actionType);
                theLog.LOG_DATA = logData;
                theLog.PERSON_CD = personID;
                theLog.LOG_DATE = Commons.Common.GetCurrentDate();

                db.T_LOGs.InsertOnSubmit(theLog);
                db.SubmitChanges();

            }
            catch (Exception ex)
            {
                throw ex;
            }
            return false;
        }

        /// <summary>
        /// To get all events folow search condtions.
        /// </summary>
        /// <returns></returns>
        public List<clsL01001Dto> GetAllEvents()
        {
            List<clsL01001Dto> list = new List<clsL01001Dto>();
            try
            {
                DBHelpDataContext db = new DBHelpDataContext();
                db.DeferredLoadingEnabled = Setting.DeferredLoadingEnabled;


                list = (from t in db.T_LOGs
                        from p in db.M_PERSONs
                        from s in db.M_STAFFs
                        where
                        t.PERSON_CD == p.PERSON_CD
                        && p.STAFF_ID == s.STAFF_ID
                        && t.DEL_FLG != true
                        select new clsL01001Dto
                        {
                            ActionType = t.ACTION_TYPE,
                            DelFlg = t.DEL_FLG,
                            LogCD = t.LOG_CD,
                            LogData = t.LOG_DATA,
                            LogDate = Common.ParseDate(t.LOG_DATE),
                            LogType = t.LOG_TYPE,
                            PersonCD = Common.ParseInt(t.PERSON_CD),
                            PersonName = s.FULL_NAME,
                            ScreenName = t.SCREEN_NAME
                        }).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return list;
        }
    }
}
