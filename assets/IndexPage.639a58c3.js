import{B as xe,C as q,c as ee,h as ke,D as Ce,g as Oe,i as te,E as je,G as Ee,H as C,I as R,J as W,v as Se,S as Ne,j as S,K as V,L as b,M as qe,N as $e,l as s,d as m,Q as z,O as ne,P as k,k as A,R as G,U as $,F as K,V as h,A as U,W as Te,X as Le}from"./index.4046859c.js";import{Q as X}from"./QInput.57e94cdd.js";import{Q as Pe}from"./QForm.f867898d.js";import{a as ze,S as Ae}from"./swiper-slide.6d0effb5.js";import{N as Ie,P as Me,S as Be}from"./scrollbar.2b25f335.js";import{u as He}from"./use-quasar.1c262b72.js";import"./use-key-composition.31053255.js";var De=xe({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:e}){const{proxy:{$q:n}}=Oe(),a=te(je,q);if(a===q)return console.error("QPage needs to be a deep child of QLayout"),q;if(te(Ee,q)===q)return console.error("QPage needs to be child of QPageContainer"),q;const d=ee(()=>{const c=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof t.styleFn=="function"){const l=a.isContainer.value===!0?a.containerHeight.value:n.screen.height;return t.styleFn(c,l)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-c+"px":n.screen.height===0?c!==0?`calc(100vh - ${c}px)`:"100vh":n.screen.height-c+"px"}}),v=ee(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>ke("main",{class:v.value,style:d.value},Ce(e.default))}}),Fe="/biong-front/assets/banner.f37fa1c4.jpg",Qe="/biong-front/assets/banner2.f98438e3.jpg",fe="Expected a function",ae=0/0,Re="[object Symbol]",We=/^\s+|\s+$/g,Ve=/^[-+]0x[0-9a-f]+$/i,Ge=/^0b[01]+$/i,Ke=/^0o[0-7]+$/i,Ue=parseInt,Xe=typeof C=="object"&&C&&C.Object===Object&&C,Ye=typeof self=="object"&&self&&self.Object===Object&&self,Je=Xe||Ye||Function("return this")(),Ze=Object.prototype,et=Ze.toString,tt=Math.max,nt=Math.min,Y=function(){return Je.Date.now()};function at(t,e,n){var a,o,d,v,c,l,u=0,i=!1,f=!1,x=!0;if(typeof t!="function")throw new TypeError(fe);e=oe(e)||0,B(n)&&(i=!!n.leading,f="maxWait"in n,d=f?tt(oe(n.maxWait)||0,e):d,x="trailing"in n?!!n.trailing:x);function j(r){var g=a,y=o;return a=o=void 0,u=r,v=t.apply(y,g),v}function H(r){return u=r,c=setTimeout(w,e),i?j(r):v}function D(r){var g=r-l,y=r-u,P=e-g;return f?nt(P,d-y):P}function T(r){var g=r-l,y=r-u;return l===void 0||g>=e||g<0||f&&y>=d}function w(){var r=Y();if(T(r))return L(r);c=setTimeout(w,D(r))}function L(r){return c=void 0,x&&a?j(r):(a=o=void 0,v)}function F(){c!==void 0&&clearTimeout(c),u=0,a=l=o=c=void 0}function Q(){return c===void 0?v:L(Y())}function E(){var r=Y(),g=T(r);if(a=arguments,o=this,l=r,g){if(c===void 0)return H(l);if(f)return c=setTimeout(w,e),j(l)}return c===void 0&&(c=setTimeout(w,e)),v}return E.cancel=F,E.flush=Q,E}function ot(t,e,n){var a=!0,o=!0;if(typeof t!="function")throw new TypeError(fe);return B(n)&&(a="leading"in n?!!n.leading:a,o="trailing"in n?!!n.trailing:o),at(t,e,{leading:a,maxWait:e,trailing:o})}function B(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function rt(t){return!!t&&typeof t=="object"}function it(t){return typeof t=="symbol"||rt(t)&&et.call(t)==Re}function oe(t){if(typeof t=="number")return t;if(it(t))return ae;if(B(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=B(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(We,"");var n=Ge.test(t);return n||Ke.test(t)?Ue(t.slice(2),n?2:8):Ve.test(t)?ae:+t}var st=ot,ct="Expected a function",re=0/0,lt="[object Symbol]",dt=/^\s+|\s+$/g,ut=/^[-+]0x[0-9a-f]+$/i,ft=/^0b[01]+$/i,mt=/^0o[0-7]+$/i,vt=parseInt,pt=typeof C=="object"&&C&&C.Object===Object&&C,bt=typeof self=="object"&&self&&self.Object===Object&&self,gt=pt||bt||Function("return this")(),ht=Object.prototype,yt=ht.toString,wt=Math.max,_t=Math.min,J=function(){return gt.Date.now()};function xt(t,e,n){var a,o,d,v,c,l,u=0,i=!1,f=!1,x=!0;if(typeof t!="function")throw new TypeError(ct);e=ie(e)||0,Z(n)&&(i=!!n.leading,f="maxWait"in n,d=f?wt(ie(n.maxWait)||0,e):d,x="trailing"in n?!!n.trailing:x);function j(r){var g=a,y=o;return a=o=void 0,u=r,v=t.apply(y,g),v}function H(r){return u=r,c=setTimeout(w,e),i?j(r):v}function D(r){var g=r-l,y=r-u,P=e-g;return f?_t(P,d-y):P}function T(r){var g=r-l,y=r-u;return l===void 0||g>=e||g<0||f&&y>=d}function w(){var r=J();if(T(r))return L(r);c=setTimeout(w,D(r))}function L(r){return c=void 0,x&&a?j(r):(a=o=void 0,v)}function F(){c!==void 0&&clearTimeout(c),u=0,a=l=o=c=void 0}function Q(){return c===void 0?v:L(J())}function E(){var r=J(),g=T(r);if(a=arguments,o=this,l=r,g){if(c===void 0)return H(l);if(f)return c=setTimeout(w,e),j(l)}return c===void 0&&(c=setTimeout(w,e)),v}return E.cancel=F,E.flush=Q,E}function Z(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function kt(t){return!!t&&typeof t=="object"}function Ct(t){return typeof t=="symbol"||kt(t)&&yt.call(t)==lt}function ie(t){if(typeof t=="number")return t;if(Ct(t))return re;if(Z(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Z(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(dt,"");var n=ft.test(t);return n||mt.test(t)?vt(t.slice(2),n?2:8):ut.test(t)?re:+t}var se=xt,me=function(){};function ve(t){var e=void 0,n=void 0,a=void 0;for(e=0;e<t.length;e+=1)if(n=t[e],n.dataset&&n.dataset.aos||(a=n.children&&ve(n.children),a))return!0;return!1}function Ot(t){!t||t.forEach(function(e){var n=Array.prototype.slice.call(e.addedNodes),a=Array.prototype.slice.call(e.removedNodes),o=n.concat(a);if(ve(o))return me()})}function pe(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function jt(){return!!pe()}function Et(t,e){var n=window.document,a=pe(),o=new a(Ot);me=e,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}var ce={isSupported:jt,ready:Et},St=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Nt=function(){function t(e,n){for(var a=0;a<n.length;a++){var o=n[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),qt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},$t=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,Tt=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,Lt=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Pt=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function le(){return navigator.userAgent||navigator.vendor||window.opera||""}var zt=function(){function t(){St(this,t)}return Nt(t,[{key:"phone",value:function(){var n=le();return!!($t.test(n)||Tt.test(n.substr(0,4)))}},{key:"mobile",value:function(){var n=le();return!!(Lt.test(n)||Pt.test(n.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),t}(),M=new zt,At=function(e,n){return n&&n.forEach(function(a){return e.classList.add(a)})},It=function(e,n){return n&&n.forEach(function(a){return e.classList.remove(a)})},I=function(e,n){var a=void 0;return M.ie11()?(a=document.createEvent("CustomEvent"),a.initCustomEvent(e,!0,!0,{detail:n})):a=new CustomEvent(e,{detail:n}),document.dispatchEvent(a)},Mt=function(e,n){var a=e.options,o=e.position,d=e.node;e.data;var v=function(){!e.animated||(It(d,a.animatedClassNames),I("aos:out",d),e.options.id&&I("aos:in:"+e.options.id,d),e.animated=!1)},c=function(){e.animated||(At(d,a.animatedClassNames),I("aos:in",d),e.options.id&&I("aos:in:"+e.options.id,d),e.animated=!0)};a.mirror&&n>=o.out&&!a.once?v():n>=o.in?c():e.animated&&!a.once&&v()},de=function(e){return e.forEach(function(n,a){return Mt(n,window.pageYOffset)})},be=function(e){for(var n=0,a=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)n+=e.offsetLeft-(e.tagName!="BODY"?e.scrollLeft:0),a+=e.offsetTop-(e.tagName!="BODY"?e.scrollTop:0),e=e.offsetParent;return{top:a,left:n}},O=function(t,e,n){var a=t.getAttribute("data-aos-"+e);if(typeof a!="undefined"){if(a==="true")return!0;if(a==="false")return!1}return a||n},Bt=function(e,n,a){var o=window.innerHeight,d=O(e,"anchor"),v=O(e,"anchor-placement"),c=Number(O(e,"offset",v?0:n)),l=v||a,u=e;d&&document.querySelectorAll(d)&&(u=document.querySelectorAll(d)[0]);var i=be(u).top-o;switch(l){case"top-bottom":break;case"center-bottom":i+=u.offsetHeight/2;break;case"bottom-bottom":i+=u.offsetHeight;break;case"top-center":i+=o/2;break;case"center-center":i+=o/2+u.offsetHeight/2;break;case"bottom-center":i+=o/2+u.offsetHeight;break;case"top-top":i+=o;break;case"bottom-top":i+=o+u.offsetHeight;break;case"center-top":i+=o+u.offsetHeight/2;break}return i+c},Ht=function(e,n){var a=O(e,"anchor"),o=O(e,"offset",n),d=e;a&&document.querySelectorAll(a)&&(d=document.querySelectorAll(a)[0]);var v=be(d).top;return v+d.offsetHeight-o},Dt=function(e,n){return e.forEach(function(a,o){var d=O(a.node,"mirror",n.mirror),v=O(a.node,"once",n.once),c=O(a.node,"id"),l=n.useClassNames&&a.node.getAttribute("data-aos"),u=[n.animatedClassName].concat(l?l.split(" "):[]).filter(function(i){return typeof i=="string"});n.initClassName&&a.node.classList.add(n.initClassName),a.position={in:Bt(a.node,n.offset,n.anchorPlacement),out:d&&Ht(a.node,n.offset)},a.options={once:v,mirror:d,animatedClassNames:u,id:c}}),e},ge=function(){var t=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(t,function(e){return{node:e}})},_=[],ue=!1,p={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},he=function(){return document.all&&!window.atob},Ft=function(){return _=Dt(_,p),de(_),window.addEventListener("scroll",st(function(){de(_,p.once)},p.throttleDelay)),_},N=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;e&&(ue=!0),ue&&Ft()},ye=function(){if(_=ge(),_e(p.disable)||he())return we();N()},we=function(){_.forEach(function(e,n){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),p.initClassName&&e.node.classList.remove(p.initClassName),p.animatedClassName&&e.node.classList.remove(p.animatedClassName)})},_e=function(e){return e===!0||e==="mobile"&&M.mobile()||e==="phone"&&M.phone()||e==="tablet"&&M.tablet()||typeof e=="function"&&e()===!0},Qt=function(e){return p=qt(p,e),_=ge(),!p.disableMutationObserver&&!ce.isSupported()&&(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),p.disableMutationObserver=!0),p.disableMutationObserver||ce.ready("[data-aos]",ye),_e(p.disable)||he()?we():(document.querySelector("body").setAttribute("data-aos-easing",p.easing),document.querySelector("body").setAttribute("data-aos-duration",p.duration),document.querySelector("body").setAttribute("data-aos-delay",p.delay),["DOMContentLoaded","load"].indexOf(p.startEvent)===-1?document.addEventListener(p.startEvent,function(){N(!0)}):window.addEventListener("load",function(){N(!0)}),p.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1&&N(!0),window.addEventListener("resize",se(N,p.debounceDelay,!0)),window.addEventListener("orientationchange",se(N,p.debounceDelay,!0)),_)},Rt={init:Qt,refresh:N,refreshHard:ye};const Wt={class:"text-center",id:"section1"},Vt=s("section",{class:"row flex-center",id:"text"},[s("div",{class:"text-subtitle1 text-justify q-mb-md"},'\u5728\u5730\u7403\u770B\u4E0D\u5230\u7684\u6708\u7403\u80CC\u9762\uFF0C\u6709\u500B\u7389\u7687\u5927\u5E1D\u7D93\u71DF\u7684\u4F11\u606F\u7AD9\uFF0C\u4F11\u606F\u7AD9\u6700\u71B1\u9580\u7684\u5546\u5E97"\u5B87\u5B99\u5E74\u7CD5\u5E97"\uFF0C\u5B87\u5B99\u5E74\u7CD5\u5E97\u4E2D\u6709\u92B7\u552E\u4E00\u7B49\u7684\u529F\u81E3 \u2014 \u5154\u74CF\uFF0C\u56E0\u70BA\u53D7\u4E0D\u4E86\u983B\u7E41\u7684\u52A0\u73ED\uFF0C\u56E0\u6B64\u8208\u8D77\u4E86\u9003\u5F80\u5730\u7403\u7684\u5FF5\u982D\u3002'),s("div",{class:"text-subtitle1 text-justify"},"\u767C\u73FE\u5154\u74CF\u5BEB\u4E86\u8FAD\u8077\u4FE1\u9003\u5F80\u5730\u7403\u7684\u7389\u7687\u5927\u5E1D\u9707\u6012\uFF0C\u4E0B\u4EE4\u6293\u5230\u5154\u74CF\u7684\u4EBA\u5C07\u7D66\u4E88\u8C50\u539A\u7684\u734E\u91D1\u3002\u70BA\u4E86\u5F97\u5230\u8C50\u539A\u7684\u734E\u91D1\uFF0C\u7531\u56DB\u4F4D\u4F86\u81EA\u5E73\u884C\u5B87\u5B99\u5730\u7403\u7684\u52C7\u58EB\u5C31\u9019\u6A23\u51FA\u52D5\u4E86...")],-1),Gt={class:"q-pa-md-xl bg-secondary",id:"new"},Kt=s("div",{class:"text-h5 q-my-md text-center"},"\u6700\u65B0\u6D88\u606F",-1),Ut={class:"column"},Xt={class:"text-subtitle2 q-mr-xl"},Yt={class:"text-subtitle1"},Jt={class:"colmn q-pa-xl q-mx-auto justify-center",id:"section2"},Zt=s("div",{class:"text-h5 text-center"},"\u5468\u908A\u5546\u54C1",-1),en={class:"row flex-center"},tn={class:"mask flex flex-center column absolute"},nn={class:"text-subtitle1 q-ma-xs"},an={class:"column q-pa-xl bg-pink",id:"Event"},on=s("h5",{class:"text-center"},"\u6D3B\u52D5\u516C\u544A",-1),rn=["onClick"],sn={class:"q-pa-md items-center"},cn={class:"row"},ln={class:"text-body2"},dn={class:"text-body2"},un={class:"text-subtitle1 text-ellipsis text-left"},fn={class:"row q-pa-xl",id:"footer"},mn={class:"col-12 col-md-5"},vn={class:"row justify-between"},pn={class:"col-12 col-sm-5"},bn={class:"col-12 col-sm-5"},gn={class:"text-center"},hn={class:"col-12 col-md-7 q-mt-xl q-mt-md-none"},yn={class:"map row"},wn={class:"col-6 col-md-3 column items-start content-center"},_n=s("div",{class:"text-body1"},"\u9996\u9801",-1),xn={class:"col-6 col-md-3 column items-start content-center"},kn=s("div",{class:"text-body1"},"\u95DC\u65BC\u5730\u5A1B\u5BA4",-1),Cn={class:"col-6 col-md-3 column items-start content-center"},On=s("div",{class:"text-body1"},"\u6703\u54E1\u5C08\u5340",-1),jn={class:"col-12 col-md-3 column items-start content-center"},En={class:"row justify-center"},zn={__name:"IndexPage",setup(t){He();const e=qe(),n=R([]),a=R([]),o=R([]),d=l=>{window.location.href=l},v=()=>{const l=document.querySelector(".arrow_down").offsetTop+40;window.scroll({top:l,behavior:"smooth"})},c={modules:[Ie,Me,Be],slidesPerView:1,spaceBetween:10,breakpoints:{600:{slidesPerView:2,spaceBetween:20},900:{slidesPerView:3,spaceBetween:20},1024:{slidesPerView:4,spaceBetween:40}},autoplay:{delay:2500},loop:!0,scrollbar:{draggable:!0}};return(async()=>{var l,u;try{const i=await Promise.all([W.get("/products/index"),W.get("/news/index"),W.get("/events")]);n.push(...i[0].data.result),o.push(...i[1].data.result),a.push(...i[2].data.result),await Se(),Rt.init()}catch(i){Ne.fire({toast:!0,timer:1e3,showConfirmButton:!1,background:"#F5ABA5",icon:"error",color:"black",text:((u=(l=i==null?void 0:i.response)==null?void 0:l.data)==null?void 0:u.message)||"\u767C\u751F\u932F\u8AA4\uFF01"})}})(),(l,u)=>{const i=$e("router-link");return S(),V(De,null,{default:b(()=>[s("section",Wt,[m(z,{class:"big",src:Fe}),m(z,{class:"little",fit:"",src:Qe}),m(k,{class:"arrow_down",round:"",flat:"",onClick:v},{default:b(()=>[m(ne,{name:"keyboard_arrow_down",size:"50px"})]),_:1})]),Vt,s("section",Gt,[Kt,s("div",Ut,[(S(!0),A(K,null,G(o,f=>(S(),V(i,{class:"row newInfo",key:f._id,to:"/news/"+f._id},{default:b(()=>[s("div",Xt,$(new Date(f.date).toLocaleDateString()),1),s("div",Yt,$(f.title),1)]),_:2},1032,["to"]))),128))])]),s("section",Jt,[Zt,s("div",en,[(S(!0),A(K,null,G(n,f=>(S(),A("div",{class:"col-xs-12 col-sm-6 col-md-3 q-mx-lg q-my-md",key:f.id},[m(z,{src:f.image},{default:b(()=>[s("div",tn,[s("div",nn,$(f.name),1),m(k,{class:"q-ma-xs",label:"\u8A73\u60C5",push:"",color:"secondary",to:"/shopping/"+f._id,style:{width:"72px"}},null,8,["to"])])]),_:2},1032,["src"])]))),128))]),m(k,{class:"q-my-md",rounded:"",outline:"",to:"/shopping"},{default:b(()=>[h("M O R E")]),_:1})]),s("section",an,[on,m(U(Ae),Te(Le(c)),{default:b(()=>[(S(!0),A(K,null,G(a,f=>(S(),V(U(ze),null,{default:b(()=>[s("div",{class:"event cursor-pointer",onClick:x=>U(e).push("/event/"+f._id),"data-aos":"flip-left","data-aos-offset":"100"},[m(z,{src:f.image},null,8,["src"]),s("div",sn,[s("div",cn,[s("div",ln,$(f.dateStart.replace(/-/g,".")),1),m(ne,{name:"mdi-menu-right",style:{color:"#F2C037"},size:"20px"}),s("div",dn,$(f.dateEnd.replace(/-/g,".")),1)]),s("div",un,$(f.name),1)])],8,rn)]),_:2},1024))),256))]),_:1},16)]),s("section",fn,[s("div",mn,[m(Pe,{class:"q-mx-auto q-mx-md-none",style:{width:"80%"}},{default:b(()=>[s("div",vn,[s("div",pn,[m(X,{class:"q-my-xs",label:"account",clearable:"","clear-icon":"close",dense:"",color:"warning",rules:[l.$rules.required("\u6B04\u4F4D\u5FC5\u586B")]},null,8,["rules"])]),s("div",bn,[m(X,{class:"q-my-xs",label:"email",clearable:"","clear-icon":"close",color:"warning",rules:[l.$rules.required("\u6B04\u4F4D\u5FC5\u586B"),l.$rules.email("email \u683C\u5F0F\u932F\u8AA4")],dense:""},null,8,["rules"])])]),m(X,{class:"q-my-xs",label:"\u5167\u5BB9",clearable:"","clear-icon":"close",dense:"",color:"warning",rules:[l.$rules.required("\u6B04\u4F4D\u5FC5\u586B"),l.$rules.maxLength(200,"\u5167\u5BB9\u904E\u9577")],maxlength:"200"},null,8,["rules"]),s("div",gn,[m(k,{class:"full-width",type:"submit",size:"sm",outline:"",style:{color:"#53C2BA"}},{default:b(()=>[h("\u9001\u51FA")]),_:1})])]),_:1})]),s("div",hn,[s("div",yn,[s("div",wn,[_n,m(i,{class:"text-body2",to:"/news"},{default:b(()=>[h("\u6700\u65B0\u6D88\u606F")]),_:1}),m(i,{class:"text-body2",to:"/shopping"},{default:b(()=>[h("\u5468\u908A\u5546\u54C1")]),_:1}),m(i,{class:"text-body2",to:"/event"},{default:b(()=>[h("\u6D3B\u52D5\u516C\u544A")]),_:1})]),s("div",xn,[kn,m(i,{class:"text-body2",to:"/about"},{default:b(()=>[h("\u7BC0\u76EE\u4F01\u5283")]),_:1}),m(i,{class:"text-body2",to:"/about"},{default:b(()=>[h("\u4EBA\u7269\u4ECB\u7D39")]),_:1}),m(i,{class:"text-body2",to:"/about"},{default:b(()=>[h("\u73FE\u5834\u7167\u7247")]),_:1}),m(i,{class:"text-body2",to:"/about"},{default:b(()=>[h("\u5F71\u7247\u5408\u96C6")]),_:1})]),s("div",Cn,[On,m(i,{class:"text-body2",to:"/cart"},{default:b(()=>[h("\u8CFC\u7269\u8ECA")]),_:1}),m(i,{class:"text-body2",to:"/setting"},{default:b(()=>[h("\u57FA\u672C\u8A2D\u5B9A")]),_:1}),m(i,{class:"text-body2",to:"/setting/order"},{default:b(()=>[h("\u8A02\u55AE\u660E\u7D30")]),_:1}),m(i,{class:"text-body2",to:"/setting/event"},{default:b(()=>[h("\u5831\u540D\u7BA1\u7406")]),_:1})]),s("div",jn,[s("div",En,[m(k,{class:"col-md-6",round:"",icon:"mdi-facebook",onClick:u[0]||(u[0]=f=>d("https://www.facebook.com/cjtvngo/"))}),m(k,{class:"col-md-6",round:"",icon:"mdi-instagram",onClick:u[1]||(u[1]=f=>d("https://www.instagram.com/earth_arcade/"))}),m(k,{class:"col-md-6",round:"",icon:"mdi-twitter",onClick:u[2]||(u[2]=f=>d("https://twitter.com/chtvn"))}),m(k,{class:"col-md-6",round:"",icon:"mdi-youtube",onClick:u[3]||(u[3]=f=>d("https://www.youtube.com/playlist?list=PLgbB1gJhmG7ADjyNmUhWAwXPTrLflCiqv"))})])])])])])]),_:1})}}};export{zn as default};
