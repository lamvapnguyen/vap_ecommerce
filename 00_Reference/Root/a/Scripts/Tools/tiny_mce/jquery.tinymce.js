(function(n){function u(){function e(n){n==="remove"&&this.each(function(n,t){var i=u(t);i&&i.remove()});this.find("span.mceEditor,div.mceEditor").each(function(n,t){var i=tinyMCE.get(t.id.replace(/_parent$/,""));i&&i.remove()})}function o(n){var t=this,r;if(n!==i)e.call(t),t.each(function(t,i){var r;(r=tinyMCE.get(i.id))&&r.setContent(n)});else if(t.length>0&&(r=tinyMCE.get(t[0].id)))return r.getContent()}function u(n){var i=null;return n&&n.id&&t.tinymce&&(i=tinyMCE.get(n.id)),i}function f(n){return!!(n&&n.length&&t.tinymce&&n.is(":tinymce"))}var r={};n.each(["text","html","val"],function(t,e){var s=r[e]=n.fn[e],h=e==="text";n.fn[e]=function(t){var r=this,e,c;return f(r)?t!==i?(o.call(r.filter(":tinymce"),t),s.apply(r.not(":tinymce"),arguments),r):(e="",c=arguments,(h?r:r.eq(0)).each(function(t,i){var r=u(i);e+=r?h?r.getContent().replace(/<(?:"[^"]*"|'[^']*'|[^'">])*>/g,""):r.getContent():s.apply(n(i),c)}),e):s.apply(r,arguments)}});n.each(["append","prepend"],function(t,e){var o=r[e]=n.fn[e],s=e==="prepend";n.fn[e]=function(n){var t=this;return f(t)?n!==i?(t.filter(":tinymce").each(function(t,i){var r=u(i);r&&r.setContent(s?n+r.getContent():r.getContent()+n)}),o.apply(t.not(":tinymce"),arguments),t):void 0:o.apply(t,arguments)}});n.each(["remove","replaceWith","replaceAll","empty"],function(t,i){var u=r[i]=n.fn[i];n.fn[i]=function(){return e.call(this,i),u.apply(this,arguments)}});r.attr=n.fn.attr;n.fn.attr=function(t,e,s){var h=this,c,l;return!t||t!=="value"||!f(h)?r.attr.call(h,t,e,s):e!==i?(o.call(h.filter(":tinymce"),e),r.attr.call(h.not(":tinymce"),t,e,s),h):(c=h[0],l=u(c),l?l.getContent():r.attr.call(n(c),t,e,s))}}var i,r,f=[],t=window;n.fn.tinymce=function(i){function l(){var t=[],r=0;u&&(u(),u=null);o.each(function(n,u){var f,e=u.id,s=i.oninit;e||(u.id=e=tinymce.DOM.uniqueId());f=new tinymce.Editor(e,i);t.push(f);f.onInit.add(function(){var i,n=s;o.css("visibility","");s&&++r==t.length&&(tinymce.is(n,"string")&&(i=n.indexOf(".")===-1?null:tinymce.resolve(n.replace(/\.\w+$/,"")),n=tinymce.resolve(n)),n.apply(i||tinymce,t))})});n.each(t,function(n,t){t.render()})}var o=this,e,a,c,h,v="",s="";return o.length?i?(o.css("visibility","hidden"),t.tinymce||r||!(e=i.script_url)?r===1?f.push(l):l():(r=1,a=e.substring(0,e.lastIndexOf("/")),/_(src|dev)\.js/g.test(e)&&(s="_src"),c=e.lastIndexOf("?"),c!=-1&&(v=e.substring(c+1)),t.tinyMCEPreInit=t.tinyMCEPreInit||{base:a,suffix:s,query:v},e.indexOf("gzip")!=-1&&(h=i.language||"en",e=e+(/\?/.test(e)?"&":"?")+"js=true&core=true&suffix="+escape(s)+"&themes="+escape(i.theme)+"&plugins="+escape(i.plugins)+"&languages="+h,t.tinyMCE_GZ||(tinyMCE_GZ={start:function(){function t(n){tinymce.ScriptLoader.markDone(tinyMCE.baseURI.toAbsolute(n))}tinymce.suffix=s;t("langs/"+h+".js");t("themes/"+i.theme+"/editor_template"+s+".js");t("themes/"+i.theme+"/langs/"+h+".js");n.each(i.plugins.split(","),function(n,i){i&&(t("plugins/"+i+"/editor_plugin"+s+".js"),t("plugins/"+i+"/langs/"+h+".js"))})},end:function(){}})),n.ajax({type:"GET",url:e,dataType:"script",cache:!0,success:function(){tinymce.dom.Event.domLoaded=1;r=2;i.script_loaded&&i.script_loaded();l();n.each(f,function(n,t){t()})}})),o):tinyMCE.get(o[0].id):o};n.extend(n.expr[":"],{tinymce:function(n){return n.id&&!!tinyMCE.get(n.id)}})})(jQuery);