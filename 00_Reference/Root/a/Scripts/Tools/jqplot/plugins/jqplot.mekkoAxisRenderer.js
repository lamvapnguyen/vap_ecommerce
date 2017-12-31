(function(n){n.jqplot.MekkoAxisRenderer=function(){};n.jqplot.MekkoAxisRenderer.prototype.init=function(t){var r,i;if(this.tickMode,this.barLabelRenderer=n.jqplot.AxisLabelRenderer,this.barLabels=this.barLabels||[],this.barLabelOptions={},this.tickOptions=n.extend(!0,{showGridline:!1},this.tickOptions),this._barLabels=[],n.extend(!0,this,t),this.name=="yaxis"&&(this.tickOptions.formatString=this.tickOptions.formatString||"%d%"),r=this._dataBounds,r.min=0,this.name=="yaxis"||this.name=="y2axis")r.max=100,this.tickMode="even";else if(this.name=="xaxis")for(this.tickMode=this.tickMode==null?"bar":this.tickMode,i=0;i<this._series.length;i++)r.max+=this._series[i]._sumy;else if(this.name=="x2axis")for(this.tickMode=this.tickMode==null?"even":this.tickMode,i=0;i<this._series.length;i++)r.max+=this._series[i]._sumy};n.jqplot.MekkoAxisRenderer.prototype.draw=function(t){var e,f,u,i,r;if(this.show){if(this.renderer.createTicks.call(this),e=0,this._elem=n('<div class="jqplot-axis jqplot-'+this.name+'" style="position:absolute;"><\/div>'),this.name=="xaxis"||this.name=="x2axis"?this._elem.width(this._plotDimensions.width):this._elem.height(this._plotDimensions.height),this.labelOptions.axis=this.name,this._label=new this.labelRenderer(this.labelOptions),this._label.show&&(r=this._label.draw(t),r.appendTo(this._elem)),this.showTicks)for(f=this._ticks,i=0;i<f.length;i++)u=f[i],u.showLabel&&(!u.isMinorTick||this.showMinorTicks)&&(r=u.draw(t),r.appendTo(this._elem));for(i=0;i<this.barLabels.length;i++)this.barLabelOptions.axis=this.name,this.barLabelOptions.label=this.barLabels[i],this._barLabels.push(new this.barLabelRenderer(this.barLabelOptions)),this.tickMode!="bar"&&(this._barLabels[i].show=!1),this._barLabels[i].show&&(r=this._barLabels[i].draw(t),r.removeClass("jqplot-"+this.name+"-label"),r.addClass("jqplot-"+this.name+"-tick"),r.addClass("jqplot-mekko-barLabel"),r.appendTo(this._elem))}return this._elem};n.jqplot.MekkoAxisRenderer.prototype.reset=function(){this.min=this._min;this.max=this._max;this.tickInterval=this._tickInterval;this.numberTicks=this._numberTicks};n.jqplot.MekkoAxisRenderer.prototype.set=function(){var t=0,f,i=0,e=0,o=this._label==null?!1:this._label.show,s,u,r;if(this.show&&this.showTicks){for(s=this._ticks,u=0;u<s.length;u++)r=s[u],r.showLabel&&(!r.isMinorTick||this.showMinorTicks)&&(f=this.name=="xaxis"||this.name=="x2axis"?r._elem.outerHeight(!0):r._elem.outerWidth(!0),f>t&&(t=f));o&&(i=this._label._elem.outerWidth(!0),e=this._label._elem.outerHeight(!0));this.name=="xaxis"?(t=t+e,this._elem.css({height:t+"px",left:"0px",bottom:"0px"})):this.name=="x2axis"?(t=t+e,this._elem.css({height:t+"px",left:"0px",top:"0px"})):this.name=="yaxis"?(t=t+i,this._elem.css({width:t+"px",left:"0px",top:"0px"}),o&&this._label.constructor==n.jqplot.AxisLabelRenderer&&this._label._elem.css("width",i+"px")):(t=t+i,this._elem.css({width:t+"px",right:"0px",top:"0px"}),o&&this._label.constructor==n.jqplot.AxisLabelRenderer&&this._label._elem.css("width",i+"px"))}};n.jqplot.MekkoAxisRenderer.prototype.createTicks=function(){var b=this._ticks,s=this.ticks,y=this.name,a=this._dataBounds,v,f,h,c,r,n,l,e,u,p,o,i,t,w;if(s.length){for(t=0;t<s.length;t++)r=s[t],n=new this.tickRenderer(this.tickOptions),r.constructor==Array?(n.value=r[0],n.label=r[1],this.showTicks?this.showTickMarks||(n.showMark=!1):(n.showLabel=!1,n.showMark=!1),n.setTick(r[0],this.name),this._ticks.push(n)):(n.value=r,this.showTicks?this.showTickMarks||(n.showMark=!1):(n.showLabel=!1,n.showMark=!1),n.setTick(r,this.name),this._ticks.push(n));this.numberTicks=s.length;this.min=this._ticks[0].value;this.max=this._ticks[this.numberTicks-1].value;this.tickInterval=(this.max-this.min)/(this.numberTicks-1)}else if(v=y=="xaxis"||y=="x2axis"?this._plotDimensions.width:this._plotDimensions.height,this.min!=null&&this.max!=null&&this.numberTicks!=null&&(this.tickInterval=null),f=this.min!=null?this.min:a.min,h=this.max!=null?this.max:a.max,f==h&&(l=.05,f>0&&(l=Math.max(Math.log(f)/Math.LN10,.05)),f-=l,h+=l),e=h-f,i=[3,5,6,11,21],this.name=="yaxis"||this.name=="y2axis"){if(this.min=0,this.max=100,this.numberTicks)this.tickInterval=e/(this.numberTicks-1);else if(this.tickInterval)this.numberTicks=3+Math.ceil(e/this.tickInterval);else{for(u=2+Math.ceil((v-(this.tickSpacing-1))/this.tickSpacing),t=0;t<i.length;t++)if(o=u/i[t],o==1){this.numberTicks=i[t];break}else if(o>1){p=o;continue}else if(o<1)if(Math.abs(p-1)<Math.abs(o-1)){this.numberTicks=i[t-1];break}else{this.numberTicks=i[t];break}else t==i.length-1&&(this.numberTicks=i[t]);this.tickInterval=e/(this.numberTicks-1)}for(t=0;t<this.numberTicks;t++)c=this.min+t*this.tickInterval,n=new this.tickRenderer(this.tickOptions),this.showTicks?this.showTickMarks||(n.showMark=!1):(n.showLabel=!1,n.showMark=!1),n.setTick(c,this.name),this._ticks.push(n)}else if(this.tickMode=="bar"){for(this.min=0,this.numberTicks=this._series.length+1,n=new this.tickRenderer(this.tickOptions),this.showTicks?this.showTickMarks||(n.showMark=!1):(n.showLabel=!1,n.showMark=!1),n.setTick(0,this.name),this._ticks.push(n),u=0,t=1;t<this.numberTicks;t++)u+=this._series[t-1]._sumy,n=new this.tickRenderer(this.tickOptions),this.showTicks?this.showTickMarks||(n.showMark=!1):(n.showLabel=!1,n.showMark=!1),n.setTick(u,this.name),this._ticks.push(n);this.max=this.max||u;this.max>u&&(n=new this.tickRenderer(this.tickOptions),this.showTicks?this.showTickMarks||(n.showMark=!1):(n.showLabel=!1,n.showMark=!1),n.setTick(this.max,this.name),this._ticks.push(n))}else if(this.tickMode=="even")for(this.min=0,this.max=this.max||a.max,w=2+Math.ceil((v-(this.tickSpacing-1))/this.tickSpacing),e=this.max-this.min,this.numberTicks=w,this.tickInterval=e/(this.numberTicks-1),t=0;t<this.numberTicks;t++)c=this.min+t*this.tickInterval,n=new this.tickRenderer(this.tickOptions),this.showTicks?this.showTickMarks||(n.showMark=!1):(n.showLabel=!1,n.showMark=!1),n.setTick(c,this.name),this._ticks.push(n)};n.jqplot.MekkoAxisRenderer.prototype.pack=function(t,r){var c=this._ticks,p=this.max,h=this.min,b=r.max,l=r.min,k=this._label==null?!1:this._label.show,w,e,o,y,s,d,g,u,f,a,v,nt;for(w in t)this._elem.css(w,t[w]);if(this._offsets=r,e=b-l,o=p-h,this.p2u=function(n){return(n-l)*o/e+h},this.u2p=function(n){return(n-h)*e/o+l},this.name=="xaxis"||this.name=="x2axis"?(this.series_u2p=function(n){return(n-h)*e/o},this.series_p2u=function(n){return n*o/e+h}):(this.series_u2p=function(n){return(n-p)*e/o},this.series_p2u=function(n){return n*o/e+p}),this.show)if(this.name=="xaxis"||this.name=="x2axis"){for(i=0;i<c.length;i++)if(u=c[i],u.show&&u.showLabel){if(u.constructor==n.jqplot.CanvasAxisTickRenderer&&u.angle){a=this.name=="xaxis"?1:-1;switch(u.labelPosition){case"auto":f=a*u.angle<0?-u.getWidth()+u._textRenderer.height*Math.sin(-u._textRenderer.angle)/2:-u._textRenderer.height*Math.sin(u._textRenderer.angle)/2;break;case"end":f=-u.getWidth()+u._textRenderer.height*Math.sin(-u._textRenderer.angle)/2;break;case"start":f=-u._textRenderer.height*Math.sin(u._textRenderer.angle)/2;break;case"middle":f=-u.getWidth()/2+u._textRenderer.height*Math.sin(-u._textRenderer.angle)/2;break;default:f=-u.getWidth()/2+u._textRenderer.height*Math.sin(-u._textRenderer.angle)/2}}else f=-u.getWidth()/2;v=this.u2p(u.value)+f+"px";u._elem.css("left",v);u.pack()}for(k&&(y=this._label._elem.outerWidth(!0),this._label._elem.css("left",l+e/2-y/2+"px"),this.name=="xaxis"?this._label._elem.css("bottom","0px"):this._label._elem.css("top","0px"),this._label.pack()),i=0;i<this.barLabels.length;i++)s=this._barLabels[i],s.show&&(y=s.getWidth(),d=this._ticks[i].getLeft()+this._ticks[i].getWidth(),g=this._ticks[i+1].getLeft(),s._elem.css("left",(g+d-y)/2+"px"),s._elem.css("top",this._ticks[i]._elem.css("top")),s.pack())}else{for(i=0;i<c.length;i++)if(u=c[i],u.show&&u.showLabel){if(u.constructor==n.jqplot.CanvasAxisTickRenderer&&u.angle){a=this.name=="yaxis"?1:-1;switch(u.labelPosition){case"auto":case"end":f=a*u.angle<0?-u._textRenderer.height*Math.cos(-u._textRenderer.angle)/2:-u.getHeight()+u._textRenderer.height*Math.cos(u._textRenderer.angle)/2;break;case"start":f=u.angle>0?-u._textRenderer.height*Math.cos(-u._textRenderer.angle)/2:-u.getHeight()+u._textRenderer.height*Math.cos(u._textRenderer.angle)/2;break;case"middle":f=-u.getHeight()/2;break;default:f=-u.getHeight()/2}}else f=-u.getHeight()/2;v=this.u2p(u.value)+f+"px";u._elem.css("top",v);u.pack()}k&&(nt=this._label._elem.outerHeight(!0),this._label._elem.css("top",b-e/2-nt/2+"px"),this.name=="yaxis"?this._label._elem.css("left","0px"):this._label._elem.css("right","0px"),this._label.pack())}}})(jQuery);