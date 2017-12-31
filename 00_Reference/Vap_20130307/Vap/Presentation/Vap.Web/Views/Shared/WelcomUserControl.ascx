<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>
<%  if (Session["StaffLoginInfoSection"] != null)
    {
        Vap.Core.StaffLoginInfo info = (Vap.Core.StaffLoginInfo)Session["StaffLoginInfoSection"];
        if (info != null)
        { 
%>
Welcome, <b>
    <%= Html.Encode(info.STAFF_NAME)%>.</b>
<%}
        } %>
