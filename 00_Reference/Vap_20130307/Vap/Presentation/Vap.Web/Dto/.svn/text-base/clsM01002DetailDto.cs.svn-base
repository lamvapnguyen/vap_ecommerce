//Author:       NTLam
//Create date:  18/11/2012
//Description:  The product category dto.

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
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;
using System.Collections.Generic;
using Vap.Commons;

namespace Vap.Web.Dto
{
    public class clsM01002DetailDto : clsGenaralDto
    {
        #region Private Fields
        string categoryCD = string.Empty;
        string categoryName = string.Empty;
        int sortOrder = 0;
        int categoryLevel = 0;
        string parrentCategoryCd = string.Empty;
        string parrentCategoryName = string.Empty;


        bool delFlg = false;
        DateTime createDate = DateTime.Now;
        int createPersonCd = 0;
        DateTime updateDate = DateTime.Now;
        int updatePersonCd = 0;
        bool isSeleced = false;

        public bool IsSeleced
        {
            get { return isSeleced; }
            set { isSeleced = value; }
        }

        #endregion

        #region Public Properties
        [DisplayName("Category Code")]
        public string CategoryCD
        {
            get { return Common.ParseString(categoryCD); }
            set { categoryCD = value; }
        }

        [DisplayName("Category Name")]
        [Required(ErrorMessageResourceType = typeof(CommonMessages), ErrorMessageResourceName = "Common_Msg_ManatoryFields")]
        public string CategoryName
        {
            get { return Common.ParseString(categoryName); }
            set { categoryName = value; }
        }

        [DisplayName("Sort Order")]
        //[Required(ErrorMessageResourceType = typeof(CommonMessages), ErrorMessageResourceName = "Common_Msg_ManatoryFields")]
        //[RegularExpression(@"^\d$", ErrorMessageResourceType = typeof(CommonMessages), ErrorMessageResourceName = "Common_Msg_InvalidNumeric")]
        public int SortOrder
        {
            get { return sortOrder; }
            set { sortOrder = value; }
        }


        [DisplayName("Category Level")]
        [Required(ErrorMessageResourceType = typeof(CommonMessages), ErrorMessageResourceName = "Common_Msg_ManatoryFields")]
        [RegularExpression(@"^\d$", ErrorMessageResourceType = typeof(CommonMessages), ErrorMessageResourceName = "Common_Msg_InvalidNumeric")]
        public int CategoryLevel
        {
            get { return categoryLevel; }
            set { categoryLevel = value; }
        }


        [DisplayName("Parrent Category")]
        public string ParrentCategoryCd
        {
            get { return Common.ParseString(parrentCategoryCd); }
            set { parrentCategoryCd = value; }
        }

        public bool DelFlg
        {
            get { return delFlg; }
            set { delFlg = value; }
        }

        public DateTime CreateDate
        {
            get { return createDate; }
            set { createDate = value; }
        }

        public int CreatePersonCd
        {
            get { return createPersonCd; }
            set { createPersonCd = value; }
        }

        public DateTime UpdateDate
        {
            get { return updateDate; }
            set { updateDate = value; }
        }


        public int UpdatePersonCd
        {
            get { return updatePersonCd; }
            set { updatePersonCd = value; }
        }

        public string ParrentCategoryName
        {
            get { return parrentCategoryName; }
            set { parrentCategoryName = value; }
        }

        /// <summary>
        /// List of category
        /// </summary>
        public List<SelectListItem> CategorySelectList { get; set; }

        #endregion End Public Properties

        #region Contructors

        /// <summary>
        /// Contructor with default value.
        /// </summary>
        public clsM01002DetailDto()
            : this(string.Empty, string.Empty, 0, 0, string.Empty, string.Empty, false, DateTime.Now, 0, DateTime.Now, 0)
        { }

        /// <summary>
        /// Full contructor
        /// </summary>
        /// <param name="categoryCD">Category Code</param>
        /// <param name="categoryName">Category Name</param>
        /// <param name="sortOrder">Sort Order</param>
        /// <param name="categoryLevel">Level</param>
        /// <param name="parrentCategoryCd">Parrent Category Code</param>
        /// <param name="delFlg">Is Delete Or Not</param>
        /// <param name="createDate">Create Date</param>
        /// <param name="createPersonCd">Update Person CD (int)</param>
        /// <param name="updateDate">Update Date</param>
        /// <param name="updatePersonCd">Update Person CD (int)</param>
        public clsM01002DetailDto(string categoryCD, string categoryName, int sortOrder, int categoryLevel, string parrentCategoryCd, string parrentCategoryName, bool delFlg, DateTime createDate, int createPersonCd, DateTime updateDate, int updatePersonCd)
        {
            this.categoryCD = categoryCD;
            this.categoryName = categoryName;
            this.sortOrder = sortOrder;
            this.categoryLevel = categoryLevel;
            this.parrentCategoryCd = parrentCategoryCd;
            this.parrentCategoryName = parrentCategoryName;
            this.delFlg = delFlg;
            this.createDate = createDate;
            this.createPersonCd = createPersonCd;
            this.updateDate = updateDate;
            this.updatePersonCd = updatePersonCd;
        }

        #endregion Contructors
    }
}
