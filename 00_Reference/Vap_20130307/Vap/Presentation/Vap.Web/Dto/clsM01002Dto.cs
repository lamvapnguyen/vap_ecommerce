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
using System.Web.UI.MobileControls;
using System.Collections.Generic;
using Vap.Core.Dto;
using Vap.Helpers;
using System.Collections;
using Vap.Settings;
using Vap.Commons;

namespace Vap.Web.Dto
{
    public class clsM01002Dto : clsGenaralDto
    {
        string categoryName = string.Empty;

        public string CategoryName
        {
            get { return categoryName; }
            set { categoryName = value; }
        }
        string parrentCategoryCD = string.Empty;

        public string ParrentCategoryCD
        {
            get { return parrentCategoryCD; }
            set { parrentCategoryCD = value; }
        }
        string parrentCategoryName = string.Empty;

        public string ParrentCategoryName
        {
            get { return parrentCategoryName; }
            set { parrentCategoryName = value; }
        }

        PagedList<clsM01002DetailDto> details = new PagedList<clsM01002DetailDto>(new List<clsM01002DetailDto>(), 1, Common.GetNumberOfRow());

        public PagedList<clsM01002DetailDto> Details
        {
            get { return details; }
            set { details = value; }
        }

    }
}
