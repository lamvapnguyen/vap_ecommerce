(function(n){n.jqplot.DateAxisRenderer=function(){n.jqplot.LinearAxisRenderer.call(this)};n.jqplot.DateAxisRenderer.prototype=new n.jqplot.LinearAxisRenderer;n.jqplot.DateAxisRenderer.prototype.constructor=n.jqplot.DateAxisRenderer;n.jqplot.DateTickFormatter=function(n,t){return n||(n="%Y/%m/%d"),Date.create(t).strftime(n)};n.jqplot.DateAxisRenderer.prototype.init=function(t){var u,f,i;for(this.tickOptions.formatter=n.jqplot.DateTickFormatter,this.daTickInterval=null,this._daTickInterval=null,n.extend(!0,this,t),u=this._dataBounds,f=0;f<this._series.length;f++){var e=this._series[f],r=e.data,o=e._plotData,s=e._stackData;for(i=0;i<r.length;i++)this.name=="xaxis"||this.name=="x2axis"?(r[i][0]=Date.create(r[i][0]).getTime(),o[i][0]=Date.create(r[i][0]).getTime(),s[i][0]=Date.create(r[i][0]).getTime(),(r[i][0]<u.min||u.min==null)&&(u.min=r[i][0]),(r[i][0]>u.max||u.max==null)&&(u.max=r[i][0])):(r[i][1]=Date.create(r[i][1]).getTime(),o[i][1]=Date.create(r[i][1]).getTime(),s[i][1]=Date.create(r[i][1]).getTime(),(r[i][1]<u.min||u.min==null)&&(u.min=r[i][1]),(r[i][1]>u.max||u.max==null)&&(u.max=r[i][1]))}};n.jqplot.DateAxisRenderer.prototype.reset=function(){this.min=this._min;this.max=this._max;this.tickInterval=this._tickInterval;this.numberTicks=this._numberTicks;this.daTickInterval=this._daTickInterval};n.jqplot.DateAxisRenderer.prototype.createTicks=function(){var w=this._ticks,o=this.ticks,c=this.name,l=this._dataBounds,s,u,a,f,r,h,e,v,y,p,t,i,n;if(o.length){for(t=0;t<o.length;t++)f=o[t],n=new this.tickRenderer(this.tickOptions),f.constructor==Array?(n.value=Date.create(f[0]).getTime(),n.label=f[1],this.showTicks?this.showTickMarks||(n.showMark=!1):(n.showLabel=!1,n.showMark=!1),n.setTick(n.value,this.name),this._ticks.push(n)):(n.value=Date.create(f).getTime(),this.showTicks?this.showTickMarks||(n.showMark=!1):(n.showLabel=!1,n.showMark=!1),n.setTick(n.value,this.name),this._ticks.push(n));this.numberTicks=o.length;this.min=this._ticks[0].value;this.max=this._ticks[this.numberTicks-1].value;this.daTickInterval=[(this.max-this.min)/(this.numberTicks-1)/1e3,"seconds"]}else for(s=c=="xaxis"||c=="x2axis"?this._plotDimensions.width:this._plotDimensions.height,this.min!=null&&this.max!=null&&this.numberTicks!=null&&(this.tickInterval=null),this.tickInterval!=null&&(Number(this.tickInterval)?this.daTickInterval=[Number(this.tickInterval),"seconds"]:typeof this.tickInterval=="string"&&(r=this.tickInterval.split(" "),r.length==1?this.daTickInterval=[1,r[0]]:r.length==2&&(this.daTickInterval=[r[0],r[1]]))),i=this.min!=null?Date.create(this.min).getTime():l.min,u=this.max!=null?Date.create(this.max).getTime():l.max,i==u&&(h=432e5,i-=h,u+=h),e=u-i,v=this.min!=null?Date.create(this.min).getTime():i-e/2*(this.padMin-1),y=this.max!=null?Date.create(this.max).getTime():u+e/2*(this.padMax-1),this.min=v,this.max=y,e=this.max-this.min,this.numberTicks==null&&(this.daTickInterval!=null?(p=Date.create(this.max).diff(this.min,this.daTickInterval[1],!0),this.numberTicks=Math.ceil(p/this.daTickInterval[0])+1,this.max=Date.create(this.min).add((this.numberTicks-1)*this.daTickInterval[0],this.daTickInterval[1]).getTime()):this.numberTicks=s>200?parseInt(3+(s-200)/100,10):2),this.daTickInterval==null&&(this.daTickInterval=[e/(this.numberTicks-1)/1e3,"seconds"]),t=0;t<this.numberTicks;t++)i=Date.create(this.min),a=i.add(t*this.daTickInterval[0],this.daTickInterval[1]).getTime(),n=new this.tickRenderer(this.tickOptions),this.showTicks?this.showTickMarks||(n.showMark=!1):(n.showLabel=!1,n.showMark=!1),n.setTick(a,this.name),this._ticks.push(n);this._daTickInterval==null&&(this._daTickInterval=this.daTickInterval)}})(jQuery);