function init(){ed=tinyMCEPopup.editor;tinyMCEPopup.resizeToInnerSize();document.getElementById("backgroundimagebrowsercontainer").innerHTML=getBrowserHTML("backgroundimagebrowser","backgroundimage","image","table");document.getElementById("bordercolor_pickcontainer").innerHTML=getColorPickerHTML("bordercolor_pick","bordercolor");document.getElementById("bgcolor_pickcontainer").innerHTML=getColorPickerHTML("bgcolor_pick","bgcolor");var w=ed,n=ed.dom.getParent(ed.selection.getStart(),"td,th"),t=document.forms[0],i=ed.dom.parseStyle(ed.dom.getAttrib(n,"style")),r=n.nodeName.toLowerCase(),u=ed.dom.getAttrib(n,"align"),f=ed.dom.getAttrib(n,"valign"),e=trimSize(getStyle(n,"width","width")),o=trimSize(getStyle(n,"height","height")),s=convertRGBToHex(getStyle(n,"bordercolor","borderLeftColor")),h=convertRGBToHex(getStyle(n,"bgcolor","backgroundColor")),c=ed.dom.getAttrib(n,"class"),l=getStyle(n,"background","backgroundImage").replace(new RegExp("url\\(['\"]?([^'\"]*)['\"]?\\)","gi"),"$1"),a=ed.dom.getAttrib(n,"id"),v=ed.dom.getAttrib(n,"lang"),y=ed.dom.getAttrib(n,"dir"),p=ed.dom.getAttrib(n,"scope");addClassesToList("class","table_cell_styles");TinyMCE_EditableSelects.init();ed.dom.hasClass(n,"mceSelected")?tinyMCEPopup.dom.hide("action"):(t.bordercolor.value=s,t.bgcolor.value=h,t.backgroundimage.value=l,t.width.value=e,t.height.value=o,t.id.value=a,t.lang.value=v,t.style.value=ed.dom.serializeStyle(i),selectByValue(t,"align",u),selectByValue(t,"valign",f),selectByValue(t,"class",c,!0,!0),selectByValue(t,"celltype",r),selectByValue(t,"dir",y),selectByValue(t,"scope",p),isVisible("backgroundimagebrowser")&&(document.getElementById("backgroundimage").style.width="180px"),updateColor("bordercolor_pick","bordercolor"),updateColor("bgcolor_pick","bgcolor"))}function updateAction(){var t,u=ed,i,o,s,f=document.forms[0],h,c,e,r,n;if(tinyMCEPopup.restoreSelection(),t=ed.selection.getStart(),i=ed.dom.getParent(t,"td,th"),o=ed.dom.getParent(t,"tr"),s=ed.dom.getParent(t,"table"),ed.dom.hasClass(i,"mceSelected")){tinymce.each(ed.dom.select("td.mceSelected,th.mceSelected"),function(n){updateCell(n)});ed.addVisual();ed.nodeChanged();u.execCommand("mceEndUndoLevel");tinyMCEPopup.close();return}switch(getSelectValue(f,"action")){case"cell":h=getSelectValue(f,"celltype");c=getSelectValue(f,"scope");function l(n){n&&(updateCell(i),ed.addVisual(),ed.nodeChanged(),u.execCommand("mceEndUndoLevel"),tinyMCEPopup.close())}if(ed.getParam("accessibility_warnings",1)){h=="th"&&c==""?tinyMCEPopup.confirm(ed.getLang("table_dlg.missing_scope","",!0),l):l(1);return}updateCell(i);break;case"row":n=o.firstChild;n.nodeName!="TD"&&n.nodeName!="TH"&&(n=nextCell(n));do n=updateCell(n,!0);while((n=nextCell(n))!=null);break;case"all":for(e=s.getElementsByTagName("tr"),r=0;r<e.length;r++){n=e[r].firstChild;n.nodeName!="TD"&&n.nodeName!="TH"&&(n=nextCell(n));do n=updateCell(n,!0);while((n=nextCell(n))!=null)}}ed.addVisual();ed.nodeChanged();u.execCommand("mceEndUndoLevel");tinyMCEPopup.close()}function nextCell(n){while((n=n.nextSibling)!=null)if(n.nodeName=="TD"||n.nodeName=="TH")return n;return null}function updateCell(n,t){var s=ed,i=document.forms[0],h=n.nodeName.toLowerCase(),o=getSelectValue(i,"celltype"),c=s.getDoc(),r=ed.dom,u,e,f;if(t||r.setAttrib(n,"id",i.id.value),r.setAttrib(n,"align",i.align.value),r.setAttrib(n,"vAlign",i.valign.value),r.setAttrib(n,"lang",i.lang.value),r.setAttrib(n,"dir",getSelectValue(i,"dir")),r.setAttrib(n,"style",ed.dom.serializeStyle(ed.dom.parseStyle(i.style.value))),r.setAttrib(n,"scope",i.scope.value),r.setAttrib(n,"class",getSelectValue(i,"class")),ed.dom.setAttrib(n,"width",""),ed.dom.setAttrib(n,"height",""),ed.dom.setAttrib(n,"bgColor",""),ed.dom.setAttrib(n,"borderColor",""),ed.dom.setAttrib(n,"background",""),n.style.width=getCSSSize(i.width.value),n.style.height=getCSSSize(i.height.value),i.bordercolor.value!=""?(n.style.borderColor=i.bordercolor.value,n.style.borderStyle=n.style.borderStyle==""?"solid":n.style.borderStyle,n.style.borderWidth=n.style.borderWidth==""?"1px":n.style.borderWidth):n.style.borderColor="",n.style.backgroundColor=i.bgcolor.value,n.style.backgroundImage=i.backgroundimage.value!=""?"url('"+i.backgroundimage.value+"')":"",h!=o){for(u=c.createElement(o),e=0;e<n.childNodes.length;e++)u.appendChild(n.childNodes[e].cloneNode(1));for(f=0;f<n.attributes.length;f++)ed.dom.setAttrib(u,n.attributes[f].name,ed.dom.getAttrib(n,n.attributes[f].name));n.parentNode.replaceChild(u,n);n=u}return r.setAttrib(n,"style",r.serializeStyle(r.parseStyle(n.style.cssText))),n}function changedBackgroundImage(){var n=document.forms[0],t=ed.dom.parseStyle(n.style.value);t["background-image"]="url('"+n.backgroundimage.value+"')";n.style.value=ed.dom.serializeStyle(t)}function changedSize(){var n=document.forms[0],t=ed.dom.parseStyle(n.style.value),r=n.width.value,i;t.width=r!=""?getCSSSize(r):"";i=n.height.value;t.height=i!=""?getCSSSize(i):"";n.style.value=ed.dom.serializeStyle(t)}function changedColor(){var n=document.forms[0],t=ed.dom.parseStyle(n.style.value);t["background-color"]=n.bgcolor.value;t["border-color"]=n.bordercolor.value;n.style.value=ed.dom.serializeStyle(t)}function changedStyle(){var t=document.forms[0],n=ed.dom.parseStyle(t.style.value);t.backgroundimage.value=n["background-image"]?n["background-image"].replace(new RegExp("url\\('?([^']*)'?\\)","gi"),"$1"):"";n.width&&(t.width.value=trimSize(n.width));n.height&&(t.height.value=trimSize(n.height));n["background-color"]&&(t.bgcolor.value=n["background-color"],updateColor("bgcolor_pick","bgcolor"));n["border-color"]&&(t.bordercolor.value=n["border-color"],updateColor("bordercolor_pick","bordercolor"))}tinyMCEPopup.requireLangPack();var ed;tinyMCEPopup.onInit.add(init);