import{J as u,S as p,I as m,j as o,k as i,l as a,F as v,P as x,M as h,K as g,L as t,d as s,Q as f,R as _,A as k}from"./index.98ef0d27.js";import{a as c,Q as y}from"./QCard.eecdb61c.js";const B={id:"event-all"},C=a("div",{class:"text-h5 text-center"},"\u6700\u65B0\u6D3B\u52D5",-1),Q={class:"flex"},b={class:"text-subtitle1 text-ellipsis"},w={class:"text-subtitle2 text-ellipsis text-justify"},P={__name:"EventPage",setup(S){const d=h();(async()=>{var n,r;try{const{data:e}=await u.get("/events");l.push(...e.result),console.log(l)}catch(e){p.fire({toast:!0,timer:1e3,showConfirmButton:!1,background:"#F5ABA5",icon:"error",color:"black",text:((r=(n=e==null?void 0:e.response)==null?void 0:n.data)==null?void 0:r.message)||"\u53D6\u5F97\u6D3B\u52D5\u932F\u8AA4\uFF01"})}})();const l=m([]);return(n,r)=>(o(),i("div",B,[C,a("div",Q,[(o(!0),i(v,null,x(l,e=>(o(),g(y,{class:"q-ma-md cursor-pointer",key:e._id,onClick:A=>k(d).push("/event/"+e._id)},{default:t(()=>[s(c,null,{default:t(()=>[s(f,{src:e.image},null,8,["src"])]),_:2},1024),s(c,null,{default:t(()=>[a("div",b,_(e.name),1)]),_:2},1024),s(c,{class:"q-pt-none"},{default:t(()=>[a("div",w,_(e.description),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))])]))}};export{P as default};
