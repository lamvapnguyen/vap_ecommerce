(function(n){n.fn.iframeAutoHeight=function(t){function r(n){i.debug&&i.debug===!0&&window.console&&console.log(n)}function f(t,i){r("Diagnostics from '"+i+"'");try{r("  "+n(t,window.top.document).contents().find("body")[0].scrollHeight+" for ...find('body')[0].scrollHeight");r("  "+n(t.contentWindow.document).height()+" for ...contentWindow.document).height()");r("  "+n(t.contentWindow.document.body).height()+" for ...contentWindow.document.body).height()")}catch(u){r("  unable to check in this state")}r("End diagnostics -> results vary by browser and when diagnostics are requested")}var e,u,i;return n.browser===e?(u=[],u.push("WARNING: you appear to be using a newer version of jquery which does not support the $.browser variable."),u.push("The jQuery iframe auto height plugin relies heavly on the $.browser features."),u.push("Install jquery-browser: https://raw.github.com/house9/jquery-iframe-auto-height/master/release/jquery.browser.js"),alert(u.join("\n")),n):(i=n.extend({heightOffset:0,minHeight:0,callback:function(){},animate:!1,debug:!1,diagnostics:!1,resetToMinHeight:!1,triggerFunctions:[],heightCalculationOverrides:[]},t),r(i),this.each(function(){function c(n){var i=null;return jQuery.each(s,function(r,u){if(n[u])return i=t[u],!1}),i===null&&(i=t["default"]),i}function o(t){i.diagnostics&&f(t,"resizeHeight");i.resetToMinHeight&&i.resetToMinHeight===!0&&(t.style.height=i.minHeight+"px");var e=n(t,window.top.document).contents().find("body"),o=c(n.browser),u=o(t,e,i,n.browser);r(u);u<i.minHeight&&(r("new height is less than minHeight"),u=i.minHeight+i.heightOffset);r("New Height: "+u);i.animate?n(t).animate({height:u+"px"},{duration:500}):t.style.height=u+"px";i.callback.apply(n(t),[{newFrameHeight:u}])}var s=["webkit","mozilla","msie","opera"],t=[],e,u,h;if(t["default"]=function(n,t,i){return t[0].scrollHeight+i.heightOffset},jQuery.each(s,function(n,i){t[i]=t["default"]}),jQuery.each(i.heightCalculationOverrides,function(n,i){t[i.browser]=i.calculation}),e=0,r(this),i.diagnostics&&f(this,"each iframe"),i.triggerFunctions.length>0)for(r(i.triggerFunctions.length+" trigger Functions"),u=0;u<i.triggerFunctions.length;u++)i.triggerFunctions[u](o,this);n.browser.webkit||n.browser.opera?(r("browser is webkit or opera"),n(this).load(function(){var n=0,t=this,u=function(){o(t)};e===0?n=500:t.style.height=i.minHeight+"px";r("load delay: "+n);setTimeout(u,n);e++}),h=n(this).attr("src"),n(this).attr("src",""),n(this).attr("src",h)):n(this).load(function(){o(this)})}))}})(jQuery);