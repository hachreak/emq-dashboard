webpackJsonp([1],{"5zde":function(e,t,n){n("zQR9"),n("qyJz"),e.exports=n("FeBl").Array.from},"89Vc":function(e,t){},Gu7T:function(e,t,n){"use strict";t.__esModule=!0;var i,s=n("c/Tr"),a=(i=s)&&i.__esModule?i:{default:i};t.default=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,a.default)(e)}},Zrlr:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"c/Tr":function(e,t,n){e.exports={default:n("5zde"),__esModule:!0}},cpun:function(e,t){e.exports={"bridge.kafka.hook.message.delivered.$name":{action:"on_message_delivered",filter:"#",topic:"message_delivered",strategy:"random",key:""},"bridge.kafka.hook.message.acked.$name":{action:"on_message_acked",filter:"#",topic:"message_acked",strategy:"random",key:""},"bridge.kafka.hook.message.publish.$name":{action:"on_message_publish",filter:"#",topic:"message_publish",strategy:"random",key:""},"bridge.kafka.hook.session.unsubscribed.$name":{action:"on_session_unsubscribed",filter:"#",topic:"session_unsubscribed",strategy:"random",key:""},"bridge.kafka.hook.session.subscribed.$name":{action:"on_session_subscribed",filter:"#",topic:"session_subscribed",strategy:"random",key:""},"bridge.kafka.hook.client.disconnected.$name":{action:"on_client_disconnected",topic:"client_disconnected",strategy:"random",key:""},"bridge.kafka.hook.client.connected.$name":{action:"on_client_connected",topic:"client_connected",strategy:"random",key:""}}},fBQ2:function(e,t,n){"use strict";var i=n("evD5"),s=n("X8DO");e.exports=function(e,t,n){t in e?i.f(e,t,s(0,n)):e[t]=n}},i6Hv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("Gu7T"),s=n.n(i),a=n("pFYg"),r=n.n(a),o=n("fZjL"),c=n.n(o),l=n("mvHQ"),d=n.n(l),u=n("Dd8w"),f=n.n(u),p={name:"import-cloud",props:{option:{type:Object,required:!0},visible:{type:Boolean,default:!1}},data:function(){return{resources:[],instance:{}}},watch:{visible:"loadData"},methods:{loadData:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=arguments[1]||this.option.serviceName;t&&n&&(this.instance={},this.$httpGet("/services/"+n+"/available_deps",{platform:this.option.platform||this.$env.platform}).then(function(t){var n=t.data,i=n.enable,s=n.clusters;if(i)return e.resources=s.map(function(e){var t=e.hosts&&e.hosts[0]||{},n=t.cpu,i=void 0===n?1:n,s=t.mem,a=void 0===s?1:s;return e.info={cpu:i,mem:a,node:e.hosts?e.hosts.length:1},e}),e.$emit("ready")}))},handleSelected:function(e){e.cluster_id===this.instance.cluster_id?this.instance={}:(this.instance=f()({},e),this.instance.conf=this.instance.config)},handleImport:function(){this.$emit("import",this.instance)}},created:function(){this.loadData()}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"import-cloud"},[n("el-dialog",{staticClass:"config-config",attrs:{width:"500px",title:e.$t("config.importCloud"),visible:e.visible},on:{close:function(t){e.$emit("close")}}},[n("p",[e._v(e._s(e.option.serviceName)+" "+e._s(e.$t("config.available")))]),e._v(" "),n("el-row",{staticClass:"resource-list",attrs:{gutter:10}},[0===e.resources.length?n("el-col",{staticClass:"blank-block",attrs:{span:24}},[n("p",[e._v(e._s(e.$t("error.blank")))])]):n("div",e._l(e.resources,function(t,i){return n("el-col",{key:i,attrs:{span:12},nativeOn:{click:function(n){e.handleSelected(t)}}},[n("div",{class:{"resource-item":!0,selected:t.cluster_id===e.instance.cluster_id}},[n("span",[e._v("\n              "+e._s(t.cluster_id)+"\n            ")]),e._v(" "),n("p",[e._v("\n              "+e._s(t.info.cpu+" Core "+t.info.mem+" MB "+t.info.node+" Nodes ")+"\n            ")])])])}))],1),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{staticClass:"cache-btn",attrs:{type:"text"},on:{click:function(t){e.$emit("close")}}},[e._v("\n        "+e._s(e.$t("oper.cancel"))+"\n      ")]),e._v(" "),n("el-button",{staticClass:"confirm-btn",attrs:{type:"success",disabled:!e.instance.cluster_id},on:{click:e.handleImport}},[e._v("\n        "+e._s(e.$t("oper.confirm"))+"\n      ")])],1)],1)],1)},staticRenderFns:[]};var v=n("VU/8")(p,m,!1,function(e){n("l4cm")},null,null).exports,h={name:"import-config",props:{serviceName:{type:String,required:!0},visible:{type:Boolean,default:!1}},data:function(){return{type:"service",fileName:"",content:"",description:"",feature:{},instances:{},selectedInstance:{},configTree:[],defaultExpanded:[]}},methods:{handleReader:function(e){var t=this;if(e){this.fileName=e.name;var n=new FileReader;n.onload=function(){t.configParse(n.result)},n.readAsText(e)}return!1},handleTreeClick:function(e,t){t||e.name!==this.selectedInstance.id||(this.selectedInstance={}),t&&!e.children&&(this.$refs.node.setCheckedNodes([]),this.$refs.node.setCheckedNodes([e]),this.selectedInstance=this.instances[e.name])},configParse:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{var n=JSON.parse(t);if(!["service","cluster"].includes(n.type))throw new Error(this.$t("config.not_a_valid_config_file"));this.configTree=[],this.content=t,this.feature=n.feature,this.description=n.description,this.instances={},"service"===n.type?(this.defaultExpanded.push(n.name),this.configTree.push({name:n.name,label:n.name,disabled:!0,children:n.payload.map(function(t){return e.instances[t.id]=t,{name:t.id,label:t.name+"  "+t.descr,disabled:t.service!==e.serviceName}})})):n.payload.forEach(function(t){t.name===e.serviceName&&e.defaultExpanded.push(t.name),e.configTree.push({name:t.name,label:t.name,disabled:!0,children:t.payload.map(function(t){return e.instances[t.id]=t,{name:t.id,label:t.name+"  "+t.descr,disabled:t.service!==e.serviceName}})})})}catch(e){this.configTree=[],this.handleErrorMessage(e)}},handleErrorMessage:function(e){var t=e.message.includes("$i18n_")?this.$t("config."+e.message.replace("$i18n_","")):e.message;this.$message.error(t||this.$t("config.import_file_error"))},handleImport:function(){this.$emit("import",this.selectedInstance)}},created:function(){}},g={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"import-config"},[n("el-dialog",{staticClass:"config-dialog",attrs:{width:"500px",visible:e.visible,title:e.$t("config.importConfig")},on:{open:function(t){e.configTree=[]},close:function(t){e.$emit("close")}}},[0===e.configTree.length?n("div",{staticClass:"config__upload"},[n("el-upload",{attrs:{action:"#",accept:"application/json","before-upload":e.handleReader}},[n("el-button",{attrs:{slot:"trigger",type:"success",size:"large",round:""},slot:"trigger"},[e._v("\n          "+e._s(e.$t("config.selectConfigFile"))+"\n          "),n("i",{staticClass:"el-icon-upload el-icon--right"})]),e._v(" "),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n          "+e._s(e.$t("config.configFileMustBeJson"))+"\n        ")])],1)],1):n("div",{staticClass:"config__tree"},[n("div",{staticClass:"config__info"},[n("p",[e._v(e._s(e.fileName)+" "+e._s(e.$t("config.createBy"))+" "+e._s(e.feature.owner)+" "+e._s(e.$t("config.create"))+"\n          "),n("el-popover",{attrs:{placement:"right",width:"200",trigger:"hover"}},[n("div",{staticClass:"config__details"},[e._v("\n              "+e._s(e.$t("config.createUser"))+"："+e._s(e.feature.owner)),n("br"),e._v("\n              "+e._s(e.$t("config.nodeName"))+"："+e._s(e.feature.nodeName)),n("br"),e._v("\n              "+e._s(e.$t("config.host"))+"："+e._s(e.feature.host)),n("br"),e._v("\n              "+e._s(e.$t("config.descr"))+"："+e._s(e.description)),n("br"),e._v("\n              "+e._s(e.$t("config.createAt"))+"："+e._s(e.feature.createAt)+"\n            ")]),e._v(" "),n("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[e._v("\n              "+e._s(e.$t("config.more"))+"\n            ")])],1),e._v(" "),n("el-button",{staticClass:"re-select",attrs:{type:"text"},on:{click:function(t){e.configTree=[]}}},[e._v("\n            "+e._s(e.$t("config.reSelect"))+"\n          ")])],1)]),e._v(" "),n("el-tree",{ref:"node",attrs:{data:e.configTree,"default-expanded-keys":e.defaultExpanded,accordion:"","show-checkbox":"","node-key":"name"},on:{"check-change":e.handleTreeClick}})],1),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("el-button",{staticClass:"cache-btn",attrs:{type:"text"},on:{click:function(t){e.$emit("close")}}},[e._v("\n        "+e._s(e.$t("oper.cancel"))+"\n      ")]),e._v(" "),n("el-button",{staticClass:"confirm-btn",attrs:{type:"success",disabled:!e.selectedInstance.name||0===e.configTree.length},on:{click:e.handleImport}},[e._v("\n        "+e._s(e.$t("oper.confirm"))+"\n      ")])],1)])],1)},staticRenderFns:[]};var _=n("VU/8")(h,g,!1,function(e){n("89Vc")},null,null).exports,y=n("woOf"),b=n.n(y),$=n("Zrlr"),k=n.n($),C=n("wxAW"),w=n.n(C),x=n("CqLJ"),N=n.n(x),I=n("olkN"),K=function(){function e(){k()(this,e)}return w()(e,null,[{key:"validate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={type:e.type};if("service"===e.type)n.errors=this.validateSchema(e);else{if("cluster"!==e.type)throw new Error("Not a valid config file");e.type="clusetr"}return this.validateSchema(e,t)}},{key:"rulesConstructor",value:function(){var e=this,t={};return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach(function(n){n.selfKey=n.key.replace(/\./g,"__"),n.required&&(t[n.selfKey]||(t[n.selfKey]=[]),t[n.selfKey].push({required:!0,message:n.key+" is required"})),"number"==typeof n.default&&(t[n.selfKey]||(t[n.selfKey]=[]),t[n.selfKey].push({validator:e.validateNumber}))}),t}},{key:"validateNumber",value:function(e,t,n){t||n(),isNaN(Number(t))&&n("must be Number"),n()}},{key:"validateSchema",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[];return c()(t).forEach(function(i){var s=t[i];if(s.required&&!e[i]&&n.push(i+" is required"),e[i]){var a=r()(s.default),o=r()(e[i]);"object"!==a&&o!==a?(e[i]=s.default,n.push(i+" must be "+a)):Array.isArray(e[i])&&!s.default.includes(e[i])&&(e[i]=s.default[0],n.push(i+" must in "+s.default.join(", ")))}}),n}},{key:"configParse",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={type:e.type};if("service"===e.type)t.name=e.name;else{if("cluster"!==e.type)throw new Error("$i18n_not_a_valid_config_file");console.log(1)}}},{key:"exportConfig",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(!Array.isArray(t)||0===t.length)throw new Error("$i18n_payload_error");var n={type:"service",description:"",feature:{createAt:N()("yyyy-mm-dd HH:MM:ss"),host:window.location.host,owner:I.a.state.user.username,nodeName:I.a.state.currentNode||""}},i=b()(n,f()({},e,{payload:t}));return i.fileName="EMQ X-"+i.type+" config-"+i.name+"-"+i.description+"-"+N()("yyyymmddHHMM")+".json",d()(i,null,4)}},{key:"renderDownload",value:function(e,t){var n=document.createElement("a");n.download=e;var i=new Blob([t]);n.href=URL.createObjectURL(i),n.click()}}]),e}(),E=n("cpun"),A=n.n(E),D={name:"service-details",components:{ImportCloud:v,ImportConfig:_},data:function(){return{cloudAvailable:!1,importConfig:!1,importCloud:!1,selecting:!1,willSelect:"",serviceName:"",instanceName:"",instanceID:"",service:{},record:{},rules:{},dict:A.a,view:!0,instance:{name:"",descr:"",serviceName:""},textAreaList:[],selectedAdvancedConfig:[],instanceRules:{name:[{required:!0,message:this.$t("alert.required")}],descr:[{required:!0,message:this.$t("alert.required")}]},items:[],advance:[],multiple:[],multipleConfig:[]}},methods:{handleMultiple:function(e,t){if(0===t){var n=f()({},this.record[e][0]);this.record[e].push(n)}else{var i=[];this.record[e].forEach(function(e,n){n!==t&&i.push(e)}),this.$set(this.record,e,i)}},handleRemoveOption:function(e){var t=[];this.multipleConfig.forEach(function(n,i){e!==i&&t.push(f()({},n))}),this.multipleConfig=t},handleImport:function(){this.configTree=[],this.importConfig=!0},handleImportCloud:function(){this.importCloud=!0},handleSelectedOption:function(e){var t=this.multiple.find(function(t){return t.value===e.value});t&&(e.default=f()({},t.default),e.descr=t.descr)},handleImportMultiple:function(){this.multipleConfig.push(JSON.parse(d()(this.multiple[0])))},handleImported:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.importConfig=!1,this.importCloud=!1,t.conf&&(c()(t.conf).forEach(function(n){t.conf[n]&&e.$set(e.record,n.replace(/\./g,"__"),t.conf[n])}),this.$message.success(this.$t("config.importSuccess")))},updateConfig:function(){var e=this;this.$refs.instance.validate(function(t){t&&e.$refs.record.validate(function(t){if(t){var n={};c()(e.record).forEach(function(t){var i=t.replace(/__/g,".");e.record[t]&&(n[i]=e.record[t])}),e.multipleConfig.forEach(function(e){if(e.default){e.key=e.value.replace(/__/g,".");var t=e.key+":"+Math.random().toString(16).slice(2,8);"custom"===e.default.strategy&&e.default.key||delete e.default.key,n[t]=d()(e.default)}}),e.instanceID?e.$httpPut("/instances/"+e.instanceID,{name:e.instance.name,descr:e.instance.descr,config:n}).then(function(){e.$message.success(e.$t("oper.editSuccess")),e.$router.push("/instances")}).catch(e.handleError):(e.instance.serviceName=e.serviceName,e.$httpPost("/instances",f()({},e.instance,{config:n})).then(function(){e.$message.success(e.$t("success.createSuccess")),e.$router.push("/instances")}).catch(e.handleError))}})})},loadData:function(){var e=this;this.$httpGet("/services/"+this.serviceName).then(function(t){e.service=t.data,e.rules=K.rulesConstructor(t.data.schema),e.initForm()}).catch(this.handleError)},handleError:function(e){this.$message.error(e.message||this.$t("error.initializationError"))},initInstanceForm:function(){var e=this,t={};this.service.schema.forEach(function(e){t[e.key]=e}),c()(this.instance.conf).forEach(function(n){var i=e.instance.conf[n];if(!n.includes(".$name")||n.includes(".$name:")){var s=/\.\$name:(.+)/g.exec(n)?/\.\$name:(.+)/g.exec(n)[1]:null,a=(n=n.replace(/\.\$name.*/g,".$name")).replace(/\./g,"__");if(i)if(e.dict[n]){var r={};try{r=JSON.parse(i)}catch(e){console.log(e)}e.multipleConfig.push({value:a,default:r,hash:s,descr:t[n]?t[n].descr:""})}else e.$set(e.record,a,e.instance.conf[n])}})},loadInstance:function(){var e=this;this.$httpGet("/instances/"+this.instanceID).then(function(t){e.instance=t.data,e.instanceName=t.data.name,e.serviceName=t.data.service,e.$refs.cloud.loadData(!0,e.serviceName),e.loadData()}).catch(this.handleError)},initForm:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.items=[],this.textAreaList=[],this.service.schema.forEach(function(n){n.type=r()(n.default),n.selfKey=n.key.replace(/\./g,"__"),e.dict[n.key]&&(n.$value=[e.dict[n.key]]),"object"===n.type&&(n.type=Array.isArray(n.default)?"array":n.type),"array"===n.type?n.value=n.default[0]||"":n.value=n.default||"",e.instanceID&&!t||(e.dict[n.key]?e.$set(e.record,n.selfKey,[e.dict[n]]):e.$set(e.record,n.selfKey,n.value)),n.value.toString().length>35?e.textAreaList.push(n):e.items.push(n),e.dict[n.key]?(e.$delete(e.record,n.selfKey),e.multiple.push({label:n.key.replace(/(bridge\.kafka\.hook\.)|(\.\$name)/g,""),value:n.selfKey,key:n.key,descr:n.descr,default:e.dict[n.key]})):n.required||n.value||(e.advance.push(n),e.$delete(e.record,n.selfKey))}),this.items=[].concat(s()(this.items),s()(this.textAreaList)),this.instanceID&&!t&&this.initInstanceForm()},handleExport:function(){var e=this;this.$prompt(this.$t("instances.remarkConfig"),this.$t("config.exportConfig"),{confirmButtonText:this.$t("config.ex"),confirmButtonClass:"confirm-btn",cancelButtonText:this.$t("oper.cancel"),cancelButtonClass:"cache-btn el-button--text",inputPattern:/.{3,}/,inputErrorMessage:this.$t("config.atLeastThree")}).then(function(t){var n=t.value,i=K.exportConfig({name:e.serviceName,description:n},[e.instance]);K.renderDownload(JSON.parse(i).fileName,i)}).catch(function(t){"cancel"!==t&&e.$message.error(e.$t("alert.failure")+": "+t.message)})},handleRouter:function(){this.$route.path.includes("/create")?(this.serviceName=this.$route.params.serviceName,this.instanceID=!1,this.view=!1,this.loadData()):(this.instanceID=this.$route.params.instanceID,this.view="edit"!==this.$route.query.oper,this.loadInstance())},moreConfig:function(){var e=this,t=[];this.selectedAdvancedConfig.forEach(function(n){void 0===e.record[n.selfKey]&&(e.dict[n.key]?e.$set(e.record,n.selfKey,[e.dict[n.key]]):e.$set(e.record,n.selfKey,n.value)),t.push(n.selfKey)}),this.advance.forEach(function(n){t.includes(n.selfKey)||e.$delete(e.record,n.selfKey)}),this.selecting=!1}},created:function(){this.handleRouter()},computed:{moreConfigShow:function(){return this.multipleConfig.length>0||(this.multiple.length>0&&!this.view||(0!==this.multipleConfig.length||!this.view)&&void 0)}},beforeRouteLeave:function(e,t,n){""===e.path?n("/instances"):n()}},S={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"service-details"},[n("div",{staticClass:"page-title"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",{staticClass:"uppercase",nativeOn:{click:function(t){e.$router.go(-1)}}},[e._v("\n        "+e._s(e.$t("instances.instances"))+"\n      ")]),e._v(" "),n("el-breadcrumb-item",{staticClass:"breadcrumb-name"},[e._v("\n        "+e._s(e.instanceID?e.instanceName:e.$t("oper.create"))+"\n      ")])],1)],1),e._v(" "),n("el-card",{class:["el-card--self",e.view?"card-view":""]},[n("div",{attrs:{slot:"header"},slot:"header"},[e.instanceID?e._e():n("span",[e._v("\n        "+e._s(e.instanceID?e.$t("oper.edit")+" "+e.instanceName:e.$t("oper.from")+" "+e.serviceName+" "+e.$t("oper.create"))+"\n      ")]),e._v(" "),e.instanceID&&e.view?n("i",{staticClass:"el-icon-edit-outline edit-btn",on:{click:function(t){e.view=!1}}}):e._e(),e._v(" "),e.instanceID&&e.view?n("i",{staticClass:"el-icon-download edit-btn",on:{click:e.handleExport}}):e.instanceID&&!e.view?n("i",{staticClass:"el-icon-view edit-btn",on:{click:function(t){e.view=!0}}}):e._e()]),e._v(" "),n("el-row",[n("el-col",{staticClass:"sub-title",staticStyle:{"font-size":"14px",margin:"0 0 10px 0"}},[n("span",[e._v(e._s(e.$t("instances.info")))])])],1),e._v(" "),n("el-form",{ref:"instance",attrs:{record:e.instance,rules:e.instanceID&&e.view?{}:e.instanceRules,model:e.instance,disabled:e.instanceID&&e.view,size:"medium","label-position":"top"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{prop:"name",label:e.$t("instances.name")}},[n("el-input",{model:{value:e.instance.name,callback:function(t){e.$set(e.instance,"name",t)},expression:"instance.name"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{prop:"descr",label:e.$t("instances.descr")}},[n("el-input",{model:{value:e.instance.descr,callback:function(t){e.$set(e.instance,"descr",t)},expression:"instance.descr"}})],1)],1),e._v(" "),e.instanceID?n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:e.$t("instances.service")}},[n("el-input",{attrs:{disabled:""},model:{value:e.instance.service,callback:function(t){e.$set(e.instance,"service",t)},expression:"instance.service"}})],1)],1):e._e(),e._v(" "),e.instanceID?n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:e.$t("config.createAt")}},[n("el-input",{attrs:{disabled:"",value:e._f("dateFormat")(e.instance.createAt)}})],1)],1):e._e()],1)],1),e._v(" "),n("el-row",[n("el-col",{staticClass:"sub-title"},[n("span",[e._v(e._s(e.instanceID?e.$t("instances.configInfo"):e.$t("instances.initConfig")))]),e._v(" "),!e.view&&e.$env.components.includes("qingcloud")&&e.cloudAvailable?n("el-button",{staticStyle:{padding:"0"},attrs:{type:"text",size:"medium"},on:{click:e.handleImportCloud}},[e._v("\n          "+e._s(e.$t("config.importCloud"))+"\n        ")]):e._e(),e._v(" "),!e.view&&e.$env.components.includes("qingcloud")&&e.cloudAvailable?n("el-popover",{attrs:{placement:"right",width:"200",title:e.$t("oper.prompt"),trigger:"hover"}},[n("p",{staticStyle:{"text-align":"left"},domProps:{innerHTML:e._s(e.$t("config.noticeCloud"))}}),e._v(" "),n("i",{staticClass:"fa fa-question-circle-o tips",attrs:{slot:"reference","aria-hidden":"true"},slot:"reference"})]):e._e(),e._v(" "),e.view?e._e():n("el-button",{staticStyle:{padding:"0"},attrs:{type:"text",size:"medium"},on:{click:e.handleImport}},[e._v("\n          "+e._s(e.$t("config.importConfig"))+"\n        ")]),e._v(" "),e.view?e._e():n("el-popover",{attrs:{placement:"right",width:"200",title:e.$t("oper.prompt"),trigger:"hover"}},[n("p",{staticStyle:{"text-align":"left"},domProps:{innerHTML:e._s(e.$t("config.notice"))}}),e._v(" "),n("i",{staticClass:"fa fa-question-circle-o tips",attrs:{slot:"reference","aria-hidden":"true"},slot:"reference"})])],1)],1),e._v(" "),n("el-form",{ref:"record",attrs:{record:e.record,rules:e.instanceID&&e.view?{}:e.rules,model:e.record,disabled:e.instanceID&&e.view,size:"medium","label-position":"top"}},[n("el-row",{attrs:{gutter:20}},e._l(e.items,function(t){return n("div",{key:t.key},[void 0===e.record[t.selfKey]||t.key.includes(".$name")?void 0!==e.record[t.selfKey]&&t.key.includes(".$name")?n("el-col",[n("el-form-item",{attrs:{label:t.key.replace(/\.\$name.*/g,"")}},e._l(e.record[t.selfKey],function(i,s){return n("div",{key:s,staticClass:"multiple-block"},[e._l(Object.keys(i),function(i,a){return"action"!==i?n("el-col",{key:a,staticClass:"primary-item",attrs:{span:8}},[n("el-form-item",{attrs:{label:i,prop:t.selfKey+"."+s+"."+i,rules:e.view?[]:[{required:!0,message:e.$t("alert.required"),trigger:"change"}]}},[n("el-input",{model:{value:e.record[t.selfKey][s][i],callback:function(n){e.$set(e.record[t.selfKey][s],i,n)},expression:"record[item.selfKey][index][key]"}})],1)],1):e._e()}),e._v(" "),e.view?e._e():n("el-col",{attrs:{span:8}},[n("el-form-item",{attrs:{label:" "}},[n("el-button",{attrs:{type:0===s?"success":"danger",plain:""},on:{click:function(n){e.handleMultiple(t.selfKey,s)}}},[e._v(e._s(0===s?e.$t("oper.add"):e.$t("oper.delete")))])],1)],1)],2)}))],1):e._e():n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{prop:t.required||e.rules[t.selfKey]?t.selfKey:""}},[n("template",{slot:"label"},[e._v("\n              "+e._s(t.key)+"\n              "),t.descr?n("el-popover",{attrs:{placement:"right",width:"200",title:e.$t("oper.prompt"),trigger:"hover"}},[n("p",{staticStyle:{"text-align":"left"}},[e._v("\n                  "+e._s(t.descr)+"\n                ")]),e._v(" "),n("i",{staticClass:"fa fa-question-circle-o tips",staticStyle:{"margin-left":"12px"},attrs:{slot:"reference","aria-hidden":"true"},slot:"reference"})]):e._e()],1),e._v(" "),"boolean"===t.type?n("el-select",{attrs:{clearable:""},model:{value:e.record[t.selfKey],callback:function(n){e.$set(e.record,t.selfKey,n)},expression:"record[item.selfKey]"}},[n("el-option",{attrs:{label:"是",value:!0}}),e._v(" "),n("el-option",{attrs:{label:"否",value:!1}})],1):"array"===t.type?n("el-select",{attrs:{placeholder:"",clearable:""},model:{value:e.record[t.selfKey],callback:function(n){e.$set(e.record,t.selfKey,n)},expression:"record[item.selfKey]"}},e._l(t.default,function(e,t){return n("el-option",{key:t,attrs:{label:e.toString(),value:e}})})):"number"===t.type?n("el-input",{attrs:{placeholder:t.desc},model:{value:e.record[t.selfKey],callback:function(n){e.$set(e.record,t.selfKey,e._n(n))},expression:"record[item.selfKey]"}}):t.default.length>35?n("el-input",{attrs:{type:"textarea",rows:2,placeholder:t.desc},model:{value:e.record[t.selfKey],callback:function(n){e.$set(e.record,t.selfKey,n)},expression:"record[item.selfKey]"}}):n("el-input",{attrs:{placeholder:t.desc},model:{value:e.record[t.selfKey],callback:function(n){e.$set(e.record,t.selfKey,n)},expression:"record[item.selfKey]"}})],2)],1)],1)}))],1),e._v(" "),e.moreConfigShow?n("div",{staticClass:"sub-title"},[n("span",[e._v(e._s(e.$t("instances.multiple")))]),e._v(" "),e.view?e._e():n("el-button",{staticStyle:{padding:"0"},attrs:{type:"text",size:"medium"},on:{click:e.handleImportMultiple}},[e._v("\n        "+e._s(e.$t("oper.add"))+"\n      ")])],1):e._e(),e._v(" "),e._l(e.multipleConfig,function(t,i){return e.multiple.length>0?n("el-row",{key:i,attrs:{gutter:20}},[n("el-form",{staticClass:"row-form",attrs:{size:"medium",model:t.default,disabled:e.view}},[n("el-col",{attrs:{span:8}},[n("el-form-item",{attrs:{label:e.view?e.$t("instances.option")+" "+(i+1):""}},[e.view?e._e():n("el-button",{staticClass:"remove-btn",staticStyle:{padding:"0"},attrs:{size:"medium"},on:{click:function(t){e.handleRemoveOption(i)}}},[e._v("\n              "+e._s(e.$t("oper.remove"))+"\n              "),n("i",{staticClass:"el-icon-close"})]),e._v(" "),t.descr?n("el-popover",{attrs:{placement:"right",width:"200",title:e.$t("oper.prompt"),trigger:"hover"}},[n("p",{staticStyle:{"text-align":"left"}},[e._v("\n                "+e._s(t.descr||e.$t("error.blank"))+"\n              ")]),e._v(" "),n("i",{staticClass:"fa fa-question-circle-o tips",attrs:{slot:"reference","aria-hidden":"true"},slot:"reference"})]):e._e(),e._v(" "),n("el-select",{attrs:{disabled:e.view,size:"medium"},on:{change:function(n){e.handleSelectedOption(t)}},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"$item.value"}},e._l(e.multiple,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),e._l(Object.keys(t.default),function(i,s){return"action"!==i?n("el-col",{key:s,attrs:{span:8}},["strategy"===i?n("el-form-item",{attrs:{prop:"strategy",label:"strategy",rules:e.view?[]:[{required:!0,message:e.$t("alert.required"),trigger:"change"}]}},[n("el-select",{model:{value:t.default.strategy,callback:function(n){e.$set(t.default,"strategy",n)},expression:"$item.default.strategy"}},[n("el-option",{attrs:{value:"random",label:"random"}}),e._v(" "),n("el-option",{attrs:{value:"strict_round_robin",label:"strict_round_robin"}}),e._v(" "),n("el-option",{attrs:{value:"custom",label:"custom"}})],1)],1):"key"===i&&"custom"===t.default.strategy?n("el-form-item",{attrs:{rules:e.view?[]:[{required:!0,message:e.$t("alert.required"),trigger:"change"}],label:"partition key"}},[n("el-input",{model:{value:t.default.key,callback:function(n){e.$set(t.default,"key",n)},expression:"$item.default.key"}})],1):e._e(),e._v(" "),"key"!==i&&"strategy"!==i?n("el-form-item",{attrs:{prop:i,rules:e.view?[]:[{required:!0,message:e.$t("alert.required"),trigger:"change"}],label:i}},[n("el-input",{model:{value:t.default[i],callback:function(n){e.$set(t.default,i,n)},expression:"$item.default[key]"}})],1):e._e()],1):e._e()})],2)],1):e._e()}),e._v(" "),e.multiple.length>0&&0===e.multipleConfig.length&&!e.view?n("div",{staticClass:"blank-block"},[n("p",[e._v(e._s(e.$t("error.blank"))+"\n      ")])]):e._e(),e._v(" "),e.view?e._e():n("div",{staticClass:"operation-area"},[n("el-button",{staticClass:"confirm-btn",attrs:{type:"success"},on:{click:e.updateConfig}},[e._v("\n        "+e._s(e.$t("oper.confirm"))+"\n      ")]),e._v(" "),n("el-button",{staticClass:"cache-btn",attrs:{type:"text"},on:{click:function(t){e.$router.go(-1)}}},[e._v("\n        "+e._s(e.$t("oper.cancel"))+"\n      ")]),e._v(" "),e.advance.length>0?n("el-button",{staticClass:"cache-btn",attrs:{type:"text"},on:{click:function(t){e.selecting=!0}}},[e._v("\n        "+e._s(e.$t("plugins.advancedConfig"))+"\n      ")]):e._e()],1)],2),e._v(" "),n("import-config",{attrs:{serviceName:e.serviceName,visible:e.importConfig},on:{close:function(t){e.importConfig=!1},import:e.handleImported}}),e._v(" "),n("import-cloud",{ref:"cloud",attrs:{option:{serviceName:e.serviceName},visible:e.importCloud},on:{close:function(t){e.importCloud=!1},import:e.handleImported,ready:function(t){e.cloudAvailable=!0}}}),e._v(" "),n("el-dialog",{attrs:{width:"500px",title:e.$t("plugins.advancedConfig"),visible:e.selecting},on:{"update:visible":function(t){e.selecting=t}},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.moreConfig(t):null}}},[n("div",{staticClass:"advanced-config",attrs:{gutter:20}},[n("el-checkbox-group",{model:{value:e.selectedAdvancedConfig,callback:function(t){e.selectedAdvancedConfig=t},expression:"selectedAdvancedConfig"}},e._l(e.advance,function(t){return n("el-checkbox",{key:t.key,attrs:{label:t}},[e._v("\n          "+e._s(t.key)+"\n        ")])}))],1),e._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{staticClass:"cache-btn",attrs:{type:"text"},on:{click:function(t){e.selecting=!1}}},[e._v("\n        "+e._s(e.$t("oper.cancel"))+"\n      ")]),e._v(" "),n("el-button",{staticClass:"confirm-btn",attrs:{type:"success"},on:{click:e.moreConfig}},[e._v("\n        "+e._s(e.$t("oper.confirm"))+"\n      ")])],1)])],1)},staticRenderFns:[]};var q=n("VU/8")(D,S,!1,function(e){n("kmAO")},null,null);t.default=q.exports},kmAO:function(e,t){},l4cm:function(e,t){},qyJz:function(e,t,n){"use strict";var i=n("+ZMJ"),s=n("kM2E"),a=n("sB3e"),r=n("msXi"),o=n("Mhyx"),c=n("QRG4"),l=n("fBQ2"),d=n("3fs2");s(s.S+s.F*!n("dY0y")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,s,u,f=a(e),p="function"==typeof this?this:Array,m=arguments.length,v=m>1?arguments[1]:void 0,h=void 0!==v,g=0,_=d(f);if(h&&(v=i(v,m>2?arguments[2]:void 0,2)),void 0==_||p==Array&&o(_))for(n=new p(t=c(f.length));t>g;g++)l(n,g,h?v(f[g],g):f[g]);else for(u=_.call(f),n=new p;!(s=u.next()).done;g++)l(n,g,h?r(u,v,[s.value,g],!0):s.value);return n.length=g,n}})},wxAW:function(e,t,n){"use strict";t.__esModule=!0;var i,s=n("C4MV"),a=(i=s)&&i.__esModule?i:{default:i};t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,a.default)(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()}});