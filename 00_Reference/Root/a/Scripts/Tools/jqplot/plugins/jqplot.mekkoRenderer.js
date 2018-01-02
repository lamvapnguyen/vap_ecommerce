(function(n){function t(t,i,r){var u,f;if(r=r||{},r.axesDefaults=r.axesDefaults||{},r.legend=r.legend||{},r.seriesDefaults=r.seriesDefaults||{},u=!1,r.seriesDefaults.renderer==n.jqplot.MekkoRenderer)u=!0;else if(r.series)for(f=0;f<r.series.length;f++)r.series[f].renderer==n.jqplot.MekkoRenderer&&(u=!0);u&&(r.axesDefaults.renderer=n.jqplot.MekkoAxisRenderer,r.legend.renderer=n.jqplot.MekkoLegendRenderer,r.legend.preDraw=!0)}n.jqplot.MekkoRenderer=function(){this.shapeRenderer=new n.jqplot.ShapeRenderer;this.borderColor=null;this.showBorders=!0};n.jqplot.MekkoRenderer.prototype.init=function(t,i){this.fill=!1;this.fillRect=!0;this.strokeRect=!0;this.shadow=!1;this._xwidth=0;this._xstart=0;n.extend(!0,this.renderer,t);var r={lineJoin:"miter",lineCap:"butt",isarc:!1,fillRect:this.fillRect,strokeRect:this.strokeRect};this.renderer.shapeRenderer.init(r);i.axes.x2axis._series.push(this)};n.jqplot.MekkoRenderer.prototype.setGridData=function(n){var f=this._xaxis.series_u2p,s=this._yaxis.series_u2p,i=this._plotData,r,u,e,o,t;for(this.gridData=[],this._xwidth=f(this._sumy)-f(0),this.index>0&&(this._xstart=n.series[this.index-1]._xstart+n.series[this.index-1]._xwidth),r=this.canvas.getHeight(),u=0,t=0;t<i.length;t++)i[t]!=null&&(u+=i[t][1],e=r-u/this._sumy*r,o=i[t][1]/this._sumy*r,this.gridData.push([this._xstart,e,this._xwidth,o]))};n.jqplot.MekkoRenderer.prototype.makeGridData=function(n){for(var o=this._xaxis.series_u2p,i=this.canvas.getHeight(),r=0,u,f,e=[],t=0;t<n.length;t++)n[t]!=null&&(r+=n[t][1],u=i-r/this._sumy*i,f=n[t][1]/this._sumy*i,e.push([this._xstart,u,this._xwidth,f]));return e};n.jqplot.MekkoRenderer.prototype.draw=function(t,i,r){var f,u=r!=undefined?r:{},e=u.showLine!=undefined?u.showLine:this.showLine,o=new n.jqplot.ColorGenerator(this.seriesColors);if(t.save(),i.length&&e)for(f=0;f<i.length;f++)u.fillStyle=o.next(),u.strokeStyle=this.renderer.showBorders?this.renderer.borderColor:u.fillStyle,this.renderer.shapeRenderer.draw(t,i[f],u);t.restore()};n.jqplot.MekkoRenderer.prototype.drawShadow=function(){};n.jqplot.MekkoLegendRenderer=function(){};n.jqplot.MekkoLegendRenderer.prototype.init=function(t){this.numberRows=null;this.numberColumns=null;this.placement="outside";n.extend(!0,this,t)};n.jqplot.MekkoLegendRenderer.prototype.draw=function(){var d=this,w,t,r,u,a,f,v,e,y,p,b,o;if(this.show){w=this._series;t="position:absolute;";t+=this.background?"background:"+this.background+";":"";t+=this.border?"border:"+this.border+";":"";t+=this.fontSize?"font-size:"+this.fontSize+";":"";t+=this.fontFamily?"font-family:"+this.fontFamily+";":"";t+=this.textColor?"color:"+this.textColor+";":"";this._elem=n('<table class="jqplot-table-legend" style="'+t+'"><\/table>');var h=!1,c=!0,i,s,l=w[0],k=new n.jqplot.ColorGenerator(l.seriesColors);if(l.show)for(r=l.data,this.numberRows?(i=this.numberRows,s=this.numberColumns?this.numberColumns:Math.ceil(r.length/i)):this.numberColumns?(s=this.numberColumns,i=Math.ceil(r.length/this.numberColumns)):(i=r.length,s=1),o=0,u=0;u<i;u++)for(f=c?n('<tr class="jqplot-table-legend"><\/tr>').prependTo(this._elem):n('<tr class="jqplot-table-legend"><\/tr>').appendTo(this._elem),a=0;a<s;a++)o<r.length&&(y=this.labels[o]||r[o][0].toString(),b=k.next(),h=c?u==i-1?!1:!0:u>0?!0:!1,p=h?this.rowSpacing:"0",v=n('<td class="jqplot-table-legend" style="text-align:center;padding-top:'+p+';"><div><div class="jqplot-table-legend-swatch" style="border-color:'+b+';"><\/div><\/div><\/td>'),e=n('<td class="jqplot-table-legend" style="padding-top:'+p+';"><\/td>'),this.escapeHtml?e.text(y):e.html(y),c?(e.prependTo(f),v.prependTo(f)):(v.appendTo(f),e.appendTo(f)),h=!0),o++}return this._elem};n.jqplot.MekkoLegendRenderer.prototype.pack=function(n){var r,t,i;if(this.show)if(r={_top:n.top,_left:n.left,_right:n.right,_bottom:this._plotDimensions.height-n.bottom},this.placement=="insideGrid")switch(this.location){case"nw":t=r._left+this.xoffset;i=r._top+this.yoffset;this._elem.css("left",t);this._elem.css("top",i);break;case"n":t=(n.left+(this._plotDimensions.width-n.right))/2-this.getWidth()/2;i=r._top+this.yoffset;this._elem.css("left",t);this._elem.css("top",i);break;case"ne":t=n.right+this.xoffset;i=r._top+this.yoffset;this._elem.css({right:t,top:i});break;case"e":t=n.right+this.xoffset;i=(n.top+(this._plotDimensions.height-n.bottom))/2-this.getHeight()/2;this._elem.css({right:t,top:i});break;case"se":t=n.right+this.xoffset;i=n.bottom+this.yoffset;this._elem.css({right:t,bottom:i});break;case"s":t=(n.left+(this._plotDimensions.width-n.right))/2-this.getWidth()/2;i=n.bottom+this.yoffset;this._elem.css({left:t,bottom:i});break;case"sw":t=r._left+this.xoffset;i=n.bottom+this.yoffset;this._elem.css({left:t,bottom:i});break;case"w":t=r._left+this.xoffset;i=(n.top+(this._plotDimensions.height-n.bottom))/2-this.getHeight()/2;this._elem.css({left:t,top:i});break;default:t=r._right-this.xoffset;i=r._bottom+this.yoffset;this._elem.css({right:t,bottom:i})}else switch(this.location){case"nw":t=this._plotDimensions.width-r._left+this.xoffset;i=r._top+this.yoffset;this._elem.css("right",t);this._elem.css("top",i);break;case"n":t=(n.left+(this._plotDimensions.width-n.right))/2-this.getWidth()/2;i=this._plotDimensions.height-r._top+this.yoffset;this._elem.css("left",t);this._elem.css("bottom",i);break;case"ne":t=this._plotDimensions.width-n.right+this.xoffset;i=r._top+this.yoffset;this._elem.css({left:t,top:i});break;case"e":t=this._plotDimensions.width-n.right+this.xoffset;i=(n.top+(this._plotDimensions.height-n.bottom))/2-this.getHeight()/2;this._elem.css({left:t,top:i});break;case"se":t=this._plotDimensions.width-n.right+this.xoffset;i=n.bottom+this.yoffset;this._elem.css({left:t,bottom:i});break;case"s":t=(n.left+(this._plotDimensions.width-n.right))/2-this.getWidth()/2;i=this._plotDimensions.height-n.bottom+this.yoffset;this._elem.css({left:t,top:i});break;case"sw":t=this._plotDimensions.width-r._left+this.xoffset;i=n.bottom+this.yoffset;this._elem.css({right:t,bottom:i});break;case"w":t=this._plotDimensions.width-r._left+this.xoffset;i=(n.top+(this._plotDimensions.height-n.bottom))/2-this.getHeight()/2;this._elem.css({right:t,top:i});break;default:t=r._right-this.xoffset;i=r._bottom+this.yoffset;this._elem.css({right:t,bottom:i})}};n.jqplot.preInitHooks.push(t)})(jQuery);