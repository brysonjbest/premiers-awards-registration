import{_ as $,z as K,o as i,c as _,k as u,n as E,b as v,R as ie,F as re,m as ue,S as de,d as l,w as n,e as k,t as d,a as H,s as j,r,g as te,i as P,l as Q,O as ce,Q as be,u as pe,P as me}from"./index.7e94c1ab.js";import{a as J,u as ee}from"./guests.0dc12da3.js";import{N as ge}from"./NavMenu.314df382.js";import{f as A}from"./settings.services.8f371f5d.js";import{u as fe,r as ve}from"./index.esm.e978f1c5.js";const _e={props:{table:Object},setup(T){const s="pi pi-circle-fill full-table",g="pi pi-circle-fill half-table",t="pi pi-circle empty-table",V="pi pi-circle-fill default-table";return{tableClass:K(()=>T.table.status==="full-table"?s:T.table.status==="half-table"?g:T.table.status==="empty-table"?t:V)}}},ye={class:"table-icon"};function he(T,s,g,t,V,w){return i(),_("div",ye,[u("i",{class:E(t.tableClass)},null,2)])}var ke=$(_e,[["render",he]]);const Te={props:{tables:Array},components:{TableIcon:ke}},xe={class:"table-display"},we={class:"table-name"},Se={class:"table-seats-taken"},Ve={class:"table-free-seats"};function ze(T,s,g,t,V,w){const f=v("TableIcon"),x=v("router-link"),c=ie("tooltip");return i(),_("div",xe,[(i(!0),_(re,null,ue(g.tables,p=>(i(),_("div",{class:"table-details",key:p},[de(l(f,{table:p},null,8,["table"]),[[c,`${p.registrationOrganizations?p.registrationOrganizations:"No Guests"}`,void 0,{top:!0,hover:!0}]]),u("div",we,[l(x,{to:`/admin/table/${p.guid}`},{default:n(()=>[k(d(p.tablename),1)]),_:2},1032,["to"])]),u("div",Se,d(p.guests.length)+" / "+d(p.tablecapacity)+" Seats Taken ",1),u("div",Ve,d(p.tablecapacity-p.guests.length)+" Seats Free ",1)]))),128))])}var Ce=$(Te,[["render",ze],["__scopeId","data-v-4fda7c33"]]);const De={props:{key:Number},emits:["loadedTables"],setup(T,{emit:s}){const g=H(),{registrations:t}=j(H()),V=function(e,a){return A.lookup(e,a)},w=J(),{tables:f}=j(J()),x=r([]),c=r([]),p=K(()=>f.value.sort((e,a)=>e.tablename-a.tablename)),m=r(A.get("tableSelection")||[]),L=r((A.get("organizations")||[]).map(e=>e.value));let b=r(!1);const z=r({severity:null,text:""}),y=r(!1),D=async function(){g.$reset,w.$reset,y.value=!0;try{return await w.fillTables().then(()=>{g.fillAllRegistrations()})}catch(e){y.value=!1,console.warn(e),b.value=!0,z.value={severity:"error",text:"Could not fetch tables and/or registrations."}}finally{await new Promise(e=>setTimeout(e,1)).then(()=>{y.value=!1,b.value=!1,s("loadedTables")})}},R=()=>{D().then(()=>{f.value.forEach(e=>{e.status=K(()=>e.guests.length>=e.tablecapacity?"full-table":e.guests.length>0?"half-table":"empty-table"),e.registrationOrganizations=K(()=>{const a=e.organizations.map(I=>I.organization),G=new Set(a);return Array.from(G).map(I=>I?V("organizations",I):"").join(`\r
`)})})}).then(()=>{f.value.sort((e,a)=>{const G=e.tablename[0],N=e.tablename[1],U=a.tablename[0],I=a.tablename[1];return N===I&&G>=U?1:G>U&&N<I?-1:0}),f.value.forEach(e=>{e.tablename.length>2?x.value.push(e):c.value.push(e)})})};return te(()=>{R()}),{fillList:D,loadLazyData:R,tables:f,specialTables:x,standardTables:c,registrations:t,organizations:L,message:b,loading:y,messageText:z,tableStore:w,columns:m,computedTables:p}},components:{TableDisplay:Ce}},ae=T=>(ce("data-v-5c32cc03"),T=T(),be(),T),Pe={key:2,id:"visual-table-list"},Le={key:0,id:"special-tables-section"},Ie=ae(()=>u("h4",null,"Named/Specialty Tables",-1)),Ae={id:"standard-tables-section"},Re=ae(()=>u("h4",null,"Standard Table Layout",-1));function Fe(T,s,g,t,V,w){const f=v("ProgressSpinner"),x=v("PrimeMessage"),c=v("TableDisplay");return i(),_("div",null,[t.loading?(i(),P(f,{key:0})):t.message?(i(),P(x,{key:1,severity:t.messageText.severity,closable:!1},{default:n(()=>[k(d(t.messageText.text),1)]),_:1},8,["severity"])):(i(),_("div",Pe,[t.specialTables.length>0?(i(),_("div",Le,[Ie,(i(),P(c,{tables:t.specialTables,key:g.key},null,8,["tables"]))])):Q("",!0),u("div",Ae,[Re,(i(),P(c,{tables:t.standardTables,key:g.key},null,8,["tables"]))])]))])}var Ge=$(De,[["render",Fe],["__scopeId","data-v-5c32cc03"]]);const Be={emits:["addGuest"],setup(T,{emit:s}){const g=H(),t=ee(),{registrations:V}=j(H()),{guests:w}=j(ee()),{tables:f}=j(J()),x=r(),c=r(0),p=r([]),m=r(A.get("tableSelection")||[]),L=r((A.get("organizations")||[]).map(o=>o.value));let b=r(!1);const z=r({severity:null,text:""}),y=r(!1),D=r(!1),R=async function(){g.$reset,t.$reset,y.value=!0;try{await t.fillGuests().then(async()=>{await g.fillAllRegistrations().then(()=>{V.value.forEach(o=>{o.details={},o.status=0,o.guests.forEach(h=>{o.details[h]=w.value.filter(S=>S._id===h)[0],o.details[h].tabledetails=f.value.filter(S=>S._id===o.details[h].table)[0],o.details[h].table&&(o.status+=1)}),o.allAssigned=o.status>=o.guests.length,o.guestList=o.guests.length})})})}catch(o){y.value=!1,console.warn(o),b.value=!0,z.value={severity:"error",text:"Could not fetch registrations."}}finally{y.value=!1,setTimeout(()=>b.value=!1,1500)}},e=async function(){await R()};te(()=>{e()});const a=function(o,h){return A.lookup(o,h)},G=function(o,h){let S="";for(let B of h)S.length>0?S+=`, ${a(o,B)}`:S=a(o,B);return S},N=()=>{x.value.value.map(o=>o.organization=a("organizations",o.organization)),x.value.exportCSV()},U=r(A.get("registrationFilters")||{}),I=()=>{X()},X=()=>{U.value=A.get("registrationFilters")||{}},M=r(!1),q=r(!1),C=r({}),W=r({}),le=o=>{C.value={...o},M.value=!0},se=o=>{W.value={...o},q.value=!0},oe=()=>{M.value=!1,q.value=!1},Y=fe({table:{required:ve}},C),Z=async()=>{if(!await Y.value.$validate())return;const h=C.value.table,S=C.value._id,B={_id:h};try{y.value=!0,C.value.tabledetails!=null&&await t.removeGuestFromTable(S,{table:null,organization:C.value.organization},{_id:C.value.tabledetails._id}),await t.addGuestToTable(S,{table:h,organization:C.value.organization},B).then(()=>{y.value=!1,b.value=!0,z.value={severity:"success",text:"Successfully updated guest and table."}})}catch(O){y.value=!1,console.warn(O),b.value=!0,z.value={severity:"error",text:"Guest and table could not be updated."}}finally{await new Promise(O=>setTimeout(O,1500)).then(()=>{b.value=!1,M.value=!1,s("addGuest")}).then(()=>{e()})}};return{fillList:R,dt:x,dataTableRender:c,expandedRows:p,lookup:a,lookupLoop:G,exportCSV:N,filters:U,clearFilters:I,initFilters:X,loadLazyData:e,registrations:V,guests:w,tables:f,organizations:L,message:b,loading:y,messageText:z,columns:m,tableDetailsDialog:M,guest:C,editGuestTable:le,hideDialog:oe,v$:Y,editTable:Z,multiTableDialog:q,editRegistrationTable:se,registration:W,multiSeat:async o=>{const h=W.value.details,S=Object.keys(h),B=f.value.filter(F=>F._id===o)[0],O=B.tablecapacity-B.guests.length;try{D.value=!0;let F=0;for(let ne of S)F<O&&(C.value=h[ne],C.value.table=o,await Z(),F++);D.value=!1,b.value=!0,z.value={severity:"success",text:"Successfully updated guests and table."}}catch(F){D.value=!1,console.warn(F),b.value=!0,z.value={severity:"error",text:"Bulk guests and table could not be updated."}}finally{await new Promise(F=>setTimeout(F,1500)).then(()=>{b.value=!1,q.value=!1,s("addGuest")}).then(()=>{e()})}},multiloading:D}}},Ue={key:2,class:"registrations-visual"},Ne={style:{"text-align":"left"}},Oe={class:"p-input-icon-left"},Ee=u("i",{class:"pi pi-search"},null,-1),je=k(" No registrations found. "),$e=k(" Loading registration data. Please wait. "),Me={key:0},qe={key:1},Ke={class:"item"},He=u("br",null,null,-1),Qe=u("br",null,null,-1),Je={class:"orders-subtable"},We={key:1},Xe={key:0},Ye={key:1},Ze={class:"dropdown"},et=u("label",{for:"table"},"Table",-1),tt={key:0,class:"p-error",id:"table-help"},at={class:"dropdown"},lt=u("label",{for:"table"},"Table",-1),st={key:0,class:"p-error",id:"table-help"};function ot(T,s,g,t,V,w){const f=v("ProgressSpinner"),x=v("PrimeMessage"),c=v("PrimeButton"),p=v("InputText"),m=v("PrimeColumn"),L=v("router-link"),b=v("DropDown"),z=v("InputNumber"),y=v("TriStateCheckbox"),D=v("PrimeDialog"),R=v("DataTable");return i(),_("div",null,[t.loading||t.multiloading?(i(),P(f,{key:0})):t.message?(i(),P(x,{key:1,severity:t.messageText.severity,closable:!1},{default:n(()=>[k(d(t.messageText.text),1)]),_:1},8,["severity"])):(i(),_("div",Ue,[(i(),P(R,{class:"p-datatable-sm",exportFilename:"Event List",value:t.registrations,responsiveLayout:"stack",breakpoint:"780px",key:t.dataTableRender,expandedRows:t.expandedRows,"onUpdate:expandedRows":s[10]||(s[10]=e=>t.expandedRows=e),rows:10,paginator:!0,ref:"dt",stripedRows:"",sortField:"organization",sortOrder:1,filters:t.filters,"onUpdate:filters":s[11]||(s[11]=e=>t.filters=e),filterDisplay:"menu",globalFilterFields:["organization","guid"],loading:t.loading,showGridlines:"",paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",rowsPerPageOptions:[10,20,50],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords}"},{header:n(()=>[u("div",Ne,[l(c,{icon:"pi pi-external-link",label:"Export",onClick:s[0]||(s[0]=e=>t.exportCSV(e))}),l(c,{type:"button",icon:"pi pi-filter-slash",label:"Clear",class:"p-button-outlined",onClick:s[1]||(s[1]=e=>t.clearFilters())}),u("span",Oe,[Ee,l(p,{title:"Search all by keyword",modelValue:t.filters.global.value,"onUpdate:modelValue":s[2]||(s[2]=e=>t.filters.global.value=e),placeholder:"Keyword Search"},null,8,["modelValue"])])])]),empty:n(()=>[je]),loading:n(()=>[$e]),expansion:n(e=>[u("div",Je,[u("h5",null,"Guests for "+d(e.data.registrar),1),l(R,{value:Object.values(e.data.details),responsiveLayout:"scroll"},{default:n(()=>[l(m,{field:"organization",header:"Organization",sortable:""},{body:n(({data:a})=>[k(d(t.lookup("organizations",a.organization)),1)]),_:1}),l(m,{field:"name",header:"Name"},{body:n(({data:a})=>[k(d(a.firstname)+" "+d(a.lastname),1)]),_:1}),l(m,{field:"attendancetype",header:"Attendee Type",sortable:""},{body:n(({data:a})=>[k(d(t.lookup("attendancetypes",a.attendancetype)),1)]),_:1}),l(m,{field:"accessibility",header:"Accessibility Accomodations Required",sortable:""},{body:n(({data:a})=>[k(d(t.lookupLoop("accessibilityoptions",a.accessibility)),1)]),_:1}),l(m,{field:"tabledetails.tablename",header:"Seated?",sortable:""},{body:n(({data:a})=>[a.table?(i(),P(L,{key:0,to:`/admin/table/${a.table}`},{default:n(()=>[k(d(a.tabledetails.tablename),1)]),_:2},1032,["to"])):(i(),_("span",We,"Pending"))]),_:1}),l(m,{field:"table",header:"Edit Table"},{body:n(({data:a})=>[e.data.submitted===!1?(i(),_("span",Xe,"Must Submit Registration")):(i(),_("span",Ye,[l(c,{icon:"pi pi-pencil",label:a.tabledetails?"Edit Table":"Add Table",class:"p-button-rounded p-button-success mr-2 edit-button",onClick:G=>t.editGuestTable(a)},null,8,["label","onClick"])]))]),_:2},1024),l(D,{visible:t.tableDetailsDialog,"onUpdate:visible":s[5]||(s[5]=a=>t.tableDetailsDialog=a),style:{width:"50rem",margin:"5rem"},header:"Table Details",modal:!0,class:"p-fluid registration-dialog"},{footer:n(()=>[l(c,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:s[4]||(s[4]=a=>t.tableDetailsDialog=!1)}),l(c,{label:"Confirm Table",icon:"pi pi-check",class:"p-button-text",onClick:t.editTable},null,8,["onClick"])]),default:n(()=>[u("div",Ze,[et,l(b,{class:E({"p-invalid":t.v$.table.$error}),id:"table",modelValue:t.guest.table,"onUpdate:modelValue":s[3]||(s[3]=a=>t.guest.table=a),options:t.tables.filter(a=>a.tablecapacity>a.guests.length),name:"table",optionLabel:"tablename",optionValue:"_id",placeholder:"Select the table."},null,8,["class","modelValue","options"]),t.v$.table.$error?(i(),_("small",tt,"Please select the table.")):Q("",!0)])]),_:1},8,["visible"])]),_:2},1032,["value"])])]),default:n(()=>[l(m,{header:"Guests",expander:!0,headerStyle:"width: 3rem"}),l(m,{field:"guid",header:"ID#",key:"guid",class:"guid"},{body:n(({data:e})=>[l(L,{to:`/admin/edit/${e.guid}`},{default:n(()=>[k(d(e.registrar),1)]),_:2},1032,["to"])]),_:1}),l(m,{field:"organization",filterField:"organization",header:"Organization",key:"organization",sortable:!0},{body:n(({data:e})=>[k(d(t.lookup("organizations",e.organization)),1)]),filter:n(({filterModel:e})=>[l(b,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,options:t.organizations,optionLabel:"text",placeholder:"Any",class:"p-column-filter",showClear:!0},{value:n(a=>[a.value?(i(),_("div",Me,[u("div",null,d(t.lookup("organizations",a.value)),1)])):(i(),_("span",qe,d(a.placeholder),1))]),option:n(a=>[u("div",Ke,[u("div",null,d(t.lookup("organizations",a.option)),1)])]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:1}),l(m,{field:"guestList",header:"Guest List",key:"guestList",filterField:"guestList",sortable:""},{body:n(({data:e})=>[k(d(e.guests.length),1)]),filter:n(({filterModel:e})=>[l(z,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,showButtons:"",buttonLayout:"horizontal",step:1,decrementButtonClass:"p-button-danger",incrementButtonClass:"p-button-success",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(m,{field:"submitted",header:"Submitted?",key:"submitted",dataType:"boolean"},{body:n(({data:e})=>[u("span",null,[u("i",{class:E(["pi pi-check-circle",{"true-icon pi-check-circle":e.submitted,"false-icon pi-times-circle":!e.submitted}]),style:{"font-size":"2rem"}},null,2),He,k(d(e.submitted?" Submitted":" Pending"),1)])]),filter:n(({filterModel:e})=>[l(y,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(m,{field:"seated",header:"All Guests Seated?",key:"seated",filterField:"allAssigned",dataType:"boolean"},{body:n(({data:e})=>[u("span",null,[u("i",{class:E(["pi pi-check-circle",{"true-icon pi-check-circle":e.status===e.guests.length,"false-icon pi-times-circle":e.status!==e.guests.length}]),style:{"font-size":"2rem"}},null,2),Qe,k(" "+d(e.status)+" of "+d(e.guests.length)+" Guests Seated",1)])]),filter:n(({filterModel:e})=>[l(y,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(m,{header:"Options"},{body:n(({data:e})=>[l(c,{icon:"pi pi-pencil",label:"Bulk Seat Registration",class:"p-button-rounded p-button-success mr-2 edit-button",onClick:a=>t.editRegistrationTable(e)},null,8,["onClick"])]),_:1}),l(D,{visible:t.multiTableDialog,"onUpdate:visible":s[9]||(s[9]=e=>t.multiTableDialog=e),style:{width:"50rem",margin:"5rem"},header:"Table Details",modal:!0,class:"p-fluid registration-dialog"},{footer:n(()=>[l(c,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:s[7]||(s[7]=e=>t.multiTableDialog=!1)}),l(c,{label:"Confirm Table",icon:"pi pi-check",class:"p-button-text",onClick:s[8]||(s[8]=e=>t.multiSeat(t.registration.table))})]),default:n(()=>[u("div",at,[lt,l(b,{class:E({"p-invalid":t.v$.table.$error}),id:"table",modelValue:t.registration.table,"onUpdate:modelValue":s[6]||(s[6]=e=>t.registration.table=e),options:t.tables.filter(e=>e.tablecapacity>e.guests.length),name:"table",optionLabel:"tablename",optionValue:"_id",placeholder:"Select the table."},null,8,["class","modelValue","options"]),t.v$.table.$error?(i(),_("small",st,"Please select the table.")):Q("",!0)])]),_:1},8,["visible"])]),_:1},8,["value","expandedRows","filters","loading"]))]))])}var nt=$(Be,[["render",ot]]);const it={__name:"AdminVisualTableView",setup(T){const s=pe(),g=r(!1),t=()=>g.value=!0,V=r(A.get("navItems")||[]),w=()=>String(J().getTablesCount),f=r(!1),x=()=>{f.value=!0},c=r(0),p=()=>c.value++;return s.login(),(m,L)=>{const b=v("PrimeButton");return i(),_("main",null,[l(me,{title:"Event Planning",subtitle:"Visually Organize PA Event"}),l(b,{label:"Table Count: ",type:"button",icon:"pi pi-ticket",class:"p-button-warning",badge:w(),onClick:L[0]||(L[0]=z=>x()),badgeClass:"p-badge-danger"},null,8,["badge"]),l(ge,{title:"",menuitems:V.value},null,8,["menuitems"]),(i(),P(Ge,{onLoadedTables:t,key:c.value})),g.value?(i(),P(nt,{key:0,onAddGuest:p,class:"registrations-visual-box"})):Q("",!0)])}}};var gt=$(it,[["__scopeId","data-v-700ad816"]]);export{gt as default};
