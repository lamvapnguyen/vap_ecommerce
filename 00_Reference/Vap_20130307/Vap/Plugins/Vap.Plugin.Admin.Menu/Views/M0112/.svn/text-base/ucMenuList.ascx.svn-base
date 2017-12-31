<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<IEnumerable<M_MENU>>" %>

<%= Html.ActionLink("Create", "Create", "M0112")%>
<br /><br />
<table>
    <tr>
        <th>
        </th>
        <th>
            MENU_CD
        </th>
        <th>
            MENU_NAME
        </th>
        <th>
            SORT_ORDER
        </th>
        <th>
            MENU_LEVEL
        </th>
        <th>
            MENU_TYPE
        </th>
        <th>
            URL
        </th>
        <th>
            PARENT_MENU_CD
        </th>
    </tr>
    <% foreach (var item in Model)
       { %>
    <tr>
        <td>
            <%= Html.ActionLink("Edit", "Edit", new { id=item.MENU_CD }) %>
           <%-- |
            <%= Html.ActionLink("Delete", "Delete", new { id=item.MENU_CD })%>--%>
        </td>
        <td>
            <%= Html.Encode(item.MENU_CD) %>
        </td>
        <td>
            <%= Html.Encode(item.MENU_NAME.Trim()) %>
        </td>
        <td>
            <%= Html.Encode(item.SORT_ORDER) %>
        </td>
        <td>
            <%= Html.Encode(item.MENU_LEVEL) %>
        </td>
        <td>
            <% if (!string.IsNullOrEmpty(item.MENU_TYPE))
                   Html.Encode(item.MENU_TYPE.Trim());%>
        </td>
        <td>
            <% if (!string.IsNullOrEmpty(item.URL))
                   Html.Encode(item.URL.Trim());%>
        </td>
        <td>
            <% if (item.M_MENU1 != null)
               {
                   Html.Encode(item.M_MENU1.MENU_NAME.Trim());
               }%>
        </td>
    </tr>
    <% } %>
</table>

<p>
   <%= Html.ActionLink("Create", "Create", "M0112")%>
</p>
