<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<IEnumerable<Vap.Plugin.Users.MyAccount.DTO.SubjectDto>>" %>

    <table class ="data-table data-table-fill">
        <tr>
             <th>
                Subject
            </th>
            <th>
                Sender
            </th>
            <th>
                HasAttachment
            </th>
            <th>
                Date
            </th>
        </tr>
        <% foreach (var item in Model)
           { %>
        <tr>
            <td>
                <%= Html.ActionLink(item.SubjectName, "detail","message", new { sid = item.SubjectCD })%>
            </td>
            <td>
                <%= Html.Encode(item.SenderName)%>
            </td>
            <td>
                <%= Html.Encode(item.HasAttachment) %>
            </td>
            <td>
                <%= Html.Encode(String.Format("{0:g}", item.LastedMessageDate)) %>
            </td>
        </tr>
        <% } %>
    </table>

<%= Html.ActionLink("Compose", "Compose") %>
