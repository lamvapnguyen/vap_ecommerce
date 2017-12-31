using System;
using System.Text;
using System.Web.Mvc;
using System.Web;
using System.Globalization;
using System.Collections.Generic;
using System.Web.Mvc.Ajax;

namespace Vap.Helpers
{
    public static class PagingHelpers
    {
        public static MvcHtmlString PageLinks(this AjaxHelper ajax, string actionName, int department,
            string target, PagingInfo pagingInfo)
        {

            StringBuilder result = new StringBuilder();
            for (int i = 1; i <= pagingInfo.TotalPages; i++)
            {
                result.AppendLine(AjaxExtensions.ActionLink(ajax, i.ToString(), actionName, new { DepartmentID = department, page = i }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());
            }
            return MvcHtmlString.Create(result.ToString());
        }

        public static MvcHtmlString PageLinksCompact(this AjaxHelper ajax, string actionName, int department,
            string target, PagingInfo pagingInfo)
        {

            StringBuilder result = new StringBuilder();
            result.AppendLine(AjaxExtensions.ActionLink(ajax, "First", actionName, new { DepartmentID = department, page = 1 }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());
            result.AppendLine(AjaxExtensions.ActionLink(ajax, "<", actionName, new { DepartmentID = department, page = pagingInfo.CurrentPage > 1 ? pagingInfo.CurrentPage - 1 : 1 }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());
            if (pagingInfo.TotalPages <= 10)
            {
                for (int i = 1; i <= pagingInfo.TotalPages; i++)
                {
                    if (i == pagingInfo.CurrentPage)
                    {
                        result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { DepartmentID = department, page = i }, new AjaxOptions { UpdateTargetId = target }, new { id = "page_selected" }).ToHtmlString());

                    }
                    else
                        result.AppendLine(AjaxExtensions.ActionLink(ajax, i.ToString(), actionName, new { DepartmentID = department, page = i }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());

                }
            }
            else if (pagingInfo.TotalPages - pagingInfo.CurrentPage <= 10)
            {
                for (int i = pagingInfo.TotalPages - 10; i <= pagingInfo.TotalPages; i++)
                {
                    if (i == pagingInfo.CurrentPage)
                    {
                        result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { DepartmentID = department, page = i }, new AjaxOptions { UpdateTargetId = target }, new { id = "page_selected" }).ToHtmlString());
                    }
                    else
                        result.AppendLine(AjaxExtensions.ActionLink(ajax, i.ToString(), actionName, new { DepartmentID = department, page = i }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());

                }
            }
            else
            {
                if (pagingInfo.CurrentPage <= 3)
                {
                    for (int i = 1; i <= 6; i++)
                    {
                        if (i == pagingInfo.CurrentPage)
                        {
                            result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { DepartmentID = department, page = i }, new AjaxOptions { UpdateTargetId = target }, new { id = "page_selected" }).ToHtmlString());

                        }
                        else
                            result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { DepartmentID = department, page = i }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());

                    }
                }
                else
                    for (int i = pagingInfo.CurrentPage - 3; i < pagingInfo.CurrentPage + 3; i++)
                    {
                        if (i == pagingInfo.CurrentPage)
                        {
                            result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { DepartmentID = department, page = i }, new AjaxOptions { UpdateTargetId = target }, new { id = "page_selected" }).ToHtmlString());
                        }
                        else
                            result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { DepartmentID = department, page = i }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());

                    }

                result.AppendLine("...");

                for (int i = pagingInfo.TotalPages - 3; i <= pagingInfo.TotalPages; i++)
                {
                    result.AppendLine(AjaxExtensions.ActionLink(ajax, i.ToString(), actionName, new { DepartmentID = department, page = i }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());
                }
            }
            result.AppendLine(AjaxExtensions.ActionLink(ajax, ">", actionName, new { DepartmentID = department, page = pagingInfo.CurrentPage > pagingInfo.TotalPages ? pagingInfo.TotalPages : pagingInfo.CurrentPage + 1 }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());
            result.AppendLine(AjaxExtensions.ActionLink(ajax, "Last", actionName, new { DepartmentID = department, page = pagingInfo.TotalPages }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());
            return MvcHtmlString.Create(result.ToString());
        }


        public static MvcHtmlString PageLinksSection(this AjaxHelper ajax, string actionName, string COUNTRY_CD, string COMPANY_CD, string SECTION_CD,
            string target, PagingInfo pagingInfo)
        {

            StringBuilder result = new StringBuilder();
            result.AppendLine(AjaxExtensions.ActionLink(ajax, "First", actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, SECTION_CD = SECTION_CD, page = 1 }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());
            result.AppendLine(AjaxExtensions.ActionLink(ajax, "<", actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, SECTION_CD = SECTION_CD, page = pagingInfo.CurrentPage > 1 ? pagingInfo.CurrentPage - 1 : 1 }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());
            if (pagingInfo.TotalPages <= 10)
            {
                for (int i = 1; i <= pagingInfo.TotalPages; i++)
                {
                    if (i == pagingInfo.CurrentPage)
                    {
                        result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, SECTION_CD = SECTION_CD, page = i }, new AjaxOptions { UpdateTargetId = target }, new { id = "page_selected" }).ToHtmlString());

                    }
                    else
                        result.AppendLine(AjaxExtensions.ActionLink(ajax, i.ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, SECTION_CD = SECTION_CD, page = i }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());

                }
            }
            else if (pagingInfo.TotalPages - pagingInfo.CurrentPage <= 10)
            {
                for (int i = pagingInfo.TotalPages - 10; i <= pagingInfo.TotalPages; i++)
                {
                    if (i == pagingInfo.CurrentPage)
                    {
                        result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, SECTION_CD = SECTION_CD, page = i }, new AjaxOptions { UpdateTargetId = target }, new { id = "page_selected" }).ToHtmlString());
                    }
                    else
                        result.AppendLine(AjaxExtensions.ActionLink(ajax, i.ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, SECTION_CD = SECTION_CD, page = i }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());

                }
            }
            else
            {
                if (pagingInfo.CurrentPage <= 3)
                {
                    for (int i = 1; i <= 6; i++)
                    {
                        if (i == pagingInfo.CurrentPage)
                        {
                            result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, SECTION_CD = SECTION_CD, page = i }, new AjaxOptions { UpdateTargetId = target }, new { id = "page_selected" }).ToHtmlString());

                        }
                        else
                            result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, SECTION_CD = SECTION_CD, page = i }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());

                    }
                }
                else
                    for (int i = pagingInfo.CurrentPage - 3; i < pagingInfo.CurrentPage + 3; i++)
                    {
                        if (i == pagingInfo.CurrentPage)
                        {
                            result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, SECTION_CD = SECTION_CD, page = i }, new AjaxOptions { UpdateTargetId = target }, new { id = "page_selected" }).ToHtmlString());
                        }
                        else
                            result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, SECTION_CD = SECTION_CD, page = i }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());

                    }

                result.AppendLine("...");

                for (int i = pagingInfo.TotalPages - 3; i <= pagingInfo.TotalPages; i++)
                {
                    result.AppendLine(AjaxExtensions.ActionLink(ajax, i.ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, SECTION_CD = SECTION_CD, page = i }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());
                }
            }
            result.AppendLine(AjaxExtensions.ActionLink(ajax, ">", actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, SECTION_CD = SECTION_CD, page = pagingInfo.TotalPages > pagingInfo.CurrentPage ? pagingInfo.CurrentPage + 1 : pagingInfo.CurrentPage }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());
            result.AppendLine(AjaxExtensions.ActionLink(ajax, "Last", actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, SECTION_CD = SECTION_CD, page = pagingInfo.TotalPages }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());
            return MvcHtmlString.Create(result.ToString());
        }

        public static MvcHtmlString PageLinksGroup(this AjaxHelper ajax, string actionName, string COUNTRY_CD, string COMPANY_CD, string GROUP_CD,
            string target, PagingInfo pagingInfo)
        {

            StringBuilder result = new StringBuilder();
            result.AppendLine(AjaxExtensions.ActionLink(ajax, "First", actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, GROUP_CD = GROUP_CD, page = 1 }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());
            result.AppendLine(AjaxExtensions.ActionLink(ajax, "<", actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, GROUP_CD = GROUP_CD, page = pagingInfo.CurrentPage > 1 ? pagingInfo.CurrentPage - 1 : 1 }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());
            if (pagingInfo.TotalPages <= 10)
            {
                for (int i = 1; i <= pagingInfo.TotalPages; i++)
                {
                    if (i == pagingInfo.CurrentPage)
                    {
                        result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, GROUP_CD = GROUP_CD, page = i }, new AjaxOptions { UpdateTargetId = target }, new { id = "page_selected" }).ToHtmlString());

                    }
                    else
                        result.AppendLine(AjaxExtensions.ActionLink(ajax, i.ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, GROUP_CD = GROUP_CD, page = i }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());

                }
            }
            else if (pagingInfo.TotalPages - pagingInfo.CurrentPage <= 10)
            {
                for (int i = pagingInfo.TotalPages - 10; i <= pagingInfo.TotalPages; i++)
                {
                    if (i == pagingInfo.CurrentPage)
                    {
                        result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, GROUP_CD = GROUP_CD, page = i }, new AjaxOptions { UpdateTargetId = target }, new { id = "page_selected" }).ToHtmlString());
                    }
                    else
                        result.AppendLine(AjaxExtensions.ActionLink(ajax, i.ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, GROUP_CD = GROUP_CD, page = i }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());

                }
            }
            else
            {
                if (pagingInfo.CurrentPage <= 3)
                {
                    for (int i = 1; i <= 6; i++)
                    {
                        if (i == pagingInfo.CurrentPage)
                        {
                            result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, GROUP_CD = GROUP_CD, page = i }, new AjaxOptions { UpdateTargetId = target }, new { id = "page_selected" }).ToHtmlString());

                        }
                        else
                            result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, GROUP_CD = GROUP_CD, page = i }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());

                    }
                }
                else
                    for (int i = pagingInfo.CurrentPage - 3; i < pagingInfo.CurrentPage + 3; i++)
                    {
                        if (i == pagingInfo.CurrentPage)
                        {
                            result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, GROUP_CD = GROUP_CD, page = i }, new AjaxOptions { UpdateTargetId = target }, new { id = "page_selected" }).ToHtmlString());
                        }
                        else
                            result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, GROUP_CD = GROUP_CD, page = i }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());

                    }

                result.AppendLine("...");

                for (int i = pagingInfo.TotalPages - 3; i <= pagingInfo.TotalPages; i++)
                {
                    result.AppendLine(AjaxExtensions.ActionLink(ajax, i.ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, GROUP_CD = GROUP_CD, page = i }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());
                }
            }           
            result.AppendLine(AjaxExtensions.ActionLink(ajax, ">", actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, GROUP_CD = GROUP_CD, page = pagingInfo.TotalPages > pagingInfo.CurrentPage ? pagingInfo.CurrentPage + 1 : pagingInfo.CurrentPage }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());
            result.AppendLine(AjaxExtensions.ActionLink(ajax, "Last", actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, GROUP_CD = GROUP_CD, page = pagingInfo.TotalPages }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());
            return MvcHtmlString.Create(result.ToString());
        }

        public static MvcHtmlString PageLinksAssessmentYear(this AjaxHelper ajax, string actionName, string COUNTRY_CD, string COMPANY_CD, int? ASSESSMENT_YEAR,
            string target, PagingInfo pagingInfo)
        {

            StringBuilder result = new StringBuilder();
            result.AppendLine(AjaxExtensions.ActionLink(ajax, "First", actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, ASSESSMENT_YEAR = ASSESSMENT_YEAR, page = 1 }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());
            result.AppendLine(AjaxExtensions.ActionLink(ajax, "<", actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, ASSESSMENT_YEAR = ASSESSMENT_YEAR, page = pagingInfo.CurrentPage > 1 ? pagingInfo.CurrentPage - 1 : 1 }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());
            if (pagingInfo.TotalPages <= 10)
            {
                for (int i = 1; i <= pagingInfo.TotalPages; i++)
                {
                    if (i == pagingInfo.CurrentPage)
                    {
                        result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, ASSESSMENT_YEAR = ASSESSMENT_YEAR, page = i }, new AjaxOptions { UpdateTargetId = target }, new { id = "page_selected" }).ToHtmlString());

                    }
                    else
                        result.AppendLine(AjaxExtensions.ActionLink(ajax, i.ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, ASSESSMENT_YEAR = ASSESSMENT_YEAR, page = i }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());

                }
            }
            else if (pagingInfo.TotalPages - pagingInfo.CurrentPage <= 10)
            {
                for (int i = pagingInfo.TotalPages - 10; i <= pagingInfo.TotalPages; i++)
                {
                    if (i == pagingInfo.CurrentPage)
                    {
                        result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, ASSESSMENT_YEAR = ASSESSMENT_YEAR, page = i }, new AjaxOptions { UpdateTargetId = target }, new { id = "page_selected" }).ToHtmlString());
                    }
                    else
                        result.AppendLine(AjaxExtensions.ActionLink(ajax, i.ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, ASSESSMENT_YEAR = ASSESSMENT_YEAR, page = i }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());

                }
            }
            else
            {
                if (pagingInfo.CurrentPage <= 3)
                {
                    for (int i = 1; i <= 6; i++)
                    {
                        if (i == pagingInfo.CurrentPage)
                        {
                            result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, ASSESSMENT_YEAR = ASSESSMENT_YEAR, page = i }, new AjaxOptions { UpdateTargetId = target }, new { id = "page_selected" }).ToHtmlString());

                        }
                        else
                            result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, ASSESSMENT_YEAR = ASSESSMENT_YEAR, page = i }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());

                    }
                }
                else
                    for (int i = pagingInfo.CurrentPage - 3; i < pagingInfo.CurrentPage + 3; i++)
                    {
                        if (i == pagingInfo.CurrentPage)
                        {
                            result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, ASSESSMENT_YEAR = ASSESSMENT_YEAR, page = i }, new AjaxOptions { UpdateTargetId = target }, new { id = "page_selected" }).ToHtmlString());
                        }
                        else
                            result.AppendLine(AjaxExtensions.ActionLink(ajax, (i).ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, ASSESSMENT_YEAR = ASSESSMENT_YEAR, page = i }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());

                    }

                result.AppendLine("...");

                for (int i = pagingInfo.TotalPages - 3; i <= pagingInfo.TotalPages; i++)
                {
                    result.AppendLine(AjaxExtensions.ActionLink(ajax, i.ToString(), actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, ASSESSMENT_YEAR = ASSESSMENT_YEAR, page = i }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());
                }
            }
            result.AppendLine(AjaxExtensions.ActionLink(ajax, ">", actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, ASSESSMENT_YEAR = ASSESSMENT_YEAR, page = pagingInfo.TotalPages > pagingInfo.CurrentPage ? pagingInfo.CurrentPage + 1 : pagingInfo.CurrentPage }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());
            result.AppendLine(AjaxExtensions.ActionLink(ajax, "Last", actionName, new { COUNTRY_CD = COUNTRY_CD, COMPANY_CD = COMPANY_CD, ASSESSMENT_YEAR = ASSESSMENT_YEAR, page = pagingInfo.TotalPages }, new AjaxOptions { UpdateTargetId = target }).ToHtmlString());
            return MvcHtmlString.Create(result.ToString());
        }
    }
}