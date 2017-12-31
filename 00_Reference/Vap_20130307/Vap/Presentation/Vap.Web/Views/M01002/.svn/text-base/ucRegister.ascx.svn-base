<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<Vap.Web.Dto.clsM01002DetailDto>" %>

<script src="../../Scripts/Vap.Scripts/vap.confirm.js" type="text/javascript"></script>

<script type="text/javascript">
    $(function() {
        $("#SortOrder").spinner();
        $("#CategoryLevel").spinner();
    });
</script>

<% using (Html.BeginForm("Register", "M01002", FormMethod.Post, new { id = "addForm" }))
   {%>
<div class="error">
    <%= Html.Encode(Model.Messsage)%>
</div>
<table class="inputForm">
    <tr>
        <th class="th125">
            <%= Html.HiddenFor(model => model.CategoryCD) %>
            <div class="editor-label">
                <label class="requirement">
                    *</label>
                <%= Html.LabelFor(model => model.CategoryName) %>
            </div>
        </th>
        <td>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.CategoryName, new { @class = "txt200", maxlength = "50" })%>
            </div>
        </td>
    </tr>
    <tr>
        <th class="th100">
            <div class="editor-label">
                <%= Html.LabelFor(model => model.SortOrder) %>
            </div>
        </th>
        <td>
            <div class="editor-field">
                <%--<%= Html.TextBoxFor(model => model.SortOrder, new { @class = "txt50 numeric",maxlength = "3" })%>--%>
                <%= Html.TextBoxFor(model => model.SortOrder, new { @class = "txt30 numeric", maxlength = "3",@type="" })%>
            </div>
        </td>
    </tr>
    <tr>
        <th class="th100">
            <div class="editor-label">
                <%= Html.LabelFor(model => model.CategoryLevel) %>
            </div>
        </th>
        <td>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.CategoryLevel, new { @class = "txt30 numeric", maxlength = "3", @type = "" })%>
            </div>
        </td>
    </tr>
    <tr>
        <th class="th100">
            <div class="editor-label">
                <%= Html.LabelFor(model => model.ParrentCategoryCd) %>
            </div>
        </th>
        <td>
            <div class="editor-field">
                <%= Html.DropDownListFor(model => model.ParrentCategoryCd, Model.CategorySelectList, new { @class = "txt200" })%>
            </div>
        </td>
    </tr>
</table>
<p>
    <input type="button" id="back" value="Back" onclick="window.location.href='/M01002/Index'"
        tabindex="7" class="btn50" />
    <input type="submit" id="save" value="Save" onclick="return showConfirmDialog();"
        class="btn50" <%=Html.Encode(Session["CommonIsReadOnly"])%> />
</p>
<% } %>