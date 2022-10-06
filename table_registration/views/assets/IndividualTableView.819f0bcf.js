import{G as R}from"./GuestList.23186aa8.js";import{T as U}from"./TableList.12a099f9.js";import{_ as z,r,g as H,b as o,o as m,c as G,i as P,w as n,e as u,t as k,d as i,k as b,n as M,l as A,s as N,O,Q as j,y as E,N as Q,u as q,a as J,H as K,P as W}from"./index.0d49d665.js";import{f as S}from"./settings.services.b99c161d.js";import{u as X,a as C}from"./guests.95e89c46.js";import"./index.esm.c521fda1.js";const Y={props:{tableID:String},setup(f){const a=X(),p=r(),e=r(S.get("guestSelection")||[]),T=r(S.get("organizations")||[]),h=r(),s=r(!1);let c=r(!1);const _=r({severity:null,text:""}),l=C(),v=async function(){s.value=!0;try{p.value=await(await E.getAllGuests()).data,p.value.map(g=>{g.assignedTable=!!g.table})}catch(g){s.value=!1,console.warn(g),c.value=!0,_.value={severity:"error",text:"Could not fetch guests."}}finally{s.value=!1,setTimeout(()=>c.value=!1,1500)}},y=()=>{v()};H(()=>{y()});const w=r(S.get("guestFilters")||{}),d=function(g,I){return S.lookup(g,I)},t=r({});return{columns:e,tableStore:l,dt:h,filters:w,loading:s,message:c,messageText:_,organizations:T,guests:p,guest:t,lookup:d,loadLazyData:y,onAdd:async function(g){await l.fillOnlyTable(f.tableID);const{table:I}=N(C()),L=I.value,F=L._id,V=g._id;try{s.value=!0,g.table!=null&&await a.removeGuestFromTable(V,{table:null},{_id:g.table}),await a.addGuestToTable(V,{table:F,organization:g.organization},L)}catch(B){s.value=!1,console.warn(B),c.value=!0,_.value={severity:"error",text:"Guest and table could not be updated."}}finally{s.value=!1,setTimeout(()=>c.value=!1,1500),v()}}}}},x=f=>(O("data-v-10ef1501"),f=f(),j(),f),Z={key:2},$={style:{"text-align":"left"}},ee={class:"p-input-icon-left"},te=x(()=>b("i",{class:"pi pi-search"},null,-1)),ae=u(" No guests found. "),se=u(" Loading guest data. Please wait. "),ne=x(()=>b("br",null,null,-1)),oe=x(()=>b("br",null,null,-1)),le=x(()=>b("br",null,null,-1)),ie=u(" Registration: "),re=x(()=>b("div",null,null,-1));function de(f,a,p,e,T,h){const s=o("ProgressSpinner"),c=o("PrimeMessage"),_=o("InputText"),l=o("PrimeColumn"),v=o("TriStateCheckbox"),y=o("router-link"),w=o("PrimeButton"),d=o("DataTable");return m(),G("div",null,[e.loading?(m(),P(s,{key:0})):e.message?(m(),P(c,{key:1,severity:e.messageText.severity,closable:!1},{default:n(()=>[u(k(e.messageText.text),1)]),_:1},8,["severity"])):(m(),G("div",Z,[i(d,{class:"p-datatable-sm",value:e.guests,paginator:!0,responsiveLayout:"stack",breakpoint:"450px",rows:10,ref:"dt",stripedRows:"",filters:e.filters,"onUpdate:filters":a[1]||(a[1]=t=>e.filters=t),filterDisplay:"menu",globalFilterFields:["firstname","lastname"],loading:e.loading,showGridlines:"",paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",rowsPerPageOptions:[10,20,50],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords}"},{header:n(()=>[b("div",$,[b("span",ee,[te,i(_,{title:"Search Guest List.",modelValue:e.filters.global.value,"onUpdate:modelValue":a[0]||(a[0]=t=>e.filters.global.value=t),placeholder:"Search Guest List"},null,8,["modelValue"])])])]),empty:n(()=>[ae]),loading:n(()=>[se]),default:n(()=>[i(l,{field:"firstname",header:"First Name",key:"firstname"},{body:n(({data:t})=>[u(k(t.firstname),1)]),_:1}),i(l,{field:"lastname",header:"Last Name",key:"lastname"},{body:n(({data:t})=>[u(k(t.lastname),1)]),_:1}),i(l,{field:"assignedTable",header:"Table",key:"assignedTable",dataType:"boolean"},{body:n(({data:t})=>[b("span",null,[b("i",{class:M(["pi pi-check-circle",{"true-icon pi-check-circle":t.assignedTable,"false-icon pi-times-circle":!t.assignedTable}]),style:{"font-size":"2rem"}},null,2),ne,u(k(t.assignedTable?" Assigned":" Pending"),1)])]),filter:n(({filterModel:t})=>[i(v,{modelValue:t.value,"onUpdate:modelValue":D=>t.value=D},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),i(l,{field:"details",header:"Guest Details",key:"registration"},{body:n(({data:t})=>[u(k(e.lookup("attendancetypes",t.attendancetype))+" ",1),oe,u(" Organization: "+k(e.lookup("organizations",t.organization))+" ",1),le,ie,i(y,{to:`/admin/edit/${t.registration}`,class:"registration-link"},{default:n(()=>[u(k(t.registration),1)]),_:2},1032,["to"])]),_:1}),i(l,{exportable:!1,style:{"min-width":"8rem"},header:"Add:"},{body:n(t=>[e.tableStore.getIsFull?A("",!0):(m(),P(w,{key:0,icon:"pi pi-pencil",label:"Add Guest to Table",class:"p-button-rounded p-button-success mr-2 edit-button",onClick:D=>e.onAdd(t.data)},null,8,["onClick"]))]),_:1})]),_:1},8,["value","filters","loading"])])),re])}var ue=z(Y,[["render",de],["__scopeId","data-v-10ef1501"]]);const ce={props:{id:String},setup(f){const{message:a}=N(Q()),p=r(!1),e=r(!1),T=q();T.login();const h=J(),s=C();s.fillTable(f.id);const c=()=>String(s.getGuestCount),_=()=>T.isAdmin,l=r(!1),v=r(!1),y=()=>{l.value=!0},w=()=>{v.value=!0},d=K({count:0,increment(){this.count++}});return{userStore:T,financialStore:h,tableStore:s,guestCount:c,isAdmin:_,guestInfoDialog:l,addGuestDialog:v,guestInfo:y,activeMessage:p,message:a,loading:e,addGuest:w,keycount:d}},components:{GuestList:R,PageHeader:W,TableList:U,GuestPicker:ue}},ge={class:"individual-table-view"},me=u("Manage Table Details"),pe={key:1,class:"page-body"},be={class:"registration-buttons"};function fe(f,a,p,e,T,h){const s=o("PageHeader"),c=o("ProgressSpinner"),_=o("TableList"),l=o("PrimeButton"),v=o("GuestList"),y=o("PrimeDialog"),w=o("GuestPicker");return m(),G("main",ge,[i(s,{class:"pageheader"},{default:n(()=>[me]),_:1}),e.loading?(m(),P(c,{key:0})):(m(),G("div",pe,[(m(),P(_,{tableID:p.id,detailsView:!0,key:e.keycount.count},null,8,["tableID"])),b("div",be,[i(l,{type:"button",label:"Total Guests",icon:"pi pi-users",class:"p-button-warning",badge:e.guestCount(),onClick:a[0]||(a[0]=d=>e.guestInfo()),badgeClass:"p-badge-danger"},null,8,["badge"]),e.tableStore.getIsFull?A("",!0):(m(),P(l,{key:0,type:"button",label:"Add guest",icon:"pi pi-users",class:"p-button",onClick:a[1]||(a[1]=d=>e.addGuest())}))]),(m(),P(v,{tableID:p.id,key:e.keycount.count},null,8,["tableID"])),i(y,{visible:e.guestInfoDialog,"onUpdate:visible":a[2]||(a[2]=d=>e.guestInfoDialog=d),header:"Guest Information",modal:!0,class:"p-fluid"},{default:n(()=>[u("Total Number of Guests: "+k(e.guestCount())+". ",1)]),_:1},8,["visible"]),i(y,{visible:e.addGuestDialog,"onUpdate:visible":a[3]||(a[3]=d=>e.addGuestDialog=d),style:{width:"90vw"},position:"bottom",header:"Add a new Guest",modal:!0,class:"p-fluid",onHide:a[4]||(a[4]=d=>e.keycount.increment())},{default:n(()=>[i(w,{tableID:p.id},null,8,["tableID"])]),_:1},8,["visible"])]))])}var Pe=z(ce,[["render",fe]]);export{Pe as default};
