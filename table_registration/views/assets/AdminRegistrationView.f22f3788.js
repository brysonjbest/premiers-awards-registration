import{u as g,a as b,r as i,b as s,o as d,c as f,d as e,w as v,P as _,e as C,t as P}from"./index.fe8c604b.js";import{R as S}from"./RegistrationList.d0624cef.js";import{f as w}from"./settings.services.99fd8e41.js";import{N as x}from"./NavMenu.306a6a78.js";import"./InputFinancial.fc2c48ad.js";import"./index.esm.720d4be9.js";import"./guests.4e26c9dc.js";const y={__name:"AdminRegistrationView",setup(A){const r=g(),l=b(),u=i(w.get("navItems")||[]),a=i(!1),o=()=>String(l.getTotalTableCount),m=()=>{a.value=!0};return r.login(),(I,t)=>{const p=s("PrimeButton"),c=s("PrimeDialog");return d(),f("main",null,[e(_,{title:"All Registrations",subtitle:"Manage PA Registrations"}),e(p,{label:"Table Count: ",type:"button",icon:"pi pi-ticket",class:"p-button-warning",badge:o(),onClick:t[0]||(t[0]=n=>m()),badgeClass:"p-badge-danger"},null,8,["badge"]),e(c,{visible:a.value,"onUpdate:visible":t[1]||(t[1]=n=>a.value=n),header:"Table Information",modal:!0,class:"p-fluid"},{default:v(()=>[C("Current approximate table count across all registrations: "+P(o()),1)]),_:1},8,["visible"]),e(x,{title:"",menuitems:u.value},null,8,["menuitems"]),e(S,{adminView:!0})])}}};export{y as default};
