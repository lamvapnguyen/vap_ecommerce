/*!
 * jQuery Cycle Lite Plugin
 * http://malsup.com/jquery/cycle/lite/
 * Copyright (c) 2008-2012 M. Alsup
 * Version: 1.6 (02-MAY-2012)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.3.2 or later
 */
(function(n){function t(i,r,u,f){function l(n){n.timeout&&(o.cycleTimeout=setTimeout(function(){t(i,n,0,!n.rev)},n.timeout))}var c,h;if(!r.busy){var o=i[0].parentNode,s=i[r.currSlide],e=i[r.nextSlide];(o.cycleTimeout!==0||u)&&(u||!o.cyclePause?(r.before.length&&n.each(r.before,function(n,t){t.apply(e,[s,e,r,f])}),c=function(){__browser.msie&&this.style.removeAttribute("filter");n.each(r.after,function(n,t){t.apply(e,[s,e,r,f])});l(r)},r.nextSlide!=r.currSlide&&(r.busy=1,n.fn.cycle.custom(s,e,r,c)),h=r.nextSlide+1==i.length,r.nextSlide=h?0:r.nextSlide+1,r.currSlide=h?i.length-1:r.nextSlide-1):l(r))}}function i(n,i,r){var u=n[0].parentNode,f=u.cycleTimeout;return f&&(clearTimeout(f),u.cycleTimeout=0),i.nextSlide=i.currSlide+r,i.nextSlide<0?i.nextSlide=n.length-1:i.nextSlide>=n.length&&(i.nextSlide=0),t(n,i,1,r>=0),!1}var r="Lite-1.6";n.fn.cycle=function(r){return this.each(function(){var u,l,c,h,a,s;r=r||{};this.cycleTimeout&&clearTimeout(this.cycleTimeout);this.cycleTimeout=0;this.cyclePause=0;var f=n(this),o=r.slideExpr?n(r.slideExpr,this):f.children(),e=o.get();if(e.length<2){window.console&&console.log("terminating; too few slides: "+e.length);return}if(u=n.extend({},n.fn.cycle.defaults,r||{},n.metadata?f.metadata():n.meta?f.data():{}),l=n.isFunction(f.data)?f.data(u.metaAttr):null,l&&(u=n.extend(u,l)),u.before=u.before?[u.before]:[],u.after=u.after?[u.after]:[],u.after.unshift(function(){u.busy=0}),c=this.className,u.width=parseInt((c.match(/w:(\d+)/)||[])[1],10)||u.width,u.height=parseInt((c.match(/h:(\d+)/)||[])[1],10)||u.height,u.timeout=parseInt((c.match(/t:(\d+)/)||[])[1],10)||u.timeout,f.css("position")=="static"&&f.css("position","relative"),u.width&&f.width(u.width),u.height&&u.height!="auto"&&f.height(u.height),h=0,o.css({position:"absolute",top:0}).each(function(t){n(this).css("z-index",e.length-t)}),n(e[h]).css("opacity",1).show(),__browser.msie&&e[h].style.removeAttribute("filter"),u.fit&&u.width&&o.width(u.width),u.fit&&u.height&&u.height!="auto"&&o.height(u.height),u.pause&&f.hover(function(){this.cyclePause=1},function(){this.cyclePause=0}),a=n.fn.cycle.transitions[u.fx],a&&a(f,o,u),o.each(function(){var t=n(this);this.cycleH=u.fit&&u.height?u.height:t.height();this.cycleW=u.fit&&u.width?u.width:t.width()}),u.cssFirst&&n(o[h]).css(u.cssFirst),u.timeout)for(u.speed.constructor==String&&(u.speed={slow:600,fast:200}[u.speed]||400),u.sync||(u.speed=u.speed/2);u.timeout-u.speed<250;)u.timeout+=u.speed;u.speedIn=u.speed;u.speedOut=u.speed;u.slideCount=e.length;u.currSlide=h;u.nextSlide=1;s=o[h];u.before.length&&u.before[0].apply(s,[s,s,u,!0]);u.after.length>1&&u.after[1].apply(s,[s,s,u,!0]);u.click&&!u.next&&(u.next=u.click);u.next&&n(u.next).unbind("click.cycle").bind("click.cycle",function(){return i(e,u,u.rev?-1:1)});u.prev&&n(u.prev).unbind("click.cycle").bind("click.cycle",function(){return i(e,u,u.rev?1:-1)});u.timeout&&(this.cycleTimeout=setTimeout(function(){t(e,u,0,!u.rev)},u.timeout+(u.delay||0)))})};n.fn.cycle.custom=function(t,i,r,u){var e=n(t),o=n(i),f;o.css(r.cssBefore);f=function(){o.animate(r.animIn,r.speedIn,r.easeIn,u)};e.animate(r.animOut,r.speedOut,r.easeOut,function(){e.css(r.cssAfter);r.sync||f()});r.sync&&f()};n.fn.cycle.transitions={fade:function(n,t,i){t.not(":eq(0)").hide();i.cssBefore={opacity:0,display:"block"};i.cssAfter={display:"none"};i.animOut={opacity:0};i.animIn={opacity:1}},fadeout:function(t,i,r){r.before.push(function(t,i,r,u){n(t).css("zIndex",r.slideCount+(u===!0?1:0));n(i).css("zIndex",r.slideCount+(u===!0?0:1))});i.not(":eq(0)").hide();r.cssBefore={opacity:1,display:"block",zIndex:1};r.cssAfter={display:"none",zIndex:0};r.animOut={opacity:0};r.animIn={opacity:1}}};n.fn.cycle.ver=function(){return r};n.fn.cycle.defaults={animIn:{},animOut:{},fx:"fade",after:null,before:null,cssBefore:{},cssAfter:{},delay:0,fit:0,height:"auto",metaAttr:"cycle",next:null,pause:!1,prev:null,speed:1e3,slideExpr:null,sync:!0,timeout:4e3}})(jQuery);