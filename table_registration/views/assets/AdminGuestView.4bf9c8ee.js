import{u as c,r as a,b as r,o as d,c as f,d as e,w as v,P as b,e as C,t as G}from"./index.7e94c1ab.js";import{u as _}from"./guests.0dc12da3.js";import{G as P}from"./GuestList.7f43eb7b.js";import{f as S}from"./settings.services.8f371f5d.js";import{N as w}from"./NavMenu.314df382.js";import"./index.esm.e978f1c5.js";const y={__name:"AdminGuestView",setup(A){const u=c(),i=_(),l=a(S.get("navItems")||[]),s=a(!1),o=()=>String(i.getGuestsCount),m=()=>{s.value=!0};return u.login(),(k,t)=>{const g=r("PrimeButton"),p=r("PrimeDialog");return d(),f("main",null,[e(b,{title:"All Guests",subtitle:"Manage PA Guests"}),e(g,{label:"Guest Count",type:"button",icon:"pi pi-ticket",class:"p-button-warning",badge:o(),onClick:t[0]||(t[0]=n=>m()),badgeClass:"p-badge-danger"},null,8,["badge"]),e(p,{visible:s.value,"onUpdate:visible":t[1]||(t[1]=n=>s.value=n),header:"Total Count of Current Guests",modal:!0,class:"p-fluid"},{default:v(()=>[C("Current guest count across all registrations: "+G(o()),1)]),_:1},8,["visible"]),e(w,{title:"",menuitems:l.value},null,8,["menuitems"]),e(P,{adminView:!0})])}}};export{y as default};