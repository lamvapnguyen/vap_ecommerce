/*!
 * jQuery UI @VERSION
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(n,t){function i(t){return!n(t).parents().andSelf().filter(function(){return n.curCSS(this,"visibility")==="hidden"||n.expr.filters.hidden(this)}).length}(n.ui=n.ui||{},n.ui.version)||(n.extend(n.ui,{version:"@VERSION",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),n.fn.extend({_focus:n.fn.focus,focus:function(t,i){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){n(r).focus();i&&i.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return t=n.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(n.curCSS(this,"position",1))&&/(auto|scroll)/.test(n.curCSS(this,"overflow",1)+n.curCSS(this,"overflow-y",1)+n.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(n.curCSS(this,"overflow",1)+n.curCSS(this,"overflow-y",1)+n.curCSS(this,"overflow-x",1))}).eq(0),/fixed/.test(this.css("position"))||!t.length?n(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var r=n(this[0]),u,f;r.length&&r[0]!==document;){if(u=r.css("position"),(u==="absolute"||u==="relative"||u==="fixed")&&(f=parseInt(r.css("zIndex"),10),!isNaN(f)&&f!==0))return f;r=r.parent()}return 0},disableSelection:function(){return this.bind((n.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(n){n.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),n.each(["Width","Height"],function(i,r){function e(t,i,r,u){return n.each(o,function(){i-=parseFloat(n.curCSS(t,"padding"+this,!0))||0;r&&(i-=parseFloat(n.curCSS(t,"border"+this+"Width",!0))||0);u&&(i-=parseFloat(n.curCSS(t,"margin"+this,!0))||0)}),i}var o=r==="Width"?["Left","Right"]:["Top","Bottom"],u=r.toLowerCase(),f={innerWidth:n.fn.innerWidth,innerHeight:n.fn.innerHeight,outerWidth:n.fn.outerWidth,outerHeight:n.fn.outerHeight};n.fn["inner"+r]=function(i){return i===t?f["inner"+r].call(this):this.each(function(){n(this).css(u,e(this,i)+"px")})};n.fn["outer"+r]=function(t,i){return typeof t!="number"?f["outer"+r].call(this,t):this.each(function(){n(this).css(u,e(this,t,!0,i)+"px")})}}),n.extend(n.expr[":"],{data:function(t,i,r){return!!n.data(t,r[3])},focusable:function(t){var r=t.nodeName.toLowerCase(),o=n.attr(t,"tabindex"),u,f,e;return"area"===r?(u=t.parentNode,f=u.name,!t.href||!f||u.nodeName.toLowerCase()!=="map")?!1:(e=n("img[usemap=#"+f+"]")[0],!!e&&i(e)):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"==r?t.href||!isNaN(o):!isNaN(o))&&i(t)},tabbable:function(t){var i=n.attr(t,"tabindex");return(isNaN(i)||i>=0)&&n(t).is(":focusable")}}),n(function(){var i=document.body,t=i.appendChild(t=document.createElement("div"));n.extend(t.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});n.support.minHeight=t.offsetHeight===100;n.support.selectstart="onselectstart"in t;i.removeChild(t).style.display="none"}),n.extend(n.ui,{plugin:{add:function(t,i,r){var f=n.ui[t].prototype;for(var u in r)f.plugins[u]=f.plugins[u]||[],f.plugins[u].push([i,r[u]])},call:function(n,t,i){var u=n.plugins[t],r;if(u&&n.element[0].parentNode)for(r=0;r<u.length;r++)n.options[u[r][0]]&&u[r][1].apply(n.element,i)}},contains:function(n,t){return document.compareDocumentPosition?n.compareDocumentPosition(t)&16:n!==t&&n.contains(t)},hasScroll:function(t,i){if(n(t).css("overflow")==="hidden")return!1;var r=i&&i==="left"?"scrollLeft":"scrollTop",u=!1;return t[r]>0?!0:(t[r]=1,u=t[r]>0,t[r]=0,u)},isOverAxis:function(n,t,i){return n>t&&n<t+i},isOver:function(t,i,r,u,f,e){return n.ui.isOverAxis(t,r,f)&&n.ui.isOverAxis(i,u,e)}}))})(jQuery);