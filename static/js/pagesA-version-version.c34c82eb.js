(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pagesA-version-version"],
  {
    "22e1": function (t, n, e) {
      "use strict";
      var i = e("8d08"),
        r = e.n(i);
      r.a;
    },
    2875: function (t, n, e) {
      "use strict";
      var i = e("63af"),
        r = e.n(i);
      r.a;
    },
    4992: function (t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return r;
      }),
        e.d(n, "c", function () {
          return a;
        }),
        e.d(n, "a", function () {
          return i;
        });
      var i = { uNavbar: e("86c4").default, uniSection: e("7aed").default },
        r = function () {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n;
          return e(
            "v-uni-view",
            { staticClass: "container" },
            [
              e("u-navbar", {
                attrs: {
                  title: t.title,
                  placeholder: !0,
                  bgColor: "#1f1f27",
                  titleStyle: { color: "#fff" },
                  leftIconColor: "#fff",
                },
                on: {
                  leftClick: function (n) {
                    (arguments[0] = n = t.$handleEvent(n)),
                      t.goBack.apply(void 0, arguments);
                  },
                },
              }),
              e(
                "v-uni-view",
                { staticClass: "body" },
                t._l(t.versionList, function (n, i) {
                  return e(
                    "uni-section",
                    {
                      key: i,
                      class: { hideOldClass: 0 != i },
                      attrs: { title: n.v, titleColor: "#fff", type: "square" },
                    },
                    [
                      e("v-uni-view", {
                        staticClass: "miaos",
                        domProps: { innerHTML: t._s(n.text) },
                      }),
                    ],
                    1
                  );
                }),
                1
              ),
            ],
            1
          );
        },
        a = [];
    },
    "62a6": function (t, n, e) {
      "use strict";
      e("7a82"),
        Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var i = {
        data: function () {
          return {
            title: "如何获取",
            versionList: [
              {
                v: "注意",
                text: "这个只是最基础的演示版本，除了这个之外，还有很多各种样式的情侣游戏，可以联系我的个人微信获取,也可以进入博客中进行查看<a href='https://mydocs.guoyaxue.top/projects/zatan/7/8.html'>点击进入</a>",
              },
              {
                v: "方法1(付费)",
                text: "你可以通过赞助5元后添加我的微信17713088356获取,赞助二维码<a href='https://img1.imgtp.com/2023/07/19/VKrFkQAE.jpg'>点击查看</a>",
              },
              {
                v: "方法2(免费 需要是程序员)",
                text: "进入我的个人博客<a href='https://mydocs.guoyaxue.top/projects/zatan/7/8.html'>点击进入</a>在技术杂谈中寻找关于这个的文章获取",
              },
              {
                v: "方法3(付费不需要添加微信，但需要耐心等待)",
                text: "进入我的店铺购买<a href='https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202308091542681.jpg'>点击进入</a>,新版来袭，如需购买新版可进入下面的链接购买，多种情侣小游戏整合，限时特价<a href='https://xiaou-1305448902.cos.ap-nanjing.myqcloud.com/img/202309160913891.jpg'>点击进入</a>",
              },
            ],
          };
        },
        methods: {
          goBack: function () {
            uni.reLaunch({ url: "/" });
          },
        },
      };
      n.default = i;
    },
    "63af": function (t, n, e) {
      var i = e("b6e8");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var r = e("4f06").default;
      r("aa01bfae", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "7aed": function (t, n, e) {
      "use strict";
      e.r(n);
      var i = e("d5ca"),
        r = e("d5ad");
      for (var a in r)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return r[t];
            });
          })(a);
      e("2875");
      var o = e("f0c5"),
        s = Object(o["a"])(
          r["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "52a816e0",
          null,
          !1,
          i["a"],
          void 0
        );
      n["default"] = s.exports;
    },
    8531: function (t, n, e) {
      "use strict";
      e.r(n);
      var i = e("4992"),
        r = e("f885");
      for (var a in r)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return r[t];
            });
          })(a);
      e("22e1");
      var o = e("f0c5"),
        s = Object(o["a"])(
          r["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "943b8d88",
          null,
          !1,
          i["a"],
          void 0
        );
      n["default"] = s.exports;
    },
    "8d08": function (t, n, e) {
      var i = e("96ea");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var r = e("4f06").default;
      r("29aa95b4", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "96ea": function (t, n, e) {
      var i = e("24fb");
      (n = i(!1)),
        n.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-943b8d88] .uni-section{background-color:initial}[data-v-943b8d88] .hideOldClass .square{background-color:#909399!important}.container[data-v-943b8d88]{display:flex;flex-direction:column;width:%?750?%;height:100vh}.miaos[data-v-943b8d88]{color:#fff;line-height:1.5em;padding-left:%?40?%}.body[data-v-943b8d88]{flex:1;padding:%?20?% %?50?%}',
          "",
        ]),
        (t.exports = n);
    },
    af36: function (t, n, e) {
      "use strict";
      e("7a82"),
        Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0);
      var i = {
        name: "UniSection",
        emits: ["click"],
        props: {
          type: { type: String, default: "" },
          title: { type: String, required: !0, default: "" },
          titleFontSize: { type: String, default: "14px" },
          titleColor: { type: String, default: "#333" },
          subTitle: { type: String, default: "" },
          subTitleFontSize: { type: String, default: "12px" },
          subTitleColor: { type: String, default: "#999" },
          padding: { type: [Boolean, String], default: !1 },
        },
        computed: {
          _padding: function () {
            return "string" === typeof this.padding
              ? this.padding
              : this.padding
              ? "10px"
              : "";
          },
        },
        watch: {
          title: function (t) {
            uni.report && "" !== t && uni.report("title", t);
          },
        },
        methods: {
          onClick: function () {
            this.$emit("click");
          },
        },
      };
      n.default = i;
    },
    b6e8: function (t, n, e) {
      var i = e("24fb");
      (n = i(!1)),
        n.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-section[data-v-52a816e0]{background-color:#fff}.uni-section .uni-section-header[data-v-52a816e0]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section .uni-section-header__decoration[data-v-52a816e0]{margin-right:6px;background-color:#2979ff}.uni-section .uni-section-header__decoration.line[data-v-52a816e0]{width:4px;height:12px;border-radius:10px}.uni-section .uni-section-header__decoration.circle[data-v-52a816e0]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px}.uni-section .uni-section-header__decoration.square[data-v-52a816e0]{width:8px;height:8px}.uni-section .uni-section-header__content[data-v-52a816e0]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section .uni-section-header__content .distraction[data-v-52a816e0]{flex-direction:row;align-items:center}.uni-section .uni-section-header__content-sub[data-v-52a816e0]{margin-top:2px}.uni-section .uni-section-header__slot-right[data-v-52a816e0]{font-size:14px}.uni-section .uni-section-content[data-v-52a816e0]{font-size:14px}',
          "",
        ]),
        (t.exports = n);
    },
    d5ad: function (t, n, e) {
      "use strict";
      e.r(n);
      var i = e("af36"),
        r = e.n(i);
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return i[t];
            });
          })(a);
      n["default"] = r.a;
    },
    d5ca: function (t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return i;
      }),
        e.d(n, "c", function () {
          return r;
        }),
        e.d(n, "a", function () {});
      var i = function () {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n;
          return e(
            "v-uni-view",
            { staticClass: "uni-section" },
            [
              e(
                "v-uni-view",
                {
                  staticClass: "uni-section-header",
                  on: {
                    click: function (n) {
                      (arguments[0] = n = t.$handleEvent(n)),
                        t.onClick.apply(void 0, arguments);
                    },
                  },
                },
                [
                  t.type
                    ? e("v-uni-view", {
                        staticClass: "uni-section-header__decoration",
                        class: t.type,
                      })
                    : t._t("decoration"),
                  e(
                    "v-uni-view",
                    { staticClass: "uni-section-header__content" },
                    [
                      e(
                        "v-uni-text",
                        {
                          staticClass: "uni-section__content-title",
                          class: { distraction: !t.subTitle },
                          style: {
                            "font-size": t.titleFontSize,
                            color: t.titleColor,
                          },
                        },
                        [t._v(t._s(t.title))]
                      ),
                      t.subTitle
                        ? e(
                            "v-uni-text",
                            {
                              staticClass: "uni-section-header__content-sub",
                              style: {
                                "font-size": t.subTitleFontSize,
                                color: t.subTitleColor,
                              },
                            },
                            [t._v(t._s(t.subTitle))]
                          )
                        : t._e(),
                    ],
                    1
                  ),
                  e(
                    "v-uni-view",
                    { staticClass: "uni-section-header__slot-right" },
                    [t._t("right")],
                    2
                  ),
                ],
                2
              ),
              e(
                "v-uni-view",
                {
                  staticClass: "uni-section-content",
                  style: { padding: t._padding },
                },
                [t._t("default")],
                2
              ),
            ],
            1
          );
        },
        r = [];
    },
    f885: function (t, n, e) {
      "use strict";
      e.r(n);
      var i = e("62a6"),
        r = e.n(i);
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return i[t];
            });
          })(a);
      n["default"] = r.a;
    },
  },
]);
