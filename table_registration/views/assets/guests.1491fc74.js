import{v as r,x as y,a as c,s as h,r as p,y as o}from"./index.433b2a60.js";import{f as T}from"./settings.services.52defd74.js";class w{getAllTables(){return r.get("/tables/seating/")}getTable(e){return r.get(`/tables/seating/${e}`)}getGuestsByTable(e){return r.get(`/tables/seating/${e}/guests`)}createTable(e){return r.post("/tables/seating/",e)}createDefaultArrangment(){return r.post("/tables/seating/generate")}updateTable(e,i){return r.post(`/tables/seating/${e}`,i)}deleteTable(e){return r.post(`/tables/seating/delete/${e}`)}deleteAll(){return r.post("/tables/seating/deleteall")}}var l=new w;const f=y({id:"tablesStore",state:()=>({table:{tablename:"",tablecapacity:null,guests:[]},tables:[]}),getters:{getTablesCount(){return this.tables.length},getGuestCount(){return this.table.guests.length},getIsFull(){return this.table.guests.length>=this.table.tablecapacity}},actions:{async fillGuestsTable(t){const e=await(await l.getGuestsByTable(t)).data[0];this.tables=e.guests||[]},async fillTables(){this.tables=await(await l.getAllTables()).data},async fillTable(t){this.tables=await(await l.getTable(t)).data,this.table=this.tables[0]},async fillOnlyTable(t){const e=await l.getTable(t);return this.table=e.data[0],e.data[0]},async generateNewEventTables(){await l.createDefaultArrangment()},async fillEventTables(){await c().fillAllRegistrations(),await d().fillGuests();const{registrations:t}=h(c()),{guests:e}=h(d()),i=p((T.get("attendancetypes")||[]).map(a=>a.value));t.value.sort((a,s)=>a.organization>s.organization?1:s.organization>a.organization?-1:0),this.tables.map(a=>a.full=!1),this.tables.sort((a,s)=>{const n=a.tablename[0],g=a.tablename[1],u=s.tablename[0],b=s.tablename[1];return g===b&&n>=u?1:n>u&&g<b?-1:0}),t.value.forEach(a=>{!a.submitted||(a.details=[],a.seated=0,a.guests.forEach(s=>{a.details.push(e.value.filter(n=>n._id===s)[0])}),a.details.map(s=>s.order=i.value.findIndex(n=>n===s.attendancetype)),a.details.sort((s,n)=>s.order>n.order?1:n.order>s.order?-1:0),a.details.forEach(s=>{this.tables.forEach(n=>{const g=n.organizations.map(u=>u=u.organization);[...new Set(g)].length,n.tabletype==="Reserved"&&(n.full=!0),n.full!==!0&&(s.seated||(n.guests.push(s),n.organizations.push({organization:s.organization,guestID:s._id}),s.seated=!0,a.seated++,(n.tablecapacity-n.guests.length===0||a.seated===a.guests.length)&&(n.full=!0)))})}))}),this.tables.forEach(async a=>{a.guests.forEach(async s=>{await d().addGuestToTable(s._id,{table:a},a).then(async()=>{this.updateTable(a._id,{organizations:a.organizations})})})})},async addTable(){const{tablename:t="",guid:e="",tablecapacity:i=null}=this.table||{};this.tables.push({tablename:t,guid:e,tablecapacity:i})},async updateTable(t,e){await l.updateTable(t,e)},async registerTable(t,e){const i=t||this.table._id,a=await l.updateTable(i,e);return this.table=a.data,this.table},async registerTableHandler(t){const e=t._id||"";if(await l.getTable(e)){const i=await l.updateTable(e,t);return this.table=i.data,this.table}else{const i=await l.createTable(t);return this.table=i.data,this.table}},async deleteTable(t){await l.deleteTable(t)},async deleteAll(){await l.deleteAll()}}}),d=y({id:"guestsStore",state:()=>({guest:{registration:"",firstname:"",lastname:"",attendancetype:"",organization:"",accessibility:[],dietary:[],notes:""},guests:[]}),getters:{getGuestsCount(){return this.guests.length},getGuestTableStatus(){return this.guest.table}},actions:{async fillGuestsRegistration(t){const e=await(await o.getGuestsByRegistration(t)).data[0];this.guests=e.guests||[]},async fillGuestsTable(t){const e=await(await l.getGuestsByTable(t)).data[0];this.guests=e.guests||[]},async fillGuests(){this.guests=await(await o.getAllGuests()).data},async addRegistrationData(){const t=c();this.guest.registration=await t.getId},async addGuestList(){const{registration:t="",guid:e="",firstname:i="",lastname:a="",attendancetype:s="",organization:n="",accessibility:g=[],dietary:u=[]}=this.guest||{};await this.guests.push({registration:t,guid:e,firstname:i,lastname:a,attendancetype:s,organization:n,accessibility:g,dietary:u})},async updateGuest(t,e){await o.updateGuest(t,e)},async removeGuestFromTable(t,e,i){const a=f();await o.updateGuest(t,e).then(()=>{a.registerTable(i._id,{$pull:{guests:t,organizations:{organization:e.organization,guestID:t}}})})},async addGuestToTable(t,e,i){const a=f();await o.updateGuest(t,e).then(()=>{a.registerTable(i._id,{$push:{guests:t,organizations:{organization:e.organization,guestID:t}}})})},async deleteGuest(t,e){const i=c();await o.deleteGuest(t).then(()=>{i.registerFinancialInformation({$pull:{guests:t}},e)})},async registerGuest(t){const e=c(),i=await o.createGuest(t),a=i.data._id;return await e.registerFinancialInformation({$push:{guests:a}}),this.guest.guid=i.data.guid,this.guest},async registerAllGuests(){for(let t of this.guests)this.registerGuest(t)}}});export{f as a,l as t,d as u};
