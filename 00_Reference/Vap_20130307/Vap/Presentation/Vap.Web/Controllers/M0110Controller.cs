//Author:       NTLam
//Create date:  29/08/2012
//Description:  To management the role and Privilege for each role.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Text.RegularExpressions;
using Vap.Web.Models.Authorization;
using Vap.Data.Mapping;
using Vap.Plugin.Admin.UserRoles.Models;
using Vap.Plugin.Admin.UserRoles.Dto;
using Vap.Commons;
using Vap.Core;
using log4net;

namespace Vap.Web.Controllers
{
    public class M0110Controller : Controller
    {
        private static readonly ILog logger = LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        M0110_Models model = new M0110_Models();

        [CustomAuthorize]
        public ActionResult Index(string Edit, FormCollection form, int[] roleCds)
        {
            //Load All User Roles
            List<M_ROLE> allRoles = model.getAllRoles();
            //must compare this way
            if (Edit == "Edit")
            {
                return RedirectToAction("Detail/" + Common.ParseInt(roleCds[0]));
            }
            return View(allRoles);
        }

        [Privilege]
        public ActionResult Add()
        {
            RoleMenuInfoDto info = new RoleMenuInfoDto();
            List<M_MENU> menus = model.GetAllMenu();
            info.menus = menus;
            return View(info);
        }

        ///<summary>
        ///Display Detail View
        ///</summary>
        ///<param name="id"></param>
        ///<returns></returns>
        [Privilege]
        public ActionResult Detail(int id)
        {
            RoleMenuInfoDto info = model.GetAllMenuPermited(id);

            TempData["updateDate"] = Common.GetCurrentDate().Ticks;
            return View(info);
        }

        [HttpPost]
        [Privilege]
        [ValidateInput(false)]
        public ActionResult Save(FormCollection form, RoleMenuInfoDto model1, string add)
        {

            string roleName = Common.replaceSpaces(form["roleName"]);
            bool all_company_flg = Common.ParseBoolean(form["all_company_flg"]);
            SortedDictionary<int, string> menuIdAndPermissons = new SortedDictionary<int, string>();

            RoleMenuInfoDto roleMenuInfo = new RoleMenuInfoDto();

            if (ModelState.IsValid)
            {
                int personCd = 0;
                if (!Common.IsNullOrEmpty(Session["COMPANY_CD_SECTION"]))
                {
                    StaffLoginInfo info = (StaffLoginInfo)Session["StaffLoginInfoSection"];
                    if (!Common.IsNullOrEmpty(info))
                    {
                        personCd = info.PERSON_CD;
                    }
                }
                //check whether user role is existed
                DateTime current = Common.GetCurrentDate();
                bool existed = model.GetRoleByName(roleName);
                if (!existed)
                {
                    DateTime create_date = current;
                    M_ROLE newlyRole = new M_ROLE();
                    newlyRole.ROLE_NAME = roleName;
                    newlyRole.CREATE_DATE = current;
                    newlyRole.ALL_COMPANY_FLAG = all_company_flg;
                    newlyRole.CREATE_PERSON_CD = personCd;
                    newlyRole.UPDATE_PERSON_CD = personCd;
                    newlyRole.UPDATE_DATE = current;

                    foreach (var key in form)
                    {
                        if (key.ToString().StartsWith("readonly"))
                        {
                            int oneMenucd = Common.ParseInt(Common.ParseString(key).Replace("readonly", ""));
                            string oneReadonly = form[key.ToString()].Trim();
                            menuIdAndPermissons.Add(oneMenucd, oneReadonly);
                        }
                    }
                    model.AddRoleMenu(newlyRole, menuIdAndPermissons);
                    //response insert new role successfully 
                    TempData["Empty"] = Vap.Commons.CommonMessages.Common_Msg_InsertSuccess;
                }
                else
                {
                    roleMenuInfo = model.CreateRoleMenuInfo(form, roleName, all_company_flg);
                    TempData["Empty"] = Vap.Commons.CommonMessages.M0110_Msg02;
                    return View("Add", roleMenuInfo);
                }
                return RedirectToAction("Index");
            }
            else
            {
                //init date according to state before cause error
                roleMenuInfo = model.CreateRoleMenuInfo(form, roleName, all_company_flg);
                TempData["Empty"] = Vap.Commons.CommonMessages.Common_Msg_ManatoryFields;
                return View("Add", roleMenuInfo);
            }
        }

        ///<summary>
        ///Excute Edit User Role Controll
        ///</summary>
        ///<remarks>
        ///</remarks>
        ///<param name="roleCd,form,model"></param>
        ///<returns></returns>
        [HttpPost]
        [Privilege]
        [ValidateInput(false)]
        public ActionResult Edit(int roleCd, FormCollection form, RoleMenuInfoDto model1)
        {
            int personCd = 0;
            if (!Common.IsNullOrEmpty(Session["COMPANY_CD_SECTION"]))
            {
                StaffLoginInfo info = (StaffLoginInfo)Session["StaffLoginInfoSection"];
                if (!Common.IsNullOrEmpty(info))
                {
                    personCd = info.PERSON_CD;
                }
            }
            long updateDate = Common.ParseLong(TempData["updateDate"]);
            string roleName = Common.replaceSpaces(form["roleName"]);
            bool all_company_flg = Common.ParseBoolean(form["all_company_flg"]);
            SortedDictionary<int, string> menuIdAndPermissons = new SortedDictionary<int, string>();
            RoleMenuInfoDto roleMenuInfo = new RoleMenuInfoDto();

            if (ModelState.IsValid)
            {
                if (!roleName.Equals(string.Empty))
                {
                    bool isValid = model.CheckUserRoleBeforeEdit(roleCd, roleName);
                    //In case new role name is Valid to edit
                    if (isValid)
                    {
                        DateTime createDate = Common.GetCurrentDate();
                        M_ROLE newlyRole = new M_ROLE();
                        newlyRole.ROLE_NAME = roleName;
                        newlyRole.CREATE_DATE = createDate;
                        newlyRole.ALL_COMPANY_FLAG = all_company_flg;
                        newlyRole.UPDATE_DATE = createDate;
                        newlyRole.UPDATE_PERSON_CD = personCd;
                        foreach (var key in form)
                        {
                            if (key.ToString().StartsWith("readonly"))
                            {
                                int oneMenucd = Common.ParseInt(Common.ParseString(key).Replace("readonly", ""));
                                string oneReadonly = form[key.ToString()].Trim();
                                menuIdAndPermissons.Add(oneMenucd, oneReadonly);
                            }
                        }

                        try
                        {
                            M_ROLE oldRole = model.GetRoleByCD(roleCd);
                            long updateDateExist = 0;
                            if (!Common.IsNullOrEmpty(oldRole))
                            {
                                if (oldRole.UPDATE_DATE.HasValue)
                                {
                                    updateDateExist = oldRole.UPDATE_DATE.Value.Ticks;
                                    if ((updateDateExist - updateDate > 0) && (!oldRole.UPDATE_PERSON_CD.Equals(personCd)))
                                    {
                                        int oldCd = Common.ParseInt(oldRole.UPDATE_PERSON_CD);
                                        roleMenuInfo = model.GetAllMenuPermited(roleCd);
                                        roleMenuInfo.fullName = model.GetStaffNameByPersonCD(oldCd);
                                        TempData["ConflitUpdate"] = string.Format(Vap.Commons.CommonMessages.Common_Msg_UpdateDuplicate, roleMenuInfo.fullName);
                                        return View("Detail", roleMenuInfo);
                                    }
                                }
                            }
                            model.EditRoleMenu(roleCd, newlyRole, menuIdAndPermissons);
                            //response insert new role successfully 
                            TempData["Empty"] = Vap.Commons.CommonMessages.Common_Msg_UpdateSuccess;
                        }
                        catch (Exception ex)
                        {
                            logger.Error(ex);
                            TempData["Error"] = Vap.Commons.CommonMessages.Common_Msg_UpdateFail;
                            return View("Detail", roleMenuInfo);
                        }
                    }
                    else
                    {
                        roleMenuInfo = model.CreateRoleMenuInfo(form, roleName, all_company_flg);
                        TempData["Empty"] = Vap.Commons.CommonMessages.M0110_Msg02;
                        return View("Detail", roleMenuInfo);
                    }
                }
                return RedirectToAction("Index");
            }
            //in case model state is invalid
            else
            {
                roleMenuInfo = model.CreateRoleMenuInfo(form, roleName, all_company_flg);
                TempData["Empty"] = Vap.Commons.CommonMessages.Common_Msg_ManatoryFields;
                return View("Detail", roleMenuInfo);
            }
        }

    }
}
