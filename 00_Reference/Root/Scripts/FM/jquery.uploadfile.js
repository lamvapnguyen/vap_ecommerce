(function(n){n.fn.ajaxForm==undefined&&n.getScript("/Scripts/FM/jquery.form.js");var t={};t.fileapi=n("<input type='file'/>").get(0).files!==undefined;t.formdata=window.FormData!==undefined;n.fn.uploadFile=function(i){function p(){u.afterUploadAll&&!e&&(e=!0,function n(){r.sCounter!=0&&r.sCounter+r.fCounter==r.tCounter?(u.afterUploadAll(r),e=!1):window.setTimeout(n,100)}())}function w(t,i,r){r.bind("dragenter",function(t){t.stopPropagation();t.preventDefault();n(this).css("border","2px solid #A5A5C7")});r.bind("dragover",function(n){n.stopPropagation();n.preventDefault()});r.bind("drop",function(r){n(this).css("border","2px dotted #A5A5C7");r.preventDefault();t.errorLog.html("");var u=r.originalEvent.dataTransfer.files;if(!i.multiple&&u.length>1){i.showError&&n("<div style='color:red;'>"+i.multiDragErrorStr+"<\/div>").appendTo(t.errorLog);return}i.onSelect(u)!=!1&&h(i,t,u)});n(document).bind("dragenter",function(n){n.stopPropagation();n.preventDefault()});n(document).bind("dragover",function(n){n.stopPropagation();n.preventDefault();r.css("border","2px dotted #A5A5C7")});n(document).bind("drop",function(n){n.stopPropagation();n.preventDefault();r.css("border","2px dotted #A5A5C7")})}function b(n){var t="",i=n/1024,r;return parseInt(i)>1024?(r=i/1024,t=r.toFixed(2)+" MB"):t=i.toFixed(2)+" KB",t}function s(t){var r=[],e,u,i,f;for(r=jQuery.type(t)=="string"?t.split("&"):n.param(t).split("&"),e=r.length,u=[],i=0;i<e;i++)r[i]=r[i].replace(/\+/g," "),f=r[i].split("="),u.push([decodeURIComponent(f[0]),decodeURIComponent(f[1])]);return u}function h(t,i,r){for(var h,e,f,l,y,p,w,u=0;u<r.length;u++){if(!c(i,t,r[u].name)){t.showError&&n("<div style='color:red;'><b>"+r[u].name+"<\/b> "+t.extErrorStr+t.allowedTypes+"<\/div>").appendTo(i.errorLog);continue}if(t.maxFileSize!=-1&&r[u].size>t.maxFileSize){t.showError&&n("<div style='color:red;'><b>"+r[u].name+"<\/b> "+t.sizeErrorStr+b(t.maxFileSize)+"<\/div>").appendTo(i.errorLog);continue}var k=t,o=new FormData,d=t.fileName.replace("[]","");if(o.append(d,r[u]),h=t.formData,h)for(e=s(h),f=0;f<e.length;f++)e[f]&&o.append(e[f][0],e[f][1]);k.fileData=o;l=new a(i,t);y="";y=t.showFileCounter?i.fileCounter+t.fileCounterStyle+r[u].name:r[u].name;l.filename.html(y);p=n("<form style='display:block; position:absolute;left: 150px;' class='"+i.formGroup+"' method='"+t.method+"' action='"+t.url+"' enctype='"+t.enctype+"'><\/form>");p.appendTo("body");w=[];w.push(r[u].name);v(p,k,l,w,i);i.fileCounter++}}function c(n,t,i){var r=t.allowedTypes.toLowerCase().split(","),u=i.split(".").pop().toLowerCase();return t.allowedTypes!="*"&&jQuery.inArray(u,r)<0?!1:!0}function l(i,r,u,f){var p="ajax-upload-id-"+(new Date).getTime(),e=n("<form method='"+u.method+"' action='"+u.url+"' enctype='"+u.enctype+"'><\/form>"),w="<input type='file' id='"+p+"' name='"+u.fileName+"'/>",y,o,s;u.multiple&&(u.fileName.indexOf("[]")!=u.fileName.length-2&&(u.fileName+="[]"),w="<input type='file' id='"+p+"' name='"+u.fileName+"' multiple/>");y=n(w).appendTo(e);y.change(function(){var d,s,y,p,k,w,o,b;if(i.errorLog.html(""),d=u.allowedTypes.toLowerCase().split(","),s=[],this.files){for(o=0;o<this.files.length;o++)s.push(this.files[o].name);if(u.onSelect(this.files)==!1)return}else{if(y=n(this).val(),p=[],s.push(y),!c(i,u,y)){u.showError&&n("<div style='color:red;'><b>"+y+"<\/b> "+u.extErrorStr+u.allowedTypes+"<\/div>").appendTo(i.errorLog);return}if(p.push({name:y,size:"NA"}),u.onSelect(p)==!1)return}if(f.unbind("click"),e.hide(),l(i,r,u,f),e.addClass(r),t.fileapi&&t.formdata)e.removeClass(r),k=this.files,h(u,i,k);else{for(w="",o=0;o<s.length;o++)w+=u.showFileCounter?i.fileCounter+u.fileCounterStyle+s[o]+"<br>":s[o]+"<br>",i.fileCounter++;b=new a(i,u);b.filename.html(w);v(e,u,b,s,i)}});e.css({margin:0,padding:0});o=n(f).width()+10;o==10&&(o=120);s=f.height()+10;s==10&&(s=35);f.css({position:"relative",overflow:"hidden",cursor:"default"});y.css({position:"absolute",cursor:"pointer",top:"0px",width:o,height:s,left:"0px","z-index":"100",opacity:"0.0",filter:"alpha(opacity=0)","-ms-filter":"alpha(opacity=0)","-khtml-opacity":"0.0","-moz-opacity":"0.0"});e.appendTo(f)}function a(t,i){return this.statusbar=n("<div class='ajax-file-upload-statusbar'><\/div>"),this.filename=n("<div class='ajax-file-upload-filename'><\/div>").appendTo(this.statusbar),this.progressDiv=n("<div class='ajax-file-upload-progress'>").appendTo(this.statusbar).hide(),this.progressbar=n("<div class='ajax-file-upload-bar "+t.formGroup+"'><\/div>").appendTo(this.progressDiv),this.abort=n("<div class='ajax-file-upload-red "+t.formGroup+"'>"+i.abortStr+"<\/div>").appendTo(this.statusbar).hide(),this.cancel=n("<div class='ajax-file-upload-red'>"+i.cancelStr+"<\/div>").appendTo(this.statusbar).hide(),this.done=n("<div class='ajax-file-upload-green'>"+i.doneStr+"<\/div>").appendTo(this.statusbar).hide(),this.del=n("<div class='ajax-file-upload-red'>"+i.deletelStr+"<\/div>").appendTo(this.statusbar).hide(),n("<div style='clear:both;'><\/div>").appendTo(this.statusbar),t.errorLog.after(this.statusbar),this}function v(n,i,r,u,f){var e={cache:!1,contentType:!1,processData:!1,forceSync:!1,data:i.formData,formData:i.fileData,dataType:i.returnType,beforeSubmit:function(t,e,o){var l,h,c;if(i.onSubmit.call(this,u)!=!1){if(l=i.dynamicFormData(),l&&(h=s(l),h))for(c=0;c<h.length;c++)h[c]&&(i.fileData!=undefined?o.formData.append(h[c][0],h[c][1]):o.data[h[c][0]]=h[c][1]);return f.tCounter+=u.length,p(),!0}return r.statusbar.append("<div style='color:red;'>"+i.uploadErrorStr+"<\/div>"),r.cancel.show(),n.remove(),r.cancel.click(function(){r.statusbar.remove()}),!1},beforeSend:function(n){r.progressDiv.show();r.cancel.hide();r.done.hide();i.showAbort&&(r.abort.show(),r.abort.click(function(){n.abort()}));t.formdata?r.progressbar.width("1%"):r.progressbar.width("5%")},uploadProgress:function(n,t,u,f){f>98&&(f=98);var e=f+"%";f>1&&r.progressbar.width(e);i.showProgress&&(r.progressbar.html(e),r.progressbar.css("text-align","center"))},success:function(t,e,o){f.responses.push(t);r.progressbar.width("100%");i.showProgress&&(r.progressbar.html("100%"),r.progressbar.css("text-align","center"));r.abort.hide();i.onSuccess.call(this,u,t,o);i.showStatusAfterSuccess?(i.showDone?(r.done.show(),r.done.click(function(){r.statusbar.hide("slow");r.statusbar.remove()})):r.done.hide(),i.showDelete?(r.del.show(),r.del.click(function(){i.deleteCallback&&i.deleteCallback.call(this,t,r)})):r.del.hide()):(r.statusbar.hide("slow"),r.statusbar.remove());n.remove();f.sCounter+=u.length},error:function(t,e,o){r.abort.hide();t.statusText=="abort"?r.statusbar.hide("slow"):(i.onError.call(this,u,e,o),i.showStatusAfterError?(r.progressDiv.hide(),r.statusbar.append("<span style='color:red;'>ERROR: "+o+"<\/span>")):(r.statusbar.hide(),r.statusbar.remove()));n.remove();f.fCounter+=u.length}};i.autoSubmit?n.ajaxSubmit(e):(i.showCancel&&(r.cancel.show(),r.cancel.click(function(){n.remove();r.statusbar.remove()})),n.ajaxForm(e))}var u=n.extend({url:"",method:"POST",enctype:"multipart/form-data",formData:null,returnType:null,allowedTypes:"*",fileName:"file",formData:{},dynamicFormData:function(){return{}},maxFileSize:-1,multiple:!0,dragDrop:!0,autoSubmit:!0,showCancel:!0,showAbort:!0,showDone:!0,showDelete:!1,showError:!0,showStatusAfterSuccess:!0,showStatusAfterError:!0,showFileCounter:!0,fileCounterStyle:"). ",showProgress:!1,onSelect:function(){return!0},onSubmit:function(){},onSuccess:function(){},onError:function(){},deleteCallback:!1,afterUploadAll:!1,uploadButtonClass:"ajax-file-upload",dragDropStr:"<div class='ddtext'>Kéo &amp; Thả các file vào khung này<\/div><div style='padding:10px;'>Hoặc bấm nút phía dưới để chọn file<\/div><div style='clear:both;'><\/div>",abortStr:"Dừng",cancelStr:"Hủy",deletelStr:"Xóa",doneStr:"Ok",multiDragErrorStr:"Không thể Kéo &amp; Thả nhiều file.",extErrorStr:"is not allowed. Allowed extensions: ",sizeErrorStr:"is not allowed. Allowed Max size: ",uploadErrorStr:"Upload is not allowed"},i),o,r,f,e;return this.fileCounter=1,this.fCounter=0,this.sCounter=0,this.tCounter=0,o="ajax-file-upload-"+(new Date).getTime(),this.formGroup=o,this.hide(),this.errorLog=n("<div><\/div>"),this.after(this.errorLog),this.responses=[],t.formdata||(u.dragDrop=!1),r=this,f=n("<div>"+n(this).html()+"<\/div>"),n(f).addClass(u.uploadButtonClass),function y(){if(n.fn.ajaxForm){if(u.dragDrop){var t=n('<div class="ajax-upload-dragdrop" style="vertical-align:top;"><\/div>');n(r).before(t);n(t).append(n(u.dragDropStr));n(t).append(f);w(r,u,t)}else n(r).before(f);l(r,o,u,f)}else window.setTimeout(y,10)}(),this.startUpload=function(){n("."+this.formGroup).each(function(){n(this).is("form")&&n(this).submit()})},this.stopUpload=function(){n(".ajax-file-upload-red").each(function(){n(this).hasClass(r.formGroup)&&n(this).click()})},this.getResponses=function(){return this.responses},e=!1,this}})(jQuery);