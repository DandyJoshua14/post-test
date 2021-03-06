var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png", "my-app.png", "profile-avatar.png"]),
  _: {
    mime: { ".png": "image/png" },
    entry: { "file": "start-441e47e3.js", "js": ["start-441e47e3.js", "chunks/vendor-2da1beec.js", "chunks/singletons-d1fb5791.js"], "css": ["assets/vendor-28d9e71a.css"] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js")))
    ],
    routes: [
      {
        type: "page",
        pattern: /^\/$/,
        params: null,
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/webwhatssapp\/?$/,
        params: null,
        path: "/webwhatssapp",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "endpoint",
        pattern: /^\/stores\/store\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/stores/store.js")))
      },
      {
        type: "page",
        pattern: /^\/login\/?$/,
        params: null,
        path: "/login",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/test\/?$/,
        params: null,
        path: "/test",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/all\/?$/,
        params: null,
        path: "/all",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "endpoint",
        pattern: /^\/api\/modifyPassword\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/modifyPassword.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/modifyUserName\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/modifyUserName.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/verification\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/verification.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/modifyEmail\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/modifyEmail.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/getResolve\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/getResolve.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/delete\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/delete.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/logout\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/logout.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/login\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/login.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/api\/es\/?$/,
        params: null,
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/es.js")))
      }
    ]
  }
};
module.exports = __toCommonJS(stdin_exports);
