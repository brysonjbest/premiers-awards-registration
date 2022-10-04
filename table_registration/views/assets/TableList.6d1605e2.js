import{f as C}from"./settings.services.99fd8e41.js";import{u as j,r as O}from"./index.esm.720d4be9.js";import{_ as q,u as H,r as y,s as G,b as c,o as p,c as h,i as S,w as l,e as b,t as m,k as s,d as o,n as E,l as B,a as K,g as Q,j as Y,h as J,O as W,Q as X}from"./index.fe8c604b.js";import{a as L}from"./guests.4e26c9dc.js";const Z={props:{tableID:String,adminView:Boolean,detailsView:Boolean},setup(v){const n=H(),u=L(),t=y(C.get("tabletypes")||[]),{table:D}=G(L()),k=j({tabletype:{required:O},tablecapacity:{required:O}},D);let _=y(!1),r=y(!1);const f=y({severity:null,text:""}),T=async function(V){if(V.preventDefault(),!!await this.v$.$validate())try{_.value=!0,u.registerTableHandler(this.table).then(()=>{this.$forceUpdate,_.value=!1,r.value=!0,f.value={severity:"success",text:"Table Updated!"}}).then(()=>{u.addTable})}catch(x){_.value=!1,console.warn(x),r.value=!0,f.value={severity:"error",text:"Table could not be updated."}}finally{setTimeout(()=>r.value=!1,1500)}};return async function(){const V=n.getUser;return u.$reset,v.tableID?await u.fillOnlyTable(v.tableID):v.adminView?await u.fillTables():await u.fillTable(V.guid)?u.fillTable(V.guid):[]}(),{loading:_,message:r,messageText:f,table:D,v$:k,tabletypes:t,onSubmit:T}}},M={class:"text-field"},$=s("label",{for:"tablename"},"Name of Table:",-1),ee={class:"dropdown"},te=s("label",{for:"tabletype"},"Type of Table:",-1),ae={key:0,class:"p-error",id:"tabletype-help"},le={class:"number-field"},oe=s("label",{for:"tablecapacity"},"Table Capacity:",-1),ne={key:0,class:"p-error",id:"tablecapacity-help"},ie=b("Submit");function se(v,n,u,t,D,U){const k=c("ProgressSpinner"),_=c("PrimeMessage"),r=c("InputText"),f=c("DropDown"),T=c("PrimeButton");return p(),h("div",null,[t.loading?(p(),S(k,{key:0})):t.message?(p(),S(_,{key:1,severity:t.messageText.severity,closable:!1},{default:l(()=>[b(m(t.messageText.text),1)]),_:1},8,["severity"])):(p(),h("form",{key:2,onSubmit:n[3]||(n[3]=(...d)=>t.onSubmit&&t.onSubmit(...d))},[s("div",M,[$,o(r,{id:"tablename",type:"tablename","aria-describedby":"tablename-help",modelValue:t.table.tablename,"onUpdate:modelValue":n[0]||(n[0]=d=>t.table.tablename=d),placeholder:"Enter Table Name (Leave Blank for Default Next Available Table)"},null,8,["modelValue"])]),s("div",ee,[te,o(f,{class:E({"p-invalid":t.v$.tabletype.$error}),id:"tabletype",modelValue:t.table.tabletype,"onUpdate:modelValue":n[1]||(n[1]=d=>t.table.tabletype=d),options:t.tabletypes,optionLabel:"text",optionValue:"value",placeholder:"Select the type of table."},null,8,["class","modelValue","options"]),t.v$.tabletype.$error?(p(),h("small",ae,"Please select the type of table.")):B("",!0)]),s("div",le,[oe,o(r,{class:E({"p-invalid":t.v$.tablecapacity.$error}),id:"tablecapacity",type:"tablecapacity","aria-describedby":"tablecapacity-help",modelValue:t.table.tablecapacity,"onUpdate:modelValue":n[2]||(n[2]=d=>t.table.tablecapacity=d),min:1,max:99,"aria-placeholder":"1-2 digit number",placeholder:"Required Table Capacity",useGrouping:!1},null,8,["class","modelValue"]),t.v$.tablecapacity.$error?(p(),h("small",ne,"Please enter the required table capacity.")):B("",!0)]),o(T,{type:"submit",label:"primary",class:"p-button-raised"},{default:l(()=>[ie]),_:1})],32))])}var re=q(Z,[["render",se]]);const de={props:{data:Array,detailsView:Boolean,tableID:String},setup(v){const n=K(),u=L(),{tables:t}=G(L()),D=y(C.get("tableSelection")||[]),U=y((C.get("organizations")||[]).map(i=>i.value)),k=y(0),_=y();let r=y(!1);const f=y({severity:null,text:""}),T=y(C.get("tableFilters")||{}),d=()=>{V()},V=()=>{T.value=C.get("tableFilters")||{}},g=y(!1),x=async function(){n.$reset,g.value=!0;try{return v.tableID?await u.fillTable(v.tableID):await u.fillTables()}catch(i){g.value=!1,console.warn(i),r.value=!0,f.value={severity:"error",text:"Could not fetch tables."}}finally{g.value=!1,setTimeout(()=>r.value=!1,1500)}},P=()=>{x().then(()=>{t.value.forEach(i=>{i.createdAt=new Date(i.createdAt),i.updatedAt=new Date(i.updatedAt),i.guestCount=Number(i.guests.length),i.tableStatus=i.guests.length<i.tablecapacity})})};Q(()=>{P()});const z=function(i,R){return C.lookup(i,R)},A=()=>{_.value.exportCSV()},I=i=>new Date(i).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"}),e=i=>new Date(i).toLocaleTimeString("en-US",{hour12:!0,hour:"2-digit",minute:"2-digit"}),a=y({}),N=y(!1),F=y(!1);return{columns:D,organizations:U,table:a,tableDialog:N,deleteTableDialog:F,dataTableRender:k,filters:T,loading:g,message:r,messageText:f,dt:_,clearFilters:d,exportCSV:A,formatDate:I,formatTime:e,lookup:z,editTable:i=>{a.value={...i},N.value=!0},confirmDeleteTable:i=>{a.value=i,F.value=!0},deleteTable:async function(){g.value=!0;try{u.deleteTable(a.value._id).then(x()).then(()=>{g.value=!1,r.value=!0,f.value={severity:"success",text:"Successfully deleted table and reset all connected guests."}})}catch(i){g.value=!1,console.warn(i),r.value=!0,f.value={severity:"error",text:"Could not delete table."}}finally{F.value=!1,await new Promise(i=>setTimeout(i,1500)).then(()=>{r.value=!1,v.detailsView?J.push("/admin/tables"):x()})}},hideDialog:()=>{N.value=!1},loadLazyData:P,tables:t}},components:{InputTable:re}},w=v=>(W("data-v-dc8e49c2"),v=v(),X(),v),ue={key:2},ce={style:{"text-align":"left"}},be={class:"p-input-icon-left"},me=w(()=>s("i",{class:"pi pi-search"},null,-1)),pe=b(" No tables found. "),ye=b(" Loading table data. Please wait. "),fe={key:1},ve={key:0},_e={key:1},ge={class:"item"},he=w(()=>s("br",null,null,-1)),Te=w(()=>s("br",null,null,-1)),Ve=w(()=>s("br",null,null,-1)),we={class:"confirmation-content"},ke=w(()=>s("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1)),xe={key:0},Se=b("Are you sure you want to delete table # "),De=b("?"),Ce=w(()=>s("br",null,null,-1)),Pe=b(" This will reset all associated guests."),Ue=w(()=>s("br",null,null,-1)),Ie=w(()=>s("b",null,"This action cannot be undone.",-1));function Be(v,n,u,t,D,U){const k=c("ProgressSpinner"),_=c("PrimeMessage"),r=c("PrimeButton"),f=c("InputText"),T=c("router-link"),d=c("PrimeColumn"),V=c("DropDown"),g=c("InputNumber"),x=c("TriStateCheckbox"),P=c("PrimeCalendar"),z=c("DataTable"),A=c("InputTable"),I=c("PrimeDialog");return p(),h("div",null,[t.loading?(p(),S(k,{key:0})):t.message?(p(),S(_,{key:1,severity:t.messageText.severity,closable:!1},{default:l(()=>[b(m(t.messageText.text),1)]),_:1},8,["severity"])):(p(),h("div",ue,[(p(),S(z,{class:"p-datatable-sm table-data-view",value:t.tables,responsiveLayout:"stack",key:t.dataTableRender,paginator:!u.detailsView,rows:10,ref:"dt",stripedRows:"",filters:t.filters,"onUpdate:filters":n[3]||(n[3]=e=>t.filters=e),filterDisplay:"menu",globalFilterFields:["tablename","tabletype","tablecapacity","tableguestcount","tablefull","organizations"],loading:t.loading,showGridlines:"",paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",rowsPerPageOptions:[10,20,50],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords}"},Y({empty:l(()=>[pe]),loading:l(()=>[ye]),default:l(()=>[o(d,{field:"tablename",header:"Table Name",key:"tablename",class:"tablename"},{body:l(({data:e})=>[u.detailsView?(p(),h("span",fe,m(e.tablename),1)):(p(),S(T,{key:0,to:`/admin/table/${e.guid}`},{default:l(()=>[b(m(e.tablename),1)]),_:2},1032,["to"]))]),filter:l(({filterModel:e})=>[o(f,{type:"text",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,class:"p-column-filter",placeholder:"Search by Table Name"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(d,{field:"tabletype",header:"Type of Table",key:"tabletype",class:"tabletype"},{body:l(({data:e})=>[b(m(e.tabletype),1)]),filter:l(({filterModel:e})=>[o(V,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,options:["Standard","Reserved"],optionLabel:"text",placeholder:"Any",class:"p-column-filter",showClear:!0},{value:l(a=>[a.value?(p(),h("div",ve,[s("div",null,m(a.value),1)])):(p(),h("span",_e,m(a.placeholder),1))]),option:l(a=>[s("div",ge,[s("div",null,m(a.option),1)])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),o(d,{field:"tablecapacity",header:"Table Capacity",key:"tablecapacity",class:"tablecapacity"},{body:l(({data:e})=>[b(m(e.tablecapacity),1)]),filter:l(({filterModel:e})=>[o(g,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,showButtons:"",buttonLayout:"horizontal",step:1,decrementButtonClass:"p-button-danger",incrementButtonClass:"p-button-success",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),u.detailsView?B("",!0):(p(),S(d,{field:"guestCount",header:"Number of Guests",key:"guestCount",class:"guestCount"},{body:l(({data:e})=>[b(m(e.guestCount||0),1)]),filter:l(({filterModel:e})=>[o(g,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,showButtons:"",buttonLayout:"horizontal",step:1,decrementButtonClass:"p-button-danger",incrementButtonClass:"p-button-success",incrementButtonIcon:"pi pi-plus",decrementButtonIcon:"pi pi-minus"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})),o(d,{field:"tableStatus",header:"Table Status",key:"guests",class:"tableStatus",datatype:"boolean"},{body:l(({data:e})=>[s("span",null,[s("i",{class:E(["pi",{"true-icon pi-plus-circle":e.tableStatus,"false-icon pi-ban":!e.tableStatus}]),style:{"font-size":"2rem"}},null,2),he,b(m(e.tableStatus?" Space Available":" Full"),1)])]),filter:l(({filterModel:e})=>[o(x,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(d,{field:"organizations",header:"Organizations",key:"organizations",class:"organizations"},{body:l(({data:e})=>[b(m([...new Set(e.organizations.map(a=>a=t.lookup("organizations",a.organization)))].join(`\r
`)),1)]),filter:l(({filterModel:e})=>[o(f,{type:"text",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,class:"p-column-filter",placeholder:"Search by Organization"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(d,{field:"createdAt",header:"Created:",key:"createdAt",sortable:!0,dataType:"date"},{body:l(({data:e})=>[b(m(t.formatDate(e.createdAt))+",",1),Te,b(m(t.formatTime(e.createdAt)),1)]),filter:l(({filterModel:e})=>[o(P,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(d,{field:"updatedAt",header:"Updated:",key:"updatedAt",sortable:!0,dataType:"date"},{body:l(({data:e})=>[b(m(t.formatDate(e.updatedAt))+",",1),Ve,b(" "+m(t.formatTime(e.updatedAt)),1)]),filter:l(({filterModel:e})=>[o(P,{modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),o(d,{exportable:!1,style:{"min-width":"8rem"}},{body:l(e=>[o(r,{label:"Edit",icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2 edit-button",onClick:a=>t.editTable(e.data)},null,8,["onClick"]),o(r,{icon:"pi pi-trash",label:"Delete",class:"p-button-rounded p-button-warning delete-button",onClick:a=>t.confirmDeleteTable(e.data)},null,8,["onClick"])]),_:1})]),_:2},[u.detailsView?void 0:{name:"header",fn:l(()=>[s("div",ce,[o(r,{icon:"pi pi-external-link",label:"Export",onClick:n[0]||(n[0]=e=>t.exportCSV(e))}),o(r,{type:"button",icon:"pi pi-filter-slash",label:"Clear",class:"p-button-outlined",onClick:n[1]||(n[1]=e=>t.clearFilters())}),s("span",be,[me,o(f,{modelValue:t.filters.global.value,"onUpdate:modelValue":n[2]||(n[2]=e=>t.filters.global.value=e),placeholder:"Keyword Search"},null,8,["modelValue"])])])])}]),1032,["value","paginator","filters","loading"]))])),s("div",null,[o(I,{visible:t.tableDialog,"onUpdate:visible":n[4]||(n[4]=e=>t.tableDialog=e),style:{width:"450px"},header:"Table Details",modal:!0,class:"p-fluid",onHide:n[5]||(n[5]=()=>t.loadLazyData())},{default:l(()=>[o(A,{tableID:t.table.guid,detailsView:u.detailsView},null,8,["tableID","detailsView"])]),_:1},8,["visible"]),o(I,{visible:t.deleteTableDialog,"onUpdate:visible":n[7]||(n[7]=e=>t.deleteTableDialog=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:l(()=>[o(r,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:n[6]||(n[6]=e=>t.deleteTableDialog=!1)}),o(r,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:t.deleteTable},null,8,["onClick"])]),default:l(()=>[s("div",we,[ke,t.table?(p(),h("span",xe,[Se,s("b",null,m(t.table.tablename),1),De,Ce,Pe,Ue,Ie])):B("",!0)])]),_:1},8,["visible"])])])}var qe=q(de,[["render",Be],["__scopeId","data-v-dc8e49c2"]]);export{re as I,qe as T};
