<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/MessageSite.Master"
    Inherits="System.Web.Mvc.ViewPage<SubjectDto>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Compose
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h2>
        Compose</h2>
    <% using (Html.BeginForm())
       {%>
    <%= Html.ValidationSummary(true) %>
    <table class="inputForm">
        <tr>
            <td class="th100">
                <div class="editor-label">
                    <%= Html.LabelFor(model => model.MailTo) %>
                </div>
            </td>
            <td style="width:400px">
                <div class="editor-field">
                    <%= Html.TextBoxFor(model => model.MailTo, new { @class = "txt200", maxlength = "50"})%>
                    <%= Html.ValidationMessageFor(model => model.MailTo) %>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="editor-label">
                    <%= Html.LabelFor(model => model.SubjectName) %>
                </div>
            </td>
            <td>
                <div class="editor-field">
                    <%= Html.TextBoxFor(model => model.SubjectName) %>
                    <%= Html.ValidationMessageFor(model => model.SubjectName) %>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <div class="editor-label">
                    <%= Html.LabelFor(model => model.Content) %>
                </div>
            </td>
            <td>
                <div class="editor-field">
                    <%= Html.TextBoxFor(model => model.Content) %>
                    <%= Html.ValidationMessageFor(model => model.Content) %>
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="2" >
                <input type="submit" value="Send" />
                <input type="button" value="Cancel" />
            </td>
        </tr>
    </table>
    <% } %>
   </asp:Content>
