(function(n){n.jqplot.CategoryAxisRenderer=function(){n.jqplot.LinearAxisRenderer.call(this);this.sortMergedLabels=!1};n.jqplot.CategoryAxisRenderer.prototype=new n.jqplot.LinearAxisRenderer;n.jqplot.CategoryAxisRenderer.prototype.constructor=n.jqplot.CategoryAxisRenderer;n.jqplot.CategoryAxisRenderer.prototype.init=function(t){var i,f,e,u,r;for(this.groups=1,this.groupLabels=[],this._groupLabels=[],this._grouped=!1,this._barsPerGroup=null,n.extend(!0,this,{tickOptions:{formatString:"%d"}},t),i=this._dataBounds,f=0;f<this._series.length;f++)for(e=this._series[f],e.groups&&(this.groups=e.groups),u=e.data,r=0;r<u.length;r++)this.name=="xaxis"||this.name=="x2axis"?((u[r][0]<i.min||i.min==null)&&(i.min=u[r][0]),(u[r][0]>i.max||i.max==null)&&(i.max=u[r][0])):((u[r][1]<i.min||i.min==null)&&(i.min=u[r][1]),(u[r][1]>i.max||i.max==null)&&(i.max=u[r][1]));this.groupLabels.length&&(this.groups=this.groupLabels.length)};n.jqplot.CategoryAxisRenderer.prototype.createTicks=function(){var tt=this._ticks,e=this.ticks,w=this.name,it=this._dataBounds,b,k,v,o,u,r,y,l,i,t;if(e.length){if(this.groups>1&&!this._grouped){var c=e.length,s=parseInt(c/this.groups,10),d=0;for(i=s;i<c;i+=s)e.splice(i+d,0," "),d++;this._grouped=!0}for(this.min=.5,this.max=e.length+.5,l=this.max-this.min,this.numberTicks=2*e.length+1,i=0;i<e.length;i++)o=this.min+2*i*l/(this.numberTicks-1),t=new this.tickRenderer(this.tickOptions),t.showLabel=!1,t.showMark=!0,t.setTick(o,this.name),this._ticks.push(t),t=new this.tickRenderer(this.tickOptions),t.label=e[i],t.showLabel=!0,t.showMark=!1,t.showGridline=!1,t.setTick(o+.5,this.name),this._ticks.push(t);t=new this.tickRenderer(this.tickOptions);t.showLabel=!1;t.showMark=!0;t.setTick(o+1,this.name);this._ticks.push(t)}else{b=w=="xaxis"||w=="x2axis"?this._plotDimensions.width:this._plotDimensions.height;this.min!=null&&this.max!=null&&this.numberTicks!=null&&(this.tickInterval=null);this.min!=null&&this.max!=null&&this.tickInterval!=null&&parseInt((this.max-this.min)/this.tickInterval,10)!=(this.max-this.min)/this.tickInterval&&(this.tickInterval=null);var f=[],a=0,k=.5,v,h,g=!1;for(i=0;i<this._series.length;i++)for(u=this._series[i],r=0;r<u.data.length;r++)h=this.name=="xaxis"||this.name=="x2axis"?u.data[r][0]:u.data[r][1],n.inArray(h,f)==-1&&(g=!0,a+=1,f.push(h));for(g&&this.sortMergedLabels&&f.sort(function(n,t){return n-t}),this.ticks=f,i=0;i<this._series.length;i++)for(u=this._series[i],r=0;r<u.data.length;r++)h=this.name=="xaxis"||this.name=="x2axis"?u.data[r][0]:u.data[r][1],y=n.inArray(h,f)+1,this.name=="xaxis"||this.name=="x2axis"?u.data[r][0]=y:u.data[r][1]=y;if(this.groups>1&&!this._grouped){var c=f.length,s=parseInt(c/this.groups,10),d=0;for(i=s;i<c;i+=s+1)f[i]=" ";this._grouped=!0}v=a+.5;this.numberTicks==null&&(this.numberTicks=2*a+1);l=v-k;this.min=k;this.max=v;var p=0,nt=parseInt(3+b/20,10),s=parseInt(a/nt,10);for(this.tickInterval==null&&(this.tickInterval=l/(this.numberTicks-1)),i=0;i<this.numberTicks;i++)o=this.min+i*this.tickInterval,t=new this.tickRenderer(this.tickOptions),i/2==parseInt(i/2,10)?(t.showLabel=!1,t.showMark=!0):(s>0&&p<s?(t.showLabel=!1,p+=1):(t.showLabel=!0,p=0),t.label=t.formatter(t.formatString,f[(i-1)/2]),t.showMark=!1,t.showGridline=!1),this.showTicks?this.showTickMarks||(t.showMark=!1):(t.showLabel=!1,t.showMark=!1),t.setTick(o,this.name),this._ticks.push(t)}};n.jqplot.CategoryAxisRenderer.prototype.draw=function(t){var e,f,u,r,i;if(this.show){if(this.renderer.createTicks.call(this),e=0,this._elem&&this._elem.empty(),this._elem=this._elem||n('<div class="jqplot-axis jqplot-'+this.name+'" style="position:absolute;"><\/div>'),this.name=="xaxis"||this.name=="x2axis"?this._elem.width(this._plotDimensions.width):this._elem.height(this._plotDimensions.height),this.labelOptions.axis=this.name,this._label=new this.labelRenderer(this.labelOptions),this._label.show&&(i=this._label.draw(t),i.appendTo(this._elem)),this.showTicks)for(f=this._ticks,r=0;r<f.length;r++)u=f[r],u.showLabel&&(!u.isMinorTick||this.showMinorTicks)&&(i=u.draw(t),i.appendTo(this._elem));for(this._groupLabels=[],r=0;r<this.groupLabels.length;r++)i=n('<div style="position:absolute;" class="jqplot-'+this.name+'-groupLabel"><\/div>'),i.html(this.groupLabels[r]),this._groupLabels.push(i),i.appendTo(this._elem)}return this._elem};n.jqplot.CategoryAxisRenderer.prototype.set=function(){var t=0,u,f=0,o=0,s=this._label==null?!1:this._label.show,h,e,r,i,c;if(this.show&&this.showTicks){for(h=this._ticks,i=0;i<h.length;i++)e=h[i],e.showLabel&&(!e.isMinorTick||this.showMinorTicks)&&(u=this.name=="xaxis"||this.name=="x2axis"?e._elem.outerHeight(!0):e._elem.outerWidth(!0),u>t&&(t=u));for(r=0,i=0;i<this._groupLabels.length;i++)c=this._groupLabels[i],u=this.name=="xaxis"||this.name=="x2axis"?c.outerHeight(!0):c.outerWidth(!0),u>r&&(r=u);s&&(f=this._label._elem.outerWidth(!0),o=this._label._elem.outerHeight(!0));this.name=="xaxis"?(t+=r+o,this._elem.css({height:t+"px",left:"0px",bottom:"0px"})):this.name=="x2axis"?(t+=r+o,this._elem.css({height:t+"px",left:"0px",top:"0px"})):this.name=="yaxis"?(t+=r+f,this._elem.css({width:t+"px",left:"0px",top:"0px"}),s&&this._label.constructor==n.jqplot.AxisLabelRenderer&&this._label._elem.css("width",f+"px")):(t+=r+f,this._elem.css({width:t+"px",right:"0px",top:"0px"}),s&&this._label.constructor==n.jqplot.AxisLabelRenderer&&this._label._elem.css("width",f+"px"))}};n.jqplot.CategoryAxisRenderer.prototype.pack=function(t,r){var p=this._ticks,d=this.max,y=this.min,g=r.max,w=r.min,nt=this._label==null?!1:this._label.show,h,c,tt,f,b,k,o,it,a,s,v,e,u;for(var l in t)this._elem.css(l,t[l]);if(this._offsets=r,h=g-w,c=d-y,this.p2u=function(n){return(n-w)*c/h+y},this.u2p=function(n){return(n-y)*h/c+w},this.name=="xaxis"||this.name=="x2axis"?(this.series_u2p=function(n){return(n-y)*h/c},this.series_p2u=function(n){return n*c/h+y}):(this.series_u2p=function(n){return(n-d)*h/c},this.series_p2u=function(n){return n*c/h+d}),this.show)if(this.name=="xaxis"||this.name=="x2axis"){for(i=0;i<p.length;i++)if(u=p[i],u.show&&u.showLabel){if(u.constructor==n.jqplot.CanvasAxisTickRenderer&&u.angle){b=this.name=="xaxis"?1:-1;switch(u.labelPosition){case"auto":f=b*u.angle<0?-u.getWidth()+u._textRenderer.height*Math.sin(-u._textRenderer.angle)/2:-u._textRenderer.height*Math.sin(u._textRenderer.angle)/2;break;case"end":f=-u.getWidth()+u._textRenderer.height*Math.sin(-u._textRenderer.angle)/2;break;case"start":f=-u._textRenderer.height*Math.sin(u._textRenderer.angle)/2;break;case"middle":f=-u.getWidth()/2+u._textRenderer.height*Math.sin(-u._textRenderer.angle)/2;break;default:f=-u.getWidth()/2+u._textRenderer.height*Math.sin(-u._textRenderer.angle)/2}}else f=-u.getWidth()/2;k=this.u2p(u.value)+f+"px";u._elem.css("left",k);u.pack()}for(o=["bottom",0],nt&&(tt=this._label._elem.outerWidth(!0),this._label._elem.css("left",w+h/2-tt/2+"px"),this.name=="xaxis"?(this._label._elem.css("bottom","0px"),o=["bottom",this._label._elem.outerHeight(!0)]):(this._label._elem.css("top","0px"),o=["top",this._label._elem.outerHeight(!0)]),this._label.pack()),a=parseInt(this._ticks.length/this.groups,10),i=0;i<this._groupLabels.length;i++){for(s=0,v=0,e=i*a;e<=(i+1)*a;e++)this._ticks[e]._elem&&this._ticks[e].label!=" "&&(u=this._ticks[e]._elem,l=u.position(),s+=l.left+u.outerWidth(!0)/2,v++);s=s/v;this._groupLabels[i].css({left:s-this._groupLabels[i].outerWidth(!0)/2});this._groupLabels[i].css(o[0],o[1])}}else{for(i=0;i<p.length;i++)if(u=p[i],u.show&&u.showLabel){if(u.constructor==n.jqplot.CanvasAxisTickRenderer&&u.angle){b=this.name=="yaxis"?1:-1;switch(u.labelPosition){case"auto":case"end":f=b*u.angle<0?-u._textRenderer.height*Math.cos(-u._textRenderer.angle)/2:-u.getHeight()+u._textRenderer.height*Math.cos(u._textRenderer.angle)/2;break;case"start":f=u.angle>0?-u._textRenderer.height*Math.cos(-u._textRenderer.angle)/2:-u.getHeight()+u._textRenderer.height*Math.cos(u._textRenderer.angle)/2;break;case"middle":f=-u.getHeight()/2;break;default:f=-u.getHeight()/2}}else f=-u.getHeight()/2;k=this.u2p(u.value)+f+"px";u._elem.css("top",k);u.pack()}for(o=["left",0],nt&&(it=this._label._elem.outerHeight(!0),this._label._elem.css("top",g-h/2-it/2+"px"),this.name=="yaxis"?(this._label._elem.css("left","0px"),o=["left",this._label._elem.outerWidth(!0)]):(this._label._elem.css("right","0px"),o=["right",this._label._elem.outerWidth(!0)]),this._label.pack()),a=parseInt(this._ticks.length/this.groups,10),i=0;i<this._groupLabels.length;i++){for(s=0,v=0,e=i*a;e<=(i+1)*a;e++)this._ticks[e]._elem&&this._ticks[e].label!=" "&&(u=this._ticks[e]._elem,l=u.position(),s+=l.top+u.outerHeight()/2,v++);s=s/v;this._groupLabels[i].css({top:s-this._groupLabels[i].outerHeight()/2});this._groupLabels[i].css(o[0],o[1])}}}})(jQuery);