(function(n,t){var i="ui-dialog ui-widget ui-widget-content ui-corner-all ",r={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},u={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};n.widget("ui.dialog",{options:{autoOpen:!0,buttons:{},closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:!1,maxWidth:!1,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",collision:"fit",using:function(t){var i=n(this).css(t).offset().top;i<0&&n(this).css("top",t.top-i)}},resizable:!0,show:null,stack:!0,title:"",width:300,zIndex:1e3},_create:function(){this.originalTitle=this.element.attr("title");typeof this.originalTitle!="string"&&(this.originalTitle="");this.options.title=this.options.title||this.originalTitle;var t=this,r=t.options,s=r.title||"&#160;",o=n.ui.dialog.getTitleId(t.element),e=(t.uiDialog=n("<div><\/div>")).appendTo(document.body).hide().addClass(i+r.dialogClass).css({zIndex:r.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(i){r.closeOnEscape&&i.keyCode&&i.keyCode===n.ui.keyCode.ESCAPE&&(t.close(i),i.preventDefault())}).attr({role:"dialog","aria-labelledby":o}).mousedown(function(n){t.moveToTop(!1,n)}),h=t.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(e),f=(t.uiDialogTitlebar=n("<div><\/div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(e),u=n('<a href="#"><\/a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){u.addClass("ui-state-hover")},function(){u.removeClass("ui-state-hover")}).focus(function(){u.addClass("ui-state-focus")}).blur(function(){u.removeClass("ui-state-focus")}).click(function(n){return t.close(n),!1}).appendTo(f),c=(t.uiDialogTitlebarCloseText=n("<span><\/span>")).addClass("ui-icon ui-icon-closethick").text(r.closeText).appendTo(u),l=n("<span><\/span>").addClass("ui-dialog-title").attr("id",o).html(s).prependTo(f);n.isFunction(r.beforeclose)&&!n.isFunction(r.beforeClose)&&(r.beforeClose=r.beforeclose);f.find("*").add(f).disableSelection();r.draggable&&n.fn.draggable&&t._makeDraggable();r.resizable&&n.fn.resizable&&t._makeResizable();t._createButtons(r.buttons);t._isOpen=!1;n.fn.bgiframe&&e.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var n=this;return n.overlay&&n.overlay.destroy(),n.uiDialog.hide(),n.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"),n.uiDialog.remove(),n.originalTitle&&n.element.attr("title",n.originalTitle),n},widget:function(){return this.uiDialog},close:function(t){var i=this,r,u;if(!1!==i._trigger("beforeClose",t))return i.overlay&&i.overlay.destroy(),i.uiDialog.unbind("keypress.ui-dialog"),i._isOpen=!1,i.options.hide?i.uiDialog.hide(i.options.hide,function(){i._trigger("close",t)}):(i.uiDialog.hide(),i._trigger("close",t)),n.ui.dialog.overlay.resize(),i.options.modal&&(r=0,n(".ui-dialog").each(function(){this!==i.uiDialog[0]&&(u=n(this).css("z-index"),isNaN(u)||(r=Math.max(r,u)))}),n.ui.dialog.maxZ=r),i},isOpen:function(){return this._isOpen},moveToTop:function(t,i){var r=this,u=r.options,f;return u.modal&&!t||!u.stack&&!u.modal?r._trigger("focus",i):(u.zIndex>n.ui.dialog.maxZ&&(n.ui.dialog.maxZ=u.zIndex),r.overlay&&(n.ui.dialog.maxZ+=1,r.overlay.$el.css("z-index",n.ui.dialog.overlay.maxZ=n.ui.dialog.maxZ)),f={scrollTop:r.element.attr("scrollTop"),scrollLeft:r.element.attr("scrollLeft")},n.ui.dialog.maxZ+=1,r.uiDialog.css("z-index",n.ui.dialog.maxZ),r.element.attr(f),r._trigger("focus",i),r)},open:function(){if(!this._isOpen){var t=this,i=t.options,r=t.uiDialog;return t.overlay=i.modal?new n.ui.dialog.overlay(t):null,t._size(),t._position(i.position),r.show(i.show),t.moveToTop(!0),i.modal&&r.bind("keypress.ui-dialog",function(t){if(t.keyCode===n.ui.keyCode.TAB){var i=n(":tabbable",this),r=i.filter(":first"),u=i.filter(":last");if(t.target!==u[0]||t.shiftKey){if(t.target===r[0]&&t.shiftKey)return u.focus(1),!1}else return r.focus(1),!1}}),n(t.element.find(":tabbable").get().concat(r.find(".ui-dialog-buttonpane :tabbable").get().concat(r.get()))).eq(0).focus(),t._isOpen=!0,t._trigger("open"),t}},_createButtons:function(t){var i=this,r=!1,u=n("<div><\/div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),f=n("<div><\/div>").addClass("ui-dialog-buttonset").appendTo(u);i.uiDialog.find(".ui-dialog-buttonpane").remove();typeof t=="object"&&t!==null&&n.each(t,function(){return!(r=!0)});r&&(n.each(t,function(t,r){r=n.isFunction(r)?{click:r,text:t}:r;var u=n('<button type="button"><\/button>').attr(r,!0).unbind("click").click(function(){r.click.apply(i.element[0],arguments)}).appendTo(f);n.fn.button&&u.button()}),u.appendTo(i.uiDialog))},_makeDraggable:function(){function i(n){return{position:n.position,offset:n.offset}}var t=this,r=t.options,u=n(document),f;t.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(u,e){f=r.height==="auto"?"auto":n(this).height();n(this).height(n(this).height()).addClass("ui-dialog-dragging");t._trigger("dragStart",u,i(e))},drag:function(n,r){t._trigger("drag",n,i(r))},stop:function(e,o){r.position=[o.position.left-u.scrollLeft(),o.position.top-u.scrollTop()];n(this).removeClass("ui-dialog-dragging").height(f);t._trigger("dragStop",e,i(o));n.ui.dialog.overlay.resize()}})},_makeResizable:function(i){function f(n){return{originalPosition:n.originalPosition,originalSize:n.originalSize,position:n.position,size:n.size}}i=i===t?this.options.resizable:i;var r=this,u=r.options,e=r.uiDialog.css("position"),o=typeof i=="string"?i:"n,e,s,w,se,sw,ne,nw";r.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:r.element,maxWidth:u.maxWidth,maxHeight:u.maxHeight,minWidth:u.minWidth,minHeight:r._minHeight(),handles:o,start:function(t,i){n(this).addClass("ui-dialog-resizing");r._trigger("resizeStart",t,f(i))},resize:function(n,t){r._trigger("resize",n,f(t))},stop:function(t,i){n(this).removeClass("ui-dialog-resizing");u.height=n(this).height();u.width=n(this).width();r._trigger("resizeStop",t,f(i));n.ui.dialog.overlay.resize()}}).css("position",e).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var n=this.options;return n.height==="auto"?n.minHeight:Math.min(n.minHeight,n.height)},_position:function(t){var i=[],u=[0,0],r;t?((typeof t=="string"||typeof t=="object"&&"0"in t)&&(i=t.split?t.split(" "):[t[0],t[1]],i.length===1&&(i[1]=i[0]),n.each(["left","top"],function(n,t){+i[n]===i[n]&&(u[n]=i[n],i[n]=t)}),t={my:i.join(" "),at:i.join(" "),offset:u.join(" ")}),t=n.extend({},n.ui.dialog.prototype.options.position,t)):t=n.ui.dialog.prototype.options.position;r=this.uiDialog.is(":visible");r||this.uiDialog.show();this.uiDialog.css({top:0,left:0}).position(n.extend({of:window},t));r||this.uiDialog.hide()},_setOptions:function(t){var e=this,i={},f=!1;n.each(t,function(n,t){e._setOption(n,t);n in r&&(f=!0);n in u&&(i[n]=t)});f&&this._size();this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",i)},_setOption:function(t,r){var u=this,f=u.uiDialog,o,e;switch(t){case"beforeclose":t="beforeClose";break;case"buttons":u._createButtons(r);break;case"closeText":u.uiDialogTitlebarCloseText.text(""+r);break;case"dialogClass":f.removeClass(u.options.dialogClass).addClass(i+r);break;case"disabled":r?f.addClass("ui-dialog-disabled"):f.removeClass("ui-dialog-disabled");break;case"draggable":o=f.is(":data(draggable)");o&&!r&&f.draggable("destroy");!o&&r&&u._makeDraggable();break;case"position":u._position(r);break;case"resizable":e=f.is(":data(resizable)");e&&!r&&f.resizable("destroy");e&&typeof r=="string"&&f.resizable("option","handles",r);e||r===!1||u._makeResizable(r);break;case"title":n(".ui-dialog-title",u.uiDialogTitlebar).html(""+(r||"&#160;"))}n.Widget.prototype._setOption.apply(u,arguments)},_size:function(){var t=this.options,i,r,f=this.uiDialog.is(":visible"),u;this.element.show().css({width:"auto",minHeight:0,height:0});t.minWidth>t.width&&(t.width=t.minWidth);i=this.uiDialog.css({height:"auto",width:t.width}).height();r=Math.max(0,t.minHeight-i);t.height==="auto"?n.support.minHeight?this.element.css({minHeight:r,height:"auto"}):(this.uiDialog.show(),u=this.element.css("height","auto").height(),f||this.uiDialog.hide(),this.element.height(Math.max(u,r))):this.element.height(Math.max(t.height-i,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}});n.extend(n.ui.dialog,{version:"@VERSION",uuid:0,maxZ:0,getTitleId:function(n){var t=n.attr("id");return t||(this.uuid+=1,t=this.uuid),"ui-dialog-title-"+t},overlay:function(t){this.$el=n.ui.dialog.overlay.create(t)}});n.extend(n.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:n.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(n){return n+".dialog-overlay"}).join(" "),create:function(t){this.instances.length===0&&(setTimeout(function(){n.ui.dialog.overlay.instances.length&&n(document).bind(n.ui.dialog.overlay.events,function(t){if(n(t.target).zIndex()<n.ui.dialog.overlay.maxZ)return!1})},1),n(document).bind("keydown.dialog-overlay",function(i){t.options.closeOnEscape&&i.keyCode&&i.keyCode===n.ui.keyCode.ESCAPE&&(t.close(i),i.preventDefault())}),n(window).bind("resize.dialog-overlay",n.ui.dialog.overlay.resize));var i=(this.oldInstances.pop()||n("<div><\/div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});return n.fn.bgiframe&&i.bgiframe(),this.instances.push(i),i},destroy:function(t){var r=n.inArray(t,this.instances),i;r!=-1&&this.oldInstances.push(this.instances.splice(r,1)[0]);this.instances.length===0&&n([document,window]).unbind(".dialog-overlay");t.remove();i=0;n.each(this.instances,function(){i=Math.max(i,this.css("z-index"))});this.maxZ=i},height:function(){var t,i;return n.browser.msie&&n.browser.version<7?(t=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),i=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight),t<i?n(window).height()+"px":t+"px"):n(document).height()+"px"},width:function(){var t,i;return n.browser.msie&&n.browser.version<7?(t=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth),i=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth),t<i?n(window).width()+"px":t+"px"):n(document).width()+"px"},resize:function(){var t=n([]);n.each(n.ui.dialog.overlay.instances,function(){t=t.add(this)});t.css({width:0,height:0}).css({width:n.ui.dialog.overlay.width(),height:n.ui.dialog.overlay.height()})}});n.extend(n.ui.dialog.overlay.prototype,{destroy:function(){n.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);