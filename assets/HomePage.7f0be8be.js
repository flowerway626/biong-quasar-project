import{r as _,I as k,aX as b,S as g,j as n,k as c,d as u,K as p,F as w,l as r,V as d,O as f,q as i,N as y,bw as q,au as C}from"./index.8e5d787a.js";import{Q as v}from"./QInput.f3960b8b.js";import{Q}from"./QCardSection.229fc748.js";import{Q as $}from"./QCardActions.32d077fe.js";import{Q as B}from"./QCard.03da8402.js";import{Q as A}from"./QDialog.73b884d1.js";import{Q as U}from"./QForm.cd866f99.js";import{C as j}from"./ClosePopup.f63e6e04.js";import{u as F}from"./use-quasar.dc773a68.js";import"./uid.42677368.js";const S=r("h4",{class:"text-center"},"\u57FA\u672C\u8A2D\u5B9A",-1),L={class:"q-mx-auto",style:{width:"50%"}},N={class:"flex justify-between items-center"},D=r("div",{class:"text-body1 q-py-md"},"account",-1),E={key:0,class:"text-body1"},I={class:"flex justify-between items-center"},P=r("div",{class:"text-body1 q-py-md"},"name",-1),H={key:0,class:"text-body1"},K={class:"flex justify-between items-center"},O=r("div",{class:"text-body1 q-py-md"},"email",-1),X={key:0,class:"text-body1"},z={class:"flex justify-between items-center"},G=r("div",{class:"text-body1 q-py-md"},"phone",-1),J={key:0,class:"text-body1"},M=r("span",{class:"q-ml-sm"},"\u9001\u51FA\u5F8C\u7121\u6CD5\u56DE\u5FA9\uFF0C\u662F\u5426\u5132\u5B58\u4FEE\u6539\uFF1F",-1),ne={__name:"HomePage",setup(R){const x=F(),o=_(!1),m=_(!1),a=k({_id:"",account:"",email:"",name:"",phone:""}),e=k({_id:"",account:"",email:"",name:"",phone:""});(async()=>{try{const{data:t}=await b.get("/users/get");a._id=t.result._id,a.account=t.result.account,a.email=t.result.email,a.name=t.result.name,a.phone=t.result.phone,e._id=a._id,e.account=a.account,e.email=a.email,e.name=a.name,e.phone=a.phone}catch{g.fire({toast:!0,timer:1e3,showConfirmButton:!1,background:"#F5ABA5",icon:"error",color:"black",text:"\u8CC7\u6599\u53D6\u5F97\u5931\u6557\uFF01"})}})();const V=()=>{o.value=!1,e._id=a._id,e.account=a.account,e.email=a.email,e.name=a.name,e.phone=a.phone},h=async()=>{try{const{data:t}=await b.patch("/users/"+a._id,e);e._id=t.result._id,e.account=t.result.account,e.email=t.result.email,e.name=t.result.name,e.phone=t.result.phone,x.notify({type:"positive",color:"secondary",message:"\u4FEE\u6539\u6210\u529F",position:"top"}),m.value=!1,o.value=!1}catch{g.fire({toast:!0,timer:1e3,showConfirmButton:!1,background:"#F5ABA5",icon:"error",color:"black",text:"\u7DE8\u8F2F\u5931\u6557\uFF01"})}};return(t,s)=>(n(),c(w,null,[S,u(U,{onSubmit:h},{default:p(()=>[r("div",L,[o.value?i("",!0):(n(),d(f,{key:0,label:"\u7DE8\u8F2F",icon:"mdi-pen",color:"secondary",outline:"",onClick:s[0]||(s[0]=l=>o.value=!o.value)})),o.value?(n(),d(f,{key:1,label:"\u5132\u5B58",icon:"check",color:"pink",outline:"",onClick:s[1]||(s[1]=l=>m.value=!m.value)})):i("",!0),r("div",N,[D,o.value?i("",!0):(n(),c("div",E,y(e.account),1)),o.value?(n(),d(v,{key:1,class:"q-my-xs",modelValue:e.account,"onUpdate:modelValue":s[2]||(s[2]=l=>e.account=l),counter:"",maxlength:"20",dense:"",rules:[t.$rules.required("\u6B04\u4F4D\u5FC5\u586B"),t.$rules.maxLength(20,"\u9577\u5EA6\u9700\u70BA 4~20 \u500B\u5B57\u5143"),t.$rules.minLength(4,"\u9577\u5EA6\u9700\u70BA 4~20 \u500B\u5B57\u5143")]},null,8,["modelValue","rules"])):i("",!0)]),r("div",I,[P,o.value?i("",!0):(n(),c("div",H,y(e.name),1)),o.value?(n(),d(v,{key:1,class:"q-my-xs",modelValue:e.name,"onUpdate:modelValue":s[3]||(s[3]=l=>e.name=l),counter:"",maxlength:"20",dense:"",rules:[t.$rules.required("\u6B04\u4F4D\u5FC5\u586B"),t.$rules.maxLength(20,"\u9577\u5EA6\u9700\u70BA 4~20 \u500B\u5B57\u5143"),t.$rules.minLength(4,"\u9577\u5EA6\u9700\u70BA 4~20 \u500B\u5B57\u5143")]},null,8,["modelValue","rules"])):i("",!0)]),r("div",K,[O,o.value?i("",!0):(n(),c("div",X,y(e.email),1)),o.value?(n(),d(v,{key:1,class:"q-my-xs",modelValue:e.email,"onUpdate:modelValue":s[4]||(s[4]=l=>e.email=l),dense:"",rules:[t.$rules.required("\u6B04\u4F4D\u5FC5\u586B"),t.$rules.email("email \u683C\u5F0F\u932F\u8AA4")]},null,8,["modelValue","rules"])):i("",!0)]),r("div",z,[G,o.value?i("",!0):(n(),c("div",J,y(e.phone),1)),o.value?(n(),d(v,{key:1,class:"q-my-xs",modelValue:e.phone,"onUpdate:modelValue":s[5]||(s[5]=l=>e.phone=l),dense:"",rules:[t.$rules.required("\u6B04\u4F4D\u5FC5\u586B")]},null,8,["modelValue","rules"])):i("",!0)])]),u(A,{modelValue:m.value,"onUpdate:modelValue":s[6]||(s[6]=l=>m.value=l),persistent:""},{default:p(()=>[u(B,null,{default:p(()=>[u(Q,{class:"row items-center"},{default:p(()=>[u(q,{icon:"info",color:"warning","text-color":"black"}),M]),_:1}),u($,{align:"right"},{default:p(()=>[C(u(f,{flat:"",label:"\u53D6\u6D88",color:"warning",onClick:V},null,512),[[j]]),u(f,{flat:"",label:"\u78BA\u5B9A",color:"warning",type:"submit",onClick:h})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})],64))}};export{ne as default};
