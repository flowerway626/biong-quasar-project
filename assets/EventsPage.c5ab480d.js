import{r as c,af as v,H as p,b1 as f,S as g,j as r,k as m,l as s,F as k,P as x,ay as y,M as b,J as w,K as B,d as q,Q as S,R as h}from"./index.6524b1e7.js";const E={id:"user-event"},A=s("div",{class:"backH4 text-h4 text-center"},"\u5831\u540D\u6D3B\u52D5",-1),C={class:"q-pa-md w-100 row"},F={class:"content",style:{height:"100%"}},P={class:"row"},Q={class:"col"},H={class:"text-subtitle2 q-mt-md"},I={class:"text-subtitle1"},j={__name:"EventsPage",setup(N){y();const n=c(!1);v(),c(!1),c("");const i=p([]);return(async()=>{var a,o;try{n.value=!0;const{data:e}=await f.get("/users/event");i.push(...e.result),n.value=!1}catch(e){g.fire({toast:!0,timer:1e3,showConfirmButton:!1,background:"#F5ABA5",icon:"error",color:"black",text:((o=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:o.message)||"\u53D6\u5F97\u6D3B\u52D5\u932F\u8AA4\uFF01"})}})(),(a,o)=>{const e=b("router-link");return r(),m("div",E,[A,s("div",C,[(r(!0),m(k,null,x(i,t=>(r(),w(e,{class:"eventInfo col-12 col-md-5 q-pa-sm q-mb-xl",key:t._id,to:"/event/"+t.e_id._id},{default:B(()=>{var l,d,_,u;return[s("div",F,[s("div",P,[q(S,{class:"col q-mr-md",src:(l=t.e_id)==null?void 0:l.image,height:"100%"},null,8,["src"]),s("div",Q,[s("div",H,h(((d=t.e_id)==null?void 0:d.dateStart)+" ~ "+((_=t.e_id)==null?void 0:_.dateEnd)),1),s("div",I,h((u=t.e_id)==null?void 0:u.name),1)])])])]}),_:2},1032,["to"]))),128))])])}}};export{j as default};
