using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Vap.Core
{
    public class NavigationItem
    {
        private string action = string.Empty;

        public string Action
        {
            get { return action; }
            set { action = value; }
        }
        private string controller = string.Empty;

        public string Controller
        {
            get { return controller; }
            set { controller = value; }
        }
        private string text = string.Empty;

        public string Text
        {
            get { return text; }
            set { text = value; }
        }
        private string shortText = string.Empty;
        private bool isActive = false;

        public bool IsActive
        {
            get { return isActive; }
            set { isActive = value; }
        }

        private string menuType = string.Empty;

        public string MenuType
        {
            get { return menuType; }
            set { menuType = value; }
        }

        public NavigationItem()
            : this(string.Empty, string.Empty, string.Empty, false, string.Empty)
        {
        }

        public NavigationItem(string text, string action, string controller, bool isActive, string menuType)
        {
            this.action = action;
            this.controller = controller;
            this.text = text;
            this.isActive = isActive;
            this.menuType = menuType;
        }
    }
}
