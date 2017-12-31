<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<IEnumerable<Vap.Data.Mapping.M_ROLE>>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	User Role
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
<h2>User Roles</h2>
<script language="javascript">
    $(document).ready(function() {
        var $unique = $('input.unique');
        $unique.click(function() {
        var checked = $('input.unique').is(':checked')
        if (checked) {
            $unique.removeAttr('checked');
                $(this).attr('checked', true);
            } if (!checked) {
                $(this).attr('checked', false);
            }
        });
        //handle enabling single check
        $("#detailButt").click(function() {
            var count = $('input:checked').length;
            if (count == 0) {
                alert("Please select User Role");
                return false;
            } else {
                return true;
            }


        })

    });

</script>
    
    <div>
        <%if (!Common.IsNullOrEmpty(TempData["Empty"]))
          { %>
          <div class="error">
             <%= Html.Encode(TempData["Empty"])%>
          </div>
        <%} %>  
      <% using (Html.BeginForm())
       {%>    
    <%Html.ValidationSummary(); %>
        <input type="button" value="Add" id="addRoleButt" onclick="window.location.href=('/M0110/Add')" tabindex = "1" class="btn" <%=Html.Encode(Session["CommonIsReadOnly"])%>/>
        <input type="submit" value="Edit" id="detailButt" name="Edit" tabindex = "2" class="btn" <%=Html.Encode(Session["CommonIsReadOnly"])%>/>
    <table class="data-table">
                <tr >
                    <th scope="col" class="th30">Select</th>
                    <th scope="col" class="th200">Role Name</th>
                </tr>
                <%
                 int countDivision = 1;
                 foreach (var role in Model)
                  {
                      object evenRow = "";
                      if (countDivision % 2 == 0)
                      {
                          evenRow = new { @class = "row-alternating" };
                      }
                      %>
                    <tr <%=evenRow %> >
                        <td class="textAlignCenter">
                             <input type="checkbox" name="roleCds" id="roleCds" value="<%=role.ROLE_CD%>" class="unique" tabindex="3"/>
                        </td>
                        <td> <%=Html.Encode(role.ROLE_NAME)%></td>
                    </tr>
                <%
                   
                    countDivision++;
                  } %>
    </table>
    <%} %>
</div>



</asp:Content>
