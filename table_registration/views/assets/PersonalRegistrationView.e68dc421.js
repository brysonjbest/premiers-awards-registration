import{u as T,G as j}from"./GuestList.5e4e80c4.js";import{R as H}from"./RegistrationList.41583ffe.js";import{_ as B,a as N,s as F,r as m,b as g,o as n,c as l,h as v,w as y,e as d,t as p,j as i,d as o,n as R,k as b,F as U,l as L,f as P,I as M,u as O,P as E}from"./index.9f200f26.js";import{u as W,r as V}from"./index.esm.e3f20a21.js";import"./InputFinancial.d85caf3c.js";const Y={props:{registrationID:String},setup(h){const t=T(),f=N(),{guest:e}=F(T()),_={organization:{required:V},firstname:{required:V},lastname:{required:V},attendancetype:{required:V}},C=W(_,e),u=m(P.get("organizations")||[]),D=m(P.get("attendancetypes")||[]),k=m(P.get("accessibilityoptions")||[]),x=m(P.get("dietaryoptions")||[]);h.registrationID&&f.fill(h.registrationID);let r=m(!1),c=m(!1);const s=m({severity:null,text:""});return{loading:r,message:c,messageText:s,guest:e,guestData:t,v$:C,organizations:u,dietary:x,accessibility:k,attendancetypes:D,rules:_,onSubmit:async function(a){if(a.preventDefault(),!!await this.v$.$validate()){this.guest.registration=f.getId;try{r.value=!0,t.registerGuest(this.guest).then(w=>t.addGuestList(w)).then(()=>{delete this.guest.guid,this.guest.organization="",this.guest.firstname="",this.guest.lastname="",this.guest.attendancetype="",this.guest.dietary=[],this.guest.accessibility=[],this.$forceUpdate,this.v$.$reset(),r.value=!1,c.value=!0,s.value={severity:"success",text:"Guest Updated!"}})}catch(w){r.value=!1,console.warn(w),c.value=!0,s.value={severity:"error",text:"Guest could not be updated."}}finally{setTimeout(()=>c.value=!1,1500)}}},onReset:function(a){a.preventDefault(),delete this.guest.guid,this.guest.organization="",this.guest.firstname="",this.guest.lastname="",this.guest.attendancetype="",this.guest.dietary=[],this.guest.accessibility=[]}}}},J={class:"guest-registration-selections"},K={class:"dropdown"},Q=i("label",{for:"organization"},"Organization:",-1),X={key:0,class:"p-error",id:"organization-help"},Z={class:"text-field"},$=i("label",{for:"firstname"},"First Name:",-1),ee={key:0,class:"p-error",id:"firstname-help"},te={class:"text-field"},se=i("label",{for:"lastname"},"Last Name:",-1),ie={key:0,class:"p-error",id:"lastname-help"},ne={class:"dropdown"},ae=i("label",{for:"attendancetype"},"Attendance Type:",-1),oe={key:0,class:"p-error",id:"attendancetype-help"},re=i("label",{for:"accessibility"},"Accessibility Requirements:",-1),le={class:"checkbox-group"},de=["for"],ue=i("label",{for:"dietary"},"Dietary Requirements:",-1),ge={class:"checkbox-group"},ce=["for"],me=d("Add Guest"),be=d("Reset");function fe(h,t,f,e,_,C){const u=g("ProgressSpinner"),D=g("PrimeMessage"),k=g("DropDown"),x=g("InputText"),r=g("CheckBox"),c=g("PrimeButton");return n(),l("div",null,[e.loading?(n(),v(u,{key:0})):e.message?(n(),v(D,{key:1,severity:e.messageText.severity,closable:!1},{default:y(()=>[d(p(e.messageText.text),1)]),_:1},8,["severity"])):(n(),l("form",{key:2,class:"guest-registration-form",onSubmit:t[6]||(t[6]=(...s)=>e.onSubmit&&e.onSubmit(...s)),onReset:t[7]||(t[7]=(...s)=>e.onReset&&e.onReset(...s))},[i("div",J,[i("div",K,[Q,o(k,{class:R({"p-invalid":e.v$.organization.$error}),id:"organization",modelValue:e.guest.organization,"onUpdate:modelValue":t[0]||(t[0]=s=>e.guest.organization=s),options:e.organizations,optionLabel:"text",optionValue:"value",placeholder:"Select an Organization"},null,8,["class","modelValue","options"]),e.v$.organization.$error?(n(),l("small",X,"Please select your organization.")):b("",!0)]),i("div",Z,[$,o(x,{class:R({"p-invalid":e.v$.firstname.$error}),id:"firstname",type:"firstname","aria-describedby":"firstname-help",modelValue:e.guest.firstname,"onUpdate:modelValue":t[1]||(t[1]=s=>e.guest.firstname=s),placeholder:"First Name"},null,8,["class","modelValue"]),e.v$.firstname.$error?(n(),l("small",ee,"Please enter guest's first name.")):b("",!0)]),i("div",te,[se,o(x,{class:R({"p-invalid":e.v$.lastname.$error}),id:"lastname",type:"lastname","aria-describedby":"lastname-help",modelValue:e.guest.lastname,"onUpdate:modelValue":t[2]||(t[2]=s=>e.guest.lastname=s),placeholder:"Last Name"},null,8,["class","modelValue"]),e.v$.lastname.$error?(n(),l("small",ie,"Please enter guest's last name.")):b("",!0)]),i("div",ne,[ae,o(k,{class:R({"p-invalid":e.v$.attendancetype.$error}),id:"attendancetype",modelValue:e.guest.attendancetype,"onUpdate:modelValue":t[3]||(t[3]=s=>e.guest.attendancetype=s),options:e.attendancetypes,optionLabel:"text",optionValue:"value",placeholder:"Select the type of attendance for this guest"},null,8,["class","modelValue","options"]),e.v$.attendancetype.$error?(n(),l("small",oe,"Please select the attendance type for this guest.")):b("",!0)]),re,i("div",le,[(n(!0),l(U,null,L(e.accessibility,s=>(n(),l("div",{key:s.key,class:"field-checkbox"},[o(r,{id:s.key,name:"each",value:s.value,modelValue:e.guest.accessibility,"onUpdate:modelValue":t[4]||(t[4]=S=>e.guest.accessibility=S)},null,8,["id","value","modelValue"]),i("label",{for:s.key},p(s.text),9,de)]))),128))]),ue,i("div",ge,[(n(!0),l(U,null,L(e.dietary,s=>(n(),l("div",{key:s.key,class:"field-checkbox"},[o(r,{id:s.key,name:"each",value:s.value,modelValue:e.guest.dietary,"onUpdate:modelValue":t[5]||(t[5]=S=>e.guest.dietary=S)},null,8,["id","value","modelValue"]),i("label",{for:s.key},p(s.text),9,ce)]))),128))])]),o(c,{type:"submit",label:"primary",class:"p-button-raised"},{default:y(()=>[me]),_:1}),o(c,{type:"reset",label:"danger",class:"p-button-raised p-button-danger"},{default:y(()=>[be]),_:1})],32))])}var ye=B(Y,[["render",fe]]);const pe={props:{id:String},setup(h){const t=M(),{message:f}=F(M()),e=m(!1),_=m(!1),C=O();C.login();const u=N();u.fill(h.id);const D=()=>String(u.getTableCount),k=()=>String(u.getGuestCount),x=()=>u.getRegistrar,r=()=>u.getRegistration.submitted,c=()=>new Date(u.getRegistration.updatedAt).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"}),s=()=>C.isAdmin,S=async()=>{let z=!r(),A=z?"submitted":"re-opened";_.value=!0;try{e.value=!0,u.registerFinancialInformation({submitted:z,registration:h.id}).then(()=>{_.value=!1,t.setMessage({text:`Successfully ${A} registration!`,type:"success"})}).then(()=>u.fill(h.id))}catch(q){_.value=!1,console.warn(q),e.value=!0,t.setMessage({text:`Registration could not be ${A}.`,type:"error"})}},I=m(!1),a=m(!1),G=m(!1),w=m(!1);return{userStore:C,financialStore:u,tableCount:D,guestCount:k,getRegistrar:x,isSubmitted:r,isAdmin:s,toggleRegistration:S,addGuestDialog:I,tableInfoDialog:a,guestInfoDialog:G,submissionDialog:w,addGuest:()=>{I.value=!0},tableInfo:()=>{a.value=!0},guestInfo:()=>{G.value=!0},submitRegistration:()=>{e.value=!1,w.value=!0},dateSubmitted:c,activeMessage:e,message:f,loading:_}},components:{GuestList:j,RegistrationList:H,InputGuest:ye,PageHeader:E}},_e={class:"personal-registration"},ve={key:0},he={key:1},ke={key:0},xe=d(" Please ensure that the registration information on this page is complete prior to submitting your registration for the event. If you cannot complete the registration at this time, your current progress will remain saved here until you are ready to complete your submission. "),Se={key:2,class:"page-body"},Ce={class:"registration-buttons"},De=d("Warning regarding table charges:"),we=i("br",null,null,-1),Ie=d(" Please be aware that half tables may not be able to be accomodated, and you may be charged the full table amount. "),Re=i("br",null,null,-1),Pe={key:0},Ve=i("p",null,[d(" Are you sure you wish to submit your event-registration?"),i("br"),d(" You will not be able to revise your submission once completed. ")],-1),Ge=d(" Please be aware that half tables may not be able to be accomodated, and you may be charged the full table amount."),ze=i("br",null,null,-1),Ae=i("br",null,null,-1),Te={key:1},Ue=i("p",null,[d(" Are you sure you wish to reverse submission of this event-registration?"),i("br"),d(" This will re-open this submission for editing, and remove the current submission date. ")],-1),Le=[Ue],Me={class:"submission-buttons"};function Be(h,t,f,e,_,C){const u=g("PageHeader"),D=g("PrimeCard"),k=g("ProgressSpinner"),x=g("RegistrationList"),r=g("PrimeButton"),c=g("PrimeDialog"),s=g("PrimeMessage"),S=g("InputGuest"),I=g("GuestList");return n(),l("main",_e,[o(u,{class:"pageheader",footer:`Registration # ${f.id} `},{default:y(()=>[e.isSubmitted()?(n(),l("span",ve,"Submitted "+p(e.dateSubmitted())+" by",1)):(n(),l("span",he,"In-progress registration for")),d(" "+p(e.getRegistrar()),1)]),_:1},8,["footer"]),!e.isAdmin()&!e.isSubmitted()?(n(),l("div",ke,[i("div",null,[o(D,{id:"registration-info"},{content:y(()=>[xe]),_:1})])])):b("",!0),e.loading?(n(),v(k,{key:1})):(n(),l("div",Se,[o(x,{id:"personal-registration-table",registrationID:f.id,detailsView:!1},null,8,["registrationID"]),i("div",Ce,[o(r,{type:"button",label:"Tables",icon:"pi pi-ticket",class:"p-button-warning",badge:e.tableCount(),onClick:t[0]||(t[0]=a=>e.tableInfo()),badgeClass:"p-badge-danger"},null,8,["badge"]),o(r,{type:"button",label:"Total Guests",icon:"pi pi-users",class:"p-button-warning",badge:e.guestCount(),onClick:t[1]||(t[1]=a=>e.guestInfo()),badgeClass:"p-badge-danger"},null,8,["badge"]),e.isSubmitted()?b("",!0):(n(),v(r,{key:0,label:"Add Guests",icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:t[2]||(t[2]=a=>e.addGuest())}))]),o(c,{visible:e.tableInfoDialog,"onUpdate:visible":t[3]||(t[3]=a=>e.tableInfoDialog=a),header:"Table Information",modal:!0,class:"p-fluid"},{default:y(()=>[De,we,Ie,Re,d(" Current table count: "+p(e.tableCount()),1)]),_:1},8,["visible"]),o(c,{visible:e.guestInfoDialog,"onUpdate:visible":t[4]||(t[4]=a=>e.guestInfoDialog=a),header:"Guest Information",modal:!0,class:"p-fluid"},{default:y(()=>[d("Total Number of Guests: "+p(e.guestCount())+". ",1)]),_:1},8,["visible"]),o(c,{visible:e.submissionDialog,"onUpdate:visible":t[7]||(t[7]=a=>e.submissionDialog=a),header:"Confirm Submission",modal:!0,class:"p-fluid"},{default:y(()=>[!e.isSubmitted()&&!e.activeMessage?(n(),l("div",Pe,[Ve,i("p",null,[Ge,ze,d(" Guests submitted on this registration: "+p(e.guestCount())+".",1),Ae,d(" Total tables required for this number of guests: "+p(e.tableCount()),1)])])):e.isSubmitted()&&e.isAdmin()&&!e.activeMessage?(n(),l("div",Te,Le)):b("",!0),!e.isSubmitted()&&!e.activeMessage?(n(),v(r,{key:2,type:"button",label:"Confirm submit registration",icon:"pi pi-ticket",class:"p-button-warning",onClick:t[5]||(t[5]=a=>e.toggleRegistration()),badgeClass:"p-badge-danger"})):b("",!0),e.isSubmitted()&&e.isAdmin()&&!e.activeMessage?(n(),v(r,{key:3,type:"button",label:"Re-open registration",icon:"pi pi-ticket",class:"p-button-warning",onClick:t[6]||(t[6]=a=>e.toggleRegistration()),badgeClass:"p-badge-danger"})):b("",!0),e.activeMessage?(n(),v(s,{key:4,show:"",variant:e.message.type,closable:!1},{default:y(()=>[i("p",null,p(e.message.text),1)]),_:1},8,["variant"])):b("",!0)]),_:1},8,["visible"]),o(c,{visible:e.addGuestDialog,"onUpdate:visible":t[8]||(t[8]=a=>e.addGuestDialog=a),style:{width:"50rem",margin:"5rem"},header:"Add a new Guest",modal:!0,class:"p-fluid"},{default:y(()=>[o(S,{registrationID:f.id},null,8,["registrationID"])]),_:1},8,["visible"]),o(I,{id:"personal-registration-guests-table",adminView:!1,registrationID:f.id},null,8,["registrationID"]),i("div",Me,[!e.isSubmitted()&&(e.guestCount()>=5||e.isAdmin())?(n(),v(r,{key:0,type:"button",label:"Submit Registration",icon:"pi pi-ticket",class:"p-button-warning",onClick:t[9]||(t[9]=a=>e.submitRegistration()),badgeClass:"p-badge-danger"})):b("",!0),e.isSubmitted()&&e.isAdmin()?(n(),v(r,{key:1,type:"button",label:"Unsubmit Registration",icon:"pi pi-ticket",class:"p-button-warning",onClick:t[10]||(t[10]=a=>e.submitRegistration()),badgeClass:"p-badge-danger"})):b("",!0)])]))])}var Je=B(pe,[["render",Be]]);export{Je as default};
