function EditTabGroupBox(n,t){this.tab=n;this.content=t;this.curTab=null}var __boxEditTabs={index:0,arrGroup:[],init:function(n,t,i){var r=new EditTabGroupBox(t,i),u,f;for(r.content=getEById(r.content),u=0;u<r.tab.length;u++)f=getEById(r.tab[u][0]),f!=null&&(f.content=getEById(r.tab[u][1]),$(f).mousedown(function(){var n=r;this!=n.curTab&&(n.curTab&&(n.curTab.className="tab_title",$(n.curTab.content).hide()),this.className="tab_title_select",this.content=getEById(this.content),this.content.parentNode!=n.content&&(this.content.parentNode.removeChild(this.content),n.content.appendChild(this.content)),$(this.content).show(),n.curTab=this)}));r.tab.length>0&&(r.curTab=getEById(r.tab[0][0]),r.curTab.content=getEById(r.tab[0][1]));__boxEditTabs.arrGroup.push(r)}};