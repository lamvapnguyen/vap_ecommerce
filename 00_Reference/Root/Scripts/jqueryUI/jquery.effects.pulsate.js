(function(n){n.effects.pulsate=function(t){return this.queue(function(){var i=n(this),u=n.effects.setMode(i,t.options.mode||"show"),r;for(times=(t.options.times||5)*2-1,duration=t.duration?t.duration/2:n.fx.speeds._default/2,isVisible=i.is(":visible"),animateTo=0,isVisible||(i.css("opacity",0).show(),animateTo=1),(u=="hide"&&isVisible||u=="show"&&!isVisible)&&times--,r=0;r<times;r++)i.animate({opacity:animateTo},duration,t.options.easing),animateTo=(animateTo+1)%2;i.animate({opacity:animateTo},duration,t.options.easing,function(){animateTo==0&&i.hide();t.callback&&t.callback.apply(this,arguments)});i.queue("fx",function(){i.dequeue()}).dequeue()})}})(jQuery);