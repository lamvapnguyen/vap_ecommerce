using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Vap.Web.Dto;
using Vap.Commons;
using Vap.Settings.Constants;
using Vap.Settings.Enums;
using log4net;
using Vap.Web.Models;
using Vap.Web.BL;
using Vap.Core;
using Vap.Web.Models.Authorization;
using Vap.Helpers;
using Vap.Settings;

namespace Vap.Web.Controllers
{
    public class M01002Controller : Controller
    {

        private static readonly ILog logger = LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        private int currentPageIndex;

        //
        // GET: /M01002/
        [CustomAuthorize]
        public ActionResult Index()
        {
            //clsM01002Dto dto = new clsM01002Dto();
            //List<clsM01002DetailDto> listM01002Dto = new List<clsM01002DetailDto>();
            //clsM01002Models model = new clsM01002Models();
            //listM01002Dto = model.GetCategories();
            //dto.Details = listM01002Dto;

            return View(new clsM01002Dto());
        }

        [Privilege]
        [ValidateInput(false)]
        [HttpPost]
        public ActionResult Index(int? page, clsM01002Dto dto, FormCollection formCollection)
        {
            try
            {
                clsM01002Models model = new clsM01002Models();
                //Redirect to action Add 
                if (Common.ParseString(formCollection["btnAdd"]).Equals("Add"))
                {
                    string cd = string.Empty;
                    return JavaScript("window.top.location.href ='" + Url.Action("Register") + "';");
                }

                if (Common.ParseString(formCollection["btnEdit"]).Equals("Edit"))
                {
                    string cd = (Common.ParseString(formCollection["IdList"]));
                    string[] IdList = Common.ParseArray(cd, Setting.DefaultSeparator);
                    if (IdList.Count() > 0)
                    {
                        //ModelState.AddModelError("", "Please select one");
                        cd = IdList[0];
                    }
                    return JavaScript("window.top.location.href ='" + Url.Action("Register/") + cd + "';");
                }

                if (Common.ParseString(formCollection["btnDelete"]).Equals("Delete"))
                {
                    string cd = (Common.ParseString(formCollection["IdList"]));
                    string[] IdList = Common.ParseArray(cd, Setting.DefaultSeparator);

                    model.Delete(IdList);
                }

                //clsM01002Dto dto = new clsM01002Dto();
                List<clsM01002DetailDto> listM01002Dto = new List<clsM01002DetailDto>();

                listM01002Dto = model.GetCategories(Common.Trim(dto.CategoryName));
                // dto.Details = listM01002Dto;
                if (Request.IsAjaxRequest())
                {
                    currentPageIndex = page.HasValue ? page.Value : 1;
                    var list = listM01002Dto.ToPagedList(currentPageIndex, Common.GetNumberOfRow());
                    return PartialView("ucCategoryList", list);
                }
            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return View("Error");
            }
            return View(dto);
        }


        /// <summary>
        /// To regist ne proudct category.
        /// </summary>
        /// <param name="cd"></param>
        /// <returns></returns>
        [Privilege]
        public ActionResult Register(string id)
        {
            clsM01002DetailDto dto = new clsM01002DetailDto();
            clsM01002BL bl = new clsM01002BL();
            dto.CategoryCD = Common.ParseString(id);
            bl.InitAndDetermineModeForDto(dto);
            bl.GetEdtingCagetoryToDto(dto);

            return View(dto);
        }

        /// <summary>
        /// To save data to database.
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        [Privilege]
        [HttpPost]
        public ActionResult Register(clsM01002DetailDto dto)
        {
            try
            {
                clsM01002BL bl = new clsM01002BL();
                bl.InitAndDetermineModeForDto(dto);

                StaffLoginInfo info = (StaffLoginInfo)Session["StaffLoginInfoSection"];
                if (!Common.IsNullOrEmpty(info))
                {
                    dto.CreatePersonCd = info.PERSON_CD;
                    dto.UpdatePersonCd = info.PERSON_CD;
                }

                //not validate dto yet.
                bl.PerformCheck(dto, ModelState);
                if (!Common.IsNullOrEmpty(dto.Messsage))
                {
                    return View("Register", dto);
                }

                //Execute saving data to database.
                clsM01002Models model = new clsM01002Models();
                if (dto.ScreenMode == EnumScreenMode.Add)
                {
                    model.Add(dto.ParrentCategoryCd, dto.CategoryName, dto.CreatePersonCd, dto.SortOrder, dto.CategoryLevel);
                    new clsL01001Models().AddNewEvent(Common.GenerateRandomString(30), EnumLogType.Admin, ConstFunctionTitle.titleM01002Index, EnumAction.Add, dto.CategoryName, dto.CreatePersonCd);
                }
                else
                {
                    DateTime currentDate = Common.GetCurrentDate();
                    model.Update(dto.CategoryCD, dto.CategoryName, dto.ParrentCategoryCd, dto.SortOrder, dto.CategoryLevel, dto.UpdatePersonCd, dto.UpdateDate);
                    new clsL01001Models().AddNewEvent(Common.GenerateRandomString(30), EnumLogType.Admin, ConstFunctionTitle.titleM01002Index, EnumAction.Edit, dto.CategoryName, dto.CreatePersonCd);
                }
                return RedirectToAction("Index");


            }
            catch (Exception ex)
            {
                logger.Error(ex);
                return View("Error");
            }
        }

    }
}
