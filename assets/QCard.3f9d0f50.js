import{B as d,$ as o,a0 as u,c as n,h as c,D as l,g as q}from"./index.e2f377c7.js";var g=d({name:"QCard",props:{...o,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const{proxy:{$q:e}}=q(),t=u(a,e),s=n(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>c(a.tag,{class:s.value},l(r.default))}});export{g as Q};
