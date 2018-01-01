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

namespace Vap.Core.Models
{
    [MetadataType(typeof(M_MenuValidate))]
    public partial class M_MENU
    {
        string _ActionName;
        string _ControlName;

        /// <summary>
        /// The Action name from URL
        /// </summary>
        public string ActionName
        {
            
            get { return this.GetActionNameFormURL(this.URL); }
            set { this._ActionName = value; }
        }

        /// <summary>
        /// The control name form URL
        /// </summary>
        public string ControlName
        {
            get { return this.GetControlNameFormURL(this.URL); }
            set { this._ControlName = value; }
        }

        /// <summary>
        /// Return the action name form view.
        /// </summary>
        /// <returns></returns>
        public string GetActionName()
        {
            return this._ActionName;
        }

        /// <summary>
        /// Return the control name from view.
        /// </summary>
        /// <returns></returns>
        public string GetControlName()
        {
            return this._ControlName;
        }

        /// <summary>
        /// To get the action name of the URL.
        /// </summary>
        /// <param name="URL">The URL</param>
        /// <returns>Index is defaulted</returns>
        public string GetActionNameFormURL(string URL)
        {
            string ActionName = "Index";
            if (string.IsNullOrEmpty(URL))
                return ActionName;

            //Remove all white pace character.
            URL = URL.Trim();

            if (string.IsNullOrEmpty(URL))
                return ActionName;

            //Remove all '/' character at the end.
            while (true)
            {
                if (URL[URL.Length - 1] == '/')
                    URL = URL.Substring(0, URL.Length - 1);
                else
                    break;
            }

            //Get Action name at the end URL start with last '/' character
            try
            {
                int start = URL.LastIndexOf('/');
                if (start != -1)
                {
                    int lengt = URL.Length - 1 - start;
                    ActionName = URL.Substring(start + 1, lengt);
                }
            }
            catch { }
            return ActionName;
        }

        /// <summary>
        /// To get the control name of the URL.
        /// </summary>
        /// <param name="URL">The URL</param>
        /// <returns>Home is defaulted</returns>
        public string GetControlNameFormURL(string URL)
        {
            string ControlName = "Home";
            if (string.IsNullOrEmpty(URL))
                return ControlName;

            //Remove all white pace character.
            URL = URL.Trim();
            if (string.IsNullOrEmpty(URL))
                return ControlName;

            //Remove all '/' character at the end.
            while (true)
            {
                if (URL[URL.Length - 1] == '/')
                    URL = URL.Substring(0, URL.Length - 1);
                else
                    break;
            }

            //Get Control name at the end URL start with last '/' character
            try
            {
                int start = URL.LastIndexOf('/');
                if (start != -1)
                {
                    URL = URL.Substring(0, start);
                    start = URL.LastIndexOf('/');
                    if (start != -1)
                    {
                        int lengt = URL.Length - 1 - start;
                        ControlName = URL.Substring(start + 1, lengt);
                    }
                    else
                        ControlName = URL;
                }
            }
            catch { }
            return ControlName;
        }
    }

    public class M_MenuValidate
    {
        [Required(ErrorMessage = "Menu code is required")]
        [DisplayName("Menu Code")]
        public string MENU_CD { get; set; }

        [Required(ErrorMessage = "Menu name is required")]
        [DisplayName("Menu Name")]
        public string MENU_NAME { get; set; }

        [DisplayName("Sort Order")]
        public string SORT_ORDER { get; set; }

        [DisplayName("Menu Level")]
        public string MENU_LEVEL { get; set; }

        [DisplayName("Menu Type")]
        public string MENU_TYPE { get; set; }

        //[Required(ErrorMessage = "Menu parent is required")]
        [DisplayName("Menu Parent")]
        public string PARENT_MENU_CD { get; set; }

        [Required(ErrorMessage = "Menu code is required")]
        [DisplayName("Action Name")]
        public string ActionName { get; set; }

        [Required(ErrorMessage = "Controller name is required")]
        [DisplayName("Controller Name")]
        public string ControlName { get; set; }
    }
}
