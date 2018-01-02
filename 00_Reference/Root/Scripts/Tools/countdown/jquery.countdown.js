(function(n){function h(){function r(u){var f=u||(new Date).getTime();f-i>=1e3&&(n.countdown._updateTargets(),i=f);t(r)}this.regional=[];this.regional[""]={labels:["Years","Months","Weeks","Days","Hours","Minutes","Seconds"],labels1:["Year","Month","Week","Day","Hour","Minute","Second"],compactLabels:["y","m","w","d"],whichLabels:null,timeSeparator:":",isRTL:!1};this._defaults={until:null,since:null,timezone:null,serverSync:null,format:"dHMS",layout:"",compact:!1,significant:0,description:"",expiryUrl:"",expiryText:"",alwaysExpire:!1,onExpiry:null,onTick:null,tickInterval:1};n.extend(this._defaults,this.regional[""]);this._serverSyncs=[];var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null,i=0;t?(i=window.mozAnimationStartTime||(new Date).getTime(),t(r)):setInterval(function(){n.countdown._updateTargets()},980)}function c(t,i){n.extend(t,i);for(var r in i)i[r]==null&&(t[r]=null);return t}var s="countdown",t=0,r=1,e=2,o=3,u=4,f=5,i=6;n.extend(h.prototype,{markerClassName:"hasCountdown",_timerTargets:[],setDefaults:function(n){this._resetExtraLabels(this._defaults,n);c(this._defaults,n||{})},UTCDate:function(n,t,i,r,u,f,e,o){typeof t=="object"&&t.constructor==Date&&(o=t.getMilliseconds(),e=t.getSeconds(),f=t.getMinutes(),u=t.getHours(),r=t.getDate(),i=t.getMonth(),t=t.getFullYear());var s=new Date;return s.setUTCFullYear(t),s.setUTCDate(1),s.setUTCMonth(i||0),s.setUTCDate(r||1),s.setUTCHours(u||0),s.setUTCMinutes((f||0)-(Math.abs(n)<30?n*60:n)),s.setUTCSeconds(e||0),s.setUTCMilliseconds(o||0),s},periodsToSeconds:function(n){return n[0]*31557600+n[1]*2629800+n[2]*604800+n[3]*86400+n[4]*3600+n[5]*60+n[6]},_settingsCountdown:function(t,i){if(!i)return n.countdown._defaults;var r=n.data(t,s);return i=="all"?r.options:r.options[i]},_attachCountdown:function(t,i){var r=n(t),u;r.hasClass(this.markerClassName)||(r.addClass(this.markerClassName),u={options:n.extend({},i),_periods:[0,0,0,0,0,0,0]},n.data(t,s,u),this._changeCountdown(t))},_addTarget:function(n){this._hasTarget(n)||this._timerTargets.push(n)},_hasTarget:function(t){return n.inArray(t,this._timerTargets)>-1},_removeTarget:function(t){this._timerTargets=n.map(this._timerTargets,function(n){return n==t?null:n})},_updateTargets:function(){for(var n=this._timerTargets.length-1;n>=0;n--)this._updateCountdown(this._timerTargets[n])},_updateCountdown:function(t,i){var c=n(t),r,u,f,l,e,o,a,h;(i=i||n.data(t,s),i)&&(c.html(this._generateHTML(i)),c[(this._get(i,"isRTL")?"add":"remove")+"Class"]("countdown_rtl"),r=this._get(i,"onTick"),r&&(u=i._hold!="lap"?i._periods:this._calculatePeriods(i,i._show,this._get(i,"significant"),new Date),f=this._get(i,"tickInterval"),(f==1||this.periodsToSeconds(u)%f==0)&&r.apply(t,[u])),l=i._hold!="pause"&&(i._since?i._now.getTime()<i._since.getTime():i._now.getTime()>=i._until.getTime()),l&&!i._expiring?(i._expiring=!0,(this._hasTarget(t)||this._get(i,"alwaysExpire"))&&(this._removeTarget(t),e=this._get(i,"onExpiry"),e&&e.apply(t,[]),o=this._get(i,"expiryText"),o&&(a=this._get(i,"layout"),i.options.layout=o,this._updateCountdown(t,i),i.options.layout=a),h=this._get(i,"expiryUrl"),h&&(window.location=h)),i._expiring=!1):i._hold=="pause"&&this._removeTarget(t),n.data(t,s,i))},_changeCountdown:function(t,i,r){var e,u,f;i=i||{};typeof i=="string"&&(e=i,i={},i[e]=r);u=n.data(t,s);u&&(this._resetExtraLabels(u.options,i),c(u.options,i),this._adjustSettings(t,u),n.data(t,s,u),f=new Date,(u._since&&u._since<f||u._until&&u._until>f)&&this._addTarget(t),this._updateCountdown(t,u))},_resetExtraLabels:function(n,t){var r=!1;for(var i in t)if(i!="whichLabels"&&i.match(/[Ll]abels/)){r=!0;break}if(r)for(i in n)i.match(/[Ll]abels[0-9]/)&&(n[i]=null)},_adjustSettings:function(n,t){for(var s,r,u,f=this._get(t,"serverSync"),i=0,o=null,e=0;e<this._serverSyncs.length;e++)if(this._serverSyncs[e][0]==f){o=this._serverSyncs[e][1];break}o!=null?(i=f?o:0,u=new Date):(s=f?f.apply(n,[]):null,u=new Date,i=s?u.getTime()-s.getTime():0,this._serverSyncs.push([f,i]));r=this._get(t,"timezone");r=r==null?-u.getTimezoneOffset():r;t._since=this._get(t,"since");t._since!=null&&(t._since=this.UTCDate(r,this._determineTime(t._since,null)),t._since&&i&&t._since.setMilliseconds(t._since.getMilliseconds()+i));t._until=this.UTCDate(r,this._determineTime(this._get(t,"until"),u));i&&t._until.setMilliseconds(t._until.getMilliseconds()+i);t._show=this._determineShow(t)},_destroyCountdown:function(t){var i=n(t);i.hasClass(this.markerClassName)&&(this._removeTarget(t),i.removeClass(this.markerClassName).empty(),n.removeData(t,s))},_pauseCountdown:function(n){this._hold(n,"pause")},_lapCountdown:function(n){this._hold(n,"lap")},_resumeCountdown:function(n){this._hold(n,null)},_hold:function(t,i){var r=n.data(t,s),u;r&&(r._hold!="pause"||i||(r._periods=r._savePeriods,u=r._since?"-":"+",r[r._since?"_since":"_until"]=this._determineTime(u+r._periods[0]+"y"+u+r._periods[1]+"o"+u+r._periods[2]+"w"+u+r._periods[3]+"d"+u+r._periods[4]+"h"+u+r._periods[5]+"m"+u+r._periods[6]+"s"),this._addTarget(t)),r._hold=i,r._savePeriods=i=="pause"?r._periods:null,n.data(t,s,r),this._updateCountdown(t,r))},_getTimesCountdown:function(t){var i=n.data(t,s);return i?i._hold?this._calculatePeriods(i,i._show,this._get(i,"significant"),new Date):i._periods:null},_get:function(t,i){return t.options[i]!=null?t.options[i]:n.countdown._defaults[i]},_determineTime:function(t,i){var u=function(n){var t=new Date;return t.setTime(t.getTime()+n*1e3),t},f=function(t){t=t.toLowerCase();for(var u=new Date,f=u.getFullYear(),e=u.getMonth(),r=u.getDate(),o=u.getHours(),s=u.getMinutes(),h=u.getSeconds(),c=/([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g,i=c.exec(t);i;){switch(i[2]||"s"){case"s":h+=parseInt(i[1],10);break;case"m":s+=parseInt(i[1],10);break;case"h":o+=parseInt(i[1],10);break;case"d":r+=parseInt(i[1],10);break;case"w":r+=parseInt(i[1],10)*7;break;case"o":e+=parseInt(i[1],10);r=Math.min(r,n.countdown._getDaysInMonth(f,e));break;case"y":f+=parseInt(i[1],10);r=Math.min(r,n.countdown._getDaysInMonth(f,e))}i=c.exec(t)}return new Date(f,e,r,o,s,h,0)},r=t==null?i:typeof t=="string"?f(t):typeof t=="number"?u(t):t;return r&&r.setMilliseconds(0),r},_getDaysInMonth:function(n,t){return 32-new Date(n,t,32).getDate()},_normalLabels:function(n){return n},_generateHTML:function(s){var a=this._get(s,"significant"),v,h;s._periods=s._hold?s._periods:this._calculatePeriods(s,s._show,a,new Date);var b=!1,k=0,p=a,c=n.extend({},s._show);for(h=t;h<=i;h++)b|=s._show[h]=="?"&&s._periods[h]>0,c[h]=s._show[h]=="?"&&!b?null:s._show[h],k+=c[h]?1:0,p-=s._periods[h]>0?1:0;for(v=[!1,!1,!1,!1,!1,!1,!1],h=i;h>=t;h--)s._show[h]&&(s._periods[h]?v[h]=!0:(v[h]=p>0,p--));var w=this._get(s,"compact"),d=this._get(s,"layout"),it=w?this._get(s,"compactLabels"):this._get(s,"labels"),g=this._get(s,"whichLabels")||this._normalLabels,nt=this._get(s,"timeSeparator"),tt=this._get(s,"description")||"",y=function(t){var i=n.countdown._get(s,"compactLabels"+g(s._periods[t]));return c[t]?s._periods[t]+(i?i[t]:it[t])+" ":""},l=function(t,i){var r=n.countdown._get(s,"labels"+g(s._periods[t]));return!a&&c[t]||a&&v[t]?'<span class="countdown_section"><span class="countdown_amount">'+s._periods[t]+i+"<\/span><\/span>":""};return d?this._buildLayout(s,c,d,w,a,v):(w?'<span class="countdown_row countdown_amount'+(s._hold?" countdown_holding":"")+'">'+y(t)+y(r)+y(e)+y(o)+(c[u]?this._minDigits(s._periods[u],2):"")+(c[f]?(c[u]?nt:"")+this._minDigits(s._periods[f],2):"")+(c[i]?(c[u]||c[f]?nt:"")+this._minDigits(s._periods[i],2):""):'<span class="countdown_row countdown_show'+(a||k)+(s._hold?" countdown_holding":"")+'">'+l(t,"")+l(r,"")+l(e,"")+l(o,"")+l(u,":")+l(f,":")+l(i,""))+"<\/span>"+(tt?'<span class="countdown_row countdown_descr">'+tt+"<\/span>":"")},_buildLayout:function(s,h,c,l,a,v){for(var k,d,g=this._get(s,l?"compactLabels":"labels"),nt=this._get(s,"whichLabels")||this._normalLabels,p=function(t){return(n.countdown._get(s,(l?"compactLabels":"labels")+nt(s._periods[t]))||g)[t]},y=function(n,t){return Math.floor(n/t)%10},tt={desc:this._get(s,"description"),sep:this._get(s,"timeSeparator"),yl:p(t),yn:s._periods[t],ynn:this._minDigits(s._periods[t],2),ynnn:this._minDigits(s._periods[t],3),y1:y(s._periods[t],1),y10:y(s._periods[t],10),y100:y(s._periods[t],100),y1000:y(s._periods[t],1e3),ol:p(r),on:s._periods[r],onn:this._minDigits(s._periods[r],2),onnn:this._minDigits(s._periods[r],3),o1:y(s._periods[r],1),o10:y(s._periods[r],10),o100:y(s._periods[r],100),o1000:y(s._periods[r],1e3),wl:p(e),wn:s._periods[e],wnn:this._minDigits(s._periods[e],2),wnnn:this._minDigits(s._periods[e],3),w1:y(s._periods[e],1),w10:y(s._periods[e],10),w100:y(s._periods[e],100),w1000:y(s._periods[e],1e3),dl:p(o),dn:s._periods[o],dnn:this._minDigits(s._periods[o],2),dnnn:this._minDigits(s._periods[o],3),d1:y(s._periods[o],1),d10:y(s._periods[o],10),d100:y(s._periods[o],100),d1000:y(s._periods[o],1e3),hl:p(u),hn:s._periods[u],hnn:this._minDigits(s._periods[u],2),hnnn:this._minDigits(s._periods[u],3),h1:y(s._periods[u],1),h10:y(s._periods[u],10),h100:y(s._periods[u],100),h1000:y(s._periods[u],1e3),ml:p(f),mn:s._periods[f],mnn:this._minDigits(s._periods[f],2),mnnn:this._minDigits(s._periods[f],3),m1:y(s._periods[f],1),m10:y(s._periods[f],10),m100:y(s._periods[f],100),m1000:y(s._periods[f],1e3),sl:p(i),sn:s._periods[i],snn:this._minDigits(s._periods[i],2),snnn:this._minDigits(s._periods[i],3),s1:y(s._periods[i],1),s10:y(s._periods[i],10),s100:y(s._periods[i],100),s1000:y(s._periods[i],1e3)},w=c,b=t;b<=i;b++)k="yowdhms".charAt(b),d=new RegExp("\\{"+k+"<\\}(.*)\\{"+k+">\\}","g"),w=w.replace(d,!a&&h[b]||a&&v[b]?"$1":"");return n.each(tt,function(n,t){var i=new RegExp("\\{"+n+"\\}","g");w=w.replace(i,t)}),w},_minDigits:function(n,t){return(n=""+n,n.length>=t)?n:(n="0000000000"+n,n.substr(n.length-t))},_determineShow:function(n){var s=this._get(n,"format"),h=[];return h[t]=s.match("y")?"?":s.match("Y")?"!":null,h[r]=s.match("o")?"?":s.match("O")?"!":null,h[e]=s.match("w")?"?":s.match("W")?"!":null,h[o]=s.match("d")?"?":s.match("D")?"!":null,h[u]=s.match("h")?"?":s.match("H")?"!":null,h[f]=s.match("m")?"?":s.match("M")?"!":null,h[i]=s.match("s")?"?":s.match("S")?"!":null,h},_calculatePeriods:function(s,h,c,l){var v,a,ut,b,p,w,y;if(s._now=l,s._now.setMilliseconds(0),v=new Date(s._now.getTime()),s._since?l.getTime()<s._since.getTime()?s._now=l=v:l=s._since:(v.setTime(s._until.getTime()),l.getTime()>s._until.getTime()&&(s._now=l=v)),a=[0,0,0,0,0,0,0],h[t]||h[r]){var k=n.countdown._getDaysInMonth(l.getFullYear(),l.getMonth()),nt=n.countdown._getDaysInMonth(v.getFullYear(),v.getMonth()),tt=v.getDate()==l.getDate()||v.getDate()>=Math.min(k,nt)&&l.getDate()>=Math.min(k,nt),it=function(n){return(n.getHours()*60+n.getMinutes())*60+n.getSeconds()},rt=Math.max(0,(v.getFullYear()-l.getFullYear())*12+v.getMonth()-l.getMonth()+(v.getDate()<l.getDate()&&!tt||tt&&it(v)<it(l)?-1:0));a[t]=h[t]?Math.floor(rt/12):0;a[r]=h[r]?rt-a[t]*12:0;l=new Date(l.getTime());ut=l.getDate()==k;b=n.countdown._getDaysInMonth(l.getFullYear()+a[t],l.getMonth()+a[r]);l.getDate()>b&&l.setDate(b);l.setFullYear(l.getFullYear()+a[t]);l.setMonth(l.getMonth()+a[r]);ut&&l.setDate(b)}if(p=Math.floor((v.getTime()-l.getTime())/1e3),w=function(n,t){a[n]=h[n]?Math.floor(p/t):0;p-=a[n]*t},w(e,604800),w(o,86400),w(u,3600),w(f,60),w(i,1),p>0&&!s._since){var ft=[1,12,4.3482,7,24,60,60],d=i,g=1;for(y=i;y>=t;y--)h[y]&&(a[d]>=g&&(a[d]=0,p=1),p>0&&(a[y]++,p=0,d=y,g=1)),g*=ft[y]}if(c)for(y=t;y<=i;y++)c&&a[y]?c--:c||(a[y]=0);return a}});n.fn.countdown=function(t){var i=Array.prototype.slice.call(arguments,1);return t=="getTimes"||t=="settings"?n.countdown["_"+t+"Countdown"].apply(n.countdown,[this[0]].concat(i)):this.each(function(){typeof t=="string"?n.countdown["_"+t+"Countdown"].apply(n.countdown,[this].concat(i)):n.countdown._attachCountdown(this,t)})};n.countdown=new h})(jQuery);