<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<System.Web.Mvc.HandleErrorInfo>" %>

<asp:Content ID="errorTitle" ContentPlaceHolderID="TitleContent" runat="server">
    Error
</asp:Content>
<asp:Content ID="errorContent" ContentPlaceHolderID="MainContent" runat="server">
    <h2>
        Error
    </h2>
    <div>
        <h4 style="color:red">
        We’re sorry…
        </h4>
        <label>
            The system has encountered unexpected problem while processing your request. Please
            log out and log in to the system to try again.
            <br />
            If the problem still occurs, please contact IT department for assistance. We’re
            sorry for the inconvenience.
        </label>
        <br />
        <br />
        Detail of error:
        <br />
        <% if (!Common.IsNullOrEmpty(TempData["Message"]))
           { %>
        <<
        <%=Html.Encode(TempData["Message"])%>
        >>
        <%
            } %>
    </div>
</asp:Content>
