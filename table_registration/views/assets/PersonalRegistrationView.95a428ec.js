import{G as Q}from"./GuestList.10cd833d.js";import{R as X}from"./RegistrationList.3774fe77.js";import{f as D}from"./settings.services.0cd04bb2.js";import{u as Z,r as V}from"./index.esm.a01e8302.js";import{_ as Y,a as T,s as G,r as c,b as g,o as i,c as r,i as _,w as f,e as l,t as p,k as t,d as a,n as R,l as u,F,m as O,N as j,f as E,u as $,P as ee}from"./index.31b87afe.js";import{u as H}from"./guests.1004bdc3.js";import"./InputFinancial.42d7eb50.js";const te={props:{registrationID:String},setup(k){const s=H(),v=T(),{guest:e}=G(H()),C={organization:{required:V},firstname:{required:V},lastname:{required:V},attendancetype:{required:V}},P=Z(C,e),y=c(D.get("organizations")||[]),b=c(D.get("attendancetypes")||[]),w=c(D.get("accessibilityoptions")||[]),h=c(D.get("dietaryoptions")||[]);k.registrationID&&v.fill(k.registrationID);let o=c(!1),m=c(!1);const n=c({severity:null,text:""});return{loading:o,message:m,messageText:n,guest:e,guestData:s,v$:P,organizations:y,dietary:h,accessibility:w,attendancetypes:b,rules:C,onSubmit:async function(x){if(x.preventDefault(),!!await this.v$.$validate()){this.guest.registration=v.getId;try{o.value=!0,s.registerGuest(this.guest).then(I=>s.addGuestList(I)).then(()=>{delete this.guest.guid,this.guest.organization="",this.guest.firstname="",this.guest.lastname="",this.guest.attendancetype="",this.guest.dietary=[],this.guest.accessibility=[],this.$forceUpdate,this.v$.$reset(),o.value=!1,m.value=!0,n.value={severity:"success",text:"Guest Updated!"}})}catch(I){o.value=!1,console.warn(I),m.value=!0,n.value={severity:"error",text:"Guest could not be updated."}}finally{setTimeout(()=>m.value=!1,1500)}}},onReset:function(x){x.preventDefault(),delete this.guest.guid,this.guest.organization="",this.guest.firstname="",this.guest.lastname="",this.guest.attendancetype="",this.guest.dietary=[],this.guest.accessibility=[]}}}},se={class:"guest-registration-selections"},ie={class:"dropdown"},ne=t("label",{for:"organization"},"Organization:",-1),oe={key:0,class:"p-error",id:"organization-help"},ae={class:"text-field"},re=t("label",{for:"firstname"},"First Name:",-1),le={key:0,class:"p-error",id:"firstname-help"},de={class:"text-field"},ue=t("label",{for:"lastname"},"Last Name:",-1),ge={key:0,class:"p-error",id:"lastname-help"},ce={class:"dropdown"},me=t("label",{for:"attendancetype"},"Attendance Type:",-1),be={key:0,class:"p-error",id:"attendancetype-help"},fe=t("label",{for:"accessibility"},"Accessibility Requirements:",-1),pe={class:"checkbox-group"},ye=["for"],he=t("label",{for:"dietary"},"Dietary Requirements:",-1),_e={class:"checkbox-group"},ve=["for"],ke=l("Add Guest"),we=l("Reset");function Se(k,s,v,e,C,P){const y=g("ProgressSpinner"),b=g("PrimeMessage"),w=g("DropDown"),h=g("InputText"),o=g("CheckBox"),m=g("PrimeButton");return i(),r("div",null,[e.loading?(i(),_(y,{key:0})):e.message?(i(),_(b,{key:1,severity:e.messageText.severity,closable:!1},{default:f(()=>[l(p(e.messageText.text),1)]),_:1},8,["severity"])):(i(),r("form",{key:2,class:"guest-registration-form",onSubmit:s[6]||(s[6]=(...n)=>e.onSubmit&&e.onSubmit(...n)),onReset:s[7]||(s[7]=(...n)=>e.onReset&&e.onReset(...n))},[t("div",se,[t("div",ie,[ne,a(w,{class:R({"p-invalid":e.v$.organization.$error}),id:"organization",modelValue:e.guest.organization,"onUpdate:modelValue":s[0]||(s[0]=n=>e.guest.organization=n),options:e.organizations,optionLabel:"text",optionValue:"value",placeholder:"Select an Organization"},null,8,["class","modelValue","options"]),e.v$.organization.$error?(i(),r("small",oe,"Please select your organization.")):u("",!0)]),t("div",ae,[re,a(h,{class:R({"p-invalid":e.v$.firstname.$error}),id:"firstname",type:"firstname","aria-describedby":"firstname-help",modelValue:e.guest.firstname,"onUpdate:modelValue":s[1]||(s[1]=n=>e.guest.firstname=n),placeholder:"First Name"},null,8,["class","modelValue"]),e.v$.firstname.$error?(i(),r("small",le,"Please enter guest's first name.")):u("",!0)]),t("div",de,[ue,a(h,{class:R({"p-invalid":e.v$.lastname.$error}),id:"lastname",type:"lastname","aria-describedby":"lastname-help",modelValue:e.guest.lastname,"onUpdate:modelValue":s[2]||(s[2]=n=>e.guest.lastname=n),placeholder:"Last Name"},null,8,["class","modelValue"]),e.v$.lastname.$error?(i(),r("small",ge,"Please enter guest's last name.")):u("",!0)]),t("div",ce,[me,a(w,{class:R({"p-invalid":e.v$.attendancetype.$error}),id:"attendancetype",modelValue:e.guest.attendancetype,"onUpdate:modelValue":s[3]||(s[3]=n=>e.guest.attendancetype=n),options:e.attendancetypes,optionLabel:"text",optionValue:"value",placeholder:"Select the type of attendance for this guest"},null,8,["class","modelValue","options"]),e.v$.attendancetype.$error?(i(),r("small",be,"Please select the attendance type for this guest.")):u("",!0)]),fe,t("div",pe,[(i(!0),r(F,null,O(e.accessibility,n=>(i(),r("div",{key:n.key,class:"field-checkbox"},[a(o,{id:n.key,name:"each",value:n.value,modelValue:e.guest.accessibility,"onUpdate:modelValue":s[4]||(s[4]=S=>e.guest.accessibility=S)},null,8,["id","value","modelValue"]),t("label",{for:n.key},p(n.text),9,ye)]))),128))]),he,t("div",_e,[(i(!0),r(F,null,O(e.dietary,n=>(i(),r("div",{key:n.key,class:"field-checkbox"},[a(o,{id:n.key,name:"each",value:n.value,modelValue:e.guest.dietary,"onUpdate:modelValue":s[5]||(s[5]=S=>e.guest.dietary=S)},null,8,["id","value","modelValue"]),t("label",{for:n.key},p(n.text),9,ve)]))),128))])]),a(m,{type:"submit",label:"primary",class:"p-button-raised"},{default:f(()=>[ke]),_:1}),a(m,{type:"reset",label:"danger",class:"p-button-raised p-button-danger"},{default:f(()=>[we]),_:1})],32))])}var xe=Y(te,[["render",Se]]);const Ce={props:{id:String},setup(k){const s=j(),v=E(),{settings:e}=G(E()),{message:C}=G(j()),{registration:P}=G(T()),y=c(!1),b=c(!1),w=c(!1),h=$();h.login();const o=T();o.fill(k.id);const m=()=>String(o.getTableCount),n=()=>String(o.getGuestCount),S=()=>o.getRegistrar,A=()=>o.getRegistration.submitted,x=()=>o.getCompleted,d=()=>new Date(o.getRegistration.updatedAt).toLocaleDateString("en-US",{day:"2-digit",month:"2-digit",year:"numeric"}),I=()=>h.isAdmin,J=async()=>{let M=!A(),N=M?"submitted":"re-opened";b.value=!0;try{y.value=!0,o.registerFinancialInformation({submitted:M,registration:k.id}).then(()=>{b.value=!1,s.setMessage({text:`Successfully ${N} registration!`,type:"success"})}).then(()=>o.fill(k.id))}catch(K){b.value=!1,console.warn(K),y.value=!0,s.setMessage({text:`Registration could not be ${N}.`,type:"error"})}},z=c(0),W=()=>z.value++,U=c(!1),L=c(!1),q=c(!1),B=c(!1);return{userStore:h,financialStore:o,settingsStore:v,settings:e,registration:P,ministerApproval:w,tableCount:m,guestCount:n,getRegistrar:S,isSubmitted:A,isAdmin:I,toggleRegistration:J,addGuestDialog:U,tableInfoDialog:L,guestInfoDialog:q,submissionDialog:B,addGuest:()=>{U.value=!0},tableInfo:()=>{L.value=!0},guestInfo:()=>{q.value=!0},submitRegistration:()=>{y.value=!1,B.value=!0},dateSubmitted:d,activeMessage:y,message:C,loading:b,isCompleted:x,keyCount:z,keyAdd:W}},components:{GuestList:Q,RegistrationList:X,InputGuest:xe,PageHeader:ee}},Pe={class:"personal-registration"},Ae={key:0},Ie={key:1},De={key:0},Ve={key:0},Re=l(" Please ensure that all registration and guest information on this page is complete prior to submitting your registration for the event. If you cannot complete the registration at this time, your current progress will remain saved here until you are ready to complete your submission. "),Ge={key:1},Me=l(" Your registration has been submitted. Any request for changes after submission and any other questions should be sent via email to "),Te=t("a",{href:"mailto: PremiersAwards@gov.bc.ca"},"PremiersAwards@gov.bc.ca",-1),ze=l(". "),Ue={key:2},Le=t("a",{href:"mailto: PremiersAwards@gov.bc.ca"},"PremiersAwards@gov.bc.ca",-1),qe=l(". "),Be={key:2,class:"page-body"},Ne={class:"registration-guest-info"},Fe=t("span",{id:"guest-registration-info"},"Please note that guests will automatically be sorted to tables first by attendance type, and then in the order that they are added.",-1),Oe={class:"registration-buttons"},je=t("ul",null,[t("li",null,"The cost per table is $500, and each table seats 10 people."),t("li",null," Payment for tables is conducted through a Journal Voucher process with each ministry using the financial coding submitted in the registration information. Payment will be reconciled following the provincial ceremony. "),t("li",null," Each ministry is encouraged to purchase a minimum of one table (or up to three tables for large ministries ). "),t("li",null," Requests for four or more tables will be assessed based on total number of tables requested to ensure participation from all ministries is accommodated. "),t("li",null," Ministries are responsible for their employees' travel and associated accommodation for the provincial ceremony . ")],-1),Ee=t("br",null,null,-1),He=t("b",null,"Warning regarding table charges:",-1),Ye=t("br",null,null,-1),Je=l(" Please be aware that half tables may only be accomodated at the program's discretion, and you may be charged the full table amount. "),We=t("br",null,null,-1),Ke=t("ul",null,[t("li",null," For individual categories: Emerging Leader, Leadership, and Legacy finalists \u2013 ensure the finalist and their spouse (or alternate immediate family member) are both included in this registration. "),t("li",null," All Ministers are invited by the Premier\u2019s Office as part of the Premier\u2019s Awards program; in most cases, Ministers will be seated with their respective ministry. "),t("ul",null,[t("li",null," Upon Minister RSVPs, the Premier\u2019s Awards program will work with each Ministry Contact to ensure the Minister is accounted for in table numbers. ")]),t("li",null," Ministry Contacts must ensure all Executive who plan to attend (DM, ADM, etc.) are included in this registration. "),t("li",null," Ministry Contacts must ensure that all invited external partners are included in this registration. ")],-1),Qe={key:0},Xe=t("p",null,[l(" There are currently missing fields on your registration. "),t("br"),l(" Please update the registration details and ensure that all fields are completed. ")],-1),Ze=[Xe],$e={key:1},et=t("p",null,[t("b",null,"Are you sure you wish to submit your event registration?"),l(" You will not be able to revise your submission once completed. ")],-1),tt=t("ul",null,[t("li",null," Changes after the deadline cannot be guaranteed due to impact on remaining planning requirements. "),t("li",null,[l(" Any request for changes after submission must be sent via email to "),t("a",{href:"mailto: PremiersAwards@gov.bc.ca"},"PremiersAwards@gov.bc.ca"),l(". ")]),t("li",null," Please ensure to submit change requests with complete contact information to avoid oversights of important information, and to ensure attendee name tags for entry into the ceremony are accurate. ")],-1),st=t("p",null," Please be aware that half tables may only be accomodated at the program's discretion, and you may be charged the full table amount. ",-1),it=t("br",null,null,-1),nt={id:"minister-approval-checkbox"},ot=t("label",{for:"minister-approval"},"Check this box to confirm approval has been obtained by the ministry's Deputy Minister's office.",-1),at={key:2},rt=t("p",null,[l(" Are you sure you wish to reverse submission of this event-registration?"),t("br"),l(" This will re-open this submission for editing, and remove the current submission date. ")],-1),lt=[rt],dt={class:"submission-buttons"},ut={key:2,class:"p-error",id:"submit-registration-help"};function gt(k,s,v,e,C,P){const y=g("PageHeader"),b=g("PrimeCard"),w=g("ProgressSpinner"),h=g("RegistrationList"),o=g("PrimeButton"),m=g("PrimeDialog"),n=g("CheckBox"),S=g("PrimeMessage"),A=g("InputGuest"),x=g("GuestList");return i(),r("main",Pe,[a(y,{class:"pageheader",footer:`Registration # ${e.registration._id} `},{default:f(()=>[e.isSubmitted()?(i(),r("span",Ae,"Submitted "+p(e.dateSubmitted())+" by",1)):(i(),r("span",Ie,"In-progress registration for")),l(" "+p(e.getRegistrar()),1)]),_:1},8,["footer"]),e.isAdmin()?u("",!0):(i(),r("div",De,[!e.isSubmitted()&&e.settingsStore.getIsSalesOpen?(i(),r("div",Ve,[a(b,{id:"registration-info"},{content:f(()=>[Re]),_:1})])):u("",!0),e.isSubmitted()&&e.settingsStore.getIsSalesOpen?(i(),r("div",Ge,[a(b,{id:"registration-info"},{content:f(()=>[Me,Te,ze]),_:1})])):u("",!0),e.settingsStore.getIsSalesOpen?u("",!0):(i(),r("div",Ue,[a(b,{id:"sales-closed-info"},{content:f(()=>[l(" Registrations for "+p(e.settings.year)+" are currently closed. Any request for changes after submission, inquiries regarding outstanding registrations, or any other questions should be sent via email to ",1),Le,qe]),_:1})]))])),e.loading?(i(),_(w,{key:1})):(i(),r("div",Be,[a(h,{id:"personal-registration-table",registrationID:v.id,detailsView:!1,adminView:e.isAdmin()},null,8,["registrationID","adminView"]),t("div",null,[a(b,{id:"guest-seating-info"},{content:f(()=>[t("div",Ne,[Fe,t("div",Oe,[a(o,{type:"button",label:"Table Information",icon:"pi pi-ticket",class:"p-button-warning",badge:e.tableCount(),onClick:s[0]||(s[0]=d=>e.tableInfo()),badgeClass:"p-badge-danger"},null,8,["badge"]),a(o,{type:"button",label:"Guest Information",icon:"pi pi-users",class:"p-button-warning",badge:e.guestCount(),onClick:s[1]||(s[1]=d=>e.guestInfo()),badgeClass:"p-badge-danger"},null,8,["badge"]),!e.isSubmitted()&&(e.settingsStore.getIsSalesOpen||e.isAdmin())?(i(),_(o,{key:0,label:"Add Guests",icon:"pi pi-user-plus",class:"p-button-rounded p-button-success mr-2",onClick:s[2]||(s[2]=d=>e.addGuest())})):u("",!0)])])]),_:1})]),a(m,{visible:e.tableInfoDialog,"onUpdate:visible":s[3]||(s[3]=d=>e.tableInfoDialog=d),header:"Table Information",modal:!0,class:"p-fluid"},{default:f(()=>[l("The current number of tables required based on your guest list is: "+p(e.tableCount())+". ",1),je,Ee,He,Ye,Je,We]),_:1},8,["visible"]),a(m,{visible:e.guestInfoDialog,"onUpdate:visible":s[4]||(s[4]=d=>e.guestInfoDialog=d),header:"Guest Information",modal:!0,class:"p-fluid"},{default:f(()=>[l("Total Number of Guests: "+p(e.guestCount())+". ",1),Ke]),_:1},8,["visible"]),a(m,{visible:e.submissionDialog,"onUpdate:visible":s[8]||(s[8]=d=>e.submissionDialog=d),header:"Confirm Submission",modal:!0,class:"p-fluid"},{default:f(()=>[!e.isCompleted()&&!e.isAdmin()?(i(),r("div",Qe,Ze)):!e.isSubmitted()&&!e.activeMessage?(i(),r("div",$e,[et,tt,st,t("p",null,[l(" Guests submitted on this registration: "+p(e.guestCount())+".",1),it,l(" Total tables required for this number of guests: "+p(e.tableCount()),1)]),t("div",nt,[a(n,{id:"minister-approval",name:"minister-approval",value:"ministerapproval",modelValue:e.ministerApproval,"onUpdate:modelValue":s[5]||(s[5]=d=>e.ministerApproval=d),binary:!0},null,8,["modelValue"]),ot])])):e.isSubmitted()&&e.isAdmin()&&!e.activeMessage?(i(),r("div",at,lt)):u("",!0),!e.isSubmitted()&&!e.activeMessage&&(e.isCompleted()||e.isAdmin())?(i(),_(o,{key:3,disabled:!e.ministerApproval,type:"button",label:"Confirm submit registration",icon:"pi pi-send",class:"p-button-primary",onClick:s[6]||(s[6]=d=>e.toggleRegistration()),badgeClass:"p-badge-danger"},null,8,["disabled"])):u("",!0),e.isSubmitted()&&e.isAdmin()&&!e.activeMessage?(i(),_(o,{key:4,type:"button",label:"Re-open registration",icon:"pi pi-undo",class:"p-button-danger",onClick:s[7]||(s[7]=d=>e.toggleRegistration()),badgeClass:"p-badge-danger"})):u("",!0),e.activeMessage?(i(),_(S,{key:5,show:"",variant:e.message.type,closable:!1},{default:f(()=>[t("p",null,p(e.message.text),1)]),_:1},8,["variant"])):u("",!0)]),_:1},8,["visible"]),a(m,{visible:e.addGuestDialog,"onUpdate:visible":s[9]||(s[9]=d=>e.addGuestDialog=d),style:{width:"50rem",margin:"5rem"},header:"Add a new Guest",onHide:s[10]||(s[10]=d=>e.keyAdd()),modal:!0,class:"p-fluid"},{default:f(()=>[a(A,{registrationID:v.id},null,8,["registrationID"])]),_:1},8,["visible"]),(i(),_(x,{id:"personal-registration-guests-table",adminView:e.isAdmin(),registrationID:v.id,key:e.keyCount},null,8,["adminView","registrationID"])),t("div",dt,[!e.isSubmitted()&&(e.settingsStore.getIsSalesOpen||e.isAdmin())?(i(),_(o,{key:0,disabled:e.guestCount()<5&&!e.isAdmin(),type:"button",label:"Submit Registration",icon:"pi pi-send",class:"p-button-primary",onClick:s[11]||(s[11]=d=>e.submitRegistration()),badgeClass:"p-badge-danger"},null,8,["disabled"])):u("",!0),e.isSubmitted()&&e.isAdmin()?(i(),_(o,{key:1,type:"button",label:"Unsubmit Registration",icon:"pi pi-undo",class:"p-button-danger",onClick:s[12]||(s[12]=d=>e.submitRegistration()),badgeClass:"p-badge-danger"})):u("",!0),!e.isSubmitted()&&(e.settingsStore.getIsSalesOpen||e.isAdmin())&&e.guestCount()<5&&!e.isAdmin()?(i(),r("label",ut,"The minimum number of guests allowed on a registration is 5.")):u("",!0)])]))])}var St=Y(Ce,[["render",gt]]);export{St as default};
