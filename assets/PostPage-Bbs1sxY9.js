import{_ as l,m as n,c as e,b as s,t as c,F as d,d as _,q as u,o as a}from"./index-BZv2D9EY.js";import{n as p}from"./data-CZehBFHK.js";import"./history-gallery-4-4iMMixgF.js";const m={class:"container"},v={class:"drink"},g={class:"drink_desc"},h={class:"images"},f=["src","alt"],k={__name:"PostPage",setup(P){const r=n(()=>parseInt(u().params.id)),t=n(()=>p.find(o=>o.id===r.value));return(o,x)=>(a(),e("div",m,[s("div",v,[s("div",g,[s("h1",null,c(t.value.title),1),s("p",null,c(t.value.desc),1)]),s("div",h,[(a(!0),e(d,null,_(t.value.imgs,i=>(a(),e("img",{src:i,alt:t.value.title},null,8,f))),256))])])]))}},F=l(k,[["__scopeId","data-v-91963326"]]);export{F as default};
