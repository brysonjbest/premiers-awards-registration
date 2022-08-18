import{_ as I,u as N,s as j,r as y,f as V,P as q,b as c,o as m,c as D,d as t,h,w as o,k as v,j as g,e as i,t as d}from"./index.da9d4aaa.js";const G={setup(){const p=N(),{users:a}=j(N()),L=p.isAdmin,l=p.isSuperAdmin,C=y(),T=y(V.get("roles")||[]),P=(V.get("roles")||[]).filter(r=>r.value!=="super-administrator"),w=r=>{const b=p.getUser;return r===b.guid};let s=y(!1);const _=async function(){try{s.value=!0,p.$reset,await p.getUsers(),s.value=!1}catch(r){s.value=!1,console.warn(r)}},A=function(r,b){return V.lookup(r,b)},f=r=>new Date(r).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"}),u=r=>new Date(r).toLocaleTimeString("en-US",{hour12:!0,hour:"2-digit",minute:"2-digit"}),k=y(V.get("userFilters")||{}),R=()=>{x()},x=()=>{k.value=V.get("userFilters")||{}},S=()=>{C.value.exportCSV()},e=y({}),n=y(!1),U=y(!1),F=y(!1),E=r=>{e.value={...r},U.value=!0},B=()=>{U.value=!1,n.value=!1},z=async function(r){r.preventDefault(),n.value=!0,p.updateUser(e.value.guid,e.value).then(()=>{U.value=!1,e.value={}}).then(_()).catch(b=>{console.log(b)}).finally(()=>{_()})},H=async function(){p.removeUser(e.value.guid).then(()=>{U.value=!1,e.value={}}).then(_()).catch(r=>{console.log(r)}).finally(()=>{_()})};return _(),{users:a,dt:C,userStore:p,loading:s,isAdmin:L,isSuperAdmin:l,selfAssignment:w,lookup:A,formatDate:f,formatTime:u,filters:k,clearFilters:R,exportCSV:S,userDialog:U,editUser:E,saveUser:z,deleteUser:H,user:e,roles:T,adminRoles:P,submitted:n,hideDialog:B,deleteUserDialog:F}},components:{PageHeader:q}},K={key:0},O={style:{"text-align":"left"}},Y={class:"p-input-icon-left"},J=g("i",{class:"pi pi-search"},null,-1),Q=i(" No users found. "),W=i(" Loading guest data. Please wait. "),X=g("br",null,null,-1),Z=g("br",null,null,-1),M=i("Edit"),$={class:"dropdown"},ee=g("label",{for:"organization"},"Role:",-1),le={key:2,class:"p-error"},te={class:"confirmation-content"},oe=g("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}},null,-1),ae={key:0},ne=i("Are you sure you want to delete user ");function re(p,a,L,l,C,T){const P=c("PageHeader"),w=c("ProgressSpinner"),s=c("PrimeColumn"),_=c("PrimeRow"),A=c("PrimeCard"),f=c("PrimeButton"),u=c("InputText"),k=c("router-link"),R=c("DataTable"),x=c("DropDown"),S=c("PrimeDialog");return m(),D("main",null,[l.isAdmin?(m(),D("div",K,[t(P,{title:"Manage Users",subtitle:"Manage User Access and Accounts"}),l.loading?(m(),h(A,{key:0},{default:o(()=>[t(_,{class:"vh-50 text-center","align-v":"center"},{default:o(()=>[t(s,{id:"spinner"},{default:o(()=>[t(w,{label:"Loading..."})]),_:1})]),_:1})]),_:1})):v("",!0),t(R,{class:"p-datatable-sm",value:l.users,responsiveLayout:"stack",rows:10,ref:"dt",stripedRows:"",filters:l.filters,"onUpdate:filters":a[3]||(a[3]=e=>l.filters=e),filterDisplay:"menu",globalFilterFields:["guid","username","firstname","lastname","email","role"],loading:l.loading,showGridlines:"",paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",rowsPerPageOptions:[10,20,50],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords}"},{header:o(()=>[g("div",O,[t(f,{icon:"pi pi-external-link",label:"Export",onClick:a[0]||(a[0]=e=>l.exportCSV(e))}),t(f,{type:"button",icon:"pi pi-filter-slash",label:"Clear",class:"p-button-outlined",onClick:a[1]||(a[1]=e=>l.clearFilters())}),g("span",Y,[J,t(u,{title:"Search all by keyword",modelValue:l.filters.global.value,"onUpdate:modelValue":a[2]||(a[2]=e=>l.filters.global.value=e),placeholder:"Keyword Search"},null,8,["modelValue"])])])]),empty:o(()=>[Q]),loading:o(()=>[W]),default:o(()=>[l.userStore.getUser.role==="super-administrator"?(m(),h(s,{field:"guid",header:"guid",key:"guid",class:"guid"},{body:o(({data:e})=>[i(d(e.guid),1)]),filter:o(({filterModel:e})=>[t(u,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by ID#"},null,8,["modelValue","onUpdate:modelValue"])]),_:1})):v("",!0),t(s,{field:"username",header:"Username",key:"username"},{body:o(({data:e})=>[i(d(e.username),1)]),filter:o(({filterModel:e})=>[t(u,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by Username"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(s,{field:"firstname",header:"First Name",key:"firstname"},{body:o(({data:e})=>[i(d(e.firstname),1)]),filter:o(({filterModel:e})=>[t(u,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by First Name"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(s,{field:"lastname",header:"Last Name",key:"lastname"},{body:o(({data:e})=>[i(d(e.lastname),1)]),filter:o(({filterModel:e})=>[t(u,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by Last Name"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(s,{field:"email",header:"Email",key:"email"},{body:o(({data:e})=>[i(d(e.email),1)]),filter:o(({filterModel:e})=>[t(u,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by Email"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(s,{field:"role",header:"Role",key:"role"},{body:o(({data:e})=>[i(d(l.lookup("roles",e.role)),1)]),filter:o(({filterModel:e})=>[t(u,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by role"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(s,{field:"createdAt",header:"Created:",key:"createdAt",sortable:!0},{body:o(({data:e})=>[i(d(l.formatDate(e.createdAt))+",",1),X,i(d(l.formatTime(e.createdAt)),1)]),filter:o(({filterModel:e})=>[t(u,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by Date Created"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(s,{field:"updatedAt",header:"Updated:",key:"updatedAt",sortable:!0},{body:o(({data:e})=>[i(d(l.formatDate(e.updatedAt))+",",1),Z,i(" "+d(l.formatTime(e.updatedAt)),1)]),filter:o(({filterModel:e})=>[t(u,{type:"text",modelValue:e.value,"onUpdate:modelValue":n=>e.value=n,class:"p-column-filter",placeholder:"Search by Date Updated"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(s,{exportable:!1,style:{"min-width":"8rem"},header:"Edit User:"},{body:o(e=>[e.data.role!=="super-administrator"&&e.data.role!==l.userStore.getUser.role?(m(),h(f,{key:0,icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:n=>l.editUser(e.data)},{default:o(()=>[M]),_:2},1032,["onClick"])):v("",!0),t(k,{to:"/user/update"},{default:o(()=>[l.selfAssignment(e.data.guid)?(m(),h(f,{key:0,icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2"})):v("",!0)]),_:2},1024)]),_:1})]),_:1},8,["value","filters","loading"]),t(S,{visible:l.userDialog,"onUpdate:visible":a[6]||(a[6]=e=>l.userDialog=e),style:{width:"450px"},header:"Edit User Role",modal:!0,class:"p-fluid"},{footer:o(()=>[t(f,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:l.hideDialog},null,8,["onClick"]),l.selfAssignment(l.user.guid)?v("",!0):(m(),h(f,{key:0,label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:l.saveUser},null,8,["onClick"]))]),default:o(()=>[g("div",$,[ee,l.isSuperAdmin?(m(),h(x,{key:0,id:"organization",modelValue:l.user.role,"onUpdate:modelValue":a[4]||(a[4]=e=>l.user.role=e),options:l.roles,optionLabel:"text",optionValue:"value",placeholder:"Select a Role"},null,8,["modelValue","options"])):l.isAdmin?(m(),h(x,{key:1,id:"organization",modelValue:l.user.role,"onUpdate:modelValue":a[5]||(a[5]=e=>l.user.role=e),options:l.adminRoles,optionLabel:"text",optionValue:"value",placeholder:"Select a Role"},null,8,["modelValue","options"])):v("",!0),l.submitted&&!l.user.role?(m(),D("small",le,"Role is required.")):v("",!0)])]),_:1},8,["visible"]),t(S,{visible:l.deleteUserDialog,"onUpdate:visible":a[8]||(a[8]=e=>l.deleteUserDialog=e),style:{width:"450px"},header:"Confirm",modal:!0},{footer:o(()=>[t(f,{label:"No",icon:"pi pi-times",class:"p-button-text",onClick:a[7]||(a[7]=e=>l.deleteUserDialog=!1)}),t(f,{label:"Yes",icon:"pi pi-check",class:"p-button-text",onClick:l.deleteUser},null,8,["onClick"])]),default:o(()=>[g("div",te,[oe,p.registration?(m(),D("span",ae,[ne,g("b",null,d(l.user.username),1),i(" for contact "+d(l.user.firstname)+" "+d(l.user.lastname)+"?",1)])):v("",!0)])]),_:1},8,["visible"])])):v("",!0)])}var ie=I(G,[["render",re]]);export{ie as default};
