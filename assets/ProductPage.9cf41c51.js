import{ah as P,r as _,H as f,I as g,S as x,j as d,k as u,d as t,K as y,b3 as S,l as o,Q as w,R as m,b7 as z,O as r,q as k,F as R,P as N,b4 as A,L as F,N as U}from"./index.de5b4897.js";import{Q as c,a as v}from"./QSkeleton.36a3ebfe.js";import{Q as C}from"./QInput.d0e8410d.js";import{u as E}from"./use-quasar.00d1d5e7.js";import"./use-key-composition.1763bbe6.js";const L={id:"product"},M={class:"flex flex-center",id:"productInfo"},D={class:"info text-black"},H={key:0,class:"row"},K={class:"col-12 col-sm-6 text-center"},O={class:"col-12 col-sm-6 column justify-between"},T={class:"text-h4 q-mb-md",style:{"font-family":"'Cubic'"}},G={class:"description pre"},J={class:"pre"},W={class:"row justify-around items-center"},X={class:"text-h4",style:{"font-family":"'Cubic'"}},Y={class:"row flex-center"},Z={key:1,class:"row"},ee={class:"col-12 col-sm-6 text-center q-my-auto"},te={class:"col-12 col-sm-6 column justify-between"},se={class:"row justify-around items-center"},oe={class:"row flex-center"},le={class:"text-center q-mt-xl"},ae={class:"row justify-center"},ie=["onClick"],re={class:"text-center"},ne={class:"column justify-between"},ce={class:"text-body1 q-mb-md"},ve={__name:"ProductPage",setup(de){const q=E(),Q=P(),{editCart:B}=Q,V=A(),h=F(),i=_(0),$=_(!1),n=f([]),p=_(!0),e=f({_id:"",name:"",price:0,description:"",image:"",sell:!0,category:""}),b=()=>{i.value===0?x.fire({toast:!0,timer:1e3,showConfirmButton:!1,background:"#F5ABA5",icon:"error",color:"black",text:"\u8ACB\u9078\u64C7\u5546\u54C1\u6578\u91CF\uFF01"}):(B({_id:e._id,quantity:i.value}),i.value=0,q.notify({type:"positive",color:"pink",message:"\u52A0\u5165\u8CFC\u7269\u8ECA",position:"top"}))},j=async s=>{const{data:l}=await g.get("/products/recom");n.splice(0,n.length),n.push(...l.result),console.log(n)},I=s=>{h.push("/shopping/"+s._id),e._id=s._id,e.name=s.name,e.price=s.price,e.description=s.description,e.image=s.image,e.category=s.category,e.sell=s.sell};return(async()=>{try{const s=await Promise.all([g.get("/products/"+V.params.id),g.get("/products/recom")]);e._id=s[0].data.result._id,e.name=s[0].data.result.name,e.price=s[0].data.result.price,e.description=s[0].data.result.description,e.image=s[0].data.result.image,e.category=s[0].data.result.category,e.sell=s[0].data.result.sell,n.push(...s[1].data.result),p.value=!1,document.title="Biong Biong | "+e.name,setTimeout(()=>{$.value=!0},3e3)}catch{x.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u5546\u54C1\u5931\u6557"}),h.push("/shopping")}})(),(s,l)=>(d(),u("div",L,[t(S,{class:"text-warning q-ma-md q-pl-xl","active-color":"grey"},{separator:y(()=>[t(U,{size:"1.5em",name:"chevron_right",color:"grey"})]),default:y(()=>[t(v,{label:"\u9996\u9801",icon:"mdi-home",to:"/"}),t(v,{label:"\u5468\u908A\u5546\u54C1",icon:"mdi-store",to:"/shopping"}),t(v,{label:e.name,icon:"mdi-shopping"},null,8,["label"])]),_:1}),o("div",M,[o("div",D,[p.value?k("",!0):(d(),u("div",H,[o("div",K,[t(w,{src:e==null?void 0:e.image},null,8,["src"])]),o("div",O,[o("div",T,m(e==null?void 0:e.name),1),o("p",G,m(e==null?void 0:e.description),1),t(z,{class:"scroll-area q-my-md",visible:"","bar-style":{borderRadius:"5px",background:"black"}},{default:y(()=>[o("p",J,m(e==null?void 0:e.description),1)]),_:1}),o("div",W,[o("div",X,"$ "+m(e==null?void 0:e.price),1),o("div",Y,[t(r,{color:"secondary",round:"",push:"",label:"-",onClick:l[0]||(l[0]=a=>i.value--)}),t(C,{modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=a=>i.value=a),modelModifiers:{number:!0},type:"number",style:{width:"100px","font-size":"16px"},"input-class":"text-center text-weight-bold  text-black"},null,8,["modelValue"]),t(r,{color:"secondary",round:"",push:"",label:"+",onClick:l[2]||(l[2]=a=>i.value++)})])]),t(r,{class:"full-width q-mt-md",rounded:"",size:"md",color:"pink",push:"",unelevated:"",label:"\u52A0\u5165\u8CFC\u7269\u8ECA",onClick:b})])])),p.value?(d(),u("div",Z,[o("div",ee,[t(c,{class:"bg-grey",width:"350px",height:"350px",style:{margin:"auto"}})]),o("div",te,[t(c,{class:"bg-grey text-h4",type:"text",width:"70%"}),t(c,{class:"bg-grey p",type:"text",width:"50%"}),t(c,{class:"bg-grey p",type:"text",width:"50%"}),t(c,{class:"bg-grey p",type:"text",width:"50%"}),o("div",se,[t(c,{class:"bg-grey text-h4",type:"text",width:"20%"}),o("div",oe,[t(r,{color:"secondary",round:"",flat:"",label:"-",onClick:l[3]||(l[3]=a=>i.value--)}),t(C,{modelValue:i.value,"onUpdate:modelValue":l[4]||(l[4]=a=>i.value=a),modelModifiers:{number:!0},type:"number",style:{width:"100px","font-size":"16px"},"input-class":"text-center text-weight-bold  text-black"},null,8,["modelValue"]),t(r,{color:"secondary",round:"",flat:"",label:"+",onClick:l[5]||(l[5]=a=>i.value++)})])]),t(r,{class:"full-width q-mt-md",rounded:"",size:"md",color:"pink",flat:"",label:"\u52A0\u5165\u8CFC\u7269\u8ECA",onClick:b})])])):k("",!0),o("div",le,[t(r,{class:"q-mb-md",label:"\u4F60\u4E5F\u8A31\u6703\u559C\u6B61...",outline:"",rounded:"",onClick:l[6]||(l[6]=a=>j())}),o("div",ae,[(d(!0),u(R,null,N(n,a=>(d(),u("div",{class:"more cursor-pointer",key:a._id,onClick:ue=>I(a)},[o("div",re,[t(w,{src:a.image,to:"'/'"},null,8,["src"])]),o("div",ne,[o("div",ce,m(a.name),1)])],8,ie))),128))])])])])]))}};export{ve as default};
