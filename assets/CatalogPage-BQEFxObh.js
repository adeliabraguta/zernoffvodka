import{_ as m,o as l,c as a,b as s,t as k,e as g,F as t,p as b,g as $,r as y,d as e,u as c,n as S,f as o}from"./index-f5ouMfCH.js";import{z as r}from"./drinksData-B_c5350b.js";const h=n=>(b("data-v-e1fb1df3"),n=n(),$(),n),C=["src","alt"],I={class:"drink_details-1"},x={class:"drink_desc"},P={class:"small_desc"},w={class:"drink_specif"},z=h(()=>s("b",null,"Specificatii",-1)),D=h(()=>s("span",{class:"small_desc"},"Volum -",-1)),V=h(()=>s("span",{class:"small_desc"},"Alcool -",-1)),B=h(()=>s("span",{class:"small_desc"},"Cantitate in cutie -",-1)),N={class:"slide"},j=["src","alt"],A={__name:"DrinkComponent",props:{drink:Object,required:!0},setup(n){return(u,f)=>(l(),a(t,null,[s("div",null,[s("div",null,[s("figure",null,[s("img",{src:n.drink.img,alt:n.drink.title},null,8,C)])])]),s("div",I,[s("div",x,[s("div",null,[s("span",P,k(n.drink.type),1),s("h2",null,k(n.drink.title),1)]),s("p",null,k(n.drink.desc),1)]),s("div",w,[s("div",null,[z,s("p",null,[D,g(k(n.drink.volume),1)]),s("p",null,[V,g(k(n.drink.specifications[0].alco),1)]),s("p",null,[B,g(k(n.drink.specifications[0].cant),1)])]),s("div",N,[s("img",{src:n.drink.brand,alt:n.drink.title},null,8,j)])])])],64))}},_=m(A,[["__scopeId","data-v-e1fb1df3"]]),d=n=>(b("data-v-9cdc78fd"),n=n(),$(),n),E={class:"container"},F={class:"catalog"},O=d(()=>s("span",{class:"small_desc"},"Catalog",-1)),q=d(()=>s("h2",{id:"zernoff",class:"big_desc"},"Zernoff",-1)),G={class:"drinks_catalog"},L=["onClick"],M=d(()=>s("h2",{id:"petrovskaia",class:"big_desc"},"Petrovskaia",-1)),R={class:"drinks_catalog"},T=d(()=>s("h2",{id:"mendeleev",class:"big_desc"},"Mendeleev",-1)),Z={class:"drinks_catalog"},H=d(()=>s("h2",{id:"spicul de aur",class:"big_desc"},"Spicul de Aur",-1)),J={class:"drinks_catalog"},K=d(()=>s("h2",{id:"gospodar",class:"big_desc"},"Gospodar",-1)),Q={class:"drinks_catalog"},U=d(()=>s("h2",{id:"psenicinaia",class:"big_desc"},"Psenicinaia",-1)),W={class:"drinks_catalog"},X=d(()=>s("h2",{id:"russkaia",class:"big_desc"},"Russkaia",-1)),Y={class:"drinks_catalog"},ss=d(()=>s("h2",{id:"secarica",class:"big_desc"},"Secarica",-1)),is={class:"drinks_catalog"},ls=d(()=>s("h2",{id:"persona",class:"big_desc"},"Persona",-1)),as={class:"drinks_catalog"},ns={__name:"CatalogPage",setup(n){const u=y({}),f=v=>{const p=u.value[v];Object.keys(u.value).forEach(i=>{u.value[i]=!1}),u.value[v]=!p};return(v,p)=>(l(),a("div",E,[s("div",F,[O,s("div",null,[q,s("div",G,[(l(!0),a(t,null,e(c(r)[0],i=>(l(),a("div",{class:S(["drink_catalog",{show:u.value[i.id]}]),key:i.id,onClick:()=>f(i.id)},[o(_,{drink:i},null,8,["drink"])],10,L))),128))])]),s("div",null,[M,s("div",R,[(l(!0),a(t,null,e(c(r)[1],i=>(l(),a("div",{class:"drink_catalog",key:i.id},[o(_,{drink:i},null,8,["drink"])]))),128))])]),s("div",null,[T,s("div",Z,[(l(!0),a(t,null,e(c(r)[2],i=>(l(),a("div",{class:"drink_catalog",key:i.id},[o(_,{drink:i},null,8,["drink"])]))),128))])]),s("div",null,[H,s("div",J,[(l(!0),a(t,null,e(c(r)[3],i=>(l(),a("div",{class:"drink_catalog",key:i.id},[o(_,{drink:i},null,8,["drink"])]))),128))])]),s("div",null,[K,s("div",Q,[(l(!0),a(t,null,e(c(r)[4],i=>(l(),a("div",{class:"drink_catalog",key:i.id},[o(_,{drink:i},null,8,["drink"])]))),128))])]),s("div",null,[U,s("div",W,[(l(!0),a(t,null,e(c(r)[5],i=>(l(),a("div",{class:"drink_catalog",key:i.id},[o(_,{drink:i},null,8,["drink"])]))),128))])]),s("div",null,[X,s("div",Y,[(l(!0),a(t,null,e(c(r)[6],i=>(l(),a("div",{class:"drink_catalog",key:i.id},[o(_,{drink:i},null,8,["drink"])]))),128))])]),s("div",null,[ss,s("div",is,[(l(!0),a(t,null,e(c(r)[7],i=>(l(),a("div",{class:"drink_catalog",key:i.id},[o(_,{drink:i},null,8,["drink"])]))),128))])]),s("div",null,[ls,s("div",as,[(l(!0),a(t,null,e(c(r)[8],i=>(l(),a("div",{class:"drink_catalog",key:i.id},[o(_,{drink:i},null,8,["drink"])]))),128))])])])]))}},es=m(ns,[["__scopeId","data-v-9cdc78fd"]]);export{es as default};