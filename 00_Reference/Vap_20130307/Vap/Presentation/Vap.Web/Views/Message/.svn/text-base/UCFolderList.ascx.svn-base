<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>
<%  if (Session["SessionPluginMessageInfo"] != null)
    {
        PluginMessageInfo info = (PluginMessageInfo)Session["SessionPluginMessageInfo"];
        if (info != null)
        {
            List<FolderDto> defaultFolders = info.Folders.Where(o => o.FolderType == 1).ToList();
            List<FolderDto> CustomeFolders = info.Folders.Where(o => o.FolderType != 1).ToList();

            if (!Common.IsNullOrEmpty(defaultFolders))
            {%>
<li class="parrentMenu"><span>Default Folder</span></li>
<%
    foreach (var item in defaultFolders)
    {
%>
<li>
    <%--<%= Html.ActionLink(item.FolderName.Trim(), "Message", "Message")%>--%>
    <%=Ajax.ActionLink(Common.ParseString(item.FolderName),"mail","message",new{id=item.FolderCD}, new AjaxOptions { UpdateTargetId = "divListContent", HttpMethod = "GET" })%>
   <%-- <%=Html.ActionLink(Common.ParseString(item.FolderName),"mail","message",new{id=item.FolderCD} )%>--%>
</li>
<%}
            }
           
%>
<li class="parrentMenu"><span>Custom Folder</span></li>
<% if (!Common.IsNullOrEmpty(CustomeFolders))
   {
       foreach (var item in CustomeFolders)
       {
%>
<li>
    <%=Ajax.ActionLink(Common.ParseString(item.FolderName),"mail","message",new{id=item.FolderCD}, new AjaxOptions { UpdateTargetId = "divListContent", HttpMethod = "GET" })%>
</li>
<%
    }
   }
        }
    }
%>
<li>
    <%=Ajax.ActionLink("Create new folder","createfolder","message",new{}, new AjaxOptions { UpdateTargetId = "divListContent", HttpMethod = "GET" })%>
</li>
