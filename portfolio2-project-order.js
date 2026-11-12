// Portfolio 2 order: Nitunxiang, ChatCut research, ChatCut interaction.
(()=>{
const numbers={'01':'02','02':'03','03':'01'};
const seen=new WeakMap();
function labels(){if(location.pathname.endsWith('/about.html'))return;const walk=document.createTreeWalker(document,NodeFilter.SHOW_TEXT);let n;while(n=walk.nextNode()){
 if(n.parentElement?.closest('script,style,textarea,input,select,option,#p2CaseCopyEditor,.work-editor,.layout-editor'))continue;
 if(seen.get(n)===n.nodeValue)continue;
 const value=n.nodeValue.replace(/CASE(\s*)0([123])(?!\d)/g,(_,space,num)=>'CASE'+space+numbers['0'+num]);
 if(value!==n.nodeValue)n.nodeValue=value;seen.set(n,value);
}}
function start(){
 // Rewrite links after original saved-copy lookups have used their stable IDs.
 document.querySelectorAll('a[href]').forEach(a=>{const raw=a.getAttribute('href');a.setAttribute('href',raw.replace(/([?&]case=)(0[123])\b/g,(_,prefix,num)=>prefix+numbers[num]));});
 const work=[...document.querySelectorAll('.column:not(.creative) .work-row')];
 if(work.length===3){work[0].before(work[2]);[work[2],work[0],work[1]].forEach((row,i)=>{row.querySelector('.row-number').textContent='0'+(i+1)})}
 const choices=document.querySelector('.project-choices');
 if(choices){const buttons=[...choices.querySelectorAll(':scope > button[data-project]')];if(buttons.length===3){const third=buttons[2],detail=third.nextElementSibling;buttons[0].before(third);if(detail)third.after(detail)}}
 // SVG slots retain their geometry; move each complete project node to its new slot.
 const nodes=[...document.querySelectorAll('.map a.project-node')].filter(a=>a.querySelector('[data-project="0"],[data-project="1"],[data-project="2"]'));
 if(nodes.length===3){const xs=nodes.map(a=>Number(a.querySelector('rect').getAttribute('x')));nodes.forEach((a,i)=>{const slot=[1,2,0][i];a.setAttribute('transform','translate('+(xs[slot]-xs[i])+' 0)')});}
 const mobile=[...document.querySelectorAll('.mobile-map a[data-project]')].filter(a=>Number(a.dataset.project)<3);
 if(mobile.length===3)mobile[0].before(mobile[2]);
 const order=['case03-nitunxiang.html','case-chatcut.html','case-nitunxiang.html'];
 const aliases={'case01-nitunxiang.html':'case03-nitunxiang.html','case02-chatcut.html':'case-chatcut.html','case03-chatcut.html':'case-nitunxiang.html'};const filename=location.pathname.split('/').pop(),current=aliases[filename]||filename,index=order.indexOf(current);
 if(index>=0){const nav=document.querySelector('.case-navigation');if(nav){
 const first=index>0?{href:order[index-1],label:'CASE 0'+index,hint:'← 直通项目'+['一','二','三'][index-1]}:{href:'work.html',label:'PROJECTS',hint:'← 直通项目页'};
 const last=index<2?{href:order[index+1],label:'CASE 0'+(index+2),hint:'直通项目'+['一','二','三'][index+1]+' →'}:{href:'work.html',label:'PROJECTS',hint:'直通项目页 →'};
 nav.innerHTML='<div class="case01-shortcut"><a href="'+first.href+'">'+first.label+'</a><span class="shortcut-hint">'+first.hint+'</span></div><div class="case01-shortcut"><span class="shortcut-hint">'+last.hint+'</span><a href="'+last.href+'">'+last.label+'</a></div>';
 // New navigation numbers already use the new order.
 const w=document.createTreeWalker(nav,NodeFilter.SHOW_TEXT);let n;while(n=w.nextNode())seen.set(n,n.nodeValue);
 }}
 labels();new MutationObserver(labels).observe(document.documentElement,{childList:true,subtree:true,characterData:true});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
