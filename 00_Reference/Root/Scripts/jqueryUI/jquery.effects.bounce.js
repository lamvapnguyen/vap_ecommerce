(function(n){n.effects.bounce=function(t){return this.queue(function(){var i=n(this),l=["position","top","left"],f=n.effects.setMode(i,t.options.mode||"effect"),a=t.options.direction||"up",r=t.options.distance||20,v=t.options.times||5,o=t.duration||250,y,s,h,c;/show|hide/.test(f)&&l.push("opacity");n.effects.save(i,l);i.show();n.effects.createWrapper(i);var u=a=="up"||a=="down"?"top":"left",e=a=="up"||a=="left"?"pos":"neg",r=t.options.distance||(u=="top"?i.outerHeight({margin:!0})/3:i.outerWidth({margin:!0})/3);for(f=="show"&&i.css("opacity",0).css(u,e=="pos"?-r:r),f=="hide"&&(r=r/(v*2)),f!="hide"&&v--,f=="show"&&(s={opacity:1},s[u]=(e=="pos"?"+=":"-=")+r,i.animate(s,o/2,t.options.easing),r=r/2,v--),y=0;y<v;y++)h={},c={},h[u]=(e=="pos"?"-=":"+=")+r,c[u]=(e=="pos"?"+=":"-=")+r,i.animate(h,o/2,t.options.easing).animate(c,o/2,t.options.easing),r=f=="hide"?r*2:r/2;f=="hide"?(s={opacity:0},s[u]=(e=="pos"?"-=":"+=")+r,i.animate(s,o/2,t.options.easing,function(){i.hide();n.effects.restore(i,l);n.effects.removeWrapper(i);t.callback&&t.callback.apply(this,arguments)})):(h={},c={},h[u]=(e=="pos"?"-=":"+=")+r,c[u]=(e=="pos"?"+=":"-=")+r,i.animate(h,o/2,t.options.easing).animate(c,o/2,t.options.easing,function(){n.effects.restore(i,l);n.effects.removeWrapper(i);t.callback&&t.callback.apply(this,arguments)}));i.queue("fx",function(){i.dequeue()});i.dequeue()})}})(jQuery);