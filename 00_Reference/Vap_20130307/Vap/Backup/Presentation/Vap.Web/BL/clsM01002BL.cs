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
using Vap.Web.Dto;
using System.Web.Mvc;
using Vap.Commons;
using Vap.Settings.Constants;
using Vap.Settings.Enums;
using Vap.Core.Dto;
using Vap.Web.Models;
using Vap.Data.Mapping;

namespace Vap.Web.BL
{
    public class clsM01002BL
    {
        /// <summary>
        /// To validate data of DTO befor save to database.
        /// </summary>
        /// <param name="dto"></param>
        public void PerformCheck(clsM01002DetailDto dto, ModelStateDictionary ModelState)
        {
            try
            {
                //Check Model State
                if (!ModelState.IsValid)
                {
                    var errors = ModelState.Where(o => o.Value.Errors.Count() >= 1).ToArray();
                    if (errors.Count() > 0)
                    {
                        if (errors.Where(o => o.Value.Errors[0].ErrorMessage.Contains(Common.ParseString(CommonMessages.Common_Msg_ManatoryFields))).Count() > 0)
                        {
                            dto.Messsage = CommonMessages.Common_Msg_ManatoryFields;
                            return;
                        }
                        //Check value type is correct format
                        if (errors.Where(o => o.Value.Errors[0].ErrorMessage.Contains(Common.ParseString("is not valid"))).Count() > 0)
                        {
                            dto.Messsage = CommonMessages.Common_Msg_InvalidFormat;
                            return;
                        }
                    }
                }

                //Check existed data
                if (this.IsDataExisted(dto))
                {
                    dto.Messsage = CommonMessages.ERR0003;
                    ModelState.AddModelError("CategoryName", "");
                    return;
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// To check category existed or not.
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        private bool IsDataExisted(clsM01002DetailDto dto)
        {
            try
            {
                clsM01002Models model = new clsM01002Models();
                if (dto.ScreenMode == EnumScreenMode.Add)
                {
                    return model.IsExisted(dto.CategoryName);
                }
                else
                {
                    return model.IsExisted(dto.CategoryCD, dto.CategoryName);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        /// <summary>
        /// To determine the mode and set default value for dto.
        /// </summary>
        /// <param name="dto"></param>
        public void InitAndDetermineModeForDto(clsM01002DetailDto dto)
        {
            if (Common.IsNullOrEmpty(dto.CategoryCD))
            {
                dto.ScreenName = ConstFunctionTitle.titleM01002Add;
                dto.ScreenMode = EnumScreenMode.Add;
            }
            else
            {
                dto.ScreenName = ConstFunctionTitle.titleM01002Edit;
                dto.ScreenMode = EnumScreenMode.Edit;


            }

            //Get all categories as cobobox
            dto.CategorySelectList = new clsComboListDto(new clsM01002Models().GetCategoriesToCombobox(), new clsComboDto("", CommonMessages.INF0010)).GetSelectList();

        }

        /// <summary>
        /// To get editing category.
        /// </summary>
        /// <param name="dto"></param>
        public void GetEdtingCagetoryToDto(clsM01002DetailDto dto)
        {
            if (!Common.IsNullOrEmpty(dto.CategoryCD))
            {
                V_CATEGORY theCate = new clsM01002Models().GetTheCateory(dto.CategoryCD);
                dto.CategoryLevel = Common.ParseInt(theCate.CATEGORY_LEVEL);
                dto.CategoryName = theCate.CATEGORY_NAME;
                dto.SortOrder = Common.ParseInt(theCate.SORT_ORDER);
                dto.ParrentCategoryCd = theCate.PARENT_CATEGORY_CD;
            }

        }

    }
}
