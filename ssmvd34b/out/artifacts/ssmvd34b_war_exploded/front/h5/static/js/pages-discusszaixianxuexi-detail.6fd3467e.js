(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-discusszaixianxuexi-detail"],{"04fd":function(t,e,n){"use strict";var i=n("4968"),a=n.n(i);a.a},"1ae5":function(t,e,n){"use strict";n.r(e);var i=n("7677"),a=n("69b4");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("04fd");var r,o=n("f0c5"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"71ca02c4",null,!1,i["a"],r);e["default"]=c.exports},4968:function(t,e,n){var i=n("8a6a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7e489b40",i,!0,{sourceMap:!1,shadowMode:!1})},"61e0":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a481"),n("96cf");var a=i(n("3b8d")),s={data:function(){return{id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],count:0}},computed:{SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.id=e.id,this.init(),n=uni.getStorageSync("nowTable"),t.next=5,this.$api.session(n);case 5:i=t.sent,this.user=i.data;case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),destroyed:function(){window.clearInterval(this.inter)},methods:{onPayTap:function(){uni.setStorageSync("paytable","discusszaixianxuexi"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onAcrossTap:function(t){uni.setStorageSync("crossTable","discusszaixianxuexi"),uni.setStorageSync("crossObj",this.detail),this.$utils.jump("../".concat(t,"/add-or-update?cross=true"))},init:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("discusszaixianxuexi",this.id);case 2:e=t.sent,this.detail=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.list("discussdiscusszaixianxuexi",{page:e.num,limit:e.size,refid:this.id});case 2:n=t.sent,1==e.num&&(this.commentList=[]),this.commentList=this.commentList.concat(n.data.list),0==n.data.list.length&&(this.hasNext=!1),e.endSuccess(e.size,this.hasNext);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(t){var e=this;uni.downloadFile({url:e.$base.url+"file/download?fileName="+t.replace(e.$base.url+"upload/",""),success:function(n){200===n.statusCode&&(e.$utils.msg("下载成功"),window.open(t))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){this.$utils.jump("../discussdiscusszaixianxuexi/add-or-update?refid=".concat(this.id))},zan:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=this,uni.showModal({title:"提示",content:"是否点赞",success:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.confirm){t.next=5;break}return e.detail.thumbsupnum+=1,t.next=4,e.$api.update("discusszaixianxuexi",e.detail);case 4:e.$utils.msg("点赞成功");case 5:case"end":return t.stop()}}),t)})));function n(e){return t.apply(this,arguments)}return n}()});case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),cai:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=this,uni.showModal({title:"提示",content:"是否点踩",success:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.confirm){t.next=5;break}return e.detail.crazilynum+=1,t.next=4,e.$api.update("discusszaixianxuexi",e.detail);case 4:e.$utils.msg("点踩成功");case 5:case"end":return t.stop()}}),t)})));function n(e){return t.apply(this,arguments)}return n}()});case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.detail.sfsh){t.next=3;break}return this.$utils.msg("请选择审核状态"),t.abrupt("return");case 3:if(this.detail.shhf){t.next=6;break}return this.$utils.msg("请填写审核回复"),t.abrupt("return");case 6:return"通过"==this.detail.sfsh&&(this.detail.sfsh="是"),"不通过"==this.detail.sfsh&&(this.detail.sfsh="否"),t.next=10,this.$api.update("discusszaixianxuexi",this.detail);case 10:this.$utils.msg("审核成功"),this.$refs.popup.close();case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};e.default=s},"69b4":function(t,e,n){"use strict";n.r(e);var i=n("61e0"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},7677:function(t,e,n){"use strict";var i={"mescroll-uni":n("f05e").default,"uni-popup":n("1c89").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption,bottom:100},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"detail-content"},[n("v-uni-view",{staticStyle:{"margin-top":"10upx"}},[t._v("关联表id："+t._s(t.detail.refid))])],1),n("v-uni-view",{staticClass:"time-content"},[n("v-uni-view",{staticClass:"header"},[t._v("评论内容")]),n("v-uni-view",{staticClass:"content"},[t._v(t._s(t.detail.content))])],1),n("v-uni-view",{staticClass:"time-content"},[n("v-uni-view",{staticClass:"header"},[t._v("回复内容")]),n("v-uni-view",{staticClass:"content"},[t._v(t._s(t.detail.reply))])],1),n("v-uni-view",{staticClass:"time-content"},[n("v-uni-view",{staticClass:"comoment-header"},[n("v-uni-view",[t._v("评论")]),n("v-uni-view",{staticClass:"btn-comment-content",staticStyle:{display:"flex","align-items":"center"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onCommentTap.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"icon",attrs:{src:"../../static/gen/tianjia.png",mode:""}}),t._v("添加评论")],1)],1),n("v-uni-view",{staticClass:"cu-list comment",staticStyle:{"margin-top":"20upx"}},t._l(t.commentList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"cu-item comment-item"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"text-grey"},[t._v("匿名用户"+t._s(e.userid))]),n("v-uni-view",{staticClass:"text-gray text-content text-df content"},[t._v(t._s(e.content))]),n("v-uni-view",{staticClass:"margin-top-sm flex justify-between"},[n("v-uni-view",{staticClass:"text-gray text-df"},[t._v(t._s(e.addtime))])],1)],1)],1)})),1)],1),n("v-uni-view",{staticClass:"bottom-content cu-bar bg-white tabbar border shop"},[n("v-uni-view",{staticStyle:{"text-align":"left",display:"flex"}}),n("v-uni-view",{staticStyle:{"text-align":"right"}})],1)],1),n("uni-popup",{ref:"popup",staticClass:"popup-content",attrs:{type:"center"}},[n("v-uni-form",{staticClass:"popup-form"},[n("v-uni-view",{staticClass:"cu-form-group margin-top"},[n("v-uni-picker",{attrs:{value:t.sfshIndex,range:t.sfshOptions},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.sfshChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.detail.sfsh?t.detail.sfsh:"选择审核结果"))])],1)],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-textarea",{staticStyle:{width:"200px"},attrs:{placeholder:"审核回复"},model:{value:t.detail.shhf,callback:function(e){t.$set(t.detail,"shhf",e)},expression:"detail.shhf"}})],1),n("v-uni-view",{staticClass:"btn-content"},[n("v-uni-button",{staticClass:"cu-btn bg-cyan",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onCloseWinTap.apply(void 0,arguments)}}},[t._v("取消")]),n("v-uni-button",{staticClass:"cu-btn bg-red",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onFinishTap.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1)],1)},s=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}))},"8a6a":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.swiper[data-v-71ca02c4]{width:100%;height:%?450?%}.swiper uni-image[data-v-71ca02c4]{width:100%}.detail-content[data-v-71ca02c4]{font-size:%?28?%;color:#888;padding:%?10?% %?20?%;background:#fff;line-height:%?45?%}.detail-content .name[data-v-71ca02c4]{font-size:%?38?%;font-weight:blod;margin-bottom:%?20?%;padding-top:%?20?%}.detail-content .price[data-v-71ca02c4]{font-size:%?33?%;color:red;margin-top:%?20?%}.time-content[data-v-71ca02c4]{background:#fff;padding:%?30?%;font-size:%?30?%;border-radius:%?20?%;margin-top:%?20?%}.time-content .header[data-v-71ca02c4]{font-size:%?33?%;margin-bottom:%?20?%}.bottom-content[data-v-71ca02c4]{position:fixed;bottom:0;left:0;width:100%}.comoment-header[data-v-71ca02c4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.comoment-header .btn-comment-content[data-v-71ca02c4]{color:#dd514c;font-weight:700}.comment-item[data-v-71ca02c4]{margin-bottom:%?10?%;border-bottom:1px solid #eee;padding-bottom:%?20?%}.comment-item .content[data-v-71ca02c4]{margin-left:%?20?%;margin-top:%?20?%}.icon[data-v-71ca02c4]{width:%?50?%;height:%?50?%}.popup-content .popup-form[data-v-71ca02c4]{background:#fff;margin-top:%?20?%}.popup-content .btn-content[data-v-71ca02c4]{text-align:right;background:#fff}.popup-content .btn-content uni-button[data-v-71ca02c4]{margin-left:%?20?%;margin-right:%?20?%;margin-bottom:%?20?%}.seat-list[data-v-71ca02c4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;background:#fff;margin:%?20?%;border-radius:%?20?%;padding:%?20?%;font-size:%?30?%}.seat-list .seat-item[data-v-71ca02c4]{width:33.33%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?20?%}.seat-list .seat-item .seat-icon[data-v-71ca02c4]{width:%?50?%;height:%?50?%;margin-bottom:%?10?%}',""]),t.exports=e}}]);