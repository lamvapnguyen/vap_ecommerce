$(function(){for(var t=$.event.props,i=t.length,r=[],n;i--;)n=t[i],n!="layerX"&&n!="layerY"&&r.push(n);$.event.props=r});var True=!0,False=!1,Xml={load:function(n,t){var i=null;window.ActiveXObject?(i=new ActiveXObject("Microsoft.XMLDOM"),i.async=!1,i.load(n),t(i)):(i=document.implementation.createDocument("","",null),i.load(n),i.onload=t.handle(null,i))},parse:function(n){var t=null,i;return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(n)):(i=new DOMParser,t=i.parseFromString(n,"text/xml")),t},toString:function(n){return window.ActiveXObject?n.xml:(new XMLSerializer).serializeToString(n)}};$.ajaxSetup({traditional:!0});$.unparam=function(n){for(var t,f,i={},u=n.split("&"),r=0;r<u.length;r++)t=u[r].split("="),t[0]=decodeURIComponent(t[0]),t[1]=decodeURIComponent(t[1]),typeof i[t[0]]=="undefined"?i[t[0]]=t[1]:typeof i[t[0]]=="string"?(f=[i[t[0]],t[1]],i[t[0]]=f):i[t[0]].push(t[1]);return i};$.cookie=function(n,t,i){var f,r,e,o,u,s;if(typeof t!="undefined"){i=i||{path:"/"};t===null&&(t="",i.expires=-1);f="";i.expires&&(typeof i.expires=="number"||i.expires.toUTCString)&&(typeof i.expires=="number"?(r=new Date,r.setTime(r.getTime()+i.expires*864e5)):r=i.expires,f="; expires="+r.toUTCString());var h=i.path?"; path="+i.path:"",c=i.domain?"; domain="+i.domain:"",l=i.secure?"; secure":"";document.cookie=[n,"=",encodeURIComponent(t),f,h,c,l].join("")}else{if(e=null,document.cookie&&document.cookie!="")for(o=document.cookie.split(";"),u=0;u<o.length;u++)if(s=jQuery.trim(o[u]),s.substring(0,n.length+1)==n+"="){e=decodeURIComponent(s.substring(n.length+1));break}return e}};$.inherit=function(n,t,i){for(var r in n)(i==null||i||t[r]!=null)&&(t[r]=n[r]);return t};__testHeight_div=null;$.testHeight=function(n,t){__testHeight_div||(__testHeight_div=$("<div style='width:1px; height:1px; overflow:hidden;'><div style='visibility:hidden; position:absolute; z-index:-999; top:0; left:0'><\/div><\/div>").appendTo(document.body).children(":first"));__testHeight_div.width(t)[0].innerHTML=n;var i=__testHeight_div.height();return __testHeight_div.html(""),i};$.inherit({_scriptManager:{},_cssManager:{},loadScript:function(n,t,i){$(function(){$._scriptManager[n]==null?$.getScript(t,function(){$._scriptManager[n]=!0;$.isFunction(i)&&i()}):$.isFunction(i)&&i()})},loadCss:function(n,t,i,r){$(function(){if($._cssManager[n]==null)if(r){if(!$._cssManager[n]){$._cssManager[n]=!0;var u=document.createElement("link");u.setAttribute("rel","stylesheet");u.setAttribute("type","text/css");u.setAttribute("href",t);document.getElementsByTagName("head")[0].appendChild(u)}$.isFunction(i)&&i()}else $.get(t,function(t){$("<span style='display:none !important'><\/span>").attr("cssname",n).html("<style type='text/css'>"+t+"<\/style>").appendTo(document.body);$._cssManager[n]=!0;$.isFunction(i)&&i()});else $.isFunction(i)&&i()})}},jQuery),function(n){n.fn.flowtype=function(t){var i=n.extend({maximum:9999,minimum:1,maxFont:9999,minFont:1,fontRatio:35},t),r=function(t){var f=n(t),r=f.width(),e=r>i.maximum?i.maximum:r<i.minimum?i.minimum:r,u=e/i.fontRatio,o=u>i.maxFont?i.maxFont:u<i.minFont?i.minFont:u;f.css("font-size",o+"px")};return this.each(function(){var t=this;n(window).resize(function(){r(t)});r(this)})}}(jQuery);