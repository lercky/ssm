(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-order-confirm/shop-order-confirm"],{"045f":function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=o(t("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function a(e,r,t,n,o,a,s){try{var u=e[a](s),d=u.value}catch(i){return void t(i)}u.done?r(d):Promise.resolve(d).then(n,o)}function s(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var s=e.apply(r,t);function u(e){a(s,n,o,u,d,"next",e)}function d(e){a(s,n,o,u,d,"throw",e)}u(void 0)}))}}var u={data:function(){return{user:{},orderGoods:{},address:{},total:0,type:1,seat:0}},onLoad:function(e){var r=this;return s(n.default.mark((function t(){return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r.type=e.type,r.seat=e.seat;case 2:case"end":return t.stop()}}),t)})))()},onShow:function(){var r=this;return s(n.default.mark((function t(){var o,a,s,u;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.getStorageSync("nowTable"),t.next=3,r.$api.session(o);case 3:if(a=t.sent,r.user=a.data,1==r.seat){t.next=15;break}if(s=e.getStorageSync("address"),!s||r.user.id!=r.address.userid){t.next=11;break}r.address=e.getStorageSync("address"),t.next=15;break;case 11:return t.next=13,r.$api.defaultAddress(r.user.id);case 13:a=t.sent,r.address=a.data;case 15:if(r.orderGoods=e.getStorageSync("orderGoods"),1!=r.seat)for(u=0;u<r.orderGoods.length;u++)r.total=parseFloat(r.orderGoods[u].price)*r.orderGoods[u].buynumber;else r.total=parseFloat(r.orderGoods[0].total),r.address=r.orderGoods[0].address;case 17:case"end":return t.stop()}}),t)})))()},methods:{onSubmitTap:function(){var r=this;return s(n.default.mark((function t(){var o,a;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o=r,a=e.getStorageSync("nowTable"),e.showModal({title:"提示",content:"是否确认支付",success:function(){var r=s(n.default.mark((function r(t){var s,u,d,i;return n.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!t.confirm){r.next=42;break}if(s=o.type,u=!0,1!=s){r.next=10;break}if(!(o.user.money<o.total)){r.next=8;break}return o.$utils.msg("余额不足，请先充值"),u=!1,r.abrupt("return");case 8:r.next=15;break;case 10:if(2!=s){r.next=15;break}if(!(o.user.jifen<o.total)){r.next=15;break}return o.$utils.msg("积分不足，兑换商品失败"),u=!1,r.abrupt("return");case 15:d=0;case 16:if(!(d<o.orderGoods.length)){r.next=28;break}return i={orderid:o.$utils.genTradeNo(),tablename:o.orderGoods[d].tablename,userid:o.user.id,goodid:o.orderGoods[d].goodid,goodname:o.orderGoods[d].goodname,picture:o.orderGoods[d].picture,buynumber:o.orderGoods[d].buynumber,discountprice:o.orderGoods[d].price,price:o.orderGoods[d].price,total:o.orderGoods[d].price*o.orderGoods[d].buynumber,discounttotal:o.orderGoods[d].price*o.orderGoods[d].buynumber,type:s,address:o.address.address,status:"已支付"},1==o.seat&&(i["address"]=o.address),r.next=21,o.$api.add("orders",i);case 21:if(!o.orderGoods[d].id){r.next=25;break}return r.next=24,o.$api.del("cart",JSON.stringify([o.orderGoods[d].id]));case 24:e.removeStorageSync("cart".concat(o.orderGoods[d].goodid).concat(o.user.id));case 25:d++,r.next=16;break;case 28:if(!u){r.next=42;break}if(1!=s){r.next=37;break}return o.$utils.msgBack("支付成功"),o.user.money=o.user.money-o.total,(o.user.jifen||0==o.user.jifen)&&(o.user.jifen=o.user.jifen+o.total),r.next=35,o.$api.update(a,o.user);case 35:r.next=42;break;case 37:if(2!=s){r.next=42;break}return o.$utils.msgBack("兑换成功"),o.user.jifen=o.user.jifen-o.total,r.next=42,o.$api.update(a,o.user);case 42:case"end":return r.stop()}}),r)})));function t(e){return r.apply(this,arguments)}return t}()});case 3:case"end":return t.stop()}}),t)})))()},onAddressTap:function(){this.$utils.jump("../shop-address/shop-address")}}};r.default=u}).call(this,t("543d")["default"])},"0bf5":function(e,r,t){"use strict";var n=t("a310"),o=t.n(n);o.a},4538:function(e,r,t){"use strict";var n;t.d(r,"b",(function(){return o})),t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return n}));var o=function(){var e=this,r=e.$createElement;e._self._c},a=[]},"5c27":function(e,r,t){"use strict";t.r(r);var n=t("045f"),o=t.n(n);for(var a in n)"default"!==a&&function(e){t.d(r,e,(function(){return n[e]}))}(a);r["default"]=o.a},a310:function(e,r,t){},a87a:function(e,r,t){"use strict";(function(e){t("e05c");n(t("66fd"));var r=n(t("e325"));function n(e){return e&&e.__esModule?e:{default:e}}e(r.default)}).call(this,t("543d")["createPage"])},e325:function(e,r,t){"use strict";t.r(r);var n=t("4538"),o=t("5c27");for(var a in o)"default"!==a&&function(e){t.d(r,e,(function(){return o[e]}))}(a);t("0bf5");var s,u=t("f0c5"),d=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);r["default"]=d.exports}},[["a87a","common/runtime","common/vendor"]]]);