import{_ as V,u as B,s as v,N as M,r as s,b as o,o as i,c as D,d as t,i as g,w as r,J as u,l as U,k as f,P as $,t as _,e as H}from"./index.7a1ae853.js";import{a as T}from"./guests.02597fb1.js";import{N as j}from"./NavMenu.3f3c5f3c.js";import{T as E,I as J}from"./TableList.bc06cfd8.js";import{f as L}from"./settings.services.5cd0008b.js";import"./index.esm.fb1f87e7.js";const R={id:"table-management-buttons"},q={__name:"AdminTableView",setup(z){const y=B(),k=T(),{message:d}=v(M()),C=s(!1),w=s(L.get("navItems")||[]),b=()=>String(k.getTablesCount),{table:A,tables:x}=v(T()),m=s(0),N=()=>m.value++,l=s(!1),n=s(!1),P=()=>{l.value=!0},I=()=>{A.value={},n.value=!0};return y.login(),(F,e)=>{const S=o("PrimeMessage"),p=o("PrimeButton"),c=o("PrimeDialog");return i(),D("main",null,[t($,{title:"All Tables",subtitle:"Manage PA Tables"}),C.value?(i(),g(S,{key:0,show:"",variant:u(d).type,life:5e3,sticky:!1},{default:r(()=>[f("p",null,_(u(d).text),1)]),_:1},8,["variant"])):U("",!0),f("div",R,[t(p,{label:"Table Count: ",type:"button",icon:"pi pi-ticket",class:"p-button-warning",badge:b(),onClick:e[0]||(e[0]=a=>P()),badgeClass:"p-badge-danger"},null,8,["badge"]),t(p,{label:"Add New Table",type:"button",icon:"pi pi-plus-circle",class:"p-button-success",onClick:e[1]||(e[1]=a=>I()),badgeClass:"p-badge-danger"})]),t(c,{visible:n.value,"onUpdate:visible":e[2]||(e[2]=a=>n.value=a),header:"Add New Table",modal:!0,class:"p-fluid",onHide:e[3]||(e[3]=a=>N())},{default:r(()=>[t(J,{adminView:!0})]),_:1},8,["visible"]),t(c,{visible:l.value,"onUpdate:visible":e[4]||(e[4]=a=>l.value=a),header:"Table Information",modal:!0,class:"p-fluid"},{default:r(()=>[H("Current approximate table count across all registrations: "+_(b()),1)]),_:1},8,["visible"]),t(j,{title:"",menuitems:w.value},null,8,["menuitems"]),(i(),g(E,{data:u(x),key:m.value},null,8,["data"]))])}}};var Y=V(q,[["__scopeId","data-v-6e98b6d7"]]);export{Y as default};