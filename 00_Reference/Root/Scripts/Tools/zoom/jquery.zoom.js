(function(n){var t={url:!1,icon:!0,grab:!1,callback:!1,duration:120};n.fn.zoom=function(i){return this.each(function(){var h=this,f=n(h),r=new Image,e=n(r),c,s=f.css("position"),u=n.extend({},t,i||{}),o="mousemove";(f.css({position:/(absolute|fixed)/.test(s)?s:"relative",overflow:"hidden"}),u.url||(u.url=f.find("img:first")[0].src,u.url))&&(u.icon&&(c=n('<div class="zoomIcon">').appendTo(f)),r.onload=function(){function v(){h=f.outerWidth();c=f.outerHeight();l=(r.width-h)/h;a=(r.height-c)/c}function y(n){t=n.pageX-s.left;i=n.pageY-s.top;t>h?t=h:t<0&&(t=0);i>c?i=c:i<0&&(i=0);r.style.left=t*-l+"px";r.style.top=i*-a+"px";n.preventDefault()}var h,c,l,a,t,i,s=f.offset();v();e.addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:r.width,height:r.height,border:"none"}).appendTo(f);u.grab?e.mousedown(function(t){s=f.offset();n(document).one("mouseup",function(){e.stop().fadeTo(u.duration,0);n(document).unbind(o,y)});v();y(t);e.stop().fadeTo(n.support.opacity?u.duration:0,1);n(document)[o](y);t.preventDefault()}):e.hover(function(){s=f.offset();v();e.stop().fadeTo(n.support.opacity?u.duration:0,1)},function(){e.stop().fadeTo(u.duration,0)})[o](function(n){r.style.left=(n.pageX-s.left)*-l+"px";r.style.top=(n.pageY-s.top)*-a+"px"});n.isFunction(u.callback)&&u.callback.call(r)},r.src=u.url)})};n.fn.zoom.defaults=t})(jQuery);