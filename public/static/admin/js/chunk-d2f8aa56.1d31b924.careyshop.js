(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d2f8aa56","chunk-530ee0fc"],{1950:function(e,t,r){"use strict";var a=r("6bd3"),n=r.n(a);n.a},"1a19":function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"e",(function(){return l})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return u})),r.d(t,"g",(function(){return d})),r.d(t,"f",(function(){return m}));var a=r("5530"),n=r("bc07"),o="/v1/article";function c(e){return Object(n["a"])({url:o,method:"post",data:Object(a["a"])({method:"add.article.item"},e)})}function l(e){return Object(n["a"])({url:o,method:"post",data:Object(a["a"])({method:"set.article.item"},e)})}function i(e){return Object(n["a"])({url:o,method:"post",data:{method:"del.article.list",article_id:e}})}function s(e){return Object(n["a"])({url:o,method:"post",data:{method:"get.article.item",article_id:e}})}function u(e){return Object(n["a"])({url:o,method:"post",data:Object(a["a"])({method:"get.article.list"},e)})}function d(e,t){return Object(n["a"])({url:o,method:"post",data:{method:"set.article.top",article_id:e,is_top:t}})}function m(e,t){return Object(n["a"])({url:o,method:"post",data:{method:"set.article.status",article_id:e,status:t}})}},"6bd3":function(e,t,r){},a05e:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cs-p"},[r("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[r("div",{staticClass:"cs-tc clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v(e._s(e.stateMap[e.state]))])]),r("el-form",{ref:"form",attrs:{model:e.currentForm,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入文章标题",clearable:!0},model:{value:e.currentForm.title,callback:function(t){e.$set(e.currentForm,"title",t)},expression:"currentForm.title"}})],1),r("el-form-item",{attrs:{label:"分类",prop:"article_cat_id"}},[r("el-cascader",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择文章分类 试试搜索：首页",options:e.catData,props:e.cascaderProps,filterable:"",clearable:""},model:{value:e.currentForm.article_cat_id,callback:function(t){e.$set(e.currentForm,"article_cat_id",t)},expression:"currentForm.article_cat_id"}})],1),r("el-form-item",{attrs:{label:"封面",prop:"image"}},[r("el-input",{attrs:{placeholder:"可输入文章图片",clearable:!0},model:{value:e.currentForm.image,callback:function(t){e.$set(e.currentForm,"image",t)},expression:"currentForm.image"}},[r("template",{slot:"prepend"},[e.currentForm.image?r("el-popover",{attrs:{width:"150",placement:"top",trigger:"hover"}},[r("div",{staticClass:"popover-image"},[r("el-image",{attrs:{src:e._f("getPreviewUrl")(e.currentForm.image),fit:"fill"},on:{click:function(t){return t.stopPropagation(),e.$preview(e.currentForm.image)}}})],1),r("i",{staticClass:"el-icon-picture",attrs:{slot:"reference"},slot:"reference"})]):e._e()],1),r("el-dropdown",{attrs:{slot:"append","show-timeout":50},on:{command:e.handleCommand},slot:"append"},[r("el-button",{attrs:{icon:"el-icon-upload"}}),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{command:"storage",icon:"el-icon-finished"}},[e._v("资源选择")]),r("el-dropdown-item",{attrs:{command:"upload",icon:"el-icon-upload2"}},[e._v("上传资源")])],1)],1)],2)],1),r("el-form-item",{attrs:{label:"关键词",prop:"keywords"}},[r("el-input",{attrs:{placeholder:"可输入文章关键词",clearable:!0},model:{value:e.currentForm.keywords,callback:function(t){e.$set(e.currentForm,"keywords",t)},expression:"currentForm.keywords"}})],1),r("el-form-item",{attrs:{label:"描述",prop:"description"}},[r("el-input",{attrs:{placeholder:"可输入文章描述",type:"textarea",rows:3},model:{value:e.currentForm.description,callback:function(t){e.$set(e.currentForm,"description",t)},expression:"currentForm.description"}})],1),r("el-form-item",{attrs:{label:"内容",prop:"content"}},[r("cs-tinymce",{ref:"tinymce",attrs:{code:"inside_content"},model:{value:e.currentForm.content,callback:function(t){e.$set(e.currentForm,"content",t)},expression:"currentForm.content"}})],1),r("el-form-item",{attrs:{label:"文章来源",prop:"source"}},[r("el-input",{attrs:{placeholder:"可输入文章来源",clearable:!0},model:{value:e.currentForm.source,callback:function(t){e.$set(e.currentForm,"source",t)},expression:"currentForm.source"}})],1),r("el-form-item",{attrs:{label:"来源地址",prop:"source_url"}},[r("el-input",{attrs:{placeholder:"可输入来源地址",clearable:!0},model:{value:e.currentForm.source_url,callback:function(t){e.$set(e.currentForm,"source_url",t)},expression:"currentForm.source_url"}})],1),r("el-form-item",{attrs:{label:"外部连接",prop:"url"}},[r("el-input",{attrs:{placeholder:"可输入文章外部连接",clearable:!0},model:{value:e.currentForm.url,callback:function(t){e.$set(e.currentForm,"url",t)},expression:"currentForm.url"}})],1),r("el-form-item",{attrs:{label:"打开方式",prop:"target"}},[r("el-radio-group",{model:{value:e.currentForm.target,callback:function(t){e.$set(e.currentForm,"target",t)},expression:"currentForm.target"}},[r("el-radio",{attrs:{label:"_self"}},[e._v("当前窗口")]),r("el-radio",{attrs:{label:"_blank"}},[e._v("新窗口")])],1)],1),r("el-form-item",{attrs:{label:"置顶",prop:"is_top"}},[r("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.currentForm.is_top,callback:function(t){e.$set(e.currentForm,"is_top",t)},expression:"currentForm.is_top"}})],1),r("el-form-item",{attrs:{label:"状态",prop:"status"}},[r("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.currentForm.status,callback:function(t){e.$set(e.currentForm,"status",t)},expression:"currentForm.status"}})],1),r("el-form-item",{attrs:{size:"small"}},[r("el-button",{attrs:{type:"primary",loading:e.dialogLoading},on:{click:e.handleConfirm}},[e._v(e._s(e.stateButton[e.state]))]),r("el-button",{on:{click:e.handleClose}},[e._v("取消")])],1),r("cs-storage",{ref:"storage",staticStyle:{display:"none"},attrs:{limit:1},on:{confirm:e._getStorageFileList}}),r("cs-upload",{ref:"upload",staticStyle:{display:"none"},attrs:{type:"slot",accept:"image/*",limit:1,multiple:!1},on:{confirm:e._getUploadFileList}})],1)],1)],1)},n=[],o=(r("7db0"),r("d3b7"),r("b85c")),c=r("5530"),l=r("5880"),i=r("1a19"),s=r("ca00"),u={components:{csUpload:function(){return r.e("chunk-0383e8e2").then(r.bind(null,"8422"))},csStorage:function(){return r.e("chunk-7557cd56").then(r.bind(null,"8704"))},csTinymce:function(){return Promise.all([r.e("chunk-f9dee3be"),r.e("chunk-56353b7a")]).then(r.bind(null,"4b93"))}},props:{state:{type:String,required:!0,default:"create"},formData:{type:Object,required:!1,default:function(){}},catList:{type:Array,required:!0,default:function(){return[]}},catData:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{dialogLoading:!1,stateMap:{create:"新增文章",update:"编辑文章"},stateButton:{create:"确定",update:"修改"},cascaderProps:{value:"article_cat_id",label:"cat_name",children:"children",checkStrictly:!0,emitPath:!1},currentForm:{title:"",article_cat_id:null,image:"",keywords:"",description:"",content:"",source:"",source_url:"",url:"",target:"_blank",is_top:"0",status:"1"},rules:{title:[{required:!0,message:"标题不能为空",trigger:"blur"},{max:200,message:"长度不能大于 200 个字符",trigger:"blur"}],article_cat_id:[{required:!0,message:"分类不能为空",trigger:"change"}],keywords:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],description:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],content:[{required:!0,message:"内容不能为空",trigger:"blur"}],source:[{max:60,message:"长度不能大于 60 个字符",trigger:"blur"}],source_url:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],url:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}]}}},filters:{getPreviewUrl:function(e){return e?s["a"].getImageCodeUrl(e,"article_lists"):""}},watch:{formData:{handler:function(e){var t=this;"update"===this.state&&(this.currentForm=e,this.$refs.tinymce&&(this.$refs.tinymce.destroyTinymce(),this.$refs.tinymce.initTinymce(),this.$refs.tinymce.setContent(e.content)),this.$nextTick((function(){t.$refs.form.clearValidate()})))}}},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(l["mapActions"])("careyshop/page",["close"])),Object(l["mapActions"])("careyshop/update",["updateData"])),{},{handleCommand:function(e){switch(e){case"storage":this.$refs.storage.handleStorageDlg([0,2]);break;case"upload":this.$refs.upload.handleUploadDlg();break}},_getUploadFileList:function(e){if(e.length){var t=e[0].response;t&&200===t.status&&0===t.data[0].type&&(this.currentForm.image=t.data[0].url)}},_getStorageFileList:function(e){if(e.length){var t,r=Object(o["a"])(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(0===a.type){this.currentForm.image=a.url;break}}}catch(n){r.e(n)}finally{r.f()}}},handleClose:function(){this.close({tagName:this.$route.fullPath})},handleConfirm:function(){var e=this;this.$refs.form.validate((function(t){t&&(e.dialogLoading=!0,"create"===e.state?e.handleCreate():e.handleUpdate())}))},handleCreate:function(){var e=this;Object(i["a"])(this.currentForm).then((function(t){e.updateData({type:"add",name:"system-article-admin",data:Object(c["a"])(Object(c["a"])({},t.data),{},{page_views:0,get_article_cat:Object(c["a"])({},e.catList.find((function(e){return e.article_cat_id===t.data.article_cat_id})))})}),e.$message.success("操作成功"),e.handleClose()})).finally((function(){e.dialogLoading=!1}))},handleUpdate:function(){var e=this;Object(i["e"])(this.currentForm).then((function(t){e.updateData({type:"set",name:"system-article-admin",srcId:t.data.article_id,data:Object(c["a"])(Object(c["a"])({},t.data),{},{get_article_cat:Object(c["a"])({},e.catList.find((function(e){return e.article_cat_id===t.data.article_cat_id})))})}),e.$message.success("操作成功"),e.handleClose()})).finally((function(){e.dialogLoading=!1}))}})},d=u,m=(r("1950"),r("2877")),p=Object(m["a"])(d,a,n,!1,null,"050c3512",null);t["default"]=p.exports}}]);