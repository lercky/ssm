(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-yonghu-add-or-update"],{"04b3":function(e,t,i){"use strict";i.r(t);var n=i("825a"),r=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"33c3":function(e,t,i){"use strict";var n=i("96fd"),r=i.n(n);r.a},"5cad":function(e,t,i){"use strict";var n,r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",[i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("账号")]),i("v-uni-input",{attrs:{placeholder:"账号"},model:{value:e.ruleForm.zhanghao,callback:function(t){e.$set(e.ruleForm,"zhanghao",t)},expression:"ruleForm.zhanghao"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("密码")]),i("v-uni-input",{attrs:{placeholder:"密码"},model:{value:e.ruleForm.mima,callback:function(t){e.$set(e.ruleForm,"mima",t)},expression:"ruleForm.mima"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("姓名")]),i("v-uni-input",{attrs:{placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(t){e.$set(e.ruleForm,"xingming",t)},expression:"ruleForm.xingming"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("性别")]),i("v-uni-picker",{attrs:{value:e.xingbieIndex,range:e.xingbieOptions},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.xingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.ruleForm.xingbie?e.ruleForm.xingbie:"请选择性别"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("手机")]),i("v-uni-input",{attrs:{placeholder:"手机"},model:{value:e.ruleForm.shouji,callback:function(t){e.$set(e.ruleForm,"shouji",t)},expression:"ruleForm.shouji"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("邮箱")]),i("v-uni-input",{attrs:{placeholder:"邮箱"},model:{value:e.ruleForm.youxiang,callback:function(t){e.$set(e.ruleForm,"youxiang",t)},expression:"ruleForm.youxiang"}})],1),i("v-uni-view",{staticClass:"cu-form-group",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.touxiangTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title"},[e._v("头像")]),i("v-uni-view",{staticClass:"right-input"},[e.ruleForm.touxiang?i("v-uni-image",{staticClass:"avator",attrs:{src:e.ruleForm.touxiang,mode:"widthFix"}}):i("v-uni-image",{staticClass:"avator",attrs:{src:"../../static/gen/upload.png",mode:"widthFix"}})],1)],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[e._v("备注")]),i("v-uni-textarea",{attrs:{placeholder:"备注"},model:{value:e.ruleForm.beizhu,callback:function(t){e.$set(e.ruleForm,"beizhu",t)},expression:"ruleForm.beizhu"}})],1),i("v-uni-button",{staticClass:"bg-red margin-tb-sm",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)},a=[];i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}))},"6e35":function(e,t,i){"use strict";i.r(t);var n=i("5cad"),r=i("04b3");for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("33c3");var u,s=i("f0c5"),o=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"53c6838c",null,!1,n["a"],u);t["default"]=o.exports},"825a":function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("ac6a"),i("28a5"),i("96cf");var r=n(i("3b8d")),a=n(i("e2b1")),u={data:function(){return{ruleForm:{zhanghao:"",mima:"",xingming:"",xingbie:"",shouji:"",youxiang:"",touxiang:"",beizhu:""},xingbieOptions:[],xingbieIndex:0,user:{}}},components:{wPicker:a.default},computed:{},onLoad:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(t){var i,n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(i);case 3:if(n=e.sent,this.user=n.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid),!t.id){e.next=14;break}return this.ruleForm.id=t.id,e.next=12,this.$api.info("yonghu",this.ruleForm.id);case 12:n=e.sent,this.ruleForm=n.data;case 14:if(!t.cross){e.next=45;break}r=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(r);case 17:if((e.t1=e.t0()).done){e.next=45;break}if(a=e.t1.value,"zhanghao"!=a){e.next=22;break}return this.ruleForm.zhanghao=r[a],e.abrupt("continue",17);case 22:if("mima"!=a){e.next=25;break}return this.ruleForm.mima=r[a],e.abrupt("continue",17);case 25:if("xingming"!=a){e.next=28;break}return this.ruleForm.xingming=r[a],e.abrupt("continue",17);case 28:if("xingbie"!=a){e.next=31;break}return this.ruleForm.xingbie=r[a],e.abrupt("continue",17);case 31:if("shouji"!=a){e.next=34;break}return this.ruleForm.shouji=r[a],e.abrupt("continue",17);case 34:if("youxiang"!=a){e.next=37;break}return this.ruleForm.youxiang=r[a],e.abrupt("continue",17);case 37:if("touxiang"!=a){e.next=40;break}return this.ruleForm.touxiang=r[a],e.abrupt("continue",17);case 40:if("beizhu"!=a){e.next=43;break}return this.ruleForm.beizhu=r[a],e.abrupt("continue",17);case 43:e.next=17;break;case 45:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.touxiang=e.$base.url+"upload/"+t.file,e.$forceUpdate()}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.zhanghao){e.next=3;break}return this.$utils.msg("账号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){e.next=9;break}return this.$utils.msg("邮箱应输入邮件格式"),e.abrupt("return");case 9:if(!this.ruleForm.id){e.next=14;break}return e.next=12,this.$api.update("yonghu",this.ruleForm);case 12:e.next=16;break;case 14:return e.next=16,this.$api.add("yonghu",this.ruleForm);case 16:this.$utils.msgBack("提交成功");case 17:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,i=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),n=n>9?n:"0"+n,r=r>9?r:"0"+r,"".concat(i,"-").concat(n,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};t.default=u},"96fd":function(e,t,i){var n=i("f0a2");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("4f06").default;r("7f70e137",n,!0,{sourceMap:!1,shadowMode:!1})},f0a2:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-53c6838c]{padding:%?20?%}uni-textarea[data-v-53c6838c]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-53c6838c]{width:%?180?%}.avator[data-v-53c6838c]{width:%?150?%;height:%?60?%}.right-input[data-v-53c6838c]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left}',""]),e.exports=t}}]);