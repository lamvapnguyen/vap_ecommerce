function tree_opt_checkAll(n){var t=$(n);t.prop("checked")==!0?t.parent().parent().next().find(":checkbox").prop("checked",!0):t.parent().parent().next().find(":checkbox").prop("checked",!1)}function show_loading(){var n=$("#window_main_loading");n.length<1&&$("<div style='display:none !important;'><div id='window_main_loading' class='window_main_loading'>Working...<\/div><\/div>").appendTo(document.body);__hideWindow("window_main_loading");__showWindow("window_main_loading")}function hide_loading(){__hideWindow("window_main_loading")}function __sendmail(n){return $("#d_sendmail").html("<iframe src='"+$(n).attr("href")+"' allowtransparency='true' frameborder='0' style='width:500px; height: 285px'><\/iframe>"),__showWindow("d_sendmail",function(){$("#d_sendmail").html("")},function(){$("#d_sendmail").html("")},null,!0),!1}function reload_sys(){$.post(__gvars.ajurlweb,{action:"reload_sys"},function(){alert("OK.")})}function __close_edit_form(n){n&&window.parent.location.reload();window.parent.__hideWindow("__d_admin_edit")}function __close_edit_complete(){window.parent.__hideWindow("__d_admin_edit",!0)}function __subwindow_edit_init(){$("body").css({"min-width":"initial"});$("#wcms_mainbody").width("100%");$("#wcms_left_c,#wcms_body_c").width(0);$("#wcms_body_c").width($("#wcms_mainbody").width()-10).css({"box-sizing":"border-box"});$(".dm_edit_button_2").hide()}function exit(){window.location.reload();__doPostBack("A_Header_1$lbt_Logout","")}function goto_page(n){var t=$(n).parent();t.next().val(n.value);t.next().next().click()}function row_sort(n){var t=DM_List.hdf_SortAsc;DM_List.hdf_SortName.val()==n?t.val()=="0"?t.val("1"):t.val("0"):(DM_List.hdf_SortName.val(n),t.val("1"));DM_List.btn_Command.click()}function row_edit(n){var t=$(n).attr("v");DM_DataManager.openTab(1);DM_List.hdf_EditID.val(t);DM_List.hdf_Command.val("Edit");DM_List.btn_Command.click()}function row_del(n){if(confirm(Language.DM_Delete_Confirm)){var t=$(n).attr("v");$.post(__gvars.ajurl,{action:"delete_row",table:DM_List.table,id:t},function(t){t=="1"?$(n).parents("tr.tr1:first,tr.tr2:first").remove():alert(Language.DM_Delete_Err)})}}function delete_confirm(){return confirm(Language.DM_Delete_Confirm)?!0:!1}function row_select(n){var i=DM_List.hdf_SelectTR.val(),t=null;i!=""&&(t=$("#"+i).removeClass("tr_focus"));n!=null?($(n).addClass("tr_focus"),DM_List.hdf_SelectTR.val(n.id)):t&&t.addClass("tr_focus")}function row_active(n,t){var i=n.checked;$.post(__gvars.ajurl,{action:"update_row_active",table:DM_List.table,id:t,active:i},function(t){t!="1"&&(n.checked=!i)})}function showHide_DM_Group(n){var t=$(n).closest(".title").next().slideToggle(400,function(){var i=t.css("display")!="none";$(n).children(":first").attr("v",i?"-":"+").attr("class",i?"arrow":"arrow2");t.children(":last").val(i?"1":"0")})}function previewBrowserImage(n){n=$(n);var t=n.val();t==""&&(t=n.attr("default"),n.val(t));n.next().next().attr("src",t)}function __showWindow(n,t,i,r,u){var o=$("#"+n),f=__oWindows[n],s,e;o.length>0&&!f&&(__oWindows[n]=f=$("<div><div class='win_c0'><\/div><div class='win_c'><\/div><\/div>"),f.oldParent=o.parent(),f.h_ok=t,f.h_cancel=i,f.appendTo(document.body),s=f.children(".win_c"),e=s.height(),f.children(".win_c").append(o.detach()),u&&(e=(e-o.outerHeight())/2-120,e<15&&(e=15),o.css("margin-top",e+"px")),r&&r())}function __hideWindow(n,t){var r=$("#"+n),i=__oWindows[n];if(r.length>0&&i){if(t&&i.h_ok){if(i.h_ok()===!1)return}else!t&&i.h_cancel&&i.h_cancel();i.hide();i.oldParent.append(r.detach());i.remove();i.oldParent=i.h_ok=i.h_cancel=null;__oWindows[n]=null;delete __oWindows[n];i=null}}function close_win(n){(window.opener||window.parent).__hideWindow(n,!1)}function open_fmgr(n,t,i){var u=$("#win_fmgr"),r=function(){var u=document.getElementById("win_fmgr_container").contentWindow;u.__FMgr?($("#win_fmgr").show(),n?u.__FMgr.reinit({f_close:function(){$("#win_fmgr").html("");__hideWindow("win_fmgr",!1)},f_insert:function(t){$("#win_fmgr").html("");__hideWindow("win_fmgr",!0);var i="",r=window.location.protocol+"//"+window.location.hostname;t.length==1?i=r+t[0].replace("//","/"):t.length>1&&($.each(t,function(){i+=';"'+r+this.replace("//","/")+'"'}),i="["+i.substr(1)+"]");n&&n(i)},type:t,number:i}):u.__FMgr.reinit({f_close:function(){$("#win_fmgr").html("");__hideWindow("win_fmgr",!1)}})):window.setTimeout(r,200)};u.length<1&&$("<div style='display:none !important;'><div id='win_fmgr'><\/div><\/div>").appendTo(document.body);$("#win_fmgr").html("<input type='button' title='Close' onclick=\"__hideWindow('win_fmgr')\" class='win_close' /><iframe id='win_fmgr_container' allowtransparency='true' src='"+A_Config.Data_Domain+"/fmgr.axd?action=openfilemgr' frameBorder='0'><\/iframe>").hide();__showWindow("win_fmgr");r()}function browse_fmgr(n,t,i){open_fmgr(function(i){if(t=="thumb_image")$.post("/fmgr.axd",{action:"thumb_image",src:i},function(t){t&&t!=""&&$(n).prev().val(t).change()});else if(t=="media"){var r=$(n).prev();r.attr("MediaID")!="";r.val(i).change()}else $(n).prev().val(i).change()},t,i)}function insert_medium_image(n,t){show_loading();$.post("/fmgr.axd",{action:"medium_image",src:n},function(n){hide_loading();t&&t(n)},"json")}function insert_large_image(n,t){show_loading();$.post("/fmgr.axd",{action:"large_image",src:n},function(n){hide_loading();t&&t(n)},"json")}function insert_photos(n,t){show_loading();$.post("/fmgr.axd",{action:"photos",src:n},function(n){t&&t(n)},"json")}function checking_photos(n){var u=n.getContent(),r=$("<div><\/div>").html(u),t,i;r.children("img:not([large])").each(function(){var n=this.getAttribute("name");n&&n!=""&&this.setAttribute("large",n)});t=r.children("img[src][large]");i=$("#"+n.settings.contentHolder).children("input:first");t.length>0?i.val(t.filter(":first").attr("src")):i.val("");n.setContent($("<div><\/div>").append(t.remove()).html())}function open_edit_page(){var t=$("input[name=module_page_layout]").val(),n=function(){$.post(__gvars.ajurl,{action:"page_layout_edit",layout:t},function(n){hide_loading();$("#m_page_editor").html(n);var t=function(){__PMMgr.init?__PMMgr.init():window.setTimeout(t,500)};t();$(".m_group").sortable({placeholder:"ui-state-highlight"});$(".m_group").disableSelection();$(".m_btn_checkall").click(function(){var n=$(this).attr("c"),t="false";t=n=="0"?"false":"true";n=n=="0"?"1":"0";$(this).parent().next().find(":checkbox[checked="+t+"]").change();$(this).attr("c",n)})})};$("#m_page_editor").empty();__showWindow("win_edit_page",function(){__PMMgr.save()},null,function(){show_loading();__is_module_edit_html?n():$.post(__gvars.ajurl,{action:"page_module_edit"},function(t){t!=""?(__is_module_edit_html=!0,$("#edit_page_html").html(t),n()):(hide_loading(),$("#edit_page_html").html("<div><b>You can not access this function! please contact website administrator...<\/b><\/div>"))})})}function open_edit_page_layout(){__showWindow("win_edit_layout",function(){var n=$("input[name=page_module_layouttype]:checked").val();$("#module_page_layout").val(n);$("#dm_img_pagelayout").attr("src","/images/page/"+n+".png");open_edit_page()},null,null,!0)}function getEById(n){return n==null||n==""?null:n&&n.tagName?n:document.getElementById(n)}function __download(n){var t=$(n).attr("path");window.open("/fmgr.axd?"+$.param({action:"download",file:t}),"_self")}function _restorePageLayout(n){return $(n).parent().prev("input").prop("checked")?!0:(alert("If you want to reload the modules, please check the checkbox to confirm."),!1)}function _openWinFrame(n,t){var i=$(n).attr("r"),r=$(n).html(),u=$(window).height()-70;return $("#"+t).width("98%").html("<div class='win_header'><div class='win_title'>"+r+"<\/div><div class='close'><input type='button' value=' ' onclick=\"close_win('"+t+"')\"/><\/div><div class='clear'><\/div><\/div><iframe src='"+i+"' allowtransparency='true' frameborder='0' style='width:100%; height:"+u+"px'><\/iframe>"),__showWindow(t,function(){$("#"+t).html("")},function(){$("#"+t).html("")},null,!0),!1}function _openAccToken(n,t,i){var r=$(n).attr("r"),u=$(n).attr("e"),f=$(n).attr("t"),e=$(window).height()-70;return $("#"+t).width("98%").html("<div class='win_header'><div class='win_title'>"+f+"<\/div><div class='close'><input type='button' value=' ' onclick=\"close_win('"+t+"')\"/><\/div><div class='clear'><\/div><\/div><iframe src='"+r+"' allowtransparency='true' frameborder='0' style='width:100%; height:"+e+"px'><\/iframe>"),__showWindow(t,function(){$("#"+t).html("")},function(){$("#"+t).html("");$("#"+i).html("updating...");$.post(__gvars.ajurl,{action:"get_acctoken",acc:u},function(n){n!=""?$("#"+i).val(n):$("#"+i).attr("title","Please press 'Update' button.").val("...")})},null,!0),!1}function _ioc31_change(n,t,i){var r=$(n).html();r=="Cancel"?($("#"+i).val("0"),$("#"+t).attr("disabled","disabled").attr("readonly","readonly").css({"background-color":"#f5f5f5",width:"150px"}).val("******"),r="Change Password"):($("#"+i).val("1"),$("#"+t).removeAttr("disabled").removeAttr("readonly").removeAttr("style").css({width:"150px"}).val(""),r="Cancel");$(n).html(r)}function ioc33_checkall(n){var t=$(n);t.prop("checked")==!0?t.parent().parent().parent().find(":checkbox").prop("checked",!0):t.parent().parent().parent().find(":checkbox").prop("checked",!1)}function alert_demo(n){var t=n==1?"Bạn đang sử dụng tài khoản 'Demo'. Không thể cập nhật dữ liệu.":"You are using the 'Demo' account. Can not update data.";alert(t)}function _openRegisterPost(n,t,i){var r=$(n).attr("r"),u=$(n).attr("e"),f=$(n).attr("t"),e=$(window).height()-70;return $("#"+t).width("98%").html("<div class='win_header'><div class='win_title'>"+f+"<\/div><div class='close'><input type='button' value=' ' onclick=\"close_win('"+t+"')\"/><\/div><div class='clear'><\/div><\/div><iframe src='"+r+"' allowtransparency='true' frameborder='0' style='width:100%; height:"+e+"px'><\/iframe>"),__showWindow(t,function(){$("#"+t).html("")},function(){$("#"+t).html("");$("#"+i).html("updating...");$.post(__gvars.ajurl,{action:"getnum_postregister",pid:u},function(n){n!=""?$("#"+i).val(n):$("#"+i).attr("title","Please press 'Update' button.").val("...")})},null,!0),!1}function __addnewitem(){DM_DataManager.openTab(1);$("#ucDMDataManager4_Edit1_btn_New_1").hide()}function __init_fcurrency(n){$("#"+n).blur(function(){$(this).html(null);$(this).formatCurrency({negativeFormat:"-%s%n",roundToDecimalPlace:2})}).keyup(function(n){var n=window.event||n,t=n.charCode||n.keyCode;if(n!==undefined)switch(t){case 16:break;case 17:break;case 18:break;case 27:this.value="";break;case 35:break;case 36:break;case 37:break;case 38:break;case 39:break;case 40:break;case 78:break;case 110:break;case 190:break;default:$(this).formatCurrency({negativeFormat:"-%s%n",roundToDecimalPlace:-1,eventOnDecimalsEntered:!0})}}).formatCurrency({negativeFormat:"-%s%n",roundToDecimalPlace:2})}function __fcurrency(n){$("#"+n).formatCurrency({negativeFormat:"-%s%n",roundToDecimalPlace:2})}function __init_fcurrency2(n){$(n).blur(function(){$(this).html(null);$(this).formatCurrency({negativeFormat:"-%s%n",roundToDecimalPlace:2})}).keyup(function(n){var n=window.event||n,t=n.charCode||n.keyCode;if(n!==undefined)switch(t){case 16:break;case 17:break;case 18:break;case 27:this.value="";break;case 35:break;case 36:break;case 37:break;case 38:break;case 39:break;case 40:break;case 78:break;case 110:break;case 190:break;default:$(this).formatCurrency({negativeFormat:"-%s%n",roundToDecimalPlace:-1,eventOnDecimalsEntered:!0})}}).formatCurrency({negativeFormat:"-%s%n",roundToDecimalPlace:2})}function _pad(n,t){return n=n.toString(),n.length<t&&(n=_pad("0"+n,t)),n}function _htmlEncode(n){return $("<div/>").text(n).html()}function _htmlDecode(n){return $("<div/>").html(n).text()}function _htmlAttEncode(n){return _htmlEncode(n).replace(/"/g,"'").replace(/'/g,"&#39;")}var __gvars,DM_List,__is_module_edit_html,__poll,__autoTextbox;window.onerror=function(){};__gvars={};__gvars.port=window.location.port;__gvars.isPort80=__gvars.port==""||__gvars.port=="80";__gvars.rooturl=window.location.protocol+"//"+window.location.hostname+(__gvars.isPort80?"":":"+__gvars.port);__gvars.ajurl=(__gvars.isPort80?"":__gvars.rooturl+"/")+"ajaxh.axd";__gvars.ajurlweb="/ajaxh.axd";$(function(){var n=$(window);n.resize(function(){var t=n.width(),i=n.height();$(".top_header").length>0?(i=i-($(".top_header").css("display")=="none"?7:$(".top_header").height()),$("#wcms_mainbody").width(t<980?980:t).height(i)):(i=i-7,$("#wcms_mainbody").width(t<980?980:t).height(i),$(".dm_tab_c").css("top","5px"));t=$("#wcms_mainbody").width();$("#wcms_left_c").height(i);$("#wcms_body_c").height(i);t=t-$("#wcms_left_c").width()-30;$("#wcms_body_c").width(t);$("#wcms_mainbody").css({opacity:"1"})}).resize();$("#a_ul_lmenu>ul").hover(function(){$(this).children("ul:first").slideToggle("fast")},function(){$(this).children("ul:first").hide()});$(".ul_top_menu>ul>li").click(function(){window.location=$(this).children("a:first").attr("href")});$(".ioc_textbox,.ioc_select,.dm_search_txt").each(function(){var t=$(this).parent().children(".dm_edit_help_div"),n;t.length&&(n="",$(this).parent().children(".dm_edit_help_div").each(function(){n+="<div>"+$(this).html()+"<\/div>";$(this).hide()}),n!=""&&$(this).qtip({show:{solo:!0,target:!1,effect:!0,delay:20},position:{my:"bottom left",at:"top left",viewport:!0,adjust:{y:-3}},content:{text:n},style:{classes:"ui-tooltip-default"}}))});$(".ioc_link").each(function(){var n=$(this).attr("tips");n!=""&&$(this).qtip({show:{solo:!0,target:!1,effect:!0,delay:20},position:{my:"bottom left",at:"top left",viewport:!0,adjust:{y:-3}},content:{text:n},style:{classes:"ui-tooltip-default"}})})});DM_List={hdf_SelectTR:"",hdf_EditID:"",hdf_SortName:"",hdf_SortAsc:"",hdf_Command:"",hdf_DelID:"",btn_Command:"",table:"",init:function(){var n=$("#d_dm_list_c").children("input:first");DM_List.hdf_SelectTR=n;DM_List.hdf_EditID=n=n.next();DM_List.hdf_DelID=n=n.next();DM_List.hdf_SortName=n=n.next();DM_List.hdf_SortAsc=n=n.next();n=n.next();DM_List.table=n.val();DM_List.hdf_Command=n=n.next();DM_List.btn_Command=n.next();row_select()}};__oWindows={};__is_module_edit_html=!1;__poll={init:function(){$("#poll_option_c").sortable({placeholder:"ui-state-highlight"});$("#poll_option_c").disableSelection()},add:function(n){var t=$(n).prev().val().trim(),i;t&&t!=""?(i="<li>\t\t\t\t\t<div>0%<\/div>\t\t\t\t\t<input type='text' name='poll_option' class='ioc_textbox' value=\""+t+"\" maxlength='200' />\t\t\t\t\t<input type='hidden' name='poll_result' value='0' />\t\t\t\t\t<input type='button' title='Delete' value=' ' class='m_button_del' onclick='__poll.del(this)' />\t\t\t\t<\/li>",$("#poll_option_c").append($(i)),$(n).prev().val("")):$(n).prev().focus()},del:function(n){confirm(Language.DM_Delete_Confirm)&&$(n).parent().remove()}};__autoTextbox={init:function(n,t){$.loadScript("autotxt","scripts/jqueryUI/jquery.ui.autocomplete.js",function(){$("#"+t).bind("keydown",function(n){n.keyCode===$.ui.keyCode.TAB&&$(this).data("autocomplete").menu.active&&n.preventDefault()}).autocomplete({minLength:0,source:function(t,i){i($.ui.autocomplete.filter(n,__autoTextbox.extractLast(t.term)))},focus:function(){return!1},select:function(n,t){var i=__autoTextbox.split(this.value);return i.pop(),i.push(t.item.value),i.push(""),this.value=i.join("; "),!1}})})},split:function(n){return n.split(/;\s*/)},extractLast:function(n){return __autoTextbox.split(n).pop()}};