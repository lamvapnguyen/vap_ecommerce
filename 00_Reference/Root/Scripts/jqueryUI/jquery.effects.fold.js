(function(n){n.effects.fold=function(t){return this.queue(function(){var i=n(this),h=["position","top","left"],r=n.effects.setMode(i,t.options.mode||"hide"),f=t.options.size||15,c=!!t.options.horizFirst,l=t.duration?t.duration/2:n.fx.speeds._default/2,o,s;n.effects.save(i,h);i.show();var u=n.effects.createWrapper(i).css({overflow:"hidden"}),a=r=="show"!=c,v=a?["width","height"]:["height","width"],e=a?[u.width(),u.height()]:[u.height(),u.width()],y=/([0-9]+)%/.exec(f);y&&(f=parseInt(y[1],10)/100*e[r=="hide"?0:1]);r=="show"&&u.css(c?{height:0,width:f}:{height:f,width:0});o={};s={};o[v[0]]=r=="show"?e[0]:f;s[v[1]]=r=="show"?e[1]:0;u.animate(o,l,t.options.easing).animate(s,l,t.options.easing,function(){r=="hide"&&i.hide();n.effects.restore(i,h);n.effects.removeWrapper(i);t.callback&&t.callback.apply(i[0],arguments);i.dequeue()})})}})(jQuery);