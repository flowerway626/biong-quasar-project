import{ah as l,M as p,j as o,k as n,d,A as u,Q as _,l as s,U as m,_ as g,I as f,J as v,S as y,F as i,R as h,W as x,X as S,s as I,t as P}from"./index.b47b057d.js";import{u as b}from"./use-quasar.9f4ec63a.js";var k="/biong-front/assets/\u5468\u908A\u5546\u54C1_animated.25e335a9.svg";const w={class:"product-Info",style:{width:"300px"}},q={class:"text-center text-body1"},B={__name:"ProductCard",props:{_id:{type:String,default:""},name:{type:String,default:""},price:{type:Number,default:0},description:{type:String,default:""},image:{type:String,default:""},category:{type:String,default:""},sell:{type:Boolean,default:!1}},setup(t){l();const a=p();return b(),(r,e)=>(o(),n("div",w,[d(_,{class:"cursor-pointer",src:t.image,onClick:e[0]||(e[0]=c=>u(a).push("/shopping/"+t._id))},null,8,["src"]),s("div",q,m(t.name),1)]))}};const $=t=>(I("data-v-fb6df532"),t=t(),P(),t),C=$(()=>s("div",{class:"text-center q-pt-xl"},[s("img",{src:k})],-1)),N={class:"q-ma-auto"},Q={class:"row"},R={__name:"ShoppingPage",setup(t){const a=f([]);return(async()=>{var r;try{const{data:e}=await v.get("/products");a.push(...e.result)}catch(e){y.fire({icon:"error",title:"error",text:((r=e==null?void 0:e.response)==null?void 0:r.data.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(r,e)=>(o(),n(i,null,[C,s("div",N,[s("div",Q,[(o(!0),n(i,null,h(a,c=>(o(),n("div",{class:"col-xs-12 col-sm-4 col-md-3 q-mx-xl q-my-md",key:c.id},[d(B,x(S(c)),null,16)]))),128))])])],64))}};var V=g(R,[["__scopeId","data-v-fb6df532"]]);export{V as default};
