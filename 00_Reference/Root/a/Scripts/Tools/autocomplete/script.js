function isDivHeightVisible(n){var t=$(window).scrollTop(),r=t+$(window).height(),i=$(n).offset().top,u=i+$(n).height();return u>=t&&i<=r&&u<=r&&i>=t}function isDivWidthVisible(n){var t=$(window).scrollLeft(),r=t+$(window).width(),i=$(n).offset().left,u=i+$(n).width();return u>=t&&i<=r&&u<=r&&i>=t}(function(n){"use strict";n.fn.tautocomplete=function(t){function nt(){var t,u;if(i.ddTextbox.val()==""){a();return}i.ddTableCaption.hide();i.ddTextbox.addClass("loading");r.ajax!=null?(t=null,t=n.isFunction(r.ajax.data)?r.ajax.data.call(this):r.ajax.data,n.ajax({type:r.ajax.type||"GET",dataType:"json",contentType:r.ajax.contentType||"application/json; charset=utf-8",headers:r.ajax.headers||{"Content-Type":"application/x-www-form-urlencoded"},data:t||null,url:r.ajax.url,success:tt,error:function(){i.ddTextbox.removeClass("loading")}})):n.isFunction(r.data)?(u=r.data.call(this),v(u)):null}function tt(t){if(r.ajax.success==null||r.ajax.success==""||typeof r.ajax.success=="undefined")v(t);else if(n.isFunction(r.ajax.success)){var i=r.ajax.success.call(this,t);v(i)}}function b(){var n=i.ddTable.find("tbody").find(".selected"),u=n.find("td").eq(0).text(),t;if(parseInt(u)>0){for(i.ddTextbox.data("id",u),i.ddTextbox.data("text",n.find("td").eq(1).text()),t=0;t<f;t++)p[r.columns[t]]=n.find("td").eq(t).text();i.ddTextbox.val(n.find("td").eq(1).text());h.val(n.find("td").eq(0).text()+"#$#"+n.find("td").eq(1).text())}a();k()}function k(){n.isFunction(r.onchange)&&r.onchange.call(this)}function a(){i.ddTable.hide();i.ddTextbox.removeClass("inputfocus");i.ddDiv.removeClass("highlight");i.ddTableCaption.hide()}function it(){var t=i.ddTextbox.height()+20+"px 1px 0px 1px",r="1px 1px "+(i.ddTextbox.height()+20)+"px 1px";i.ddDiv.css("top","0px");i.ddDiv.css("left","0px");i.ddTable.css("margin",t);i.ddTextbox.addClass("inputfocus");i.ddDiv.addClass("highlight");i.ddTable.show();isDivHeightVisible(i.ddDiv)||(i.ddDiv.css("top",-1*i.ddTable.height()+"px"),i.ddTable.css("margin",r),isDivHeightVisible(i.ddDiv)||(i.ddDiv.css("top","0px"),i.ddTable.css("margin",t),n("html, body").animate({scrollTop:i.ddDiv.offset().top-60},250)));isDivWidthVisible(i.ddDiv)||i.ddDiv.css("left","-"+(i.ddTable.width()-i.ddTextbox.width()-20)+"px")}function v(n){var c,o,h,l,t;try{i.ddTextbox.removeClass("loading");i.ddTable.find("tbody").find("tr").remove();o=null;r.highlight!=null&&(c=!0,o=new RegExp(i.ddTextbox.val(),"gi"));var t=0,s=0,u=null,e=null;if(n!=null)for(t=0;t<n.length;t++)if(!(t>=15)){h=n[t];u="";s=0;for(l in h){if(s<=f)e=h[l]+"",c&&(e=e.replace(o,"<span class='"+r.highlight+"'>$&<\/span>")),u=u+"<td>"+e+"<\/td>";else continue;s++}i.ddTable.append("<tr>"+u+"<\/tr>")}if(t==0)i.ddTable.hide(),i.ddTableCaption.show();else{for(t=0;t<r.hide.length&&t<f;t++)r.hide[t]||(i.ddTable.find("td:nth-child("+(t+1)+")").hide(),i.ddTable.find("th:nth-child("+(t+1)+")").hide());i.ddTable.find("tbody").find("tr:first").addClass("selected");it()}}catch(a){}}var r=n.extend({width:"500px",columns:[],hide:[!1],onchange:null,norecord:"No Records Found",dataproperty:null,regex:"",data:null,placeholder:null,theme:"default",ajax:null,delay:1e3,highlight:"word-highlight"},t),f,h,u,o,c,s,l;r.theme={"default":"adropdown",classic:"aclassic",white:"awhite"}[r.theme];var i={ddDiv:n("<div>",{"class":r.theme}),ddTable:n("<table><\/table>",{style:"width:"+r.width}),ddTableCaption:n("<caption>"+r.norecord+"<\/caption>"),ddTextbox:n("<input type='text' value=''>")},e={UP:38,DOWN:40,ENTER:13,TAB:9,BACKSPACE:8},y={columnNA:"Error: Columns Not Defined",dataNA:"Error: Data Not Available"},d={id:function(){return i.ddTextbox.data("id")},text:function(){return i.ddTextbox.data("text")},searchdata:function(){return i.ddTextbox.val()},settext:function(n){i.ddTextbox.val(n)},isNull:function(){return i.ddTextbox.data("text")==""||i.ddTextbox.data("text")==null?!0:!1},all:function(){return p}},g=function(){var n=0;return function(t,i){clearTimeout(n);n=setTimeout(t,i)}}(),p={},w=!1;for(this.is(":focus")&&(w=!0),f=r.columns.length,h=this,this.wrap("<div class='acontainer'><\/div>"),this.after(i.ddTextbox),i.ddTextbox.attr("autocomplete","off"),i.ddTextbox.css("width",this.css("width")),i.ddTextbox.attr("class",this.attr("class")),i.ddTextbox.attr("placeholder",this.attr("placeholder")),r.columns==""||r.columns==null?i.ddTextbox.attr("placeholder",y.columnNA):(r.data==""||r.data==null)&&r.ajax==null&&i.ddTextbox.attr("placeholder",y.dataNA),this.after(i.ddDiv),this.hide(),i.ddDiv.append(i.ddTable),i.ddTable.attr("cellspacing","0"),i.ddTable.append(i.ddTableCaption),u="<thead><tr>",o=0;o<=f-1;o++)u=u+"<th>"+r.columns[o]+"<\/th>";return u=u+"<\/thead><\/tr>",i.ddTable.append(u),c="",s="",this.val()!=""&&this.length&&(l=this.val().split("#$#"),c=l[0],s=l[1]),i.ddTextbox.attr("data-id",c),i.ddTextbox.attr("data-text",s),i.ddTextbox.val(s),w&&i.ddTextbox.focus(),i.ddTextbox.keyup(function(n){if((n.keyCode<46||n.keyCode>105)&&n.keyCode!=e.BACKSPACE){n.preventDefault();return}g(function(){nt()},r.delay)}),i.ddTextbox.keypress(function(n){var t=new RegExp(r.regex),i=String.fromCharCode(n.charCode?n.charCode:n.which);if(!t.test(i))return n.preventDefault(),!1}),i.ddTextbox.keydown(function(n){var t=i.ddTable.find("tbody"),r=t.find(".selected");n.keyCode==e.ENTER&&(n.preventDefault(),b());n.keyCode==e.UP&&(i.ddTable.find(".selected").removeClass("selected"),r.prev().length==0?t.find("tr:last").addClass("selected"):r.prev().addClass("selected"));n.keyCode==e.DOWN&&(t.find(".selected").removeClass("selected"),r.next().length==0?t.find("tr:first").addClass("selected"):(i.ddTable.find(".selected").removeClass("selected"),r.next().addClass("selected")))}),i.ddTable.delegate("tr","mousedown",function(){i.ddTable.find(".selected").removeClass("selected");n(this).addClass("selected");b()}),i.ddTextbox.focusout(function(){if(a(),n(this).val()!=n(this).data("text")){var t=!0;n(this).data("text")==""&&(t=!1);n(this).data("text","");n(this).data("id","");h.val("");t&&k()}}),d}})(jQuery);