(function(n){n.ui=n.ui||{};var i=/left|center|right/,r=/top|center|bottom/,t="center",u=n.fn.position,f=n.fn.offset;n.fn.position=function(f){if(!f||!f.of)return u.apply(this,arguments);f=n.extend({},f);var o=n(f.of),a=o[0],l=(f.collision||"flip").split(" "),s=f.offset?f.offset.split(" "):[0,0],h,c,e;return a.nodeType===9?(h=o.width(),c=o.height(),e={top:0,left:0}):a.setTimeout?(h=o.width(),c=o.height(),e={top:o.scrollTop(),left:o.scrollLeft()}):a.preventDefault?(f.at="left top",h=c=0,e={top:f.of.pageY,left:f.of.pageX}):(h=o.outerWidth(),c=o.outerHeight(),e=o.offset()),n.each(["my","at"],function(){var n=(f[this]||"").split(" ");n.length===1&&(n=i.test(n[0])?n.concat([t]):r.test(n[0])?[t].concat(n):[t,t]);n[0]=i.test(n[0])?n[0]:t;n[1]=r.test(n[1])?n[1]:t;f[this]=n}),l.length===1&&(l[1]=l[0]),s[0]=parseInt(s[0],10)||0,s.length===1&&(s[1]=s[0]),s[1]=parseInt(s[1],10)||0,f.at[0]==="right"?e.left+=h:f.at[0]===t&&(e.left+=h/2),f.at[1]==="bottom"?e.top+=c:f.at[1]===t&&(e.top+=c/2),e.left+=s[0],e.top+=s[1],this.each(function(){var r=n(this),u=r.outerWidth(),o=r.outerHeight(),a=parseInt(n.curCSS(this,"marginLeft",!0))||0,v=parseInt(n.curCSS(this,"marginTop",!0))||0,p=u+a+parseInt(n.curCSS(this,"marginRight",!0))||0,w=o+v+parseInt(n.curCSS(this,"marginBottom",!0))||0,i=n.extend({},e),y;f.my[0]==="right"?i.left-=u:f.my[0]===t&&(i.left-=u/2);f.my[1]==="bottom"?i.top-=o:f.my[1]===t&&(i.top-=o/2);i.left=Math.round(i.left);i.top=Math.round(i.top);y={left:i.left-a,top:i.top-v};n.each(["left","top"],function(t,r){n.ui.position[l[t]]&&n.ui.position[l[t]][r](i,{targetWidth:h,targetHeight:c,elemWidth:u,elemHeight:o,collisionPosition:y,collisionWidth:p,collisionHeight:w,offset:s,my:f.my,at:f.at})});n.fn.bgiframe&&r.bgiframe();r.offset(n.extend(i,{using:f.using}))})};n.ui.position={fit:{left:function(t,i){var r=n(window),u=i.collisionPosition.left+i.collisionWidth-r.width()-r.scrollLeft();t.left=u>0?t.left-u:Math.max(t.left-i.collisionPosition.left,t.left)},top:function(t,i){var r=n(window),u=i.collisionPosition.top+i.collisionHeight-r.height()-r.scrollTop();t.top=u>0?t.top-u:Math.max(t.top-i.collisionPosition.top,t.top)}},flip:{left:function(i,r){if(r.at[0]!==t){var u=n(window),s=r.collisionPosition.left+r.collisionWidth-u.width()-u.scrollLeft(),f=r.my[0]==="left"?-r.elemWidth:r.my[0]==="right"?r.elemWidth:0,e=r.at[0]==="left"?r.targetWidth:-r.targetWidth,o=-2*r.offset[0];i.left+=r.collisionPosition.left<0?f+e+o:s>0?f+e+o:0}},top:function(i,r){if(r.at[1]!==t){var u=n(window),s=r.collisionPosition.top+r.collisionHeight-u.height()-u.scrollTop(),f=r.my[1]==="top"?-r.elemHeight:r.my[1]==="bottom"?r.elemHeight:0,e=r.at[1]==="top"?r.targetHeight:-r.targetHeight,o=-2*r.offset[1];i.top+=r.collisionPosition.top<0?f+e+o:s>0?f+e+o:0}}}};n.offset.setOffset||(n.offset.setOffset=function(t,i){/static/.test(n.curCSS(t,"position"))&&(t.style.position="relative");var r=n(t),u=r.offset(),e=parseInt(n.curCSS(t,"top",!0),10)||0,o=parseInt(n.curCSS(t,"left",!0),10)||0,f={top:i.top-u.top+e,left:i.left-u.left+o};"using"in i?i.using.call(t,f):r.css(f)},n.fn.offset=function(t){var i=this[0];return!i||!i.ownerDocument?null:t?this.each(function(){n.offset.setOffset(this,t)}):f.call(this)})})(jQuery);