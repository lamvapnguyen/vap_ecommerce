function MCTabs(){this.settings=[];this.onChange=tinyMCEPopup.editor.windowManager.createInstance("tinymce.util.Dispatcher")}MCTabs.prototype.init=function(n){this.settings=n};MCTabs.prototype.getParam=function(n,t){var i=null;return(i=typeof this.settings[n]=="undefined"?t:this.settings[n],i=="true"||i=="false")?i=="true":i};MCTabs.prototype.showTab=function(n){n.className="current";n.setAttribute("aria-selected",!0);n.setAttribute("aria-expanded",!0);n.tabIndex=0};MCTabs.prototype.hideTab=function(n){var t=this;n.className="";n.setAttribute("aria-selected",!1);n.setAttribute("aria-expanded",!1);n.tabIndex=-1};MCTabs.prototype.showPanel=function(n){n.className="current";n.setAttribute("aria-hidden",!1)};MCTabs.prototype.hidePanel=function(n){n.className="panel";n.setAttribute("aria-hidden",!0)};MCTabs.prototype.getPanelForTab=function(n){return tinyMCEPopup.dom.getAttrib(n,"aria-controls")};MCTabs.prototype.displayTab=function(n,t,i){var o,s,f,h,c,u,r,e=this;if(f=document.getElementById(n),t===undefined&&(t=e.getPanelForTab(f)),o=document.getElementById(t),s=o?o.parentNode:null,h=f?f.parentNode:null,c=e.getParam("selection_class","current"),f&&h){for(u=h.childNodes,r=0;r<u.length;r++)u[r].nodeName=="LI"&&e.hideTab(u[r]);e.showTab(f)}if(o&&s){for(u=s.childNodes,r=0;r<u.length;r++)u[r].nodeName=="DIV"&&e.hidePanel(u[r]);i||f.focus();e.showPanel(o)}};MCTabs.prototype.getAnchor=function(){var n,t=document.location.href;return(n=t.lastIndexOf("#"))!=-1?t.substring(n+1):""};var mcTabs=new MCTabs;tinyMCEPopup.onInit.add(function(){var i=tinyMCEPopup.getWin().tinymce,n=tinyMCEPopup.dom,t=i.each;t(n.select("div.tabs"),function(r){var e,u,f;n.setAttrib(r,"role","tablist");u=tinyMCEPopup.dom.select("li",r);f=function(n){mcTabs.displayTab(n,mcTabs.getPanelForTab(n));mcTabs.onChange.dispatch(n)};t(u,function(t){n.setAttrib(t,"role","tab");n.bind(t,"click",function(){f(t.id)})});n.bind(n.getRoot(),"keydown",function(n){n.keyCode===9&&n.ctrlKey&&!n.altKey&&(e.moveFocus(n.shiftKey?-1:1),i.dom.Event.cancel(n))});t(n.select("a",r),function(t){n.setAttrib(t,"tabindex","-1")});e=tinyMCEPopup.editor.windowManager.createInstance("tinymce.ui.KeyboardNavigation",{root:r,items:u,onAction:f,actOnFocus:!0,enableLeftRight:!0,enableUpDown:!0},tinyMCEPopup.dom)})});