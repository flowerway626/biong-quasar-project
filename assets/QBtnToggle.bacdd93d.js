import{B as V,c as r,h as c,O as S,av as p,aw as x}from"./index.e2f377c7.js";import{Q}from"./QBtnGroup.6355c374.js";import{a as k,h as A}from"./use-key-composition.5af287d2.js";var q=V({name:"QBtnToggle",props:{...k,modelValue:{required:!0},options:{type:Array,required:!0,validator:e=>e.every(n=>("label"in n||"icon"in n||"slot"in n)&&"value"in n)},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(e,{slots:n,emit:u}){const g=r(()=>e.options.find(t=>t.value===e.modelValue)!==void 0),m=r(()=>({type:"hidden",name:e.name,value:e.modelValue})),B=A(m),s=r(()=>x(e)),v=r(()=>({rounded:e.rounded,dense:e.dense,...s.value})),f=r(()=>e.options.map((t,a)=>{const{attrs:i,value:d,slot:C,...o}=t;return{slot:C,props:{key:a,"aria-pressed":d===e.modelValue?"true":"false",...i,...o,...v.value,disable:e.disable===!0||o.disable===!0,color:d===e.modelValue?l(o,"toggleColor"):l(o,"color"),textColor:d===e.modelValue?l(o,"toggleTextColor"):l(o,"textColor"),noCaps:l(o,"noCaps")===!0,noWrap:l(o,"noWrap")===!0,size:l(o,"size"),padding:l(o,"padding"),ripple:l(o,"ripple"),stack:l(o,"stack")===!0,stretch:l(o,"stretch")===!0,onClick(y){b(d,t,y)}}}}));function b(t,a,i){e.readonly!==!0&&(e.modelValue===t?e.clearable===!0&&(u("update:modelValue",null,null),u("clear")):u("update:modelValue",t,a),u("click",i))}function l(t,a){return t[a]===void 0?e[a]:t[a]}function h(){const t=f.value.map(a=>c(S,a.props,a.slot!==void 0?n[a.slot]:void 0));return e.name!==void 0&&e.disable!==!0&&g.value===!0&&B(t,"push"),p(n.default,t)}return()=>c(Q,{class:"q-btn-toggle",...s.value,rounded:e.rounded,stretch:e.stretch,glossy:e.glossy,spread:e.spread},h)}});export{q as Q};
