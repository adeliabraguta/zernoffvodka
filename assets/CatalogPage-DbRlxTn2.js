import{_ as p,o as l,c,b as s,t as n,e as d,F as r,p as $,g as C,r as b,d as k,u as v,n as S,f as m}from"./index-CZx9iVRj.js";import{z as f}from"./drinksData-MoFBpowD.js";const i=t=>($("data-v-01099161"),t=t(),C(),t),I=["src","alt"],x={class:"drink_details-1"},y={class:"drink_desc"},w={class:"small_desc"},D={class:"drink_specif"},V=i(()=>s("b",null,"Specificatii",-1)),z=i(()=>s("span",{class:"small_desc"},"Volum -",-1)),B=i(()=>s("span",{class:"small_desc"},"Alcool -",-1)),N=i(()=>s("span",{class:"small_desc"},"Cantitate in cutie -",-1)),P={class:"brand"},j=["src","alt"],E={__name:"DrinkComponent",props:{drink:Object,required:!0},setup(t){return(a,u)=>(l(),c(r,null,[s("div",null,[s("div",null,[s("figure",null,[s("img",{src:t.drink.img,alt:t.drink.title},null,8,I)])])]),s("div",x,[s("div",y,[s("div",null,[s("span",w,n(t.drink.type),1),s("h2",null,n(t.drink.title),1)]),s("p",null,n(t.drink.desc),1)]),s("div",D,[s("div",null,[V,s("p",null,[z,d(n(t.drink.volume),1)]),s("p",null,[B,d(n(t.drink.specifications[0].alco),1)]),s("p",null,[N,d(n(t.drink.specifications[0].cant),1)])]),s("div",P,[s("img",{src:t.drink.brand,alt:t.drink.title},null,8,j)])])])],64))}},g=p(E,[["__scopeId","data-v-01099161"]]),_=t=>($("data-v-3298e78f"),t=t(),C(),t),F={class:"container"},O={class:"catalog"},q=_(()=>s("span",{class:"small_desc"},"Catalog",-1)),A=_(()=>s("h2",{class:"big_desc"},"Zernoff",-1)),L={class:"drinks_catalog"},T=["onClick"],Z=_(()=>s("h2",{class:"big_desc"},"Petrovskaia",-1)),G={class:"drinks_catalog"},H={__name:"CatalogPage",setup(t){const a=b({}),u=o=>{const h=a.value[o];Object.keys(a.value).forEach(e=>{a.value[e]=!1}),a.value[o]=!h};return(o,h)=>(l(),c("div",F,[s("div",O,[q,s("div",null,[A,s("div",L,[(l(!0),c(r,null,k(v(f)[0],e=>(l(),c("div",{class:S(["drink_catalog",{show:a.value[e.id]}]),key:e.id,onClick:()=>u(e.id)},[m(g,{drink:e},null,8,["drink"])],10,T))),128))])]),s("div",null,[Z,s("div",G,[(l(!0),c(r,null,k(v(f)[1],e=>(l(),c("div",{class:"drink_catalog",key:e.id},[m(g,{drink:e},null,8,["drink"])]))),128))])])])]))}},M=p(H,[["__scopeId","data-v-3298e78f"]]);export{M as default};
