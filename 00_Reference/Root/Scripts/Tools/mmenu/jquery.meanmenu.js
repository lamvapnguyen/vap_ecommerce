/*!
* jQuery meanMenu v2.0.8
* @Copyright (C) 2012-2014 Chris Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu)
*
*/
(function(n){"use strict";n.fn.meanmenu=function(t){var r={meanMenuTarget:jQuery(this),meanMenuContainer:"body",meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanScreenWidth:"998",meanNavPush:"",meanShowChildren:!0,meanExpandableChildren:!0,meanExpand:"+",meanContract:"-",meanRemoveAttrs:!1,onePage:!1,meanDisplay:"block",removeElements:""},i;return t=n.extend(r,t),i=window.innerWidth||document.documentElement.clientWidth,this.each(function(){var o=t.meanMenuTarget,w=t.meanMenuContainer,tt=t.meanMenuClose,b=t.meanMenuCloseSize,a=t.meanMenuOpen,v=t.meanRevealPosition,k=t.meanRevealPositionDistance,d=t.meanRevealColour,f=t.meanScreenWidth,it=t.meanNavPush,g=".meanmenu-reveal",rt=t.meanShowChildren,ut=t.meanExpandableChildren,nt=t.meanExpand,ft=t.meanContract,et=t.meanRemoveAttrs,ot=t.onePage,st=t.meanDisplay,y=t.removeElements,s=!1;(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Blackberry/i)||navigator.userAgent.match(/Windows Phone/i))&&(s=!0);(navigator.userAgent.match(/MSIE 8/i)||navigator.userAgent.match(/MSIE 7/i))&&jQuery("html").css("overflow-y","scroll");var h="",c=function(){if(v==="center"){var t=window.innerWidth||document.documentElement.clientWidth,n=t/2-22+"px";h="left:"+n+";right:auto;";s?jQuery(".meanmenu-reveal").animate({left:n}):jQuery(".meanmenu-reveal").css("left",n)}},e=!1,p=!1;v==="right"&&(h="right:"+k+";left:auto;");v==="left"&&(h="left:"+k+";right:auto;");c();var r="",ht=function(){jQuery(r).is(".meanmenu-reveal.meanclose")?r.html(tt):r.html(a)},u=function(){jQuery(".mean-bar,.mean-push").remove();jQuery(w).removeClass("mean-container");jQuery(o).css("display",st);e=!1;p=!1;jQuery(y).removeClass("mean-remove")},l=function(){var t="background:"+d+";color:"+d+";"+h,n;if(i<=f){if(jQuery(y).addClass("mean-remove"),p=!0,jQuery(w).addClass("mean-container"),jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+t+'">Show Navigation<\/a><text><\/text><nav class="mean-nav"><\/nav><\/div>'),n=jQuery(o).html(),jQuery(".mean-nav").html(n),et&&jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function(){jQuery(this).is(".mean-remove")?jQuery(this).attr("class","mean-remove"):jQuery(this).removeAttr("class");jQuery(this).removeAttr("id")}),jQuery(o).before('<div class="mean-push" />'),jQuery(".mean-push").css("margin-top",it),jQuery(o).hide(),jQuery(".meanmenu-reveal").show(),jQuery(g).html(a),r=jQuery(g),jQuery(".mean-nav ul").hide(),rt)if(ut){jQuery(".mean-nav ul ul").each(function(){jQuery(this).children().length&&jQuery(this,"li:first").parent().append('<a class="mean-expand" href="#" style="font-size: '+b+'">'+nt+"<\/a>")});jQuery(".mean-expand").on("click",function(n){n.preventDefault();jQuery(this).hasClass("mean-clicked")?(jQuery(this).text(nt),jQuery(this).prev("ul").slideUp(300,function(){})):(jQuery(this).text(ft),jQuery(this).prev("ul").slideDown(300,function(){}));jQuery(this).toggleClass("mean-clicked")})}else jQuery(".mean-nav ul ul").show();else jQuery(".mean-nav ul ul").hide();if(jQuery(".mean-nav ul li").last().addClass("mean-last"),r.removeClass("meanclose"),jQuery(r).click(function(n){n.preventDefault();e===!1?(r.css("text-align","center"),r.css("text-indent","0"),r.css("font-size",b),jQuery(".mean-nav ul:first").slideDown(),e=!0):(jQuery(".mean-nav ul:first").slideUp(),e=!1);r.toggleClass("meanclose");ht();jQuery(y).addClass("mean-remove")}),ot)jQuery(".mean-nav ul > li > a:first-child").on("click",function(){jQuery(".mean-nav ul:first").slideUp();e=!1;jQuery(r).toggleClass("meanclose").html(a)})}else u()};s||jQuery(window).resize(function(){i=window.innerWidth||document.documentElement.clientWidth;i>f?u():u();i<=f?(l(),c()):u()});jQuery(window).resize(function(){i=window.innerWidth||document.documentElement.clientWidth;s?(c(),i<=f?p===!1&&l():u()):(u(),i<=f&&(l(),c()))});l();n(".mean-bar > text").click(function(){n(this).prev().click()})})}})(jQuery);