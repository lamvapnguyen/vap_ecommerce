window.Silverlight||(window.Silverlight={});Silverlight._silverlightCount=0;Silverlight.__onSilverlightInstalledCalled=!1;Silverlight.fwlinkRoot="http://go2.microsoft.com/fwlink/?LinkID=";Silverlight.__installationEventFired=!1;Silverlight.onGetSilverlight=null;Silverlight.onSilverlightInstalled=function(){window.location.reload(!1)};Silverlight.isInstalled=function(n){var t,l,f,e,h,o,i,r,s,c,u;n==undefined&&(n=null);t=!1;l=null;try{if(f=null,e=!1,window.ActiveXObject)try{f=new ActiveXObject("AgControl.AgControl");n===null?t=!0:f.IsVersionSupported(n)&&(t=!0);f=null}catch(a){e=!0}else e=!0;if(e&&(h=navigator.plugins["Silverlight Plug-In"],h))if(n===null)t=!0;else{for(o=h.description,o==="1.0.30226.2"&&(o="2.0.30226.2"),i=o.split(".");i.length>3;)i.pop();while(i.length<4)i.push(0);for(r=n.split(".");r.length>4;)r.pop();u=0;do s=parseInt(r[u]),c=parseInt(i[u]),u++;while(u<r.length&&s===c);s<=c&&!isNaN(s)&&(t=!0)}}catch(a){t=!1}return t};Silverlight.WaitForInstallCompletion=function(){if(!Silverlight.isBrowserRestartRequired&&Silverlight.onSilverlightInstalled){try{navigator.plugins.refresh()}catch(n){}Silverlight.isInstalled(null)&&!Silverlight.__onSilverlightInstalledCalled?(Silverlight.onSilverlightInstalled(),Silverlight.__onSilverlightInstalledCalled=!0):setTimeout(Silverlight.WaitForInstallCompletion,3e3)}};Silverlight.__startup=function(){if(navigator.plugins.refresh(),Silverlight.isBrowserRestartRequired=Silverlight.isInstalled(null),Silverlight.isBrowserRestartRequired){if(window.navigator.mimeTypes){var n=navigator.mimeTypes["application/x-silverlight-2"],i=navigator.mimeTypes["application/x-silverlight-2-b2"],r=navigator.mimeTypes["application/x-silverlight-2-b1"],t=r;i&&(t=i);!n&&(r||i)?Silverlight.__installationEventFired||(Silverlight.onUpgradeRequired(),Silverlight.__installationEventFired=!0):n&&t&&n.enabledPlugin&&t.enabledPlugin&&n.enabledPlugin.description!=t.enabledPlugin.description&&(Silverlight.__installationEventFired||(Silverlight.onRestartRequired(),Silverlight.__installationEventFired=!0))}}else Silverlight.WaitForInstallCompletion(),Silverlight.__installationEventFired||(Silverlight.onInstallRequired(),Silverlight.__installationEventFired=!0);Silverlight.disableAutoStartup||(window.removeEventListener?window.removeEventListener("load",Silverlight.__startup,!1):window.detachEvent("onload",Silverlight.__startup))};Silverlight.disableAutoStartup||(window.addEventListener?window.addEventListener("load",Silverlight.__startup,!1):window.attachEvent("onload",Silverlight.__startup));Silverlight.createObject=function(n,t,i,r,u,f,e){var c={},o=r,h=u,s,a,l;if(c.version=o.version,o.source=n,c.alt=o.alt,f&&(o.initParams=f),o.isWindowless&&!o.windowless&&(o.windowless=o.isWindowless),o.framerate&&!o.maxFramerate&&(o.maxFramerate=o.framerate),i&&!o.id&&(o.id=i),delete o.ignoreBrowserVer,delete o.inplaceInstallPrompt,delete o.version,delete o.isWindowless,delete o.framerate,delete o.data,delete o.src,delete o.alt,Silverlight.isInstalled(c.version)){for(s in h)if(h[s])if(s=="onLoad"&&typeof h[s]=="function"&&h[s].length!=1&&(a=h[s],h[s]=function(n){return a(document.getElementById(i),e,n)}),l=Silverlight.__getHandlerName(h[s]),l!=null)o[s]=l,h[s]=null;else throw"typeof events."+s+" must be 'function' or 'string'";slPluginHTML=Silverlight.buildHTML(o)}else slPluginHTML=Silverlight.buildPromptHTML(c);if(t)t.innerHTML=slPluginHTML;else return slPluginHTML};Silverlight.buildHTML=function(n){var t=[],i;t.push('<object type="application/x-silverlight" data="data:application/x-silverlight,"');n.id!=null&&t.push(' id="'+Silverlight.HtmlAttributeEncode(n.id)+'"');n.width!=null&&t.push(' width="'+n.width+'"');n.height!=null&&t.push(' height="'+n.height+'"');t.push(" >");delete n.id;delete n.width;delete n.height;for(i in n)n[i]&&t.push('<param name="'+Silverlight.HtmlAttributeEncode(i)+'" value="'+Silverlight.HtmlAttributeEncode(n[i])+'" />');return t.push("<\/object>"),t.join("")};Silverlight.createObjectEx=function(n){var t=n,i=Silverlight.createObject(t.source,t.parentElement,t.id,t.properties,t.events,t.initParams,t.context);if(t.parentElement==null)return i};Silverlight.buildPromptHTML=function(n){var t="",r=Silverlight.fwlinkRoot,i=n.version;return n.alt?t=n.alt:(i||(i=""),t="<a href='javascript:Silverlight.getSilverlight(\"{1}\");' style='text-decoration: none;'><img src='{2}' alt='Get Microsoft Silverlight' style='border-style: none'/><\/a>",t=t.replace("{1}",i),t=t.replace("{2}",r+"108181")),t};Silverlight.getSilverlight=function(n){var i,t,r,u;Silverlight.onGetSilverlight&&Silverlight.onGetSilverlight();i="";t=String(n).split(".");t.length>1&&(r=parseInt(t[0]),i=isNaN(r)||r<2?"1.0":t[0]+"."+t[1]);u="";i.match(/^\d+\056\d+$/)&&(u="&v="+i);Silverlight.followFWLink("149156"+u)};Silverlight.followFWLink=function(n){top.location=Silverlight.fwlinkRoot+String(n)};Silverlight.HtmlAttributeEncode=function(n){var t,i="",r;if(n==null)return null;for(r=0;r<n.length;r++)t=n.charCodeAt(r),i=t>96&&t<123||t>64&&t<91||t>43&&t<58&&t!=47||t==95?i+String.fromCharCode(t):i+"&#"+t+";";return i};Silverlight.default_error_handler=function(n,t){var u,r=t.ErrorType,i;u=t.ErrorCode;i="\nSilverlight error message     \n";i+="ErrorCode: "+u+"\n";i+="ErrorType: "+r+"       \n";i+="Message: "+t.ErrorMessage+"     \n";r=="ParserError"?(i+="XamlFile: "+t.xamlFile+"     \n",i+="Line: "+t.lineNumber+"     \n",i+="Position: "+t.charPosition+"     \n"):r=="RuntimeError"&&(t.lineNumber!=0&&(i+="Line: "+t.lineNumber+"     \n",i+="Position: "+t.charPosition+"     \n"),i+="MethodName: "+t.methodName+"     \n");alert(i)};Silverlight.__cleanup=function(){for(var n=Silverlight._silverlightCount-1;n>=0;n--)window["__slEvent"+n]=null;Silverlight._silverlightCount=0;window.removeEventListener?window.removeEventListener("unload",Silverlight.__cleanup,!1):window.detachEvent("onunload",Silverlight.__cleanup)};Silverlight.__getHandlerName=function(n){var t="",i;return typeof n=="string"?t=n:typeof n=="function"?(Silverlight._silverlightCount==0&&(window.addEventListener?window.addEventListener("onunload",Silverlight.__cleanup,!1):window.attachEvent("onunload",Silverlight.__cleanup)),i=Silverlight._silverlightCount++,t="__slEvent"+i,window[t]=n):t=null,t};Silverlight.onRequiredVersionAvailable=function(){};Silverlight.onRestartRequired=function(){};Silverlight.onUpgradeRequired=function(){};Silverlight.onInstallRequired=function(){};Silverlight.IsVersionAvailableOnError=function(n,t){var i=!1;try{t.ErrorCode!=8001||Silverlight.__installationEventFired?t.ErrorCode!=8002||Silverlight.__installationEventFired?t.ErrorCode==5014||t.ErrorCode==2106?Silverlight.__verifySilverlight2UpgradeSuccess(t.getHost())&&(i=!0):i=!0:(Silverlight.onRestartRequired(),Silverlight.__installationEventFired=!0):(Silverlight.onUpgradeRequired(),Silverlight.__installationEventFired=!0)}catch(r){}return i};Silverlight.IsVersionAvailableOnLoad=function(n){var t=!1;try{Silverlight.__verifySilverlight2UpgradeSuccess(n.getHost())&&(t=!0)}catch(i){}return t};Silverlight.__verifySilverlight2UpgradeSuccess=function(n){var i=!1,r="2.0.31005",t=null;try{n.IsVersionSupported(r+".99")?(t=Silverlight.onRequiredVersionAvailable,i=!0):t=n.IsVersionSupported(r+".0")?Silverlight.onRestartRequired:Silverlight.onUpgradeRequired;t&&!Silverlight.__installationEventFired&&(t(),Silverlight.__installationEventFired=!0)}catch(u){}return i};