import{J as $,K as w,a as O,_ as ee,r as b,u as te,f as ae,s as le,b as S,o as g,c as v,g as s,d as l,w as o,j as _,h as F,e as p,t as m,L as B,F as E,k as K,l as A,M as d,N as c,H as oe,I as ne}from"./index.4facfd7c.js";const Q=$({id:"guestsStore",state:()=>({guest:{registration:"",firstname:"",lastname:"",attendancetype:"",organization:"",accessibility:[],dietary:[]},guests:[]}),getters:{getGuestsCount(){return this.guests.length}},actions:{async fillGuestsRegistration(i){const a=await(await w.getGuestsByRegistration(i)).data[0];this.guests=a.guests||[]},async fillGuests(){this.guests=await(await w.getAllGuests()).data},async addRegistrationData(){console.log("registrationdata add");const i=O();this.guest.registration=await i.getId},async addGuestList(){const{registration:i="",guid:a="",firstname:k="",lastname:t="",attendancetype:x="",organization:G="",accessibility:y=[],dietary:u=[]}=this.guest||{};await this.guests.push({registration:i,guid:a,firstname:k,lastname:t,attendancetype:x,organization:G,accessibility:y,dietary:u})},async updateGuest(i,a){await w.updateGuest(i,a)},async deleteGuest(i){const a=O();await w.deleteGuest(i).then(()=>{a.registerFinancialInformation({$pull:{guests:i}})})},async registerGuest(i){const a=O(),k=await w.createGuest(i),t=k.data._id;return await a.registerFinancialInformation({$push:{guests:t}}),this.guest.guid=k.data.guid,this.guest},async registerAllGuests(){for(let i of this.guests)this.registerGuest(i)}}});const se={props:{adminView:Boolean,registrationID:String},setup(i){const a=Q(),k=b(A.get("guestSelection")||[]),t=b(A.get("organizations")||[]),x=b(A.get("attendancetypes")||[]),G=b(A.get("accessibilityoptions")||[]),y=b(A.get("dietaryoptions")||[]),u=te(),C=b(),{adminView:f,registrationID:U}=i,R=function(){return String(a.getGuestsCount)},D=b({global:{value:null,matchMode:d.CONTAINS},organization:{operator:c.OR,constraints:[{value:null,matchMode:d.EQUALS}]},firstname:{operator:c.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},lastname:{operator:c.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},attendancetype:{operator:c.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},accessibility:{operator:c.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},dietary:{operator:c.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},createdAt:{operator:c.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},updatedAt:{operator:c.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]}}),N=()=>{e()},e=()=>{D.value={global:{value:null,matchMode:d.CONTAINS},organization:{operator:c.OR,constraints:[{value:null,matchMode:d.EQUALS}]},firstname:{operator:c.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},lastname:{operator:c.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},attendancetype:{operator:c.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},accessibility:{operator:c.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},dietary:{operator:c.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},createdAt:{operator:c.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},updatedAt:{operator:c.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]}}},n=b(!0),j=()=>{C.value.exportCSV()},H=function(){const r=u.getUser;return a.$reset,n.value=!1,f?a.fillGuests():U?a.fillGuestsRegistration(U):a.fillGuestsRegistration(r.guid)?a.fillGuestsRegistration(r.guid):[]},L=()=>{H()};ae(()=>{L()});const M=function(r,T){return A.lookup(r,T)},J=r=>new Date(r).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"}),Y=r=>new Date(r).toLocaleTimeString("en-US",{hour12:!0,hour:"2-digit",minute:"2-digit"}),X=function(r,T){let z="";for(let q of T)z.length>0?z+=`, ${M(r,q)}`:z=M(r,q);return z},{guests:Z}=le(Q()),V=b({}),W=b(!1),I=b(!1),P=b(!1);return{guestCount:R,columns:k,dt:C,filters:D,loading:n,exportCSV:j,clearFilters:N,organizations:t,attendancetypes:x,accessibility:G,dietary:y,guests:Z,guest:V,adminView:f,submitted:W,guestDialog:I,deleteGuestDialog:P,formatDate:J,formatTime:Y,lookup:M,lookupLoop:X,editGuest:r=>{V.value={...r},I.value=!0},confirmDeleteGuest:r=>{V.value=r,P.value=!0},deleteGuest:async function(){a.deleteGuest(V.value._id).then(()=>{}).then(H()).catch(r=>{console.log(r)}).finally(()=>{P.value=!1,V.value={},L()})},hideDialog:()=>{I.value=!1,W.value=!1},saveGuest:async function(r){r.preventDefault(),W.value=!0,a.updateGuest(V.value._id,V.value).then(()=>{I.value=!1,V.value={}}).then(H()).catch(T=>{console.log(T)}).finally(()=>{L()})},loadLazyData:L}}},h=i=>(oe("data-v-0bc61839"),i=i(),ne(),i),ie={style:{"text-align":"left"}},re={key:0,class:"p-input-icon-left"},de=h(()=>s("i",{class:"pi pi-search"},null,-1)),ue=p(" No guests found. "),ce=p(" Loading guest data. Please wait. "),me=h(()=>s("br",null,null,-1)),pe=h(()=>s("br",null,null,-1)),ge={class:"field-text"},ye=h(()=>s("label",{for:"firstname"},"First Name",-1)),fe={key:0,class:"p-error"},be={class:"field-text"},ve=h(()=>s("label",{for:"lastname"},"Last Name",-1)),he={key:0,class:"p-error"},_e={class:"dropdown"},Ve=h(()=>s("label",{for:"organization"},"Organization:",-1)),Se={key:0,class:"p-error"},ke={class:"dropdown"},Te=h(()=>s("label",{for:"attendancetype"},"Attendance Type:",-1)),Ae={class:"checkbox-group"},De=h(()=>s("label",{for:"accessibility"},"Accessibility Requirements:",-1)),we=["for"],xe={class:"checkbox-group"},Ge=h(()=>s("label",{for:"dietary"},"Dietary Requirements:",-1)),Ce=["for"],Ue={class:"confirmation-content"},Re=h(()=>s("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1)),Ne={key:0},Le=p("Are you sure you want to delete "),Ie=p("?");function ze(i,a,k,t,x,G){const y=S("Button"),u=S("InputText"),C=S("router-link"),f=S("Column"),U=S("DataTable"),R=S("Dropdown"),D=S("Checkbox"),N=S("Dialog");return g(),v("div",null,[s("div",null,[l(U,{class:"p-datatable-sm",value:t.guests,responsiveLayout:"stack",paginator:t.adminView,rows:10,ref:"dt",stripedRows:"",filters:t.filters,"onUpdate:filters":a[3]||(a[3]=e=>t.filters=e),filterDisplay:"menu",globalFilterFields:["firstname","lastname","attendancetype","accessibility","dietary","registration"],loading:t.loading,showGridlines:"",paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",rowsPerPageOptions:[10,20,50],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords}"},{header:o(()=>[s("div",ie,[l(y,{icon:"pi pi-external-link",label:"Export",onClick:a[0]||(a[0]=e=>t.exportCSV(e))}),l(y,{type:"button",icon:"pi pi-filter-slash",label:"Clear",class:"p-button-outlined",onClick:a[1]||(a[1]=e=>t.clearFilters())}),t.adminView?(g(),v("span",re,[de,l(u,{modelValue:t.filters.global.value,"onUpdate:modelValue":a[2]||(a[2]=e=>t.filters.global.value=e),placeholder:"Keyword Search"},null,8,["modelValue"])])):_("",!0),t.adminView?_("",!0):(g(),F(y,{key:1,type:"button",label:"Total Guests",icon:"pi pi-users",class:"p-button-warning",badge:t.guestCount(),badgeClass:"p-badge-danger"},null,8,["badge"]))])]),empty:o(()=>[ue]),loading:o(()=>[ce]),default:o(()=>[t.adminView?(g(),F(f,{field:"registration",header:"Registration",key:"registration",class:"guid"},{body:o(({data:e})=>[l(C,{to:`/admin/edit/${e.registration}`,class:"registration-link"},{default:o(()=>[p(m(e.registration),1)]),_:2},1032,["to"])]),filter:o(({filterModel:e})=>[l(u,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by registration"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})):_("",!0),l(f,{field:"organization",header:"Organization",key:"organization"},{body:o(({data:e})=>[p(m(t.lookup("organizations",e.organization)),1)]),filter:o(({filterModel:e})=>[l(u,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by organization"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(f,{field:"firstname",header:"First Name",key:"firstname"},{body:o(({data:e})=>[p(m(e.firstname),1)]),filter:o(({filterModel:e})=>[l(u,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by First Name"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(f,{field:"lastname",header:"Last Name",key:"lastname"},{body:o(({data:e})=>[p(m(e.lastname),1)]),filter:o(({filterModel:e})=>[l(u,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by Last Name"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(f,{field:"attendancetype",header:"Attendance Type",key:"attendancetype"},{body:o(({data:e})=>[p(m(t.lookup("attendancetypes",e.attendancetype)),1)]),filter:o(({filterModel:e})=>[l(u,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by Attendance Type"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(f,{field:"accessibility",header:"Accessibility Requirements",key:"accessibility"},{body:o(({data:e})=>[p(m(t.lookupLoop("accessibilityoptions",e.accessibility)),1)]),filter:o(({filterModel:e})=>[l(u,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by Accessibility Options"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),l(f,{field:"dietary",header:"Dietary Requirements",key:"dietary"},{body:o(({data:e})=>[p(m(t.lookupLoop("dietaryoptions",e.dietary)),1)]),filter:o(({filterModel:e})=>[l(u,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by Dietary Requirements"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t.adminView?(g(),F(f,{field:"createdAt",header:"Created:",key:"createdAt",sortable:!0},{body:o(({data:e})=>[p(m(t.formatDate(e.createdAt))+",",1),me,p(m(t.formatTime(e.createdAt)),1)]),filter:o(({filterModel:e})=>[l(u,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by Date Created"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})):_("",!0),t.adminView?(g(),F(f,{field:"updatedAt",header:"Updated:",key:"updatedAt",sortable:!0},{body:o(({data:e})=>[p(m(t.formatDate(e.updatedAt))+",",1),pe,p(" "+m(t.formatTime(e.updatedAt)),1)]),filter:o(({filterModel:e})=>[l(u,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by Date Updated"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})):_("",!0),l(f,{exportable:!1,style:{"min-width":"8rem"}},{body:o(e=>[l(y,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:n=>t.editGuest(e.data)},null,8,["onClick"]),l(y,{icon:"pi pi-trash",class:"p-button-rounded p-button-warning",onClick:n=>t.confirmDeleteGuest(e.data)},null,8,["onClick"])]),_:1})]),_:1},8,["value","paginator","filters","loading"])]),s("div",null,[l(N,{visible:t.guestDialog,"onUpdate:visible":a[10]||(a[10]=e=>t.guestDialog=e),style:{width:"450px"},header:"Guest Details",modal:!0,class:"p-fluid"},{footer:o(()=>[l(y,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:t.hideDialog},null,8,["onClick"]),l(y,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:t.saveGuest},null,8,["onClick"])]),default:o(()=>[s("div",ge,[ye,l(u,{id:"firstname",modelValue:t.guest.firstname,"onUpdate:modelValue":a[4]||(a[4]=e=>t.guest.firstname=e),modelModifiers:{trim:!0},required:"true",autofocus:"",class:B({"p-invalid":t.submitted&&!t.guest.firstname})},null,8,["modelValue","class"]),t.submitted&&!t.guest.firstname?(g(),v("small",fe,"First Name is required.")):_("",!0)]),s("div",be,[ve,l(u,{id:"lastname",modelValue:t.guest.lastname,"onUpdate:modelValue":a[5]||(a[5]=e=>t.guest.lastname=e),modelModifiers:{trim:!0},required:"true",autofocus:"",class:B({"p-invalid":t.submitted&&!t.guest.lastname})},null,8,["modelValue","class"]),t.submitted&&!t.guest.lastname?(g(),v("small",he,"Last Name is required.")):_("",!0)]),s("div",_e,[Ve,l(R,{id:"organization",modelValue:t.guest.organization,"onUpdate:modelValue":a[6]||(a[6]=e=>t.guest.organization=e),options:t.organizations,optionLabel:"text",optionValue:"value",placeholder:"Select a Organization"},null,8,["modelValue","options"]),t.submitted&&!t.guest.organization?(g(),v("small",Se,"Organization is required.")):_("",!0)]),s("div",ke,[Te,l(R,{id:"attendancetype",modelValue:t.guest.attendancetype,"onUpdate:modelValue":a[7]||(a[7]=e=>t.guest.attendancetype=e),options:t.attendancetypes,optionLabel:"text",optionValue:"value",placeholder:"Select the type of attendance for this guest"},null,8,["modelValue","options"])]),s("div",Ae,[De,(g(!0),v(E,null,K(t.accessibility,e=>(g(),v("div",{key:e.key,class:"field-checkbox"},[l(D,{id:e.key,name:"each",value:e.value,modelValue:t.guest.accessibility,"onUpdate:modelValue":a[8]||(a[8]=n=>t.guest.accessibility=n)},null,8,["id","value","modelValue"]),s("label",{for:e.key},m(e.text),9,we)]))),128))]),s("div",xe,[Ge,(g(!0),v(E,null,K(t.dietary,e=>(g(),v("div",{key:e.key,class:"field-checkbox"},[l(D,{id:e.key,name:"each",value:e.value,modelValue:t.guest.dietary,"onUpdate:modelValue":a[9]||(a[9]=n=>t.guest.dietary=n)},null,8,["id","value","modelValue"]),s("label",{for:e.key},m(e.text),9,Ce)]))),128))])]),_:1},8,["visible"]),l(N,{visible:t.deleteGuestDialog,"onUpdate:visible":a[12]||(a[12]=e=>t.deleteGuestDialog=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:o(()=>[l(y,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:a[11]||(a[11]=e=>t.deleteGuestDialog=!1)}),l(y,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:t.deleteGuest},null,8,["onClick"])]),default:o(()=>[s("div",Ue,[Re,t.guest?(g(),v("span",Ne,[Le,s("b",null,m(t.guest.firstname)+" "+m(t.guest.lastname),1),Ie])):_("",!0)])]),_:1},8,["visible"])])])}var qe=ee(se,[["render",ze],["__scopeId","data-v-0bc61839"]]);export{qe as G,Q as u};