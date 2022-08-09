import{u as z,G as N}from"./GuestList.e9abaf42.js";import{R as F}from"./RegistrationList.d3c2f1a6.js";import{_ as L,a as A,s as q,r as b,b as c,o as n,c as l,h as x,w as y,e as k,t as v,j as o,d as i,n as C,k as _,F as T,l as U,f as G,I as H,J as M,u as O,P as j}from"./index.b13be678.js";import{u as E,r as R}from"./index.esm.4e762738.js";import"./InputFinancial.0bb1c6a5.js";const J={props:{registrationID:String},setup(r){const t=z(),s=A(),{guest:e}=q(z()),h={organization:{required:R},firstname:{required:R},lastname:{required:R},attendancetype:{required:R}},S=E(h,e),f=b(G.get("organizations")||[]),p=b(G.get("attendancetypes")||[]),d=b(G.get("accessibilityoptions")||[]),m=b(G.get("dietaryoptions")||[]);r.registrationID&&s.fill(r.registrationID);let u=b(!1),g=b(!1);const a=b({severity:null,text:""});return{loading:u,message:g,messageText:a,guest:e,guestData:t,v$:S,organizations:f,dietary:m,accessibility:d,attendancetypes:p,rules:h,onSubmit:async function(V){if(V.preventDefault(),!!await this.v$.$validate()){this.guest.registration=s.getId;try{u.value=!0,t.registerGuest(this.guest).then(w=>t.addGuestList(w)).then(()=>{delete this.guest.guid,this.guest.organization="",this.guest.firstname="",this.guest.lastname="",this.guest.attendancetype="",this.guest.dietary=[],this.guest.accessibility=[],this.$forceUpdate,this.v$.$reset(),u.value=!1,g.value=!0,a.value={severity:"success",text:"Guest Updated!"}})}catch(w){u.value=!1,console.warn(w),g.value=!0,a.value={severity:"error",text:"Guest could not be updated."}}finally{setTimeout(()=>g.value=!1,1500)}}},onReset:function(V){V.preventDefault(),delete this.guest.guid,this.guest.organization="",this.guest.firstname="",this.guest.lastname="",this.guest.attendancetype="",this.guest.dietary=[],this.guest.accessibility=[]}}}},I=r=>(H("data-v-374d6f4c"),r=r(),M(),r),W={class:"dropdown"},K=I(()=>o("label",{for:"organization"},"Organization:",-1)),Q={key:0,class:"p-error",id:"organization-help"},X={class:"text-field"},Y=I(()=>o("label",{for:"firstname"},"First Name:",-1)),Z={key:0,class:"p-error",id:"firstname-help"},$={class:"text-field"},ee=I(()=>o("label",{for:"lastname"},"Last Name:",-1)),te={key:0,class:"p-error",id:"lastname-help"},ae={class:"dropdown"},se=I(()=>o("label",{for:"attendancetype"},"Attendance Type:",-1)),ne={key:0,class:"p-error",id:"attendancetype-help"},ie={class:"checkbox-group"},oe=I(()=>o("label",{for:"accessibility"},"Accessibility Requirements:",-1)),le=["for"],re={class:"checkbox-group"},de=I(()=>o("label",{for:"dietary"},"Dietary Requirements:",-1)),ue=["for"],ge=k("Add Guest"),ce=k("Reset");function me(r,t,s,e,h,S){const f=c("ProgressSpinner"),p=c("PrimeMessage"),d=c("DropDown"),m=c("InputText"),u=c("CheckBox"),g=c("PrimeButton");return n(),l("div",null,[e.loading?(n(),x(f,{key:0})):e.message?(n(),x(p,{key:1,severity:e.messageText.severity,closable:!1},{default:y(()=>[k(v(e.messageText.text),1)]),_:1},8,["severity"])):(n(),l("form",{key:2,onSubmit:t[6]||(t[6]=(...a)=>e.onSubmit&&e.onSubmit(...a)),onReset:t[7]||(t[7]=(...a)=>e.onReset&&e.onReset(...a))},[o("div",W,[K,i(d,{class:C({"p-invalid":e.v$.organization.$error}),id:"organization",modelValue:e.guest.organization,"onUpdate:modelValue":t[0]||(t[0]=a=>e.guest.organization=a),options:e.organizations,optionLabel:"text",optionValue:"value",placeholder:"Select a Organization"},null,8,["class","modelValue","options"]),e.v$.organization.$error?(n(),l("small",Q,"Please select your organization.")):_("",!0)]),o("div",X,[Y,i(m,{class:C({"p-invalid":e.v$.firstname.$error}),id:"firstname",type:"firstname","aria-describedby":"firstname-help",modelValue:e.guest.firstname,"onUpdate:modelValue":t[1]||(t[1]=a=>e.guest.firstname=a),placeholder:"First Name"},null,8,["class","modelValue"]),e.v$.firstname.$error?(n(),l("small",Z,"Please enter guest's first name.")):_("",!0)]),o("div",$,[ee,i(m,{class:C({"p-invalid":e.v$.lastname.$error}),id:"lastname",type:"lastname","aria-describedby":"lastname-help",modelValue:e.guest.lastname,"onUpdate:modelValue":t[2]||(t[2]=a=>e.guest.lastname=a),placeholder:"Last Name"},null,8,["class","modelValue"]),e.v$.lastname.$error?(n(),l("small",te,"Please enter guest's last name.")):_("",!0)]),o("div",ae,[se,i(d,{class:C({"p-invalid":e.v$.attendancetype.$error}),id:"attendancetype",modelValue:e.guest.attendancetype,"onUpdate:modelValue":t[3]||(t[3]=a=>e.guest.attendancetype=a),options:e.attendancetypes,optionLabel:"text",optionValue:"value",placeholder:"Select the type of attendance for this guest"},null,8,["class","modelValue","options"]),e.v$.attendancetype.$error?(n(),l("small",ne,"Please select the attendance type for this guest.")):_("",!0)]),o("div",ie,[oe,(n(!0),l(T,null,U(e.accessibility,a=>(n(),l("div",{key:a.key,class:"field-checkbox"},[i(u,{id:a.key,name:"each",value:a.value,modelValue:e.guest.accessibility,"onUpdate:modelValue":t[4]||(t[4]=D=>e.guest.accessibility=D)},null,8,["id","value","modelValue"]),o("label",{for:a.key},v(a.text),9,le)]))),128))]),o("div",re,[de,(n(!0),l(T,null,U(e.dietary,a=>(n(),l("div",{key:a.key,class:"field-checkbox"},[i(u,{id:a.key,name:"each",value:a.value,modelValue:e.guest.dietary,"onUpdate:modelValue":t[5]||(t[5]=D=>e.guest.dietary=D)},null,8,["id","value","modelValue"]),o("label",{for:a.key},v(a.text),9,ue)]))),128))]),i(g,{type:"submit",label:"primary",class:"p-button-raised"},{default:y(()=>[ge]),_:1}),i(g,{type:"reset",label:"danger",class:"p-button-raised p-button-danger"},{default:y(()=>[ce]),_:1})],32))])}var be=L(J,[["render",me],["__scopeId","data-v-374d6f4c"]]);const fe={props:{id:String},setup(r){const t=O();t.login();const s=A();s.fill(r.id);const e=()=>String(s.getTableCount),h=()=>String(s.getGuestCount),S=()=>s.getRegistrar,f=()=>s.getRegistration.submitted,p=()=>new Date(s.getRegistration.updatedAt).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"}),d=()=>t.isAdmin,m=async()=>{let P=!f();s.registerFinancialInformation({submitted:P,registration:r.id}).then(()=>s.fill(r.id))},u=b(!1),g=b(!1),a=b(!1);return{userStore:t,financialStore:s,tableCount:e,guestCount:h,getRegistrar:S,isSubmitted:f,isAdmin:d,toggleRegistration:m,addGuestDialog:u,tableInfoDialog:g,guestInfoDialog:a,addGuest:()=>{u.value=!0},tableInfo:()=>{g.value=!0},guestInfo:()=>{a.value=!0},dateSubmitted:p}},components:{GuestList:N,RegistrationList:F,InputGuest:be,PageHeader:j}},pe={key:0},ye={key:1};function ve(r,t,s,e,h,S){const f=c("PageHeader"),p=c("RegistrationList"),d=c("PrimeButton"),m=c("PrimeDialog"),u=c("InputGuest"),g=c("GuestList");return n(),l("main",null,[i(f,{title:`Registration # ${s.id} `},{default:y(()=>[e.isSubmitted()?(n(),l("span",pe,"Submitted "+v(e.dateSubmitted())+" by",1)):(n(),l("span",ye,"In Progress Registration for")),k(" "+v(e.getRegistrar()),1)]),_:1},8,["title"]),i(p,{registrationID:s.id,detailsView:!1},null,8,["registrationID"]),e.isSubmitted()?_("",!0):(n(),x(d,{key:0,label:"Add Guests",icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:t[0]||(t[0]=a=>e.addGuest())})),i(d,{type:"button",label:"Total Guests",icon:"pi pi-users",class:"p-button-warning",badge:e.guestCount(),onClick:t[1]||(t[1]=a=>e.guestInfo()),badgeClass:"p-badge-danger"},null,8,["badge"]),i(d,{type:"button",label:"Tables",icon:"pi pi-ticket",class:"p-button-warning",badge:e.tableCount(),onClick:t[2]||(t[2]=a=>e.tableInfo()),badgeClass:"p-badge-danger"},null,8,["badge"]),!e.isSubmitted()&&(e.guestCount()>=5||e.isAdmin())?(n(),x(d,{key:1,type:"button",label:"Submit Registration",icon:"pi pi-ticket",class:"p-button-warning",onClick:t[3]||(t[3]=a=>e.toggleRegistration()),badgeClass:"p-badge-danger"})):_("",!0),e.isSubmitted()&&e.isAdmin()?(n(),x(d,{key:2,type:"button",label:"Unsubmit Registration",icon:"pi pi-ticket",class:"p-button-warning",onClick:t[4]||(t[4]=a=>e.toggleRegistration()),badgeClass:"p-badge-danger"})):_("",!0),i(m,{visible:e.tableInfoDialog,"onUpdate:visible":t[5]||(t[5]=a=>e.tableInfoDialog=a),header:"Table Information",modal:!0,class:"p-fluid"},{default:y(()=>[k("Warning regarding table charges. Please be aware that half tables may not be able to be accomodated, and you may be charged the full table amount. Current table count: "+v(e.tableCount()),1)]),_:1},8,["visible"]),i(m,{visible:e.guestInfoDialog,"onUpdate:visible":t[6]||(t[6]=a=>e.guestInfoDialog=a),header:"Guest Information",modal:!0,class:"p-fluid"},{default:y(()=>[k("Total Number of Guests: "+v(e.guestCount())+". ",1)]),_:1},8,["visible"]),i(m,{visible:e.addGuestDialog,"onUpdate:visible":t[7]||(t[7]=a=>e.addGuestDialog=a),header:"Add a new Guest",modal:!0,class:"p-fluid"},{default:y(()=>[i(u,{registrationID:s.id},null,8,["registrationID"])]),_:1},8,["visible"]),i(g,{adminView:!1,registrationID:s.id},null,8,["registrationID"])])}var De=L(fe,[["render",ve]]);export{De as default};
