(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5aaef415"],{"25c9":function(t,e,o){"use strict";o.d(e,"a",(function(){return i})),o.d(e,"e",(function(){return c})),o.d(e,"b",(function(){return u})),o.d(e,"c",(function(){return f})),o.d(e,"d",(function(){return s})),o.d(e,"f",(function(){return d}));var n=o("5530"),a=o("bc07"),r="/v1/topic";function i(t){return Object(a["a"])({url:r,method:"post",data:Object(n["a"])({method:"add.topic.item"},t)})}function c(t){return Object(a["a"])({url:r,method:"post",data:Object(n["a"])({method:"set.topic.item"},t)})}function u(t){return Object(a["a"])({url:r,method:"post",data:{method:"del.topic.list",topic_id:t}})}function f(t){return Object(a["a"])({url:r,method:"post",data:{method:"get.topic.item",topic_id:t}})}function s(t){return Object(a["a"])({url:r,method:"post",data:Object(n["a"])({method:"get.topic.list"},t)})}function d(t,e){return Object(a["a"])({url:r,method:"post",data:{method:"set.topic.status",topic_id:t,status:e}})}},cb5c:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("cs-container",[o("page-edit",{attrs:{state:"update",formData:t.formData}})],1)},a=[],r=(o("a9e3"),o("b64b"),o("d3b7"),o("25f0"),o("5530")),i=o("25c9"),c={name:"system-topic-update",components:{PageEdit:function(){return o.e("chunk-aaa6ffc0").then(o.bind(null,"3113"))}},props:{topic_id:{type:[Number,String],required:!0}},data:function(){return{formData:{},formBuffer:{},isSourceRoute:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.isSourceRoute||Object.keys(t.formBuffer).length||t.switchData(t.topic_id)}))},beforeRouteEnter:function(t,e,o){t.params.topic_id?o((function(e){e.switchData(t.params.topic_id),e.isSourceRoute=!0})):o(new Error("未指定ID"))},beforeRouteUpdate:function(t,e,o){t.params.topic_id?(this.switchData(t.params.topic_id),o()):o(new Error("未指定ID"))},methods:{switchData:function(t){var e=this;this.formBuffer[t]?this.formData=this.formBuffer[t]:this.$nextTick((function(){e.formData={},Object(i["c"])(t).then((function(o){e.formBuffer[t]=Object(r["a"])(Object(r["a"])({},o.data),{},{status:o.data.status.toString()}),e.formData=e.formBuffer[t]}))}))}}},u=c,f=o("2877"),s=Object(f["a"])(u,n,a,!1,null,null,null);e["default"]=s.exports}}]);