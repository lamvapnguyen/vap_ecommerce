<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<IEnumerable<Vap.Web.Dto.clsL01001Dto>>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    <%=Html.Encode(Vap.Settings.Constants.ConstFunctionTitle.titleL01001Index) %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h2>
        <%=Html.Encode(Vap.Settings.Constants.ConstFunctionTitle.titleL01001Index) %></h2>
    <table class="data-table">
        <tr>
            <th>
            </th>
           <%-- <th>
                LogCD
            </th>--%>
            <th>
                LogType
            </th>
            <th>
                ScreenName
            </th>
            <th>
                ActionType
            </th>
            <th>
                LogData
            </th>
            <th>
                LogDate
            </th>
          <%--  <th>
                DelFlg
            </th>--%>
            <th>
                PersonCD
            </th>
        </tr>
        <% foreach (var item in Model)
           { %>
        <tr>
            <td>
              <%--  <%= Html.ActionLink("Edit", "Edit", new { /* id=item.PrimaryKey */ }) %>
                |
                <%= Html.ActionLink("Details", "Details", new { /* id=item.PrimaryKey */ })%>
                |
                <%= Html.ActionLink("Delete", "Delete", new { /* id=item.PrimaryKey */ })%>--%>
            </td>
          <%--  <td>
                <%= Html.Encode(item.LogCD) %>
            </td>--%>
            <td>
                <%= Html.Encode(item.LogType) %>
            </td>
            <td>
                <%= Html.Encode(item.ScreenName) %>
            </td>
            <td>
                <%= Html.Encode(item.ActionType) %>
            </td>
            <td>
                <%= Html.Encode(item.LogData) %>
            </td>
            <td>
                <%= Html.Encode(String.Format("{0:g}", item.LogDate)) %>
            </td>
            <%--<td>
                <%= Html.Encode(item.DelFlg) %>
            </td>--%>
            <td>
                <%= Html.Encode(item.PersonName) %>
            </td>
        </tr>
        <% } %>
    </table>
    <p>
        <%= Html.ActionLink("Create New", "Create") %>
    </p>
</asp:Content>
