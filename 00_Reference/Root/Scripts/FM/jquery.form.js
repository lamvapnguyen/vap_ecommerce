/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
(function(n){"use strict";typeof define=="function"&&define.amd?define(["jquery"],n):n(typeof jQuery!="undefined"?jQuery:window.Zepto)})(function(n){"use strict";function u(t){var i=t.data;t.isDefaultPrevented()||(t.preventDefault(),n(t.target).ajaxSubmit(i))}function f(t){var r=t.target,u=n(r),f,i,e;if(!u.is("[type=submit],[type=image]")){if(f=u.closest("[type=submit]"),f.length===0)return;r=f[0]}i=this;i.clk=r;r.type=="image"&&(t.offsetX!==undefined?(i.clk_x=t.offsetX,i.clk_y=t.offsetY):typeof n.fn.offset=="function"?(e=u.offset(),i.clk_x=t.pageX-e.left,i.clk_y=t.pageY-e.top):(i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop));setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function t(){if(n.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var i={},r;i.fileapi=n("<input type='file'/>").get(0).files!==undefined;i.formdata=window.FormData!==undefined;r=!!n.fn.prop;n.fn.attr2=function(){if(!r)return this.attr.apply(this,arguments);var n=this.prop.apply(this,arguments);return n&&n.jquery||typeof n=="string"?n:this.attr.apply(this,arguments)};n.fn.ajaxSubmit=function(u){function ot(t){for(var r=n.param(t,u.traditional).split("&"),o=r.length,e=[],f,i=0;i<o;i++)r[i]=r[i].replace(/\+/g," "),f=r[i].split("="),e.push([decodeURIComponent(f[0]),decodeURIComponent(f[1])]);return e}function st(t){for(var f,r,s,o=new FormData,i=0;i<t.length;i++)o.append(t[i].name,t[i].value);if(u.extraData)for(f=ot(u.extraData),i=0;i<f.length;i++)f[i]&&o.append(f[i][0],f[i][1]);return u.data=null,r=n.extend(!0,{},n.ajaxSettings,u,{contentType:!1,processData:!1,cache:!1,type:e||"POST"}),u.uploadProgress&&(r.xhr=function(){var t=n.ajaxSettings.xhr();return t.upload&&t.upload.addEventListener("progress",function(n){var t=0,i=n.loaded||n.position,r=n.total;n.lengthComputable&&(t=Math.ceil(i/r*100));u.uploadProgress(n,i,r,t)},!1),t}),r.data=null,s=r.beforeSend,r.beforeSend=function(n,t){t.data=u.formData?u.formData:o;s&&s.call(this,n,t)},n.ajax(r)}function ft(i){function ot(n){var i=null;try{n.contentWindow&&(i=n.contentWindow.document)}catch(r){t("cannot get iframe.contentWindow document: "+r)}if(i)return i;try{i=n.contentDocument?n.contentDocument:n.document}catch(r){t("cannot get iframe.contentDocument: "+r);i=n.document}return i}function st(){function h(){try{var n=ot(a).readyState;t("state = "+n);n&&n.toLowerCase()=="uninitialized"&&setTimeout(h,50)}catch(i){t("Server abort: ",i," (",i.name,")");b(tt);g&&clearTimeout(g);g=undefined}}var u=f.attr2("target"),s=f.attr2("action"),y=f.attr("enctype")||f.attr("encoding")||"multipart/form-data",r,i,c;l.setAttribute("target",d);(!e||/post/i.test(e))&&l.setAttribute("method","POST");s!=o.url&&l.setAttribute("action",o.url);o.skipEncodingOverride||e&&!/post/i.test(e)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});o.timeout&&(g=setTimeout(function(){rt=!0;b(ut)},o.timeout));r=[];try{if(o.extraData)for(i in o.extraData)o.extraData.hasOwnProperty(i)&&(n.isPlainObject(o.extraData[i])&&o.extraData[i].hasOwnProperty("name")&&o.extraData[i].hasOwnProperty("value")?r.push(n('<input type="hidden" name="'+o.extraData[i].name+'">').val(o.extraData[i].value).appendTo(l)[0]):r.push(n('<input type="hidden" name="'+i+'">').val(o.extraData[i]).appendTo(l)[0]));o.iframeTarget||v.appendTo("body");a.attachEvent?a.attachEvent("onload",b):a.addEventListener("load",b,!1);setTimeout(h,15);try{l.submit()}catch(p){c=document.createElement("form").submit;c.apply(l)}}finally{l.setAttribute("action",s);l.setAttribute("enctype",y);u?l.setAttribute("target",u):f.removeAttr("target");n(r).remove()}}function b(i){var r,u,w,f,k,d,e,c,l;if(!s.aborted&&!lt){if(h=ot(a),h||(t("cannot access response document"),i=tt),i===ut&&s){s.abort("timeout");y.reject(s,"timeout");return}if(i==tt&&s){s.abort("server abort");y.reject(s,"error","server abort");return}if(h&&h.location.href!=o.iframeSrc||rt){a.detachEvent?a.detachEvent("onload",b):a.removeEventListener("load",b,!1);r="success";try{if(rt)throw"timeout";if(w=o.dataType=="xml"||h.XMLDocument||n.isXMLDoc(h),t("isXml="+w),!w&&window.opera&&(h.body===null||!h.body.innerHTML)&&--ct){t("requeing onLoad callback, DOM not available");setTimeout(b,250);return}f=h.body?h.body:h.documentElement;s.responseText=f?f.innerHTML:null;s.responseXML=h.XMLDocument?h.XMLDocument:h;w&&(o.dataType="xml");s.getResponseHeader=function(n){var t={"content-type":o.dataType};return t[n.toLowerCase()]};f&&(s.status=Number(f.getAttribute("status"))||s.status,s.statusText=f.getAttribute("statusText")||s.statusText);k=(o.dataType||"").toLowerCase();d=/(json|script|text)/.test(k);d||o.textarea?(e=h.getElementsByTagName("textarea")[0],e?(s.responseText=e.value,s.status=Number(e.getAttribute("status"))||s.status,s.statusText=e.getAttribute("statusText")||s.statusText):d&&(c=h.getElementsByTagName("pre")[0],l=h.getElementsByTagName("body")[0],c?s.responseText=c.textContent?c.textContent:c.innerText:l&&(s.responseText=l.textContent?l.textContent:l.innerText))):k=="xml"&&!s.responseXML&&s.responseText&&(s.responseXML=at(s.responseText));try{ht=yt(s,k,o)}catch(nt){r="parsererror";s.error=u=nt||r}}catch(nt){t("error caught: ",nt);r="error";s.error=u=nt||r}s.aborted&&(t("upload aborted"),r=null);s.status&&(r=s.status>=200&&s.status<300||s.status===304?"success":"error");r==="success"?(o.success&&o.success.call(o.context,ht,"success",s),y.resolve(s.responseText,"success",s),p&&n.event.trigger("ajaxSuccess",[s,o])):r&&(u===undefined&&(u=s.statusText),o.error&&o.error.call(o.context,s,r,u),y.reject(s,"error",u),p&&n.event.trigger("ajaxError",[s,o,u]));p&&n.event.trigger("ajaxComplete",[s,o]);p&&!--n.active&&n.event.trigger("ajaxStop");o.complete&&o.complete.call(o.context,s,r);lt=!0;o.timeout&&clearTimeout(g);setTimeout(function(){o.iframeTarget?v.attr("src",o.iframeSrc):v.remove();s.responseXML=null},100)}}}var l=f[0],it,nt,o,p,d,v,a,s,k,w,rt,g,y=n.Deferred(),ut,tt,ft,et,ht,h,ct,lt;if(y.abort=function(n){s.abort(n)},i)for(nt=0;nt<c.length;nt++)it=n(c[nt]),r?it.prop("disabled",!1):it.removeAttr("disabled");if(o=n.extend(!0,{},n.ajaxSettings,u),o.context=o.context||o,d="jqFormIO"+(new Date).getTime(),o.iframeTarget?(v=n(o.iframeTarget),w=v.attr2("name"),w?d=w:v.attr2("name",d)):(v=n('<iframe name="'+d+'" src="'+o.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),a=v[0],s={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(i){var r=i==="timeout"?"timeout":"aborted";t("aborting upload... "+r);this.aborted=1;try{a.contentWindow.document.execCommand&&a.contentWindow.document.execCommand("Stop")}catch(u){}v.attr("src",o.iframeSrc);s.error=r;o.error&&o.error.call(o.context,s,r,i);p&&n.event.trigger("ajaxError",[s,o,r]);o.complete&&o.complete.call(o.context,s,r)}},p=o.global,p&&0==n.active++&&n.event.trigger("ajaxStart"),p&&n.event.trigger("ajaxSend",[s,o]),o.beforeSend&&o.beforeSend.call(o.context,s,o)===!1)return o.global&&n.active--,y.reject(),y;if(s.aborted)return y.reject(),y;k=l.clk;k&&(w=k.name,w&&!k.disabled&&(o.extraData=o.extraData||{},o.extraData[w]=k.value,k.type=="image"&&(o.extraData[w+".x"]=l.clk_x,o.extraData[w+".y"]=l.clk_y)));ut=1;tt=2;ft=n("meta[name=csrf-token]").attr("content");et=n("meta[name=csrf-param]").attr("content");et&&ft&&(o.extraData=o.extraData||{},o.extraData[et]=ft);o.forceSync?st():setTimeout(st,10);ct=50;var at=n.parseXML||function(n,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(n)):t=(new DOMParser).parseFromString(n,"text/xml"),t&&t.documentElement&&t.documentElement.nodeName!="parsererror"?t:null},vt=n.parseJSON||function(n){return window.eval("("+n+")")},yt=function(t,i,r){var f=t.getResponseHeader("content-type")||"",e=i==="xml"||!i&&f.indexOf("xml")>=0,u=e?t.responseXML:t.responseText;return e&&u.documentElement.nodeName==="parsererror"&&n.error&&n.error("parsererror"),r&&r.dataFilter&&(u=r.dataFilter(u,i)),typeof u=="string"&&(i==="json"||!i&&f.indexOf("json")>=0?u=vt(u):(i==="script"||!i&&f.indexOf("javascript")>=0)&&n.globalEval(u)),u};return y}var e,b,o,f,a,v,c,y,s,l,h,d,g,nt,ut,p,w;if(!this.length)return t("ajaxSubmit: skipping submit process - no element selected"),this;if(f=this,typeof u=="function"?u={success:u}:u===undefined&&(u={}),e=u.type||this.attr2("method"),b=u.url||this.attr2("action"),o=typeof b=="string"?n.trim(b):"",o=o||window.location.href||"",o&&(o=(o.match(/^([^#]+)/)||[])[1]),u=n.extend(!0,{url:o,success:n.ajaxSettings.success,type:e||n.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},u),a={},this.trigger("form-pre-serialize",[this,u,a]),a.veto)return t("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(u.beforeSerialize&&u.beforeSerialize(this,u)===!1)return t("ajaxSubmit: submit aborted via beforeSerialize callback"),this;if(v=u.traditional,v===undefined&&(v=n.ajaxSettings.traditional),c=[],s=this.formToArray(u.semantic,c),u.data&&(u.extraData=u.data,y=n.param(u.data,v)),u.beforeSubmit&&u.beforeSubmit(s,this,u)===!1)return t("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[s,this,u,a]),a.veto)return t("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;l=n.param(s,v);y&&(l=l?l+"&"+y:y);u.type.toUpperCase()=="GET"?(u.url+=(u.url.indexOf("?")>=0?"&":"?")+l,u.data=null):u.data=l;h=[];u.resetForm&&h.push(function(){f.resetForm()});u.clearForm&&h.push(function(){f.clearForm(u.includeHidden)});!u.dataType&&u.target?(d=u.success||function(){},h.push(function(t){var i=u.replaceTarget?"replaceWith":"html";n(u.target)[i](t).each(d,arguments)})):u.success&&h.push(u.success);u.success=function(n,t,i){for(var e=u.context||this,r=0,o=h.length;r<o;r++)h[r].apply(e,[n,t,i||f,f])};u.error&&(g=u.error,u.error=function(n,t,i){var r=u.context||this;g.apply(r,[n,t,i,f])});u.complete&&(nt=u.complete,u.complete=function(n,t){var i=u.context||this;nt.apply(i,[n,t,f])});var et=n("input[type=file]:enabled",this).filter(function(){return n(this).val()!==""}),tt=et.length>0,it="multipart/form-data",rt=f.attr("enctype")==it||f.attr("encoding")==it,k=i.fileapi&&i.formdata;for(t("fileAPI :"+k),ut=(tt||rt)&&!k,u.iframe!==!1&&(u.iframe||ut)?u.closeKeepAlive?n.get(u.closeKeepAlive,function(){p=ft(s)}):p=ft(s):p=(tt||rt)&&k?st(s):n.ajax(u),f.removeData("jqxhr").data("jqxhr",p),w=0;w<c.length;w++)c[w]=null;return this.trigger("form-submit-notify",[this,u]),this};n.fn.ajaxForm=function(i){if(i=i||{},i.delegation=i.delegation&&n.isFunction(n.fn.on),!i.delegation&&this.length===0){var r={s:this.selector,c:this.context};return!n.isReady&&r.s?(t("DOM not ready, queuing ajaxForm"),n(function(){n(r.s,r.c).ajaxForm(i)}),this):(t("terminating; zero elements found by selector"+(n.isReady?"":" (DOM not ready)")),this)}if(i.delegation){n(document).off("submit.form-plugin",this.selector,u).off("click.form-plugin",this.selector,f).on("submit.form-plugin",this.selector,i,u).on("click.form-plugin",this.selector,i,f);return this}return this.ajaxFormUnbind().bind("submit.form-plugin",i,u).bind("click.form-plugin",i,f)};n.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};n.fn.formToArray=function(t,r){var e=[],l,h,f,c,u,b,k,a,p,v;if(this.length===0)return e;var o=this[0],w=this.attr("id"),s=t?o.getElementsByTagName("*"):o.elements,y;if(s&&!/MSIE [678]/.test(navigator.userAgent)&&(s=n(s).get()),w&&(y=n(':input[form="'+w+'"]').get(),y.length&&(s=(s||[]).concat(y))),!s||!s.length)return e;for(l=0,b=s.length;l<b;l++)if(u=s[l],f=u.name,f&&!u.disabled){if(t&&o.clk&&u.type=="image"){o.clk==u&&(e.push({name:f,value:n(u).val(),type:u.type}),e.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));continue}if(c=n.fieldValue(u,!0),c&&c.constructor==Array)for(r&&r.push(u),h=0,k=c.length;h<k;h++)e.push({name:f,value:c[h]});else if(i.fileapi&&u.type=="file")if(r&&r.push(u),a=u.files,a.length)for(h=0;h<a.length;h++)e.push({name:f,value:a[h],type:u.type});else e.push({name:f,value:"",type:u.type});else c!==null&&typeof c!="undefined"&&(r&&r.push(u),e.push({name:f,value:c,type:u.type,required:u.required}))}return!t&&o.clk&&(p=n(o.clk),v=p[0],f=v.name,f&&!v.disabled&&v.type=="image"&&(e.push({name:f,value:p.val()}),e.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))),e};n.fn.formSerialize=function(t){return n.param(this.formToArray(t))};n.fn.fieldSerialize=function(t){var i=[];return this.each(function(){var f=this.name,r,u,e;if(f)if(r=n.fieldValue(this,t),r&&r.constructor==Array)for(u=0,e=r.length;u<e;u++)i.push({name:f,value:r[u]});else r!==null&&typeof r!="undefined"&&i.push({name:this.name,value:r})}),n.param(i)};n.fn.fieldValue=function(t){for(var f,i,r=[],u=0,e=this.length;u<e;u++)(f=this[u],i=n.fieldValue(f,t),i!==null&&typeof i!="undefined"&&(i.constructor!=Array||i.length))&&(i.constructor==Array?n.merge(r,i):r.push(i));return r};n.fieldValue=function(t,i){var a=t.name,u=t.type,h=t.tagName.toLowerCase(),e,o,r,f;if(i===undefined&&(i=!0),i&&(!a||t.disabled||u=="reset"||u=="button"||(u=="checkbox"||u=="radio")&&!t.checked||(u=="submit"||u=="image")&&t.form&&t.form.clk!=t||h=="select"&&t.selectedIndex==-1))return null;if(h=="select"){if(e=t.selectedIndex,e<0)return null;var c=[],l=t.options,s=u=="select-one",v=s?e+1:l.length;for(o=s?e:0;o<v;o++)if(r=l[o],r.selected){if(f=r.value,f||(f=r.attributes&&r.attributes.value&&!r.attributes.value.specified?r.text:r.value),s)return f;c.push(f)}return c}return n(t).val()};n.fn.clearForm=function(t){return this.each(function(){n("input,select,textarea",this).clearFields(t)})};n.fn.clearFields=n.fn.clearInputs=function(t){var i=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var r=this.type,u=this.tagName.toLowerCase();i.test(r)||u=="textarea"?this.value="":r=="checkbox"||r=="radio"?this.checked=!1:u=="select"?this.selectedIndex=-1:r=="file"?/MSIE/.test(navigator.userAgent)?n(this).replaceWith(n(this).clone(!0)):n(this).val(""):t&&(t===!0&&/hidden/.test(r)||typeof t=="string"&&n(this).is(t))&&(this.value="")})};n.fn.resetForm=function(){return this.each(function(){typeof this.reset!="function"&&(typeof this.reset!="object"||this.reset.nodeType)||this.reset()})};n.fn.enable=function(n){return n===undefined&&(n=!0),this.each(function(){this.disabled=!n})};n.fn.selected=function(t){return t===undefined&&(t=!0),this.each(function(){var r=this.type,i;r=="checkbox"||r=="radio"?this.checked=t:this.tagName.toLowerCase()=="option"&&(i=n(this).parent("select"),t&&i[0]&&i[0].type=="select-one"&&i.find("option").selected(!1),this.selected=t)})};n.fn.ajaxSubmit.debug=!1});