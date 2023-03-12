"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.data=void 0;const builder_1=require("../../classes/builder");exports.data={data:(new builder_1.FunctionBuilder).setName("unban").setValue("description","unbans a user").setValue("use","$unban[user;reason?;guild?]").setValue("fields",[{name:"user",description:"the user Id that will be unbanned",type:"snowflake<user>"},{name:"reason",description:'the "why" will be unbanned `(default: none)`',type:"string",optional:!0},{name:"guild",description:"the guild Id where this action will take place `(defalut: ?ContextGuildId)`",type:"snowflake<guild>",optional:!0}]).setValue("example","$unban[772558414605844480;cuz is so hot]").setValue("returns","Boolean"),code:async function(){await this.resolveFields();const[t,e,a=this.data.metadata.ctx.getGuild()?.id]=this.fields.split(!0);var s=this.data.client.guilds.cache.get(a);return s?(s=await s.bans.remove(t,e).catch(e=>(this.warn(`failed to unban ${t.bgYellow} because `+(e.message?.bgYellow||e)),!1)),this.makeReturn(s?"true":"false")):this.warn("invalid guild id provided")}};