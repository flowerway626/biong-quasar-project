import{Q as l}from"./QImg.97d4dead.js";import{I as _,aX as d,S as u,j as c,k as n,F as m,O as h,l as t,M as p,A as v,d as w,P as i}from"./index.a6c0b814.js";const x={id:"new-all"},g=t("div",{class:"text-h4 text-center q-pt-xl"},"\u6700\u65B0\u6D88\u606F",-1),y=["onClick"],f={class:"news-info row q-pa-md justify-center justify-sm-between justify-md-center"},k={class:"col-12 col-sm-3 q-mx-auto"},b={class:"col-12 col-sm-8 column justify-evenly"},j={class:"text-subtitle2"},B={class:"text-h6"},q={class:"text-subtitle1 text-ellipsis"},C={__name:"NewsPage",setup(A){const r=p(),s=_([]);return(async()=>{var a,o;try{const{data:e}=await d.get("/news");s.push(...e.result),s.reverse()}catch(e){u.fire({toast:!0,timer:1e3,showConfirmButton:!1,background:"#F5ABA5",icon:"error",color:"black",text:((o=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:o.message)||"\u53D6\u5F97\u6D3B\u52D5\u932F\u8AA4\uFF01"})}})(),(a,o)=>(c(),n("div",x,[g,(c(!0),n(m,null,h(s,e=>(c(),n("div",{class:"q-ma-sm",key:e._id,onClick:()=>v(r).push("/news/"+e._id)},[t("div",f,[t("div",k,[w(l,{src:e.image},null,8,["src"])]),t("div",b,[t("div",j,i(new Date(e.date).toLocaleString()),1),t("div",B,i(e.title),1),t("div",q,i(e.content),1)])])],8,y))),128))]))}};export{C as default};
