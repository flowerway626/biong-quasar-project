import{Q as q}from"./QTable.f9abebba.js";import{C as l,A as x,p as k,a as A,b as w,c as B,B as C,d as P,L as D,P as E,e as L,f as N,g as O,h as R}from"./index.f112ff8b.js";import{r as V,b1 as u,j as d,k as Q,l as a,d as g,A as c,J as _,q as b}from"./index.71601946.js";import"./QSelect.93cc7b2e.js";import"./use-key-composition.3c3f930f.js";import"./QDialog.a0f6058c.js";const S={class:"q-ma-md",id:"data"},$=a("div",{class:"backH4 text-h4 text-center"},"\u8CC7\u6599\u7D71\u8A08",-1),j={class:"row"},z={class:"q-mb-md q-ma-md-md col-12 col-md-7"},H={class:"q-mb-md q-ma-md-md col-12 col-md"},J={class:"row"},T={class:"q-mb-md q-ma-md-md col-12 col-md"},F={class:"q-mb-md q-ma-md-md col-12 col-md"},Y={__name:"DataPage",setup(G){l.register(x,k,A,w,B,C,P,D,E,L),l.defaults.color="#fff",l.defaults.plugins.title.font.size="20px",l.defaults.borderColor="#555";const r={labels:[],datasets:[{data:[]}]},t={labels:["ep.1","ep.2","ep.3","ep.4","ep.5","ep.6","ep.7","ep.8","ep.9","ep.10","ep.11","ep.12"],datasets:[{label:"\u7B2C\u4E00\u5B63",data:[2.183,2.46,2.575,2.637,2.925,3.069,2.939,3.523,2.908,3.813,3.516,2.741]},{label:"\u7B2C\u4E8C\u5B63",data:[2.105,1.46,.544,1.652,2.554,5.225,1.642,3.523,4.908,2.813,4.544,4.441]}]},i={labels:[],datasets:[{axis:"y",data:[],backgroundColor:["rgba(255, 99, 132)","rgba(255, 159, 64)","rgba(255, 205, 86)","rgba(75, 192, 192)","rgba(54, 162, 235)","rgba(153, 102, 255)","rgba(201, 203, 207)"]}]},f=[{name:"ep",label:"\u96C6\u6578",required:!0,field:"ep",sortable:!0},{name:"s1",label:"\u7B2C\u4E00\u5B63",field:"s1",sortable:!0,format:e=>`${e}`},{name:"s2",label:"\u7B2C\u4E8C\u5B63",field:"s2",sortable:!0,format:e=>`${e}`}],p=[];for(let e=0;e<t.labels.length;e++)p.push({ep:t.labels[e],s1:t.datasets[0].data[e],s2:t.datasets[1].data[e]});const h={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"left"},title:{display:!0,text:"\u6D3B\u52D5\u5831\u540D\u4EBA\u6578"}}},v={responsive:!0,maintainAspectRatio:!1,plugins:{title:{display:!0,text:"\u6536\u8996\u7387\u6298\u7DDA\u5716"}}},y={responsive:!0,maintainAspectRatio:!1,indexAxis:"y",plugins:{legend:{display:!1},title:{display:!0,text:"\u5546\u54C1\u552E\u51FA\u6578\u91CF"}}},n={height:"40vh",position:"relative"},o=V(!1);return(async()=>{try{o.value=!1;const e=await Promise.all([u.get("/events/chart"),u.get("/orders/all")]);for(const s of e[0].data.result)r.labels.push(s.name),r.datasets[0].data.push(s.count);for(const s of e[1].data.result)for(const m of s.products)i.labels.push(m.p_id.name),i.datasets[0].data.push(m.quantity);o.value=!0}catch{}})(),(e,s)=>(d(),Q("div",S,[$,a("div",j,[a("div",z,[g(c(N),{class:"area",data:t,options:v,style:n})]),a("div",H,[g(q,{class:"table",title:"\u6536\u8996\u8868","hide-bottom":"",pagination:e.pagination,"rows-per-page-options":[0],columns:f,rows:p,"row-key":"ep"},null,8,["pagination"])])]),a("div",J,[a("div",T,[o.value?(d(),_(c(O),{key:0,class:"area",data:r,options:h,style:n})):b("",!0)]),a("div",F,[o.value?(d(),_(c(R),{key:0,class:"area",data:i,options:y,style:n})):b("",!0)])])]))}};export{Y as default};
