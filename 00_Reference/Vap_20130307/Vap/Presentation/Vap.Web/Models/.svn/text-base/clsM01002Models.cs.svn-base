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
using System.Collections;
using Vap.Web.Dto;
using Vap.Data.Mapping;
using System.Collections.Generic;
using Vap.Commons;
using Vap.Core.Dto;
using Vap.Settings;
using System.Web.UI.MobileControls;

namespace Vap.Web.Models
{
    public class clsM01002Models
    {
        /// <summary>
        /// To get all categories that not be deleted.
        /// </summary>
        /// <returns></returns>
        public List<clsM01002DetailDto> GetCategories(string cateName)
        {
            DBHelpDataContext db = new DBHelpDataContext();
            //db.DeferredLoadingEnabled = true;

            return (from o in db.V_CATEGORies

                    where
                                        o.DEL_FLG == false
                    && o.CATEGORY_NAME.Contains(cateName)

                    select new clsM01002DetailDto()
                    {
                        CategoryCD = o.CATEGORY_CD,
                        CategoryName = o.CATEGORY_NAME,
                        SortOrder = Common.ParseInt(o.SORT_ORDER),
                        CategoryLevel = Common.ParseInt(o.CATEGORY_LEVEL),
                        ParrentCategoryCd = o.PARENT_CATEGORY_CD,
                        ParrentCategoryName = o.V_CATEGORY1.CATEGORY_NAME,
                        DelFlg = o.DEL_FLG,
                        CreatePersonCd = Common.ParseInt(o.CREATE_PERSON_CD),
                        CreateDate = Common.ParseDate(o.CREATE_DATE),
                        UpdateDate = Common.ParseDate(o.UPDATE_DATE),
                        UpdatePersonCd = Common.ParseInt(o.UPDATE_PERSON_CD)
                    }).OrderBy(o => o.CategoryName).ToList();
        }

        /// <summary>
        /// To add new product category
        /// </summary>
        /// <param name="parrentCategoryCd">Parrent Category Code</param>
        /// <param name="categoryName">Category Name</param>
        /// <param name="createPersonCd">Create Person ID</param>
        /// <param name="sortOrder"></param>
        /// <param name="categoryLevel"></param>
        public void Add(string parrentCategoryCd, string categoryName, int createPersonCd, int sortOrder, int categoryLevel)
        {
            try
            {
                DBHelpDataContext db = new DBHelpDataContext();
                db.DeferredLoadingEnabled = Settings.Setting.DeferredLoadingEnabled;

                DateTime currentDate = Common.GetCurrentDate();
                V_CATEGORY newCatetory = new V_CATEGORY();
                newCatetory.CATEGORY_CD = Common.GenerateRandomString(30);
                newCatetory.CATEGORY_NAME = categoryName;
                newCatetory.PARENT_CATEGORY_CD = Common.IsNullOrEmpty(parrentCategoryCd) ? null : parrentCategoryCd;
                newCatetory.SORT_ORDER = sortOrder;
                newCatetory.CATEGORY_LEVEL = categoryLevel;
                newCatetory.CREATE_DATE = currentDate;
                newCatetory.CREATE_PERSON_CD = createPersonCd;
                newCatetory.UPDATE_PERSON_CD = createPersonCd;
                newCatetory.UPDATE_DATE = currentDate;

                db.V_CATEGORies.InsertOnSubmit(newCatetory);
                db.SubmitChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// To get all category to combobox.
        /// </summary>
        /// <returns></returns>
        public List<clsComboDto> GetCategoriesToCombobox()
        {
            try
            {
                DBHelpDataContext db = new DBHelpDataContext();
                db.DeferredLoadingEnabled = Settings.Setting.DeferredLoadingEnabled;

                var query = from o in db.V_CATEGORies
                            where o.DEL_FLG == false
                            select new clsComboDto()
                            {
                                Name = o.CATEGORY_CD,
                                Value = o.CATEGORY_NAME
                            };
                return query.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// To check the category name is existed or not.
        /// </summary>
        /// <param name="categoryName"></param>
        /// <returns></returns>
        public bool IsExisted(string categoryName)
        {
            try
            {
                DBHelpDataContext db = new DBHelpDataContext();
                db.DeferredLoadingEnabled = Setting.DeferredLoadingEnabled;

                return db.V_CATEGORies.Where(o => o.CATEGORY_NAME == categoryName).Count() > 0;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Get the category.
        /// </summary>
        /// <param name="categoryCD"></param>
        /// <returns></returns>
        public V_CATEGORY GetTheCateory(string categoryCD)
        {
            try
            {
                DBHelpDataContext db = new DBHelpDataContext();
                db.DeferredLoadingEnabled = Setting.DeferredLoadingEnabled;

                return db.V_CATEGORies.Where(o => o.CATEGORY_CD == categoryCD).FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// To check the category name is existed or not.
        /// </summary>
        /// <param name="categoryCode"></param>
        /// <param name="categoryName"></param>
        /// <returns></returns>
        public bool IsExisted(string categoryCode, string categoryName)
        {
            try
            {
                DBHelpDataContext db = new DBHelpDataContext();
                db.DeferredLoadingEnabled = Setting.DeferredLoadingEnabled;

                return db.V_CATEGORies.Where(o => o.CATEGORY_NAME == categoryName && o.CATEGORY_CD != categoryCode).Count() > 0;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// To update the product category.
        /// </summary>
        /// <param name="categoryCD"></param>
        /// <param name="categoryName"></param>
        /// <param name="categoryParentCD"></param>
        /// <param name="sortOrder"></param>
        /// <param name="level"></param>
        /// <param name="updatePersonID"></param>
        /// <param name="updateDate"></param>
        /// <returns></returns>
        public bool Update(string categoryCD, string categoryName, string categoryParentCD, int sortOrder, int level, int updatePersonID, DateTime updateDate)
        {
            try
            {
                DBHelpDataContext db = new DBHelpDataContext();
                db.DeferredLoadingEnabled = Settings.Setting.DeferredLoadingEnabled;

                V_CATEGORY temp = db.V_CATEGORies.Where(o => o.CATEGORY_CD == categoryCD).FirstOrDefault();

                //If the category does not exist.
                if (Common.IsNullOrEmpty(temp))
                {
                    return false;
                }

                temp.CATEGORY_NAME = categoryName;
                temp.PARENT_CATEGORY_CD = Common.IsNullOrEmpty(categoryParentCD) ? null : categoryParentCD;
                temp.SORT_ORDER = sortOrder;
                temp.CATEGORY_LEVEL = level;
                temp.UPDATE_PERSON_CD = updatePersonID;
                temp.UPDATE_DATE = updateDate;

                db.SubmitChanges();

                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// To delete all category in category id list.
        /// </summary>
        /// <param name="IdList"></param>
        /// <returns></returns>
        internal bool Delete(string[] IdList)
        {
            try
            {
                DBHelpDataContext db = new DBHelpDataContext();
                db.DeferredLoadingEnabled = Settings.Setting.DeferredLoadingEnabled;

                List<V_CATEGORY> deleteList = (from c in db.V_CATEGORies
                                               where IdList.Contains(c.CATEGORY_CD)
                                               select c).ToList();

                foreach (V_CATEGORY item in deleteList)
                {
                    item.DEL_FLG = true;
                }
                db.SubmitChanges();

                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
