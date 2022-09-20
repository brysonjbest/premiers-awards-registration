import{f as x}from"./settings.services.f39d149b.js";import{I as q}from"./InputFinancial.a658e1eb.js";import{_ as J,a as E,f as Q,s as G,r as p,u as W,g as X,h as B,b as m,o as l,c as h,i as g,w as o,e as u,t as f,j as Z,k as s,d,l as _,F as M,m as $,n as ee}from"./index.f011f2d3.js";import{u as te}from"./guests.8314b98a.js";const ie={props:{adminView:Boolean,detailsView:Boolean,registrationID:String},setup(k){const a=E(),r=Q(),{registrations:t}=G(E()),{guests:N}=G(te()),O=p(x.get("registrationSelection")||[]),I=p((x.get("organizations")||[]).map(i=>i.value)),z=p(0),y=W(),V=p();let w=p(!1);const c=p({severity:null,text:""}),S=p(x.get("registrationFilters")||{}),P=()=>{U()},U=()=>{S.value=x.get("registrationFilters")||{}},R=function(i){return i.filter(b=>b.field!=="organization")},v=p(!1),D=async function(){const i=y.getUser;a.$reset,v.value=!0;try{return k.registrationID?await a.fill(k.registrationID):k.adminView?await a.fillAllRegistrations():await a.fill(i.guid)?a.fill(i.guid):[]}catch(b){v.value=!1,console.warn(b),w.value=!0,c.value={severity:"error",text:"Could not fetch registrations."}}finally{v.value=!1,setTimeout(()=>w.value=!1,1500)}},C=()=>{D().then(()=>{t.value.forEach(i=>{i.createdAt=new Date(i.createdAt),i.updatedAt=new Date(i.updatedAt),i.guestCount=Number(i.guests.length)})})};X(()=>{C()});const e=function(){return a.getRegistration.submitted},n=function(i,b){return x.lookup(i,b)},L=()=>{V.value.value.map(i=>i.organization=n("organizations",i.organization)),V.value.exportCSV()},H=i=>new Date(i).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"}),K=i=>new Date(i).toLocaleTimeString("en-US",{hour12:!0,hour:"2-digit",minute:"2-digit"}),Y=function(i){let b=0;return i%10<=5&&i%10!=0&&(b+=.5),i%10>5&&(b+=1),i/10>=1&&(b+=Math.floor(i/10)),b},T=p({}),j=p(!1),F=p(!1),A=p(!1);return{columns:O,organizations:I,registrations:t,settingsStore:r,guests:N,registration:T,isSubmitted:e,submitted:j,registrationDialog:F,deleteRegistrationDialog:A,dataTableRender:z,filters:S,loading:v,message:w,messageText:c,dt:V,clearFilters:P,exportCSV:L,formatDate:H,formatTime:K,lookup:n,filter:R,editRegistration:i=>{T.value={...i},F.value=!0},confirmDeleteRegistration:i=>{T.value=i,A.value=!0},deleteRegistration:async function(){v.value=!0;try{a.deleteRegistration(T.value._id).then(D()).then(()=>{v.value=!1,w.value=!0,c.value={severity:"success",text:"Successfully deleted registration and all connected guests."}})}catch(i){v.value=!1,console.warn(i),w.value=!0,c.value={severity:"error",text:"Could not delete registration."}}finally{A.value=!1,await new Promise(i=>setTimeout(i,1500)).then(()=>{w.value=!1,k.registrationID?B.push("/admin"):k.adminView?D():B.push("/")})}},hideDialog:()=>{F.value=!1,j.value=!1},loadLazyData:C,tableCount:Y,router:B}},components:{InputFinancial:q}},ae={key:2},ne={style:{"text-align":"left"},class:"header-buttons"},oe={class:"p-input-icon-left"},le=s("i",{class:"pi pi-search"},null,-1),se=u(" No registrations found. "),re=u(" Loading registration data. Please wait. "),de={key:0},ue={key:1},ce={class:"item"},me=s("br",null,null,-1),ge=s("br",null,null,-1),fe=s("br",null,null,-1),be={class:"options-buttons"},pe={class:"confirmation-content"},ye=s("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),_e={key:0},ve=s("b",null,[u("All guests must be unseated before this registration may be deleted."),s("br"),u("Please remove all guests from their tables.")],-1),he=[ve],we={key:1},ke=s("br",null,null,-1),Ve=u(" This will delete all associated guests."),De=s("br",null,null,-1),Ce=s("b",null,"This action cannot be undone.",-1),xe={key:0},Se={key:1};function Re(k,a,r,t,N,O){const I=m("ProgressSpinner"),z=m("PrimeMessage"),y=m("PrimeButton"),V=m("InputText"),w=m("router-link"),c=m("PrimeColumn"),S=m("DropDown"),P=m("InputNumber"),U=m("TriStateCheckbox"),R=m("PrimeCalendar"),v=m("DataTable"),D=m("InputFinancial"),C=m("PrimeDialog");return l(),h("div",null,[t.loading?(l(),g(I,{key:0})):t.message?(l(),g(z,{key:1,severity:t.messageText.severity,closable:!1},{default:o(()=>[u(f(t.messageText.text),1)]),_:1},8,["severity"])):(l(),h("div",ae,[(l(),g(v,{class:"p-datatable-sm",value:t.registrations,responsiveLayout:"stack",key:t.dataTableRender,paginator:r.adminView&&!r.registrationID,rows:10,ref:"dt",stripedRows:"",exportFilename:"Registration List",filters:t.filters,"onUpdate:filters":a[3]||(a[3]=e=>t.filters=e),filterDisplay:"menu",globalFilterFields:["organization","branch","primarycontact","primaryemail","financialcontact","clientministry","resp","serviceline","project","guid"],loading:t.loading,showGridlines:"",paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",rowsPerPageOptions:[10,20,50],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords}"},Z({empty:o(()=>[se]),loading:o(()=>[re]),default:o(()=>[r.adminView?(l(),g(c,{field:"guid",header:"ID#",key:"guid",class:"guid"},{body:o(({data:e})=>[d(w,{to:`/admin/edit/${e.guid}`},{default:o(()=>[u(f(e.registrar),1)]),_:2},1032,["to"])]),_:1})):_("",!0),d(c,{field:"organization",filterField:"organization",header:"Organization",key:"organization"},{body:o(({data:e})=>[u(f(t.lookup("organizations",e.organization)),1)]),filter:o(({filterModel:e})=>[d(S,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,options:t.organizations,optionLabel:"text",placeholder:"Any",class:"p-column-filter",showClear:!0},{value:o(n=>[n.value?(l(),h("div",de,[s("div",null,f(t.lookup("organizations",n.value)),1)])):(l(),h("span",ue,f(n.placeholder),1))]),option:o(n=>[s("div",ce,[s("div",null,f(t.lookup("organizations",n.option)),1)])]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:1}),(l(!0),h(M,null,$(t.filter(t.columns),e=>(l(),g(c,{field:e.field,header:e.text,key:e.field},{filter:o(({filterModel:n})=>[d(V,{type:"text",modelValue:n.value,"onUpdate:modelValue":L=>n.value=L,class:"p-column-filter",placeholder:`Search by ${e.field}`},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["field","header"]))),128)),r.adminView&&!r.registrationID?(l(),g(c,{field:"guestCount",dataType:"numeric",header:"Guest Count:",key:"guestCount",sortable:!0},{body:o(({data:e})=>[s("span",null,f(e.guestCount),1)]),filter:o(({filterModel:e})=>[d(P,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,showButtons:"",buttonLayout:"horizontal",step:1,decrementButtonClass:"p-button-danger",incrementButtonClass:"p-button-success",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})):_("",!0),r.adminView?(l(),g(c,{field:"submitted",header:"Submitted?",key:"submitted",dataType:"boolean"},{body:o(({data:e})=>[s("span",null,[s("i",{class:ee(["pi pi-check-circle",{"true-icon pi-check-circle":e.submitted,"false-icon pi-times-circle":!e.submitted}]),style:{"font-size":"2rem"}},null,2),me,u(f(e.submitted?" Submitted":" Pending"),1)])]),filter:o(({filterModel:e})=>[d(U,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n},null,8,["modelValue","onUpdate:modelValue"])]),_:1})):_("",!0),r.adminView?(l(),g(c,{field:"createdAt",header:"Created:",key:"createdAt",sortable:!0,dataType:"date"},{body:o(({data:e})=>[u(f(t.formatDate(e.createdAt))+",",1),ge,u(f(t.formatTime(e.createdAt)),1)]),filter:o(({filterModel:e})=>[d(R,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})):_("",!0),r.adminView?(l(),g(c,{field:"updatedAt",header:"Updated:",key:"updatedAt",sortable:!0,dataType:"date"},{body:o(({data:e})=>[u(f(t.formatDate(e.updatedAt))+",",1),fe,u(" "+f(t.formatTime(e.updatedAt)),1)]),filter:o(({filterModel:e})=>[d(R,{modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})):_("",!0),!t.isSubmitted()&&t.settingsStore.getIsSalesOpen||r.adminView?(l(),g(c,{key:5,exportable:!1,style:{"min-width":"8rem"},header:"Options:"},{body:o(e=>[s("div",be,[e.data.submitted?_("",!0):(l(),g(y,{key:0,label:"Edit",icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2 edit-button",onClick:n=>t.editRegistration(e.data)},null,8,["onClick"])),!e.data.submitted&&(!r.adminView||r.adminView&&r.registrationID)?(l(),g(y,{key:1,icon:"pi pi-trash",label:"Delete",class:"p-button-rounded p-button-warning delete-button",onClick:n=>t.confirmDeleteRegistration(e.data)},null,8,["onClick"])):_("",!0),r.adminView&&!r.registrationID?(l(),g(y,{key:2,icon:"pi pi-arrow-up-right",label:"View",class:"p-button-rounded p-button-info info-button",onClick:n=>t.router.push(`/admin/edit/${e.data.guid}`)},null,8,["onClick"])):_("",!0)])]),_:1})):_("",!0)]),_:2},[r.adminView&&!r.registrationID?{name:"header",fn:o(()=>[s("div",ne,[d(y,{icon:"pi pi-external-link",label:"Export",onClick:a[0]||(a[0]=e=>t.exportCSV(e))}),d(y,{type:"button",icon:"pi pi-filter-slash",label:"Clear",class:"p-button-outlined",onClick:a[1]||(a[1]=e=>t.clearFilters())}),s("span",oe,[le,d(V,{title:"Search all by keyword",modelValue:t.filters.global.value,"onUpdate:modelValue":a[2]||(a[2]=e=>t.filters.global.value=e),placeholder:"Keyword Search"},null,8,["modelValue"])])])])}:void 0]),1032,["value","paginator","filters","loading"]))])),s("div",null,[d(C,{visible:t.registrationDialog,"onUpdate:visible":a[4]||(a[4]=e=>t.registrationDialog=e),style:{width:"50rem",margin:"5rem"},header:"Registration Details",modal:!0,class:"p-fluid registration-dialog",onHide:a[5]||(a[5]=()=>t.loadLazyData())},{default:o(()=>[d(D,{registrationID:t.registration.guid,adminView:r.adminView,detailsView:r.detailsView},null,8,["registrationID","adminView","detailsView"])]),_:1},8,["visible"]),d(C,{visible:t.deleteRegistrationDialog,"onUpdate:visible":a[8]||(a[8]=e=>t.deleteRegistrationDialog=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:o(()=>[t.guests.some(e=>e.tabledetails!==void 0)?(l(),h("div",xe,[d(y,{label:"Okay",icon:"pi pi-check",class:"p-button-text",onClick:a[6]||(a[6]=e=>t.deleteRegistrationDialog=!1)})])):(l(),h("div",Se,[d(y,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:a[7]||(a[7]=e=>t.deleteRegistrationDialog=!1)}),d(y,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:t.deleteRegistration},null,8,["onClick"])]))]),default:o(()=>[s("div",pe,[ye,t.guests.some(e=>e.tabledetails!==void 0)?(l(),h("p",_e,he)):t.registration?(l(),h("p",we,[u(" Are you sure you want to delete "+f(t.registration.primarycontact)+"'s registration?",1),ke,Ve,De,Ce])):_("",!0)])]),_:1},8,["visible"])])])}var Be=J(ie,[["render",Re]]);export{Be as R};
