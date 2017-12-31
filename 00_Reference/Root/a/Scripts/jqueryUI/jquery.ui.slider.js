(function(n){var t=5;n.widget("ui.slider",n.ui.mouse,{widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var i=this,r=this.options,f=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),o=r.values&&r.values.length||1,e=[],u;for(this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"+(r.disabled?" ui-slider-disabled ui-disabled":"")),this.range=n([]),r.range&&(r.range===!0&&(r.values||(r.values=[this._valueMin(),this._valueMin()]),r.values.length&&r.values.length!==2&&(r.values=[r.values[0],r.values[0]])),this.range=n("<div><\/div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(r.range==="min"||r.range==="max"?" ui-slider-range-"+r.range:""))),u=f.length;u<o;u+=1)e.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'><\/a>");this.handles=f.add(n(e.join("")).appendTo(i.element));this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(n){n.preventDefault()}).hover(function(){r.disabled||n(this).addClass("ui-state-hover")},function(){n(this).removeClass("ui-state-hover")}).focus(function(){r.disabled?n(this).blur():(n(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),n(this).addClass("ui-state-focus"))}).blur(function(){n(this).removeClass("ui-state-focus")});this.handles.each(function(t){n(this).data("index.ui-slider-handle",t)});this.handles.keydown(function(r){var s=!0,e=n(this).data("index.ui-slider-handle"),h,f,u,o;if(!i.options.disabled){switch(r.keyCode){case n.ui.keyCode.HOME:case n.ui.keyCode.END:case n.ui.keyCode.PAGE_UP:case n.ui.keyCode.PAGE_DOWN:case n.ui.keyCode.UP:case n.ui.keyCode.RIGHT:case n.ui.keyCode.DOWN:case n.ui.keyCode.LEFT:if(s=!1,!i._keySliding&&(i._keySliding=!0,n(this).addClass("ui-state-active"),h=i._start(r,e),h===!1))return}o=i.options.step;f=i.options.values&&i.options.values.length?u=i.values(e):u=i.value();switch(r.keyCode){case n.ui.keyCode.HOME:u=i._valueMin();break;case n.ui.keyCode.END:u=i._valueMax();break;case n.ui.keyCode.PAGE_UP:u=i._trimAlignValue(f+(i._valueMax()-i._valueMin())/t);break;case n.ui.keyCode.PAGE_DOWN:u=i._trimAlignValue(f-(i._valueMax()-i._valueMin())/t);break;case n.ui.keyCode.UP:case n.ui.keyCode.RIGHT:if(f===i._valueMax())return;u=i._trimAlignValue(f+o);break;case n.ui.keyCode.DOWN:case n.ui.keyCode.LEFT:if(f===i._valueMin())return;u=i._trimAlignValue(f-o)}return i._slide(r,e,u),s}}).keyup(function(t){var r=n(this).data("index.ui-slider-handle");i._keySliding&&(i._keySliding=!1,i._stop(t,r),i._change(t,r),n(this).removeClass("ui-state-active"))});this._refreshValue();this._animateOff=!1},destroy:function(){return this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),this._mouseDestroy(),this},_mouseCapture:function(t){var u=this.options,h,f,e,i,o,r,c,s,l;return u.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),h={x:t.pageX,y:t.pageY},f=this._normValueFromMouse(h),e=this._valueMax()-this._valueMin()+1,o=this,this.handles.each(function(t){var u=Math.abs(f-o.values(t));e>u&&(e=u,i=n(this),r=t)}),u.range===!0&&this.values(1)===u.min&&(r+=1,i=n(this.handles[r])),c=this._start(t,r),c===!1)?!1:(this._mouseSliding=!0,o._handleIndex=r,i.addClass("ui-state-active").focus(),s=i.offset(),l=!n(t.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:t.pageX-s.left-i.width()/2,top:t.pageY-s.top-i.height()/2-(parseInt(i.css("borderTopWidth"),10)||0)-(parseInt(i.css("borderBottomWidth"),10)||0)+(parseInt(i.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,r,f),this._animateOff=!0,!0)},_mouseStart:function(){return!0},_mouseDrag:function(n){var t={x:n.pageX,y:n.pageY},i=this._normValueFromMouse(t);return this._slide(n,this._handleIndex,i),!1},_mouseStop:function(n){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(n,this._handleIndex),this._change(n,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(n){var i,r,t,u,f;return this.orientation==="horizontal"?(i=this.elementSize.width,r=n.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(i=this.elementSize.height,r=n.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),t=r/i,t>1&&(t=1),t<0&&(t=0),this.orientation==="vertical"&&(t=1-t),u=this._valueMax()-this._valueMin(),f=this._valueMin()+t*u,this._trimAlignValue(f)},_start:function(n,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",n,i)},_slide:function(n,t,i){var r,f,u;this.options.values&&this.options.values.length?(r=this.values(t?0:1),this.options.values.length===2&&this.options.range===!0&&(t===0&&i>r||t===1&&i<r)&&(i=r),i!==this.values(t)&&(f=this.values(),f[t]=i,u=this._trigger("slide",n,{handle:this.handles[t],value:i,values:f}),r=this.values(t?0:1),u!==!1&&this.values(t,i,!0))):i!==this.value()&&(u=this._trigger("slide",n,{handle:this.handles[t],value:i}),u!==!1&&this.value(i))},_stop:function(n,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values());this._trigger("stop",n,i)},_change:function(n,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values());this._trigger("change",n,i)}},value:function(n){if(arguments.length){this.options.value=this._trimAlignValue(n);this._refreshValue();this._change(null,0);return}return this._value()},values:function(t,i){var u,f,r;if(arguments.length>1){this.options.values[t]=this._trimAlignValue(i);this._refreshValue();this._change(null,t);return}if(arguments.length)if(n.isArray(arguments[0])){for(u=this.options.values,f=arguments[0],r=0;r<u.length;r+=1)u[r]=this._trimAlignValue(f[r]),this._change(null,r);this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(t):this.value();else return this._values()},_setOption:function(t,i){var r,u=0;n.isArray(this.options.values)&&(u=this.options.values.length);n.Widget.prototype._setOption.apply(this,arguments);switch(t){case"disabled":i?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.propAttr("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.propAttr("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case"value":this._animateOff=!0;this._refreshValue();this._change(null,0);this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),r=0;r<u;r+=1)this._change(null,r);this._animateOff=!1}},_value:function(){var n=this.options.value;return this._trimAlignValue(n)},_values:function(n){var r,t,i;if(arguments.length)return r=this.options.values[n],this._trimAlignValue(r);for(t=this.options.values.slice(),i=0;i<t.length;i+=1)t[i]=this._trimAlignValue(t[i]);return t},_trimAlignValue:function(n){if(n<=this._valueMin())return this._valueMin();if(n>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(n-this._valueMin())%t,r=n-i;return Math.abs(i)*2>=t&&(r+=i>0?t:-t),parseFloat(r.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var f=this.options.range,r=this.options,i=this,u=this._animateOff?!1:r.animate,t,e={},s,c,o,h;this.options.values&&this.options.values.length?this.handles.each(function(f){t=(i.values(f)-i._valueMin())/(i._valueMax()-i._valueMin())*100;e[i.orientation==="horizontal"?"left":"bottom"]=t+"%";n(this).stop(1,1)[u?"animate":"css"](e,r.animate);i.options.range===!0&&(i.orientation==="horizontal"?(f===0&&i.range.stop(1,1)[u?"animate":"css"]({left:t+"%"},r.animate),f===1&&i.range[u?"animate":"css"]({width:t-s+"%"},{queue:!1,duration:r.animate})):(f===0&&i.range.stop(1,1)[u?"animate":"css"]({bottom:t+"%"},r.animate),f===1&&i.range[u?"animate":"css"]({height:t-s+"%"},{queue:!1,duration:r.animate})));s=t}):(c=this.value(),o=this._valueMin(),h=this._valueMax(),t=h!==o?(c-o)/(h-o)*100:0,e[i.orientation==="horizontal"?"left":"bottom"]=t+"%",this.handle.stop(1,1)[u?"animate":"css"](e,r.animate),f==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[u?"animate":"css"]({width:t+"%"},r.animate),f==="max"&&this.orientation==="horizontal"&&this.range[u?"animate":"css"]({width:100-t+"%"},{queue:!1,duration:r.animate}),f==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[u?"animate":"css"]({height:t+"%"},r.animate),f==="max"&&this.orientation==="vertical"&&this.range[u?"animate":"css"]({height:100-t+"%"},{queue:!1,duration:r.animate}))}});n.extend(n.ui.slider,{version:"1.8.16"})})(jQuery);