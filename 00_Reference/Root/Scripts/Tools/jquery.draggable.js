jQuery.fn.extend({drag:function(){var n=jQuery;return this.each(function(){var n=!1,t,i,r=this;bgimg=$("#"+this.id+" img");imgx=bgimg.width();imgy=bgimg.height();$(this).css("background","url('"+bgimg.attr("src")+"') no-repeat center center");bgimg.css("display","none");$(this).mousedown(function(r){$(this).css("cursor","move");n=!0;t=Math.round(r.pageX-$(this).eq(0).offset().left);i=Math.round(r.pageY-$(this).eq(0).offset().top)});$(this).mouseup(function(){$(this).css("cursor","default");n=!1});$(this).mousemove(function(u){if(n){bg=$(this).css("background-position");bg.indexOf("%")>1?(leftpos=$(this).width()/2-imgx/2,toppos=$(this).height()/2-imgy/2):(bg=bg.replace("px","").replace("px","").split(" "),leftpos=parseInt(bg[0]),toppos=parseInt(bg[1]));var f=Math.round(u.pageX-$(this).eq(0).offset().left)-t,e=Math.round(u.pageY-$(this).eq(0).offset().top)-i,o=leftpos+f,s=toppos+e;t=Math.round(u.pageX-$(this).eq(0).offset().left);i=Math.round(u.pageY-$(this).eq(0).offset().top);$(r).css("background-position",o+"px "+s+"px")}})})}});