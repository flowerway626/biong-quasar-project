import{Q as u}from"./QImg.e2e6204a.js";import{Q as c}from"./QCardSection.51821f00.js";import{Q as m}from"./QCard.24c81a4d.js";import{J as p,S as v,I as h,j as l,k as i,l as a,F as f,N as g,M as x,K as k,L as t,d as s,O as _,A as y}from"./index.11c40bb4.js";const B={id:"event-all"},C=a("div",{class:"text-h5 text-center"},"\u6700\u65B0\u6D3B\u52D5",-1),Q={class:"flex"},w={class:"text-h6"},S={class:"text-subtitle1"},I={__name:"EventPage",setup(b){const d=x();(async()=>{var o,n;try{const{data:e}=await p.get("/events");r.push(...e.result),console.log(r)}catch(e){v.fire({toast:!0,timer:1e3,showConfirmButton:!1,background:"#F5ABA5",icon:"error",color:"black",text:((n=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:n.message)||"\u53D6\u5F97\u6D3B\u52D5\u932F\u8AA4\uFF01"})}})();const r=h([]);return(o,n)=>(l(),i("div",B,[C,a("div",Q,[(l(!0),i(f,null,g(r,e=>(l(),k(m,{class:"q-ma-md cursor-pointer",key:e._id,onClick:A=>y(d).push("/event/"+e._id)},{default:t(()=>[s(c,null,{default:t(()=>[s(u,{src:e.image},null,8,["src"])]),_:2},1024),s(c,null,{default:t(()=>[a("div",w,_(e.name),1)]),_:2},1024),s(c,{class:"q-pt-none"},{default:t(()=>[a("div",S,_(e.description),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))])]))}};export{I as default};
