import{Q as V}from"./QImg.c3d90a00.js";import{Q as y,a as f}from"./QTable.f734cf5e.js";import{r as m,I as g,aX as b,S as h,j as C,k,d as s,K as t,F as v,l as w,O as c,W as q,au as _}from"./index.8e5d787a.js";import{Q as n}from"./QInput.f3960b8b.js";import{Q as A}from"./QCardSection.229fc748.js";import{Q as U}from"./QCardActions.32d077fe.js";import{Q as $}from"./QForm.cd866f99.js";import{Q as B}from"./QCard.03da8402.js";import{Q as F}from"./QDialog.73b884d1.js";import{C as S}from"./ClosePopup.f63e6e04.js";import{u as I}from"./use-quasar.dc773a68.js";import{Q as E}from"./QSpinnerPie.4fc294b7.js";import"./QItemLabel.a11ed4d9.js";import"./uid.42677368.js";const N=w("div",{class:"backH4 text-h4 text-center"},"\u6703\u54E1\u7BA1\u7406",-1),P=w("div",{class:"text-h5 q-ma-sm text-weight-bold text-center"},"\u7DE8\u8F2F\u8CC7\u6599",-1),ee={__name:"HomePage",setup(H){const u=I(),i=m(!1);m(!1);const r=g([]),d=m("");m(!1);const a=g({idx:"",_id:"",account:"",email:"",name:"",phone:""}),x=[{name:"image",label:"\u5716\u7247"},{name:"name",required:!0,label:"NAME",field:o=>o.name,sortable:!0},{name:"account",required:!0,label:"ACCOUNT",field:o=>o.name,sortable:!0},{name:"email",required:!0,label:"EMAIL",field:"email"},{name:"phone",label:"PHONE",field:"phone"},{name:"other",label:"\u64CD\u4F5C"}],Q=o=>{i.value=!0,a.idx=r.findIndex(l=>l._id===o),a._id=r[a.idx]._id,a.name=r[a.idx].name,a.account=r[a.idx].account,a.email=r[a.idx].email,a.phone=r[a.idx].phone,console.log(a)},p=async()=>{var o,l;i.value=!1,u.loading.show({spinner:E,spinnerColor:"warning",spinnerSize:100,backgroundColor:"black",message:"loading...",messageColor:"white"});try{const{data:e}=await b.patch("/users/adminUser",a);r[a.idx]=e.result,u.notify({type:"positive",color:"pink",message:"\u7DE8\u8F2F\u5B8C\u6210",position:"top"})}catch(e){h.fire({toast:!0,timer:1e3,showConfirmButton:!1,background:"#F5ABA5",icon:"error",color:"black",text:((l=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:l.message)||"\u767C\u751F\u932F\u8AA4\uFF01"})}u.loading.hide()};return(async()=>{var o,l;try{const{data:e}=await b.get("/users/all");r.push(...e.result)}catch(e){h.fire({toast:!0,timer:1e3,showConfirmButton:!1,background:"#F5ABA5",icon:"error",color:"black",text:((l=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:l.message)||"\u4F7F\u7528\u8005\u8CC7\u6599\u932F\u8AA4\uFF01"})}})(),(o,l)=>(C(),k(v,null,[N,s(y,{class:"allUser-table q-ma-md",rows:r,columns:x,"row-key":"_id",filter:d.value},{"body-cell-image":t(e=>[s(f,{style:{width:"10px"}},{default:t(()=>[s(V,{class:"q-ma-md",src:`https://source.boringavatars.com/beam/${e.row.account}?colors=53C2BA,C0538A,F4C752,060614,F5F5F4`,height:"70px",width:"70px"},null,8,["src"])]),_:2},1024)]),"body-cell-other":t(e=>[s(f,{class:"q-gutter-sm"},{default:t(()=>[s(c,{icon:"edit",round:"",unelevated:"",size:"sm",color:"pink",onClick:L=>Q(e.row._id)},null,8,["onClick"])]),_:2},1024)]),"top-right":t(()=>[s(n,{class:"q-mr-md",borderless:"",dense:"",debounce:"300",modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=e=>d.value=e),placeholder:"Search"},{append:t(()=>[s(q,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["rows","filter"]),s(F,{modelValue:i.value,"onUpdate:modelValue":l[5]||(l[5]=e=>i.value=e),persistent:"","transition-show":"fade","transition-hide":"fade"},{default:t(()=>[s(B,{class:"edit-user-card text-white"},{default:t(()=>[s($,{onSubmit:p},{default:t(()=>[s(A,null,{default:t(()=>[P,s(n,{class:"q-my-xs",modelValue:a.account,"onUpdate:modelValue":l[1]||(l[1]=e=>a.account=e),counter:"",maxlength:"20",dense:"",label:"account",color:"warning",rules:[o.$rules.required("\u6B04\u4F4D\u5FC5\u586B"),o.$rules.maxLength(20,"\u9577\u5EA6\u9700\u70BA 4~20 \u500B\u5B57\u5143"),o.$rules.minLength(4,"\u9577\u5EA6\u9700\u70BA 4~20 \u500B\u5B57\u5143")]},null,8,["modelValue","rules"]),s(n,{class:"q-my-xs",modelValue:a.name,"onUpdate:modelValue":l[2]||(l[2]=e=>a.name=e),counter:"",maxlength:"20",dense:"",label:"name",color:"warning",rules:[o.$rules.required("\u6B04\u4F4D\u5FC5\u586B")]},null,8,["modelValue","rules"]),s(n,{class:"q-my-xs",modelValue:a.email,"onUpdate:modelValue":l[3]||(l[3]=e=>a.email=e),dense:"",label:"email",color:"warning",rules:[o.$rules.required("\u6B04\u4F4D\u5FC5\u586B"),o.$rules.email("email \u683C\u5F0F\u932F\u8AA4")]},null,8,["modelValue","rules"]),s(n,{class:"q-my-xs",modelValue:a.phone,"onUpdate:modelValue":l[4]||(l[4]=e=>a.phone=e),dense:"",label:"phone",color:"warning",mask:"#### - ### - ###",rules:[o.$rules.required("\u6B04\u4F4D\u5FC5\u586B")]},null,8,["modelValue","rules"])]),_:1}),s(U,{align:"center"},{default:t(()=>[s(c,{label:"submit",color:"secondary",type:"submit",onClick:p}),_(s(c,{label:"cancel",color:"pink"},null,512),[[S]])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}};export{ee as default};
