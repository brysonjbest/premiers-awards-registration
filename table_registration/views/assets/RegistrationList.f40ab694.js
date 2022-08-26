import{_ as H,a as O,s as K,r as p,f as x,u as Y,g as q,b as m,o as r,c as w,h as b,w as n,e as g,t as d,i as J,j as l,d as s,k as _,F as Q,l as W,n as X,m as j}from"./index.086351ed.js";import{I as Z}from"./InputFinancial.9f1c91e3.js";const M={props:{adminView:Boolean,detailsView:Boolean,registrationID:String},setup(V){const a=O(),{registrations:u}=K(O()),t=p(x.get("registrationSelection")||[]),B=p((x.get("organizations")||[]).map(i=>i.value)),N=p(0),P=Y(),k=p();let c=p(!1);const h=p({severity:null,text:""}),R=p(x.get("registrationFilters")||{}),y=()=>{U()},U=()=>{R.value=x.get("registrationFilters")||{}},v=p(!1),D=async function(){const i=P.getUser;a.$reset,v.value=!0;try{return V.adminView?await a.fillAllRegistrations():V.registrationID?await a.fill(V.registrationID):await a.fill(i.guid)?a.fill(i.guid):[]}catch(f){v.value=!1,console.warn(f),c.value=!0,h.value={severity:"error",text:"Could not fetch registrations."}}finally{v.value=!1,setTimeout(()=>c.value=!1,1500)}},C=()=>{D().then(()=>{u.value.forEach(i=>{i.createdAt=new Date(i.createdAt),i.updatedAt=new Date(i.updatedAt),i.guestCount=Number(i.guests.length)})})};q(()=>{C()});const L=function(){return a.getRegistration.submitted},S=function(i,f){return x.lookup(i,f)},T=()=>{k.value.value.map(i=>i.organization=S("organizations",i.organization)),k.value.exportCSV()},e=i=>new Date(i).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"}),o=i=>new Date(i).toLocaleTimeString("en-US",{hour12:!0,hour:"2-digit",minute:"2-digit"}),F=function(i){return i.filter(f=>f.field!=="organization")},G=function(i){let f=0;return i%10<=5&&i%10!=0&&(f+=.5),i%10>5&&(f+=1),i/10>=1&&(f+=Math.floor(i/10)),f},z=p({}),E=p(!1),I=p(!1),A=p(!1);return{columns:t,organizations:B,registrations:u,registration:z,isSubmitted:L,submitted:E,registrationDialog:I,deleteRegistrationDialog:A,dataTableRender:N,filters:R,loading:v,message:c,messageText:h,dt:k,clearFilters:y,exportCSV:T,formatDate:e,formatTime:o,lookup:S,filter:F,editRegistration:i=>{z.value={...i},I.value=!0},confirmDeleteRegistration:i=>{z.value=i,A.value=!0},deleteRegistration:async function(){v.value=!0;try{a.deleteRegistration(z.value._id).then(D()).then(()=>{v.value=!1,c.value=!0,h.value={severity:"success",text:"Successfully deleted registration and all connected guests."}})}catch(i){v.value=!1,console.warn(i),c.value=!0,h.value={severity:"error",text:"Could not delete registration."}}finally{A.value=!1,await new Promise(i=>setTimeout(i,1500)).then(()=>{c.value=!1,V.registrationID?j.push("/admin"):V.adminView?D():j.push("/")})}},hideDialog:()=>{I.value=!1,E.value=!1},loadLazyData:C,tableCount:G}},components:{InputFinancial:Z}},$={key:2},ee={style:{"text-align":"left"}},te={class:"p-input-icon-left"},ie=l("i",{class:"pi pi-search"},null,-1),ae=g(" No registrations found. "),ne=g(" Loading registration data. Please wait. "),oe={key:0},le={key:1},re={class:"item"},se=l("br",null,null,-1),de=l("br",null,null,-1),ue=l("br",null,null,-1),ce={class:"confirmation-content"},me=l("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),ge={key:0},fe=g("Are you sure you want to delete registration # "),pe=l("br",null,null,-1),be=g(" This will delete all associated guests."),ye=l("br",null,null,-1),ve=l("b",null,"This action cannot be undone.",-1);function _e(V,a,u,t,B,N){const P=m("ProgressSpinner"),k=m("PrimeMessage"),c=m("PrimeButton"),h=m("InputText"),R=m("router-link"),y=m("PrimeColumn"),U=m("DropDown"),v=m("InputNumber"),D=m("TriStateCheckbox"),C=m("PrimeCalendar"),L=m("DataTable"),S=m("InputFinancial"),T=m("PrimeDialog");return r(),w("div",null,[t.loading?(r(),b(P,{key:0})):t.message?(r(),b(k,{key:1,severity:t.messageText.severity,closable:!1},{default:n(()=>[g(d(t.messageText.text),1)]),_:1},8,["severity"])):(r(),w("div",$,[(r(),b(L,{class:"p-datatable-sm",value:t.registrations,responsiveLayout:"stack",key:t.dataTableRender,paginator:u.adminView,rows:10,ref:"dt",stripedRows:"",exportFilename:"Registration List",filters:t.filters,"onUpdate:filters":a[3]||(a[3]=e=>t.filters=e),filterDisplay:"menu",globalFilterFields:["organization","branch","primarycontact","primaryemail","financialcontact","clientministry","resp","serviceline","project","guid"],loading:t.loading,showGridlines:"",paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",rowsPerPageOptions:[10,20,50],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords}"},J({empty:n(()=>[ae]),loading:n(()=>[ne]),default:n(()=>[u.adminView?(r(),b(y,{field:"guid",header:"ID#",key:"guid",class:"guid"},{body:n(({data:e})=>[s(R,{to:`/admin/edit/${e.guid}`},{default:n(()=>[g(d(e.registrar),1)]),_:2},1032,["to"])]),_:1})):_("",!0),s(y,{field:"organization",filterField:"organization",header:"Organization",key:"organization"},{body:n(({data:e})=>[g(d(t.lookup("organizations",e.organization)),1)]),filter:n(({filterModel:e})=>[s(U,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,options:t.organizations,optionLabel:"text",placeholder:"Any",class:"p-column-filter",showClear:!0},{value:n(o=>[o.value?(r(),w("div",oe,[l("div",null,d(t.lookup("organizations",o.value)),1)])):(r(),w("span",le,d(o.placeholder),1))]),option:n(o=>[l("div",re,[l("div",null,d(t.lookup("organizations",o.option)),1)])]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:1}),(r(!0),w(Q,null,W(t.filter(t.columns),e=>(r(),b(y,{field:e.field,header:e.text,key:e.field},{filter:n(({filterModel:o})=>[s(h,{type:"text",modelValue:o.value,"onUpdate:modelValue":F=>o.value=F,class:"p-column-filter",placeholder:`Search by ${e.field}`},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["field","header"]))),128)),u.adminView?(r(),b(y,{field:"guestCount",dataType:"numeric",header:"Guest Count:",key:"guestCount",sortable:!0},{body:n(({data:e})=>[l("span",null,d(e.guestCount),1)]),filter:n(({filterModel:e})=>[s(v,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,showButtons:"",buttonLayout:"horizontal",step:1,decrementButtonClass:"p-button-danger",incrementButtonClass:"p-button-success",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})):_("",!0),u.adminView?(r(),b(y,{field:"submitted",header:"Submitted?",key:"submitted",dataType:"boolean"},{body:n(({data:e})=>[l("span",null,[l("i",{class:X(["pi pi-check-circle",{"true-icon pi-check-circle":e.submitted,"false-icon pi-times-circle":!e.submitted}]),style:{"font-size":"2rem"}},null,2),se,g(d(e.submitted?" Submitted":" Pending"),1)])]),filter:n(({filterModel:e})=>[s(D,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o},null,8,["modelValue","onUpdate:modelValue"])]),_:1})):_("",!0),u.adminView?(r(),b(y,{field:"createdAt",header:"Created:",key:"createdAt",sortable:!0,dataType:"date"},{body:n(({data:e})=>[g(d(t.formatDate(e.createdAt))+",",1),de,g(d(t.formatTime(e.createdAt)),1)]),filter:n(({filterModel:e})=>[s(C,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})):_("",!0),u.adminView?(r(),b(y,{field:"updatedAt",header:"Updated:",key:"updatedAt",sortable:!0,dataType:"date"},{body:n(({data:e})=>[g(d(t.formatDate(e.updatedAt))+",",1),ue,g(" "+d(t.formatTime(e.updatedAt)),1)]),filter:n(({filterModel:e})=>[s(C,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})):_("",!0),!t.isSubmitted()||u.adminView?(r(),b(y,{key:5,exportable:!1,style:{"min-width":"8rem"},header:"Options:"},{body:n(e=>[e.data.submitted?_("",!0):(r(),b(c,{key:0,label:"Edit",icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2 edit-button",onClick:o=>t.editRegistration(e.data)},null,8,["onClick"])),e.data.submitted?_("",!0):(r(),b(c,{key:1,icon:"pi pi-trash",label:"Delete",class:"p-button-rounded p-button-warning delete-button",onClick:o=>t.confirmDeleteRegistration(e.data)},null,8,["onClick"]))]),_:1})):_("",!0)]),_:2},[u.adminView?{name:"header",fn:n(()=>[l("div",ee,[s(c,{icon:"pi pi-external-link",label:"Export",onClick:a[0]||(a[0]=e=>t.exportCSV(e))}),s(c,{type:"button",icon:"pi pi-filter-slash",label:"Clear",class:"p-button-outlined",onClick:a[1]||(a[1]=e=>t.clearFilters())}),l("span",te,[ie,s(h,{title:"Search all by keyword",modelValue:t.filters.global.value,"onUpdate:modelValue":a[2]||(a[2]=e=>t.filters.global.value=e),placeholder:"Keyword Search"},null,8,["modelValue"])])])])}:void 0]),1032,["value","paginator","filters","loading"]))])),l("div",null,[s(T,{visible:t.registrationDialog,"onUpdate:visible":a[4]||(a[4]=e=>t.registrationDialog=e),style:{width:"50rem",margin:"5rem"},header:"Registration Details",modal:!0,class:"p-fluid registration-dialog",onHide:a[5]||(a[5]=()=>t.loadLazyData())},{default:n(()=>[s(S,{registrationID:t.registration.guid,adminView:u.adminView,detailsView:u.detailsView},null,8,["registrationID","adminView","detailsView"])]),_:1},8,["visible"]),s(T,{visible:t.deleteRegistrationDialog,"onUpdate:visible":a[7]||(a[7]=e=>t.deleteRegistrationDialog=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:n(()=>[s(c,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:a[6]||(a[6]=e=>t.deleteRegistrationDialog=!1)}),s(c,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:t.deleteRegistration},null,8,["onClick"])]),default:n(()=>[l("div",ce,[me,t.registration?(r(),w("span",ge,[fe,l("b",null,d(t.registration.guid),1),g(" for contact "+d(t.registration.primarycontact)+"?",1),pe,be,ye,ve])):_("",!0)])]),_:1},8,["visible"])])])}var xe=H(M,[["render",_e]]);export{xe as R};
