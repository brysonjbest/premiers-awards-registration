import{_ as C,u as b,N as V,s as h,r as R,z as w,b as p,o as r,c as g,i as u,w as d,k as y,t as M,l as k,d as l,T as P,e as f,J as B,P as S}from"./index.fe8c604b.js";import{u as N,r as U,e as T}from"./index.esm.720d4be9.js";const E={props:{edit:Boolean},setup(){const c=b(),t=V(),{message:a}=h(V()),e=R(!1),{user:s}=h(b()),_={firstname:{required:U},lastname:{required:U},email:{required:U,email:T}},m=N(_,s),n=w(()=>s.value.email&&s.value.firstname&&s.value.lastname);return{user:s,message:a,rules:_,v$:m,isRegistered:function(){return c.getUser.role},validation:n,register:async function(){try{e.value=!0,t.setMessage({text:"Registering user...",type:"info",spinner:!0}),await P.registerUser(s.value).then(()=>{t.setMessage({text:"Successfully registered user!",type:"success"})})}catch(i){console.error(i),e.value=!0,t.setMessage({text:"User could not be registered.",type:"error"})}},update:async function(){try{e.value=!0,t.setMessage({text:"Updating user...",type:"info",spinner:!0}),await P.updateUser(s.value.guid,s.value),t.setMessage({text:"Successfully updated user!",type:"success"})}catch(i){console.error(i),e.value=!0,t.setMessage({text:"User could not be updated.",type:"error"})}},activeMessage:e}}},D={key:0},I={key:1},Y=f(" You are currently registered as a(n) "),q=f(". "),z=f("Update"),A=f("Register");function H(c,t,a,e,s,_){const m=p("PrimeMessage"),n=p("InputText"),v=p("PrimeButton"),x=p("PrimeCard");return r(),g("div",null,[e.isRegistered()?(r(),u(m,{key:0,show:"",variant:"info",closable:!1},{default:d(()=>[e.user.role==="inactive"?(r(),g("p",D," Your registration is currently under review. Please check back regularly for updates. ")):(r(),g("p",I,[Y,y("b",null,M(e.user.role),1),q]))]),_:1})):k("",!0),e.activeMessage?(r(),u(m,{key:1,show:"",variant:e.message.type,life:5e3,sticky:!1},{default:d(()=>[y("p",null,M(e.message.text),1)]),_:1},8,["variant"])):k("",!0),!e.isRegistered()||a.edit?(r(),u(x,{key:2},{content:d(()=>[y("form",null,[l(n,{id:"input-user-register-username",title:"username",disabled:!0,value:e.user.username},null,8,["value"]),l(n,{id:"input-user-register-firstname",title:"first name",modelValue:e.user.firstname,"onUpdate:modelValue":t[0]||(t[0]=o=>e.user.firstname=o),placeholder:"Enter user's given name"},null,8,["modelValue"]),l(n,{id:"input-user-register-lastname",title:"last name",modelValue:e.user.lastname,"onUpdate:modelValue":t[1]||(t[1]=o=>e.user.lastname=o),placeholder:"Enter user's last name"},null,8,["modelValue"]),l(n,{type:"email",title:"email address",id:"input-user-register-email",modelValue:e.user.email,"onUpdate:modelValue":t[2]||(t[2]=o=>e.user.email=o),placeholder:"Enter user's email"},null,8,["modelValue"]),a.edit?(r(),u(v,{key:0,onClick:e.update,disabled:!e.validation,class:"m-2",type:"button",variant:"info"},{default:d(()=>[z]),_:1},8,["onClick","disabled"])):(r(),u(v,{key:1,onClick:e.register,disabled:!e.validation,class:"m-2",type:"button",variant:"info"},{default:d(()=>[A]),_:1},8,["onClick","disabled"]))])]),_:1})):k("",!0)])}var J=C(E,[["render",H]]);const G={__name:"NewUser",props:{update:Boolean},setup(c){const a=c.update||!1;return(e,s)=>(r(),g("main",null,[l(S,{title:"User Profile",subtitle:"Update Personal Profile Details"}),l(J,{edit:B(a)},null,8,["edit"])]))}};export{G as default};
