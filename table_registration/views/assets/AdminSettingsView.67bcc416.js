import{u as Q,a as X,f as B,r as v,N as G,s as H,b as g,o as n,c as f,d as i,k as e,i as c,w as r,J as l,l as o,P as Z,t as k,e as u}from"./index.0d49d665.js";import{u as ee,a as te}from"./guests.95e89c46.js";import{u as se,r as N}from"./index.esm.c521fda1.js";import"./settings.services.b99c161d.js";const ae={id:"siteSettings"},le=e("h1",null,"Table Settings",-1),ne=e("h3",null,[u(" Use these settings to:"),e("br"),u(" (1) Reset and generate a new table layout. "),e("br"),u(" (2) Fill tables based on a sorting algorithim. ")],-1),oe={key:0,class:"p-error",id:"fill-tables-button-help"},ie=e("h1",null,"Event Date Settings",-1),re=e("h3",null,"Update application dates.",-1),ue={class:"text-field"},de=e("label",{for:"event-year"},"Current Event Year:",-1),be={key:0,class:"p-error",id:"event-year-help"},ce={class:"date-field"},pe=e("label",{for:"salesopen"},"Sales Open Date:",-1),me={key:0,class:"p-error",id:"salesopen-help"},ve={class:"date-field"},fe=e("label",{for:"salesclose"},"Sales Close Date:",-1),ye={key:0,class:"p-error",id:"salesclose-help"},ge=u("Update Event Dates"),he=e("h1",null,"Database Reset",-1),_e=e("h3",null,[u(" Reset database by deleting all current:"),e("br"),u(" (1) Reservations,"),e("br"),u(" (2) Guests, and"),e("br"),u(" (3) Tables."),e("br"),u(" Users should be manually managed. ")],-1),Se={key:0},we=e("p",null,[u(" This will reset all tables and remove all guests from their current table assignment. "),e("br"),u(" This action cannot be undone. "),e("br")],-1),ke={id:"full-table-reset-checkbox"},xe=e("label",{for:"full-table-reset"},"Please confirm that you wish to reset all tables and generate a new layout, and that you understand that this action cannot be reversed.",-1),Ce={key:0},De=e("p",null,[u(" This will algorithmically fill the available tables using the default sorting method, and can only be used immediately following a full reset. "),e("br"),u(" This will first sort reservations to tables alphabetically based on the ministry/organization name on the reservation. "),e("br"),u(" Individuals are then sorted to tables within that reservation based on their attendance type (Minister, Deputy Minister, Associate/Assistant Deputy Minister, etc.). "),e("br")],-1),Te={id:"table-assignment-checkbox"},Ve=e("label",{for:"table-assignment"},"Please confirm that you wish to use the default sorting algorithim to setup the initial table arrangement.",-1),Pe={key:0},Ae=e("p",null,"This will completely reset the database for a fresh event year.",-1),Me=e("p",null,[e("b",null,"WARNING: This action CANNOT be undone. Please proceed with caution.")],-1),Re=e("p",null," All current reservations, guests, and tables will be removed from the event database. ",-1),Ue={id:"reset-database-checkbox"},$e=e("label",{for:"reset-database"},[e("b",null,"Please confirm that you wish to reset the database for the Premier's Awards Event and you understand that this action CANNOT be undone.")],-1),Ie={__name:"AdminSettingsView",setup(Ne){const x=Q(),I=X(),O=ee(),E=B(),C=v(!1),D=v(!1),T=v(!1),S=v(!1),_=te(),d=G(),{message:p}=H(G()),{settings:b}=H(B()),a=v(!1),w=se({year:{required:N},salesopen:{required:N},salesclose:{required:N}},b),V=()=>{a.value=!1},q=async function(m){if(m.preventDefault(),!!await w.value.$validate())try{a.value=!0,d.setMessage({text:"Updating Dates...",type:"info",spinner:!0}),E.updateSettings(b).then(()=>{d.setMessage({text:"Successfully Updated Dates!",type:"success"})})}catch(h){console.error(h),a.value=!0,d.setMessage({text:"Dates could not be updated.",type:"error"})}finally{setTimeout(()=>a.value=!1,1500)}},L=async()=>{try{a.value=!0,d.setMessage({text:"Algorithmically filling tables...",type:"info",spinner:!0}),I.$reset,_.$reset,O.$reset,await _.fillTables().then(async()=>{await _.fillEventTables()}).then(()=>{d.setMessage({text:"Successfully filled tables!",type:"success"})}).then(()=>S.value=!1)}catch(m){console.error(m),a.value=!0,d.setMessage({text:"Tables could not be filled automatically.",type:"error"})}},W=async()=>{try{a.value=!0,d.setMessage({text:"Generating required tables...",type:"info",spinner:!0}),await _.generateNewEventTables().then(()=>{d.setMessage({text:"Successfully generated tables!",type:"success"})}).then(()=>S.value=!0)}catch(m){console.error(m),a.value=!0,d.setMessage({text:"Tables could not be generated.",type:"error"})}},Y=async()=>{try{a.value=!0,d.setMessage({text:"Wiping Database...",type:"info",spinner:!0}),await _.deleteAll().then(()=>{d.setMessage({text:"Successfully deleted registration, guest and table data!",type:"success"})})}catch(m){console.error(m),a.value=!0,d.setMessage({text:"Data could not be deleted.",type:"error"})}},P=v(!1),A=v(!1),M=v(!1),z=()=>{P.value=!0},J=()=>{A.value=!0},j=()=>{M.value=!0};return x.login(),E.fillSettings().then(()=>{b.value.salesopen=new Date(b.value.salesopen),b.value.salesclose=new Date(b.value.salesclose)}),(m,t)=>{const h=g("PrimeMessage"),y=g("PrimeButton"),R=g("PrimeCard"),K=g("InputNumber"),F=g("PrimeCalendar"),U=g("CheckBox"),$=g("PrimeDialog");return n(),f("main",null,[i(Z,{title:"Event Settings",subtitle:"Update PA Event Details"}),e("div",ae,[a.value?(n(),c(h,{key:0,show:"",variant:l(p).type,life:5e3,sticky:!1},{default:r(()=>[e("p",null,k(l(p).text),1)]),_:1},8,["variant"])):o("",!0),i(R,{id:"eventDateSettings"},{subtitle:r(()=>[le]),content:r(()=>[ne,e("ol",null,[e("li",null,[i(y,{label:"Reset All Tables and Generate Default Layout",type:"button",icon:"pi pi-ticket",class:"p-button",onClick:t[0]||(t[0]=s=>z())})]),e("li",null,[i(y,{disabled:!S.value,id:"fill-tables-button",label:"Fill Tables",type:"button",icon:"pi pi-ticket",class:"p-button",onClick:t[1]||(t[1]=s=>J())},null,8,["disabled"]),S.value?o("",!0):(n(),f("small",oe,"Fill Tables option only available after a reset."))])])]),_:1}),l(x).isSuperAdmin?(n(),c(R,{key:1,id:"eventDateSettings"},{subtitle:r(()=>[ie]),content:r(()=>[re,e("form",{class:"event-dates-form",onSubmit:q},[e("div",ue,[de,i(K,{id:"event-year",type:"event-year",useGrouping:!1,min:2022,max:2100,allowEmpty:!1,"aria-describedby":"event-year-help",modelValue:l(b).year,"onUpdate:modelValue":t[2]||(t[2]=s=>l(b).year=s),placeholder:"Current Event Year"},null,8,["modelValue"]),l(w).year.$error?(n(),f("small",be,"Please select the event year.")):o("",!0)]),e("div",ce,[pe,i(F,{id:"salesopen",modelValue:l(b).salesopen,"onUpdate:modelValue":t[3]||(t[3]=s=>l(b).salesopen=s),dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy",showTime:!0,showSeconds:!0,hourFormat:"12","aria-describedby":"salesopen-help"},null,8,["modelValue"]),l(w).salesopen.$error?(n(),f("small",me,"Please select the date and time for table sales to open to public.")):o("",!0)]),e("div",ve,[fe,i(F,{id:"salesclose",modelValue:l(b).salesclose,"onUpdate:modelValue":t[4]||(t[4]=s=>l(b).salesclose=s),dateFormat:"mm/dd/yy",placeholder:"mm/dd/yyyy",showTime:!0,showSeconds:!0,hourFormat:"12","aria-describedby":"salesclose-help"},null,8,["modelValue"]),l(w).salesclose.$error?(n(),f("small",ye,"Please select the date and time for table sales to close to public.")):o("",!0)]),i(y,{type:"submit",label:"primary",class:"p-button-raised"},{default:r(()=>[ge]),_:1})],32)]),_:1})):o("",!0),l(x).isSuperAdmin?(n(),c(R,{key:2,id:"totalResetSettings"},{subtitle:r(()=>[he]),content:r(()=>[_e,i(y,{label:"Reset Everything",type:"button",icon:"pi pi-exclamation-circle",class:"p-button-danger",onClick:t[5]||(t[5]=s=>j())})]),_:1})):o("",!0)]),i($,{visible:P.value,"onUpdate:visible":t[8]||(t[8]=s=>P.value=s),header:"Confirm Reset",modal:!0,class:"p-fluid",onHide:t[9]||(t[9]=s=>V())},{default:r(()=>[a.value?o("",!0):(n(),f("div",Se,[we,e("div",ke,[i(U,{id:"full-table-reset",name:"full-table-reset",value:"fulltablereset",modelValue:C.value,"onUpdate:modelValue":t[6]||(t[6]=s=>C.value=s),binary:!0},null,8,["modelValue"]),xe])])),a.value?o("",!0):(n(),c(y,{key:1,disabled:!C.value,type:"button",label:"Confirm Table Reset",onClick:t[7]||(t[7]=s=>W()),class:"p-button-danger",badgeClass:"p-badge-danger"},null,8,["disabled"])),a.value?(n(),c(h,{key:2,show:"",variant:l(p).type,closable:!1},{default:r(()=>[e("p",null,k(l(p).text),1)]),_:1},8,["variant"])):o("",!0)]),_:1},8,["visible"]),i($,{visible:A.value,"onUpdate:visible":t[12]||(t[12]=s=>A.value=s),header:"Confirm AutoFill of Tables",modal:!0,class:"p-fluid",onHide:t[13]||(t[13]=s=>V())},{default:r(()=>[a.value?o("",!0):(n(),f("div",Ce,[De,e("div",Te,[i(U,{id:"table-assignment",name:"table-assignment",value:"tableAssignment",modelValue:D.value,"onUpdate:modelValue":t[10]||(t[10]=s=>D.value=s),binary:!0},null,8,["modelValue"]),Ve])])),a.value?o("",!0):(n(),c(y,{key:1,disabled:!D.value,type:"button",label:"Confirm Table AutoFill",onClick:t[11]||(t[11]=s=>L()),class:"p-button-success",badgeClass:"p-badge-success"},null,8,["disabled"])),a.value?(n(),c(h,{key:2,show:"",variant:l(p).type,closable:!1},{default:r(()=>[e("p",null,k(l(p).text),1)]),_:1},8,["variant"])):o("",!0)]),_:1},8,["visible"]),i($,{visible:M.value,"onUpdate:visible":t[16]||(t[16]=s=>M.value=s),header:"Confirm Total Database Reset",modal:!0,class:"p-fluid",onHide:t[17]||(t[17]=s=>V())},{default:r(()=>[a.value?o("",!0):(n(),f("div",Pe,[Ae,Me,Re,e("div",Ue,[i(U,{id:"reset-database",name:"reset-database",value:"fullDatabaseReset",modelValue:T.value,"onUpdate:modelValue":t[14]||(t[14]=s=>T.value=s),binary:!0},null,8,["modelValue"]),$e])])),a.value?o("",!0):(n(),c(y,{key:1,disabled:!T.value,type:"button",label:"Confirm Database Reset",onClick:t[15]||(t[15]=s=>Y()),class:"p-button-danger",badgeClass:"p-badge-danger"},null,8,["disabled"])),a.value?(n(),c(h,{key:2,show:"",variant:l(p).type,closable:!1},{default:r(()=>[e("p",null,k(l(p).text),1)]),_:1},8,["variant"])):o("",!0)]),_:1},8,["visible"])])}}};export{Ie as default};
