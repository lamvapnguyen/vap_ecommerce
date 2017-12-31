<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<IEnumerable<Vap.Data.Mapping.M_STAFF>>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Index
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>Index</h2>

    <table>
        <tr>
            <th></th>
            <th>
                COMPANY_CD
            </th>
            <th>
                STAFF_ID
            </th>
            <th>
                FIRST_NAME
            </th>
            <th>
                MIDDLE_NAME
            </th>
            <th>
                LAST_NAME
            </th>
            <th>
                NICKNAME
            </th>
            <th>
                GENDER
            </th>
            <th>
                DOB
            </th>
            <th>
                JOINED_DATE
            </th>
            <th>
                STAFF_CATEGORY
            </th>
            <th>
                GROUP_CD
            </th>
            <th>
                DIVISION_CD
            </th>
            <th>
                SECTION_CD
            </th>
            <th>
                JOBTITLE_CD
            </th>
            <th>
                PHOTOID_URL
            </th>
            <th>
                HOME_TOWN
            </th>
            <th>
                PHOTOID_UPLOAD_DATE
            </th>
            <th>
                INSTRUCTOR_ID
            </th>
            <th>
                RESIGNATION_DATE
            </th>
            <th>
                RESIGNATION_REASON
            </th>
            <th>
                DEL_FLG
            </th>
            <th>
                CREATE_DATE
            </th>
            <th>
                CREATE_PERSON_CD
            </th>
            <th>
                UPDATE_DATE
            </th>
            <th>
                UPDATE_PERSON_CD
            </th>
        </tr>

    <% foreach (var item in Model) { %>
    
        <tr>
            <td>
                <%= Html.ActionLink("Edit", "Edit", new { id=item.COMPANY_CD }) %> |
                <%= Html.ActionLink("Details", "Details", new { id=item.COMPANY_CD })%> |
                <%= Html.ActionLink("Delete", "Delete", new { id=item.COMPANY_CD })%>
            </td>
            <td>
                <%= Html.Encode(item.COMPANY_CD) %>
            </td>
            <td>
                <%= Html.Encode(item.STAFF_ID) %>
            </td>
            <td>
                <%= Html.Encode(item.FIRST_NAME) %>
            </td>
            <td>
                <%= Html.Encode(item.MIDDLE_NAME) %>
            </td>
            <td>
                <%= Html.Encode(item.LAST_NAME) %>
            </td>
            <td>
                <%= Html.Encode(item.NICKNAME) %>
            </td>
            <td>
                <%= Html.Encode(item.GENDER) %>
            </td>
            <td>
                <%= Html.Encode(String.Format("{0:g}", item.DOB)) %>
            </td>
            <td>
                <%= Html.Encode(String.Format("{0:g}", item.JOINED_DATE)) %>
            </td>
            <td>
                <%= Html.Encode(item.STAFF_CATEGORY) %>
            </td>
            <td>
                <%= Html.Encode(item.GROUP_CD) %>
            </td>
            <td>
                <%= Html.Encode(item.DIVISION_CD) %>
            </td>
            <td>
                <%= Html.Encode(item.SECTION_CD) %>
            </td>
            <td>
                <%= Html.Encode(item.JOBTITLE_CD) %>
            </td>
            <td>
                <%= Html.Encode(item.PHOTOID_URL) %>
            </td>
            <td>
                <%= Html.Encode(item.HOME_TOWN) %>
            </td>
            <td>
                <%= Html.Encode(String.Format("{0:g}", item.PHOTOID_UPLOAD_DATE)) %>
            </td>
            <td>
                <%= Html.Encode(item.INSTRUCTOR_ID) %>
            </td>
            <td>
                <%= Html.Encode(String.Format("{0:g}", item.RESIGNATION_DATE)) %>
            </td>
            <td>
                <%= Html.Encode(item.RESIGNATION_REASON) %>
            </td>
            <td>
                <%= Html.Encode(item.DEL_FLG) %>
            </td>
            <td>
                <%= Html.Encode(String.Format("{0:g}", item.CREATE_DATE)) %>
            </td>
            <td>
                <%= Html.Encode(item.CREATE_PERSON_CD) %>
            </td>
            <td>
                <%= Html.Encode(String.Format("{0:g}", item.UPDATE_DATE)) %>
            </td>
            <td>
                <%= Html.Encode(item.UPDATE_PERSON_CD) %>
            </td>
        </tr>
    
    <% } %>

    </table>

    <p>
        <%= Html.ActionLink("Create New", "Create") %>
    </p>

</asp:Content>

