<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>
<%  if (Session["StaffLoginInfoSection"] != null)
    {
        Vap.Core.StaffLoginInfo info = (Vap.Core.StaffLoginInfo)Session["StaffLoginInfoSection"];
        if (info != null)
        {
            Vap.Data.Mapping.M_MENU homeMenu = info.Menus.Where(o => o.ActionName.ToLower() == "index" && o.ControlName.ToLower() == "home").FirstOrDefault();
            List<Vap.Data.Mapping.M_MENU> list = info.Menus;
            if (!Common.IsNullOrEmpty(homeMenu))
            {
%>
<li>
    <%= Html.ActionLink(homeMenu.MENU_NAME.Trim(), homeMenu.ActionName, homeMenu.ControlName)%>
</li>
<%
    }
            var groups = list.Where(o => o.ControlName.ToLower() != "home").GroupBy(o => o.MENU_TYPE);
            foreach (var group in groups)
            {
%>
<li class="parrentMenu"><span>
    <%=Html.Encode(Common.ParseString(group.FirstOrDefault().MENU_TYPE))%></span></li>
<%
    foreach (var item in group)
    {

        if (!string.IsNullOrEmpty(item.URL) && !string.IsNullOrEmpty(item.MENU_NAME))
        {
%>
<li >
    <%= Html.ActionLink(item.MENU_NAME.Trim(), item.ActionName, item.ControlName)%>
</li>
<%
    }
    }
            }
        }
    }
%>
<%--<li>
    <%=Html.ActionLink("Unit","Index","Unit") %>
    <%=Html.ActionLink("Item Type","Index","ItemType") %>
    <%=Html.ActionLink("Item","Index","Item") %>
</li>--%>
<%--<%foreach (var item in Model)
  {
      if (!string.IsNullOrEmpty(item.URL) && !string.IsNullOrEmpty(item.MENU_NAME))
      {
%>
<li>
    <%= Html.ActionLink(item.MENU_NAME.Trim(), item.ActionName, item.ControlName)%>
    <% if (item.M_MENUs.Count > 0)
       { %>
    <ul class="treeview">
        <% Html.RenderPartial("MenuArchiveList", item.M_MENUs); %>
    </ul>
    <%} %>
</li>
<%}%>
<%}%>
--%>
<%--<%  if (Session["StaffLoginInfoSection"] != null)
    {
        StaffLoginInfo info = (StaffLoginInfo)Session["StaffLoginInfoSection"];
        if (info != null)
        {
            List<HRA_KUMON.Bussiness.Menu> list = info.Menus;
            foreach (var item in list)
            {
                if (!string.IsNullOrEmpty(item.URL) && !string.IsNullOrEmpty(item.MenuName))
                {
%>
                    <li>
                        <%= Html.ActionLink(item.MenuName.Trim(), item.Action, item.Control)%>
                    </li>
<%
                }
            }
        }
    }
            
%>--%>