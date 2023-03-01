import{B as m,c as u,h as g,D as V,aj as q,P as S,ak as k}from"./index.4046859c.js";import{a as x,h as Q}from"./use-key-composition.31053255.js";var j=m({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:a}){const r=u(()=>{const d=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(s=>e[s]===!0).map(s=>`q-btn-group--${s}`).join(" ");return`q-btn-group row no-wrap${d.length>0?" "+d:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>g("div",{class:r.value},V(a.default))}}),O=m({name:"QBtnToggle",props:{...x,modelValue:{required:!0},options:{type:Array,required:!0,validator:e=>e.every(a=>("label"in a||"icon"in a||"slot"in a)&&"value"in a)},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(e,{slots:a,emit:r}){const d=u(()=>e.options.find(o=>o.value===e.modelValue)!==void 0),s=u(()=>({type:"hidden",name:e.name,value:e.modelValue})),v=Q(s),B=u(()=>q(e)),f=u(()=>({rounded:e.rounded,dense:e.dense,...B.value})),h=u(()=>e.options.map((o,n)=>{const{attrs:c,value:i,slot:y,...t}=o;return{slot:y,props:{key:n,"aria-pressed":i===e.modelValue?"true":"false",...c,...t,...f.value,disable:e.disable===!0||t.disable===!0,color:i===e.modelValue?l(t,"toggleColor"):l(t,"color"),textColor:i===e.modelValue?l(t,"toggleTextColor"):l(t,"textColor"),noCaps:l(t,"noCaps")===!0,noWrap:l(t,"noWrap")===!0,size:l(t,"size"),padding:l(t,"padding"),ripple:l(t,"ripple"),stack:l(t,"stack")===!0,stretch:l(t,"stretch")===!0,onClick(C){p(i,o,C)}}}}));function p(o,n,c){e.readonly!==!0&&(e.modelValue===o?e.clearable===!0&&(r("update:modelValue",null,null),r("clear")):r("update:modelValue",o,n),r("click",c))}function l(o,n){return o[n]===void 0?e[n]:o[n]}function b(){const o=h.value.map(n=>g(S,n.props,n.slot!==void 0?a[n.slot]:void 0));return e.name!==void 0&&e.disable!==!0&&d.value===!0&&v(o,"push"),k(a.default,o)}return()=>g(j,{class:"q-btn-toggle",...B.value,rounded:e.rounded,stretch:e.stretch,glossy:e.glossy,spread:e.spread},b)}});export{O as Q};
