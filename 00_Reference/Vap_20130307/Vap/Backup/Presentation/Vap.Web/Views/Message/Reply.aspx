<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/MessageSite.Master" Inherits="System.Web.Mvc.ViewPage<MessageDto>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Reply
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <h2>Reply</h2>

    <% using (Html.BeginForm()) {%>
        <%= Html.ValidationSummary(true) %>

        <fieldset>
            <legend>Fields</legend>
            
            <div class="editor-label">
                <%= Html.LabelFor(model => model.MessageCD) %>
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.MessageCD) %>
                <%= Html.ValidationMessageFor(model => model.MessageCD) %>
            </div>
            
            <div class="editor-label">
                <%= Html.LabelFor(model => model.SenderName) %>
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.SenderName) %>
                <%= Html.ValidationMessageFor(model => model.SenderName) %>
            </div>
            
            <div class="editor-label">
                <%= Html.LabelFor(model => model.SenderID) %>
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.SenderID) %>
                <%= Html.ValidationMessageFor(model => model.SenderID) %>
            </div>
            
            <div class="editor-label">
                <%= Html.LabelFor(model => model.MailTo) %>
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.MailTo) %>
                <%= Html.ValidationMessageFor(model => model.MailTo) %>
            </div>
            
            <div class="editor-label">
                <%= Html.LabelFor(model => model.Content) %>
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.Content) %>
                <%= Html.ValidationMessageFor(model => model.Content) %>
            </div>
            
            <div class="editor-label">
                <%= Html.LabelFor(model => model.SentDate)%>
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.SentDate)%>
                <%= Html.ValidationMessageFor(model => model.SentDate)%>
            </div>
            
            <div class="editor-label">
                <%= Html.LabelFor(model => model.IsRead) %>
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.IsRead) %>
                <%= Html.ValidationMessageFor(model => model.IsRead) %>
            </div>
            
            <div class="editor-label">
                <%= Html.LabelFor(model => model.NumberUnRead) %>
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.NumberUnRead) %>
                <%= Html.ValidationMessageFor(model => model.NumberUnRead) %>
            </div>
            
            <div class="editor-label">
                <%= Html.LabelFor(model => model.HasAttachment) %>
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.HasAttachment) %>
                <%= Html.ValidationMessageFor(model => model.HasAttachment) %>
            </div>
            
            <div class="editor-label">
                <%= Html.LabelFor(model => model.SubjectCD) %>
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.SubjectCD) %>
                <%= Html.ValidationMessageFor(model => model.SubjectCD) %>
            </div>
            
            <div class="editor-label">
                <%= Html.LabelFor(model => model.SubjectName) %>
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.SubjectName) %>
                <%= Html.ValidationMessageFor(model => model.SubjectName) %>
            </div>
            
            <div class="editor-label">
                <%= Html.LabelFor(model => model.SentDate) %>
            </div>
            <div class="editor-field">
                <%= Html.TextBoxFor(model => model.SentDate) %>
                <%= Html.ValidationMessageFor(model => model.SentDate) %>
            </div>
            
            <p>
                <input type="submit" value="Create" />
            </p>
        </fieldset>

    <% } %>

    <div>
        <%= Html.ActionLink("Back to List", "Index") %>
    </div>

</asp:Content>

