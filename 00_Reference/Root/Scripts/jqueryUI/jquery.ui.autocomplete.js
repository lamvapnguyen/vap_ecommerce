(function(n){n.widget("ui.autocomplete",{options:{appendTo:"body",delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},_create:function(){var t=this,r=this.element[0].ownerDocument,i;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(r){if(!t.options.disabled&&!t.element.attr("readonly")){i=!1;var u=n.ui.keyCode;switch(r.keyCode){case u.PAGE_UP:t._move("previousPage",r);break;case u.PAGE_DOWN:t._move("nextPage",r);break;case u.UP:t._move("previous",r);r.preventDefault();break;case u.DOWN:t._move("next",r);r.preventDefault();break;case u.ENTER:case u.NUMPAD_ENTER:t.menu.active&&(i=!0,r.preventDefault());case u.TAB:if(!t.menu.active)return;t.menu.select(r);break;case u.ESCAPE:t.element.val(t.term);t.close(r);break;default:clearTimeout(t.searching);t.searching=setTimeout(function(){t.term!=t.element.val()&&(t.selectedItem=null,t.search(null,r))},t.options.delay)}}}).bind("keypress.autocomplete",function(n){i&&(i=!1,n.preventDefault())}).bind("focus.autocomplete",function(){t.options.disabled||(t.selectedItem=null,t.previous=t.element.val())}).bind("blur.autocomplete",function(n){t.options.disabled||(clearTimeout(t.searching),t.closing=setTimeout(function(){t.close(n);t._change(n)},150))});this._initSource();this.response=function(){return t._response.apply(t,arguments)};this.menu=n("<ul><\/ul>").addClass("ui-autocomplete").appendTo(n(this.options.appendTo||"body",r)[0]).mousedown(function(i){var r=t.menu.element[0];n(i.target).closest(".ui-menu-item").length||setTimeout(function(){n(document).one("mousedown",function(i){i.target===t.element[0]||i.target===r||n.ui.contains(r,i.target)||t.close()})},1);setTimeout(function(){clearTimeout(t.closing)},13)}).menu({focus:function(n,i){var r=i.item.data("item.autocomplete");!1!==t._trigger("focus",n,{item:r})&&/^key/.test(n.originalEvent.type)&&t.element.val(r.value)},selected:function(n,i){var u=i.item.data("item.autocomplete"),f=t.previous;t.element[0]!==r.activeElement&&(t.element.focus(),t.previous=f,setTimeout(function(){t.previous=f;t.selectedItem=u},1));!1!==t._trigger("select",n,{item:u})&&t.element.val(u.value);t.term=t.element.val();t.close(n);t.selectedItem=u},blur:function(){t.menu.element.is(":visible")&&t.element.val()!==t.term&&t.element.val(t.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");n.fn.bgiframe&&this.menu.element.bgiframe()},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();n.Widget.prototype.destroy.call(this)},_setOption:function(t,i){n.Widget.prototype._setOption.apply(this,arguments);t==="source"&&this._initSource();t==="appendTo"&&this.menu.element.appendTo(n(i||"body",this.element[0].ownerDocument)[0])},_initSource:function(){var t=this,i,r;n.isArray(this.options.source)?(i=this.options.source,this.source=function(t,r){r(n.ui.autocomplete.filter(i,t.term))}):typeof this.options.source=="string"?(r=this.options.source,this.source=function(i,u){t.xhr&&t.xhr.abort();t.xhr=n.ajax({url:r,data:i,dataType:"json",success:function(n,i,r){r===t.xhr&&u(n);t.xhr=null},error:function(n){n===t.xhr&&u([]);t.xhr=null}})}):this.source=this.options.source},search:function(n,t){return(n=n!=null?n:this.element.val(),this.term=this.element.val(),n.length<this.options.minLength)?this.close(t):(clearTimeout(this.closing),this._trigger("search",t)===!1)?void 0:this._search(n)},_search:function(n){this.element.addClass("ui-autocomplete-loading");this.source({term:n},this.response)},_response:function(n){n&&n.length?(n=this._normalize(n),this._suggest(n),this._trigger("open")):this.close();this.element.removeClass("ui-autocomplete-loading")},close:function(n){clearTimeout(this.closing);this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.deactivate(),this._trigger("close",n))},_change:function(n){this.previous!==this.element.val()&&this._trigger("change",n,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:n.map(t,function(t){return typeof t=="string"?{label:t,value:t}:n.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var i=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(i,t);this.menu.deactivate();this.menu.refresh();i.show();this._resizeMenu();i.position(n.extend({of:this.element},this.options.position))},_resizeMenu:function(){var n=this.menu.element;n.outerWidth(Math.max(n.width("").outerWidth(),this.element.outerWidth()))},_renderMenu:function(t,i){var r=this;n.each(i,function(n,i){r._renderItem(t,i)})},_renderItem:function(t,i){return n("<li><\/li>").data("item.autocomplete",i).append(n("<a><\/a>").text(i.label)).appendTo(t)},_move:function(n,t){if(!this.menu.element.is(":visible")){this.search(null,t);return}if(this.menu.first()&&/^previous/.test(n)||this.menu.last()&&/^next/.test(n)){this.element.val(this.term);this.menu.deactivate();return}this.menu[n](t)},widget:function(){return this.menu.element}});n.extend(n.ui.autocomplete,{escapeRegex:function(n){return n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},filter:function(t,i){var r=new RegExp(n.ui.autocomplete.escapeRegex(i),"i");return n.grep(t,function(n){return r.test(n.label||n.value||n)})}})})(jQuery),function(n){n.widget("ui.menu",{_create:function(){var t=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(i){n(i.target).closest(".ui-menu-item a").length&&(i.preventDefault(),t.select(i))});this.refresh()},refresh:function(){var t=this,i=this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem");i.children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(i){t.activate(i,n(this).parent())}).mouseleave(function(){t.deactivate()})},activate:function(n,t){if(this.deactivate(),this.hasScroll()){var i=t.offset().top-this.element.offset().top,r=this.element.attr("scrollTop"),u=this.element.height();i<0?this.element.attr("scrollTop",r+i):i>=u&&this.element.attr("scrollTop",r+i-u+t.height())}this.active=t.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",n,{item:t})},deactivate:function(){this.active&&(this.active.children("a").removeClass("ui-state-hover").removeAttr("id"),this._trigger("blur"),this.active=null)},next:function(n){this.move("next",".ui-menu-item:first",n)},previous:function(n){this.move("prev",".ui-menu-item:last",n)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(n,t,i){if(!this.active){this.activate(i,this.element.children(t));return}var r=this.active[n+"All"](".ui-menu-item").eq(0);r.length?this.activate(i,r):this.activate(i,this.element.children(t))},nextPage:function(t){if(this.hasScroll()){if(!this.active||this.last()){this.activate(t,this.element.children(".ui-menu-item:first"));return}var r=this.active.offset().top,u=this.element.height(),i=this.element.children(".ui-menu-item").filter(function(){var t=n(this).offset().top-r-u+n(this).height();return t<10&&t>-10});i.length||(i=this.element.children(".ui-menu-item:last"));this.activate(t,i)}else this.activate(t,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(t){if(this.hasScroll()){if(!this.active||this.first()){this.activate(t,this.element.children(".ui-menu-item:last"));return}var i=this.active.offset().top,r=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var t=n(this).offset().top-i+r-n(this).height();return t<10&&t>-10});result.length||(result=this.element.children(".ui-menu-item:first"));this.activate(t,result)}else this.activate(t,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element.attr("scrollHeight")},select:function(n){this._trigger("selected",n,{item:this.active})}})}(jQuery);