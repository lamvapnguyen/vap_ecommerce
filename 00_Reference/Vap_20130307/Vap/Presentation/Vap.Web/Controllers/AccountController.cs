using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Security.Principal;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Security;
using Vap.Web.Models.Authorization;
using Vap.Web.Models;
using Vap.Data.Mapping;
using Vap.Core;
using Vap.Commons;

namespace Vap.Web.Controllers
{

    [HandleError]
    public class AccountController : Controller
    {

        public IFormsAuthenticationService FormsService { get; set; }
        public IMembershipService MembershipService { get; set; }


        protected override void Initialize(RequestContext requestContext)
        {
            if (FormsService == null) { FormsService = new FormsAuthenticationService(); }
            if (MembershipService == null) { MembershipService = new AccountMembershipService(); }

            base.Initialize(requestContext);
        }

        // **************************************
        // URL: /Account/LogOn
        // **************************************

        public ActionResult LogOn()
        {
            return View();
        }

        [HttpPost]
        public ActionResult LogOn(LogOnModel model, string returnUrl)
        {
            if (ModelState.IsValid)
            {
                if (MembershipService.ValidateUser(model.UserName, model.Password))
                {
                    try
                    {
                        M_PERSON_MODELS personModels = new M_PERSON_MODELS();
                        M_PERSON person = personModels.GetPersonObjByUserNameAndPassword(model.UserName, model.Password);

                        StaffLoginInfo staffInfo = new StaffLoginInfo();
                        if (!Common.IsNullOrEmpty(person))
                        {
                            staffInfo.COMPANY_CD = person.COMPANY_CD;
                            staffInfo.PERSON_CD = person.PERSON_CD;
                            staffInfo.STAFF_ID = person.STAFF_ID;
                            staffInfo.STAFF_NAME = person.M_STAFF.FIRST_NAME;

                            M_ROLE theRole = new M_ROLE_MODELS().GetRoleByCD(person.ROLE_CD);
                            if (!Common.IsNullOrEmpty(theRole))
                            {
                                if (theRole.ALL_COMPANY_FLAG)
                                {
                                    staffInfo.COMPANIES = new M_COMPANY_MODELS().GetAllCompanies();
                                }
                            }
                            staffInfo.Menus = new M_MENU_MODELS().GetRootMenusByPersonCD(person.PERSON_CD);
                        }
                        Session["StaffLoginInfoSection"] = staffInfo;

                        //Set company cd value for Session["COMPANY_CD_SECTION"] 
                        Session["COMPANY_CD_SECTION"] = person.COMPANY_CD;

                        FormsService.SignIn(model.UserName, model.RememberMe);

                        //If has not reseted password yet, redirect Change Password screen
                        if (person.RESET_FLG.HasValue)
                        {
                            if (person.RESET_FLG.Value)
                            {
                                ModelState.AddModelError("chuyen", Vap.Commons.CommonMessages.L0101_Msg03);
                                return RedirectToAction("ChangePassword", "Account");
                            }
                        }

                        //If date that change password >90, redirect HomePage
                        if (person.LAST_CHANGE_PWD_DATE.HasValue)
                        {
                            int days = Common.SubtractDateTime(Common.GetCurrentDate(), person.LAST_CHANGE_PWD_DATE.Value);
                            if (days > 90)
                            {
                                //TempData["Msg"] = HRA_KUMON.MessageResource.L0101_Msg03;
                                //return RedirectToAction("ChangePassword", "Account");
                                ViewData["errorMessage"] = Vap.Commons.CommonMessages.L0101_Msg03;
                                ModelState.AddModelError("", Vap.Commons.CommonMessages.L0101_Msg03);
                                return RedirectToAction("Index", "Home", new { m = -1 });
                            }
                        }

                        if (!Common.IsNullOrEmpty(returnUrl))
                        {
                            return Redirect(returnUrl);
                        }
                        else
                        {
                            return RedirectToAction("Index", "Home");
                        }
                    }
                    catch
                    {
                        ModelState.AddModelError(string.Empty, Vap.Commons.CommonMessages.L0101_Msg02);
                    }
                }
                else
                {
                    ModelState.AddModelError(string.Empty, Vap.Commons.CommonMessages.L0101_Msg02);
                }
            }
            else
            {
                ModelState.AddModelError(string.Empty, Vap.Commons.CommonMessages.Common_Msg_ManatoryFields);
            }
            //If we got this far, something failed, redisplay form
            return View(model);
        }

        // **************************************
        // URL: /Account/LogOff
        // **************************************

        public ActionResult LogOff()
        {
            FormsService.SignOut();

            return RedirectToAction("Index", "Home");
        }

        // **************************************
        // URL: /Account/Register
        // **************************************

        public ActionResult Register()
        {
            ViewData["PasswordLength"] = MembershipService.MinPasswordLength;
            return View();
        }

        [HttpPost]
        public ActionResult Register(RegisterModel model)
        {
            if (ModelState.IsValid)
            {
                // Attempt to register the user
                MembershipCreateStatus createStatus = MembershipService.CreateUser(model.UserName, model.Password, model.Email);

                if (createStatus == MembershipCreateStatus.Success)
                {
                    FormsService.SignIn(model.UserName, false /* createPersistentCookie */);
                    return RedirectToAction("Index", "Home");
                }
                else
                {
                    ModelState.AddModelError("", AccountValidation.ErrorCodeToString(createStatus));
                }
            }

            // If we got this far, something failed, redisplay form
            ViewData["PasswordLength"] = MembershipService.MinPasswordLength;
            return View(model);
        }

        // **************************************
        // URL: /Account/ChangePassword
        // **************************************

        [Authorize]
        public ActionResult ChangePassword()
        {
            ViewData["PasswordLength"] = MembershipService.MinPasswordLength;
            return View();
        }

        [Authorize]
        [HttpPost]
        public ActionResult ChangePassword(ChangePasswordModel model)
        {
            if (ModelState.IsValid)
            {
                if (MembershipService.ChangePassword(User.Identity.Name, model.OldPassword, model.NewPassword))
                {
                    return RedirectToAction("ChangePasswordSuccess");
                }
                else
                {
                    ModelState.AddModelError("", "The current password is incorrect or the new password is invalid.");
                }
            }

            // If we got this far, something failed, redisplay form
            ViewData["PasswordLength"] = MembershipService.MinPasswordLength;
            return View(model);
        }

        // **************************************
        // URL: /Account/ChangePasswordSuccess
        // **************************************

        public ActionResult ChangePasswordSuccess()
        {
            return View();
        }

    }
}
