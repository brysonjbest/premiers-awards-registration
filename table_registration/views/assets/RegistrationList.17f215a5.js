import{_ as H,a as j,s as K,r as f,f as C,u as Y,g as q,b as m,o as r,c as w,h as p,w as a,e as b,t as d,i as J,j as l,d as s,k as v,F as Q,l as W,n as X,m as G}from"./index.e4b240a4.js";import{I as Z}from"./InputFinancial.7e93237c.js";const M={props:{adminView:Boolean,detailsView:Boolean,registrationID:String},setup(V){const n=j(),{registrations:u}=K(j()),t=f(C.get("registrationSelection")||[]),B=f((C.get("organizations")||[]).map(i=>i.value)),N=f(0),P=Y(),x=f();let c=f(!1);const h=f({severity:null,text:""}),R=f(C.get("registrationFilters")||{}),y=()=>{U()},U=()=>{R.value=C.get("registrationFilters")||{}},_=f(!1),k=async function(){const i=P.getUser;n.$reset,_.value=!0;try{return V.adminView?await n.fillAllRegistrations():V.registrationID?await n.fill(V.registrationID):await n.fill(i.guid)?n.fill(i.guid):[]}catch(g){_.value=!1,console.warn(g),c.value=!0,h.value={severity:"error",text:"Could not fetch registrations."}}finally{_.value=!1,setTimeout(()=>c.value=!1,1500)}},D=()=>{k().then(()=>{u.value.forEach(i=>{i.createdAt=new Date(i.createdAt),i.updatedAt=new Date(i.updatedAt),i.guestCount=Number(i.guests.length)})})};q(()=>{D()});const z=function(){return n.getRegistration.submitted},L=function(i,g){return C.lookup(i,g)},S=()=>{x.value.exportCSV()},e=i=>new Date(i).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"}),o=i=>new Date(i).toLocaleTimeString("en-US",{hour12:!0,hour:"2-digit",minute:"2-digit"}),F=function(i){return i.filter(g=>g.field!=="organization")},O=function(i){let g=0;return i%10<=5&&i%10!=0&&(g+=.5),i%10>5&&(g+=1),i/10>=1&&(g+=Math.floor(i/10)),g},T=f({}),E=f(!1),I=f(!1),A=f(!1);return{columns:t,organizations:B,registrations:u,registration:T,isSubmitted:z,submitted:E,registrationDialog:I,deleteRegistrationDialog:A,dataTableRender:N,filters:R,loading:_,message:c,messageText:h,dt:x,clearFilters:y,exportCSV:S,formatDate:e,formatTime:o,lookup:L,filter:F,editRegistration:i=>{T.value={...i},I.value=!0},confirmDeleteRegistration:i=>{T.value=i,A.value=!0},deleteRegistration:async function(){_.value=!0;try{n.deleteRegistration(T.value._id).then(k()).then(()=>{_.value=!1,c.value=!0,h.value={severity:"success",text:"Successfully deleted registration and all connected guests."}})}catch(i){_.value=!1,console.warn(i),c.value=!0,h.value={severity:"error",text:"Could not delete registration."}}finally{A.value=!1,await new Promise(i=>setTimeout(i,1500)).then(()=>{c.value=!1,V.registrationID?G.push("/admin"):V.adminView?k():G.push("/")})}},hideDialog:()=>{I.value=!1,E.value=!1},loadLazyData:D,tableCount:O}},components:{InputFinancial:Z}},$={key:2},ee={style:{"text-align":"left"}},te={class:"p-input-icon-left"},ie=l("i",{class:"pi pi-search"},null,-1),ne=b(" No registrations found. "),ae=b(" Loading registration data. Please wait. "),oe={key:0},le={key:1},re={class:"item"},se=l("br",null,null,-1),de=l("br",null,null,-1),ue=l("br",null,null,-1),ce={class:"confirmation-content"},me=l("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),ge={key:0},fe=b("Are you sure you want to delete registration # "),pe=l("br",null,null,-1),be=b(" This will delete all associated guests."),ye=l("br",null,null,-1),_e=l("b",null,"This action cannot be undone.",-1);function ve(V,n,u,t,B,N){const P=m("ProgressSpinner"),x=m("PrimeMessage"),c=m("PrimeButton"),h=m("InputText"),R=m("router-link"),y=m("PrimeColumn"),U=m("DropDown"),_=m("InputNumber"),k=m("TriStateCheckbox"),D=m("PrimeCalendar"),z=m("DataTable"),L=m("InputFinancial"),S=m("PrimeDialog");return r(),w("div",null,[t.loading?(r(),p(P,{key:0})):t.message?(r(),p(x,{key:1,severity:t.messageText.severity,closable:!1},{default:a(()=>[b(d(t.messageText.text),1)]),_:1},8,["severity"])):(r(),w("div",$,[(r(),p(z,{class:"p-datatable-sm",value:t.registrations,responsiveLayout:"stack",key:t.dataTableRender,paginator:u.adminView,rows:10,ref:"dt",stripedRows:"",filters:t.filters,"onUpdate:filters":n[3]||(n[3]=e=>t.filters=e),filterDisplay:"menu",globalFilterFields:["organization","branch","primarycontact","primaryemail","financialcontact","clientministry","resp","serviceline","project","guid"],loading:t.loading,showGridlines:"",paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",rowsPerPageOptions:[10,20,50],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords}"},J({empty:a(()=>[ne]),loading:a(()=>[ae]),default:a(()=>[u.adminView?(r(),p(y,{field:"guid",header:"ID#",key:"guid",class:"guid"},{body:a(({data:e})=>[s(R,{to:`/admin/edit/${e.guid}`},{default:a(()=>[b(d(e.registrar),1)]),_:2},1032,["to"])]),_:1})):v("",!0),s(y,{field:"organization",filterField:"organization",header:"Organization",key:"organization"},{body:a(({data:e})=>[b(d(t.lookup("organizations",e.organization)),1)]),filter:a(({filterModel:e})=>[s(U,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,options:t.organizations,optionLabel:"text",placeholder:"Any",class:"p-column-filter",showClear:!0},{value:a(o=>[o.value?(r(),w("div",oe,[l("div",null,d(t.lookup("organizations",o.value)),1)])):(r(),w("span",le,d(o.placeholder),1))]),option:a(o=>[l("div",re,[l("div",null,d(t.lookup("organizations",o.option)),1)])]),_:2},1032,["modelValue","onUpdate:modelValue","options"])]),_:1}),(r(!0),w(Q,null,W(t.filter(t.columns),e=>(r(),p(y,{field:e.field,header:e.text,key:e.field},{filter:a(({filterModel:o})=>[s(h,{type:"text",modelValue:o.value,"onUpdate:modelValue":F=>o.value=F,class:"p-column-filter",placeholder:`Search by ${e.field}`},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["field","header"]))),128)),u.adminView?(r(),p(y,{field:"guestCount",dataType:"numeric",header:"Guest Count:",key:"guestCount",sortable:!0},{body:a(({data:e})=>[l("span",null,d(e.guestCount),1)]),filter:a(({filterModel:e})=>[s(_,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,showButtons:"",buttonLayout:"horizontal",step:1,decrementButtonClass:"p-button-danger",incrementButtonClass:"p-button-success",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})):v("",!0),u.adminView?(r(),p(y,{field:"submitted",header:"Submitted?",key:"submitted",dataType:"boolean"},{body:a(({data:e})=>[l("i",{class:X(["pi pi-check-circle",{"true-icon pi-check-circle":e.submitted,"false-icon pi-times-circle":!e.submitted}]),style:{"font-size":"2rem"}},null,2),se,l("span",null,d(e.submitted?" Submitted":" Pending"),1)]),filter:a(({filterModel:e})=>[s(k,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o},null,8,["modelValue","onUpdate:modelValue"])]),_:1})):v("",!0),u.adminView?(r(),p(y,{field:"createdAt",header:"Created:",key:"createdAt",sortable:!0,dataType:"date"},{body:a(({data:e})=>[b(d(t.formatDate(e.createdAt))+",",1),de,b(d(t.formatTime(e.createdAt)),1)]),filter:a(({filterModel:e})=>[s(D,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})):v("",!0),u.adminView?(r(),p(y,{field:"updatedAt",header:"Updated:",key:"updatedAt",sortable:!0,dataType:"date"},{body:a(({data:e})=>[b(d(t.formatDate(e.updatedAt))+",",1),ue,b(" "+d(t.formatTime(e.updatedAt)),1)]),filter:a(({filterModel:e})=>[s(D,{modelValue:e.value,"onUpdate:modelValue":o=>e.value=o,dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})):v("",!0),!t.isSubmitted()||u.adminView?(r(),p(y,{key:5,exportable:!1,style:{"min-width":"8rem"}},{body:a(e=>[e.data.submitted?v("",!0):(r(),p(c,{key:0,label:"Edit",icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2 edit-button",onClick:o=>t.editRegistration(e.data)},null,8,["onClick"])),e.data.submitted?v("",!0):(r(),p(c,{key:1,icon:"pi pi-trash",label:"Delete",class:"p-button-rounded p-button-warning delete-button",onClick:o=>t.confirmDeleteRegistration(e.data)},null,8,["onClick"]))]),_:1})):v("",!0)]),_:2},[u.adminView?{name:"header",fn:a(()=>[l("div",ee,[s(c,{icon:"pi pi-external-link",label:"Export",onClick:n[0]||(n[0]=e=>t.exportCSV(e))}),s(c,{type:"button",icon:"pi pi-filter-slash",label:"Clear",class:"p-button-outlined",onClick:n[1]||(n[1]=e=>t.clearFilters())}),l("span",te,[ie,s(h,{modelValue:t.filters.global.value,"onUpdate:modelValue":n[2]||(n[2]=e=>t.filters.global.value=e),placeholder:"Keyword Search"},null,8,["modelValue"])])])])}:void 0]),1032,["value","paginator","filters","loading"]))])),l("div",null,[s(S,{visible:t.registrationDialog,"onUpdate:visible":n[4]||(n[4]=e=>t.registrationDialog=e),style:{width:"450px"},header:"Registration Details",modal:!0,class:"p-fluid",onHide:n[5]||(n[5]=()=>t.loadLazyData())},{default:a(()=>[s(L,{registrationID:t.registration.guid,adminView:u.adminView,detailsView:u.detailsView},null,8,["registrationID","adminView","detailsView"])]),_:1},8,["visible"]),s(S,{visible:t.deleteRegistrationDialog,"onUpdate:visible":n[7]||(n[7]=e=>t.deleteRegistrationDialog=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:a(()=>[s(c,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:n[6]||(n[6]=e=>t.deleteRegistrationDialog=!1)}),s(c,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:t.deleteRegistration},null,8,["onClick"])]),default:a(()=>[l("div",ce,[me,t.registration?(r(),w("span",ge,[fe,l("b",null,d(t.registration.guid),1),b(" for contact "+d(t.registration.primarycontact)+"?",1),pe,be,ye,_e])):v("",!0)])]),_:1},8,["visible"])])])}var xe=H(M,[["render",ve]]);export{xe as R};
