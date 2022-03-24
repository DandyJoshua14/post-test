var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  C: () => Container,
  c: () => classnames
});
var import_index_b5161435 = require("./index-b5161435.js");
function toClassName(value) {
  let result = "";
  if (typeof value === "string" || typeof value === "number") {
    result += value;
  } else if (typeof value === "object") {
    if (Array.isArray(value)) {
      result = value.map(toClassName).filter(Boolean).join(" ");
    } else {
      for (let key in value) {
        if (value[key]) {
          result && (result += " ");
          result += key;
        }
      }
    }
  }
  return result;
}
function classnames(...args) {
  return args.map(toClassName).filter(Boolean).join(" ");
}
const Container = (0, import_index_b5161435.c)(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = (0, import_index_b5161435.g)($$props, ["class", "sm", "md", "lg", "xl", "xxl", "fluid"]);
  let { class: className = "" } = $$props;
  let { sm = void 0 } = $$props;
  let { md = void 0 } = $$props;
  let { lg = void 0 } = $$props;
  let { xl = void 0 } = $$props;
  let { xxl = void 0 } = $$props;
  let { fluid = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.sm === void 0 && $$bindings.sm && sm !== void 0)
    $$bindings.sm(sm);
  if ($$props.md === void 0 && $$bindings.md && md !== void 0)
    $$bindings.md(md);
  if ($$props.lg === void 0 && $$bindings.lg && lg !== void 0)
    $$bindings.lg(lg);
  if ($$props.xl === void 0 && $$bindings.xl && xl !== void 0)
    $$bindings.xl(xl);
  if ($$props.xxl === void 0 && $$bindings.xxl && xxl !== void 0)
    $$bindings.xxl(xxl);
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  classes = classnames(className, {
    "container-sm": sm,
    "container-md": md,
    "container-lg": lg,
    "container-xl": xl,
    "container-xxl": xxl,
    "container-fluid": fluid,
    container: !sm && !md && !lg && !xl && !xxl && !fluid
  });
  return `<div${(0, import_index_b5161435.h)([(0, import_index_b5161435.i)($$restProps), { class: (0, import_index_b5161435.j)(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
var Modal_svelte_svelte_type_style_lang = "";
var Offcanvas_svelte_svelte_type_style_lang = "";
module.exports = __toCommonJS(stdin_exports);
