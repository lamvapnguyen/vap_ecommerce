tinyMCEPopup.requireLangPack();var AnchorDialog={init:function(n){var t,i=document.forms[0];this.editor=n;t=n.dom.getParent(n.selection.getNode(),"A,IMG");v=n.dom.getAttrib(t,"name");v&&(this.action="update",i.anchorName.value=v);i.insert.value=n.getLang(t?"update":"insert")},update:function(){var n=this.editor;tinyMCEPopup.restoreSelection();this.action!="update"&&n.selection.collapse(1);tinymce.isWebKit?n.execCommand("mceInsertContent",0,n.dom.createHTML("img",{mce_name:"a",name:document.forms[0].anchorName.value,"class":"mceItemAnchor"})):n.execCommand("mceInsertContent",0,n.dom.createHTML("a",{name:document.forms[0].anchorName.value,"class":"mceItemAnchor"},""));tinyMCEPopup.close()}};tinyMCEPopup.onInit.add(AnchorDialog.init,AnchorDialog);