<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    ViewStandars
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h2>
        Some HTML Controls was desgined.</h2>
    <label>
        <b>Button</b></label>
    <div class="displayinline">
        <label>
            Nomal button:<br />
            Code:
            <pre>&lt;input type="button" id="Button2" value ="Nomal button" class="btn"/></pre>
            <input type="button" id="btnSave" value="Nomal button" class="btn" />
        </label>
    </div>
    
    <br />
    <br />
    <div class="displayinline">
        <label>
            Disable button and width = 200
            <br />
            Code:
            <pre>&lt;input type="button" id="btnSave" disabled="disabled" 
                   class ="btn200" value ="Disable button" class="btn175"/></pre>
            <%--<input type="button" id="Button1" disabled="disabled" class="btn200" value="Disable button" />--%>
            <input type="button" id="Button1" disabled="disabled"  value="Disable button"  class="btn175"  />
        </label>
    </div>
    
    <hr />
    <label>
        <b>Text Box</b>
    </label>
    <br />
    <br />
    <div class="displayinline">
        <label>
            Text box width = auto<br />
            <br />
            <pre>
&lt;%= Html.TextBox("txtTextboxName",null, new { @class = "txtAuto" })%>
or &lt;%= Html.TextBox("txtTextboxName")%></pre>
        </label>
        <%= Html.TextBox("txtTextboxName")%>
    </div>
    
    <br />
    <br />
    <div class="displayinline">
        <label>
            Text box width = 50px<br />
            Code:
            <pre>&lt;%= Html.TextBox("txtTextboxName",null, new { @class = "txt50" })%></pre>
        </label>
        <%= Html.TextBox("txtTextboxName",null, new { @class = "txt50" })%>
    </div>
    
    <br />
    <br />
    <div class="displayinline">
        <label>
            Text box width = 100px<br />
            Code:
            <pre>&lt;%= Html.TextBox("txtTextboxName",null, new { @class = "txt100" })%></pre>
        </label>
        <%= Html.TextBox("txtTextboxName",null, new { @class = "txt100" })%>
    </div>
    
    <br />
    <br />
    <div class="displayinline">
        <label>
            Text box width = 150px<br />
            Code:
            <pre>&lt;%= Html.TextBox("txtTextboxName",null, new { @class = "txt150" })%></pre>
        </label>
        <%= Html.TextBox("txtTextboxName",null, new { @class = "txt150" })%>
    </div>
    
    <br />
    <br />
    <div class="displayinline">
        <label>
            Text box width = 200px<br />
            Code:
            <pre>&lt;%= Html.TextBox("txtTextboxName",null, new { @class = "txt200" })%></pre>
        </label>
        <%= Html.TextBox("txtTextboxName",null, new { @class = "txt200" })%>
    </div>
    
    <br />
    <br />
    <div class="displayinline">
        <label>
            Text box width = 200px and readonly<br />
            Code:
            <pre>&lt;%= Html.TextBox("txtTextboxName",null, new { @class = "txt200", @readonly="readonly" })%>
</pre>
        </label>
        <%= Html.TextBox("txtTextboxName",null, new { @class = "txt200", @readonly="readonly" })%>
    </div>
    
    <br />
    <br />
    <div class="displayinline">
        <label>
            Text box width = 200px and error<br />
            Trường hợp sử dụng: Sử dụng khi kiểm tra kiểu textbox không được điền dữ liệu, hoặc
            kiểm tra giá trị của textbox đó. Kết hợp với thuộc tính <b>Required</b> trên server
            để hiển thị thông báo cho người dùng.
            <br />
            Code:
            <br />
            <pre>
            &lt;div class="editor-field">
                &lt;%= Html.TextBoxFor(model => model.MENU_CD)%>
                &lt;%= Html.ValidationMessageFor(model => model.MENU_CD)%>
            &lt;/div>
</pre>
        </label>
        <%= Html.TextBox("txtTextboxName", null, new { @class = "txt200 input-validation-error" })%>
    </div>
    
    
    <hr />
    <div class="displayinline">
        <label>
            <b>Text Area</b>
            <br />
            <br />
            Code:
            <pre>&lt;%= Html.TextArea("txtTextArea") %></pre>
        </label>
        <br />
        <%= Html.TextArea("txtTextArea") %>
    </div>
    <hr />
    <label>
        <b>Check Box</b></label>
    <br />
    <br />
    Code:
    <pre>&lt;input id="Checkbox1" name="IdList" type="checkbox" value="value" /></pre>
    <input id="IdList" name="IdList" type="checkbox" value="value" />
    <hr />
    <label>
        <b>Radio Button</b><br />
        <br />
        Code:
        <pre>&lt;input type="radio" value="1" name="ALL_COMANY_FLAG" /></pre>
        <input type="radio" value="1" name="ALL_COMANY_FLAG" />
    </label>
    <hr />
    <label>
        <b>Combobox</b><br />
    </label>
    <br />
    Code:
    <pre>&lt;%= Html.DropDownList("dddepartMent", (SelectList)ViewData["ItemList"])%></pre>
    <br />
    <br />
    Danh sách dữ liệu được truyền từ phía Controllers.
    <%= Html.DropDownList("dddepartMent", (SelectList)ViewData["ItemList"])%>
    <hr />
    <label>
        <b>Table</b></label>
    <br />
    <br />
    Code:
    <br />
    <pre>
            &lt;table class="data-table data-table-fill" >
                &lt;tr>
                    &lt;th scope="col" class="<b>th100</b>">&lt;th&gt; (100) &lt;/th>
                    &lt;th scope="col" class="<b>th50</b>">(50)&lt;/th>
                    &lt;th scope="col" class="<b>th150</b>">&lt;th&gt; Heading (150)&lt;/th>
                    &lt;th scope="col" class="<b>th200</b>">&lt;th&gt; Heading (200)&lt;/th>
                    &lt;th scope="col" class="<b>thFill</b>">&lt;th&gt; Heading (Fill)&lt;/th>
                &lt;/tr>
                &lt;tr>
                    &lt;th scope="row">&lt;th&gt; Heading&lt;/th>
                    &lt;td>content&lt;/td>
                    &lt;td>content&lt;/td>
                    &lt;td>content&lt;/td>
                    &lt;td>content&lt;/td>
                &lt;/tr>
                &lt;tr class="row-alternating">
                    &lt;th scope="row">&lt;th&gt; Heading&lt;/th>
                    &lt;td>content&lt;/td>
                    &lt;td>content&lt;/td>
                    &lt;td>content&lt;/td>
                    &lt;td>content&lt;/td>
                &lt;/tr>
                &lt;tr>
                    &lt;th scope="row">&lt;th&gt; Heading&lt;/th>
                    &lt;td>content&lt;/td>
                    &lt;td>content&lt;/td>
                    &lt;td>content&lt;/td>
                    &lt;td>content&lt;/td>
                &lt;/tr>
                &lt;tr class="row-alternating">
                    &lt;th scope="row">&lt;th&gt; Heading&lt;/th>
                    &lt;td>content&lt;/td>
                    &lt;td>content&lt;/td>
                    &lt;td>content&lt;/td>
                    &lt;td>content&lt;/td>
                &lt;/tr>
            &lt;/table>
         </pre>
    <table class="data-table data-table-fill">
        <tr>
            <th scope="col" class="th100">
                &lt;th&gt; (100)
            </th>
            <th scope="col" class="th50">
                (50)
            </th>
            <th scope="col" class="th150">
                &lt;th&gt; Heading (150)
            </th>
            <th scope="col" class="th200">
                &lt;th&gt; Heading (200)
            </th>
            <th scope="col" class="thFill">
                &lt;th&gt; Heading (Fill)
            </th>
        </tr>
        <tr>
            <th scope="row">
                &lt;th&gt; Heading
            </th>
            <td>
                content
            </td>
            <td>
                content
            </td>
            <td>
                content
            </td>
            <td>
                content
            </td>
        </tr>
        <tr class="row-alternating">
            <th scope="row">
                &lt;th&gt; Heading
            </th>
            <td>
                content
            </td>
            <td>
                content
            </td>
            <td>
                content
            </td>
            <td>
                content
            </td>
        </tr>
        <tr>
            <th scope="row">
                &lt;th&gt; Heading
            </th>
            <td>
                content
            </td>
            <td>
                content
            </td>
            <td>
                content
            </td>
            <td>
                content
            </td>
        </tr>
        <tr class="row-alternating">
            <th scope="row">
                &lt;th&gt; Heading
            </th>
            <td>
                content
            </td>
            <td>
                content
            </td>
            <td>
                content
            </td>
            <td>
                content
            </td>
        </tr>
    </table>
    <p>
        Nếu không muốn cho table bung hết màng hình thì chỉ sử dụng class="data-table"</p>
        
        <hr />
        <p>
        <b>MASSEAGE AREA</b>
        <p>Hiểm thị thông báo lỗi:<br /></p>
        <pre>
        &lt;div class ="error">
            &lt;p>
                You can't access this function. Pleace contact with your manager for more infomations.
             &lt;/p>
        &lt;/div>
</pre><br />
        Kết quả: 
        
        <label class ="error">
            You can't access this function. Pleace contact with your manager for more infomations.
        </label>
        </p>
        
         <p>Hiểm thị thông báo thành công:<br /></p>
         <pre>
         &lt;div class ="success">
            &lt;p>
                Your process was successfully.
            &lt;/p>
         &lt;/div>
         </pre>
    <br />
        Kết quả: 
        <label class ="success">
            Your process was successfully.
        </label>
        <hr />
        <p><b>AUTHORIZE</b></p>
        <p>Một chức năng trong hệ thống đều phải yêu cầu người có thẩm quyền mới được sử dụng.
         Để kiểm quyền truy cập cho Action nào bạn chỉ việc đặt thẻ <i>[CustomAuthorize]</i> trước mỗi Action đó, Ví dụ:<br /></p>
        
        <pre>
        using HRA_KUMON.Models;
        
        
        [CustomAuthorize]
        public ActionResult About()
        {
           //Your logic code.
            return View();
        }
</pre>
    <hr />
    <label>
        <b>COMMONS</b></label>
        <p><br /><b>SỬ DỤNG CÁC ĐỘI TƯỢNG DÙNG CHUNG: (Setting)</b><br /><br /> 
            Để sử dụng các đối tượng chung ta cần tham chiếu đến namespace <pre>using HRA_KUMON.Bussiness;</pre></p>
        Để lấy danh sách loại Band ta làm như sau:<br />
        <pre>List&lt;Obj> listBandCate  = Setting.LBandCategory;</pre>
        
        <br /><br />
         Để lấy danh sách loại Evaluation ta làm như sau:<br />
        <pre>List&lt;Obj> listEvaulationCate  = Setting.LEvaluationCategory;</pre>
        
        <br />
        <p>Trong đó Obj là một đối tượng có hai thuộc tính (ID, Name).</p>
        
        <br />
        <p><b>SỬ DỤNG THÔNG TIN USER LOGIN</b>
        <br />Tất cả các thông tin của user login được lưu trên Session["StaffLoginInfoSection"], để sử dụng được các thông tin này, bạn phải ép kiểu về StaffLoginInfo như sau:</p>
        
         <pre>
            if (Session["StaffLoginInfoSection"] != null)
            {
                StaffLoginInfo info = (StaffLoginInfo)Session["StaffLoginInfoSection"];
                if (info != null)
                {
                    string company_CD = info.COMPANY_CD;    //Mã công ty
                    int staff_ID = info.STAFF_ID;           //Mã nhân viên
                    string staff_name = info.STAFF_NAME;    //Tên nhân viên (F+M+L)
                    int person_CD = info.PERSON_CD;         //Mã người đăng nhập
                    List&lt;M_COMPANY> companies = info.COMPANIES;  //Danh sách companies tùy chọn của super user.
                }
            }        
</pre>
        <p>Chú ý: 
        <br />Nếu danh sách company có dữ liệu có nghĩa người dùng này là super user, do đó các thông tin truy vấn phải lấy company_cd theo dropdownlist có tên là <i>ddCompany</i> trên site master chứ không lấy company_cd của người dùng đã đăng nhập.
        </p>
        <p>
         Do danh sách company này được lấy một lần lúc người dùng đăng nhập thành công, cho nên trong chức năng quản lý company các bạn phải cập nhật lại giá trị này.
        </p>
        <br /><p><b>COMPANY_CD</b>
        <br />Khi truy vấn dữ liệu đối với Super user hoặc các role khác đều phải lấy thông tin COMPANY_CD bằng Sesstion <i>Session["COMPANY_CD_SECTION"]</i> như sau:</p>
        <pre>
         string company_cd = string.Empty;
         if(Session["COMPANY_CD_SECTION"]!=null)
             company_cd = (string)Session["COMPANY_CD_SECTION"];
</pre>
<p>Bởi vì hệ thống tự nhận biết được vai trò của người dùng đối với người dùng thường và company được chọn đốiv với Super user.
<br />(Hiện tại thì COMPANY_CD được lấy mặc định là C1)</p>
        
        <br />
        <p><b>TEMPLATES PATH & IMAGES PATH<br /></b>
        Để lấy được đường dẫn tương đối của thư mục chứa excle template hoặc thư mục chứa images chúng ta cần sử dụng Common:
        </p>
        <pre>
    string templateURL = Common.GetTemplatePath();     //Lấy đường dẫn excel file template.
    string imageURL = Common.GetImagePath();           // Lấy đường dẫn hình ảnh đại diện của Staff.
    string strUploadPath = Common.GetUploadPath();     // Lấy đường dẫn để lưu các dile Upload từ client.
    string strDownloadPath = Common.GetDownloadPath(); // Lấy đường dẫn lưu trữ temp (tạo file zip) trước khi download. Nhớ xóa các file temp này. 
    int currentYear = Common.GetCurrentYear();  //Lấy năm hiện tại.
</pre>
    <p>
        Khi đó đường dẫn sẽ có dạng "../Commons/Images" hoặc "../Commons/Tempates/ExcelTemplates";
    </p>
    <br />
    <p><b>MESSAGE RESOURCE FILE</b><br />
        Toàn bộ các thông báo của hệ thống tới người dùng đều để trong file MessageResource.resx. <br /><br />
        Các đặt tên cho message như sau: <br />
        Đối với các message riêng cho từng màng hình sẽ có dạng &lt;FUNCTION_CD>_Msg&lt;MessageNo>. Ví dụ: L0101_Msg03<br>
        Đối với message dùng chung có dạng: Common_Msg&lt;MessageNo>. Ví dụ: Common_Msg01<br /><br />
        Sử dụng:
    </p>
    <pre>
        HRA_KUMON.MessageResource.L0101_Msg03
</pre>
<br />
<p><b>PASSWORD AND PASSWORD SALT</b>
   
</p>
<pre>
       string passSalt = Common.GenaratePasswordSalt();
       string password = Common.GetMD5EncyptString("123456", passSalt);
</pre>
<p>Trong đó "123456" là chuỗi cần mã hóa.</p>
<br />
<p><b>DATE FORMAT</b>
<pre>
    string strDate = String.Format(HRA_KUMON.Bussiness.Setting.DataTimeFullFormatString, DATE_TIME);
</pre>
</p>
<p>Trong đó DATE_TIME là chuỗi cần định dạng.</p>

<p><b>DATE CONVERT</b>
<pre>
Convert ngày sang định dạng DD/MM/YYYY.  (VD: cần covert từ MM/DD/YYYY sang DD/MM/YYYY)
<br/>
    string _outDate= Common.ConvertDateTime(_inDate);
</pre>
</p>
<p>Trong đó _inDate là chuỗi cần convert.</p>

<hr />
<b>HOW TO COMMENT</b>
<p>Comment cho người code chính của một class. Các function do người code chính có thể không comment thuộc tính Author.
<pre>
//Author:       <b>Nguyen Van A</b>
//Create date:  <b>22/05/2011</b>
//Description:   

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
................


/// &lt;summary>
/// Get role by role name.
/// &lt;/summary>
/// &lt;param name="roleName">&lt;/param>
/// &lt;returns>&lt;/returns>
public bool GetRoleByName(string roleName)
{
   //Do somethings
}

</pre>
<br>
Comment của một function mà người code không phải là người code chính của class chứa function đó.<br /><br />
<pre>
/// &lt;summary>
/// Get the person by userid and password.
/// &lt;/summary>
/// &lt;param name="userName">&lt;/param>
/// &lt;param name="passWord">&lt;/param>
/// &lt;remarks>
/// Auhthor:     <b>Nguyen Van A</b>
/// Create date: <b>27/06/2011    </b>
/// &lt;/remarks>
/// &lt;returns>Return the Person, else return null &lt;/returns>
public M_PERSON GetPersonObjByUserNameAndPassword(string userName, string passWordFromScreen)
{
    //Do somethings
}
</pre>
</p>
<br/> 
</asp:Content>
