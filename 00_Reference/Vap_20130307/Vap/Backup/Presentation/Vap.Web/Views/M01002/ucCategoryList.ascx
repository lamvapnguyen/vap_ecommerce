<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<IPagedList<Vap.Web.Dto.clsM01002DetailDto>>" %>
<table class="data-table">
    <tr>
        <th>
        </th>
        <th>
            Category Name
        </th>
        <th>
            Sort Order
        </th>
        <th>
            Level
        </th>
        <th>
            Parrent Category
        </th>
        <th>
            Update Date
        </th>
        <th>
            Update Person
        </th>
    </tr>
    <% foreach (var item in Model)
       { %>
    <tr>
        <td>
            <%--<input type="checkbox" name="IdList" id="IdList" class='unique' value="<%= Html.Encode(item.CategoryCD) %>" />--%>
            <input type="checkbox" name="IdList" id="IdList" value="<%= Html.Encode(item.CategoryCD) %>" />
        </td>
        <td>
            <%= Html.Encode(item.CategoryName) %>
        </td>
        <td>
            <%= Html.Encode(item.SortOrder) %>
        </td>
        <td>
            <%= Html.Encode(item.CategoryLevel) %>
        </td>
        <td>
            <%= Html.Encode(item.ParrentCategoryName) %>
        </td>
        <td>
            <%= Html.Encode(String.Format("{0:g}", item.UpdateDate)) %>
        </td>
        <td>
            <%= Html.Encode(item.UpdatePersonCd) %>
        </td>
    </tr>
    <% } %>
</table>
<div class="pager">
    <%= Ajax.Pager(new AjaxOptions
{
    UpdateTargetId = "divDetail",
    OnBegin = "beginPaging", 
                           OnSuccess = "successPaging", OnFailure = "failurePaging" 
                           },ViewData.Model.PageSize, ViewData.Model.PageNumber, 
                           ViewData.Model.TotalItemCount, new { controller = "M01002", 
                           action = "Index" })%>
</div>
