(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cc1659c"],{4239:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"e",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return h})),n.d(e,"f",(function(){return l}));var a=n("5530"),o=n("bc07"),r="/v1/brand";function d(t){return Object(o["a"])({url:r,method:"post",data:Object(a["a"])({method:"add.brand.item"},t)})}function i(t){return Object(o["a"])({url:r,method:"post",data:Object(a["a"])({method:"set.brand.item"},t)})}function c(t){return Object(o["a"])({url:r,method:"post",data:{method:"del.brand.list",brand_id:t}})}function u(t,e){return Object(o["a"])({url:r,method:"post",data:{method:"set.brand.status",brand_id:t,status:e}})}function s(t){return Object(o["a"])({url:r,method:"post",data:Object(a["a"])({method:"get.brand.list"},t)})}function h(t){return Object(o["a"])({url:r,method:"post",data:Object(a["a"])({method:"get.brand.select"},t)})}function l(t,e){return Object(o["a"])({url:r,method:"post",data:{method:"set.brand.sort",brand_id:t,sort:e}})}},c54e:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"f",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return s})),n.d(e,"g",(function(){return h})),n.d(e,"e",(function(){return l}));var a=n("5530"),o=n("bc07"),r="/v1/goods_category";function d(t){return Object(o["a"])({url:r,method:"post",data:Object(a["a"])({method:"add.goods.category.item"},t)})}function i(t){return Object(o["a"])({url:r,method:"post",data:Object(a["a"])({method:"set.goods.category.item"},t)})}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(o["a"])({url:r,method:"post",data:{method:"del.goods.category.list",goods_category_id:t,not_empty:e}})}function u(t){return Object(o["a"])({url:r,method:"post",data:{method:"get.goods.category.item",goods_category_id:t}})}function s(t){return Object(o["a"])({url:r,method:"post",data:Object(a["a"])({method:"get.goods.category.list"},t)})}function h(t,e){return Object(o["a"])({url:r,method:"post",data:{method:"set.goods.category.status",goods_category_id:t,status:e}})}function l(t){return Object(o["a"])({url:r,method:"post",data:{method:"set.goods.category.index",goods_category_id:t}})}},e81e:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading,"cat-data":t.cat},on:{submit:t.handleSubmit},slot:"header"}),n("page-main",{attrs:{loading:t.loading,"cat-data":t.cat,"table-data":t.table},on:{sort:t.handleSort,refresh:t.handleRefresh}}),n("page-footer",{attrs:{slot:"footer",loading:t.loading,current:t.page.current,size:t.page.size,total:t.page.total},on:{change:t.handlePaginationChange},slot:"footer"})],1)},o=[],r=(n("d3b7"),n("3ca3"),n("ddb0"),n("5530")),d=n("ca00"),i=n("4239"),c=n("c54e"),u={name:"goods-setting-brand",components:{PageHeader:function(){return n.e("chunk-2d21ef35").then(n.bind(null,"d86a"))},PageMain:function(){return n.e("chunk-9fd8dfa6").then(n.bind(null,"d4f2"))},PageFooter:function(){return n.e("chunk-2d225417").then(n.bind(null,"e42d"))}},data:function(){return{loading:!1,cat:[],table:[],page:{current:1,size:0,total:0},order:{order_type:void 0,order_field:void 0}}},mounted:function(){var t=this;Promise.all([Object(c["d"])(null),this.$store.dispatch("careyshop/db/databasePage",{user:!0})]).then((function(e){t.cat=d["a"].formatDataToTree(e[0].data,"goods_category_id"),t.page.size=e[1].get("size").value()||25})).then((function(){t.handleSubmit()}))},methods:{handleRefresh:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(!(this.page.current-1)||this.page.current--),this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSort:function(t){var e=this;this.order=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSubmit:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n&&(this.page.current=1),this.loading=!0,Object(i["c"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},t),this.order),{},{page_no:this.page.current,page_size:this.page.size})).then((function(t){e.table=t.data.items||[],e.page.total=t.data.total_result})).finally((function(){e.loading=!1}))}}},s=u,h=n("2877"),l=Object(h["a"])(s,a,o,!1,null,null,null);e["default"]=l.exports}}]);