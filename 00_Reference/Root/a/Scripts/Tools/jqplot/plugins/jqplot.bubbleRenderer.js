(function(n){function r(n,t,i){n.plugins.bubbleRenderer.highlightLabelCanvas.empty();var u=n.series[t],e=n.plugins.bubbleRenderer.highlightCanvas,r=e._ctx;r.clearRect(0,0,r.canvas.width,r.canvas.height);u._highlightedPoint=i;n.plugins.bubbleRenderer.highlightedSeriesIndex=t;var f=u.highlightColorGenerator.get(i),o=u.gridData[i][0],s=u.gridData[i][1],h=u.gridData[i][2];r.save();r.fillStyle=f;r.strokeStyle=f;r.lineWidth=1;r.beginPath();r.arc(o,s,h,0,2*Math.PI,0);r.closePath();r.fill();r.restore();u.labels[i]&&(n.plugins.bubbleRenderer.highlightLabel=u.labels[i].clone(),n.plugins.bubbleRenderer.highlightLabel.appendTo(n.plugins.bubbleRenderer.highlightLabelCanvas),n.plugins.bubbleRenderer.highlightLabel.addClass("jqplot-bubble-label-highlight"))}function t(n){var i=n.plugins.bubbleRenderer.highlightCanvas,r=n.plugins.bubbleRenderer.highlightedSeriesIndex,t;for(n.plugins.bubbleRenderer.highlightLabelCanvas.empty(),i._ctx.clearRect(0,0,i._ctx.canvas.width,i._ctx.canvas.height),t=0;t<n.series.length;t++)n.series[t]._highlightedPoint=null;n.plugins.bubbleRenderer.highlightedSeriesIndex=null;n.target.trigger("jqplotDataUnhighlight")}function u(n,i,u,f,e){var s;if(f){var c=f.seriesIndex,l=f.pointIndex,o=[c,l,f.data,e.series[c].gridData[l][2]],h=jQuery.Event("jqplotDataMouseOver");h.pageX=n.pageX;h.pageY=n.pageY;e.target.trigger(h,o);!e.series[o[0]].highlightMouseOver||o[0]==e.plugins.bubbleRenderer.highlightedSeriesIndex&&o[1]==e.series[o[0]]._highlightedPoint||(s=jQuery.Event("jqplotDataHighlight"),s.pageX=n.pageX,s.pageY=n.pageY,e.target.trigger(s,o),r(e,o[0],o[1]))}else f==null&&t(e)}function f(n,i,u,f,e){var s;if(f){var h=f.seriesIndex,c=f.pointIndex,o=[h,c,f.data,e.series[h].gridData[c][2]];!e.series[o[0]].highlightMouseDown||o[0]==e.plugins.bubbleRenderer.highlightedSeriesIndex&&o[1]==e.series[o[0]]._highlightedPoint||(s=jQuery.Event("jqplotDataHighlight"),s.pageX=n.pageX,s.pageY=n.pageY,e.target.trigger(s,o),r(e,o[0],o[1]))}else f==null&&t(e)}function e(n,i,r,u,f){var e=f.plugins.bubbleRenderer.highlightedSeriesIndex;e!=null&&f.series[e].highlightMouseDown&&t(f)}function o(n,t,i,r,u){if(r){var e=r.seriesIndex,o=r.pointIndex,s=[e,o,r.data,u.series[e].gridData[o][2]],f=jQuery.Event("jqplotDataClick");f.pageX=n.pageX;f.pageY=n.pageY;u.target.trigger(f,s)}}function s(n,i,r,u,f){var e;if(u){var o=u.seriesIndex,s=u.pointIndex,c=[o,s,u.data,f.series[o].gridData[s][2]],h=f.plugins.bubbleRenderer.highlightedSeriesIndex;h!=null&&f.series[h].highlightMouseDown&&t(f);e=jQuery.Event("jqplotDataRightClick");e.pageX=n.pageX;e.pageY=n.pageY;f.target.trigger(e,c)}}function h(){var f;this.plugins.bubbleRenderer={highlightedSeriesIndex:null};this.plugins.bubbleRenderer.highlightCanvas=new n.jqplot.GenericCanvas;this.plugins.bubbleRenderer.highlightLabel=null;this.plugins.bubbleRenderer.highlightLabelCanvas=n('<div style="position:absolute;"><\/div>');var t=this._gridPadding.top,i=this._gridPadding.left,r=this._plotDimensions.width-this._gridPadding.left-this._gridPadding.right,u=this._plotDimensions.height-this._gridPadding.top-this._gridPadding.bottom;this.plugins.bubbleRenderer.highlightLabelCanvas.css({top:t,left:i,width:r+"px",height:u+"px"});this.eventCanvas._elem.before(this.plugins.bubbleRenderer.highlightCanvas.createElement(this._gridPadding,"jqplot-bubbleRenderer-highlight-canvas",this._plotDimensions));this.eventCanvas._elem.before(this.plugins.bubbleRenderer.highlightLabelCanvas);f=this.plugins.bubbleRenderer.highlightCanvas.setContext()}function c(t,i,r){var u,f;if(r=r||{},r.axesDefaults=r.axesDefaults||{},r.seriesDefaults=r.seriesDefaults||{},u=!1,r.seriesDefaults.renderer==n.jqplot.BubbleRenderer)u=!0;else if(r.series)for(f=0;f<r.series.length;f++)r.series[f].renderer==n.jqplot.BubbleRenderer&&(u=!0);u&&(r.axesDefaults.renderer=n.jqplot.BubbleAxisRenderer,r.sortData=!1)}var i=function(n){return Math.max.apply(Math,n)},l=function(n){return Math.min.apply(Math,n)};n.jqplot.BubbleRenderer=function(){n.jqplot.LineRenderer.call(this)};n.jqplot.BubbleRenderer.prototype=new n.jqplot.LineRenderer;n.jqplot.BubbleRenderer.prototype.constructor=n.jqplot.BubbleRenderer;n.jqplot.BubbleRenderer.prototype.init=function(t,i){var l,v,c,a,p;for(this.varyBubbleColors=!0,this.autoscaleBubbles=!0,this.autoscaleMultiplier=1,this.autoscalePointsFactor=-.07,this.escapeHtml=!0,this.highlightMouseOver=!0,this.highlightMouseDown=!1,this.highlightColors=[],this.bubbleAlpha=1,this.highlightAlpha=null,this.bubbleGradients=!1,this.showLabels=!0,this.radii=[],this.maxRadius=0,this._highlightedPoint=null,this.labels=[],this.bubbleCanvases=[],t.highlightMouseDown&&t.highlightMouseOver==null&&(t.highlightMouseOver=!1),n.extend(!0,this,t),this.highlightAlpha==null&&(this.highlightAlpha=this.bubbleAlpha,this.bubbleGradients&&(this.highlightAlpha=.35)),this.autoscaleMultiplier=this.autoscaleMultiplier*Math.pow(this.data.length,this.autoscalePointsFactor),this._highlightedPoint=null,c=0;c<this.data.length;c++)l=null,v=this.data[c],this.maxRadius=Math.max(this.maxRadius,v[2]),v[3]&&typeof v[3]=="object"&&(l=v[3].color),l==null&&this.seriesColors[c]!=null&&(l=this.seriesColors[c]),l&&this.bubbleAlpha<1&&(comps=n.jqplot.getColorComponents(l),l="rgba("+comps[0]+", "+comps[1]+", "+comps[2]+", "+this.bubbleAlpha+")"),l&&(this.seriesColors[c]=l);if(this.varyBubbleColors||(this.seriesColors=[this.color]),this.colorGenerator=new n.jqplot.ColorGenerator(this.seriesColors),this.highlightColors.length==0)for(c=0;c<this.seriesColors.length;c++){var y=n.jqplot.getColorComponents(this.seriesColors[c]),r=[y[0],y[1],y[2]],w=r[0]+r[1]+r[2];for(a=0;a<3;a++)r[a]=w>570?r[a]*.8:r[a]+.3*(255-r[a]),r[a]=parseInt(r[a],10);this.highlightColors.push("rgba("+r[0]+","+r[1]+","+r[2]+", "+this.highlightAlpha+")")}this.highlightColorGenerator=new n.jqplot.ColorGenerator(this.highlightColors);p={fill:!0,isarc:!0,angle:this.shadowAngle,alpha:this.shadowAlpha,closePath:!0};this.renderer.shadowRenderer.init(p);this.canvas=new n.jqplot.DivCanvas;this.canvas._plotDimensions=this._plotDimensions;i.eventListenerHooks.addOnce("jqplotMouseMove",u);i.eventListenerHooks.addOnce("jqplotMouseDown",f);i.eventListenerHooks.addOnce("jqplotMouseUp",e);i.eventListenerHooks.addOnce("jqplotClick",o);i.eventListenerHooks.addOnce("jqplotRightClick",s);i.postDrawHooks.addOnce(h)};n.jqplot.BubbleRenderer.prototype.setGridData=function(n){var c=this._xaxis.series_u2p,l=this._yaxis.series_u2p,r=this._plotData,u,f,e,o,s,h,t;for(this.gridData=[],u=[],this.radii=[],f=Math.min(n._height,n._width),t=0;t<this.data.length;t++)r[t]!=null&&(this.gridData.push([c.call(this._xaxis,r[t][0]),l.call(this._yaxis,r[t][1]),r[t][2]]),this.radii.push([t,r[t][2]]),u.push(r[t][2]));if(s=this.maxRadius=i(u),h=this.gridData.length,this.autoscaleBubbles)for(t=0;t<h;t++)o=u[t]/s,e=this.autoscaleMultiplier*f/6,this.gridData[t][2]=e*o;this.radii.sort(function(n,t){return t[1]-n[1]})};n.jqplot.BubbleRenderer.prototype.makeGridData=function(n,t){var l=this._xaxis.series_u2p,a=this._yaxis.series_u2p,u=[],f=[],e,o,s,h,c,r;for(this.radii=[],e=Math.min(t._height,t._width),r=0;r<n.length;r++)n[r]!=null&&(u.push([l.call(this._xaxis,n[r][0]),a.call(this._yaxis,n[r][1]),n[r][2]]),f.push(n[r][2]),this.radii.push([r,n[r][2]]));if(h=this.maxRadius=i(f),c=this.gridData.length,this.autoscaleBubbles)for(r=0;r<c;r++)s=f[r]/h,o=this.autoscaleMultiplier*e/6,u[r][2]=o*s;return this.radii.sort(function(n,t){return t[1]-n[1]}),u};n.jqplot.BubbleRenderer.prototype.draw=function(t,i,r){var s,v,o,h,c,l;for(this.plugins.pointLabels&&(this.plugins.pointLabels.show=!1),s=r!=undefined?r:{},v=s.shadow!=undefined?s.shadow:this.shadow,this.canvas._elem.empty(),o=0;o<this.radii.length;o++){var u=this.radii[o][0],f=null,a=null,g=tel=null,e=this.data[u],i=this.gridData[u];e[3]&&(typeof e[3]=="object"?f=e[3].label:typeof e[3]=="string"&&(f=e[3]));a=this.colorGenerator.get(u);h=i[2];this.shadow&&(c=(.7+i[2]/40).toFixed(1),l=1+Math.ceil(i[2]/15),h+=c*l);this.bubbleCanvases[u]=new n.jqplot.BubbleCanvas;this.canvas._elem.append(this.bubbleCanvases[u].createElement(i[0],i[1],h));this.bubbleCanvases[u].setContext();var t=this.bubbleCanvases[u]._ctx,y=t.canvas.width/2,p=t.canvas.height/2;if(this.shadow&&this.renderer.shadowRenderer.draw(t,[y,p,i[2],0,2*Math.PI],{offset:c,depth:l}),this.bubbleCanvases[u].draw(i[2],a,this.bubbleGradients,this.shadowAngle/180*Math.PI),f&&this.showLabels){tel=n('<div style="position:absolute;" class="jqplot-bubble-label"><\/div>');this.escapeHtml?tel.text(f):tel.html(f);this.canvas._elem.append(tel);var w=n(tel).outerHeight(),b=n(tel).outerWidth(),k=i[1]-.5*w,d=i[0]-.5*b;tel.css({top:k,left:d});this.labels[u]=n(tel)}}};n.jqplot.DivCanvas=function(){n.jqplot.ElemContainer.call(this);this._ctx};n.jqplot.DivCanvas.prototype=new n.jqplot.ElemContainer;n.jqplot.DivCanvas.prototype.constructor=n.jqplot.DivCanvas;n.jqplot.DivCanvas.prototype.createElement=function(t,i,r){var u,f,e,o;return this._offsets=t,u="jqplot-DivCanvas",i!=undefined&&(u=i),f=this._elem?this._elem.get(0):document.createElement("div"),r!=undefined&&(this._plotDimensions=r),e=this._plotDimensions.width-this._offsets.left-this._offsets.right+"px",o=this._plotDimensions.height-this._offsets.top-this._offsets.bottom+"px",this._elem=n(f),this._elem.css({position:"absolute",width:e,height:o,left:this._offsets.left,top:this._offsets.top}),this._elem.addClass(u),this._elem};n.jqplot.DivCanvas.prototype.setContext=function(){return this._ctx={canvas:{width:0,height:0},clearRect:function(){return null}},this._ctx};n.jqplot.BubbleCanvas=function(){n.jqplot.ElemContainer.call(this);this._ctx};n.jqplot.BubbleCanvas.prototype=new n.jqplot.ElemContainer;n.jqplot.BubbleCanvas.prototype.constructor=n.jqplot.BubbleCanvas;n.jqplot.BubbleCanvas.prototype.createElement=function(t,i,r){var u,f,e;return u=this._elem?this._elem.get(0):document.createElement("canvas"),u.width=r!=null?2*r:u.width,u.height=r!=null?2*r:u.height,this._elem=n(u),f=t!=null&&r!=null?t-r:this._elem.css("left"),e=i!=null&&r!=null?i-r:this._elem.css("top"),this._elem.css({position:"absolute",left:f,top:e}),this._elem.addClass("jqplot-bubble-point"),n.browser.msie&&(window.G_vmlCanvasManager.init_(document),u=window.G_vmlCanvasManager.initElement(u)),this._elem};n.jqplot.BubbleCanvas.prototype.draw=function(t,i,r,u){var f=this._ctx,s=f.canvas.width/2,h=f.canvas.height/2,l;if(f.save(),r&&!n.browser.msie){t=t*1.04;var e=n.jqplot.getColorComponents(i),a="rgba("+Math.round(e[0]+.8*(255-e[0]))+", "+Math.round(e[1]+.8*(255-e[1]))+", "+Math.round(e[2]+.8*(255-e[2]))+", "+e[3]+")",c="rgba("+e[0]+", "+e[1]+", "+e[2]+", 0)",v=.35*t,y=s-Math.cos(u)*.33*t,p=h-Math.sin(u)*.33*t,o=f.createRadialGradient(y,p,v,s,h,t);o.addColorStop(0,a);o.addColorStop(.93,i);o.addColorStop(.96,c);o.addColorStop(1,c);f.fillStyle=o;f.fillRect(0,0,f.canvas.width,f.canvas.height)}else f.fillStyle=i,f.strokeStyle=i,f.lineWidth=1,f.beginPath(),l=2*Math.PI,f.arc(s,h,t,0,l,0),f.closePath(),f.fill();f.restore()};n.jqplot.BubbleCanvas.prototype.setContext=function(){return this._ctx=this._elem.get(0).getContext("2d"),this._ctx};n.jqplot.BubbleAxisRenderer=function(){n.jqplot.LinearAxisRenderer.call(this)};n.jqplot.BubbleAxisRenderer.prototype=new n.jqplot.LinearAxisRenderer;n.jqplot.BubbleAxisRenderer.prototype.constructor=n.jqplot.BubbleAxisRenderer;n.jqplot.BubbleAxisRenderer.prototype.init=function(t){var r,o,e,f,u,i;for(n.extend(!0,this,t),r=this._dataBounds,o=minpidx=maxsids=maxpidx=maxr=minr=minMaxRadius=maxMaxRadius=maxMult=minMult=0,e=0;e<this._series.length;e++)for(f=this._series[e],u=f._plotData,i=0;i<u.length;i++)this.name=="xaxis"||this.name=="x2axis"?((u[i][0]<r.min||r.min==null)&&(r.min=u[i][0],o=e,minpidx=i,minr=u[i][2],minMaxRadius=f.maxRadius,minMult=f.autoscaleMultiplier),(u[i][0]>r.max||r.max==null)&&(r.max=u[i][0],maxsidx=e,maxpidx=i,maxr=u[i][2],maxMaxRadius=f.maxRadius,maxMult=f.autoscaleMultiplier)):((u[i][1]<r.min||r.min==null)&&(r.min=u[i][1],o=e,minpidx=i,minr=u[i][2],minMaxRadius=f.maxRadius,minMult=f.autoscaleMultiplier),(u[i][1]>r.max||r.max==null)&&(r.max=u[i][1],maxsidx=e,maxpidx=i,maxr=u[i][2],maxMaxRadius=f.maxRadius,maxMult=f.autoscaleMultiplier));var h=minr/minMaxRadius,c=maxr/maxMaxRadius,s=r.max-r.min,v=Math.min(this._plotDimensions.width,this._plotDimensions.height),l=h*minMult/3*s,a=c*maxMult/3*s;r.max+=a;r.min-=l};n.jqplot.preInitHooks.push(c)})(jQuery);