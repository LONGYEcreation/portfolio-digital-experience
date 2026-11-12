// Portfolio 2 category wording only. Preserve markup, whitespace and layout.
(()=>{
function update(root){
 const walk=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;
 while(node=walk.nextNode()){
  if(node.parentElement?.closest('script,style,textarea,input,[contenteditable="true"]'))continue;
  const old=node.nodeValue;
  const value=old.replace(/AI PRODUCT FUNDAMENTALS/g,'DIGITAL DESIGN PRACTICE').replace(/AI\s*产品基础/g,'数字设计实践').replace(/产品思考/g,'数字体验').replace(/审美判断/g,'品牌策略').replace(/PRODUCT THINKING/g,'DIGITAL EXPERIENCE').replace(/AESTHETIC JUDGMENT/g,'BRAND STRATEGY').replace(/创意指导(\s*)(与|&|＆)(\s*)审美评测/g,'品牌策略$1$2$3视觉体系').replace(/CREATIVE DIRECTION(\s*&\s*)AESTHETIC EVALUATION/g,'BRAND STRATEGY$1VISUAL SYSTEMS');
  const updated=value.replace(/(数字体验\s*(?:与|&|＆)\s*)AI\s*构建/g,'$1UI/UX 设计').replace(/(DIGITAL EXPERIENCE\s*&\s*)AI(?:-NATIVE)? BUILDING/g,'$1UI/UX DESIGN');
const finalValue=node.parentElement?.closest('.product-panel .panel-title')?updated.replace(/AI\s*构建/g,'UI/UX 设计').replace(/AI(?:-NATIVE)? BUILDING/g,'UI/UX DESIGN'):updated;
if(finalValue!==old)node.nodeValue=finalValue;
 }
}
function start(){update(document.body);new MutationObserver(()=>update(document.body)).observe(document.body,{subtree:true,childList:true,characterData:true});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
