(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b6c0bfa"],{1438:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cs-p"},[a("el-table",{attrs:{data:t.tableData,"highlight-current-row":!0}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"是否用于财务充值"}},[a("span",[t._v(t._s(t.isMap[e.row.is_deposit]))])]),a("el-form-item",{attrs:{label:"是否用于账号充值"}},[a("span",[t._v(t._s(t.isMap[e.row.is_inpour]))])]),a("el-form-item",{attrs:{label:"是否用于订单支付"}},[a("span",[t._v(t._s(t.isMap[e.row.is_payment]))])]),a("el-form-item",{attrs:{label:"是否支持原路退款"}},[a("span",[t._v(t._s(t.isMap[e.row.is_refund]))])]),a("el-form-item",{attrs:{label:"支付图片"}},[e.row.image?a("div",{staticClass:"popover-image"},[a("el-image",{attrs:{src:t._f("getPreviewUrl")(e.row.image),fit:"fill"},on:{click:function(a){return a.stopPropagation(),t.$preview(e.row.image)}}})],1):t._e()])],1)]}}])}),a("el-table-column",{attrs:{label:"支付名称",prop:"name"}}),a("el-table-column",{attrs:{label:"支付编码",prop:"code"}}),a("el-table-column",{attrs:{label:"支付模型",prop:"model"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.model||"-")+" ")]}}])}),a("el-table-column",{attrs:{label:"排序值",prop:"sort",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.auth.sort?a("el-input-number",{staticStyle:{width:"88px"},attrs:{size:"mini","controls-position":"right",min:0,max:255},on:{change:function(a){return t.handleSort(e.$index)}},model:{value:e.row.sort,callback:function(a){t.$set(e.row,"sort",a)},expression:"scope.row.sort"}}):a("span",[t._v(" "+t._s(e.row.sort)+" ")])]}}])}),a("el-table-column",{attrs:{label:"状态",prop:"status",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{style:t.auth.enable||t.auth.disable?"cursor: pointer;":"",attrs:{size:"mini",type:t.statusMap[e.row.status].type},nativeOn:{click:function(a){return t.handleStatus(e.$index)}}},[t._v(" "+t._s(t.statusMap[e.row.status].text)+" ")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.auth.set?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleUpdate(e.$index)}}},[t._v("编辑")]):t._e(),t.auth.setting&&Object.keys(e.row.setting).length?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.handleConfig(e.$index)}}},[t._v("参数配置")]):t._e()]}}])})],1),a("el-dialog",{attrs:{title:"编辑支付",visible:t.updateFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(e){t.updateFormVisible=e}}},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.updateForm.name,callback:function(e){t.$set(t.updateForm,"name",e)},expression:"updateForm.name"}})],1),a("el-form-item",{attrs:{label:"图片"}},[a("el-input",{attrs:{placeholder:"可输入支付图片",clearable:!0},model:{value:t.updateForm.image,callback:function(e){t.$set(t.updateForm,"image",e)},expression:"updateForm.image"}},[a("template",{slot:"prepend"},[t.updateForm.image?a("el-popover",{attrs:{width:"150",placement:"top",trigger:"hover"}},[a("div",{staticClass:"popover-image",staticStyle:{"text-align":"center"}},[a("el-image",{attrs:{src:t._f("getPreviewUrl")(t.updateForm.image),fit:"fill"},on:{click:function(e){return e.stopPropagation(),t.$preview(t.updateForm.image)}}})],1),a("i",{staticClass:"el-icon-picture",attrs:{slot:"reference"},slot:"reference"})]):t._e()],1),a("el-dropdown",{attrs:{slot:"append","show-timeout":50},on:{command:t.handleCommand},slot:"append"},[a("el-button",{attrs:{icon:"el-icon-upload"}}),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"storage",icon:"el-icon-finished"}},[t._v("资源选择")]),a("el-dropdown-item",{attrs:{command:"upload",icon:"el-icon-upload2"}},[t._v("上传资源")])],1)],1)],2)],1),a("el-form-item",{attrs:{label:"类型"}},[a("div",{staticStyle:{width:"300px"}},[a("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.updateForm.is_deposit,callback:function(e){t.$set(t.updateForm,"is_deposit",e)},expression:"updateForm.is_deposit"}},[t._v(" 用于财务充值 ")]),a("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.updateForm.is_inpour,callback:function(e){t.$set(t.updateForm,"is_inpour",e)},expression:"updateForm.is_inpour"}},[t._v(" 用于账号充值 ")]),a("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.updateForm.is_payment,callback:function(e){t.$set(t.updateForm,"is_payment",e)},expression:"updateForm.is_payment"}},[t._v(" 用于订单支付 ")]),a("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:t.updateForm.is_refund,callback:function(e){t.$set(t.updateForm,"is_refund",e)},expression:"updateForm.is_refund"}},[t._v(" 支持原路退款 ")])],1)]),a("el-form-item",{attrs:{label:"排序值"}},[a("el-input-number",{staticStyle:{width:"120px"},attrs:{"controls-position":"right",min:0,max:255},model:{value:t.updateForm.sort,callback:function(e){t.$set(t.updateForm,"sort",e)},expression:"updateForm.sort"}})],1),a("el-form-item",{attrs:{label:"状态"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:t.updateForm.status,callback:function(e){t.$set(t.updateForm,"status",e)},expression:"updateForm.status"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.updateFormVisible=!1}}},[t._v("取消")]),a("el-button",{attrs:{type:"primary",loading:t.updateLoading,size:"small"},on:{click:t.update}},[t._v("修改")])],1),a("cs-storage",{ref:"storage",staticStyle:{display:"none"},attrs:{limit:1},on:{confirm:t._getStorageFileList}}),a("cs-upload",{ref:"upload",staticStyle:{display:"none"},attrs:{type:"slot",accept:"image/*",limit:1,multiple:!1},on:{confirm:t._getUploadFileList}})],1),a("el-dialog",{attrs:{title:"参数配置",visible:t.configFormVisible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(e){t.configFormVisible=e}}},[a("el-form",{attrs:{"label-width":"110px"}},t._l(t.configForm,(function(e,i){return a("el-form-item",{key:i,attrs:{label:e.name}},[a("el-input",{attrs:{placeholder:e.name,clearable:!0},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"item.value"}}),a("div",{staticClass:"help-block",domProps:{innerHTML:t._s(e.remark)}})],1)})),1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.configFormVisible=!1}}},[t._v("取消")]),a("el-button",{attrs:{type:"primary",loading:t.configLoading,size:"small"},on:{click:t.config}},[t._v("修改")])],1)],1)],1)},n=[],o=(a("d3b7"),a("5530")),s=a("b85c"),l=a("5ef3"),r=a("60bb"),c=a("ca00"),u={components:{csUpload:function(){return a.e("chunk-0383e8e2").then(a.bind(null,"8422"))},csStorage:function(){return a.e("chunk-7557cd56").then(a.bind(null,"8704"))}},props:{tableData:{default:function(){return[]}}},data:function(){return{currentTableData:[],updateLoading:!1,updateFormVisible:!1,configLoading:!1,configFormVisible:!1,auth:{set:!1,setting:!1,sort:!1,enable:!1,disable:!1},updateForm:{},configForm:{},isMap:{0:"否",1:"是"},statusMap:{0:{text:"禁用",type:"danger"},1:{text:"启用",type:"success"},2:{text:"...",type:"info"}}}},filters:{getPreviewUrl:function(t){return t?c["a"].getImageCodeUrl(t):""}},watch:{tableData:{handler:function(t){this.currentTableData=t},immediate:!0}},mounted:function(){this._validationAuth()},methods:{_validationAuth:function(){this.auth.set=this.$permission("/setting/payment/config/set"),this.auth.setting=this.$permission("/setting/payment/config/setting"),this.auth.sort=this.$permission("/setting/payment/config/sort"),this.auth.enable=this.$permission("/setting/payment/config/enable"),this.auth.disable=this.$permission("/setting/payment/config/disable")},handleCommand:function(t){switch(t){case"storage":this.$refs.storage.handleStorageDlg([0,2]);break;case"upload":this.$refs.upload.handleUploadDlg();break}},_getUploadFileList:function(t){if(t.length){var e=t[0].response;e&&200===e.status&&0===e.data[0].type&&(this.updateForm.image=e.data[0].url)}},_getStorageFileList:function(t){if(t.length){var e,a=Object(s["a"])(t);try{for(a.s();!(e=a.n()).done;){var i=e.value;if(0===i.type){this.updateForm.image=i.url;break}}}catch(n){a.e(n)}finally{a.f()}}},handleSort:function(t){Object(l["d"])(this.currentTableData[t].payment_id,this.currentTableData[t].sort)},handleStatus:function(t){var e=this,a=this.currentTableData[t],i=a.status?0:1;a.status>1||(0!==i||this.auth.disable)&&(1!==i||this.auth.enable)&&(this.$set(this.currentTableData,t,Object(o["a"])(Object(o["a"])({},a),{},{status:2})),Object(l["e"])([a.payment_id],i).then((function(){e.$set(e.currentTableData,t,Object(o["a"])(Object(o["a"])({},a),{},{status:i}))})))},handleUpdate:function(t){this.currentIndex=t,this.updateForm=Object(o["a"])({},this.currentTableData[t]),this.updateLoading=!1,this.updateFormVisible=!0},update:function(){var t=this;this.updateLoading=!0,delete this.updateForm.setting,Object(l["c"])(this.updateForm).then((function(e){t.$set(t.currentTableData,t.currentIndex,Object(o["a"])(Object(o["a"])({},t.currentTableData[t.currentIndex]),e.data)),t.updateFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.updateLoading=!1}))},handleConfig:function(t){this.currentIndex=t,this.configForm=Object(r["cloneDeep"])(this.currentTableData[t].setting),this.configLoading=!1,this.configFormVisible=!0},config:function(){var t=this,e=this.currentIndex;this.configLoading=!0,Object(l["c"])({payment_id:this.currentTableData[e].payment_id,setting:this.configForm}).then((function(a){t.$set(t.currentTableData,e,Object(o["a"])(Object(o["a"])({},t.currentTableData[e]),a.data)),t.configFormVisible=!1,t.$message.success("操作成功")})).catch((function(){t.configLoading=!1}))}}},d=u,p=(a("eae8"),a("2877")),m=Object(p["a"])(d,i,n,!1,null,"109be755",null);e["default"]=m.exports},"313f":function(t,e,a){},eae8:function(t,e,a){"use strict";var i=a("313f"),n=a.n(i);n.a}}]);