<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<Vap.Plugin.Admin.UserRoles.Dto.RoleMenuInfoDto>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	User Role
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
<script type="text/javascript" >
    $(document).ready(function() {
        $(function() {
            $('#addForm').submit(function() {
                return confirm('Confirm saving this record?');
            });
        });
    })
</script>
<h2>Add/Edit Role</h2>
 <%RoleMenuInfoDto info = (RoleMenuInfoDto)Model; %>   
    <div>
    
    <% using (Html.BeginForm("Save", "M0110", FormMethod.Post, new { id = "addForm" }))
       {%>  
        <%if (!Common.IsNullOrEmpty(TempData["Empty"]))
          { %>
          <div class="error">
             <%= Html.Encode(TempData["Empty"])%>
          </div>
        <%} %>  
         <label class="requirement">*</label><label>Role Name</label> 
         <%= Html.ValidationMessageFor(model => model.roleName, " ")%>
         <%= Html.TextBoxFor(model => model.roleName, new { @class = "txt200", maxlength = "50", @tabindex = "1" })%> 
         
         <br /><br />
         
        <%if (!Common.IsNullOrEmpty(info))
          {
              if (info.RolePermiteds.Count > 0)
              {
                  if (info.allCompanyFlg.Equals("True"))
                  { %>
                     <input type="radio" value="true" name="all_company_flg" checked="checked" id="Radio3" tabindex = "2" /><label>View all Companies </label>
                     <input type="radio" value="false" name="all_company_flg" id="ownCompany" tabindex = "3"/><label>View own Company</label>
                     
                    <%}
                  else
                  { %>
                    <input type="radio" value="true" name="all_company_flg" id="Radio4" tabindex = "2"/><label>View all Companies </label>
                    <input type="radio" value="false" name="all_company_flg" checked="checked" id="Radio2" tabindex = "3" /><label>View own Company</label>
                     
                    <%}
              }
              else
              { %>
                    <input type="radio" value="true" name="all_company_flg" id="allCompany" tabindex = "2"/><label>View all Companies </label>
                    <input type="radio" value="false" name="all_company_flg" checked="checked" id="Radio1" tabindex = "3" /><label>View own Company</label>
                    
                    
           <% }
          } %>
    <table class="data-table">
        <tr>
            <th scope="col" class="th10"></th>
            <th scope="col" class="th250">
               Function Name
            </th>
            <th scope="col" class="th50">
                No access
            </th >
                
            <th scope="col" class="th50">
                Read only
            </th>
            <th scope="col" class="th50">
                Full access
            </th>
        </tr>       
   <% 
       if (!Common.IsNullOrEmpty(info))
       {
           var groups = info.menus.GroupBy(o => o.MENU_TYPE);
           int i = 1;
           if (info.RolePermiteds.Count == 0)
           {

               foreach (var group in groups)
               {
                   var groupItem = group.Key;//get menu type group
   %>
          <tr class="menuGroup">
                <td scope="col"><%=Html.Encode(i)%></td>
                <td colspan = "4" >
                    <%=Html.Encode(groupItem)%>
                </td>
          </tr>
   <%       
       var group1 = info.menus.Where(x => x.MENU_TYPE == groupItem);
       int countDivision = 1;
       foreach (var item in group1)//get menu name belong to group
       {
           object evenRow = "";
           if (countDivision % 2 == 0)
           {
               evenRow = new { @class = "row-alternating" };
           }
   %>
         <% 
            %>    
        <tr <%=evenRow%>>
            <td ></td>
            <td  class="menuAlign">
                <li class="menuLi"/><span class="menuAlign"><%= Html.Encode(item.MENU_NAME)%></span>
            </td>
            <td class="center">
                <input type="radio" name="readonly<%= Html.Encode(item.MENU_CD)%>" value="0" checked="checked" tabindex="4" />
            </td>
            <td class="center">
                 <input type="radio" name="readonly<%= Html.Encode(item.MENU_CD)%>" value="1" tabindex="5" />
            </td>
            <td class="center">
                 <input type="radio" name="readonly<%= Html.Encode(item.MENU_CD)%>" value="2" tabindex="6" />
            </td>
        </tr>
    <%  
       countDivision++;
       }
       i++;
          }
          
      }
      //In case add error , display previous state    
           else
           {
               foreach (var group in groups)
               {
                   var groupItem = group.Key;//get menu type group
                   //descending sort by smallest menu's order 
                   group.OrderByDescending(o=>o.SORT_ORDER);
        %>
          <tr class="menuGroup">
                <td scope="col"><%=Html.Encode(i)%></td>
                <td colspan = "4" >
                    <%= Html.Encode(groupItem)%>
                </td>
          </tr>
       
       <%       
       var group1 = info.menus.Where(x => x.MENU_TYPE == groupItem);
       int countDivision = 1;
       foreach (var item in group)
       {
           var permit = info.RolePermiteds.Where(o => o.menuCd == item.MENU_CD).FirstOrDefault();
           if (!Common.IsNullOrEmpty(permit))
           {
       %>
        <%if (countDivision % 2 == 0)
          {%>
            <tr class="row-alternating">
        <%}
          else
          {%>
            <tr>
        <%} %>
                <% if (permit.acessMethod == 1)
                   { %>
                   <td></td>
                    <td>
                          <li class="menuLi"/><span class="menuAlign"><%= Html.Encode(permit.menuName)%></span>
                        <%= Html.HiddenFor(model => Model.roleCd)%>
                    </td>
                    <td class="center">
                        <input type="radio" name="readonly<%= Html.Encode(item.MENU_CD)%>" value="0" tabindex="4" />
                    </td>
                    <td class="center">
                        <input type="radio" name="readonly<%= Html.Encode(item.MENU_CD)%>" value="1" checked="checked" tabindex="5" />
                    </td>
                    <td class="center">
                        <input type="radio" name="readonly<%= Html.Encode(item.MENU_CD)%>" value="2" tabindex="6"/>
                    </td>
                
                <%}
                   else if (permit.acessMethod == 2)
                   { %>
                   <td></td>
                    <td>
                          <li class="menuLi"/><span class="menuAlign"><%=Html.Encode(permit.menuName)%></span>
                        <%=Html.HiddenFor(model => Model.roleCd)%>
                    </td>
                    <td class="center">
                        <input type="radio" name="readonly<%= Html.Encode(permit.menuCd)%>" value="0" tabindex="4" />
                    </td>
                    <td class="center">
                        <input type="radio" name="readonly<%= Html.Encode(permit.menuCd)%>" value="1" tabindex="5"/>
                    </td>
                    <td class="center">
                        <input type="radio" name="readonly<%= Html.Encode(permit.menuCd)%>" value="2" checked="checked" tabindex="6"/>
                    </td>
                <%}
                   else if (permit.acessMethod == 0)
                   { %>
                   <td></td>
                    <td>
                         <li class="menuLi"/><span class="menuAlign"><%= Html.Encode(permit.menuName)%></span>
                        <%= Html.HiddenFor(model => Model.roleCd)%>
                    </td>
                    <td class="center">
                        <input type="radio" name="readonly<%= Html.Encode(permit.menuCd)%>" value="0" checked="checked" tabindex="4"/>
                    </td>
                    <td class="center">
                        <input type="radio" name="readonly<%= Html.Encode(permit.menuCd)%>" value="1" tabindex="5"/>
                    </td>
                    <td class="center">
                        <input type="radio" name="readonly<%= Html.Encode(permit.menuCd)%>" value="2" tabindex="6"/>
                    </td>
                <%} %>
           </tr>
       <% 
           }
          countDivision++;
           }
        i++;
       }
               }
           }
       %>
    </table>
    <br />
          <input type="button" id="back" value="Back" onclick="window.location.href='/M0110/Index'" tabindex="7" class="btn50" <%=Html.Encode(Session["CommonIsReadOnly"])%>/>
          <input type="submit" id="save" value="Save" tabindex="8" class="btn50" <%=Html.Encode(Session["CommonIsReadOnly"])%>/>
      <% }%>   
</div>    

</asp:Content>

