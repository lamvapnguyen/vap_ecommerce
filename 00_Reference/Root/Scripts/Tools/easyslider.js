(function(n){n.fn.easySlider=function(t){var t=n.extend({prevId:"prevBtn",prevText:"Previous",nextId:"nextBtn",nextText:"Next",controlsShow:!0,controlsBefore:"",controlsAfter:"",controlsFade:!0,firstId:"firstBtn",firstText:"First",firstShow:!1,lastId:"lastBtn",lastText:"Last",lastShow:!1,vertical:!1,speed:800,auto:!1,pause:2e3,continuous:!1,numeric:!1,numericId:"controls",count:1},t);this.each(function(){function v(i){i=parseInt(i)+1;n("li","#"+t.numericId).removeClass("current");n("li#"+t.numericId+i).addClass("current")}function y(){i>e&&(i=0);i<0&&(i=e);t.vertical?n("ul",r).css("margin-left",i*a*-1):n("ul",r).css("margin-left",i*s*-1);c=!0;t.numeric&&v(i)}function f(u,o){var h,v,w;if(c){c=!1;h=i;switch(u){case"next":i=h>=e?t.continuous?i+1:e:i+1;break;case"prev":i=i<=0?t.continuous?i-1:0:i-1;break;case"first":i=0;break;case"last":i=e;break;default:i=u}v=Math.abs(h-i);w=v*t.speed;t.vertical?(p=i*a*-1,n("ul",r).animate({marginTop:p},{queue:!1,duration:w,complete:y})):(p=i*s*-1,n("ul",r).animate({marginLeft:p},{queue:!1,duration:w,complete:y}));!t.continuous&&t.controlsFade&&(i==e?(n("a","#"+t.nextId).hide(),n("a","#"+t.lastId).hide()):(n("a","#"+t.nextId).show(),n("a","#"+t.lastId).show()),i==0?(n("a","#"+t.prevId).hide(),n("a","#"+t.firstId).hide()):(n("a","#"+t.prevId).show(),n("a","#"+t.firstId).show()));o&&clearTimeout(l);t.auto&&u=="next"&&!o&&(l=setTimeout(function(){f("next",!1)},v*t.speed+t.pause))}}var r=n(this),h=n("li",r).length,s=n("li",r).width(),a=n("li",r).height(),u,o,l;r.css("overflow","hidden");var c=!0,e=h-1,i=0;if(t.continuous&&(n("ul",r).prepend(n("ul li:last-child",r).clone().css("margin-left","-"+s+"px")),n("ul",r).append(n("ul li:nth-child(2)",r).clone()),n("ul",r).css("width",(h+1)*s)),t.vertical||n("li",r).css("float","left"),t.controlsShow&&(u=t.controlsBefore,t.numeric?u+='<ol id="'+t.numericId+'"><\/ol>':(t.firstShow&&(u+='<span id="'+t.firstId+'"><a href="javascript:void(0);">'+t.firstText+"<\/a><\/span>"),u+=' <span class="prevBtn" id="'+t.prevId+'"><a href="javascript:void(0);">'+t.prevText+"<\/a><\/span>",u+=' <span class="nextBtn" id="'+t.nextId+'"><a href="javascript:void(0);">'+t.nextText+"<\/a><\/span>",t.lastShow&&(u+=' <span id="'+t.lastId+'"><a href="javascript:void(0);">'+t.lastText+"<\/a><\/span>")),u+=t.controlsAfter,n(r).after(u)),t.numeric)for(o=0;o<h;o++)n(document.createElement("li")).attr("id",t.numericId+(o+1)).html("<a rel="+o+' href="javascript:void(0);">'+(o+1)+"<\/a>").appendTo(n("#"+t.numericId)).click(function(){f(n("a",n(this)).attr("rel"),!0)});else n("a","#"+t.nextId).click(function(){f("next",!0)}),n("a","#"+t.prevId).click(function(){f("prev",!0)}),n("a","#"+t.firstId).click(function(){f("first",!0)}),n("a","#"+t.lastId).click(function(){f("last",!0)});t.auto&&(l=setTimeout(function(){f("next",!1)},t.pause));t.numeric&&v(0);!t.continuous&&t.controlsFade&&(n("a","#"+t.prevId).hide(),n("a","#"+t.firstId).hide())})}})(jQuery);