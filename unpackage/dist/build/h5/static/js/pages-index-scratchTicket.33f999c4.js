(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-scratchTicket"],{"016f":function(t,e,i){"use strict";i.r(e);var n=i("62d7"),o=i("08c7");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);i("de25");var a,c=i("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"0dc4bffd",null,!1,n["a"],a);e["default"]=s.exports},"08c7":function(t,e,i){"use strict";i.r(e);var n=i("af5d"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"1da1":function(t,e,i){"use strict";function n(t,e,i,n,o,r,a){try{var c=t[r](a),s=c.value}catch(p){return void i(p)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,i=arguments;return new Promise((function(o,r){var a=t.apply(e,i);function c(t){n(a,o,r,c,s,"next",t)}function s(t){n(a,o,r,c,s,"throw",t)}c(void 0)}))}}i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},"410c":function(t,e,i){"use strict";i.r(e);var n=i("a551"),o=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"62d7":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"scratch-ticket"},[i("v-uni-view",{staticClass:"title-icon",attrs:{id:"title-icon"}},[i("v-uni-image",{attrs:{src:"https://img-cdn.macaotown.com/o_1f2lu953ltkk1fli1bkks28ab5o.png"}})],1),i("v-uni-view",{staticClass:"ticket-title",attrs:{id:"ticket-title"}},[i("v-uni-image",{staticClass:"ticket-title-start",attrs:{id:"ticket-title-start",src:"https://img-cdn.macaotown.com/o_1f2lu953l6gd18gl7691qh01svmn.png"}}),i("v-uni-view",{staticClass:"ticket-title-text",attrs:{id:"ticket-title-text"}},[t._v("泰豐x人頭馬 消費賞不停")]),i("v-uni-image",{staticClass:"ticket-title-start",attrs:{id:"ticket-title-start",src:"https://img-cdn.macaotown.com/o_1f2lu953l6gd18gl7691qh01svmn.png"}})],1),i("v-uni-view",{staticClass:"broadcast"},[i("v-uni-view",{staticClass:"ticket-handel"},[i("scratch-card",{ref:"card",attrs:{disabled:!1,titleColor:"#7c7ca0",titleSize:36,title:"刮開即中獎",watermark:""},on:{complete:function(e){arguments[0]=e=t.$handleEvent(e),t.seatShow.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"scratch-card"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showOppenPropBody,expression:"showOppenPropBody"}],staticClass:"get-ticket-content"},[t._v("恭喜你!中獎了")]),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showNoOppenPropBody,expression:"showNoOppenPropBody"}],staticClass:"get-ticket-content no-get-ticket-content"},[t._v("未能中獎")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"residue-content"},[i("v-uni-view",{staticClass:"residue-content-body"},[i("v-uni-view",{staticClass:"residue-content-text"},[t._v("剩餘")]),i("v-uni-view",{staticClass:"residue-content-count"},[t._v("1")]),i("v-uni-view",{staticClass:"residue-content-text"},[t._v("次刮獎機會")])],1)],1),i("v-uni-view",{staticClass:"prize-list"},[i("v-uni-view",{staticClass:"prize-list-tile"},[i("v-uni-image",{staticClass:"prize-list-tile-img",attrs:{src:"https://img-cdn.macaotown.com/o_1f2lu953lvr41ok71e5714pc2ukp.png"}}),i("v-uni-view",{staticClass:"prize-list-tile-text"},[t._v("刮刮樂獎品")]),i("v-uni-image",{staticClass:"prize-list-tile-img",attrs:{src:"https://img-cdn.macaotown.com/o_1f2lu953l1rq214jb12itf4q5v5q.png"}})],1),i("v-uni-view",{staticClass:"prize"},t._l(3,(function(e){return i("v-uni-view",{key:e,staticClass:"prize-item"},[i("v-uni-image",{staticClass:"prize-item-img",attrs:{src:"https://img-cdn.macaotown.com/o_1f2l3pd8g15vpju7f4pf2rv8c.png"}}),i("v-uni-view",{staticClass:"prize-item-title"},[t._v("人頭馬")])],1)})),1),i("v-uni-view",{staticClass:"support-content"},[t._v("技術支持 達酷互動雲 dakuu.com")])],1),i("v-uni-view",{staticClass:"side-menu"},[i("v-uni-view",{staticClass:"menu-mine side-menu-item"},[t._v("中獎記錄")]),i("v-uni-view",{staticClass:"menu-rules side-menu-item"},[t._v("活動規則")])],1),t.showOppenProp?i("v-uni-view",{staticClass:"open-prop-content",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.moveStop.apply(void 0,arguments)}}},[t.showOppenPropBody?i("v-uni-view",{staticClass:"open-prop-body"},[i("v-uni-view",{staticClass:"open-prop-title"},[i("v-uni-view",{staticClass:"open-prop-title-line"}),i("v-uni-view",{staticClass:"open-prop-title-text"},[t._v("恭喜你獲得")]),i("v-uni-view",{staticClass:"open-prop-title-line"})],1),i("v-uni-view",{staticClass:"open-prop-produce"},[i("v-uni-view",{staticClass:"open-prop-produce-decriation"},[t._v("路易十三抽獎券")]),i("v-uni-image",{attrs:{src:"https://img-cdn.macaotown.com/o_1f2l3pd8g15vpju7f4pf2rv8c.png"}})],1),i("v-uni-view",{staticClass:"open-prop-btn"},[i("v-uni-view",{staticClass:"open-prop-btn-text"},[t._v("查看獎品")]),i("v-uni-image",{attrs:{src:"https://img-cdn.macaotown.com/o_1f2nppedu19u5hea89p166v1qpce.png"}})],1),i("v-uni-view",{staticClass:"close-open-prop",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showOppenProp=!1}}},[i("v-uni-image",{attrs:{src:"https://img-cdn.macaotown.com/o_1f2nr1oci18hr1vkbc0pa717l5d.png"}})],1)],1):t._e(),t.showNoOppenPropBody?i("v-uni-view",{staticClass:"no-open-prop-body"},[i("v-uni-view",{staticClass:"no-open-prop-title"},[i("v-uni-view",{staticClass:"no-open-prop-title-line"}),i("v-uni-view",{staticClass:"no-open-prop-title-text"},[t._v("很遺憾未中獎")]),i("v-uni-view",{staticClass:"no-open-prop-title-line"})],1),i("v-uni-view",{staticClass:"no-open-prop-subtitle"},[t._v("再接再厲")]),i("v-uni-view",{staticClass:"no-open-prop-img"},[i("v-uni-image",{attrs:{src:"https://img-cdn.macaotown.com/o_1f2nr1ocj6tq1fm11v2891l2h6e.png"}})],1),i("v-uni-view",{staticClass:"no-open-prop-btn"},[i("v-uni-view",{staticClass:"no-open-prop-btn-text",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showOppenProp=!1}}},[t._v("我知道了")]),i("v-uni-image",{attrs:{src:"https://img-cdn.macaotown.com/o_1f2nr1ocj1ksogmc1bhddgeb9mg.png"}})],1),i("v-uni-view",{staticClass:"no-close-open-prop",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showOppenProp=!1}}},[i("v-uni-image",{attrs:{src:"https://img-cdn.macaotown.com/o_1f2nr1oci18hr1vkbc0pa717l5d.png"}})],1)],1):t._e()],1):t._e()],1)},r=[]},"75e1":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.scratch-ticket[data-v-0dc4bffd]{width:100%;background-image:url(https://img-cdn.macaotown.com/o_1f2lu953lbqf6lo61nf2le4el.png);background-repeat:no-repeat;background-size:100%;padding-top:%?262?%}.scratch-ticket .title-icon[data-v-0dc4bffd]{width:%?558?%;height:%?112?%;margin:auto}.scratch-ticket .ticket-title[data-v-0dc4bffd]{width:%?542?%;height:%?68?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#6061d1;-webkit-box-shadow:0 %?1?% 0 0 #fff,0 %?2?% %?2?% 0 rgba(0,0,0,.19);box-shadow:0 %?1?% 0 0 #fff,0 %?2?% %?2?% 0 rgba(0,0,0,.19);-webkit-border-radius:%?18?%;border-radius:%?18?%;margin:auto;margin-top:%?14?%;padding:0 %?20?%}.scratch-ticket .ticket-title .ticket-title-start[data-v-0dc4bffd]{width:%?26?%;height:%?26?%}.scratch-ticket .ticket-title .ticket-title-text[data-v-0dc4bffd]{width:%?378?%;overflow:hidden;white-space:nowrap;word-break:normal;font-size:%?34?%;font-weight:500;font-synthesis:initial;color:#e6e7ff}.scratch-ticket .broadcast[data-v-0dc4bffd]{width:%?708?%;height:%?432?%;margin:auto;background-image:url(https://img-cdn.macaotown.com/o_1f2lu953l87gj8b1uud10ph1dn8r.png);background-repeat:repeat;background-size:100%;margin-top:%?80?%;padding-top:%?72?%;-webkit-box-sizing:border-box;box-sizing:border-box}.scratch-ticket .broadcast .cast-head[data-v-0dc4bffd]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?24?%;line-height:%?40?%;padding-left:%?30?%}.scratch-ticket .broadcast .ticket-handel[data-v-0dc4bffd]{width:%?562?%;height:%?294?%;margin:auto;-webkit-border-radius:%?8?%;border-radius:%?8?%;overflow:hidden}.scratch-ticket .broadcast .ticket-handel .scratch-card[data-v-0dc4bffd]{height:%?294?%}.scratch-ticket .broadcast .ticket-handel .scratch-card .get-ticket-content[data-v-0dc4bffd]{width:100%;text-align:center;line-height:%?294?%;font-size:%?74?%;font-family:Source Han Sans CN;font-weight:800;font-style:italic;color:#565662;background:-webkit-gradient(linear,left bottom,left top,from(#e4b77b),to(#d29b4f));background:-webkit-linear-gradient(bottom,#e4b77b,#d29b4f);background:linear-gradient(0deg,#e4b77b,#d29b4f);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.scratch-ticket .broadcast .ticket-handel .scratch-card .no-get-ticket-content[data-v-0dc4bffd]{background:-webkit-gradient(linear,left bottom,left top,from(#9c9cb8),color-stop(99.31641%,#8c8ca8));background:-webkit-linear-gradient(bottom,#9c9cb8,#8c8ca8 99.31641%);background:linear-gradient(0deg,#9c9cb8,#8c8ca8 99.31641%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.scratch-ticket .residue-content[data-v-0dc4bffd]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-sizing:border-box;box-sizing:border-box}.scratch-ticket .residue-content .residue-content-body[data-v-0dc4bffd]{width:%?226?%;height:%?60?%;margin-right:%?60?%;background-image:url(https://img-cdn.macaotown.com/o_1f2lu953l1o5d13tc3ou44p3cik.png);background-repeat:no-repeat;background-size:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.scratch-ticket .residue-content .residue-content-body .residue-content-text[data-v-0dc4bffd]{font-size:%?24?%;color:#b83456}.scratch-ticket .residue-content .residue-content-body .residue-content-count[data-v-0dc4bffd]{font-size:%?42?%;font-family:DIN Condensed;font-weight:700;font-style:italic;color:#b83456;margin-right:%?8?%}.scratch-ticket .prize-list[data-v-0dc4bffd]{width:calc(100% - %?4?%);margin:auto;background:-webkit-gradient(linear,left bottom,left top,from(#f3809d),to(#fc93ae));background:-webkit-linear-gradient(bottom,#f3809d,#fc93ae);background:linear-gradient(0deg,#f3809d,#fc93ae);padding-top:%?35?%;margin-top:%?104?%}.scratch-ticket .prize-list .prize-list-tile[data-v-0dc4bffd]{width:100%;height:%?32?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.scratch-ticket .prize-list .prize-list-tile .prize-list-tile-img[data-v-0dc4bffd]{width:%?106?%;height:%?4?%;border:%?2?% dashed #333;-webkit-border-radius:%?4?%;border-radius:%?4?%}.scratch-ticket .prize-list .prize-list-tile .prize-list-tile-text[data-v-0dc4bffd]{color:#fff;font-size:%?34?%;font-style:italic;font-family:PingFang SC;font-weight:600;margin:0 %?34?%}.scratch-ticket .prize-list .prize[data-v-0dc4bffd]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-top:%?44?%}.scratch-ticket .prize-list .prize .prize-item[data-v-0dc4bffd]{width:%?214?%;height:%?252?%;background-image:url(https://img-cdn.macaotown.com/o_1f2lu953l1f5m15458pt7f81sj4j.png);background-repeat:no-repeat;background-size:100%;text-align:center}.scratch-ticket .prize-list .prize .prize-item .prize-item-img[data-v-0dc4bffd]{width:calc(100% - %?80?%);height:calc(100% - %?100?%);margin:auto;margin-top:%?20?%}.scratch-ticket .prize-list .prize .prize-item .prize-item-title[data-v-0dc4bffd]{border-top:%?2?% dashed #333;width:%?156?%;height:%?68?%;margin:auto;font-size:%?22?%;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;color:#333;line-height:%?68?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;word-break:normal}.scratch-ticket .prize-list .support-content[data-v-0dc4bffd]{width:calc(100% - %?4?%);height:54ux;line-height:%?54?%;text-align:center;color:#fff;margin:auto;background-color:#000;opacity:.2;font-size:%?24?%;margin-top:%?68?%}.scratch-ticket .side-menu[data-v-0dc4bffd]{position:absolute;width:100%;height:%?134?%;top:%?362?%;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.scratch-ticket .side-menu .side-menu-item[data-v-0dc4bffd]{width:%?46?%;height:100%;-webkit-writing-mode:tb-rl;writing-mode:tb-rl;letter-spacing:%?4?%;color:#6061d1;font-size:%?24?%;text-align:center;background:#fff;opacity:.6}.scratch-ticket .side-menu .menu-mine[data-v-0dc4bffd]{-webkit-border-radius:0 %?8?% %?6?% 0;border-radius:0 %?8?% %?6?% 0}.scratch-ticket .side-menu .menu-rules[data-v-0dc4bffd]{-webkit-border-radius:%?8?% 0 0 %?8?%;border-radius:%?8?% 0 0 %?8?%}.scratch-ticket .open-prop-content[data-v-0dc4bffd]{position:fixed;top:0;left:0;z-index:998;width:100%;height:100vh;overflow:hidden;background-color:rgba(0,0,0,.8)}.scratch-ticket .open-prop-content .open-prop-body[data-v-0dc4bffd]{width:%?694?%;height:%?904?%;position:absolute;top:%?186?%;left:50%;margin-left:%?-347?%;background-image:url(https://img-cdn.macaotown.com/o_1f2nppedtq8719cp179v1ktjtpnc.png);background-repeat:no-repeat;background-size:100%;text-align:center}.scratch-ticket .open-prop-content .open-prop-body .open-prop-title[data-v-0dc4bffd]{width:%?360?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:auto;margin-top:%?360?%}.scratch-ticket .open-prop-content .open-prop-body .open-prop-title .open-prop-title-line[data-v-0dc4bffd]{width:%?44?%;border-top:%?1?% solid #946930}.scratch-ticket .open-prop-content .open-prop-body .open-prop-title .open-prop-title-text[data-v-0dc4bffd]{font-size:%?36?%;white-space:nowrap;font-family:Source Han Sans CN;font-weight:800;color:#e44f4f;background:-webkit-gradient(linear,left bottom,left top,from(#e4b77b),to(#d29b4f));background:-webkit-linear-gradient(bottom,#e4b77b,#d29b4f);background:linear-gradient(0deg,#e4b77b,#d29b4f);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.scratch-ticket .open-prop-content .open-prop-body .open-prop-produce[data-v-0dc4bffd]{width:%?360?%;margin:auto;overflow:hidden;text-align:center;margin-top:%?17?%}.scratch-ticket .open-prop-content .open-prop-body .open-prop-produce uni-image[data-v-0dc4bffd]{width:%?140?%;height:%?140?%;-webkit-border-radius:50%;border-radius:50%;margin-top:%?20?%}.scratch-ticket .open-prop-content .open-prop-body .open-prop-produce .open-prop-produce-decriation[data-v-0dc4bffd]{width:100%;font-size:%?30?%;font-family:Source Han Sans CN;font-weight:400;color:#b98946}.scratch-ticket .open-prop-content .open-prop-body .open-prop-btn[data-v-0dc4bffd]{width:%?280?%;height:%?90?%;margin:auto;position:relative}.scratch-ticket .open-prop-content .open-prop-body .open-prop-btn uni-image[data-v-0dc4bffd]{position:absolute;top:0;left:0;z-index:1}.scratch-ticket .open-prop-content .open-prop-body .open-prop-btn .open-prop-btn-text[data-v-0dc4bffd]{font-size:%?24?%;font-family:Source Han Sans CN;font-weight:400;color:#fff;position:relative;z-index:2;width:100%;text-align:center;line-height:%?90?%}.scratch-ticket .open-prop-content .open-prop-body .open-prop-mine[data-v-0dc4bffd]{width:100%;text-align:center;font-size:%?34?%;line-height:%?40?%;margin-top:%?21?%}.scratch-ticket .open-prop-content .open-prop-body .close-open-prop[data-v-0dc4bffd]{width:%?58?%;height:%?58?%;-webkit-border-radius:50%;border-radius:50%;background-color:#cecece;position:absolute;bottom:%?20?%;left:50%;margin-left:%?-29?%;color:#333;font-size:%?52?%}.scratch-ticket .open-prop-content .no-open-prop-body[data-v-0dc4bffd]{width:%?454?%;height:%?546?%;position:absolute;top:50%;left:50%;margin-top:%?-273?%;margin-left:%?-227?%;background-image:url(https://img-cdn.macaotown.com/o_1f2nr1ocjs55m2hpmr1t223scf.png);background-repeat:no-repeat;background-size:100%}.scratch-ticket .open-prop-content .no-open-prop-body .no-open-prop-title[data-v-0dc4bffd]{margin-top:%?96?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.scratch-ticket .open-prop-content .no-open-prop-body .no-open-prop-title .no-open-prop-title-line[data-v-0dc4bffd]{width:%?50?%;height:%?2?%;background-color:#535353;opacity:.3}.scratch-ticket .open-prop-content .no-open-prop-body .no-open-prop-title .no-open-prop-title-text[data-v-0dc4bffd]{white-space:nowrap;margin:0 %?12?%;font-size:%?38?%;font-family:Source Han Sans CN;font-weight:800;text-shadow:2px 2px 160px #fff;background:-webkit-gradient(linear,left bottom,left top,from(#9a9a9a),to(#616161));background:-webkit-linear-gradient(bottom,#9a9a9a,#616161);background:linear-gradient(0deg,#9a9a9a,#616161);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.scratch-ticket .open-prop-content .no-open-prop-body .no-open-prop-subtitle[data-v-0dc4bffd]{width:100%;text-align:center;font-size:%?34?%;font-family:Source Han Sans CN;font-weight:400;color:#333;margin-top:%?17?%}.scratch-ticket .open-prop-content .no-open-prop-body .no-open-prop-img[data-v-0dc4bffd]{width:%?150?%;height:%?150?%;margin:auto;margin-top:%?36?%}.scratch-ticket .open-prop-content .no-open-prop-body .no-open-prop-btn[data-v-0dc4bffd]{width:%?280?%;height:%?90?%;margin:auto;position:relative}.scratch-ticket .open-prop-content .no-open-prop-body .no-open-prop-btn uni-image[data-v-0dc4bffd]{position:absolute;top:0;left:0;z-index:1}.scratch-ticket .open-prop-content .no-open-prop-body .no-open-prop-btn .no-open-prop-btn-text[data-v-0dc4bffd]{font-size:%?24?%;font-family:Source Han Sans CN;font-weight:400;color:#fff;position:relative;z-index:2;width:100%;text-align:center;line-height:%?90?%}.scratch-ticket .open-prop-content .no-open-prop-body .no-close-open-prop[data-v-0dc4bffd]{width:%?58?%;height:%?58?%;-webkit-border-radius:50%;border-radius:50%;position:absolute;bottom:%?-84?%;left:50%;margin-left:%?-29?%;font-size:%?52?%;background-color:#000;opacity:.5}',""]),t.exports=e},7615:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"base-cloud"},[i("v-uni-view",{staticClass:"father",staticStyle:{position:"relative"},attrs:{id:"canvas"}},[i("v-uni-view",{class:{op0:!t.ready}},[t._t("default")],2),i("v-uni-canvas",{staticClass:"abs",style:{width:t.width+"px",height:t.height+"px",position:"absolute",top:0},attrs:{"disable-scroll":!0,"canvas-id":"scratch-card"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchstart.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchend.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchmove.apply(void 0,arguments)}}})],1)],1)},r=[]},"7ab6":function(t,e,i){var n=i("75e1");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("d2499de4",n,!0,{sourceMap:!1,shadowMode:!1})},"88d7":function(t,e,i){"use strict";i.r(e);var n=i("7615"),o=i("410c");for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);var a,c=i("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"65fdbe03",null,!1,n["a"],a);e["default"]=s.exports},"96cf":function(t,e){!function(e){"use strict";var i,n=Object.prototype,o=n.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag",p="object"===typeof t,d=e.regeneratorRuntime;if(d)p&&(t.exports=d);else{d=e.regeneratorRuntime=p?t.exports:{},d.wrap=k;var l="suspendedStart",u="suspendedYield",f="executing",h="completed",b={},g={};g[a]=function(){return this};var v=Object.getPrototypeOf,w=v&&v(v(N([])));w&&w!==n&&o.call(w,a)&&(g=w);var m=C.prototype=x.prototype=Object.create(g);z.prototype=m.constructor=C,C.constructor=z,C[s]=z.displayName="GeneratorFunction",d.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===z||"GeneratorFunction"===(e.displayName||e.name))},d.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(m),t},d.awrap=function(t){return{__await:t}},_(S.prototype),S.prototype[c]=function(){return this},d.AsyncIterator=S,d.async=function(t,e,i,n){var o=new S(k(t,e,i,n));return d.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(m),m[s]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},d.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){while(e.length){var n=e.pop();if(n in t)return i.value=n,i.done=!1,i}return i.done=!0,i}},d.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=i)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=i),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),p=o.call(a,"finallyLoc");if(s&&p){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!p)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),E(i),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var o=n.arg;E(i)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=i),b}}}function k(t,e,i,n){var o=e&&e.prototype instanceof x?e:x,r=Object.create(o.prototype),a=new L(n||[]);return r._invoke=j(t,i,a),r}function y(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(n){return{type:"throw",arg:n}}}function x(){}function z(){}function C(){}function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function S(t){function e(i,n,r,a){var c=y(t[i],t,n);if("throw"!==c.type){var s=c.arg,p=s.value;return p&&"object"===typeof p&&o.call(p,"__await")?Promise.resolve(p.__await).then((function(t){e("next",t,r,a)}),(function(t){e("throw",t,r,a)})):Promise.resolve(p).then((function(t){s.value=t,r(s)}),(function(t){return e("throw",t,r,a)}))}a(c.arg)}var i;function n(t,n){function o(){return new Promise((function(i,o){e(t,n,i,o)}))}return i=i?i.then(o,o):o()}this._invoke=n}function j(t,e,i){var n=l;return function(o,r){if(n===f)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw r;return I()}i.method=o,i.arg=r;while(1){var a=i.delegate;if(a){var c=P(a,i);if(c){if(c===b)continue;return c}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(n===l)throw n=h,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n=f;var s=y(t,e,i);if("normal"===s.type){if(n=i.done?h:u,s.arg===b)continue;return{value:s.arg,done:i.done}}"throw"===s.type&&(n=h,i.method="throw",i.arg=s.arg)}}}function P(t,e){var n=t.iterator[e.method];if(n===i){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=i,P(t,e),"throw"===e.method))return b;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var o=y(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,b;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=i),e.delegate=null,b):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=i,e.done=!0,e};return r.next=r}}return{next:I}}function I(){return{value:i,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a551:function(t,e,i){"use strict";var n=i("4ea4");i("a9e3"),i("b680"),i("d3b7"),i("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var o=n(i("1da1")),r=null,a={name:"scratch-card",props:{percentage:{type:Number,default:45},touchSize:{type:Number,default:20},fillColor:{type:String,default:"#ddd"},watermark:{type:String,default:"刮一刮"},watermarkColor:{type:String,default:"#c5c5c5"},watermarkSize:{type:Number,default:14},title:{type:String,default:"刮一刮开奖"},titleColor:{type:String,default:"#888"},titleSize:{type:Number,default:24},disabled:{type:Boolean,default:!1}},data:function(){return{width:0,height:0,startX:null,startY:null,computing:!1,complete:!1,reset:!1,ready:!1,storePoints:[]}},mounted:function(){r=uni.createCanvasContext("scratch-card",this),this.getRect()},methods:{getRect:function(t){var e=this,i=uni.createSelectorQuery().in(this);i.select("#canvas").boundingClientRect((function(t){e.width=t.width,e.height=t.height,setTimeout((function(t){e.init()}),100)})).exec()},init:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(e){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.computing=!1,this.complete=!1,this.reset=!1,this.ready=!1,t.next=6,this.getImageInfo("https://img-cdn.macaotown.com/o_1f2lu953l1fkf1rsf27ihd5vm0s.png");case 6:i=t.sent,r.clearRect(0,0,this.width,this.height),r.setFillStyle(this.fillColor),r.fillRect(0,0,this.width,this.height),this.ready=!0,this.fillWatermark(),r.drawImage(i.path,0,0,this.width,this.height),r.save(),this.fillTitle(),r.draw();case 16:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),fillWatermark:function(t){if(this.watermark){var e=this.watermark.length*this.watermarkSize;r.save(),r.rotate(-10*Math.PI/180);var i=0,n=0,o=0;while((i<=5*this.width||n<=5*this.height)&&o<300)r.setFillStyle(this.watermarkColor),r.setFontSize(this.watermarkSize),r.fillText(this.watermark,i,n),i+=e+1.6*e,i>this.width&&n<=this.height&&(i=100*-Math.random(),n+=3*this.watermarkSize),o++;r.restore()}},getImageInfo:function(t){return new Promise((function(e,i){uni.getImageInfo({src:t,success:function(t){e(t)}})}))},fillTitle:function(t){this.title&&(r.setTextAlign("center"),r.setTextBaseline("middle"),r.setFillStyle(this.titleColor),r.setFontSize(this.titleSize),r.font="bold italic "+this.titleSize+"px sans-serif ",r.fillText(this.title,this.width/2,this.height/3))},touchstart:function(t){this.disabled||(this.startX=t.touches[0].x,this.startY=t.touches[0].y)},touchend:function(t){this.getFilledPercentage()},touchmove:function(t){this.complete||this.disabled||(r.moveTo(this.startX,this.startY),r.clearRect(this.startX,this.startY,this.touchSize,this.touchSize),r.draw(!0),this.startX=t.touches[0].x,this.startY=t.touches[0].y)},getFilledPercentage:function(t){var e=this;this.computing||(this.computing=!0,uni.canvasGetImageData({canvasId:"scratch-card",x:0,y:0,width:this.width,height:this.height,success:function(t){for(var i=t.data,n=[],o=0;o<i.length;o+=4)i[o+3]<128&&n.push(i[o+3]);var r=(n.length/(i.length/4)*100).toFixed(2);r>=e.percentage&&e.success(),e.computing=!1,console.log(r)},fail:function(t){console.log(t)}},this))},success:function(t){this.complete=!0,this.reset||(this.reset=!0,r.moveTo(0,0),r.clearRect(0,0,this.width,this.height),r.stroke(),r.draw(!0),this.$emit("complete",{}))}}};e.default=a},af5d:function(t,e,i){"use strict";var n=i("4ea4");i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("88d7")),r={components:{scratchCard:o.default},data:function(){return{userInfo:uni.getStorageSync("userInfo"),boxMessage:uni.getStorageSync("boxMessage"),showTicketContent:!0,showOppenProp:!1,showOppenPropBody:!1,showNoOppenPropBody:!1}},onLoad:function(){var t=(new Date).getTime();this.showOppenPropBody=t/2==0,this.showNoOppenPropBody=t/2!=0},methods:{ticketInit:function(){this.$refs.card.init()},seatShow:function(t){this.showOppenProp=!0},moveStop:function(){},parseInteger:function(t){return parseInt(t)}},watch:{showOppenProp:function(){if(0==this.showOppenProp){var t=Math.random(0,1);this.showOppenPropBody=t>=.5,this.showNoOppenPropBody=!(t>.5),this.ticketInit()}}}};e.default=r},de25:function(t,e,i){"use strict";var n=i("7ab6"),o=i.n(n);o.a}}]);