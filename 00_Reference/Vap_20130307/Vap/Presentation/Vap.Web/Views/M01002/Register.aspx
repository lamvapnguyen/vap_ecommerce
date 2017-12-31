<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<Vap.Web.Dto.clsM01002DetailDto>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    <%=Html.Encode(Model.ScreenName) %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h2>
        <%=Html.Encode(Model.ScreenName) %></h2>
    <%--<div id="Message">
        <% Html.RenderPartial("ucMessage", Model); %>
    </div>--%>
    <div id="RegisterForm">
        <% Html.RenderPartial("ucRegister", Model); %>
    </div>
</asp:Content>
