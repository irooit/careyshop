(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0ecee36"],{"2f46":function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return c}));var r=n("5530"),a=n("bc07"),o="/v1/user_level";function u(){return Object(a["a"])({url:o,method:"post",data:{method:"get.user.level.list"}})}function d(t){return Object(a["a"])({url:o,method:"post",data:Object(r["a"])({method:"add.user.level.item"},t)})}function i(t){return Object(a["a"])({url:o,method:"post",data:Object(r["a"])({method:"set.user.level.item"},t)})}function c(t){return Object(a["a"])({url:o,method:"post",data:{method:"del.user.level.list",user_level_id:t}})}},bc40:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("cs-container",[n("page-header",{ref:"header",attrs:{slot:"header",loading:t.loading,group:t.group,level:t.level},on:{submit:t.handleSubmit},slot:"header"}),n("page-main",{attrs:{loading:t.loading,"table-data":t.table,group:t.group},on:{sort:t.handleSort,refresh:t.handleRefresh}}),n("page-footer",{attrs:{slot:"footer",loading:t.loading,current:t.page.current,size:t.page.size,total:t.page.total},on:{change:t.handlePaginationChange},slot:"footer"})],1)},a=[],o=(n("d3b7"),n("3ca3"),n("ddb0"),n("5530")),u=n("d221"),d=n("c784"),i=n("2f46"),c={name:"member-user-client",components:{PageHeader:function(){return n.e("chunk-2d0c76e5").then(n.bind(null,"511d"))},PageMain:function(){return n.e("chunk-8abcec46").then(n.bind(null,"9008"))},PageFooter:function(){return n.e("chunk-2d225417").then(n.bind(null,"e42d"))}},data:function(){return{loading:!1,table:[],group:[],level:[],page:{current:1,size:0,total:0},order:{order_type:void 0,order_field:void 0}}},mounted:function(){var t=this;Promise.all([Object(i["c"])(),Object(d["c"])({status:1,module:"home"}),this.$store.dispatch("careyshop/db/databasePage",{user:!0})]).then((function(e){t.level=e[0].data||[],t.group=e[1].data||[],t.page.size=e[2].get("size").value()||25})).then((function(){t.handleSubmit()}))},methods:{handleRefresh:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(!(this.page.current-1)||this.page.current--),this.$nextTick((function(){t.$refs.header.handleFormSubmit()}))},handlePaginationChange:function(t){var e=this;this.page=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSort:function(t){var e=this;this.order=t,this.$nextTick((function(){e.$refs.header.handleFormSubmit()}))},handleSubmit:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n&&(this.page.current=1),this.loading=!0,Object(u["d"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},t),this.order),{},{page_no:this.page.current,page_size:this.page.size})).then((function(t){e.table=t.data.items||[],e.page.total=t.data.total_result})).finally((function(){e.loading=!1}))}}},s=c,l=n("2877"),h=Object(l["a"])(s,r,a,!1,null,null,null);e["default"]=h.exports},c784:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return d})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"f",(function(){return s})),n.d(e,"e",(function(){return l}));var r=n("5530"),a=n("bc07"),o="/v1/auth_group";function u(t){return Object(a["a"])({url:o,method:"post",data:Object(r["a"])({method:"add.auth.group.item"},t)})}function d(t){return Object(a["a"])({url:o,method:"post",data:Object(r["a"])({method:"set.auth.group.item"},t)})}function i(t){return Object(a["a"])({url:o,method:"post",data:{method:"del.auth.group.item",group_id:t}})}function c(t){return Object(a["a"])({url:o,method:"post",data:Object(r["a"])({method:"get.auth.group.list"},t)})}function s(t,e){return Object(a["a"])({url:o,method:"post",data:{method:"set.auth.group.status",group_id:t,status:e}})}function l(t,e){return Object(a["a"])({url:o,method:"post",data:{method:"set.auth.group.sort",group_id:t,sort:e}})}},d221:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"f",(function(){return d})),n.d(e,"h",(function(){return i})),n.d(e,"g",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h})),n.d(e,"e",(function(){return f}));var r=n("5530"),a=n("bc07"),o="/v1/user";function u(t){return Object(a["a"])({url:o,method:"post",data:Object(r["a"])({method:"add.user.item"},t)})}function d(t){return Object(a["a"])({url:o,method:"post",data:Object(r["a"])({method:"set.user.item"},t)})}function i(t,e){return Object(a["a"])({url:o,method:"post",data:{method:"set.user.status",client_id:t,status:e}})}function c(t,e,n){return Object(a["a"])({url:o,method:"post",data:{method:"set.user.password",client_id:t,password:e,password_confirm:n}})}function s(t){return Object(a["a"])({url:o,method:"post",data:{method:"del.user.list",client_id:t}})}function l(t){return Object(a["a"])({url:o,method:"post",data:{method:"get.user.info",client_id:t}})}function h(t){return Object(a["a"])({url:o,method:"post",data:Object(r["a"])({method:"get.user.list"},t)})}function f(t){return Object(a["a"])({url:o,method:"post",data:{method:"get.user.select",client_id:t}})}}}]);