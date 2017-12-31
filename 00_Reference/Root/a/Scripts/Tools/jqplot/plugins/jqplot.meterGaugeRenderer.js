(function(n){function t(n,t,r){var u;for(i=n.length-1;i>=0;i--)if(u=t/(n[i]*Math.pow(10,r)),u==4||u==5)return u-1;return null}function r(t,i,r){var u,f;if(r=r||{},r.axesDefaults=r.axesDefaults||{},r.legend=r.legend||{},r.seriesDefaults=r.seriesDefaults||{},r.grid=r.grid||{},r.gridPadding=r.gridPadding||{},u=!1,r.seriesDefaults.renderer==n.jqplot.MeterGaugeRenderer)u=!0;else if(r.series)for(f=0;f<r.series.length;f++)r.series[f].renderer==n.jqplot.MeterGaugeRenderer&&(u=!0);u&&(r.axesDefaults.renderer=n.jqplot.MeterGaugeAxisRenderer,r.legend.renderer=n.jqplot.MeterGaugeLegendRenderer,r.legend.preDraw=!0,r.grid.background=r.grid.background||"white",r.grid.drawGridlines=!1,r.grid.borderWidth=r.grid.borderWidth!=null?r.grid.borderWidth:0,r.grid.shadow=r.grid.shadow!=null?r.grid.shadow:!1,r.gridPadding.top=r.gridPadding.top!=null?r.gridPadding.top:0,r.gridPadding.bottom=r.gridPadding.bottom!=null?r.gridPadding.bottom:0,r.gridPadding.left=r.gridPadding.left!=null?r.gridPadding.left:0,r.gridPadding.right=r.gridPadding.right!=null?r.gridPadding.right:0)}function u(){}n.jqplot.MeterGaugeRenderer=function(){n.jqplot.LineRenderer.call(this)};n.jqplot.MeterGaugeRenderer.prototype=new n.jqplot.LineRenderer;n.jqplot.MeterGaugeRenderer.prototype.constructor=n.jqplot.MeterGaugeRenderer;n.jqplot.MeterGaugeRenderer.prototype.init=function(i){var r;if(this.diameter=null,this.padding=null,this.shadowOffset=2,this.shadowAlpha=.07,this.shadowDepth=4,this.background="#efefef",this.ringColor="#BBC6D0",this.needleColor="#C3D3E5",this.tickColor="989898",this.ringWidth=null,this.min,this.max,this.ticks=[],this.showTicks=!0,this.showTickLabels=!0,this.label=null,this.labelHeightAdjust=0,this.labelPosition="inside",this.intervals=[],this.intervalColors=["#4bb2c5","#EAA228","#c5b47f","#579575","#839557","#958c12","#953579","#4b5de4","#d8b83f","#ff5800","#0085cc","#c747a3","#cddf54","#FBD178","#26B4E3","#bd70c7"],this.intervalInnerRadius=null,this.intervalOuterRadius=null,this.tickRenderer=n.jqplot.MeterGaugeTickRenderer,this.tickPositions=[1,2,2.5,5,10],this.tickSpacing=30,this.numberMinorTicks=null,this.hubRadius=null,this.tickPadding=null,this.needleThickness=null,this.needlePad=6,this.pegNeedle=!0,n.extend(!0,this,i),this.type=null,this.numberTicks=null,this.tickInterval=null,this.span=180,this.semiCircular=this.type=="circular"?!1:this.type!="circular"?!0:this.span<=180?!0:!1,this._tickPoints=[],this._labelElm=null,this.startAngle=(90+(360-this.span)/2)*Math.PI/180,this.endAngle=(90-(360-this.span)/2)*Math.PI/180,this.setmin=!!(this.min==null),this.setmax=!!(this.max==null),this.intervals.length)if(this.intervals[0].length==null||this.intervals.length==1)for(r=0;r<this.intervals.length;r++)this.intervals[r]=[this.intervals[r],this.intervals[r],this.intervalColors[r]];else if(this.intervals[0].length==2)for(r=0;r<this.intervals.length;r++)this.intervals[r]=[this.intervals[r][0],this.intervals[r][1],this.intervalColors[r]];if(this.ticks.length){if(this.ticks[0].length==null||this.ticks[0].length==1)for(r=0;r<this.ticks.length;r++)this.ticks[r]=[this.ticks[r],this.ticks[r]];this.min=this.min==null?this.ticks[0][0]:this.min;this.max=this.max==null?this.ticks[this.ticks.length-1][0]:this.max;this.setmin=!1;this.setmax=!1;this.numberTicks=this.ticks.length;this.tickInterval=this.ticks[1][0]-this.ticks[0][0];this.tickFactor=Math.floor(parseFloat((Math.log(this.tickInterval)/Math.log(10)).toFixed(11)));this.numberMinorTicks=t(this.tickPositions,this.tickInterval,this.tickFactor);this.numberMinorTicks||(this.numberMinorTicks=t(this.tickPositions,this.tickInterval,this.tickFactor-1));this.numberMinorTicks||(this.numberMinorTicks=1)}else this.intervals.length?(this.min=this.min==null?0:this.min,this.setmin=!1,this.max==null?this.intervals[this.intervals.length-1][0]>=this.data[0][1]&&(this.max=this.intervals[this.intervals.length-1][0],this.setmax=!1):this.setmax=!1):(this.min=this.min==null?0:this.min,this.setmin=!1,this.max==null?(this.max=this.data[0][1]*1.25,this.setmax=!0):this.setmax=!1)};n.jqplot.MeterGaugeRenderer.prototype.setGridData=function(){for(var r,t=[],i=[],u=this.startAngle,n=0;n<this.data.length;n++)t.push(this.data[n][1]),i.push([this.data[n][0]]),n>0&&(t[n]+=t[n-1]);for(r=Math.PI*2/t[t.length-1],n=0;n<t.length;n++)i[n][1]=t[n]*r;this.gridData=i};n.jqplot.MeterGaugeRenderer.prototype.makeGridData=function(n){for(var u,i=[],r=[],f=this.startAngle,t=0;t<n.length;t++)i.push(n[t][1]),r.push([n[t][0]]),t>0&&(i[t]+=i[t-1]);for(u=Math.PI*2/i[i.length-1],t=0;t<i.length;t++)r[t][1]=i[t]*u;return r};n.jqplot.MeterGaugeRenderer.prototype.draw=function(i,r,u){var ft=u!=undefined?u:{},y=0,g=0,l=1,s,vt,et,vi,ui,ot,w,v,pi,ei,b,st,bt,oi,d,ci,gi,ur,it,pt,li,ai,gt,a,ht,e,ni,ti,ii,ct,wt,f;if(u.legendInfo&&u.legendInfo.placement=="inside"){s=u.legendInfo;switch(s.location){case"nw":y=s.width+s.xoffset;break;case"w":y=s.width+s.xoffset;break;case"sw":y=s.width+s.xoffset;break;case"ne":y=s.width+s.xoffset;l=-1;break;case"e":y=s.width+s.xoffset;l=-1;break;case"se":y=s.width+s.xoffset;l=-1;break;case"n":g=s.height+s.yoffset;break;case"s":g=s.height+s.yoffset;l=-1}}this.label&&(this._labelElem=n('<div class="jqplot-meterGauge-label" style="position:absolute;">'+this.label+"<\/div>"),this.canvas._elem.after(this._labelElem));var or=ft.shadow!=undefined?ft.shadow:this.shadow,sr=ft.showLine!=undefined?ft.showLine:this.showLine,hr=ft.fill!=undefined?ft.fill:this.fill,lt=i.canvas.width,at=i.canvas.height;if(this.padding==null&&(this.padding=Math.round(Math.min(lt,at)/30)),vt=lt-y-2*this.padding,et=at-g-2*this.padding,this.labelPosition=="bottom"&&this.label&&(et-=this._labelElem.outerHeight(!0)),vi=Math.min(vt,et),ui=vi,this.diameter||(this.semiCircular?(vt>=2*et?(this.ringWidth||(this.ringWidth=2*et/35),this.needleThickness=this.needleThickness||2+Math.pow(this.ringWidth,.8),this.innerPad=this.ringWidth/2+this.needleThickness/2+this.needlePad,this.diameter=2*(et-2*this.innerPad)):(this.ringWidth||(this.ringWidth=vt/35),this.needleThickness=this.needleThickness||2+Math.pow(this.ringWidth,.8),this.innerPad=this.ringWidth/2+this.needleThickness/2+this.needlePad,this.diameter=vt-2*this.innerPad),this._center=[(lt-l*y)/2+l*y,at+l*g-this.padding-this.ringWidth-this.innerPad]):(this.ringWidth||(this.ringWidth=ui/35),this.needleThickness=this.needleThickness||2+Math.pow(this.ringWidth,.8),this.innerPad=0,this.diameter=ui-this.ringWidth,this._center=[(lt-l*y)/2+l*y,(at-l*g)/2+l*g])),this._labelElem&&this.labelPosition=="bottom"&&(this._center[1]-=this._labelElem.outerHeight(!0)),this._radius=this.diameter/2,this.tickSpacing=6e3/this.diameter,this.hubRadius||(this.hubRadius=this.diameter/18),this.shadowOffset=.5+this.ringWidth/9,this.shadowWidth=this.ringWidth*1,this.tickPadding=3+Math.pow(this.diameter/20,.7),this.tickOuterRadius=this._radius-this.ringWidth/2-this.tickPadding,this.tickLength=this.showTicks?this._radius/13:0,this.ticks.length==0){var nt=this.max,h=this.min,fi=this.setmax,yi=this.setmin,o=(nt-h)*this.tickSpacing/this.span,tt=Math.floor(parseFloat((Math.log(o)/Math.log(10)).toFixed(11))),a=o/Math.pow(10,tt);for(a=a>2&&a<=2.5?2.5:Math.ceil(a),e=this.tickPositions,f=0;f<e.length;f++)(a==e[f]||f&&e[f-1]<a&&a<e[f])&&(o=e[f]*Math.pow(10,tt),ot=f);for(f=0;f<e.length;f++)(a==e[f]||f&&e[f-1]<a&&a<e[f])&&(o=e[f]*Math.pow(10,tt),w=Math.ceil((nt-h)/o));if(fi&&yi){for(v=h>0?h-h%o:h-h%o-o,this.forceZero||(pi=Math.min(h-v,.8*o),ei=Math.floor(pi/e[ot]),ei>1&&(v=v+e[ot]*(ei-1),parseInt(v,10)!=v&&parseInt(v-e[ot],10)==v-e[ot]&&(v=v-e[ot]))),h==v?h-=o:h-v>.23*o?h=v:(h=v-o,w+=1),w+=1,b=h+(w-1)*o,nt>=b&&(b+=o,w+=1),b-nt<.23*o&&(b+=o,w+=1),this.max=nt=b,this.min=h,this.tickInterval=o,this.numberTicks=w,f=0;f<w;f++)d=parseFloat((h+f*o).toFixed(11)),this.ticks.push([d,d]);this.max=this.ticks[w-1][1];this.tickFactor=tt;this.numberMinorTicks=t(this.tickPositions,this.tickInterval,this.tickFactor);this.numberMinorTicks||(this.numberMinorTicks=t(this.tickPositions,this.tickInterval,this.tickFactor-1))}else if(fi){for(b=h+(w-1)*o,nt>=b?(nt=b+o,w+=1):nt=b,this.tickInterval=this.tickInterval||o,this.numberTicks=this.numberTicks||w,f=0;f<this.numberTicks;f++)d=parseFloat((h+f*this.tickInterval).toFixed(11)),this.ticks.push([d,d]);this.max=this.ticks[this.numberTicks-1][1];this.tickFactor=tt;this.numberMinorTicks=t(this.tickPositions,this.tickInterval,this.tickFactor);this.numberMinorTicks||(this.numberMinorTicks=t(this.tickPositions,this.tickInterval,this.tickFactor-1))}if(!fi&&!yi){for(st=this.max-this.min,tt=Math.floor(parseFloat((Math.log(st)/Math.log(10)).toFixed(11)))-1,bt=[5,6,4,7,3],f=0;f<bt.length;f++)if(oi=st/(bt[f]-1)/Math.pow(10,tt),oi==parseInt(oi,10)){this.numberTicks=bt[f];this.tickInterval=st/(this.numberTicks-1);this.tickFactor=tt+1;break}for(f=0;f<this.numberTicks;f++)d=parseFloat((this.min+f*this.tickInterval).toFixed(11)),this.ticks.push([d,d]);this.numberMinorTicks=t(this.tickPositions,this.tickInterval,this.tickFactor);this.numberMinorTicks||(this.numberMinorTicks=t(this.tickPositions,this.tickInterval,this.tickFactor-1));this.numberMinorTicks||(this.numberMinorTicks=1)}}var kt=this._radius,c=this.startAngle,wi=this.endAngle,cr=Math.PI,lr=Math.PI/2;if(this.semiCircular){var bi=Math.atan(this.innerPad/kt),si=this.outerStartAngle=c-bi,hi=this.outerEndAngle=wi+bi,ki=this.hubStartAngle=c-Math.atan(this.innerPad/this.hubRadius*2),di=this.hubEndAngle=wi+Math.atan(this.innerPad/this.hubRadius*2);for(i.save(),i.translate(this._center[0],this._center[1]),i.lineJoin="round",i.lineCap="round",i.save(),i.beginPath(),i.fillStyle=this.background,i.arc(0,0,kt,si,hi,!1),i.closePath(),i.fill(),i.restore(),ci="rgba(0,0,0,"+this.shadowAlpha+")",i.save(),f=0;f<this.shadowDepth;f++)i.translate(this.shadowOffset*Math.cos(this.shadowAngle/180*Math.PI),this.shadowOffset*Math.sin(this.shadowAngle/180*Math.PI)),i.beginPath(),i.strokeStyle=ci,i.lineWidth=this.shadowWidth,i.arc(0,0,kt,si,hi,!1),i.closePath(),i.stroke();for(i.restore(),i.save(),gi=parseInt((this.shadowDepth+1)/2,10),f=0;f<gi;f++)i.translate(this.shadowOffset*Math.cos(this.shadowAngle/180*Math.PI),this.shadowOffset*Math.sin(this.shadowAngle/180*Math.PI)),i.beginPath(),i.fillStyle=ci,i.arc(0,0,this.hubRadius,ki,di,!1),i.closePath(),i.fill();if(i.restore(),i.save(),i.beginPath(),i.strokeStyle=this.ringColor,i.lineWidth=this.ringWidth,i.arc(0,0,kt,si,hi,!1),i.closePath(),i.stroke(),i.restore(),i.save(),i.beginPath(),i.fillStyle=this.ringColor,i.arc(0,0,this.hubRadius,ki,di,!1),i.closePath(),i.fill(),i.restore(),this.showTicks){i.save();var k=this.tickOuterRadius,yt=this.tickLength,nr=yt/2,tr=this.numberMinorTicks,p=this.span*Math.PI/180/(this.ticks.length-1),dt=p/(tr+1);for(f=0;f<this.ticks.length;f++)if(i.beginPath(),i.lineWidth=1.5+this.diameter/360,i.strokeStyle=this.ringColor,ur=p*f+c,i.moveTo(-k*Math.cos(p*f+c),k*Math.sin(p*f+c)),i.lineTo(-(k-yt)*Math.cos(p*f+c),(k-yt)*Math.sin(p*f+c)),this._tickPoints.push([(k-yt)*Math.cos(p*f+c)+this._center[0]+this.canvas._offsets.left,(k-yt)*Math.sin(p*f+c)+this._center[1]+this.canvas._offsets.top,p*f+c]),i.stroke(),i.lineWidth=1+this.diameter/440,f<this.ticks.length-1)for(it=1;it<=tr;it++)i.beginPath(),i.moveTo(-k*Math.cos(p*f+dt*it+c),k*Math.sin(p*f+dt*it+c)),i.lineTo(-(k-nr)*Math.cos(p*f+dt*it+c),(k-nr)*Math.sin(p*f+dt*it+c)),i.stroke();i.restore()}if(this.showTickLabels)for(gt=0,a=this.tickPadding*(1-1/(this.diameter/80+1)),f=0;f<this.ticks.length;f++)pt=n('<div class="jqplot-meterGauge-tick" style="position:absolute;">'+this.ticks[f][1]+"<\/div>"),this.canvas._elem.after(pt),li=pt.outerWidth(!0),eh=pt.outerHeight(!0),ht=this._tickPoints[f][0]-li*(this._tickPoints[f][2]-Math.PI)/Math.PI-a*Math.cos(this._tickPoints[f][2]),e=this._tickPoints[f][1]-eh/2+eh/2*Math.pow(Math.abs(Math.sin(this._tickPoints[f][2])),.5)+a/3*Math.pow(Math.abs(Math.sin(this._tickPoints[f][2])),.5),pt.css({left:ht,top:e}),ai=li*Math.cos(this._tickPoints[f][2])+eh*Math.sin(Math.PI/2+this._tickPoints[f][2]/2),gt=ai>gt?ai:gt;if(this.label&&this.labelPosition=="inside"){var ht=this._center[0]+this.canvas._offsets.left,a=this.tickPadding*(1-1/(this.diameter/80+1)),e=.5*(this._center[1]+this.canvas._offsets.top-this.hubRadius)+.5*(this._center[1]+this.canvas._offsets.top-this.tickOuterRadius+this.tickLength+a)+this.labelHeightAdjust;ht-=this._labelElem.outerWidth(!0)/2;e-=this._labelElem.outerHeight(!0)/2;this._labelElem.css({left:ht,top:e})}else this.label&&this.labelPosition=="bottom"&&(ht=this._center[0]+this.canvas._offsets.left-this._labelElem.outerWidth(!0)/2,e=this._center[1]+this.canvas._offsets.top+this.innerPad+ +this.ringWidth+this.padding+this.labelHeightAdjust,this._labelElem.css({left:ht,top:e}));i.save();ni=this.intervalInnerRadius||this.hubRadius*1.5;ti=this.intervalOuterRadius==null?this.showTickLabels?this.tickOuterRadius-this.tickLength-this.tickPadding-this.diameter/8:this.tickOuterRadius-this.tickLength-this.diameter/16:this.intervalOuterRadius;var st=this.max-this.min,ar=this.intervals[this.intervals.length-1]-this.min,rt,ut,ir=this.span*Math.PI/180;for(f=0;f<this.intervals.length;f++)rt=f==0?c:c+(this.intervals[f-1][0]-this.min)*ir/st,rt<0&&(rt=0),ut=c+(this.intervals[f][0]-this.min)*ir/st,ut<0&&(ut=0),i.beginPath(),i.fillStyle=this.intervals[f][2],i.arc(0,0,ni,rt,ut,!1),i.lineTo(ti*Math.cos(ut),ti*Math.sin(ut)),i.arc(0,0,ti,ut,rt,!0),i.lineTo(ni*Math.cos(rt),ni*Math.sin(rt)),i.closePath(),i.fill();i.restore();ii=this.data[0][1];ct=this.max-this.min;this.pegNeedle&&(this.data[0][1]>this.max+ct*3/this.span&&(ii=this.max+ct*3/this.span),this.data[0][1]<this.min-ct*3/this.span&&(ii=this.min-ct*3/this.span));wt=(ii-this.min)/ct*this.span*Math.PI/180+this.startAngle;i.save();i.beginPath();i.fillStyle=this.ringColor;i.strokeStyle=this.ringColor;this.needleLength=(this.tickOuterRadius-this.tickLength)*.85;this.needleThickness=this.needleThickness<2?2:this.needleThickness;var fr=this.needleThickness*.4,ri=this.needleLength/10,er=(this.needleThickness-fr)/10,rr;for(f=0;f<10;f++)rr=this.needleThickness-f*er,i.moveTo(ri*f*Math.cos(wt),ri*f*Math.sin(wt)),i.lineWidth=rr,i.lineTo(ri*(f+1)*Math.cos(wt),ri*(f+1)*Math.sin(wt)),i.stroke();i.restore()}else this._center=[(lt-l*y)/2+l*y,(at-l*g)/2+l*g]};n.jqplot.MeterGaugeAxisRenderer=function(){n.jqplot.LinearAxisRenderer.call(this)};n.jqplot.MeterGaugeAxisRenderer.prototype=new n.jqplot.LinearAxisRenderer;n.jqplot.MeterGaugeAxisRenderer.prototype.constructor=n.jqplot.MeterGaugeAxisRenderer;n.jqplot.MeterGaugeAxisRenderer.prototype.init=function(t){this.tickRenderer=n.jqplot.MeterGaugeTickRenderer;n.extend(!0,this,t);this._dataBounds={min:0,max:100};this.min=0;this.max=100;this.showTicks=!1;this.ticks=[];this.showMark=!1;this.show=!1};n.jqplot.MeterGaugeLegendRenderer=function(){n.jqplot.TableLegendRenderer.call(this)};n.jqplot.MeterGaugeLegendRenderer.prototype=new n.jqplot.TableLegendRenderer;n.jqplot.MeterGaugeLegendRenderer.prototype.constructor=n.jqplot.MeterGaugeLegendRenderer;n.jqplot.MeterGaugeLegendRenderer.prototype.init=function(t){this.numberRows=null;this.numberColumns=null;n.extend(!0,this,t)};n.jqplot.MeterGaugeLegendRenderer.prototype.draw=function(){var k=this,p,t,r,u,l,f,a,e,v,y,b,o;if(this.show){p=this._series;t="position:absolute;";t+=this.background?"background:"+this.background+";":"";t+=this.border?"border:"+this.border+";":"";t+=this.fontSize?"font-size:"+this.fontSize+";":"";t+=this.fontFamily?"font-family:"+this.fontFamily+";":"";t+=this.textColor?"color:"+this.textColor+";":"";t+=this.marginTop!=null?"margin-top:"+this.marginTop+";":"";t+=this.marginBottom!=null?"margin-bottom:"+this.marginBottom+";":"";t+=this.marginLeft!=null?"margin-left:"+this.marginLeft+";":"";t+=this.marginRight!=null?"margin-right:"+this.marginRight+";":"";this._elem=n('<table class="jqplot-table-legend" style="'+t+'"><\/table>');var h=!1,c=!1,i,s,w=p[0];if(w.show)for(r=w.data,this.numberRows?(i=this.numberRows,s=this.numberColumns?this.numberColumns:Math.ceil(r.length/i)):this.numberColumns?(s=this.numberColumns,i=Math.ceil(r.length/this.numberColumns)):(i=r.length,s=1),o=0,u=0;u<i;u++)for(f=c?n('<tr class="jqplot-table-legend"><\/tr>').prependTo(this._elem):n('<tr class="jqplot-table-legend"><\/tr>').appendTo(this._elem),l=0;l<s;l++)o<r.length&&(v=this.labels[o]||r[o][0].toString(),b=colorGenerator.next(),h=c?u==i-1?!1:!0:u>0?!0:!1,y=h?this.rowSpacing:"0",a=n('<td class="jqplot-table-legend" style="text-align:center;padding-top:'+y+';"><div><div class="jqplot-table-legend-swatch" style="border-color:'+b+';"><\/div><\/div><\/td>'),e=n('<td class="jqplot-table-legend" style="padding-top:'+y+';"><\/td>'),this.escapeHtml?e.text(v):e.html(v),c?(e.prependTo(f),a.prependTo(f)):(a.appendTo(f),e.appendTo(f)),h=!0),o++}return this._elem};n.jqplot.preInitHooks.push(r);n.jqplot.postParseOptionsHooks.push(u);n.jqplot.MeterGaugeTickRenderer=function(){n.jqplot.AxisTickRenderer.call(this)};n.jqplot.MeterGaugeTickRenderer.prototype=new n.jqplot.AxisTickRenderer;n.jqplot.MeterGaugeTickRenderer.prototype.constructor=n.jqplot.MeterGaugeTickRenderer})(jQuery);