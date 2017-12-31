(function(n){n.widget("ui.sortable",n.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var n=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?n.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var n=this.items.length-1;n>=0;n--)this.items[n].item.removeData("sortable-item");return this},_setOption:function(t,i){t==="disabled"?(this.options[t]=i,this.widget()[i?"addClass":"removeClass"]("ui-sortable-disabled")):n.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(t,i){var u;if(this.reverting||this.options.disabled||this.options.type=="static")return!1;this._refreshItems(t);var r=null,f=this,e=n(t.target).parents().each(function(){if(n.data(this,"sortable-item")==f)return r=n(this),!1});return(n.data(t.target,"sortable-item")==f&&(r=n(t.target)),!r)?!1:this.options.handle&&!i&&(u=!1,n(this.options.handle,r).find("*").andSelf().each(function(){this==t.target&&(u=!0)}),!u)?!1:(this.currentItem=r,this._removeCurrentsFromItems(),!0)},_mouseStart:function(t,i,r){var u=this.options,e=this,f;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),n.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,u.cursorAt&&this._adjustOffsetFromHelper(u.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!=this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),u.containment&&this._setContainment(),u.cursor&&(n("body").css("cursor")&&(this._storedCursor=n("body").css("cursor")),n("body").css("cursor",u.cursor)),u.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",u.opacity)),u.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",u.zIndex)),this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!r)for(f=this.containers.length-1;f>=0;f--)this.containers[f]._trigger("activate",t,e._uiHash(this));return n.ui.ddmanager&&(n.ui.ddmanager.current=this),n.ui.ddmanager&&!u.dropBehaviour&&n.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,r,u;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(i=this.options,r=!1,this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<i.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+i.scrollSpeed:t.pageY-this.overflowOffset.top<i.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-i.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<i.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+i.scrollSpeed:t.pageX-this.overflowOffset.left<i.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-i.scrollSpeed)):(t.pageY-n(document).scrollTop()<i.scrollSensitivity?r=n(document).scrollTop(n(document).scrollTop()-i.scrollSpeed):n(window).height()-(t.pageY-n(document).scrollTop())<i.scrollSensitivity&&(r=n(document).scrollTop(n(document).scrollTop()+i.scrollSpeed)),t.pageX-n(document).scrollLeft()<i.scrollSensitivity?r=n(document).scrollLeft(n(document).scrollLeft()-i.scrollSpeed):n(window).width()-(t.pageX-n(document).scrollLeft())<i.scrollSensitivity&&(r=n(document).scrollLeft(n(document).scrollLeft()+i.scrollSpeed))),r!==!1&&n.ui.ddmanager&&!i.dropBehaviour&&n.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&this.options.axis=="y"||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&this.options.axis=="x"||(this.helper[0].style.top=this.position.top+"px"),u=this.items.length-1;u>=0;u--){var f=this.items[u],e=f.item[0],o=this._intersectsWithPointer(f);if(o&&e!=this.currentItem[0]&&this.placeholder[o==1?"next":"prev"]()[0]!=e&&!n.ui.contains(this.placeholder[0],e)&&(this.options.type=="semi-dynamic"?!n.ui.contains(this.element[0],e):!0)){if(this.direction=o==1?"down":"up",this.options.tolerance=="pointer"||this._intersectsWithSides(f))this._rearrange(t,f);else break;this._trigger("change",t,this._uiHash());break}}return this._contactContainers(t),n.ui.ddmanager&&n.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(n.ui.ddmanager&&!this.options.dropBehaviour&&n.ui.ddmanager.drop(this,t),this.options.revert){var r=this,u=r.placeholder.offset();r.reverting=!0;n(this.helper).animate({left:u.left-this.offset.parent.left-r.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:u.top-this.offset.parent.top-r.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){r._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){var i=this,t;if(this.dragging)for(this._mouseUp({target:null}),this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show(),t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,i._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,i._uiHash(this)),this.containers[t].containerCache.over=0);return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),n.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?n(this.domPosition.prev).after(this.currentItem):n(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var r=this._getItemsAsjQuery(t&&t.connected),i=[];return t=t||{},n(r).each(function(){var r=(n(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[-=_](.+)/);r&&i.push((t.key||r[1]+"[]")+"="+(t.key&&t.expression?r[1]:r[2]))}),!i.length&&t.key&&i.push(t.key+"="),i.join("&")},toArray:function(t){var r=this._getItemsAsjQuery(t&&t.connected),i=[];return t=t||{},r.each(function(){i.push(n(t.item||this).attr(t.attribute||"id")||"")}),i},_intersectsWith:function(n){var t=this.positionAbs.left,h=t+this.helperProportions.width,i=this.positionAbs.top,c=i+this.helperProportions.height,r=n.left,f=r+n.width,u=n.top,e=u+n.height,o=this.offset.click.top,s=this.offset.click.left,l=i+o>u&&i+o<e&&t+s>r&&t+s<f;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>n[this.floating?"width":"height"]?l:r<t+this.helperProportions.width/2&&h-this.helperProportions.width/2<f&&u<i+this.helperProportions.height/2&&c-this.helperProportions.height/2<e},_intersectsWithPointer:function(t){var u=n.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),f=n.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),e=u&&f,i=this._getDragVerticalDirection(),r=this._getDragHorizontalDirection();return e?this.floating?r&&r=="right"||i=="down"?2:1:i&&(i=="down"?2:1):!1},_intersectsWithSides:function(t){var u=n.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),f=n.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),i=this._getDragVerticalDirection(),r=this._getDragHorizontalDirection();return this.floating&&r?r=="right"&&f||r=="left"&&!f:i&&(i=="down"&&u||i=="up"&&!u)},_getDragVerticalDirection:function(){var n=this.positionAbs.top-this.lastPositionAbs.top;return n!=0&&(n>0?"down":"up")},_getDragHorizontalDirection:function(){var n=this.positionAbs.left-this.lastPositionAbs.left;return n!=0&&(n>0?"right":"left")},refresh:function(n){return this._refreshItems(n),this.refreshPositions(),this},_connectWith:function(){var n=this.options;return n.connectWith.constructor==String?[n.connectWith]:n.connectWith},_getItemsAsjQuery:function(t){var h=this,s=[],u=[],e=this._connectWith(),o,f,i,r;if(e&&t)for(r=e.length-1;r>=0;r--)for(o=n(e[r]),f=o.length-1;f>=0;f--)i=n.data(o[f],"sortable"),i&&i!=this&&!i.options.disabled&&u.push([n.isFunction(i.options.items)?i.options.items.call(i.element):n(i.options.items,i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),i]);for(u.push([n.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):n(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),r=u.length-1;r>=0;r--)u[r][0].each(function(){s.push(this)});return n(s)},_removeCurrentsFromItems:function(){for(var t,i=this.currentItem.find(":data(sortable-item)"),n=0;n<this.items.length;n++)for(t=0;t<i.length;t++)i[t]==this.items[n].item[0]&&this.items.splice(n,1)},_refreshItems:function(t){var o,i,r,s,h,u,l,c;this.items=[];this.containers=[this];var a=this.items,v=this,f=[[n.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):n(this.options.items,this.element),this]],e=this._connectWith();if(e)for(r=e.length-1;r>=0;r--)for(o=n(e[r]),u=o.length-1;u>=0;u--)i=n.data(o[u],"sortable"),i&&i!=this&&!i.options.disabled&&(f.push([n.isFunction(i.options.items)?i.options.items.call(i.element[0],t,{item:this.currentItem}):n(i.options.items,i.element),i]),this.containers.push(i));for(r=f.length-1;r>=0;r--)for(s=f[r][1],h=f[r][0],u=0,l=h.length;u<l;u++)c=n(h[u]),c.data("sortable-item",s),a.push({item:c,instance:s,width:0,height:0,left:0,top:0})},refreshPositions:function(t){var r,f,i,u;for(this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset()),i=this.items.length-1;i>=0;i--)(r=this.items[i],r.instance!=this.currentContainer&&this.currentContainer&&r.item[0]!=this.currentItem[0])||(f=this.options.toleranceElement?n(this.options.toleranceElement,r.item):r.item,t||(r.width=f.outerWidth(),r.height=f.outerHeight()),u=f.offset(),r.left=u.left,r.top=u.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)u=this.containers[i].element.offset(),this.containers[i].containerCache.left=u.left,this.containers[i].containerCache.top=u.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){var i=t||this,r=i.options,u;r.placeholder&&r.placeholder.constructor!=String||(u=r.placeholder,r.placeholder={element:function(){var t=n(document.createElement(i.currentItem[0].nodeName)).addClass(u||i.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return u||(t.style.visibility="hidden"),t},update:function(n,t){(!u||r.forcePlaceholderSize)&&(t.height()||t.height(i.currentItem.innerHeight()-parseInt(i.currentItem.css("paddingTop")||0,10)-parseInt(i.currentItem.css("paddingBottom")||0,10)),t.width()||t.width(i.currentItem.innerWidth()-parseInt(i.currentItem.css("paddingLeft")||0,10)-parseInt(i.currentItem.css("paddingRight")||0,10)))}});i.placeholder=n(r.placeholder.element.call(i.element,i.currentItem));i.currentItem.after(i.placeholder);r.placeholder.update(i,i.placeholder)},_contactContainers:function(t){for(var u,o,f=null,i=null,r=this.containers.length-1;r>=0;r--)if(!n.ui.contains(this.currentItem[0],this.containers[r].element[0]))if(this._intersectsWith(this.containers[r].containerCache)){if(f&&n.ui.contains(this.containers[r].element[0],f.element[0]))continue;f=this.containers[r];i=r}else this.containers[r].containerCache.over&&(this.containers[r]._trigger("out",t,this._uiHash(this)),this.containers[r].containerCache.over=0);if(f)if(this.containers.length===1)this.containers[i]._trigger("over",t,this._uiHash(this)),this.containers[i].containerCache.over=1;else if(this.currentContainer!=this.containers[i]){var s=1e4,e=null,h=this.positionAbs[this.containers[i].floating?"left":"top"];for(u=this.items.length-1;u>=0;u--)n.ui.contains(this.containers[i].element[0],this.items[u].item[0])&&(o=this.items[u][this.containers[i].floating?"left":"top"],Math.abs(o-h)<s&&(s=Math.abs(o-h),e=this.items[u]));if(!e&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[i];e?this._rearrange(t,e,null,!0):this._rearrange(t,null,this.containers[i].element,!0);this._trigger("change",t,this._uiHash());this.containers[i]._trigger("change",t,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[i]._trigger("over",t,this._uiHash(this));this.containers[i].containerCache.over=1}},_createHelper:function(t){var r=this.options,i=n.isFunction(r.helper)?n(r.helper.apply(this.element[0],[t,this.currentItem])):r.helper=="clone"?this.currentItem.clone():this.currentItem;return i.parents("body").length||n(r.appendTo!="parent"?r.appendTo:this.currentItem[0].parentNode)[0].appendChild(i[0]),i[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(i[0].style.width==""||r.forceHelperSize)&&i.width(this.currentItem.width()),(i[0].style.height==""||r.forceHelperSize)&&i.height(this.currentItem.height()),i},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" "));n.isArray(t)&&(t={left:+t[0],top:+t[1]||0});"left"in t&&(this.offset.click.left=t.left+this.margins.left);"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left);"top"in t&&(this.offset.click.top=t.top+this.margins.top);"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&n.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&n.browser.msie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var n=this.currentItem.position();return{top:n.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:n.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var i=this.options;if(i.containment=="parent"&&(i.containment=this.helper[0].parentNode),(i.containment=="document"||i.containment=="window")&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,n(i.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(n(i.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),!/^(document|window|parent)$/.test(i.containment)){var t=n(i.containment)[0],r=n(i.containment).offset(),u=n(t).css("overflow")!="hidden";this.containment=[r.left+(parseInt(n(t).css("borderLeftWidth"),10)||0)+(parseInt(n(t).css("paddingLeft"),10)||0)-this.margins.left,r.top+(parseInt(n(t).css("borderTopWidth"),10)||0)+(parseInt(n(t).css("paddingTop"),10)||0)-this.margins.top,r.left+(u?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(n(t).css("borderLeftWidth"),10)||0)-(parseInt(n(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,r.top+(u?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(n(t).css("borderTopWidth"),10)||0)-(parseInt(n(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(t,i){i||(i=this.position);var r=t=="absolute"?1:-1,e=this.options,u=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&n.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(u[0].tagName);return{top:i.top+this.offset.relative.top*r+this.offset.parent.top*r-(n.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:u.scrollTop())*r),left:i.left+this.offset.relative.left*r+this.offset.parent.left*r-(n.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:u.scrollLeft())*r)}},_generatePosition:function(t){var i=this.options,o=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&n.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,s=/(html|body)/i.test(o[0].tagName),f,e,r,u;return this.cssPosition!="relative"||this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),f=t.pageX,e=t.pageY,this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(f=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(e=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(f=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(e=this.containment[3]+this.offset.click.top)),i.grid&&(r=this.originalPageY+Math.round((e-this.originalPageY)/i.grid[1])*i.grid[1],e=this.containment?(r-this.offset.click.top<this.containment[1]||r-this.offset.click.top>this.containment[3])?(r-this.offset.click.top<this.containment[1])?r+i.grid[1]:r-i.grid[1]:r:r,u=this.originalPageX+Math.round((f-this.originalPageX)/i.grid[0])*i.grid[0],f=this.containment?(u-this.offset.click.left<this.containment[0]||u-this.offset.click.left>this.containment[2])?(u-this.offset.click.left<this.containment[0])?u+i.grid[0]:u-i.grid[0]:u:u)),{top:e-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(n.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():s?0:o.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(n.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():s?0:o.scrollLeft())}},_rearrange:function(n,t,i,r){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?t.item[0]:t.item[0].nextSibling);this.counter=this.counter?++this.counter:1;var u=this,f=this.counter;window.setTimeout(function(){f==u.counter&&u.refreshPositions(!r)},0)},_clear:function(t,i){var u,f,r;if(this.reverting=!1,u=[],f=this,!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]==this.currentItem[0]){for(r in this._storedCSS)(this._storedCSS[r]=="auto"||this._storedCSS[r]=="static")&&(this._storedCSS[r]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();if(this.fromOutside&&!i&&u.push(function(n){this._trigger("receive",n,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!i&&u.push(function(n){this._trigger("update",n,this._uiHash())}),!n.ui.contains(this.element[0],this.currentItem[0]))for(i||u.push(function(n){this._trigger("remove",n,this._uiHash())}),r=this.containers.length-1;r>=0;r--)n.ui.contains(this.containers[r].element[0],this.currentItem[0])&&!i&&(u.push(function(n){return function(t){n._trigger("receive",t,this._uiHash(this))}}.call(this,this.containers[r])),u.push(function(n){return function(t){n._trigger("update",t,this._uiHash(this))}}.call(this,this.containers[r])));for(r=this.containers.length-1;r>=0;r--)i||u.push(function(n){return function(t){n._trigger("deactivate",t,this._uiHash(this))}}.call(this,this.containers[r])),this.containers[r].containerCache.over&&(u.push(function(n){return function(t){n._trigger("out",t,this._uiHash(this))}}.call(this,this.containers[r])),this.containers[r].containerCache.over=0);if(this._storedCursor&&n("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!i){for(this._trigger("beforeStop",t,this._uiHash()),r=0;r<u.length;r++)u[r].call(this,t);this._trigger("stop",t,this._uiHash())}return!1}if(i||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!=this.currentItem[0]&&this.helper.remove(),this.helper=null,!i){for(r=0;r<u.length;r++)u[r].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){n.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||n([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}});n.extend(n.ui.sortable,{version:"1.8.16"})})(jQuery);