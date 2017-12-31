<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<IEnumerable<Vap.Core.NavigationItem>>" %>
<%
    int i = 0;
    foreach (var item in Model)
    {
        i++;
        if (!string.IsNullOrEmpty(item.Action) && !string.IsNullOrEmpty(item.Controller))
        {
%>
<%if (i != Model.Count())
  { %>
<%= Html.ActionLink(item.Text.Trim(), item.Action, item.Controller)%>
/
<%}
  else
  {%>
<%if (item.Text.Trim().ToLower() != "home")
  {
%>
<b>
    <%=Html.Encode(item.MenuType.Trim())%></b> /
<%=Html.Encode(item.Text.Trim())%>
<%
    }
  else
  {%>
<%=Html.Encode(item.Text.Trim())%>
<% } %>
<%}
        }
    }%>
