"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.data=void 0;const builder_1=require("../../classes/builder"),utils_1=require("../../classes/utils");exports.data={data:(new builder_1.FunctionBuilder).setName("addButton").setValue("description","add a button component at the instance.").setValue("use","$addButton[label;style;customId;disabled?;emoji?]").setValue("fields",[{name:"label",description:"The text that appears on the button.",type:"string[max_length=80]"},{name:"style",description:"The button style `(Primary=1; Secondary=2; Success=3; Danger=4; Link=5)`.",type:"number[1,5]"},{name:"customId",description:"Custom identifier for the button `(If the style is 5, the URL should go here)`.",type:"string[max_length=80]"},{name:"disabled",description:"Whether the button is disabled `(default: false)`.",type:"boolean",optional:!0},{name:"emoji",description:"The emoji that appears on the button.",type:"string",optional:!0}]).setValue("example","$addButton[press me!;1;button_1]").setValue("returns","Void"),code:async function(){await this.resolveFields();var[e,t,s,a="false",i]=this.fields.split(!0);return(a={disabled:utils_1.Utils.booleanify(a),style:Number(t),label:e,emoji:i})["5"===t?"url":"customId"]=s,this.meta.ctn.addButton(a),this.makeReturn("")}};