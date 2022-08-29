import{_ as H,a as O,s as K,r as f,f as x,u as Y,g as q,b as c,o as l,c as w,h as p,w as n,e as b,t as m,i as J,j as r,d as s,k as _,F as Q,l as W,n as X,m as j}from"./index.4116548d.js";import{I as Z}from"./InputFinancial.1c6c50f9.js";const M={props:{adminView:Boolean,detailsView:Boolean,registrationID:String},setup(V){const a=O(),{registrations:d}=K(O()),t=f(x.get("registrationSelection")||[]),B=f((x.get("organizations")||[]).map(i=>i.value)),N=f(0),P=Y(),k=f();let u=f(!1);const h=f({severity:null,text:""}),R=f(x.get("registrationFilters")||{}),y=()=>{U()},U=()=>{R.value=x.get("registrationFilters")||{}},v=f(!1),D=async function(){const i=P.getUser;a.$reset,v.value=!0;try{return V.adminView?await a.fillAllRegistrations():V.registrationID?await a.fill(V.registrationID):await a.fill(i.guid)?a.fill(i.guid):[]}catch(g){v.value=!1,console.warn(g),u.value=!0,h.value={severity:"error",text:"Could not fetch registrations."}}finally{v.value=!1,setTimeout(()=>u.value=!1,1500)}},C=()=>{D().then(()=>{d.value.forEach(i=>{i.createdAt=new Date(i.createdAt),i.updatedAt=new Date(i.updatedAt),i.guestCount=Number(i.guests.length)})})};q(()=>{C()});const L=function(){return a.getRegistration.submitted},S=function(i,g){return x.lookup(i,g)},T=()=>{k.value.value.map(i=>i.organization=S("organizations",i.organization)),k.value.exportCSV()},e=i=>new Date(i).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"}),o=i=>new Date(i).toLocaleTimeString("en-US",{hour12:!0,hour:"2-digit",minute:"2-digit"}),F=function(i){return i.filter(g=>g.field!=="organization")},G=function(i){let g=0;return i%10<=5&&i%10!=0&&(g+=.5),i%10>5&&(g+=1),i/10>=1&&(g+=Math.floor(i/10)),g},z=f({}),E=f(!1),I=f(!1),A=f(!1);return{columns:t,organizations:B,registrations:d,registration:z,isSubmitted:L,submitted:E,registrationDialog:I,deleteRegistrationDialog:A,dataTableRender:N,filters:R,loading:v,message:u,messageText:h,dt:k,clearFilters:y,exportCSV:T,formatDate:e,formatTime:o,lookup:S,filter:F,editRegistration:i=>{z.value={...i},I.value=!0},confirmDeleteRegistration:i=>{z.value=i,A.value=!0},deleteRegistration:async function(){v.value=!0;try{a.deleteRegistration(z.value._id).then(D()).then(()=>{v.value=!1,u.value=!0,h.value={severity:"success",text:"Successfully deleted registration and all connected guests."}})}catch(i){v.value=!1,console.warn(i),u.value=!0,h.value={severity:"error",text:"Could not delete registration."}}finally{A.value=!1,await new Promise(i=>setTimeout(i,1500)).then(()=>{u.value=!1,V.registrationID?j.push("/admin"):V.adminView?D():j.push("/")})}},hideDialog:()=>{I.value=!1,E.value=!1},loadLazyData:C,tableCount:G}},components:{InputFinancial:Z}},$={key:2},ee={style:{"text-align":"left"}},te={class:"p-input-icon-left"},ie=r("i",{class:"pi pi-search"},null,-1),ae=b(" No registrations found. "),ne=b(" Loading registration data. Please wait. "),oe={key:0},le={key:1},re={class:"item"},se=r("br",null,null,-1),de=r("br",null,null,-1),ue=r("br",null,null,-1),ce={class:"confirmation-content"},me=r("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),ge={key:0},fe=r("br",null,null,-1),pe=b(" This will delete all associated guests."),be=r("br",null,null,-1),ye=r("b",null,"This action cannot be undone.",-1);function ve(V,a,d,t,B,N){const P=c("ProgressSpinner"),k=c("PrimeMessage"),u=c("PrimeButton"),h=c("InputText"),R=c("router-link"),y=c("PrimeColumn"),U=c("DropDown"),v=c("InputNumber"),D=c("TriStateCheckbox"),C=c("PrimeCalendar"),L=c("DataTable"),S=c("InputFinancial"),T=c("PrimeDialog");return l(),w("div",null,[t.loading?(l(),p(P,{key:0})):t.message?(l(),p(k,{key:1,severity:t.messageText.severity,closable:!1},{default:n(()=>[b(m(t.messageText.text),1)]),_:1},8,["severity"])):(l(),w("div",$,[(l(),p(L,{class:"p-datatable-sm",value:t.registrations,responsiveLayout:"stack",key:t.dataTableRender,paginator:d.adminView,rows:10,ref:"dt",stripedRows:"",exportFilename:"Registration List",filters:t.filters,"onUpdate:filters":a[3]||(a[3]=e=>t.filters=e),filterDisplay:"menu",globalFilterFields:["organization","branch","primarycontact","primaryemail","financialcontact","clientministry","resp","serviceline","project","guid"],loading:t.loading,showGridlines:"",paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",rowsPerPageOptions:[10,20,50],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords}"},J({empty:n(()=>[ae]),loading:n(()=>[ne]),default:n(()=>[d.adminView?(l(),p(y,{field:"guid",header:"ID#",key:"guid",class:"guid"},{body:n(({data:e})=>[s(R,{to:`/admin/edit/${e.guid}`},{default:n(()=>[b(m(e.registrar),1)]),_:2},1032,["to"])]),_:1})):_("",!0),s(y,{field:"organization",filterField:"organization",header:"Organization",key:"organization"},{body:n(({data:e})=>[b(m(t.lookup("organizations",e.organization)),1)]),filter:n(({filterModel:e})=>[s(U,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,options:t.organizations,optionLabel:"text",placeholder:"Any",class:"p-column-filter",showClear:!0},{value:n(o=>[o.value?(l(),w("div",oe,[r("div",null,m(t.lookup("organizations",o.value)),1)])):(l(),w("span",le,m(o.placeholder),1))]),option:n(o=>[r("div",re,[r("div",null,m(t.lookup("organizations",o.option)),1)])]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:1}),(l(!0),w(Q,null,W(t.filter(t.columns),e=>(l(),p(y,{field:e.field,header:e.text,key:e.field},{filter:n(({filterModel:o})=>[s(h,{type:"text",modelValue:o.value,"onUpdate:modelValue":F=>o.value=F,class:"p-column-filter",placeholder:`Search by ${e.field}`},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["field","header"]))),128)),d.adminView?(l(),p(y,{field:"guestCount",dataType:"numeric",header:"Guest Count:",key:"guestCount",sortable:!0},{body:n(({data:e})=>[r("span",null,m(e.guestCount),1)]),filter:n(({filterModel:e})=>[s(v,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,showButtons:"",buttonLayout:"horizontal",step:1,decrementButtonClass:"p-button-danger",incrementButtonClass:"p-button-success",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})):_("",!0),d.adminView?(l(),p(y,{field:"submitted",header:"Submitted?",key:"submitted",dataType:"boolean"},{body:n(({data:e})=>[r("span",null,[r("i",{class:X(["pi pi-check-circle",{"true-icon pi-check-circle":e.submitted,"false-icon pi-times-circle":!e.submitted}]),style:{"font-size":"2rem"}},null,2),se,b(m(e.submitted?" Submitted":" Pending"),1)])]),filter:n(({filterModel:e})=>[s(D,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o},null,8,["modelValue","onUpdate:modelValue"])]),_:1})):_("",!0),d.adminView?(l(),p(y,{field:"createdAt",header:"Created:",key:"createdAt",sortable:!0,dataType:"date"},{body:n(({data:e})=>[b(m(t.formatDate(e.createdAt))+",",1),de,b(m(t.formatTime(e.createdAt)),1)]),filter:n(({filterModel:e})=>[s(C,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})):_("",!0),d.adminView?(l(),p(y,{field:"updatedAt",header:"Updated:",key:"updatedAt",sortable:!0,dataType:"date"},{body:n(({data:e})=>[b(m(t.formatDate(e.updatedAt))+",",1),ue,b(" "+m(t.formatTime(e.updatedAt)),1)]),filter:n(({filterModel:e})=>[s(C,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})):_("",!0),!t.isSubmitted()||d.adminView?(l(),p(y,{key:5,exportable:!1,style:{"min-width":"8rem"},header:"Options:"},{body:n(e=>[e.data.submitted?_("",!0):(l(),p(u,{key:0,label:"Edit",icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2 edit-button",onClick:o=>t.editRegistration(e.data)},null,8,["onClick"])),e.data.submitted?_("",!0):(l(),p(u,{key:1,icon:"pi pi-trash",label:"Delete",class:"p-button-rounded p-button-warning delete-button",onClick:o=>t.confirmDeleteRegistration(e.data)},null,8,["onClick"]))]),_:1})):_("",!0)]),_:2},[d.adminView?{name:"header",fn:n(()=>[r("div",ee,[s(u,{icon:"pi pi-external-link",label:"Export",onClick:a[0]||(a[0]=e=>t.exportCSV(e))}),s(u,{type:"button",icon:"pi pi-filter-slash",label:"Clear",class:"p-button-outlined",onClick:a[1]||(a[1]=e=>t.clearFilters())}),r("span",te,[ie,s(h,{title:"Search all by keyword",modelValue:t.filters.global.value,"onUpdate:modelValue":a[2]||(a[2]=e=>t.filters.global.value=e),placeholder:"Keyword Search"},null,8,["modelValue"])])])])}:void 0]),1032,["value","paginator","filters","loading"]))])),r("div",null,[s(T,{visible:t.registrationDialog,"onUpdate:visible":a[4]||(a[4]=e=>t.registrationDialog=e),style:{width:"50rem",margin:"5rem"},header:"Registration Details",modal:!0,class:"p-fluid registration-dialog",onHide:a[5]||(a[5]=()=>t.loadLazyData())},{default:n(()=>[s(S,{registrationID:t.registration.guid,adminView:d.adminView,detailsView:d.detailsView},null,8,["registrationID","adminView","detailsView"])]),_:1},8,["visible"]),s(T,{visible:t.deleteRegistrationDialog,"onUpdate:visible":a[7]||(a[7]=e=>t.deleteRegistrationDialog=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:n(()=>[s(u,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:a[6]||(a[6]=e=>t.deleteRegistrationDialog=!1)}),s(u,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:t.deleteRegistration},null,8,["onClick"])]),default:n(()=>[r("div",ce,[me,t.registration?(l(),w("p",ge,[b(" Are you sure you want to delete "+m(t.registration.primarycontact)+"'s registration?",1),fe,pe,be,ye])):_("",!0)])]),_:1},8,["visible"])])])}var Ce=H(M,[["render",ve]]);export{Ce as R};
