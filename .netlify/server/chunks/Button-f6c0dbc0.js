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
  B: () => Button
});
var import_index_b5161435 = require("./index-b5161435.js");
var import_Offcanvas_svelte_svelte_type_style_lang_c26d06b1 = require("./Offcanvas.svelte_svelte_type_style_lang-c26d06b1.js");
const Button = (0, import_index_b5161435.c)(($$result, $$props, $$bindings, slots) => {
  let ariaLabel;
  let classes;
  let defaultAriaLabel;
  let $$restProps = (0, import_index_b5161435.g)($$props, [
    "class",
    "active",
    "block",
    "children",
    "close",
    "color",
    "disabled",
    "href",
    "inner",
    "outline",
    "size",
    "style",
    "value",
    "white"
  ]);
  let { class: className = "" } = $$props;
  let { active = false } = $$props;
  let { block = false } = $$props;
  let { children = void 0 } = $$props;
  let { close = false } = $$props;
  let { color = "secondary" } = $$props;
  let { disabled = false } = $$props;
  let { href = "" } = $$props;
  let { inner = void 0 } = $$props;
  let { outline = false } = $$props;
  let { size = null } = $$props;
  let { style = "" } = $$props;
  let { value = "" } = $$props;
  let { white = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.block === void 0 && $$bindings.block && block !== void 0)
    $$bindings.block(block);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.close === void 0 && $$bindings.close && close !== void 0)
    $$bindings.close(close);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.inner === void 0 && $$bindings.inner && inner !== void 0)
    $$bindings.inner(inner);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.white === void 0 && $$bindings.white && white !== void 0)
    $$bindings.white(white);
  ariaLabel = $$props["aria-label"];
  classes = (0, import_Offcanvas_svelte_svelte_type_style_lang_c26d06b1.c)(className, close ? "btn-close" : "btn", close || `btn${outline ? "-outline" : ""}-${color}`, size ? `btn-${size}` : false, block ? "d-block w-100" : false, {
    active,
    "btn-close-white": close && white
  });
  defaultAriaLabel = close ? "Close" : null;
  return `${href ? `<a${(0, import_index_b5161435.h)([
    (0, import_index_b5161435.i)($$restProps),
    { class: (0, import_index_b5161435.j)(classes) },
    { disabled: disabled || null },
    { href: (0, import_index_b5161435.j)(href) },
    {
      "aria-label": (0, import_index_b5161435.j)(ariaLabel || defaultAriaLabel)
    },
    { style: (0, import_index_b5161435.j)(style) }
  ], {})}${(0, import_index_b5161435.d)("this", inner, 0)}>${children ? `${(0, import_index_b5161435.e)(children)}` : `${slots.default ? slots.default({}) : ``}`}</a>` : `<button${(0, import_index_b5161435.h)([
    (0, import_index_b5161435.i)($$restProps),
    { class: (0, import_index_b5161435.j)(classes) },
    { disabled: disabled || null },
    { value: (0, import_index_b5161435.j)(value) },
    {
      "aria-label": (0, import_index_b5161435.j)(ariaLabel || defaultAriaLabel)
    },
    { style: (0, import_index_b5161435.j)(style) }
  ], {})}${(0, import_index_b5161435.d)("this", inner, 0)}>${slots.default ? slots.default({}) : `
      ${children ? `${(0, import_index_b5161435.e)(children)}` : `${slots.default ? slots.default({}) : ``}`}
    `}</button>`}`;
});
module.exports = __toCommonJS(stdin_exports);
