<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/MessageSite.Master" Inherits="System.Web.Mvc.ViewPage<IEnumerable<Vap.Plugin.Users.MyAccount.DTO.MessageDto>>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Detail
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h2>
        Detail</h2>
    <table class ="data-table data-table-fill">
        <tr>
            <th>
            </th>
            <th>
                SubjectCd
            </th>
            <th>
                Subject
            </th>
            <th>
                SenderName
            </th>
            <th>
                SenderID
            </th>
            <th>
                MailTo
            </th>
            <th>
                Content
            </th>
            <th>
                Date
            </th>
            <th>
                IsRead
            </th>
          
        </tr>
        <% foreach (var item in Model)
           { %>
        <tr>
            <td>
                <%= Html.ActionLink("Reply", "Reply", new { id=item.SubjectCD  }) %>
                <%--<%= Html.ActionLink("Details", "Details", new { /* id=item.PrimaryKey */ })%> |
                <%= Html.ActionLink("Delete", "Delete", new { /* id=item.PrimaryKey */ })%>--%>
            </td>
            <td>
                <%= Html.Encode(item.SubjectCD) %>
            </td>
            <td>
                <%= Html.Encode(item.SubjectName) %>
            </td>
            <td>
                <%= Html.Encode(item.SenderName) %>
            </td>
            <td>
                <%= Html.Encode(item.SenderID) %>
            </td>
            <td>
                <%= Html.Encode(item.MailTo) %>
            </td>
            <td>
                <%= Html.Encode(item.Content) %>
            </td>
            <td>
                <%= Html.Encode(String.Format("{0:g}", item.SentDate)) %>
            </td>
            <td>
                <%= Html.Encode(item.HasAttachment) %>
            </td>
        </tr>
        <% } %>
    </table>
    <p>
        <%= Html.ActionLink("Create New", "Create") %>
    </p>
</asp:Content>
