(function(n){n.widget("ui.combobox",{_create:function(){var r=this,i=this.element.hide(),u=i.children(":selected"),e=u.val()?u.text():"",f=/^[^a-zA-Z0-9]*([a-zA-Z0-9])/i,o=i.children("option").map(function(){if(this.value){var t=n(this).text(),i=r.options.label?r.options.label(this):t;return{label:i,value:t,option:this}}}),t=this.input=n("<input type='text' />").insertAfter(i).val(e).keydown(function(r){var u=n.ui.keyCode,s;switch(r.keyCode){case u.PAGE_UP:case u.PAGE_DOWN:case u.UP:case u.DOWN:case u.ENTER:case u.NUMPAD_ENTER:case u.TAB:case u.ESCAPE:break;default:if(r.stopImmediatePropagation(),r.keyCode<91&&r.keyCode>59||r.keyCode<58&&r.keyCode>47){var h=String.fromCharCode(r.keyCode).toLowerCase(),c=t.val(),e,o=i.children().filter(function(){var n=f.exec(this.text);return n&&n.length==2&&n[1].toLowerCase()==h});if(!o.length)return!1;c.length&&(s=f.exec(c),s&&s.length==2&&s[1].toLowerCase()==h&&o.each(function(n,t){if(t.selected)return n+1<=o.length-1&&(e=o[n+1]),!1}));e||(e=o[0]);e.selected=!0;t.val(e.text);t.autocomplete("widget").is(":visible")&&t.data("autocomplete").widget().children("li").each(function(){var i=n(this);if(i.data("item.autocomplete").option==e)return t.data("autocomplete").menu.activate(r,i),!1})}return!1}}).autocomplete({delay:0,minLength:0,source:function(n,t){t(o)},select:function(n,t){t.item.option.selected=!0;r._trigger("selected",n,{item:t.item.option})},change:function(r,u){if(!u.item){var e=new RegExp("^"+n.ui.autocomplete.escapeRegex(n(this).val())+"$","i"),f=!1;if(i.children("option").each(function(){if(n(this).text().match(e))return this.selected=f=!0,!1}),!f)return n(this).val(""),i.val(""),t.data("autocomplete").term="",!1}}}).addClass("ui-widget ui-widget-content ui-corner-left").click(function(){r.button.click()}).bind("autocompleteopen",function(r){var u=i.children(":selected")[0];t.data("autocomplete").widget().children("li").each(function(){var i=n(this);if(i.data("item.autocomplete").option==u)return t.data("autocomplete").menu.activate(r,i),!1})});t.data("autocomplete")._renderItem=function(t,i){return n("<li><\/li>").data("item.autocomplete",i).append("<a href='#'>"+i.label+"<\/a>").appendTo(t)};this.button=n("<button type='button'>&nbsp;<\/button>").attr("tabIndex",-1).attr("title","Show All Items").insertAfter(t).button({icons:{primary:"ui-icon-triangle-1-s"},text:!1}).removeClass("ui-corner-all").addClass("ui-corner-right ui-button-icon").click(function(){if(t.autocomplete("widget").is(":visible")){t.autocomplete("close");return}t.autocomplete("search","");t.focus()})},setValue:function(t){var i=this.input;n("option",this.element).each(function(){if(n(this).val()==t)return this.selected=!0,i.val(this.text),!1})},destroy:function(){this.input.remove();this.button.remove();this.element.show();n.Widget.prototype.destroy.call(this)}})})(jQuery);