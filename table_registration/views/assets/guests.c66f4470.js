import{v as r,x as p,a as o,s as h,r as f,y as u}from"./index.2f0c1db2.js";import{f as y}from"./settings.services.952672c3.js";class w{getAllTables(){return r.get("/tables/seating/")}getTable(t){return r.get(`/tables/seating/${t}`)}getGuestsByTable(t){return r.get(`/tables/seating/${t}/guests`)}createTable(t){return r.post("/tables/seating/",t)}createDefaultArrangment(){return r.post("/tables/seating/generate")}updateTable(t,s){return r.post(`/tables/seating/${t}`,s)}pushToTable(t,s){return r.post(`/tables/seating/${t}/push`,s)}pullFromTable(t,s){return r.post(`/tables/seating/${t}/pull`,s)}deleteTable(t){return r.post(`/tables/seating/delete/${t}`)}deleteAll(){return r.post("/tables/seating/deleteall")}}var n=new w;const T=p({id:"tablesStore",state:()=>({table:{tablename:"",tablecapacity:null,guests:[]},tables:[]}),getters:{getTablesCount(){return this.tables.length},getGuestCount(){return this.table.guests.length},getIsFull(){return this.table.guests.length>=this.table.tablecapacity}},actions:{async fillGuestsTable(e){const t=await(await n.getGuestsByTable(e)).data[0];this.tables=t.guests||[]},async fillTables(){this.tables=await(await n.getAllTables()).data},async fillTable(e){this.tables=await(await n.getTable(e)).data,this.table=this.tables[0]},async fillOnlyTable(e){const t=await n.getTable(e);return this.table=t.data[0],t.data[0]},async generateNewEventTables(){await n.createDefaultArrangment()},async fillEventTables(){await o().fillAllRegistrations(),await c().fillGuests();const{registrations:e}=h(o()),{guests:t}=h(c()),s=f((y.get("attendancetypes")||[]).map(a=>a.value));e.value.sort((a,i)=>a.organization>i.organization?1:i.organization>a.organization?-1:0),this.tables.map(a=>a.full=!1),this.tables.sort((a,i)=>{const l=a.tablename[0],b=a.tablename[1],g=i.tablename[0],d=i.tablename[1];return b===d&&l>=g?1:l>g&&b<d?-1:0}),e.value.forEach(a=>{!a.submitted||(a.details=[],a.seated=0,a.guests.forEach(i=>{a.details.push(t.value.filter(l=>l._id===i)[0])}),a.details.map(i=>i.order=s.value.findIndex(l=>l===i.attendancetype)),a.details.sort((i,l)=>i.order>l.order?1:l.order>i.order?-1:0),a.details.forEach(i=>{this.tables.forEach(l=>{l.tabletype==="Reserved"&&(l.full=!0),l.full!==!0&&(i.seated||(l.guests.push(i),l.organizations.push({organization:i.organization,guestID:i._id}),i.seated=!0,a.seated++,(l.tablecapacity-l.guests.length===0||a.seated===a.guests.length)&&(l.full=!0)))})}))}),this.tables.forEach(async a=>{a.guests.forEach(async i=>{await c().addGuestToTable(i._id,{table:a},a).then(async()=>{this.updateTable(a._id,{organizations:a.organizations})})})})},async addTable(){const{tablename:e="",guid:t="",tablecapacity:s=null}=this.table||{};this.tables.push({tablename:e,guid:t,tablecapacity:s})},async updateTable(e,t){await n.updateTable(e,t)},async registerTable(e,t){const s=e||this.table._id,a=await n.updateTable(s,t);return this.table=a.data,this.table},async pushTableDetails(e,t){const s=e||this.table._id,a=await n.pushToTable(s,t);return this.table=a.data,this.table},async pullTableDetails(e,t){const s=e||this.table._id,a=await n.pullFromTable(s,t);return this.table=a.data,this.table},async registerTableHandler(e){const t=e._id||"";if(await n.getTable(t)){const s=await n.updateTable(t,e);return this.table=s.data,this.table}else{const s=await n.createTable(e);return this.table=s.data,this.table}},async deleteTable(e){await n.deleteTable(e)},async deleteAll(){await n.deleteAll()}}}),c=p({id:"guestsStore",state:()=>({guest:{registration:"",firstname:"",lastname:"",attendancetype:"",organization:"",accessibility:[],dietary:[],notes:""},guests:[]}),getters:{getGuestsCount(){return this.guests.length},getGuestTableStatus(){return this.guest.table}},actions:{async fillGuestsRegistration(e){const t=await(await u.getGuestsByRegistration(e)).data[0];this.guests=t.guests||[]},async fillGuestsTable(e){const t=await(await n.getGuestsByTable(e)).data[0];this.guests=t.guests||[]},async fillGuests(){this.guests=await(await u.getAllGuests()).data},async addRegistrationData(){const e=o();this.guest.registration=await e.getId},async addGuestList(){const{registration:e="",guid:t="",firstname:s="",lastname:a="",attendancetype:i="",organization:l="",accessibility:b=[],dietary:g=[]}=this.guest||{};await this.guests.push({registration:e,guid:t,firstname:s,lastname:a,attendancetype:i,organization:l,accessibility:b,dietary:g})},async updateGuest(e,t){await u.updateGuest(e,t)},async removeGuestFromTable(e,t,s){const a=T();await u.updateGuest(e,t).then(()=>{a.pullTableDetails(s._id,{guests:e,organizations:{organization:t.organization,guestID:e}})})},async addGuestToTable(e,t,s){const a=T();await u.updateGuest(e,t).then(()=>{a.pushTableDetails(s._id,{guests:e,organizations:{organization:t.organization,guestID:e}})})},async deleteGuest(e,t){const s=o();await u.deleteGuest(e).then(()=>{s.pullFinancialInformation({guests:e},t)})},async registerGuest(e){const t=o(),s=await u.createGuest(e),a=s.data._id;return await t.pushFinancialInformation({guests:a}),this.guest.guid=s.data.guid,this.guest},async registerAllGuests(){for(let e of this.guests)this.registerGuest(e)}}});export{T as a,n as t,c as u};
