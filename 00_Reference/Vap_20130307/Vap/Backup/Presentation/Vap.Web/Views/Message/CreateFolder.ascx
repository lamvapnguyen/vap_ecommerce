<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<FolderDto>" %>
<% using (Ajax.BeginForm("SaveFolder", new AjaxOptions { }))
   {%>
<%= Html.ValidationSummary(true)%>
<table class="data-table">
    <%= Html.HiddenFor(model => model.FolderCD)%>
    <%= Html.HiddenFor(model => model.Mode)%>
    <tr>
        <td>
            <div class="editor-label">
                <%= Html.LabelFor(model => model.FolderName)%>
            </div>
        </td>
        <td>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.FolderName)%>
                <%= Html.ValidationMessageFor(model => model.FolderName)%>
            </div>
        </td>
    </tr>
    <tr>
        <td colspan="2">
            <input type="submit" value="Create" />
        </td>
    </tr>
</table>
<% } %>
<div>
    <%= Html.ActionLink("Back to List", "Index") %>
</div>
