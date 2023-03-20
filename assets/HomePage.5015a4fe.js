import{r as u,H as f,b1 as g,S as b,j as y,k as V,d as s,K as t,F as C,l as w,ay as k,Q as v,O as c,N as q,ag as _}from"./index.6524b1e7.js";import{Q as A,a as h}from"./QTable.d58fa616.js";import{Q as n}from"./QInput.e18aeac7.js";import{Q as U,a as $}from"./QCard.8a6032be.js";import{Q as B}from"./QCardActions.64c30476.js";import{Q as F}from"./QForm.b66ba4f1.js";import{Q as S}from"./QDialog.e714cb26.js";import{C as N}from"./ClosePopup.2db1dd9a.js";import{Q as E}from"./QSpinnerPie.bdf0668d.js";import"./QSelect.7702b7af.js";import"./use-key-composition.0a1c44be.js";const H=w("div",{class:"backH4 text-h4 text-center"},"\u6703\u54E1\u7BA1\u7406",-1),I=w("div",{class:"text-h5 q-ma-sm text-weight-bold text-center"},"\u7DE8\u8F2F\u8CC7\u6599",-1),X={__name:"HomePage",setup(P){const d=k(),i=u(!1);u(!1);const r=f([]),m=u("");u(!1);const a=f({idx:"",_id:"",account:"",email:"",name:"",phone:""}),x=[{name:"image",label:"\u5716\u7247"},{name:"name",required:!0,label:"NAME",field:o=>o.name,sortable:!0},{name:"account",required:!0,label:"ACCOUNT",field:o=>o.account,sortable:!0},{name:"email",required:!0,label:"EMAIL",field:"email"},{name:"phone",label:"PHONE",field:"phone"},{name:"other",label:"\u64CD\u4F5C"}],Q=o=>{i.value=!0,a.idx=r.findIndex(l=>l._id===o),a._id=r[a.idx]._id,a.name=r[a.idx].name,a.account=r[a.idx].account,a.email=r[a.idx].email,a.phone=r[a.idx].phone,console.log(a)},p=async()=>{var o,l;i.value=!1,d.loading.show({spinner:E,spinnerColor:"warning",spinnerSize:100,backgroundColor:"black",message:"loading...",messageColor:"white"});try{const{data:e}=await g.patch("/users/adminUser",a);r[a.idx]=e.result,d.notify({type:"positive",color:"pink",message:"\u7DE8\u8F2F\u5B8C\u6210",position:"top"})}catch(e){b.fire({toast:!0,timer:1e3,showConfirmButton:!1,background:"#F5ABA5",icon:"error",color:"black",text:((l=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:l.message)||"\u767C\u751F\u932F\u8AA4\uFF01"})}d.loading.hide()};return(async()=>{var o,l;try{const{data:e}=await g.get("/users/all");r.push(...e.result)}catch(e){b.fire({toast:!0,timer:1e3,showConfirmButton:!1,background:"#F5ABA5",icon:"error",color:"black",text:((l=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:l.message)||"\u4F7F\u7528\u8005\u8CC7\u6599\u932F\u8AA4\uFF01"})}})(),(o,l)=>(y(),V(C,null,[H,s(A,{class:"allUser-table q-ma-md",rows:r,columns:x,"row-key":"_id",filter:m.value},{"body-cell-image":t(e=>[s(h,{style:{width:"10px"}},{default:t(()=>[s(v,{class:"q-ma-md",src:`https://source.boringavatars.com/beam/${e.row.account}?colors=53C2BA,C0538A,F4C752,060614,F5F5F4`,height:"70px",width:"70px"},null,8,["src"])]),_:2},1024)]),"body-cell-other":t(e=>[s(h,{class:"q-gutter-sm"},{default:t(()=>[s(c,{icon:"edit",round:"",unelevated:"",size:"sm",color:"pink",onClick:L=>Q(e.row._id)},null,8,["onClick"])]),_:2},1024)]),"top-right":t(()=>[s(n,{class:"q-mr-md",borderless:"",dense:"",debounce:"300",modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=e=>m.value=e),placeholder:"Search"},{append:t(()=>[s(q,{name:"search"})]),_:1},8,["modelValue"])]),_:1},8,["rows","filter"]),s(S,{modelValue:i.value,"onUpdate:modelValue":l[5]||(l[5]=e=>i.value=e),persistent:"","transition-show":"fade","transition-hide":"fade"},{default:t(()=>[s(U,{class:"edit-user-card text-white"},{default:t(()=>[s(F,{onSubmit:p},{default:t(()=>[s($,null,{default:t(()=>[I,s(n,{class:"q-my-xs",modelValue:a.account,"onUpdate:modelValue":l[1]||(l[1]=e=>a.account=e),counter:"",maxlength:"20",dense:"",label:"account",color:"warning",rules:[o.$rules.required("\u6B04\u4F4D\u5FC5\u586B"),o.$rules.maxLength(20,"\u9577\u5EA6\u9700\u70BA 4~20 \u500B\u5B57\u5143"),o.$rules.minLength(4,"\u9577\u5EA6\u9700\u70BA 4~20 \u500B\u5B57\u5143")]},null,8,["modelValue","rules"]),s(n,{class:"q-my-xs",modelValue:a.name,"onUpdate:modelValue":l[2]||(l[2]=e=>a.name=e),counter:"",maxlength:"20",dense:"",label:"name",color:"warning",rules:[o.$rules.required("\u6B04\u4F4D\u5FC5\u586B")]},null,8,["modelValue","rules"]),s(n,{class:"q-my-xs",modelValue:a.email,"onUpdate:modelValue":l[3]||(l[3]=e=>a.email=e),dense:"",label:"email",color:"warning",rules:[o.$rules.required("\u6B04\u4F4D\u5FC5\u586B"),o.$rules.email("email \u683C\u5F0F\u932F\u8AA4")]},null,8,["modelValue","rules"]),s(n,{class:"q-my-xs",modelValue:a.phone,"onUpdate:modelValue":l[4]||(l[4]=e=>a.phone=e),dense:"",label:"phone",color:"warning",mask:"#### - ### - ###",rules:[o.$rules.required("\u6B04\u4F4D\u5FC5\u586B")]},null,8,["modelValue","rules"])]),_:1}),s(B,{align:"center"},{default:t(()=>[s(c,{label:"submit",color:"secondary",type:"submit",onClick:p}),_(s(c,{label:"cancel",color:"pink"},null,512),[[N]])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}};export{X as default};
