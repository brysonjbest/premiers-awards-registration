import{G as w}from"./GuestList.c0e00f1a.js";import{R as I}from"./RegistrationList.dfb4c8ae.js";import{T as P}from"./TableList.49771246.js";import{_ as S,N as k,s as T,r as g,u as x,a as C,H as L,P as V,b as o,o as a,c as G,d as r,w as v,i as m,k as B,l as N,e as D,t as A}from"./index.f1d2400a.js";import{G as H}from"./GuestPicker.31316477.js";import{a as M}from"./guests.6f99e238.js";import"./settings.services.6c8adf5e.js";import"./index.esm.afb5d8fb.js";import"./InputFinancial.5367e613.js";/* empty css                                                       *//* empty css                                                         */const R={props:{id:String},setup(_){k();const{message:t}=T(k()),i=g(!1),e=g(!1),d=x();d.login();const y=C(),n=M();n.fillTable(_.id);const b=()=>String(n.getGuestCount),p=()=>d.isAdmin,l=g(!1),u=g(!1),c=()=>{l.value=!0},f=()=>{u.value=!0},s=L({count:0,increment(){this.count++}});return{userStore:d,financialStore:y,tableStore:n,guestCount:b,isAdmin:p,guestInfoDialog:l,addGuestDialog:u,guestInfo:c,activeMessage:i,message:t,loading:e,addGuest:f,keycount:s}},components:{GuestList:w,RegistrationList:I,PageHeader:V,TableList:P,GuestPicker:H}},U={class:"individual-table-view"},h=D("Manage Table Details"),j={key:1,class:"page-body"},F={class:"registration-buttons"};function z(_,t,i,e,d,y){const n=o("PageHeader"),b=o("ProgressSpinner"),p=o("TableList"),l=o("PrimeButton"),u=o("GuestList"),c=o("PrimeDialog"),f=o("GuestPicker");return a(),G("main",U,[r(n,{class:"pageheader"},{default:v(()=>[h]),_:1}),e.loading?(a(),m(b,{key:0})):(a(),G("div",j,[(a(),m(p,{tableID:i.id,detailsView:!0,key:e.keycount.count},null,8,["tableID"])),B("div",F,[r(l,{type:"button",label:"Total Guests",icon:"pi pi-users",class:"p-button-warning",badge:e.guestCount(),onClick:t[0]||(t[0]=s=>e.guestInfo()),badgeClass:"p-badge-danger"},null,8,["badge"]),e.tableStore.getIsFull?N("",!0):(a(),m(l,{key:0,type:"button",label:"Add guest",icon:"pi pi-users",class:"p-button",onClick:t[1]||(t[1]=s=>e.addGuest())}))]),(a(),m(u,{tableID:i.id,key:e.keycount.count},null,8,["tableID"])),r(c,{visible:e.guestInfoDialog,"onUpdate:visible":t[2]||(t[2]=s=>e.guestInfoDialog=s),header:"Guest Information",modal:!0,class:"p-fluid"},{default:v(()=>[D("Total Number of Guests: "+A(e.guestCount())+". ",1)]),_:1},8,["visible"]),r(c,{visible:e.addGuestDialog,"onUpdate:visible":t[3]||(t[3]=s=>e.addGuestDialog=s),style:{width:"90vw"},position:"bottom",header:"Add a new Guest",modal:!0,class:"p-fluid",onHide:t[4]||(t[4]=s=>e.keycount.increment())},{default:v(()=>[r(f,{tableID:i.id},null,8,["tableID"])]),_:1},8,["visible"])]))])}var ee=S(R,[["render",z]]);export{ee as default};
