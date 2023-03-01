import{ag as V,al as re,B as ce,am as de,an as fe,ao as me,r as C,c as g,ap as ge,aq as ve,ar as he,as as ye,at as xe,au as we,w as $,$ as be,x as ke,h as v,af as A,D as qe,g as Be,av as Ee,aw as Te}from"./index.621087ab.js";const l=[];let c;function Se(e){c=e.keyCode===27}function _e(){c===!0&&(c=!1)}function Ce(e){c===!0&&(c=!1,re(e,27)===!0&&l[l.length-1](e))}function W(e){window[e]("keydown",Se),window[e]("blur",_e),window[e]("keyup",Ce),c=!1}function pe(e){V.is.desktop===!0&&(l.push(e),l.length===1&&W("addEventListener"))}function I(e){const o=l.indexOf(e);o>-1&&(l.splice(o,1),l.length===0&&W("removeEventListener"))}const u=[];function U(e){u[u.length-1](e)}function De(e){V.is.desktop===!0&&(u.push(e),u.length===1&&document.body.addEventListener("focusin",U))}function j(e){const o=u.indexOf(e);o>-1&&(u.splice(o,1),u.length===0&&document.body.removeEventListener("focusin",U))}let b=0;const Fe={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Q={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var He=ce({name:"QDialog",inheritAttrs:!1,props:{...de,...fe,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...me,"shake","click","escapeKey"],setup(e,{slots:o,emit:d,attrs:p}){const h=Be(),{proxy:{$q:D}}=h,i=C(null),r=C(!1),f=C(!1);let a=null,s=null,y,k;const F=g(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:z}=Ee(),{registerTimeout:H}=ge(),{registerTick:G,removeTick:L}=ve(),{transitionProps:J,transitionStyle:M}=he(e,()=>Q[e.position][0],()=>Q[e.position][1]),{showPortal:P,hidePortal:K,portalIsAccessible:N,renderPortal:X}=ye(h,i,ue,"dialog"),{hide:x}=xe({showing:r,hideOnRouteChange:F,handleShow:oe,handleHide:ie,processOnMount:!0}),{addToHistory:Y,removeFromHistory:Z}=we(r,x,F),ee=g(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Fe[e.position]}`+(f.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),w=g(()=>r.value===!0&&e.seamless!==!0),te=g(()=>e.autoClose===!0?{onClick:ae}:{}),ne=g(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${w.value===!0?"modal":"seamless"}`,p.class]);$(()=>e.maximized,t=>{r.value===!0&&E(t)}),$(w,t=>{z(t),t===!0?(De(T),pe(B)):(j(T),I(B))});function oe(t){Y(),s=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,E(e.maximized),P(),f.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),G(m)):L(),H(()=>{if(h.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:n,bottom:S}=document.activeElement.getBoundingClientRect(),{innerHeight:R}=window,_=window.visualViewport!==void 0?window.visualViewport.height:R;n>0&&S>_/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-_,S>=R?1/0:Math.ceil(document.scrollingElement.scrollTop+S-_/2))),document.activeElement.scrollIntoView()}k=!0,i.value.click(),k=!1}P(!0),f.value=!1,d("show",t)},e.transitionDuration)}function ie(t){L(),Z(),O(!0),f.value=!0,K(),s!==null&&(((t&&t.type.indexOf("key")===0?s.closest('[tabindex]:not([tabindex^="-"])'):void 0)||s).focus(),s=null),H(()=>{K(!0),f.value=!1,d("hide",t)},e.transitionDuration)}function m(t){be(()=>{let n=i.value;n===null||n.contains(document.activeElement)===!0||(n=(t!==""?n.querySelector(t):null)||n.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||n.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||n.querySelector("[autofocus], [data-autofocus]")||n,n.focus({preventScroll:!0}))})}function q(t){t&&typeof t.focus=="function"?t.focus({preventScroll:!0}):m(),d("shake");const n=i.value;n!==null&&(n.classList.remove("q-animate--scale"),n.classList.add("q-animate--scale"),a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,i.value!==null&&(n.classList.remove("q-animate--scale"),m())},170))}function B(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&q():(d("escapeKey"),x()))}function O(t){a!==null&&(clearTimeout(a),a=null),(t===!0||r.value===!0)&&(E(!1),e.seamless!==!0&&(z(!1),j(T),I(B))),t!==!0&&(s=null)}function E(t){t===!0?y!==!0&&(b<1&&document.body.classList.add("q-body--dialog"),b++,y=!0):y===!0&&(b<2&&document.body.classList.remove("q-body--dialog"),b--,y=!1)}function ae(t){k!==!0&&(x(t),d("click",t))}function se(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?x(t):e.noShake!==!0&&q(t.relatedTarget)}function T(t){e.allowFocusOutside!==!0&&N.value===!0&&Te(i.value,t.target)!==!0&&m('[tabindex]:not([tabindex="-1"])')}Object.assign(h.proxy,{focus:m,shake:q,__updateRefocusTarget(t){s=t||null}}),ke(O);const le=D.platform.is.ios===!0||D.platform.is.safari?"onClick":"onFocusin";function ue(){return v("div",{role:"dialog","aria-modal":w.value===!0?"true":"false",...p,class:ne.value},[v(A,{name:"q-transition--fade",appear:!0},()=>w.value===!0?v("div",{class:"q-dialog__backdrop fixed-full",style:M.value,"aria-hidden":"true",tabindex:-1,[le]:se}):null),v(A,J.value,()=>r.value===!0?v("div",{ref:i,class:ee.value,style:M.value,tabindex:-1,...te.value},qe(o.default)):null)])}return X}});export{He as Q,pe as a,De as b,j as c,I as r};
