(function(n){n.fn.marquee=function(t){return this.each(function(){var i=n.extend({},n.fn.marquee.defaults,t),r=n(this),u,s,a,v,e,h=3,g="animation-play-state",f=!1,ft=function(n,t,i){for(var u=["webkit","moz","MS","o",""],r=0;r<u.length;r++)u[r]||(t=t.toLowerCase()),n.addEventListener(u[r]+t,i,!1)},ht=function(n){var t=[];for(var i in n)n.hasOwnProperty(i)&&t.push(i+":"+n[i]);return t.push(),"{"+t.join(",")+"}"},et=function(){r.timer=setTimeout(d,i.delayBeforeStart)},y={pause:function(){f&&i.allowCss3Support?u.css(g,"paused"):n.fn.pause&&u.pause();r.data("runningStatus","paused");r.trigger("paused")},resume:function(){f&&i.allowCss3Support?u.css(g,"running"):n.fn.resume&&u.resume();r.data("runningStatus","resumed");r.trigger("resumed")},toggle:function(){y[r.data("runningStatus")=="resumed"?"pause":"resume"]()},destroy:function(){clearTimeout(r.timer);r.find("*").andSelf().unbind();r.html(r.find(".js-marquee:first").html())}},ct,p,ot,o,c,k,nt,rt,ut,d;if(typeof t=="string"){n.isFunction(y[t])&&(u||(u=r.find(".js-marquee-wrapper")),r.data("css3AnimationIsSupported")===!0&&(f=!0),y[t]());return}if(ct={},n.each(i,function(n){if(p=r.attr("data-"+n),typeof p!="undefined"){switch(p){case"true":p=!0;break;case"false":p=!1}i[n]=p}}),i.duration=i.speed||i.duration,v=i.direction=="up"||i.direction=="down",i.gap=i.duplicated?parseInt(i.gap):0,r.wrapInner('<div class="js-marquee"><\/div>'),ot=r.find(".js-marquee").css({"margin-right":i.gap,float:"left"}),i.duplicated&&ot.clone(!0).appendTo(r),r.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"><\/div>'),u=r.find(".js-marquee-wrapper"),v?(o=r.height(),u.removeAttr("style"),r.height(o),r.find(".js-marquee").css({float:"none","margin-bottom":i.gap,"margin-right":0}),i.duplicated&&r.find(".js-marquee:last").css({"margin-bottom":0}),c=r.find(".js-marquee:first").height()+i.gap,i.duration=(parseInt(c,10)+parseInt(o,10))/parseInt(o,10)*i.duration):(e=r.find(".js-marquee:first").width()+i.gap,s=r.width(),i.duration=(parseInt(e,10)+parseInt(s,10))/parseInt(s,10)*i.duration),i.duplicated&&(i.duration=i.duration/2),i.allowCss3Support){var st=document.body||document.createElement("div"),l="marqueeAnimation-"+Math.floor(Math.random()*1e7),tt="Webkit Moz O ms Khtml".split(" "),it="animation",w="",b="";if(st.style.animation&&(b="@keyframes "+l+" ",f=!0),f===!1)for(k=0;k<tt.length;k++)if(st.style[tt[k]+"AnimationName"]!==undefined){nt="-"+tt[k].toLowerCase()+"-";it=nt+it;g=nt+g;b="@"+nt+"keyframes "+l+" ";f=!0;break}f&&(w=l+" "+i.duration/1e3+"s "+i.delayBeforeStart/1e3+"s infinite "+i.css3easing,r.data("css3AnimationIsSupported",!0))}rt=function(){u.css("margin-top",i.direction=="up"?o+"px":"-"+c+"px")};ut=function(){u.css("margin-left",i.direction=="left"?s+"px":"-"+e+"px")};i.duplicated?(v?u.css("margin-top",i.direction=="up"?o+"px":"-"+(c*2-i.gap)+"px"):u.css("margin-left",i.direction=="left"?s+"px":"-"+(e*2-i.gap)+"px"),h=1):v?rt():ut();d=function(){if(i.duplicated&&(h===1?(i._originalDuration=i.duration,i.duration=v?i.direction=="up"?i.duration+o/(c/i.duration):i.duration*2:i.direction=="left"?i.duration+s/(e/i.duration):i.duration*2,w&&(w=l+" "+i.duration/1e3+"s "+i.delayBeforeStart/1e3+"s "+i.css3easing),h++):h===2&&(i.duration=i._originalDuration,w&&(l=l+"0",b=n.trim(b)+"0 ",w=l+" "+i.duration/1e3+"s 0s infinite "+i.css3easing),h++)),v?i.duplicated?(h>2&&u.css("margin-top",i.direction=="up"?0:"-"+c+"px"),a={"margin-top":i.direction=="up"?"-"+c+"px":0}):(rt(),a={"margin-top":i.direction=="up"?"-"+u.height()+"px":o+"px"}):i.duplicated?(h>2&&u.css("margin-left",i.direction=="left"?0:"-"+e+"px"),a={"margin-left":i.direction=="left"?"-"+e+"px":0}):(ut(),a={"margin-left":i.direction=="left"?"-"+e+"px":s+"px"}),r.trigger("beforeStarting"),f){u.css(it,w);var t=b+" { 100%  "+ht(a)+"}",y=n("style");y.length!==0?y.filter(":last").append(t):n("head").append("<style>"+t+"<\/style>");ft(u[0],"AnimationIteration",function(){r.trigger("finished")});ft(u[0],"AnimationEnd",function(){d();r.trigger("finished")})}else u.animate(a,i.duration,i.easing,function(){r.trigger("finished");i.pauseOnCycle?et():d()});r.data("runningStatus","resumed")};r.bind("pause",y.pause);r.bind("resume",y.resume);i.pauseOnHover&&r.bind("mouseenter mouseleave",y.toggle);f&&i.allowCss3Support?d():et()})};n.fn.marquee.defaults={allowCss3Support:!0,css3easing:"linear",easing:"linear",delayBeforeStart:1e3,direction:"left",duplicated:!1,duration:5e3,gap:20,pauseOnCycle:!1,pauseOnHover:!1}})(jQuery);