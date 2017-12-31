<%@ Page Language="C#" MasterPageFile="~/Views/Shared/LogOnSite.Master" Inherits="System.Web.Mvc.ViewPage<LogOnModel>" %>

<asp:Content ID="loginTitle" ContentPlaceHolderID="TitleContent" runat="server">
    Log On
</asp:Content>

<asp:Content ID="loginContent" ContentPlaceHolderID="MainContent" runat="server">
    <div id="loginMain">
        <div id="loginDescription">
            <h2>
                Sign in to continue</h2>
            <br />
            <h3>
                What is VAP?</h3>
            <ul>
                <li>Manage your Project Listings</li>
                <li>Manage your Files/Folders</li>
                <li>Download and Upload files very fast</li>
                <li>Share documents to another partner.</li>
                <li>Change your informations</li>
                <li>View all history events of each project</li>
            </ul>
        </div>
        <div id="loginForm">
            <span class="title">VAP Log On</span>
            <% using (Html.BeginForm())
               { %>
            <%= Html.ValidationSummary(true) %>
            <div id="submitForm">
                <div class="editor-label">
                    <%= Html.LabelFor(m => m.UserName) %>
                </div>
                <div class="editor-field">
                    <%= Html.TextBoxFor(m => m.UserName, new { @class="txt200"})%>
                    <%-- <%= Html.ValidationMessageFor(m => m.UserName) %>--%>
                </div>
                <div class="editor-label">
                    <%= Html.LabelFor(m => m.Password) %>
                </div>
                <div class="editor-field">
                    <%= Html.PasswordFor(m => m.Password, new { @class = "txt200" })%>
                    <%--   <%= Html.ValidationMessageFor(m => m.Password) %>--%>
                </div>
                <div class="editor-label">
                    <%= Html.CheckBoxFor(m => m.RememberMe) %>
                    <%= Html.LabelFor(m => m.RememberMe) %>
                </div>
                <%= Html.ActionLink("Forgot password?", "Register")%>
                <p>
                    <input type="submit" value="Log On" />
                </p>
                <p>
                    Please enter your username and password.
                    <%= Html.ActionLink("Register", "Register") %>
                    if you don't have an account.
                </p>
            </div>
            <% } %>
        </div>
    </div>
</asp:Content>
