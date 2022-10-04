import{_ as Q,u as X,a as Z,f as B,r as v,N as G,s as H,b as g,o as n,c as f,d as i,k as e,i as c,w as r,J as l,l as o,P as ee,t as x,e as u}from"./index.bd233f80.js";import{u as te,a as se}from"./guests.3cd50ea9.js";import{u as ae,r as N}from"./index.esm.55d45502.js";import"./settings.services.3d73a8a6.js";const le={id:"siteSettings"},ne=e("h1",null,"Table Settings",-1),oe=e("h3",null,[u(" Use these settings to:"),e("br"),u(" (1) Reset and generate a new table layout. "),e("br"),u(" (2) Fill tables based on a sorting algorithim. ")],-1),ie={key:0,class:"p-error",id:"fill-tables-button-help"},re=e("h1",null,"Event Date Settings",-1),ue=e("h3",null,"Update application dates.",-1),de={class:"text-field"},be=e("label",{for:"event-year"},"Current Event Year:",-1),ce={key:0,class:"p-error",id:"event-year-help"},pe={class:"date-field"},me=e("label",{for:"salesopen"},"Sales Open Date:",-1),ve={key:0,class:"p-error",id:"salesopen-help"},fe={class:"date-field"},ye=e("label",{for:"salesclose"},"Sales Close Date:",-1),ge={key:0,class:"p-error",id:"salesclose-help"},he=u("Update Event Dates"),_e=e("h1",null,"Database Reset",-1),we=e("h3",null,[u(" Reset database by deleting all current:"),e("br"),u(" (1) Reservations,"),e("br"),u(" (2) Guests, and"),e("br"),u(" (3) Tables."),e("br"),u(" Users should be manually managed. ")],-1),Se={key:0},xe=e("p",null,[u(" This will reset all tables and remove all guests from their current table assignment. "),e("br"),u(" This action cannot be undone. "),e("br")],-1),ke={id:"full-table-reset-checkbox"},Ce=e("label",{for:"full-table-reset"},"Please confirm that you wish to reset all tables and generate a new layout, and that you understand that this action cannot be reversed.",-1),De={key:0},Te=e("p",null,[u(" This will algorithmically fill the available tables using the default sorting method, and can only be used immediately following a full reset. "),e("br"),u(" This will first sort reservations to tables alphabetically based on the ministry/organization name on the reservation. "),e("br"),u(" Individuals are then sorted to tables within that reservation based on their attendance type (Minister, Deputy Minister, Associate/Assistant Deputy Minister, etc.). "),e("br")],-1),Ve={id:"table-assignment-checkbox"},Ae=e("label",{for:"table-assignment"},"Please confirm that you wish to use the default sorting algorithim to setup the initial table arrangement.",-1),Pe={key:0},Me=e("p",null,"This will completely reset the database for a fresh event year.",-1),Re=e("p",null,[e("b",null,"WARNING: This action CANNOT be undone. Please proceed with caution.")],-1),Ue=e("p",null," All current reservations, guests, and tables will be removed from the event database. ",-1),$e={id:"reset-database-checkbox"},Ne=e("label",{for:"reset-database"},[e("b",null,"Please confirm that you wish to reset the database for the Premier's Awards Event and you understand that this action CANNOT be undone.")],-1),Ee={__name:"AdminSettingsView",setup(Fe){const k=X(),I=Z(),O=te(),E=B(),C=v(!1),D=v(!1),T=v(!1),w=v(!1),_=se(),d=G(),{message:p}=H(G()),{settings:b}=H(B()),a=v(!1),S=ae({year:{required:N},salesopen:{required:N},salesclose:{required:N}},b),V=()=>{a.value=!1},q=async function(m){if(m.preventDefault(),!!await S.value.$validate())try{a.value=!0,d.setMessage({text:"Updating Dates...",type:"info",spinner:!0}),E.updateSettings(b).then(()=>{d.setMessage({text:"Successfully Updated Dates!",type:"success"})})}catch(h){console.error(h),a.value=!0,d.setMessage({text:"Dates could not be updated.",type:"error"})}finally{setTimeout(()=>a.value=!1,1500)}},L=async()=>{try{a.value=!0,d.setMessage({text:"Algorithmically filling tables...",type:"info",spinner:!0}),I.$reset,_.$reset,O.$reset,await _.fillTables().then(async()=>{await _.fillEventTables()}).then(()=>{d.setMessage({text:"Successfully filled tables!",type:"success"})}).then(()=>w.value=!1)}catch(m){console.error(m),a.value=!0,d.setMessage({text:"Tables could not be filled automatically.",type:"error"})}},W=async()=>{try{a.value=!0,d.setMessage({text:"Generating required tables...",type:"info",spinner:!0}),await _.generateNewEventTables().then(()=>{d.setMessage({text:"Successfully generated tables!",type:"success"})}).then(()=>w.value=!0)}catch(m){console.error(m),a.value=!0,d.setMessage({text:"Tables could not be generated.",type:"error"})}},Y=async()=>{try{a.value=!0,d.setMessage({text:"Wiping Database...",type:"info",spinner:!0}),await _.deleteAll().then(()=>{d.setMessage({text:"Successfully deleted registration, guest and table data!",type:"success"})})}catch(m){console.error(m),a.value=!0,d.setMessage({text:"Data could not be deleted.",type:"error"})}},A=v(!1),P=v(!1),M=v(!1),j=()=>{A.value=!0},z=()=>{P.value=!0},J=()=>{M.value=!0};return k.login(),E.fillSettings().then(()=>{b.value.salesopen=new Date(b.value.salesopen),b.value.salesclose=new Date(b.value.salesclose)}),(m,t)=>{const h=g("PrimeMessage"),y=g("PrimeButton"),R=g("PrimeCard"),K=g("InputNumber"),F=g("PrimeCalendar"),U=g("CheckBox"),$=g("PrimeDialog");return n(),f("main",null,[i(ee,{title:"Event Settings",subtitle:"Update PA Event Details"}),e("div",le,[a.value?(n(),c(h,{key:0,show:"",variant:l(p).type,life:5e3,sticky:!1},{default:r(()=>[e("p",null,x(l(p).text),1)]),_:1},8,["variant"])):o("",!0),i(R,{id:"eventDateSettings"},{subtitle:r(()=>[ne]),content:r(()=>[oe,e("ol",null,[e("li",null,[i(y,{label:"Reset All Tables and Generate Default Layout",type:"button",icon:"pi pi-ticket",class:"p-button",onClick:t[0]||(t[0]=s=>j())})]),e("li",null,[i(y,{disabled:!w.value,id:"fill-tables-button",label:"Fill Tables",type:"button",icon:"pi pi-ticket",class:"p-button",onClick:t[1]||(t[1]=s=>z())},null,8,["disabled"]),w.value?o("",!0):(n(),f("small",ie,"Fill Tables option only available after a reset."))])])]),_:1}),l(k).isSuperAdmin?(n(),c(R,{key:1,id:"eventDateSettings"},{subtitle:r(()=>[re]),content:r(()=>[ue,e("form",{class:"event-dates-form",onSubmit:q},[e("div",de,[be,i(K,{id:"event-year",type:"event-year",useGrouping:!1,min:2022,max:2100,allowEmpty:!1,"aria-describedby":"event-year-help",modelValue:l(b).year,"onUpdate:modelValue":t[2]||(t[2]=s=>l(b).year=s),placeholder:"Current Event Year"},null,8,["modelValue"]),l(S).year.$error?(n(),f("small",ce,"Please select the event year.")):o("",!0)]),e("div",pe,[me,i(F,{id:"salesopen",modelValue:l(b).salesopen,"onUpdate:modelValue":t[3]||(t[3]=s=>l(b).salesopen=s),dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy",showTime:!0,showSeconds:!0,hourFormat:"12","aria-describedby":"salesopen-help"},null,8,["modelValue"]),l(S).salesopen.$error?(n(),f("small",ve,"Please select the date and time for table sales to open to public.")):o("",!0)]),e("div",fe,[ye,i(F,{id:"salesclose",modelValue:l(b).salesclose,"onUpdate:modelValue":t[4]||(t[4]=s=>l(b).salesclose=s),dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy",showTime:!0,showSeconds:!0,hourFormat:"12","aria-describedby":"salesclose-help"},null,8,["modelValue"]),l(S).salesclose.$error?(n(),f("small",ge,"Please select the date and time for table sales to close to public.")):o("",!0)]),i(y,{type:"submit",label:"primary",class:"p-button-raised"},{default:r(()=>[he]),_:1})],32)]),_:1})):o("",!0),l(k).isSuperAdmin?(n(),c(R,{key:2,id:"totalResetSettings"},{subtitle:r(()=>[_e]),content:r(()=>[we,i(y,{label:"Reset Everything",type:"button",icon:"pi pi-exclamation-circle",class:"p-button-danger",onClick:t[5]||(t[5]=s=>J())})]),_:1})):o("",!0)]),i($,{visible:A.value,"onUpdate:visible":t[8]||(t[8]=s=>A.value=s),header:"Confirm Reset",modal:!0,class:"p-fluid",onHide:t[9]||(t[9]=s=>V())},{default:r(()=>[a.value?o("",!0):(n(),f("div",Se,[xe,e("div",ke,[i(U,{id:"full-table-reset",name:"full-table-reset",value:"fulltablereset",modelValue:C.value,"onUpdate:modelValue":t[6]||(t[6]=s=>C.value=s),binary:!0},null,8,["modelValue"]),Ce])])),a.value?o("",!0):(n(),c(y,{key:1,disabled:!C.value,type:"button",label:"Confirm Table Reset",onClick:t[7]||(t[7]=s=>W()),class:"p-button-danger",badgeClass:"p-badge-danger"},null,8,["disabled"])),a.value?(n(),c(h,{key:2,show:"",variant:l(p).type,closable:!1},{default:r(()=>[e("p",null,x(l(p).text),1)]),_:1},8,["variant"])):o("",!0)]),_:1},8,["visible"]),i($,{visible:P.value,"onUpdate:visible":t[12]||(t[12]=s=>P.value=s),header:"Confirm AutoFill of Tables",modal:!0,class:"p-fluid",onHide:t[13]||(t[13]=s=>V())},{default:r(()=>[a.value?o("",!0):(n(),f("div",De,[Te,e("div",Ve,[i(U,{id:"table-assignment",name:"table-assignment",value:"tableAssignment",modelValue:D.value,"onUpdate:modelValue":t[10]||(t[10]=s=>D.value=s),binary:!0},null,8,["modelValue"]),Ae])])),a.value?o("",!0):(n(),c(y,{key:1,disabled:!D.value,type:"button",label:"Confirm Table AutoFill",onClick:t[11]||(t[11]=s=>L()),class:"p-button-success",badgeClass:"p-badge-success"},null,8,["disabled"])),a.value?(n(),c(h,{key:2,show:"",variant:l(p).type,closable:!1},{default:r(()=>[e("p",null,x(l(p).text),1)]),_:1},8,["variant"])):o("",!0)]),_:1},8,["visible"]),i($,{visible:M.value,"onUpdate:visible":t[16]||(t[16]=s=>M.value=s),header:"Confirm Total Database Reset",modal:!0,class:"p-fluid",onHide:t[17]||(t[17]=s=>V())},{default:r(()=>[a.value?o("",!0):(n(),f("div",Pe,[Me,Re,Ue,e("div",$e,[i(U,{id:"reset-database",name:"reset-database",value:"fullDatabaseReset",modelValue:T.value,"onUpdate:modelValue":t[14]||(t[14]=s=>T.value=s),binary:!0},null,8,["modelValue"]),Ne])])),a.value?o("",!0):(n(),c(y,{key:1,disabled:!T.value,type:"button",label:"Confirm Database Reset",onClick:t[15]||(t[15]=s=>Y()),class:"p-button-danger",badgeClass:"p-badge-danger"},null,8,["disabled"])),a.value?(n(),c(h,{key:2,show:"",variant:l(p).type,closable:!1},{default:r(()=>[e("p",null,x(l(p).text),1)]),_:1},8,["variant"])):o("",!0)]),_:1},8,["visible"])])}}};var qe=Q(Ee,[["__file","/Users/brysonbest/projects/premiers-awards-attendance/final/pa-app-dev/table-registration/src/views/AdminSettingsView.vue"]]);export{qe as default};
