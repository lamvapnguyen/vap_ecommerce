(function(n){n.fn.visualLightbox=function(t){function li(t){return t=n(t),t.attr("tagName")!="A"&&(t=n("A:first",t)),n(t).attr("href")}function yr(t){return(t=n(t),t.attr("tagName")=="A")?t.attr("title"):n(">*:last",t).html()}function pr(){n("."+vr.replace(/^\,/,".$&"),ut).each(function(){li(this)&&(this.onclick=function(){return ai(this),!1})})}function ir(n){f=n;hr();at();br();t.startZoom||i("lightboxImage").hide();i("hoverNav").hide();i("imageDataContainer").hide();i("numberDisplay").hide();i("detailsNav").hide();e=new Image;e.onload=function(){r[f].link=e.src;r[f].width=e.width;r[f].height=e.height;vi(!1)};t.startZoom&&!i("lightboxImage").attr("src")&&(r[f].width=320,r[f].height=240,vi(!1,!0));e.src=r[f].link;t.googleAnalytics&&urchinTracker(r[f].link)}function vi(o,s){var c=r[f].width,l=r[f].height,p=lr(),imageProportion=c/l,d,w,v,b,y,h,a,resizeFactor,k;if(t.featBrowser&&(d=p.winWidth/p.winHeight,imageProportion>d?(v=p.winWidth-t.borderSize*2-t.breathingSize*2,w=Math.round(v/imageProportion)):(w=p.winHeight-t.borderSize*2-t.breathingSize*2-wt,v=c),(c>v||l>w)&&(c=v,l=w)),b=cr().y+(lr().winHeight-(l+wt+t.borderSize*2))/2,y=i("imageContainer"),o==!0)y.css({height:l+"px",width:c+"px"}),t.floating?rr(i("lightbox"),b):i("lightbox").css({top:b+"px"});else{h=i("lightboxImage");y.stop(!0,!1);h.stop(!0,!1);t.startZoom&&h.attr("src")?(a=h,a.attr({id:u("lightboxImage2")})):h.remove();s||(h=n(e),h.hide(),h.attr({id:u("lightboxImage")}),y.append(h));with(y)resizeFactor=imageProportion/(width()/height());if(!s){if(t.startZoom){if(a&&i("lightboxImage2").stop(!0,!0),k=a?120:100,a)with(a)css({width:1>resizeFactor?"auto":width()/parent().width()*100+"%",height:1>resizeFactor?height()/parent().height()*100+"%":"auto",left:0,top:0});h.css({opacity:0,display:"block",position:"absolute",width:1>resizeFactor?k+"%":"auto",height:"auto",left:(100-k*(1>resizeFactor?1:resizeFactor))/2+"%",top:(100-k*(1>resizeFactor?1/resizeFactor:1))/2+"%"})}t.startZoom&&ur()}wr(b,c,l,resizeFactor,s)}i("imageDataContainer").css({width:c+"px"})}function wr(r,u,f,e,s){var l=i("imageContainer"),h=i("lightboxImage"),a=i("lightbox"),c;s||(c=i("lightboxImage2"));t.startZoom&&(h.fadeTo(o*1e3,1),document.all||i("outerImageContainer").fadeTo(o*1e3,1));rr(a,r);t.startZoom&&!s&&(c.animate(n.extend({opacity:0},e<1?{height:"120%",top:"-10%",left:(100-120/e)/2+"%"}:{width:"120%",left:"-10%",top:(100-e*120)/2+"%"}),{queue:!1,duration:o*1e3,complete:function(){n(this).remove()}}),h.animate(n.extend({left:0,top:0},e<1?{width:"100%"}:{height:"auto"}),{queue:!1,duration:o*1e3}));l.animate({width:u+"px",height:f+"px"},{queue:!1,duration:o*1e3,complete:s?null:function(){kr()}})}function rr(n,t){n.stop(!0,!1);n.animate({width:"100%",left:0,top:t},{queue:!1,duration:o*1e3})}function br(){clearTimeout(fi);var n=i("loading");n.show();n.css({visibility:"hidden"});fi=setTimeout(function(){i("loading").css({visibility:"visible"})},300)}function ur(){clearTimeout(fi);i("loading").hide()}function kr(){ur();t.startZoom?(i("overlay:hidden").css({opacity:0}).show().fadeTo(rt*1e3,t.overlayOpacity),fr()):i("lightboxImage").css({opacity:0}).show().fadeTo(500,1,function(){fr()});ru()}function fr(){if(i("caption").show(),i("caption").html(r[f].title||""),r.length>1){var n=t.strings.numDisplayPrefix+" "+eval(f+1)+" "+t.strings.numDisplaySeparator+" "+r.length;t.showGroupName&&yt&&(n+=" "+t.strings.numDisplaySeparator+" "+yt);i("numberDisplay").text(n).show();ei||i("slideShowControl").hide();i("detailsNav").show()}i("imageDataContainer").animate({height:"show",opacity:"show"},650,null,function(){dr()})}function dr(){var n=1/r.length;wt=wt*(1-n)+i("imageDataContainer").height()*n;r.length>1&&(i("hoverNav").show(),ei&&(bt?er():or()));tu()}function er(){i("lightbox:hidden").length||(at(),bt=!0,pt=setTimeout(function(){ri()},t.slideTime*1e3),i("slideShowControl").text(t.strings.stopSlideshow),i("slideShowControl").addClass("started"))}function or(){bt=!1;at();i("slideShowControl").text(t.strings.startSlideshow);i("slideShowControl").removeClass("started")}function sr(){bt?or():er()}function at(){pt&&(pt=clearTimeout(pt))}function ri(){if(r.length>1){if(at(),!t.loop&&(f==r.length-1&&it==0||f+1==it)){tt();return}f==r.length-1?nt(0):nt(f+1)}}function nt(n){i("imageDataContainer").animate({height:"hide",opacity:"hide"},650,null,function(){ir(n)})}function yi(){r.length>1&&(f==0?nt(r.length-1):nt(f-1))}function gr(){r.length>1&&nt(0)}function nu(){r.length>1&&nt(r.length-1)}function tu(){document.onkeydown=iu}function hr(){document.onkeydown=""}function iu(n){keycode=n==null?event.keyCode:n.which;key=String.fromCharCode(keycode).toLowerCase();key=="x"||key=="o"||key=="c"?tt():key=="p"||key=="%"?yi():key=="n"||key=="'"?ri():key=="f"?gr():key=="l"?nu():key=="s"&&r.length>0&&t.enableSlideshow&&sr()}function ru(){var t=r.length-1==f?0:f+1,n;(new Image).src=r[t].link;n=f==0?r.length-1:f-1;(new Image).src=r[n].link}function tt(r){if(r){var f=n(r.target).attr("id");if(u("closeLink")!=f&&u("lightbox")!=f&&u("overlay")!=f)return}i("imageContainer").stop(!0,!1);i("lightboxImage").stop(!0,!1);e.onload=null;hr();at();i("lightbox").hide();t.overlayOpacity?i("overlay").fadeOut(rt*1e3):i("overlay").hide();n(window).unbind("resize",vt);n(window).unbind("scroll",vt);n(window).unbind("resize",ui);n(window).unbind("scroll",ui);uu()}function vt(){vi(!0)}function ui(){i("overlay").css({left:cr().x+"px",top:0,width:"100%",height:ar()[1]+"px"})}function uu(){for(var t,i,u=pi,r=0;r<u.length;r++)for(i=document.getElementsByTagName(u[r]),t=0;t<i.length;t++)n(i[t]).css({visibility:"visible"})}function fu(){for(var i=pi,t=0;t<i.length;t++)n(i[t]).css({visibility:"hidden"})}function cr(){var n,t;return self.pageYOffset?(n=self.pageXOffset,t=self.pageYOffset):document.documentElement&&document.documentElement.scrollTop?(n=document.documentElement.scrollLeft,t=document.documentElement.scrollTop):document.body&&(n=document.body.scrollLeft,t=document.body.scrollTop),{x:n,y:t}}function lr(){var n,t;return self.innerHeight?(n=self.innerWidth,t=self.innerHeight):document.documentElement&&document.documentElement.clientHeight?(n=document.documentElement.clientWidth,t=document.documentElement.clientHeight):document.body&&(n=document.body.clientWidth,t=document.body.clientHeight),{winWidth:n,winHeight:t}}function ar(){var i=document.body,r=document.documentElement,n=0,t=0;return r&&(n=Math.max(n,r.scrollWidth,r.offsetWidth),t=Math.max(t,r.scrollHeight,r.offsetHeight)),i&&(n=Math.max(n,i.scrollWidth,i.offsetWidth),t=Math.max(t,i.scrollHeight,i.offsetHeight),window.innerWidth&&(n=Math.max(n,window.innerWidth),t=Math.max(t,window.innerHeight))),[n,t]}function u(n){return t.prefix+n}function i(t){return n("#"+u(t))}var f=null,pi=["select","object","embed"],yt=null,r=[],pt=null,it=null,wt=50,e,fi,rt,o,ei,s,ft,l,a,et,v,oi,si,y,p,ot,w,h,kt,wi,bi,hi,dt,ki,b,di,gt,gi,nr,tr,c,ci,st,ht,ct,ni,k,lt,d,ti,ii,g,ai;if(document.getElementsByTagName){t=n.extend({animate:!0,autoPlay:!0,borderSize:39,containerID:document,enableSlideshow:!0,googleAnalytics:!1,imageDataLocation:"south",closeLocation:"",initImage:"",loop:!0,overlayDuration:.2,overlayOpacity:.7,prefix:"",classNames:"vlightbox",resizeSpeed:7,showGroupName:!1,slideTime:4,strings:{closeLink:"",loadingMsg:"loading",nextLink:"",prevLink:"",startSlideshow:"",stopSlideshow:"",numDisplayPrefix:"",numDisplaySeparator:"/"},featBrowser:!0,breathingSize:20,startZoom:!1,floating:!0},t);t.animate?(rt=Math.max(t.overlayDuration,0),t.resizeSpeed=Math.max(Math.min(t.resizeSpeed,10),1),o=(11-t.resizeSpeed)*.15):(rt=0,o=0);ei=t.enableSlideshow;t.overlayOpacity=Math.max(Math.min(t.overlayOpacity,1),0);var bt=t.autoPlay,ut=n(t.containerID),vr=t.classNames;return pr(),s=ut.length&&ut.get(0)!=document?ut.get(0):document.getElementsByTagName("body").item(0),s.childNodes.length&&(n(s.childNodes[0]).before(n("<div><\/div>")),s=s.childNodes[0]),ft=document.createElement("div"),ft.setAttribute("id",u("overlay")),ft.style.display="none",s.appendChild(ft),n(ft).click(tt),l=document.createElement("div"),l.setAttribute("id",u("lightbox")),l.style.display="none",s.appendChild(l),n(l).click(tt),a=document.createElement("div"),a.setAttribute("id",u("imageDataContainer")),a.className=u("clearfix"),et=document.createElement("div"),et.setAttribute("id",u("imageData")),a.appendChild(et),v=document.createElement("div"),v.setAttribute("id",u("imageDetails")),et.appendChild(v),oi=document.createElement("div"),oi.setAttribute("id",u("caption")),v.appendChild(oi),si=document.createElement("span"),si.setAttribute("id",u("numberDisplay")),v.appendChild(si),y=document.createElement("span"),y.setAttribute("id",u("detailsNav")),v.appendChild(y),p=document.createElement("a"),p.setAttribute("id",u("prevLinkDetails")),p.setAttribute("href","javascript:void(0);"),p.innerHTML=t.strings.prevLink,y.appendChild(p),n(p).click(yi),ot=document.createElement("a"),ot.setAttribute("id",u("slideShowControl")),ot.setAttribute("href","javascript:void(0);"),y.appendChild(ot),n(ot).click(sr),w=document.createElement("a"),w.setAttribute("id",u("nextLinkDetails")),w.setAttribute("href","javascript:void(0);"),w.innerHTML=t.strings.nextLink,y.appendChild(w),n(w).click(ri),h=document.createElement("table"),h.setAttribute("id",u("outerImageContainer")),h.cellSpacing=0,l.appendChild(h),kt=h.insertRow(-1),wi=kt.insertCell(-1),wi.className="tl",bi=kt.insertCell(-1),bi.className="tc",hi=kt.insertCell(-1),hi.className="tr",dt=h.insertRow(-1),ki=dt.insertCell(-1),ki.className="ml",b=dt.insertCell(-1),b.setAttribute("id",u("lightboxFrameBody")),b.innerHTML="&nbsp;",di=dt.insertCell(-1),di.className="mr",gt=h.insertRow(-1),gi=gt.insertCell(-1),gi.className="bl",nr=gt.insertCell(-1),nr.className="bc",tr=gt.insertCell(-1),tr.className="br",t.imageDataLocation=="north"&&b.appendChild(a),c=document.createElement("div"),c.setAttribute("id",u("imageContainer")),b.appendChild(c),ci=document.createElement("img"),ci.setAttribute("id",u("lightboxImage")),c.appendChild(ci),st=document.createElement("div"),st.setAttribute("id",u("hoverNav")),c.appendChild(st),ht=document.createElement("a"),ht.setAttribute("id",u("prevLinkImg")),ht.setAttribute("href","javascript:void(0);"),st.appendChild(ht),n(ht).click(yi),ct=document.createElement("a"),ct.setAttribute("id",u("nextLinkImg")),ct.setAttribute("href","javascript:void(0);"),st.appendChild(ct),n(ct).click(ri),ni=document.createElement("div"),ni.setAttribute("id",u("loading")),c.appendChild(ni),k=document.createElement("a"),k.setAttribute("id",u("loadingLink")),k.setAttribute("href","javascript:void(0);"),k.innerHTML=t.strings.loadingMsg,ni.appendChild(k),n(k).click(tt),t.imageDataLocation!="north"&&b.appendChild(a),lt=document.createElement("div"),lt.setAttribute("id",u("close")),t.closeLocation=="top"?hi.appendChild(lt):et.appendChild(lt),d=document.createElement("a"),d.setAttribute("id",u("closeLink")),d.setAttribute("href","javascript:void(0);"),d.innerHTML=t.strings.closeLink,lt.appendChild(d),n(d).click(tt),t.initImage!=""&&ai("#"+t.initImage),ti="",ti&&(ii=n("<div><\/div>"),ii.css({position:"absolute",right:"0px",bottom:"0px",padding:"2px 3px","background-color":"#EEE","z-index":10}),n(c).append(ii),g=n(document.createElement("A")),g.css({color:"#555",font:"11px Arial,Verdana,sans-serif",padding:"3px 6px",width:"auto",height:"auto",margin:"0 0 0 0",outline:"none"}),g.attr({href:"http://"+ti.toLowerCase()}),g.html(ti),g.bind("contextmenu",function(){return!1}),ii.append(g)),ai=this.start=function(u){fu();u=n(u);i("overlay").css({height:ar()[1]+"px"});i("imageDataContainer").hide();i("lightboxImage").hide().attr({src:""});t.startZoom?(i("imageContainer").css({width:u.width()+"px",height:u.height()+"px"}),document.all||i("outerImageContainer").css({opacity:.1}),i("lightbox").css({left:u.offset().left-t.borderSize+"px",top:u.offset().top-t.borderSize+"px",width:u.width()+t.borderSize*2+"px",height:"auto"})):(i("overlay").css({opacity:0}).show().fadeTo(rt*1e3,t.overlayOpacity),i("lightbox").css({left:0,width:"100%"}));i("lightbox").show();r=[];yt=null;it=0;n("."+u.attr("className"),ut).each(function(){li(this)&&(r.push({link:li(this),title:yr(this)}),this==u.get(0)&&(it=r.length-1))});r.length>1&&(yt=u.attr("className"));t.featBrowser&&n(window).resize(vt);t.floating&&n(window).scroll(vt);n(window).resize(ui);n(window).scroll(ui);ir(it);vt()},this}}})(jQuery);var Lightbox=(new jQuery).visualLightbox({autoPlay:!0,borderSize:39,enableSlideshow:!0,startZoom:!0});