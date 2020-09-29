(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5c367ac"],{"06e3":function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"e",(function(){return n})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return d})),r.d(t,"d",(function(){return c})),r.d(t,"g",(function(){return u})),r.d(t,"f",(function(){return m}));var a=r("5530"),i=r("bc07"),s="/v1/delivery";function o(e){return Object(i["a"])({url:s,method:"post",data:Object(a["a"])({method:"add.delivery.item"},e)})}function n(e){return Object(i["a"])({url:s,method:"post",data:Object(a["a"])({method:"set.delivery.item"},e)})}function l(e){return Object(i["a"])({url:s,method:"post",data:{method:"del.delivery.list",delivery_id:e}})}function d(e){return Object(i["a"])({url:s,method:"post",data:Object(a["a"])({method:"get.delivery.list"},e)})}function c(){return Object(i["a"])({url:s,method:"post",data:{method:"get.delivery.select"}})}function u(e,t){return Object(i["a"])({url:s,method:"post",data:{method:"set.delivery.status",delivery_id:e,status:t}})}function m(e,t){return Object(i["a"])({url:s,method:"post",data:{method:"set.delivery.sort",delivery_id:e,sort:t}})}},1484:function(e,t,r){"use strict";r("7db0"),r("4160"),r("caad"),r("c975"),r("a434"),r("b0c0"),r("d3b7"),r("159b");var a=r("5530"),i=r("dea0"),s=r("ca00"),o=r("06e3"),n=r("2edc");t["a"]={components:{csRegionSelect:function(){return r.e("chunk-d77acf44").then(r.bind(null,"90f8"))},csDeliveryDist:function(){return r.e("chunk-40749493").then(r.bind(null,"3b44"))},csGoodsDrawer:function(){return r.e("chunk-1049f239").then(r.bind(null,"fd20"))}},data:function(){return{currentTableData:[],multipleSelection:[],auth:{print:!1,start_picking:!1,cancel_picking:!1,delivery:!1,complete:!1,price:!1,set:!1,dist:!1,cancel:!1,del:!1,restore:!1,remark:!1},rules:{order:{consignee:[{required:!0,message:"收货人姓名不能为空",trigger:"blur"},{max:50,message:"长度不能大于 50 个字符",trigger:"blur"}],mobile:[{required:!0,message:"收货人手机号码不能为空",trigger:"blur"},{min:7,max:15,message:"长度在 7 到 15 个字符",trigger:"blur"}],tel:[{max:20,message:"长度不能大于 20 个字符",trigger:"blur"}],zipcode:[{max:20,message:"长度不能大于 20 个字符",trigger:"blur"}],region_list:[{required:!0,message:"收货区域不能为空",trigger:"change"}],address:[{required:!0,message:"收货详细地址不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],invoice_title:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],tax_number:[{max:20,message:"长度不能大于 20 个字符",trigger:"blur"}]},delivery:{delivery_id:[{required:!0,message:"至少选择一项",trigger:"change"}],delivery_item_id:[{required:!0,message:"至少选择一项",trigger:"change"}],logistic_code:[{required:!0,message:"快递单号不能为空",trigger:"blur"},{max:50,message:"长度不能大于 50 个字符",trigger:"blur"}]}},delivery:{},deliveryMap:{0:"#303133",1:"#67C23A",2:"#67C23A",3:"#F56C6C"},sourceMap:{},serviceMap:{1:"售后中",2:"已售后"},statusMap:{0:"待发货",1:"已发货",2:"已收货",3:"已取消"},formRemark:{index:void 0,loading:!1,visible:!1,request:{}},formAmount:{index:void 0,loading:!1,visible:!1,actual:0,request:{}},formOrder:{index:void 0,loading:!1,visible:!1,request:{}},formDelivery:{index:void 0,loading:!1,visible:!1,delivery:1,selection:[],goods:{},request:{}}}},filters:{getPreviewUrl:function(e){return e?s["a"].getImageCodeUrl(e,"goods_image_x80"):""},getNumber:function(e){return s["a"].getNumber(e)},getDelivery:function(e){return e?e.alias:""}},mounted:function(){this.handleOpenDelivery(),this._validationAuth()},methods:{_validationAuth:function(){this.auth.print=this.$permission("/order/admin/print"),this.auth.start_picking=this.$permission("/order/admin/list/start_picking"),this.auth.cancel_picking=this.$permission("/order/admin/list/cancel_picking"),this.auth.delivery=this.$permission("/order/admin/list/delivery"),this.auth.complete=this.$permission("/order/admin/list/complete"),this.auth.price=this.$permission("/order/admin/list/price"),this.auth.set=this.$permission("/order/admin/list/set"),this.auth.dist=this.$permission("/order/admin/list/dist"),this.auth.cancel=this.$permission("/order/admin/list/cancel"),this.auth.del=this.$permission("/order/admin/list/del"),this.auth.restore=this.$permission("/order/admin/list/restore"),this.auth.remark=this.$permission("/order/admin/list/remark")},_getOrderNoList:function(e){null===e&&(e=this.multipleSelection);var t=[];return Array.isArray(e)?e.forEach((function(e){t.push(e.order_no)})):t.push(this.currentTableData[e].order_no),t},_getPaymentType:function(e){return Object.prototype.hasOwnProperty.call(this.toPayment,e)?this.toPayment[e].name:""},_whetherToConfirm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning",r={confirmButtonText:"确定",cancelButtonText:"取消",closeOnClickModal:!1,type:t},a=e||"确定要执行该操作吗?";return this.$confirm(a,"提示",r)},handleViewGoods:function(e){var t=this;this.$nextTick((function(){t.$refs.goodsDrawer.show(e)}))},handleView:function(e){this.$router.push({name:"goods-admin-view",params:{goods_id:e}})},setSellersRemark:function(e){var t=this.currentTableData[e];this.formRemark={index:e,loading:!1,visible:!0,request:{order_no:t.order_no,sellers_remark:t.sellers_remark}}},handleSellersRemark:function(){var e=this;this.formRemark.loading=!0;var t=this.formRemark.index;Object(i["j"])(this.formRemark.request).then((function(r){e.currentTableData[t].sellers_remark=r.data.sellers_remark,e.formRemark.visible=!1,e.$message.success("操作成功")})).catch((function(){e.formRemark.loading=!1}))},handleDeliveryDist:function(e){this.$refs.deliveryDist&&this.$refs.deliveryDist.show(e)},setOrderAmount:function(e){var t=this.currentTableData[e];this.formAmount={index:e,loading:!1,visible:!0,actual:t.total_amount,request:{order_no:t.order_no,total_amount:0}}},handleOrderAmount:function(){var e=this;this.formAmount.loading=!0;var t=this.formAmount.index;Object(i["b"])(this.formAmount.request).then((function(){"order-admin-info"!==e.$options.name?e.currentTableData[t].total_amount+=e.formAmount.request.total_amount:e.getOrderData(),e.formAmount.visible=!1,e.$message.success("操作成功")})).catch((function(){e.formAmount.loading=!1}))},setOrderItem:function(e){var t=this;this.formOrder={index:e,loading:!1,visible:!1,request:Object(a["a"])({},this.currentTableData[e])},this.$nextTick((function(){t.$refs.formOrder&&t.$refs.formOrder.clearValidate(),t.formOrder.visible=!0}))},handleSetOrder:function(){var e=this;this.$refs.formOrder.validate((function(t){t&&(e.formOrder.loading=!0,Object(i["k"])(e.formOrder.request).then((function(t){"order-admin-info"!==e.$options.name?e.$set(e.currentTableData,e.formOrder.index,Object(a["a"])(Object(a["a"])({},e.currentTableData[e.formOrder.index]),t.data)):e.getOrderData(),e.formOrder.visible=!1,e.$message.success("操作成功")})).catch((function(){e.formOrder.loading=!1})))}))},handlePicking:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=this._getOrderNoList(r);0!==a.length?this._whetherToConfirm().then((function(){Object(i["h"])(a,e).then((function(e){if("order-admin-info"!==t.$options.name){var r=!0;"0"===t.tabPane?t.currentTableData.forEach((function(r){-1!==a.indexOf(r.order_no)&&t.$set(r,"trade_status",e.data.trade_status)})):(s["a"].deleteDataList(t.currentTableData,a,"order_no"),t.currentTableData.length<=0&&(r=!1,t.$emit("refresh",!0))),r&&t.$emit("total")}else t.getOrderData();t.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleOpenDelivery:function(){var e=this;this.delivery.select||Object(o["d"])().then((function(t){e.delivery.select=t.data||[]})),this.delivery.company||Object(n["g"])(0).then((function(t){e.delivery.company=t.data||[]}))},handleDelivery:function(e){var t=this,r=this.currentTableData[e];this.formDelivery={index:e,loading:!1,visible:!1,delivery:1,selection:[],goods:r.get_order_goods,request:{order_no:r.order_no,order_goods_id:[],delivery_id:r.delivery_id,delivery_item_id:void 0,logistic_code:void 0}},this.delivery.select&&(this.delivery.select.find((function(e){return e.delivery_id===r.delivery_id}))||(this.formDelivery.request.delivery_id=void 0)),this.$nextTick((function(){t.$refs.formDelivery&&t.$refs.formDelivery.clearValidate(),t.$refs.dliveryMultiple&&t.$refs.dliveryMultiple.clearSelection(),t.formDelivery.visible=!0}))},deliveryOrderItem:function(){var e=this;this.$refs.formDelivery.validate((function(t){if(t){if(e.formDelivery.selection.length<=0)return e.formDelivery.loading=!1,void e.$message.error("请至少选择一个商品");var r=[],s=e.formDelivery.request;switch(e.formDelivery.selection.forEach((function(e){r.push(e.order_goods_id)})),e.formDelivery.delivery){case 0:delete s.delivery_id,delete s.delivery_item_id,delete s.logistic_code;break;case 1:delete s.delivery_item_id;break;case 2:delete s.delivery_id;break}e.formDelivery.loading=!0,e.formDelivery.request.order_goods_id=r,Object(i["d"])(s).then((function(t){if("order-admin-info"!==e.$options.name){var i=!0,s=e.formDelivery.index;"0"===e.tabPane||1!==t.data.delivery_status?(e.formDelivery.goods.forEach((function(e){r.includes(e.order_goods_id)&&(e.is_service=0,e.status=1)})),e.$set(e.currentTableData,s,Object(a["a"])(Object(a["a"])({},e.currentTableData[s]),t.data))):(e.currentTableData.splice(s,1),e.currentTableData.length<=0&&(i=!1,e.$emit("refresh",!0))),i&&e.$emit("total")}else e.getOrderData();e.formDelivery.visible=!1,e.$message.success("操作成功")})).catch((function(){e.formDelivery.loading=!1}))}}))},handleComplete:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=this._getOrderNoList(t);0!==r.length?this._whetherToConfirm().then((function(){Object(i["c"])(r).then((function(t){if("order-admin-info"!==e.$options.name){var a=!0;"0"===e.tabPane?e.currentTableData.forEach((function(e){-1!==r.indexOf(e.order_no)&&(e.trade_status=t.data.trade_status,e.finished_time=t.data.finished_time,e.get_order_goods.forEach((function(e){1===e.is_service&&(e.is_service=0)})))})):(s["a"].deleteDataList(e.currentTableData,r,"order_no"),e.currentTableData.length<=0&&(a=!1,e.$emit("refresh",!0))),a&&e.$emit("total")}else e.getOrderData();e.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleOrderCancel:function(e){var t=this;this._whetherToConfirm().then((function(){var r=t.currentTableData[e];Object(i["a"])(r.order_no).then((function(i){if("order-admin-info"!==t.$options.name){var s=!0;"0"===t.tabPane?t.$set(t.currentTableData,e,Object(a["a"])(Object(a["a"])({},r),i.data)):(t.currentTableData.splice(e,1),t.currentTableData.length<=0&&(s=!1,t.$emit("refresh",!0))),s&&t.$emit("total")}else t.getOrderData();t.$message.success("操作成功")}))})).catch((function(){}))},handleOrderRecycle:function(e,t){var r=this;this._whetherToConfirm().then((function(){Object(i["i"])(r.currentTableData[e].order_no,t).then((function(){"order-admin-info"!==r.$options.name?(r.currentTableData.splice(e,1),r.currentTableData.length<=0&&r.$emit("refresh",!0)):r.getOrderData(),r.$message.success("操作成功")}))})).catch((function(){}))}}}},"2edc":function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"h",(function(){return n})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return c})),r.d(t,"g",(function(){return u})),r.d(t,"f",(function(){return m})),r.d(t,"b",(function(){return v}));var a=r("5530"),i=r("bc07"),s="/v1/delivery_item";function o(e){return Object(i["a"])({url:s,method:"post",data:Object(a["a"])({method:"add.delivery.company.item"},e)})}function n(e){return Object(i["a"])({url:s,method:"post",data:Object(a["a"])({method:"set.delivery.company.item"},e)})}function l(e){return Object(i["a"])({url:s,method:"post",data:{method:"del.delivery.company.list",delivery_item_id:e}})}function d(e){return Object(i["a"])({url:s,method:"post",data:{method:"get.delivery.company.item",delivery_item_id:e}})}function c(e){return Object(i["a"])({url:s,method:"post",data:Object(a["a"])({method:"get.delivery.company.list"},e)})}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(i["a"])({url:s,method:"post",data:{method:"get.delivery.company.select",type:e}})}function m(e){return Object(i["a"])({url:s,method:"post",data:{method:"get.delivery.company.recognise",code:e}})}function v(e){return Object(i["a"])({url:s,method:"post",data:{method:"copy.delivery.company.hot",delivery_item_id:e}})}},"45fd":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("cs-container",[r("div",{staticClass:"cs-p"},[r("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[r("el-row",[r("el-col",{staticClass:"order-left cs-pr",attrs:{span:9}},[r("p",{staticClass:"card-title"},[e._v("订单信息")]),r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("订单号")]),r("div",{staticClass:"dd"},[e._v(e._s(e.orderData.order_no))])]),r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("支付流水号")]),r("div",{staticClass:"dd"},[e._v(e._s(e.orderData.payment_no))])]),r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("订单来源")]),r("div",{staticClass:"dd"},[e._v(e._s(e.sourceMap[e.orderData.source]))])]),r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("支付方式")]),r("div",{staticClass:"dd"},[r("span",{style:"1"===e.orderData.payment_code&&"color: #F56C6C;"},[e._v(" "+e._s(e._getPaymentType(e.orderData.payment_code))+" ")])])]),e.orderData.card_number?r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("购物卡号")]),r("div",{staticClass:"dd"},[e._v(e._s(e.orderData.card_number))])]):e._e(),r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("买家")]),r("div",{staticClass:"dd"},[r("span",[e._v(e._s(e.orderData.get_user.username))]),e.orderData.get_user.level_icon?r("el-image",{staticClass:"level-icon",attrs:{src:e.orderData.get_user.level_icon,fit:"fill"}},[r("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[r("i",{staticClass:"el-icon-picture-outline"})])]):e._e()],1)]),r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("买家备注")]),r("div",{staticClass:"dd"},[e._v(e._s(e.orderData.buyer_remark))])]),r("el-divider"),r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("收货人姓名")]),r("div",{staticClass:"dd"},[e._v(e._s(e.orderData.consignee))])]),r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("收货地址")]),r("div",{staticClass:"dd"},[e._v(e._s(e.orderData.complete_address))])]),r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("配送方式")]),r("div",{staticClass:"dd"},[e._v(e._s(e._f("getDelivery")(e.orderData.get_delivery)))])]),e.orderData.zipcode?r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("邮编")]),r("div",{staticClass:"dd"},[e._v(e._s(e.orderData.zipcode))])]):e._e(),r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("收货人手机")]),r("div",{staticClass:"dd"},[e._v(e._s(e.orderData.mobile))])]),e.orderData.tel?r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("收货人电话")]),r("div",{staticClass:"dd"},[e._v(e._s(e.orderData.tel))])]):e._e(),e.orderData.invoice_type>0?[r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("发票抬头")]),r("div",{staticClass:"dd"},[e._v(e._s(e.orderData.invoice_title))])]),2===e.orderData.invoice_type?r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("纳税人识别号")]),r("div",{staticClass:"dd"},[e._v(e._s(e.orderData.tax_number))])]):e._e()]:e._e(),r("el-divider"),r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("卖家备注")]),r("div",{staticClass:"dd"},[e._v(e._s(e.orderData.sellers_remark))])])],2),r("el-col",{staticClass:"cs-pl",attrs:{span:15}},[r("p",{staticClass:"card-title"},[e._v("订单状态 "),e.orderData.is_delete?r("span",[e._v("(回收站)")]):e._e()]),r("el-steps",{attrs:{active:e.tradeStatus.active,"process-status":e.tradeStatus.process_status,"finish-status":e.tradeStatus.finish_status,"align-center":!1}},e._l(e.tradeStatus.step,(function(e,t){return r("el-step",{key:t,attrs:{description:e.description,title:e.title,icon:e.icon}})})),1),r("el-divider"),r("div",{staticStyle:{display:"inline-flex"}},[e.auth.print?r("el-dropdown",{attrs:{placement:"bottom","show-timeout":50}},[r("el-button",{staticClass:"cs-mr-10",attrs:{size:"small"}},[r("i",{staticClass:"el-icon-printer"}),r("span",[e._v("打印")]),r("i",{staticClass:"el-icon-arrow-down cs-pl-5"})]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{nativeOn:{click:function(t){return e.handlePrint("order")}}},[e._v("打印订单")]),r("el-dropdown-item",{nativeOn:{click:function(t){return e.handlePrint("out")}}},[e._v("打印出库单")]),r("el-dropdown-item",{nativeOn:{click:function(t){return e.handlePrint("delivery")}}},[e._v("打印发货单")])],1)],1):e._e(),e.auth.remark?r("el-button",{attrs:{size:"small"},on:{click:function(t){return e.setSellersRemark(0)}}},[e._v("备注")]):e._e(),e.auth.dist&&0!==e.orderData.delivery_status?r("el-button",{attrs:{size:"small"},on:{click:function(t){return e.handleDeliveryDist(e.orderData.order_no)}}},[e._v("物流信息")]):e._e(),e.auth.price&&0===e.orderData.trade_status&&0===e.orderData.payment_status?r("el-button",{attrs:{size:"small"},on:{click:function(t){return e.setOrderAmount(0)}}},[e._v("修改金额")]):e._e(),e.auth.set&&0===e.orderData.delivery_status&&e.orderData.trade_status<=1?r("el-button",{attrs:{size:"small"},on:{click:function(t){return e.setOrderItem(0)}}},[e._v("修改订单")]):e._e(),e.auth.start_picking&&1===e.orderData.payment_status&&0===e.orderData.trade_status?r("el-button",{attrs:{size:"small"},on:{click:function(t){return e.handlePicking(1,0)}}},[e._v("设为配货")]):e._e(),e.auth.cancel_picking&&1===e.orderData.payment_status&&1===e.orderData.trade_status?r("el-button",{attrs:{size:"small"},on:{click:function(t){return e.handlePicking(0,0)}}},[e._v("取消配货")]):e._e(),e.auth.delivery&&1===e.orderData.payment_status&&1!==e.orderData.delivery_status&&[1,2].includes(e.orderData.trade_status)?r("el-button",{attrs:{size:"small"},on:{click:function(t){return e.handleDelivery(0)}}},[e._v("确定发货")]):e._e(),e.auth.complete&&1===e.orderData.delivery_status&&2===e.orderData.trade_status?r("el-button",{attrs:{size:"small"},on:{click:function(t){return e.handleComplete(0)}}},[e._v("确认收货")]):e._e(),e.auth.cancel&&e.orderData.trade_status<=1?r("el-button",{attrs:{size:"small"},on:{click:function(t){return e.handleOrderCancel(0)}}},[e._v("取消订单")]):e._e(),e.auth.del&&4===e.orderData.trade_status&&e.orderData.is_delete<=0?r("el-button",{attrs:{size:"small"},on:{click:function(t){return e.handleOrderRecycle(0,1)}}},[e._v("删除订单")]):e._e(),e.auth.restore&&e.orderData.is_delete>0?r("el-button",{attrs:{size:"small"},on:{click:function(t){return e.handleOrderRecycle(0,0)}}},[e._v("恢复订单")]):e._e()],1)],1)],1),r("el-collapse",{attrs:{value:["goods","log"]}},[r("el-collapse-item",{attrs:{title:"商品列表",name:"goods"}},[r("el-table",{staticStyle:{"margin-top":"-15px"},attrs:{data:e.orderData.get_order_goods}},[r("el-table-column",{attrs:{label:"商品名称","min-width":"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-image",{staticClass:"goods-image",attrs:{src:e._f("getPreviewUrl")(t.row.goods_image),fit:"contain",lazy:""},on:{click:function(r){return e.handleView(t.row.goods_id)}}}),r("div",{staticClass:"goods-info"},[r("span",{staticClass:"name",attrs:{title:t.row.goods_name},on:{click:function(r){return e.handleView(t.row.goods_id)}}},[e._v(e._s(t.row.goods_name))]),r("span",{staticClass:"cs-pl-5",class:1===t.row.is_service?"service":"complete"},[e._v(e._s(e.serviceMap[t.row.is_service]))]),r("p",{staticClass:"specs"},[e._v(e._s(t.row.key_value))])])]}}])}),r("el-table-column",{attrs:{label:"单价"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("getNumber")(t.row.shop_price))+" ")]}}])}),r("el-table-column",{attrs:{prop:"qty",label:"数量"}}),r("el-table-column",{attrs:{label:"小计"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("getNumber")(t.row.shop_price*t.row.qty))+" ")]}}])}),r("el-table-column",{attrs:{label:"状态",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{style:{color:e.deliveryMap[t.row.status]}},[e._v(e._s(e.statusMap[t.row.status]))])]}}])})],1),r("div",{staticClass:"cs-fr cs-p"},[r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("总计")]),r("div",{staticClass:"dd number"},[e._v(e._s(e._f("getNumber")(e.orderData.goods_amount)))])]),e.orderData.delivery_fee?r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("运费")]),r("div",{staticClass:"dd number"},[e._v(e._s(e._f("getNumber")(e.orderData.delivery_fee)))])]):e._e(),e.orderData.invoice_amount?r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("开票")]),r("div",{staticClass:"dd number"},[e._v(e._s(e._f("getNumber")(e.orderData.invoice_amount)))])]):e._e(),e.orderData.adjustment?r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("调整金额")]),r("div",{staticClass:"dd number"},[e._v(e._s(e._f("getNumber")(e.orderData.adjustment)))])]):e._e(),e.orderData.use_money?r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("余额抵扣")]),r("div",{staticClass:"dd number"},[e._v("-"+e._s(e._f("getNumber")(e.orderData.use_money)))])]):e._e(),e.orderData.use_card?r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("购物卡抵扣")]),r("div",{staticClass:"dd number"},[e._v("-"+e._s(e._f("getNumber")(e.orderData.use_card)))])]):e._e(),e.orderData.use_level?r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("会员抵扣")]),r("div",{staticClass:"dd number"},[e._v("-"+e._s(e._f("getNumber")(e.orderData.use_level)))])]):e._e(),e.orderData.use_integral?r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("积分抵扣")]),r("div",{staticClass:"dd number"},[e._v("-"+e._s(e._f("getNumber")(e.orderData.use_integral)))])]):e._e(),e.orderData.use_coupon?r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("优惠劵抵扣")]),r("div",{staticClass:"dd number"},[e._v("-"+e._s(e._f("getNumber")(e.orderData.use_coupon)))])]):e._e(),e.orderData.use_discount?r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("商品折扣抵扣")]),r("div",{staticClass:"dd number"},[e._v("-"+e._s(e._f("getNumber")(e.orderData.use_discount)))])]):e._e(),e.orderData.use_promotion?r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("订单促销抵扣")]),r("div",{staticClass:"dd number"},[e._v("-"+e._s(e._f("getNumber")(e.orderData.use_promotion)))])]):e._e(),r("div",{staticClass:"order-info cs-pb"},[r("div",{staticClass:"dt"},[e._v("应付金额")]),r("div",{staticClass:"dd number"},[e._v(e._s(e._f("getNumber")(e.orderData.total_amount)))])]),r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v("累计优惠")]),r("div",{staticClass:"dd number"},[e._v(e._s(e._f("getNumber")(e.orderData.goods_amount-e.orderData.pay_amount)))])]),r("div",{staticClass:"order-info"},[r("div",{staticClass:"dt"},[e._v(e._s(e._f("getPaymentStatus")(e.orderData)))]),r("div",{staticClass:"dd number"},[e._v(e._s(e._f("getNumber")(e._f("getPaymentAmount")(e.orderData))))])])])],1),r("el-collapse-item",{attrs:{title:"订单日志",name:"log"}},[r("el-timeline",e._l(e.orderData.get_order_log,(function(t,a){return r("el-timeline-item",{key:a,attrs:{type:t.client_type?"danger":"primary",timestamp:t.create_time}},[r("div",{staticClass:"order-log"},[r("li",[r("span",[e._v("["+e._s(e.clientMap[t.client_type])+"]")]),e._v(" "+e._s(t.action))]),r("li",[e._v(e._s(t.description+"："+t.comment))])])])})),1)],1)],1)],1)],1),r("el-dialog",{attrs:{title:"卖家备注",visible:e.formRemark.visible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){return e.$set(e.formRemark,"visible",t)}}},[r("el-input",{attrs:{type:"textarea",rows:6,placeholder:"编辑卖家备注，仅卖家自己可见",maxlength:"200","show-word-limit":""},model:{value:e.formRemark.request.sellers_remark,callback:function(t){e.$set(e.formRemark.request,"sellers_remark",t)},expression:"formRemark.request.sellers_remark"}}),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(t){e.formRemark.visible=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary",loading:e.formRemark.loading,size:"small"},on:{click:e.handleSellersRemark}},[e._v("确定")])],1)],1),r("el-dialog",{attrs:{title:"修改金额",visible:e.formAmount.visible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){return e.$set(e.formAmount,"visible",t)}}},[r("el-form",{attrs:{"label-width":"80px","label-position":"left"}},[r("el-form-item",{attrs:{label:"增加/减少"}},[r("el-input-number",{attrs:{placeholder:"可输入调整金额",precision:2},model:{value:e.formAmount.request.total_amount,callback:function(t){e.$set(e.formAmount.request,"total_amount",t)},expression:"formAmount.request.total_amount"}}),r("span",{staticClass:"order-remark cs-pl-10"},[e._v("正数增加，负数减少")]),r("div",[r("span",[e._v("应付款：")]),r("span",{staticClass:"cs-pr-10"},[e._v(e._s(e.formAmount.actual))]),r("span",[e._v("调整后：")]),r("strong",[e._v(e._s(e._f("getNumber")(e.formAmount.actual+e.formAmount.request.total_amount)))])])],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(t){e.formAmount.visible=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary",loading:e.formAmount.loading,size:"small"},on:{click:e.handleOrderAmount}},[e._v("确定")])],1)],1),r("el-dialog",{attrs:{title:"修改订单",visible:e.formOrder.visible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){return e.$set(e.formOrder,"visible",t)}}},[r("el-form",{ref:"formOrder",attrs:{model:e.formOrder.request,rules:e.rules.order,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"收货人姓名",prop:"consignee"}},[r("el-input",{attrs:{placeholder:"请输入收货人姓名",clearable:!0},model:{value:e.formOrder.request.consignee,callback:function(t){e.$set(e.formOrder.request,"consignee",t)},expression:"formOrder.request.consignee"}})],1),r("el-form-item",{attrs:{label:"收货人手机号",prop:"mobile"}},[r("el-input",{attrs:{placeholder:"请输入收货人手机号码",clearable:!0},model:{value:e.formOrder.request.mobile,callback:function(t){e.$set(e.formOrder.request,"mobile",t)},expression:"formOrder.request.mobile"}})],1),r("el-form-item",{attrs:{label:"收货人电话",prop:"tel"}},[r("el-input",{attrs:{placeholder:"可输入收货人电话",clearable:!0},model:{value:e.formOrder.request.tel,callback:function(t){e.$set(e.formOrder.request,"tel",t)},expression:"formOrder.request.tel"}})],1),r("el-form-item",{attrs:{label:"收货区域",prop:"region_list"}},[r("cs-region-select",{model:{value:e.formOrder.request.region_list,callback:function(t){e.$set(e.formOrder.request,"region_list",t)},expression:"formOrder.request.region_list"}})],1),r("el-form-item",{attrs:{label:"详细地址",prop:"address"}},[r("el-input",{attrs:{placeholder:"请输入收货详细地址",clearable:!0},model:{value:e.formOrder.request.address,callback:function(t){e.$set(e.formOrder.request,"address",t)},expression:"formOrder.request.address"}})],1),r("el-form-item",{attrs:{label:"收货人邮编",prop:"zipcode"}},[r("el-input",{attrs:{placeholder:"请输入收货人邮编",clearable:!0},model:{value:e.formOrder.request.zipcode,callback:function(t){e.$set(e.formOrder.request,"zipcode",t)},expression:"formOrder.request.zipcode"}})],1),e.formOrder.request.invoice_type>0?[r("el-divider"),r("el-form-item",{attrs:{label:"发票抬头",prop:"invoice_title"}},[r("el-input",{attrs:{placeholder:"可输入发票抬头",clearable:!0},model:{value:e.formOrder.request.invoice_title,callback:function(t){e.$set(e.formOrder.request,"invoice_title",t)},expression:"formOrder.request.invoice_title"}})],1),2===e.formOrder.request.invoice_type?r("el-form-item",{attrs:{label:"纳税人识别号",prop:"tax_number"}},[r("el-input",{attrs:{placeholder:"可输入纳税人识别号",clearable:!0},model:{value:e.formOrder.request.tax_number,callback:function(t){e.$set(e.formOrder.request,"tax_number",t)},expression:"formOrder.request.tax_number"}})],1):e._e()]:e._e()],2),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(t){e.formOrder.visible=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary",loading:e.formOrder.loading,size:"small"},on:{click:e.handleSetOrder}},[e._v("确定")])],1)],1),r("el-dialog",{attrs:{title:"确定发货",visible:e.formDelivery.visible,"append-to-body":!0,"close-on-click-modal":!1,width:"760px"},on:{"update:visible":function(t){return e.$set(e.formDelivery,"visible",t)}}},[r("el-table",{ref:"dliveryMultiple",staticStyle:{"margin-top":"-25px"},attrs:{data:e.formDelivery.goods},on:{"selection-change":function(t){e.formDelivery.selection=t}}},[r("el-table-column",{attrs:{align:"center",type:"selection",width:"50",selectable:function(e){return!e.status}}}),r("el-table-column",{attrs:{label:"商品",prop:"goods_name"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-image",{staticClass:"goods-image",attrs:{src:e._f("getPreviewUrl")(t.row.goods_image),fit:"contain"},on:{click:function(r){return e.handleViewGoods(t.row.goods_id)}}}),r("div",{staticClass:"goods-info order-text"},[r("p",{staticClass:"name link",on:{click:function(r){return e.handleViewGoods(t.row.goods_id)}}},[e._v(e._s(t.row.goods_name))]),t.row.key_value?r("p",{staticClass:"son"},[e._v(e._s(t.row.key_value))]):e._e()])]}}])}),r("el-table-column",{attrs:{label:"数量",prop:"qty",width:"100"}}),r("el-table-column",{attrs:{label:"状态",prop:"status",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{style:{color:e.deliveryMap[t.row.status]}},[e._v(e._s(e.statusMap[t.row.status]))])]}}])})],1),r("div",{staticClass:"cs-mt"},[r("el-radio-group",{staticClass:"cs-pb",model:{value:e.formDelivery.delivery,callback:function(t){e.$set(e.formDelivery,"delivery",t)},expression:"formDelivery.delivery"}},[r("el-radio",{attrs:{label:0}},[e._v("无需配送")]),r("el-radio",{attrs:{label:1}},[e._v("配送方式")]),r("el-radio",{attrs:{label:2}},[e._v("快递公司")])],1),r("el-form",{ref:"formDelivery",attrs:{inline:!0,model:e.formDelivery.request,rules:e.rules.delivery,size:"small"}},[1===e.formDelivery.delivery?r("el-form-item",{attrs:{label:"配送方式",prop:"delivery_id"}},[r("el-select",{staticStyle:{width:"280px"},attrs:{placeholder:"请选择",clearable:""},model:{value:e.formDelivery.request.delivery_id,callback:function(t){e.$set(e.formDelivery.request,"delivery_id",t)},expression:"formDelivery.request.delivery_id"}},e._l(e.delivery.select,(function(t){return r("el-option",{key:t.delivery_id,attrs:{label:t.alias,value:t.delivery_id}},[r("span",{staticStyle:{float:"left"}},[e._v(e._s(t.alias))]),r("span",{staticStyle:{float:"right",color:"#8492A6","font-size":"13px"}},[e._v(e._s(t.name))])])})),1)],1):e._e(),2===e.formDelivery.delivery?r("el-form-item",{attrs:{label:"快递公司",prop:"delivery_item_id"}},[r("el-select",{staticStyle:{width:"280px"},attrs:{placeholder:"请选择",clearable:""},model:{value:e.formDelivery.request.delivery_item_id,callback:function(t){e.$set(e.formDelivery.request,"delivery_item_id",t)},expression:"formDelivery.request.delivery_item_id"}},e._l(e.delivery.company,(function(e){return r("el-option",{key:e.delivery_item_id,attrs:{label:e.name,value:e.delivery_item_id}})})),1)],1):e._e(),0!==e.formDelivery.delivery?r("el-form-item",{attrs:{label:"快递单号",prop:"logistic_code"}},[r("el-input",{attrs:{placeholder:"请输入快递单号",clearable:!0},model:{value:e.formDelivery.request.logistic_code,callback:function(t){e.$set(e.formDelivery.request,"logistic_code",t)},expression:"formDelivery.request.logistic_code"}})],1):e._e()],1)],1),r("cs-goods-drawer",{ref:"goodsDrawer"}),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(t){e.formDelivery.visible=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary",loading:e.formDelivery.loading,size:"small"},on:{click:e.deliveryOrderItem}},[e._v("确定")])],1)],1),r("cs-delivery-dist",{ref:"deliveryDist"})],1)},i=[],s=(r("4160"),r("b0c0"),r("d3b7"),r("3ca3"),r("159b"),r("ddb0"),r("1484")),o=r("dea0"),n=r("5ef3"),l=r("3766"),d={name:"order-admin-info",mixins:[s["a"]],props:{order_no:{type:String,required:!0}},data:function(){return{isInitial:!1,orderData:{get_user:{},get_order_goods:[],get_delivery:{},get_order_log:[]},tradeStatus:{},toPayment:{},clientMap:{"-1":"游客",0:"顾客",1:"商家"}}},watch:{order_no:{handler:function(){this.getOrderData()},immediate:!0}},filters:{getPaymentStatus:function(e){return e.trade_status||e.payment_status?"实付款":"预付款"},getPaymentAmount:function(e){return e.trade_status||e.payment_status?4!==e.trade_status?e.total_amount+e.use_money+e.use_integral+e.use_card:void 0:e.use_money+e.use_integral+e.use_card}},methods:{_setTradeStatus:function(){switch(this.tradeStatus={active:1,step:[{icon:"el-icon-edit-outline",title:"创建订单",description:this.orderData.create_time},{icon:"el-icon-bank-card",title:"付款",description:this.orderData.payment_time},{icon:"el-icon-receiving",title:"配货",description:this.orderData.picking_time},{icon:"el-icon-truck",title:"发货",description:this.orderData.delivery_time},{icon:"el-icon-time",title:"完成",description:this.orderData.finished_time}]},this.orderData.trade_status){case 4:this.tradeStatus.process_status="wait",this.tradeStatus.finish_status="wait";break;case 3:this.tradeStatus.process_status="finish",this.tradeStatus.finish_status="finish";break;default:this.tradeStatus.process_status="process",this.tradeStatus.finish_status="finish"}switch(this.orderData.trade_status){case 4:this.tradeStatus.active=4,this.tradeStatus.step[4].title="交易关闭";break;case 3:this.tradeStatus.active=4,this.tradeStatus.step[4].title="交易成功";break;case 2:switch(this.tradeStatus.active=3,this.orderData.delivery_status){case 1:this.tradeStatus.step[3].title="全部发货";break;case 2:this.tradeStatus.step[3].title="部分发货";break}break;case 1:this.tradeStatus.active=2,this.tradeStatus.step[2].title="配货中";break;case 0:switch(this.tradeStatus.active=1,this.orderData.payment_status){case 0:this.tradeStatus.step[1].title="等待买家付款";break;case 1:this.tradeStatus.step[1].title="买家已付款";break}break}},getOrderData:function(){var e=this,t=[Object(o["e"])(this.order_no,1)];this.isInitial||(t.push(Object(n["a"])({is_select:1,exclude_code:[4,5,6]})),t.push(Object(l["a"])("system_shopping",["source"])),this.isInitial=!0),Promise.all(t).then((function(t){e.orderData=t[0].data||{},e.currentTableData=[e.orderData],e._setTradeStatus(),t[1]&&t[1].data&&t[1].data.forEach((function(t){e.toPayment[t.code]=t})),t[2]&&t[2].data&&t[2].data.source.value.forEach((function(t,r){e.sourceMap[r]=t.name}))}))},handlePrint:function(e){this.$router.push({name:"order-admin-print",params:{type:e,orderData:this.currentTableData}})}}},c=d,u=(r("8401"),r("2877")),m=Object(u["a"])(c,a,i,!1,null,"14f2c98e",null);t["default"]=m.exports},"5ef3":function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return l})),r.d(t,"e",(function(){return d})),r.d(t,"b",(function(){return c}));var a=r("5530"),i=r("bc07"),s="/v1/payment";function o(e){return Object(i["a"])({url:s,method:"post",data:Object(a["a"])({method:"get.payment.list"},e)})}function n(e){return Object(i["a"])({url:s,method:"post",data:Object(a["a"])({method:"set.payment.item"},e)})}function l(e,t){return Object(i["a"])({url:s,method:"post",data:{method:"set.payment.sort",payment_id:e,sort:t}})}function d(e,t){return Object(i["a"])({url:s,method:"post",data:{method:"set.payment.status",payment_id:e,status:t}})}function c(e){return Object(i["a"])({url:s,method:"post",data:Object(a["a"])({method:"set.payment.finance"},e)})}},8401:function(e,t,r){"use strict";var a=r("8fe9"),i=r.n(a);i.a},"8fe9":function(e,t,r){},dea0:function(e,t,r){"use strict";r.d(t,"e",(function(){return o})),r.d(t,"f",(function(){return n})),r.d(t,"k",(function(){return l})),r.d(t,"a",(function(){return d})),r.d(t,"i",(function(){return c})),r.d(t,"g",(function(){return u})),r.d(t,"b",(function(){return m})),r.d(t,"j",(function(){return v})),r.d(t,"h",(function(){return _})),r.d(t,"d",(function(){return f})),r.d(t,"c",(function(){return h}));var a=r("5530"),i=r("bc07"),s="/v1/order";function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(i["a"])({url:s,method:"post",data:{method:"get.order.item",order_no:e,is_get_log:t}})}function n(e){return Object(i["a"])({url:s,method:"post",data:Object(a["a"])({method:"get.order.list"},e)})}function l(e){return Object(i["a"])({url:s,method:"post",data:Object(a["a"])({method:"set.order.item"},e)})}function d(e){return Object(i["a"])({url:s,method:"post",data:{method:"cancel.order.item",order_no:e}})}function c(e,t){return Object(i["a"])({url:s,method:"post",data:{method:"recycle.order.item",order_no:e,is_recycle:t}})}function u(e){return Object(i["a"])({url:s,method:"post",data:Object(a["a"])({method:"get.order.status.total"},e)})}function m(e){return Object(i["a"])({url:s,method:"post",data:Object(a["a"])({method:"change.price.order.item"},e)})}function v(e){return Object(i["a"])({url:s,method:"post",data:Object(a["a"])({method:"remark.order.item"},e)})}function _(e,t){return Object(i["a"])({url:s,method:"post",data:{method:"picking.order.list",order_no:e,is_picking:t}})}function f(e){return Object(i["a"])({url:s,method:"post",data:Object(a["a"])({method:"delivery.order.item"},e)})}function h(e){return Object(i["a"])({url:s,method:"post",data:{method:"complete.order.list",order_no:e}})}}}]);