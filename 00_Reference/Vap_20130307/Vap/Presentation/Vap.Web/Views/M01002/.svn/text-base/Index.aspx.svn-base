<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<Vap.Web.Dto.clsM01002Dto>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    <%=Html.Encode(Vap.Settings.Constants.ConstFunctionTitle.titleM01002Index) %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h2>
        <%=Html.Encode(Vap.Settings.Constants.ConstFunctionTitle.titleM01002Index) %></h2>

    <script src="../../Scripts/Vap.Scripts/vap.checkbox.all.js" type="text/javascript"></script>

    <script src="../../Scripts/Vap.Scripts/vap.ajaxPaging.effect.js" type="text/javascript"></script>

    <%Html.RenderPartial("ucAjaxLoaderContent");%>
    <% using (Ajax.BeginForm("Index", "M01002", new AjaxOptions { HttpMethod = "post", UpdateTargetId = "divDetail", OnBegin = "AjaxFormBeging", OnSuccess = "AjaxFormSuccess", OnFailure = "AjaxFormFailure" }))
       {%>
    <table class="data-table">
        <tr>
            <th style="text-align: center" scope="col" class="th100">
                Category Name
            </th>
            <th style="text-align: center" scope="col" class="th200">
                Parrent Category
            </th>
        </tr>
        <tr>
            <td style="width: 90px">
                <%= Html.TextBoxFor(model => model.CategoryName, new { @class = "txt200", maxlength = "50" })%>
            </td>
            <td>
                <%= Html.TextBoxFor(model => model.ParrentCategoryCD, new { @class = "txt200", maxlength = "50" })%>
            </td>
        </tr>
    </table>
    <input type="submit" name="btSearch" value="Search" class="btn50" />
    <input type="submit" name="btnAdd" value="Add" id="btnAdd" class="btn50" />
    <input type="submit" name="btnEdit" value="Edit" id="btnEdit" disabled="disabled"class="btn50" />
    <input type="submit" name="btnDelete" value="Delete" id="btnDelete" disabled="disabled"class="btn50" />
    <div id="divDetail">
        <%Html.RenderPartial("ucCategoryList", Model.Details);%>
    </div>
    <%} %>
</asp:Content>
