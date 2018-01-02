(function(n,t){n.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=n("<div class='ui-progressbar-value ui-widget-header ui-corner-left'><\/div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.valueDiv.remove();n.Widget.prototype.destroy.apply(this,arguments)},value:function(n){return n===t?this._value():(this._setOption("value",n),this)},_setOption:function(t,i){t==="value"&&(this.options.value=i,this._refreshValue(),this._value()===this.options.max&&this._trigger("complete"));n.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var n=this.options.value;return typeof n!="number"&&(n=0),Math.min(this.options.max,Math.max(this.min,n))},_percentage:function(){return 100*this._value()/this.options.max},_refreshValue:function(){var n=this.value(),t=this._percentage();this.oldValue!==n&&(this.oldValue=n,this._trigger("change"));this.valueDiv.toggleClass("ui-corner-right",n===this.options.max).width(t.toFixed(0)+"%");this.element.attr("aria-valuenow",n)}});n.extend(n.ui.progressbar,{version:"@VERSION"})})(jQuery);