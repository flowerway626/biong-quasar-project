import{Q as u}from"./QImg.9d882772.js";import{Q as c}from"./QCardSection.2335a465.js";import{Q as m}from"./QCard.3f9d0f50.js";import{J as p,S as v,I as f,j as l,k as i,l as a,F as h,M as g,at as x,V as k,K as t,d as s,N as _,A as y}from"./index.e2f377c7.js";const B={id:"event-all"},C=a("div",{class:"text-h5 text-center"},"\u6700\u65B0\u6D3B\u52D5",-1),Q={class:"flex"},b={class:"text-subtitle1"},w={class:"text-subtitle2 text-justify"},j={__name:"EventPage",setup(S){const d=x();(async()=>{var o,n;try{const{data:e}=await p.get("/events");r.push(...e.result),console.log(r)}catch(e){v.fire({toast:!0,timer:1e3,showConfirmButton:!1,background:"#F5ABA5",icon:"error",color:"black",text:((n=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:n.message)||"\u53D6\u5F97\u6D3B\u52D5\u932F\u8AA4\uFF01"})}})();const r=f([]);return(o,n)=>(l(),i("div",B,[C,a("div",Q,[(l(!0),i(h,null,g(r,e=>(l(),k(m,{class:"q-ma-md cursor-pointer",key:e._id,onClick:A=>y(d).push("/event/"+e._id)},{default:t(()=>[s(c,null,{default:t(()=>[s(u,{src:e.image},null,8,["src"])]),_:2},1024),s(c,null,{default:t(()=>[a("div",b,_(e.name),1)]),_:2},1024),s(c,{class:"q-pt-none"},{default:t(()=>[a("div",w,_(e.description),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))])]))}};export{j as default};
