(function(n){var t=function(t,i){var r=n.extend({},n.fn.nivoSlider.defaults,i),f={currentSlide:0,currentImage:"",totalSlides:0,randAnim:"",running:!1,paused:!1,stop:!1},u=n(t),e,v,o,a,s,l;if(u.data("nivo:vars",f),u.css("position","relative"),u.addClass("nivoSlider"),e=u.children(),e.each(function(){var t=n(this),e="",r,i;t.is("img")||(t.is("a")&&(t.addClass("nivo-imageLink"),e=t),t=t.find("img:first"));r=t.width();r==0&&(r=t.attr("width"));i=t.height();i%2!=0&&(i=i-1);i==0&&(i=t.attr("height"));r>u.width()&&u.width(r);i==0?n(t).load(function(){u.height(n(this).height())}):u.height(i);e!=""&&e.css("display","none");t.css("display","none");f.totalSlides++}),r.startSlide>0&&(r.startSlide>=f.totalSlides&&(r.startSlide=f.totalSlides-1),f.currentSlide=r.startSlide),f.currentImage=n(e[f.currentSlide]).is("img")?n(e[f.currentSlide]):n(e[f.currentSlide]).find("img:first"),n(e[f.currentSlide]).is("a")&&n(e[f.currentSlide]).css("display","block"),u.css("background",'url("'+f.currentImage.attr("s")+'") no-repeat'),u.append(n('<div class="nivo-caption"><p><\/p><\/div>').css({display:"none",opacity:r.captionOpacity})),v=function(t){var r=n(".nivo-caption",u),i;f.currentImage.attr("tid")!=""&&f.currentImage.attr("tid")!=undefined?(i=f.currentImage.attr("tid"),i.substr(0,1)=="#"&&(i=n(i).html()),r.css("display")=="block"?r.find("p").fadeOut(t.animSpeed,function(){n(this).html(i);n(this).fadeIn(t.animSpeed)}):r.find("p").html(i),r.fadeIn(t.animSpeed)):r.fadeOut(t.animSpeed)},v(r),o=0,!r.manualAdvance&&e.length>1&&(o=setInterval(function(){h(u,e,r,!1)},r.pauseTime)),r.directionNav&&(u.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+r.prevText+'<\/a><a class="nivo-nextNav">'+r.nextText+"<\/a><\/div>"),r.directionNavHide&&(n(".nivo-directionNav",u).hide(),u.hover(function(){n(".nivo-directionNav",u).show()},function(){n(".nivo-directionNav",u).hide()})),n("a.nivo-prevNav",u).live("click",function(){if(f.running)return!1;clearInterval(o);o="";f.currentSlide-=2;h(u,e,r,"prev")}),n("a.nivo-nextNav",u).live("click",function(){if(f.running)return!1;clearInterval(o);o="";h(u,e,r,"next")})),r.controlNav){for(a=n('<div class="nivo-controlNav"><\/div>'),u.append(a),s=0;s<e.length;s++)r.controlNavThumbs?(l=e.eq(s),l.is("img")||(l=l.find("img:first")),r.controlNavThumbsFromRel?a.append('<a class="nivo-control" rel="'+s+'"><img src="'+l.attr("rel")+'" alt="" /><\/a>'):a.append('<a class="nivo-control" rel="'+s+'"><img src="'+l.attr("s").replace(r.controlNavThumbsSearch,r.controlNavThumbsReplace)+'" alt="" /><\/a>')):a.append('<a class="nivo-control" rel="'+s+'">'+(s+1)+"<\/a>");n(".nivo-controlNav a:eq("+f.currentSlide+")",u).addClass("active");n(".nivo-controlNav a",u).live("click",function(){if(f.running||n(this).hasClass("active"))return!1;clearInterval(o);o="";u.css("background",'url("'+f.currentImage.attr("s")+'") no-repeat');f.currentSlide=n(this).attr("rel")-1;h(u,e,r,"control")})}r.keyboardNav&&n(window).keypress(function(n){if(n.keyCode=="37"){if(f.running)return!1;clearInterval(o);o="";f.currentSlide-=2;h(u,e,r,"prev")}if(n.keyCode=="39"){if(f.running)return!1;clearInterval(o);o="";h(u,e,r,"next")}});r.pauseOnHover&&u.hover(function(){f.paused=!0;clearInterval(o);o=""},function(){f.paused=!1;o!=""||r.manualAdvance||(o=setInterval(function(){h(u,e,r,!1)},r.pauseTime))});u.bind("nivo:animFinished",function(){f.running=!1;n(e).each(function(){n(this).is("a")&&n(this).css("display","none")});n(e[f.currentSlide]).is("a")&&n(e[f.currentSlide]).css("display","block");o!=""||f.paused||r.manualAdvance||(o=setInterval(function(){h(u,e,r,!1)},r.pauseTime));r.afterChange.call(this)});var c=function(t,i,r){for(var u,f=0;f<i.slices;f++)u=Math.round(t.width()/i.slices),f==i.slices-1?t.append(n('<div class="nivo-slice"><\/div>').css({left:u*f+"px",width:t.width()-u*f+"px",height:"0px",opacity:"0",background:'url("'+r.currentImage.attr("s")+'") no-repeat -'+(u+f*u-u)+"px 0%"})):t.append(n('<div class="nivo-slice"><\/div>').css({left:u*f+"px",width:u+"px",height:"0px",opacity:"0",background:'url("'+r.currentImage.attr("s")+'") no-repeat -'+(u+f*u-u)+"px 0%"}))},y=function(t,i,r){for(var e,u=Math.round(t.width()/i.boxCols),f=Math.round(t.height()/i.boxRows),o=0;o<i.boxRows;o++)for(e=0;e<i.boxCols;e++)e==i.boxCols-1?t.append(n('<div class="nivo-box"><\/div>').css({opacity:0,left:u*e+"px",top:f*o+"px",width:t.width()-u*e+"px",height:f+"px",background:'url("'+r.currentImage.attr("s")+'") no-repeat -'+(u+e*u-u)+"px -"+(f+o*f-f)+"px"})):t.append(n('<div class="nivo-box"><\/div>').css({opacity:0,left:u*e+"px",top:f*o+"px",width:u+"px",height:f+"px",background:'url("'+r.currentImage.attr("s")+'") no-repeat -'+(u+e*u-u)+"px -"+(f+o*f-f)+"px"}))},h=function(t,i,r,u){var f=t.data("nivo:vars"),h,e,o,s,p,g,a,nt;if(f&&f.currentSlide==f.totalSlides-1&&r.lastSlide.call(this),(!f||f.stop)&&!u)return!1;if(r.beforeChange.call(this),u?(u=="prev"&&t.css("background",'url("'+f.currentImage.attr("s")+'") no-repeat'),u=="next"&&t.css("background",'url("'+f.currentImage.attr("s")+'") no-repeat')):t.css("background",'url("'+f.currentImage.attr("s")+'") no-repeat'),f.currentSlide++,f.currentSlide==f.totalSlides&&(f.currentSlide=0,r.slideshowEnd.call(this)),f.currentSlide<0&&(f.currentSlide=f.totalSlides-1),f.currentImage=n(i[f.currentSlide]).is("img")?n(i[f.currentSlide]):n(i[f.currentSlide]).find("img:first"),r.controlNav&&(n(".nivo-controlNav a",t).removeClass("active"),n(".nivo-controlNav a:eq("+f.currentSlide+")",t).addClass("active")),v(r),n(".nivo-slice",t).remove(),n(".nivo-box",t).remove(),r.effect=="random"&&(h=["sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDown","sliceUpDownLeft","fold","fade","boxRandom","boxRain","boxRainReverse","boxRainGrow","boxRainGrowReverse"],f.randAnim=h[Math.floor(Math.random()*(h.length+1))],f.randAnim==undefined&&(f.randAnim="fade")),r.effect.indexOf(",")!=-1&&(h=r.effect.split(","),f.randAnim=h[Math.floor(Math.random()*h.length)],f.randAnim==undefined&&(f.randAnim="fade")),f.running=!0,r.effect=="sliceDown"||r.effect=="sliceDownRight"||f.randAnim=="sliceDownRight"||r.effect=="sliceDownLeft"||f.randAnim=="sliceDownLeft"){c(t,r,f);var e=0,o=0,l=n(".nivo-slice",t);(r.effect=="sliceDownLeft"||f.randAnim=="sliceDownLeft")&&(l=n(".nivo-slice",t)._reverse());l.each(function(){var i=n(this);i.css({top:"0px"});o==r.slices-1?setTimeout(function(){i.animate({height:"100%",opacity:"1.0"},r.animSpeed,"",function(){t.trigger("nivo:animFinished")})},100+e):setTimeout(function(){i.animate({height:"100%",opacity:"1.0"},r.animSpeed)},100+e);e+=50;o++})}else if(r.effect=="sliceUp"||r.effect=="sliceUpRight"||f.randAnim=="sliceUpRight"||r.effect=="sliceUpLeft"||f.randAnim=="sliceUpLeft"){c(t,r,f);var e=0,o=0,l=n(".nivo-slice",t);(r.effect=="sliceUpLeft"||f.randAnim=="sliceUpLeft")&&(l=n(".nivo-slice",t)._reverse());l.each(function(){var i=n(this);i.css({bottom:"0px"});o==r.slices-1?setTimeout(function(){i.animate({height:"100%",opacity:"1.0"},r.animSpeed,"",function(){t.trigger("nivo:animFinished")})},100+e):setTimeout(function(){i.animate({height:"100%",opacity:"1.0"},r.animSpeed)},100+e);e+=50;o++})}else if(r.effect=="sliceUpDown"||r.effect=="sliceUpDownRight"||f.randAnim=="sliceUpDown"||r.effect=="sliceUpDownLeft"||f.randAnim=="sliceUpDownLeft"){c(t,r,f);var e=0,o=0,tt=0,l=n(".nivo-slice",t);(r.effect=="sliceUpDownLeft"||f.randAnim=="sliceUpDownLeft")&&(l=n(".nivo-slice",t)._reverse());l.each(function(){var i=n(this);o==0?(i.css("top","0px"),o++):(i.css("bottom","0px"),o=0);tt==r.slices-1?setTimeout(function(){i.animate({height:"100%",opacity:"1.0"},r.animSpeed,"",function(){t.trigger("nivo:animFinished")})},100+e):setTimeout(function(){i.animate({height:"100%",opacity:"1.0"},r.animSpeed)},100+e);e+=50;tt++})}else if(r.effect=="fold"||f.randAnim=="fold")c(t,r,f),e=0,o=0,n(".nivo-slice",t).each(function(){var i=n(this),u=i.width();i.css({top:"0px",height:"100%",width:"0px"});o==r.slices-1?setTimeout(function(){i.animate({width:u,opacity:"1.0"},r.animSpeed,"",function(){t.trigger("nivo:animFinished")})},100+e):setTimeout(function(){i.animate({width:u,opacity:"1.0"},r.animSpeed)},100+e);e+=50;o++});else if(r.effect=="fade"||f.randAnim=="fade")c(t,r,f),s=n(".nivo-slice:first",t),s.css({height:"100%",width:t.width()+"px"}),s.animate({opacity:"1.0"},r.animSpeed*2,"",function(){t.trigger("nivo:animFinished")});else if(r.effect=="slideInRight"||f.randAnim=="slideInRight")c(t,r,f),s=n(".nivo-slice:first",t),s.css({height:"100%",width:"0px",opacity:"1"}),s.animate({width:t.width()+"px"},r.animSpeed*2,"",function(){t.trigger("nivo:animFinished")});else if(r.effect=="slideInLeft"||f.randAnim=="slideInLeft")c(t,r,f),s=n(".nivo-slice:first",t),s.css({height:"100%",width:"0px",opacity:"1",left:"",right:"0px"}),s.animate({width:t.width()+"px"},r.animSpeed*2,"",function(){s.css({left:"0px",right:""});t.trigger("nivo:animFinished")});else if(r.effect=="boxRandom"||f.randAnim=="boxRandom"){y(t,r,f);var it=r.boxCols*r.boxRows,o=0,e=0,p=w(n(".nivo-box",t));p.each(function(){var i=n(this);o==it-1?setTimeout(function(){i.animate({opacity:"1"},r.animSpeed,"",function(){t.trigger("nivo:animFinished")})},100+e):setTimeout(function(){i.animate({opacity:"1"},r.animSpeed)},100+e);e+=20;o++})}else if(r.effect=="boxRain"||f.randAnim=="boxRain"||r.effect=="boxRainReverse"||f.randAnim=="boxRainReverse"||r.effect=="boxRainGrow"||f.randAnim=="boxRainGrow"||r.effect=="boxRainGrowReverse"||f.randAnim=="boxRainGrowReverse"){y(t,r,f);var it=r.boxCols*r.boxRows,o=0,e=0,b=0,k=0,d=[];for(d[b]=[],p=n(".nivo-box",t),(r.effect=="boxRainReverse"||f.randAnim=="boxRainReverse"||r.effect=="boxRainGrowReverse"||f.randAnim=="boxRainGrowReverse")&&(p=n(".nivo-box",t)._reverse()),p.each(function(){d[b][k]=n(this);k++;k==r.boxCols&&(b++,k=0,d[b]=[])}),g=0;g<r.boxCols*2;g++){for(a=g,nt=0;nt<r.boxRows;nt++)a>=0&&a<r.boxCols&&(function(i,u,e,o,s){var h=n(d[i][u]),c=h.width(),l=h.height();(r.effect=="boxRainGrow"||f.randAnim=="boxRainGrow"||r.effect=="boxRainGrowReverse"||f.randAnim=="boxRainGrowReverse")&&h.width(0).height(0);o==s-1?setTimeout(function(){h.animate({opacity:"1",width:c,height:l},r.animSpeed/1.3,"",function(){t.trigger("nivo:animFinished")})},100+e):setTimeout(function(){h.animate({opacity:"1",width:c,height:l},r.animSpeed/1.3)},100+e)}(nt,a,e,o,it),o++),a--;e+=100}}},w=function(n){for(var i,r,t=n.length;t;i=parseInt(Math.random()*t),r=n[--t],n[t]=n[i],n[i]=r);return n},p=function(n){this.console&&typeof console.log!="undefined"&&console.log(n)};return this.stop=function(){n(t).data("nivo:vars").stop||(n(t).data("nivo:vars").stop=!0,p("Stop Slider"))},this.start=function(){n(t).data("nivo:vars").stop&&(n(t).data("nivo:vars").stop=!1,p("Start Slider"))},r.afterLoad.call(this),this};n.fn.nivoSlider=function(i){return this.each(function(){var r=n(this),u;if(r.data("nivoslider"))return r.data("nivoslider");u=new t(this,i);r.data("nivoslider",u)})};n.fn.nivoSlider.defaults={effect:"random",slices:15,boxCols:8,boxRows:4,animSpeed:500,pauseTime:3e3,startSlide:0,directionNav:!0,directionNavHide:!0,controlNav:!0,controlNavThumbs:!1,controlNavThumbsFromRel:!1,controlNavThumbsSearch:".jpg",controlNavThumbsReplace:"_thumb.jpg",keyboardNav:!0,pauseOnHover:!0,manualAdvance:!1,captionOpacity:.8,prevText:"Prev",nextText:"Next",beforeChange:function(){},afterChange:function(){},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){}};n.fn._reverse=[].reverse})(jQuery);