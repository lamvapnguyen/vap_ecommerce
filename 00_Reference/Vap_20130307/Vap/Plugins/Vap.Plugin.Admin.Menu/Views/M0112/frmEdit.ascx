<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl<M_MENU>" %>

    <% using (Html.BeginForm()) {%>
        <%= Html.ValidationSummary(true) %>
        
        <fieldset>
            <legend>Fields</legend>
            
            <div class="editor-label">
                <%= Html.LabelFor(model => model.ActionName) %>
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.ActionName) %>
                <%= Html.ValidationMessageFor(model => model.ActionName) %>
            </div>
            
            <div class="editor-label">
                <%= Html.LabelFor(model => model.ControlName) %>
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.ControlName) %>
                <%= Html.ValidationMessageFor(model => model.ControlName) %>
            </div>
            
            <div class="editor-label">
                <%= Html.LabelFor(model => model.MENU_CD) %>
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.MENU_CD) %>
                <%= Html.ValidationMessageFor(model => model.MENU_CD) %>
            </div>
            
            <div class="editor-label">
                <%= Html.LabelFor(model => model.MENU_NAME) %>
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.MENU_NAME) %>
                <%= Html.ValidationMessageFor(model => model.MENU_NAME) %>
            </div>
            
            <div class="editor-label">
                <%= Html.LabelFor(model => model.SORT_ORDER) %>
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.SORT_ORDER) %>
                <%= Html.ValidationMessageFor(model => model.SORT_ORDER) %>
            </div>
            
            <div class="editor-label">
                <%= Html.LabelFor(model => model.MENU_LEVEL) %>
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.MENU_LEVEL) %>
                <%= Html.ValidationMessageFor(model => model.MENU_LEVEL) %>
            </div>
            
            <div class="editor-label">
                <%= Html.LabelFor(model => model.MENU_TYPE) %>
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.MENU_TYPE) %>
                <%= Html.ValidationMessageFor(model => model.MENU_TYPE) %>
            </div>
            
          <%--  <div class="editor-label">
                <%= Html.LabelFor(model => model.URL) %>
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.URL) %>
                <%= Html.ValidationMessageFor(model => model.URL) %>
            </div>--%>
            
            <div class="editor-label">
                <%= Html.LabelFor(model => model.PARENT_MENU_CD) %>
            </div>
            <div class="editor-field">
                <%=Html.DropDownList("PARENT_MENU_CD", (SelectList)ViewData["Menus"], "-- Choose --")%>
                <%= Html.ValidationMessageFor(model => model.PARENT_MENU_CD) %>
            </div>
            
            
            <p>
                <input type="submit" value="Save" />
            </p>
        </fieldset>

    <% } %>

    <div>
        <%= Html.ActionLink("Back to List", "Index") %>
    </div>


