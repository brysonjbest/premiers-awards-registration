import{_ as E,z as $,o as u,c as _,k as b,n as N,b as f,R as ue,F as ce,m as de,S as be,d as l,w as n,e as k,t as d,a as O,s as F,r,g as ee,i as I,l as Y,u as pe,P as me}from"./index.433b2a60.js";import{a as B,u as Z}from"./guests.1491fc74.js";import{f as L}from"./settings.services.52defd74.js";/* empty css                                                       *//* empty css                                                         */import{N as ge}from"./NavMenu.37dfe6d2.js";import{G as te}from"./GuestPicker.1eab5347.js";import{u as fe,r as ve}from"./index.esm.39057b40.js";const _e={props:{table:Object},setup(C){const o="pi pi-circle-fill full-table",x="pi pi-circle-fill half-table",e="pi pi-circle empty-table",y="pi pi-circle-fill default-table";return{tableClass:$(()=>C.table.status==="full-table"?o:C.table.status==="half-table"?x:C.table.status==="empty-table"?e:y)}}},ye={class:"table-icon"};function he(C,o,x,e,y,V){return u(),_("div",ye,[b("i",{class:N(e.tableClass)},null,2)])}var K=E(_e,[["render",he]]);const ke={props:{tables:Array},components:{TableIcon:K}},xe={class:"table-display"},Te={class:"table-name"},we={class:"table-seats-taken"},ze={class:"table-free-seats"};function Ce(C,o,x,e,y,V){const T=f("TableIcon"),w=f("router-link"),m=ue("tooltip");return u(),_("div",xe,[(u(!0),_(ce,null,de(x.tables,p=>(u(),_("div",{class:"table-details",key:p},[be(l(T,{table:p},null,8,["table"]),[[m,`${p.registrationOrganizations?p.registrationOrganizations:"No Guests"}`,void 0,{top:!0,hover:!0}]]),b("div",Te,[l(w,{to:`/admin/table/${p.guid}`},{default:n(()=>[k(d(p.tablename),1)]),_:2},1032,["to"])]),b("div",we,d(p.guests.length)+" / "+d(p.tablecapacity)+" Seats Taken ",1),b("div",ze,d(p.tablecapacity-p.guests.length)+" Seats Free ",1)]))),128))])}var ae=E(ke,[["render",Ce],["__scopeId","data-v-4fda7c33"]]);const Se={props:{key:Number},setup(){const C=O(),{registrations:o}=F(O());r({});const x=function(i,g){return L.lookup(i,g)},e=B(),{tables:y}=F(B()),V=$(()=>y.value.sort((i,g)=>i.tablename-g.tablename)),T=r(L.get("tableSelection")||[]),w=r((L.get("organizations")||[]).map(i=>i.value));let m=r(!1);const p=r({severity:null,text:""}),c=r(!1),R=async function(){C.$reset,e.$reset,c.value=!0;try{return await e.fillTables().then(()=>{C.fillAllRegistrations()})}catch(i){c.value=!1,console.warn(i),m.value=!0,p.value={severity:"error",text:"Could not fetch tables and/or registrations."}}finally{c.value=!1,setTimeout(()=>m.value=!1,1500)}},v=()=>{R().then(()=>{y.value.forEach(i=>{i.status=$(()=>i.guests.length>=i.tablecapacity?"full-table":i.guests.length>0?"half-table":"empty-table"),i.registrationOrganizations=$(()=>{const g=i.organizations.map(a=>a.organization),S=new Set(g);return Array.from(S).map(a=>a?x("organizations",a):"").join(`\r
`)})})}).then(()=>{y.value.sort((i,g)=>{const S=i.tablename[0],P=i.tablename[1],t=g.tablename[0],a=g.tablename[1];return P===a&&S>=t?1:S>t&&P<a?-1:0})})};return ee(()=>{v()}),{fillList:R,loadLazyData:v,tables:y,registrations:o,organizations:w,message:m,loading:c,messageText:p,tableStore:e,columns:T,computedTables:V}},components:{TableIcon:K,TableDisplay:ae,GuestPicker:te}},Ve={key:2};function De(C,o,x,e,y,V){const T=f("ProgressSpinner"),w=f("PrimeMessage"),m=f("TableDisplay");return u(),_("div",null,[e.loading?(u(),I(T,{key:0})):e.message?(u(),I(w,{key:1,severity:e.messageText.severity,closable:!1},{default:n(()=>[k(d(e.messageText.text),1)]),_:1},8,["severity"])):(u(),_("div",Ve,[(u(),I(m,{tables:e.tables,key:x.key},null,8,["tables"]))]))])}var Pe=E(Se,[["render",De]]);const Le={emits:["addGuest"],setup(C,{emit:o}){const x=O(),e=Z();B();const{registrations:y}=F(O()),{guests:V}=F(Z()),{tables:T}=F(B());r({});const w=r(),m=r(0),p=r([]),c=r(L.get("tableSelection")||[]),R=r((L.get("organizations")||[]).map(s=>s.value));let v=r(!1);const i=r({severity:null,text:""}),g=r(!1),S=r(!1),P=async function(){x.$reset,e.$reset,g.value=!0;try{await e.fillGuests().then(async()=>{await x.fillAllRegistrations().then(()=>{y.value.forEach(s=>{s.details={},s.status=0,s.guests.forEach(h=>{s.details[h]=V.value.filter(z=>z._id===h)[0],s.details[h].tabledetails=T.value.filter(z=>z._id===s.details[h].table)[0],s.details[h].table&&(s.status+=1)})})})})}catch(s){g.value=!1,console.warn(s),v.value=!0,i.value={severity:"error",text:"Could not fetch registrations."}}finally{g.value=!1,setTimeout(()=>v.value=!1,1500)}},t=async function(){await P()};ee(()=>{t()});const a=function(s,h){return L.lookup(s,h)},H=function(s,h){let z="";for(let G of h)z.length>0?z+=`, ${a(s,G)}`:z=a(s,G);return z},le=()=>{w.value.value.map(s=>s.organization=a("organizations",s.organization)),w.value.exportCSV()},J=r(L.get("registrationFilters")||{}),oe=()=>{Q()},Q=()=>{J.value=L.get("registrationFilters")||{}},j=r(!1),M=r(!1),D=r({}),q=r({}),ne=s=>{D.value={...s},j.value=!0},se=s=>{q.value={...s},M.value=!0},ie=()=>{j.value=!1,M.value=!1};F(B());const W=fe({table:{required:ve}},D),X=async()=>{if(!await W.value.$validate())return;const h=D.value.table,z=D.value._id,G={_id:h};try{g.value=!0,D.value.tabledetails!=null&&await e.removeGuestFromTable(z,{table:null,organization:D.value.organization},{_id:D.value.tabledetails._id}),await e.addGuestToTable(z,{table:h,organization:D.value.organization},G).then(()=>{g.value=!1,v.value=!0,i.value={severity:"success",text:"Successfully updated guest and table."}})}catch(U){g.value=!1,console.warn(U),v.value=!0,i.value={severity:"error",text:"Guest and table could not be updated."}}finally{await new Promise(U=>setTimeout(U,1500)).then(()=>{v.value=!1,j.value=!1,o("addGuest")}).then(()=>{t()})}};return{fillList:P,dt:w,dataTableRender:m,expandedRows:p,lookup:a,lookupLoop:H,exportCSV:le,filters:J,clearFilters:oe,initFilters:Q,loadLazyData:t,registrations:y,guests:V,tables:T,organizations:R,message:v,loading:g,messageText:i,columns:c,tableDetailsDialog:j,guest:D,editGuestTable:ne,hideDialog:ie,v$:W,editTable:X,multiTableDialog:M,editRegistrationTable:se,registration:q,multiSeat:async s=>{const h=q.value.details,z=Object.keys(h),G=T.value.filter(A=>A._id===s)[0],U=G.tablecapacity-G.guests.length;try{S.value=!0;let A=0;for(let re of z)A<U&&(D.value=h[re],D.value.table=s,await X(),A++);S.value=!1,v.value=!0,i.value={severity:"success",text:"Successfully updated guests and table."}}catch(A){S.value=!1,console.warn(A),v.value=!0,i.value={severity:"error",text:"Bulk guests and table could not be updated."}}finally{await new Promise(A=>setTimeout(A,1500)).then(()=>{v.value=!1,M.value=!1,o("addGuest")}).then(()=>{t()})}},multiloading:S}},components:{TableIcon:K,TableDisplay:ae,GuestPicker:te}},Re={key:2,class:"registrations-visual"},Ae={style:{"text-align":"left"}},Ie={class:"p-input-icon-left"},Ge=b("i",{class:"pi pi-search"},null,-1),Fe=k(" No registrations found. "),Be=k(" Loading registration data. Please wait. "),Ue={key:0},Ne={key:1},Oe={class:"item"},Ee=b("br",null,null,-1),je=b("br",null,null,-1),Me={class:"orders-subtable"},$e={key:1},qe={key:0},Ke={key:1},He={class:"dropdown"},Je=b("label",{for:"table"},"Table",-1),Qe={key:0,class:"p-error",id:"table-help"},We={class:"dropdown"},Xe=b("label",{for:"table"},"Table",-1),Ye={key:0,class:"p-error",id:"table-help"};function Ze(C,o,x,e,y,V){const T=f("ProgressSpinner"),w=f("PrimeMessage"),m=f("PrimeButton"),p=f("InputText"),c=f("PrimeColumn"),R=f("router-link"),v=f("DropDown"),i=f("InputNumber"),g=f("TriStateCheckbox"),S=f("PrimeDialog"),P=f("DataTable");return u(),_("div",null,[e.loading||e.multiloading?(u(),I(T,{key:0})):e.message?(u(),I(w,{key:1,severity:e.messageText.severity,closable:!1},{default:n(()=>[k(d(e.messageText.text),1)]),_:1},8,["severity"])):(u(),_("div",Re,[(u(),I(P,{class:"p-datatable-sm",exportFilename:"Event List",value:e.registrations,responsiveLayout:"stack",breakpoint:"780px",key:e.dataTableRender,expandedRows:e.expandedRows,"onUpdate:expandedRows":o[10]||(o[10]=t=>e.expandedRows=t),rows:10,ref:"dt",stripedRows:"",sortField:"organization",sortOrder:1,filters:e.filters,"onUpdate:filters":o[11]||(o[11]=t=>e.filters=t),filterDisplay:"menu",globalFilterFields:["organization","guid"],loading:e.loading,showGridlines:"",paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",rowsPerPageOptions:[10,20,50],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords}"},{header:n(()=>[b("div",Ae,[l(m,{icon:"pi pi-external-link",label:"Export",onClick:o[0]||(o[0]=t=>e.exportCSV(t))}),l(m,{type:"button",icon:"pi pi-filter-slash",label:"Clear",class:"p-button-outlined",onClick:o[1]||(o[1]=t=>e.clearFilters())}),b("span",Ie,[Ge,l(p,{title:"Search all by keyword",modelValue:e.filters.global.value,"onUpdate:modelValue":o[2]||(o[2]=t=>e.filters.global.value=t),placeholder:"Keyword Search"},null,8,["modelValue"])])])]),empty:n(()=>[Fe]),loading:n(()=>[Be]),expansion:n(t=>[b("div",Me,[b("h5",null,"Guests for "+d(t.data.registrar),1),l(P,{value:Object.values(t.data.details),responsiveLayout:"scroll"},{default:n(()=>[l(c,{field:"organization",header:"Organization",sortable:""},{body:n(({data:a})=>[k(d(e.lookup("organizations",a.organization)),1)]),_:1}),l(c,{field:"name",header:"Name"},{body:n(({data:a})=>[k(d(a.firstname)+" "+d(a.lastname),1)]),_:1}),l(c,{field:"attendancetype",header:"Attendee Type",sortable:""},{body:n(({data:a})=>[k(d(e.lookup("attendancetypes",a.attendancetype)),1)]),_:1}),l(c,{field:"accessibility",header:"Accessibility Accomodations Required",sortable:""},{body:n(({data:a})=>[k(d(e.lookupLoop("accessibilityoptions",a.accessibility)),1)]),_:1}),l(c,{field:"tabledetails.tablename",header:"Seated?",sortable:""},{body:n(({data:a})=>[a.table?(u(),I(R,{key:0,to:`/admin/table/${a.table}`},{default:n(()=>[k(d(a.tabledetails.tablename),1)]),_:2},1032,["to"])):(u(),_("span",$e,"Pending"))]),_:1}),l(c,{field:"table",header:"Edit Table"},{body:n(({data:a})=>[t.data.submitted===!1?(u(),_("span",qe,"Must Submit Registration")):(u(),_("span",Ke,[l(m,{icon:"pi pi-pencil",label:a.tabledetails?"Edit Table":"Add Table",class:"p-button-rounded p-button-success mr-2 edit-button",onClick:H=>e.editGuestTable(a)},null,8,["label","onClick"])]))]),_:2},1024),l(S,{visible:e.tableDetailsDialog,"onUpdate:visible":o[5]||(o[5]=a=>e.tableDetailsDialog=a),style:{width:"50rem",margin:"5rem"},header:"Table Details",modal:!0,class:"p-fluid registration-dialog"},{footer:n(()=>[l(m,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:o[4]||(o[4]=a=>e.tableDetailsDialog=!1)}),l(m,{label:"Confirm Table",icon:"pi pi-check",class:"p-button-text",onClick:e.editTable},null,8,["onClick"])]),default:n(()=>[b("div",He,[Je,l(v,{class:N({"p-invalid":e.v$.table.$error}),id:"table",modelValue:e.guest.table,"onUpdate:modelValue":o[3]||(o[3]=a=>e.guest.table=a),options:e.tables.filter(a=>a.tablecapacity>a.guests.length),name:"table",optionLabel:"tablename",optionValue:"_id",placeholder:"Select the table."},null,8,["class","modelValue","options"]),e.v$.table.$error?(u(),_("small",Qe,"Please select the table.")):Y("",!0)])]),_:1},8,["visible"])]),_:2},1032,["value"])])]),default:n(()=>[l(c,{header:"Guests",expander:!0,headerStyle:"width: 3rem"}),l(c,{field:"guid",header:"ID#",key:"guid",class:"guid"},{body:n(({data:t})=>[l(R,{to:`/admin/edit/${t.guid}`},{default:n(()=>[k(d(t.registrar),1)]),_:2},1032,["to"])]),_:1}),l(c,{field:"organization",filterField:"organization",header:"Organization",key:"organization",sortable:!0},{body:n(({data:t})=>[k(d(e.lookup("organizations",t.organization)),1)]),filter:n(({filterModel:t})=>[l(v,{modelValue:t.value,"onUpdate:modelValue":a=>t.value=a,options:e.organizations,optionLabel:"text",placeholder:"Any",class:"p-column-filter",showClear:!0},{value:n(a=>[a.value?(u(),_("div",Ue,[b("div",null,d(e.lookup("organizations",a.value)),1)])):(u(),_("span",Ne,d(a.placeholder),1))]),option:n(a=>[b("div",Oe,[b("div",null,d(e.lookup("organizations",a.option)),1)])]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:1}),l(c,{field:"guestList",header:"Guest List",key:"guestList",sortable:!0},{body:n(({data:t})=>[k(d(t.guests.length),1)]),filter:n(({filterModel:t})=>[l(i,{modelValue:t.value,"onUpdate:modelValue":a=>t.value=a,showButtons:"",buttonLayout:"horizontal",step:1,decrementButtonClass:"p-button-danger",incrementButtonClass:"p-button-success",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(c,{field:"submitted",header:"Submitted?",key:"submitted",dataType:"boolean"},{body:n(({data:t})=>[b("span",null,[b("i",{class:N(["pi pi-check-circle",{"true-icon pi-check-circle":t.submitted,"false-icon pi-times-circle":!t.submitted}]),style:{"font-size":"2rem"}},null,2),Ee,k(d(t.submitted?" Submitted":" Pending"),1)])]),filter:n(({filterModel:t})=>[l(g,{modelValue:t.value,"onUpdate:modelValue":a=>t.value=a},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(c,{field:"seated",header:"All Guests Seated?",key:"seated",dataType:"boolean"},{body:n(({data:t})=>[b("span",null,[b("i",{class:N(["pi pi-check-circle",{"true-icon pi-check-circle":t.status===t.guests.length,"false-icon pi-times-circle":t.status!==t.guests.length}]),style:{"font-size":"2rem"}},null,2),je,k(" "+d(t.status)+" of "+d(t.guests.length)+" Guests Seated",1)])]),filter:n(({filterModel:t})=>[l(g,{modelValue:t.value,"onUpdate:modelValue":a=>t.value=a},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(c,{header:"Options"},{body:n(({data:t})=>[l(m,{icon:"pi pi-pencil",label:"Bulk Seat Registration",class:"p-button-rounded p-button-success mr-2 edit-button",onClick:a=>e.editRegistrationTable(t)},null,8,["onClick"])]),_:1}),l(S,{visible:e.multiTableDialog,"onUpdate:visible":o[9]||(o[9]=t=>e.multiTableDialog=t),style:{width:"50rem",margin:"5rem"},header:"Table Details",modal:!0,class:"p-fluid registration-dialog"},{footer:n(()=>[l(m,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:o[7]||(o[7]=t=>e.multiTableDialog=!1)}),l(m,{label:"Confirm Table",icon:"pi pi-check",class:"p-button-text",onClick:o[8]||(o[8]=t=>e.multiSeat(e.registration.table))})]),default:n(()=>[b("div",We,[Xe,l(v,{class:N({"p-invalid":e.v$.table.$error}),id:"table",modelValue:e.registration.table,"onUpdate:modelValue":o[6]||(o[6]=t=>e.registration.table=t),options:e.tables.filter(t=>t.tablecapacity>t.guests.length),name:"table",optionLabel:"tablename",optionValue:"_id",placeholder:"Select the table."},null,8,["class","modelValue","options"]),e.v$.table.$error?(u(),_("small",Ye,"Please select the table.")):Y("",!0)])]),_:1},8,["visible"])]),_:1},8,["value","expandedRows","filters","loading"]))]))])}var et=E(Le,[["render",Ze]]);const tt={__name:"AdminVisualTableView",setup(C){const o=pe();O();const x=r(L.get("navItems")||[]),e=()=>String(B().getTablesCount),y=r(!1),V=()=>{y.value=!0},T=r(0),w=()=>T.value++;return o.login(),(m,p)=>{const c=f("PrimeButton");return u(),_("main",null,[l(me,{title:"Event Planning",subtitle:"Visually Organize PA Event"}),l(c,{label:"Table Count: ",type:"button",icon:"pi pi-ticket",class:"p-button-warning",badge:e(),onClick:p[0]||(p[0]=R=>V()),badgeClass:"p-badge-danger"},null,8,["badge"]),l(ge,{title:"",menuitems:x.value},null,8,["menuitems"]),(u(),I(Pe,{key:T.value})),l(et,{onAddGuest:w,class:"registrations-visual-box"})])}}};var bt=E(tt,[["__scopeId","data-v-10b234ac"]]);export{bt as default};
