var _slidebanner=function(){var o,u,f,n,t,i,r,e;return{init:function(s,h,c,l,a){o=l;u=h;f=c;n=document.getElementById(s);t=n.getElementsByTagName("li");i=t.length;r=n.offsetWidth;h=r/i;e=Math.floor((r-u)/(i-1));var v=0;for(v;v<i;v++)l=t[v],l.style.width=h+"px",this.timer(l);a!=null&&(n.timer=setInterval(function(){_slidebanner.slide(t[a-1])},f))},timer:function(t){t.onmouseover=function(){clearInterval(n.timer);n.timer=setInterval(function(){_slidebanner.slide(t)},f)}},slide:function(f){var v=parseInt(f.style.width,"10"),c,s;if(v<u){for(c=0,s=0,s;s<i;s++)if(t[s]!=f){var a=t[s],l=parseInt(a.style.width,"10"),h=0;l>e&&(h=Math.floor((l-e)/o),h=h>0?h:1,a.style.width=l-h+"px");c=c+(l-h)}f.style.width=r-c+"px"}else clearInterval(n.timer)}}}();