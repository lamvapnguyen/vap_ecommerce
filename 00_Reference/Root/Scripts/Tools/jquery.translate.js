/*! 
 * jQuery nodesContainingText plugin 
 * 
 * Version: 1.1.2
 * 
 * http://code.google.com/p/jquery-translate/
 * 
 * Copyright (c) 2009 Balazs Endresz (balazs.endresz@gmail.com)
 * Dual licensed under the MIT and GPL licenses.
 * 
 */
var print_obj=function(n,t){var r="";for(var i in n)typeof n[i]=="string"?r+=i+": "+n[i]+"; <\/br>":(t=t-1,r+=t<=0?i+": { <\/br>object}":i+": { <\/br>"+print_obj(n[i],t)+"}");return r};(function(n){function t(){}t.prototype={init:function(t,i){return this.textArray=[],this.elements=[],this.options=i,this.jquery=t,this.n=-1,i.async===!0&&(i.async=2),i.not?(t=t.not(i.not),t=t.add(t.find("*").not(i.not)).not(n(i.not).find("*"))):t=t.add(t.find("*")),this.jq=t,this.jql=this.jq.length,this.process()},process:function(){var e,c;this.n++;var l=this,t=this.options,r="",o=!1,h=!1,u=this.jq[this.n],f,i,s;if(this.n===this.jql)return(s=this.jquery.pushStack(this.elements,"nodesContainingText"),t.complete.call(s,s,this.textArray),t.returnAll===!1&&t.walk===!1)?this.jquery:s;if(!u||(f=n(u),e=u.nodeName.toUpperCase(),c=e==="INPUT"&&n.attr(u,"type").toLowerCase(),{SCRIPT:1,NOSCRIPT:1,STYLE:1,OBJECT:1,IFRAME:1}[e]))return this.process();if(typeof t.subject=="string")r=f.attr(t.subject);else if(t.altAndVal&&(e==="IMG"||c==="image"))r=f.attr("alt");else if(t.altAndVal&&{text:1,button:1,submit:1}[c])r=f.val();else if(e==="TEXTAREA")r=f.val();else{if(i=u.firstChild,t.walk!==!0)h=!0;else while(i){if(i.nodeType==1){h=!0;break}i=i.nextSibling}if(h){for(t.walk!==!0&&(o=!0),i=u.firstChild;i;){if(i.nodeType==3&&i.nodeValue.match(/\S/)!==null)if(i.nodeValue.match(/<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)>/)!==null){if(i.nodeValue.match(/(\S+(?=.*<))|(>(?=.*\S+))/)!==null){o=!0;break}}else{o=!0;break}i=i.nextSibling}o&&(r=f.html(),r=t.stripScripts?r.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,""):r,this.jq=this.jq.not(f.find("*")))}else r=f.text()}return r?(this.elements.push(u),this.textArray.push(r),t.each.call(u,this.elements.length-1,u,r),t.async?(setTimeout(function(){l.process()},t.async),this.jquery):this.process()):this.process()}};var i={not:"",async:!1,each:function(){},complete:function(){},comments:!1,returnAll:!0,walk:!0,altAndVal:!1,subject:!0,stripScripts:!0};n.fn.nodesContainingText=function(r){return r=n.extend({},i,n.fn.nodesContainingText.defaults,r),(new t).init(this,r)};n.fn.nodesContainingText.defaults=i})(jQuery);
/*! 
 * jQuery Translate plugin 
 * 
 * Version: null
 * 
 * http://code.google.com/p/jquery-translate/
 * 
 * Copyright (c) 2009 Balazs Endresz (balazs.endresz@gmail.com)
 * Dual licensed under the MIT and GPL licenses.
 * 
 * This plugin uses the 'Google AJAX Language API' (http://code.google.com/apis/ajaxlanguage/)
 * You can read the terms of use at http://code.google.com/apis/ajaxlanguage/terms.html
 * 
 */
(function(n){function h(){}function d(t,r){i={};for(var u=0;u<t.length;u++)i[r[u].toUpperCase()]=t[u];n.translate.GLL=i;it()}function it(){s=n.translate.toLanguageCode;n.each(i,function(n,t){v[t.toUpperCase()]=n});n.translate.isReady=t;for(var r;r=k.shift();)r()}function p(i,r){var u={};return n.each(i,function(n,i){r(i,n)===t&&(u[n]=i)}),u}function o(n,i,r){return function(){return n.apply(i===t?arguments[0]:i,r||arguments)}}function g(n){return n!==u}function nt(i,u,f){var o,s={},e=n.grep(i,g);if(n.each(u,function(i,u){var f=n.grep(u[0],function(n,t){return g(e[t])&&e[t].constructor===n}).length;if(f===e.length&&f===u[0].length&&(o=t))return n.each(u[1],function(n,t){s[t]=e[n]}),r}),!o)throw f;return s}function tt(i,r){var f=nt(i,n.translate.overload,"jQuery.translate: Invalid arguments"),u=f.options||{};return delete f.options,u=n.extend({},y,r,n.extend(u,f)),u.fromOriginal&&(u.toggle=t),u.toggle&&(u.data=t),u.async===t&&(u.async=2),u.alwaysReplace===!0&&(u.toggle=!1,u.fromOriginal=!1),u}function c(){this.extend(n.translate);delete this.defaults;delete this.fn}var t=!0,r=!1,u,l="".replace,f=String,w=Function,a=Object,i,s,v={},b,k=[],e,y={from:"",to:"",start:h,error:h,each:h,complete:h,onTimeout:h,timeout:0,stripComments:t,stripWhitespace:t,stripScripts:t,separators:/\.\?\!;:/,limit:1750,walk:t,returnAll:r,replace:t,rebind:t,data:t,setLangAttr:r,subject:t,not:"",altAndVal:t,async:r,toggle:r,fromOriginal:t,parallel:!1,trim:!0,alwaysReplace:!1};c.prototype={version:"null",_init:function(i,u){var h=u.separators.source||u.separators,c=this.isString=typeof i=="string",f,e;for(n.each(["stripComments","stripScripts","stripWhitespace"],function(t,r){var f=n.translate[r];u[r]&&(i=c?f(i):n.map(i,f))}),this.rawSource="<div>"+(c?i:i.join("<\/div><div>"))+"<\/div>",this._m3=new RegExp("["+h+"](?![^"+h+"]*["+h+"])"),this.options=u,this.from=u.from=s(u.from)||"",this.to=u.to=s(u.to)||"",this.source=i,this.rawTranslation="",this.translation=[],this.i=0,this.stopped=r,this.elements=u.nodes,this._i=-1,this.rawSources=[];t;){for(size_for_translat=0,f="",e=0;e<this.source.length;e++)text_for_translate="<div>"+this.source[e]+"<\/div>",len=text_for_translate.length,size_for_translat+len<u.limit?(size_for_translat=size_for_translat+len,f+=text_for_translate):(this.rawSources.push(f),size_for_translat=len,f=text_for_translate);f&&this.rawSources.push(f);break}this.queue=new Array(this.rawSources.length);this.done=0;u.start.call(this,i,u.from,u.to,u);u.timeout&&(this.timeout=setTimeout(o(u.onTimeout,this,[i,u.from,u.to,u]),u.timeout));u.toggle&&u.nodes?u.textNodes?this._toggleTextNodes():this._toggle():this._process()},_process:function(){var e,v,y;if(!this.stopped){this.rawTranslation=this.rawTranslation.replace(/<\/div>\W<div>/gim,"<\/div><div>");for(var t=this.options,f=this.rawTranslation.length,c,s,i,u,w=this;(c=this.rawTranslation.lastIndexOf("<\/div>",f))>-1;)if(f=c-1,s=this.rawTranslation.substr(0,f+1),i=s.match(/<div[> ]/gi),u=s.match(/<\/div>/gi),i=i?i.length:0,u=u?u.length:0,i===u+1){var l=n(this.rawTranslation.substr(0,f+7)),a=l.length,h=this.i;if(h===a)break;l.slice(h,a).each(o(function(i,u){if(this.stopped)return r;var o=n(u).html(),f=t.trim?n.trim(o):o,e=h+i,s=this.source,c=!this.from&&this.detectedSourceLanguage||this.from;this.translation[e]=f;this.isString?this.translation=f:s=this.source[e];t.each.call(this,e,f,s,c,this.to,t);this.i++},this));break}if(this.rawSources.length-1==this._i&&this._complete(),e=o(this._translate,this),t.parallel){if(this._i<0)if(t.parallel){v=0;y=this.rawSources.length;function p(){e();v<y&&setTimeout(p,t.parallel)}p()}else n.each(this.rawSources,e)}else e()}},_translate:function(){this._i++;var t=this,i=this._i,r=this.rawSourceSub=this.rawSources[i];r&&(e!=null&&e.length<40?n.ajax({url:"https://www.googleapis.com/language/translate/v2",dataType:"jsonp",jsonp:"callback",crossDomain:!0,data:n.extend({key:e,target:this.to,q:r},this.from?{source:this.from}:{}),success:function(n){if(n.error)return t.options.error.call(t,n.error,t.rawSourceSub,t.from,t.to,t.options);var r=n.data.translations[0].translatedText;t.queue[i]=r||t.rawSourceSub;t.detectedSourceLanguage=n.data.translations[0].detectedSourceLanguage;t._check()}}):n.ajax({url:"http://api.microsofttranslator.com/V2/Ajax.svc/Translate",dataType:"jsonp",jsonp:"oncomplete",crossDomain:!0,data:{appId:e,from:t.from,to:t.to,contentType:"text/html",text:r},success:function(n){t.queue[i]=n||t.rawSourceSub;t._check()}}))},_check:function(){var n,t;if(!this.options.parallel){this.rawTranslation+=this.queue[this._i];this._process();return}if(n=0,jQuery.each(this.queue,function(t,i){if(i!=u)n=t;else return!1}),n>this.done||n===this.queue.length-1){for(t=0;t<=n;t++)this.rawTranslation+=this.queue[t];this._process()}this.done=n},_complete:function(){clearTimeout(this.timeout);this.options.complete.call(this,this.translation,this.source,!this.from&&this.detectedSourceLanguage||this.from,this.to,this.options)},stop:function(){return this.stopped?this:(this.stopped=t,this.options.error.call(this,{message:"stopped"}),this)}};n.translate=function(t,i){if(t==u)return new c;if(n.isFunction(t))return n.translate.ready(t,i);var f=new c,e=[].slice.call(arguments,0);return e.shift(),n.translate.ready(o(f._init,f,[t,tt(e,n.translate.defaults)]),r,f)};n.translate.fn=n.translate.prototype=c.prototype;n.translate.fn.extend=n.translate.extend=n.extend;n.translate.extend({_bind:o,_filter:p,_validate:nt,_getOpt:tt,_defaults:y,defaults:n.extend({},y),capitalize:function(n){return n.charAt(0).toUpperCase()+n.substr(1).toLowerCase()},truncate:function(n,t){for(var r,u,e,o,i,s=encodeURIComponent(n),f=0;f<10;f++){try{i=decodeURIComponent(s.substr(0,t-f))}catch(h){continue}if(i)break}return(alert(i),t2=(r=/<(?![^<]*>)/.exec(i))?i.substring(0,r.index):(u=/>\s*$/.exec(i))?i:(e=this._m3.exec(i))?(o=/>(?![^>]*<)/.exec(i))?e.index>o.index?i.substring(0,e.index+1):i.substring(0,o.index+1):i.substring(0,e.index+1):i,r=/</.exec(t2),u=/>/.exec(t2),u&&r&&u.index<r.index&&(t2=t2.substring(u.index+1)),t2=t2.replace(/(^\s+)|(\s+$)/g,""),t2==="")?t2:(t2=(r=/^<div>/.exec(t2))?t2:"<div>"+t2,t2=(r=/<div>$/.exec(t2))?t2.substring(0,r.index):t2,t2=(r=/<\/div>$/.exec(t2))?t2:t2+"<\/div>",alert(t2),t2)},getLanguages:function(t,r){var o,l,s;if(t==u||r==u&&!t)return i;var e={},c=typeof t,h=r?n.translate.getLanguages(t):i,f=c==="object"||c==="function"?t:r;if(f)if(f.call)e=p(h,f);else for(o=0,l=f.length;o<l;o++)s=n.translate.toLanguage(f[o]),h[s]!=u&&(e[s]=h[s]);else e=p(i,n.translate.isTranslatable);return e},toLanguage:function(t,r){var e=t.toUpperCase(),f=v[e]||(i[e]?e:u)||v[(n.translate.languageCodeMap[t.toLowerCase()]||"").toUpperCase()];return f==u?u:r==="lowercase"?f.toLowerCase():r==="capitalize"?n.translate.capitalize(f):f},toLanguageCode:function(t){return i[t]||i[n.translate.toLanguage(t)]||n.translate.languageCodeMap[t.toLowerCase()]},same:function(n,t){return n===t||s(n)===s(t)},isTranslatable:function(n){return!!s(n)},languageCodeMap:{pt:"pt-PT","pt-br":"pt-PT",he:"iw",zlm:"ms","zh-hans":"zh-CN","zh-hant":"zh-TW"},isRtl:{ar:t,iw:t,fa:t,ur:t,yi:t},getBranding:function(){return typeof console!="undefined"&&console.log("$.translate.getBranding() IS DEPRECATED! PLEASE REMOVE IT FROM YOUR CODE!"),n()},load:function(i){if(b=t,e=i,e!=null&&e.length<40){var r=[],u=[];n.each({data:{languages:[{language:"af",name:"Afrikaans"},{language:"sq",name:"Albanian"},{language:"ar",name:"Arabic"},{language:"be",name:"Belarusian"},{language:"bg",name:"Bulgarian"},{language:"ca",name:"Catalan"},{language:"zh",name:"Chinese (Simplified)"},{language:"zh-TW",name:"Chinese (Traditional)"},{language:"hr",name:"Croatian"},{language:"cs",name:"Czech"},{language:"da",name:"Danish"},{language:"nl",name:"Dutch"},{language:"en",name:"English"},{language:"et",name:"Estonian"},{language:"tl",name:"Filipino"},{language:"fi",name:"Finnish"},{language:"fr",name:"French"},{language:"gl",name:"Galician"},{language:"de",name:"German"},{language:"el",name:"Greek"},{language:"ht",name:"Haitian Creole"},{language:"iw",name:"Hebrew"},{language:"hi",name:"Hindi"},{language:"hu",name:"Hungarian"},{language:"is",name:"Icelandic"},{language:"id",name:"Indonesian"},{language:"ga",name:"Irish"},{language:"it",name:"Italian"},{language:"ja",name:"Japanese"},{language:"ko",name:"Korean"},{language:"lv",name:"Latvian"},{language:"lt",name:"Lithuanian"},{language:"mk",name:"Macedonian"},{language:"ms",name:"Malay"},{language:"mt",name:"Maltese"},{language:"no",name:"Norwegian"},{language:"fa",name:"Persian"},{language:"pl",name:"Polish"},{language:"pt",name:"Portuguese"},{language:"ro",name:"Romanian"},{language:"ru",name:"Russian"},{language:"sr",name:"Serbian"},{language:"sk",name:"Slovak"},{language:"sl",name:"Slovenian"},{language:"es",name:"Spanish"},{language:"sw",name:"Swahili"},{language:"sv",name:"Swedish"},{language:"th",name:"Thai"},{language:"tr",name:"Turkish"},{language:"uk",name:"Ukrainian"},{language:"vi",name:"Vietnamese"},{language:"cy",name:"Welsh"},{language:"yi",name:"Yiddish"}]}}.data.languages,function(n,t){r.push(t.language);u.push(t.name)});d(r,u)}else n.ajax({url:"http://api.microsofttranslator.com/V2/Ajax.svc/GetLanguagesForTranslate",dataType:"jsonp",jsonp:"oncomplete",crossDomain:!0,context:this,data:{appId:e},success:function(t){n.ajax({url:"http://api.microsofttranslator.com/V2/Ajax.svc/GetLanguageNames",dataType:"jsonp",jsonp:"oncomplete",crossDomain:!0,context:this,data:{appId:e,locale:"en",languageCodes:'["'+t.join('", "')+'"]'},success:function(n){d(t,n)}})}});return n.translate},ready:function(t,i,r){return n.translate.isReady?t():k.push(t),b||i||n.translate.load(),r||n.translate},isReady:r,overload:[[[],[]],[[f,f,a],["from","to","options"]],[[f,a],["to","options"]],[[a],["options"]],[[f,f],["from","to"]],[[f],["to"]],[[f,f,w],["from","to","complete"]],[[f,w],["to","complete"]]],stripScripts:o(l,t,[/<script[^>]*>([\s\S]*?)<\/script>/gi,""]),stripWhitespace:o(l,t,[/\s\s+/g," "]),stripComments:o(l,t,[/<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)>/g,""])})})(jQuery);
/*!-
 * jQuery.fn.nodesContainingText adapter for the jQuery Translate plugin 
 * Version: null
 * http://code.google.com/p/jquery-translate/
 */
(function(n){function o(n){while(n&&n.nodeType!=9)n=n.parentNode;return n}function f(n,t){var i=n.css("text-align");n.css("direction",t);i==="right"&&n.css("text-align","left");i==="left"&&n.css("text-align","right")}function r(i,r){var f=i.nodeName.toUpperCase(),e=f==="INPUT"&&n.attr(i,"type").toLowerCase();return r=r||{altAndVal:t,subject:t},typeof r.subject=="string"?r.subject:r.altAndVal&&(f==="IMG"||e==="image")?"alt":r.altAndVal&&u[e]?"$val":f==="TEXTAREA"?"$val":"$html"}var t=!0,u={text:t,button:t,submit:t},e={SCRIPT:t,NOSCRIPT:t,STYLE:t,OBJECT:t,IFRAME:t},i=n([]);i.length=1;n.translate.fn._toggle=function(){var i=this.options,r=i.to,u;this.elements.each(n.translate._bind(function(f,e){this.i=f;var s=n(e),o=n.translate.getData(s,r,i);if(!o)return!(u=t);this.translation.push(o);i.each.call(this,f,e,o,this.source[f],this.from,r,i)},this));u?this._process():this._complete()};n.translate.extend({_getType:r,each:function(t,r,u,f,e,o,s){i[0]=r;n.translate.setData(i,o,u,e,f,s);n.translate.replace(i,u,o,s);n.translate.setLangAttr(i,o,s)},getData:function(t,i,u){var e=t[0]||t,f=n.data(e,"translation");return f&&f[i]&&f[i][r(e,u)]},setData:function(t,i,u,f,e,o){if(!o||o.data){var h=t[0]||t,c=r(h,o),s=n.data(h,"translation");s=s||n.data(h,"translation",{});(s[f]=s[f]||{})[c]=e;(s[i]=s[i]||{})[c]=u}},replace:function(t,i,r,e){var y,l;if(!e||e.replace){if(e&&typeof e.subject=="string")return t.attr(e.subject,i);var s=t[0]||t,h=s.nodeName.toUpperCase(),a=h==="INPUT"&&n.attr(s,"type").toLowerCase(),c=n.translate.isRtl,v=n.data(s,"lang");(e.alwaysReplace||v!==r)&&(c[r]!==c[v||e&&e.from]&&(c[r]?f(t,"rtl"):t.css("direction")==="rtl"&&f(t,"ltr")),(!e||e.altAndVal)&&(h==="IMG"||a==="image")?t.attr("alt",i):h==="TEXTAREA"||(!e||e.altAndVal)&&u[a]?t.val(i):!e||e.rebind?(this.doc=this.doc||o(s),y=t.find("*").not("script"),l=n(this.doc.createElement("div")).html(i),n.translate.copyEvents(y,l.find("*")),t.html(l.contents())):t.html(i),n.data(s,"lang",r))}},setLangAttr:function(n,i,r){(!r||r.setLangAttr)&&n.attr(!r||r.setLangAttr===t?"lang":r.setLangAttr,i)},copyEvents:function(i,r){r.each(function(r,u){var s=i[r],f,o,h;if(!u||!s)return!1;if(e[s.nodeName.toUpperCase()]||(f=n.data(s,"events"),!f))return t;for(o in f)for(h in f[o])n.event.add(u,o,f[o][h],f[o][h].data)})}});n.fn.translate=function(){var t=n.translate._getOpt(arguments,n.fn.translate.defaults),r=n.extend({},n.translate._defaults,n.fn.translate.defaults,t,{complete:function(r,u){n.translate(function(){function f(n){return function(){[].unshift.call(arguments,this.elements);n.apply(this,arguments)}}var o=n.translate.toLanguageCode(t.from),e;t.fromOriginal&&r.each(function(r,f){i[0]=f;var e=n.translate.getData(i,o,t);if(!e)return!0;u[r]=e});e=t.each;t.nodes=r;t.start=f(t.start);t.onTimeout=f(t.onTimeout);t.complete=f(t.complete);t.each=function(n){var t=arguments;arguments.length!==7&&[].splice.call(t,1,0,this.elements[n]);this.each.apply(this,t);e.apply(this,t)};n.translate(u,t)})},each:function(){}});return this.nodesContainingText?this.nodesContainingText(r):(t.nodes=this,n.translate(n.map(this,function(t){return n(t).html()||n(t).val()}),t),this)};n.fn.translate.defaults=n.extend({},n.translate._defaults)})(jQuery);
/*!-
 * TextNode Translator for the jQuery Translate plugin 
 * Version: 1.4.7
 * http://code.google.com/p/jquery-translate/
 */
(function(n){function r(t,i){function e(n,t){for(var u=0,s=t.childNodes,h=s.length,i;u<h;u++)i=s[u],i.nodeType==3&&/\S/.test(i.nodeValue)?r.push(i):i.nodeType!=1||o[i.nodeName.toUpperCase()]||f&&!f(i)||e(null,i)}var r=[],o={SCRIPT:1,NOSCRIPT:1,STYLE:1,IFRAME:1},u=typeof i,f=u==="string"?function(t){return!n(t).is(i)}:u==="function"?i:null;return n.each(t.length&&!t.nodeName?t:[t],e),r}function t(n,t){var i=n.css("text-align");n.css("direction",t);i==="right"&&n.css("text-align","left");i==="left"&&n.css("text-align","right")}function u(t,i,r){(!r||r.setLangAttr)&&n(t).attr(!r||r.setLangAttr===!0?"lang":r.setLangAttr,i)}function f(i,r,u,f,e){var o,c,s,h;if(e.replace)return(o=n.translate.isRtl,c=n.data(i,"lang"),o[f]!==o[c||e&&e.from]&&(s=n(i),o[f]?t(s,"rtl"):s.css("direction")==="rtl"&&t(s,"ltr")),n.data(i,"lang",f),u!=r.nodeValue)?(h=document.createTextNode(u),i.replaceChild(h,r),h):r}function e(t,i,r,u){if(i.data){var f="translation";n.data(t,f)||n.data(t,f,{});n.data(t,f)[i.from]||(n.data(t,f)[i.from]=[]);[].push.call(n.data(t,f)[i.from],r);n.data(t,f)[i.to]||(n.data(t,f)[i.to]=[]);[].push.call(n.data(t,f)[i.to],u)}}function i(t,i,r){r._childIndex=r._prevParent===t?r._childIndex+1:0;var u=n.data(t,"translation");return r._prevParent=t,u&&u[i]&&u[i][r._childIndex]}function o(n,t,i,r,o,s,h){var c,l;return i=i.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'"),c=t.parentNode,e(c,h,r,i),l=f(c,t,i,s,h),u(c,h.to,h),l}n.translateTextNodes=function(t){var u=[].slice.call(arguments,0);u.shift();n.translate(function(){function s(n){return function(){[].unshift.call(arguments,this.elements);n.apply(this,arguments)}}var f=n.translate._getOpt(u,n.translateTextNodes.defaults),c=f.each,e=r(t,f.not),h=n.map(e,function(n){return n.nodeValue}),l=n.translate.toLanguageCode(f.from),a={};f.nodes=e;f.textNodes=!0;f.trim=!1;f.fromOriginal&&n.each(e,function(n,t){var r=i(t.parentNode,l,a);if(!r)return!0;h[n]=r});f.start=s(f.start);f.onTimeout=s(f.onTimeout);f.complete=s(f.complete);f.each=function(n){var t=arguments;arguments.length!==7&&[].splice.call(t,1,0,this.elements[n]);this.elements[n]=t[1]=o.apply(this,t);c.apply(this,t)};n.translate(h,f)})};n.translate.fn._toggleTextNodes=function(){var t=this.options,r=t.to,u;n.each(this.elements,n.translate._bind(function(n,f){this.i=n;var o=f.parentNode,e=i(o,r,this);if(!e)return!(u=!0);this.translation.push(e);t.each.call(this,n,f,e,this.source[n],this.from,r,t)},this));u?this._process():this._complete()};n.fn.translateTextNodes=function(){return[].unshift.call(arguments,this),n.translateTextNodes.apply(null,arguments),this};n.translateTextNodes.defaults=n.fn.translateTextNodes.defaults=n.extend({},n.translate._defaults)})(jQuery);
/*!-
 * Simple user interface extension for the jQuery Translate plugin 
 * Version: null
 * http://code.google.com/p/jquery-translate/
 */
(function(n){var t={tags:["select","option"],filter:n.translate.isTranslatable,label:n.translate.toNativeLanguage||function(t,i){return n.translate.capitalize(i)},includeUnknown:!1};n.translate.ui=function(){var i={},u="",f="",e="",r;return typeof arguments[0]=="string"?i.tags=n.makeArray(arguments):i=arguments[0],i=n.extend({},t,n.translate.ui.defaults,i),i.tags[2]&&(f="<"+i.tags[2]+">",e="<\/"+i.tags[2]+">"),r=n.translate.getLanguages(i.filter),i.includeUnknown||delete r.UNKNOWN,n.each(r,function(n,t){u+="<"+i.tags[1]+" value="+t+">"+f+i.label(t,n)+e+"<\/"+i.tags[1]+">"}),n("<"+i.tags[0]+' class="jq-translate-ui">'+u+"<\/"+i.tags[0]+">")};n.translate.ui.defaults=n.extend({},t)})(jQuery);
/*!-
 * Progress indicator extension for the jQuery Translate plugin 
 * Version: null
 * http://code.google.com/p/jquery-translate/
 */
jQuery.translate.fn.progress=function(n,t){var r,i;return this.i||(this._pr=0),this._pr+=this.source[this.i].length,r=100*this._pr/(this.rawSource.length-11*(this.i+1)),n&&(i=jQuery(n),this.i||i.hasClass("ui-progressbar")||i.progressbar(t),i.progressbar("option","value",r)),r};
/*!-
 * Native language names extension for the jQuery Translate plugin 
 * Version: 1.4.7
 * http://code.google.com/p/jquery-translate/
 */
(function(n){n.translate.extend({toNativeLanguage:function(t){return n.translate.nativeLanguages[t]||n.translate.nativeLanguages[n.translate.toLanguageCode(t)]},nativeLanguages:{af:"Afrikaans",be:"Беларуская",is:"Íslenska",ga:"Gaeilge",mk:"Македонски",ms:"Bahasa Melayu",sw:"Kiswahili",cy:"Cymraeg",yi:"ייִדיש",sq:"Shqipe",ar:"العربية",bg:"Български",ca:"Català",zh:"中文","zh-CN":"简体中文","zh-TW":"繁體中文",hr:"Hrvatski",cs:"Čeština",da:"Dansk",nl:"Nederlands",en:"English",et:"Eesti",tl:"Tagalog",fi:"Suomi",fr:"Français",gl:"Galego",de:"Deutsch",el:"Ελληνικά",iw:"עברית",hi:"हिन्दी",hu:"Magyar",id:"Bahasa Indonesia",it:"Italiano",ja:"日本語",ko:"한국어",lv:"Latviešu",lt:"Lietuvių",mt:"Malti",no:"Norsk",fa:"فارسی",pl:"Polski","pt-PT":"Português",ro:"Român",ru:"Русский",sr:"Српски",sk:"Slovenský",sl:"Slovenski",es:"Español",sv:"Svenska",th:"ไทย",tr:"Türkçe",uk:"Українська",vi:"Tiếng Việt"}})})(jQuery);
/*!-
 * Paralell extension for the jQuery Translate plugin 
 * Version: 1.4.7
 * http://code.google.com/p/jquery-translate/
 */
(function(n){n.translate.extend({defer:function(){return n.translate._bind(n.translate,null,arguments)},run:function(t,i){var r=t.length;n.each(t,function(){var n=this(),t=n.options.complete;n.options.complete=function(){t.apply(this,arguments);--r||i()}})}})})(jQuery);