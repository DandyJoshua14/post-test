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
  I: () => Input
});
var import_index_b5161435 = require("./index-b5161435.js");
var import_Offcanvas_svelte_svelte_type_style_lang_c26d06b1 = require("./Offcanvas.svelte_svelte_type_style_lang-c26d06b1.js");
const FormCheck = (0, import_index_b5161435.c)(($$result, $$props, $$bindings, slots) => {
  let classes;
  let inputClasses;
  let idFor;
  let $$restProps = (0, import_index_b5161435.g)($$props, [
    "class",
    "checked",
    "disabled",
    "group",
    "id",
    "inline",
    "inner",
    "invalid",
    "label",
    "name",
    "size",
    "type",
    "valid",
    "value"
  ]);
  let { class: className = "" } = $$props;
  let { checked = false } = $$props;
  let { disabled = false } = $$props;
  let { group = void 0 } = $$props;
  let { id = void 0 } = $$props;
  let { inline = false } = $$props;
  let { inner = void 0 } = $$props;
  let { invalid = false } = $$props;
  let { label = "" } = $$props;
  let { name = "" } = $$props;
  let { size = "" } = $$props;
  let { type = "checkbox" } = $$props;
  let { valid = false } = $$props;
  let { value = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.inner === void 0 && $$bindings.inner && inner !== void 0)
    $$bindings.inner(inner);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  classes = (0, import_Offcanvas_svelte_svelte_type_style_lang_c26d06b1.c)(className, "form-check", {
    "form-switch": type === "switch",
    "form-check-inline": inline,
    [`form-control-${size}`]: size
  });
  inputClasses = (0, import_Offcanvas_svelte_svelte_type_style_lang_c26d06b1.c)("form-check-input", { "is-invalid": invalid, "is-valid": valid });
  idFor = id || label;
  return `<div${(0, import_index_b5161435.d)("class", classes, 0)}>${type === "radio" ? `<input${(0, import_index_b5161435.h)([
    (0, import_index_b5161435.i)($$restProps),
    {
      class: (0, import_index_b5161435.j)(inputClasses)
    },
    { id: (0, import_index_b5161435.j)(idFor) },
    { type: "radio" },
    { disabled: disabled || null },
    { name: (0, import_index_b5161435.j)(name) },
    { value: (0, import_index_b5161435.j)(value) }
  ], {})}${value === group ? (0, import_index_b5161435.d)("checked", true, 1) : ""}${(0, import_index_b5161435.d)("this", inner, 0)}>` : `${type === "switch" ? `<input${(0, import_index_b5161435.h)([
    (0, import_index_b5161435.i)($$restProps),
    {
      class: (0, import_index_b5161435.j)(inputClasses)
    },
    { id: (0, import_index_b5161435.j)(idFor) },
    { type: "checkbox" },
    { disabled: disabled || null },
    { name: (0, import_index_b5161435.j)(name) },
    { value: (0, import_index_b5161435.j)(value) }
  ], {})}${(0, import_index_b5161435.d)("checked", checked, 1)}${(0, import_index_b5161435.d)("this", inner, 0)}>` : `<input${(0, import_index_b5161435.h)([
    (0, import_index_b5161435.i)($$restProps),
    {
      class: (0, import_index_b5161435.j)(inputClasses)
    },
    { id: (0, import_index_b5161435.j)(idFor) },
    { type: "checkbox" },
    { disabled: disabled || null },
    { name: (0, import_index_b5161435.j)(name) },
    { value: (0, import_index_b5161435.j)(value) }
  ], {})}${(0, import_index_b5161435.d)("checked", checked, 1)}${(0, import_index_b5161435.d)("this", inner, 0)}>`}`}
  ${label ? `<label class="${"form-check-label"}"${(0, import_index_b5161435.d)("for", idFor, 0)}>${slots.label ? slots.label({}) : `${(0, import_index_b5161435.e)(label)}`}</label>` : ``}</div>`;
});
const FormFeedback = (0, import_index_b5161435.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_b5161435.g)($$props, ["class", "valid", "tooltip"]);
  let { class: className = "" } = $$props;
  let { valid = void 0 } = $$props;
  let { tooltip = false } = $$props;
  let classes;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  if ($$props.tooltip === void 0 && $$bindings.tooltip && tooltip !== void 0)
    $$bindings.tooltip(tooltip);
  {
    {
      const validMode = tooltip ? "tooltip" : "feedback";
      classes = (0, import_Offcanvas_svelte_svelte_type_style_lang_c26d06b1.c)(className, valid ? `valid-${validMode}` : `invalid-${validMode}`);
    }
  }
  return `<div${(0, import_index_b5161435.h)([(0, import_index_b5161435.i)($$restProps), { class: (0, import_index_b5161435.j)(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Input = (0, import_index_b5161435.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_b5161435.g)($$props, [
    "class",
    "bsSize",
    "checked",
    "color",
    "disabled",
    "feedback",
    "files",
    "group",
    "inner",
    "invalid",
    "label",
    "multiple",
    "name",
    "placeholder",
    "plaintext",
    "readonly",
    "size",
    "type",
    "valid",
    "value"
  ]);
  let { class: className = "" } = $$props;
  let { bsSize = void 0 } = $$props;
  let { checked = false } = $$props;
  let { color = void 0 } = $$props;
  let { disabled = void 0 } = $$props;
  let { feedback = void 0 } = $$props;
  let { files = void 0 } = $$props;
  let { group = void 0 } = $$props;
  let { inner = void 0 } = $$props;
  let { invalid = false } = $$props;
  let { label = void 0 } = $$props;
  let { multiple = void 0 } = $$props;
  let { name = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { plaintext = false } = $$props;
  let { readonly = void 0 } = $$props;
  let { size = void 0 } = $$props;
  let { type = "text" } = $$props;
  let { valid = false } = $$props;
  let { value = "" } = $$props;
  let classes;
  let tag;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.bsSize === void 0 && $$bindings.bsSize && bsSize !== void 0)
    $$bindings.bsSize(bsSize);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.feedback === void 0 && $$bindings.feedback && feedback !== void 0)
    $$bindings.feedback(feedback);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.inner === void 0 && $$bindings.inner && inner !== void 0)
    $$bindings.inner(inner);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.plaintext === void 0 && $$bindings.plaintext && plaintext !== void 0)
    $$bindings.plaintext(plaintext);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly !== void 0)
    $$bindings.readonly(readonly);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0)
    $$bindings.valid(valid);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        const isNotaNumber = new RegExp("\\D", "g");
        let isBtn = false;
        let formControlClass = "form-control";
        tag = "input";
        switch (type) {
          case "color":
            formControlClass = `form-control form-control-color`;
            break;
          case "range":
            formControlClass = "form-range";
            break;
          case "select":
            formControlClass = `form-select`;
            tag = "select";
            break;
          case "textarea":
            tag = "textarea";
            break;
          case "button":
          case "reset":
          case "submit":
            formControlClass = `btn btn-${color || "secondary"}`;
            isBtn = true;
            break;
          case "hidden":
          case "image":
            formControlClass = void 0;
            break;
          default:
            formControlClass = "form-control";
            tag = "input";
        }
        if (plaintext) {
          formControlClass = `${formControlClass}-plaintext`;
          tag = "input";
        }
        if (size && isNotaNumber.test(size)) {
          console.warn(`Please use the prop "bsSize" instead of the "size" to bootstrap's input sizing.`);
          bsSize = size;
          size = void 0;
        }
        classes = (0, import_Offcanvas_svelte_svelte_type_style_lang_c26d06b1.c)(className, formControlClass, {
          "is-invalid": invalid,
          "is-valid": valid,
          [`form-control-${bsSize}`]: bsSize && !isBtn,
          [`btn-${bsSize}`]: bsSize && isBtn
        });
      }
    }
    $$rendered = `${tag === "input" ? `${type === "text" ? `<input${(0, import_index_b5161435.h)([
      (0, import_index_b5161435.i)($$restProps),
      { class: (0, import_index_b5161435.j)(classes) },
      { type: "text" },
      { disabled: disabled || null },
      { name: (0, import_index_b5161435.j)(name) },
      {
        placeholder: (0, import_index_b5161435.j)(placeholder)
      },
      { readonly: readonly || null },
      { size: (0, import_index_b5161435.j)(size) }
    ], {})}${(0, import_index_b5161435.d)("value", value, 0)}${(0, import_index_b5161435.d)("this", inner, 0)}>` : `${type === "password" ? `<input${(0, import_index_b5161435.h)([
      (0, import_index_b5161435.i)($$restProps),
      { class: (0, import_index_b5161435.j)(classes) },
      { type: "password" },
      { disabled: disabled || null },
      { name: (0, import_index_b5161435.j)(name) },
      {
        placeholder: (0, import_index_b5161435.j)(placeholder)
      },
      { readonly: readonly || null },
      { size: (0, import_index_b5161435.j)(size) }
    ], {})}${(0, import_index_b5161435.d)("value", value, 0)}${(0, import_index_b5161435.d)("this", inner, 0)}>` : `${type === "color" ? `<input${(0, import_index_b5161435.h)([
      (0, import_index_b5161435.i)($$restProps),
      { class: (0, import_index_b5161435.j)(classes) },
      { type: "color" },
      { disabled: disabled || null },
      { name: (0, import_index_b5161435.j)(name) },
      {
        placeholder: (0, import_index_b5161435.j)(placeholder)
      },
      { readonly: readonly || null }
    ], {})}${(0, import_index_b5161435.d)("value", value, 0)}${(0, import_index_b5161435.d)("this", inner, 0)}>` : `${type === "email" ? `<input${(0, import_index_b5161435.h)([
      (0, import_index_b5161435.i)($$restProps),
      { class: (0, import_index_b5161435.j)(classes) },
      { type: "email" },
      { disabled: disabled || null },
      { multiple: multiple || null },
      { name: (0, import_index_b5161435.j)(name) },
      {
        placeholder: (0, import_index_b5161435.j)(placeholder)
      },
      { readonly: readonly || null },
      { size: (0, import_index_b5161435.j)(size) }
    ], {})}${(0, import_index_b5161435.d)("value", value, 0)}${(0, import_index_b5161435.d)("this", inner, 0)}>` : `${type === "file" ? `<input${(0, import_index_b5161435.h)([
      (0, import_index_b5161435.i)($$restProps),
      { class: (0, import_index_b5161435.j)(classes) },
      { type: "file" },
      { disabled: disabled || null },
      { invalid: (0, import_index_b5161435.j)(invalid) },
      { multiple: multiple || null },
      { name: (0, import_index_b5161435.j)(name) },
      {
        placeholder: (0, import_index_b5161435.j)(placeholder)
      },
      { readonly: readonly || null },
      { valid: (0, import_index_b5161435.j)(valid) }
    ], {})}>` : `${type === "checkbox" || type === "radio" || type === "switch" ? `${(0, import_index_b5161435.v)(FormCheck, "FormCheck").$$render($$result, Object.assign($$restProps, { class: className }, { size: bsSize }, { type }, { disabled }, { invalid }, { label }, { name }, { placeholder }, { readonly }, { valid }, { checked }, { inner }, { group }, { value }), {
      checked: ($$value) => {
        checked = $$value;
        $$settled = false;
      },
      inner: ($$value) => {
        inner = $$value;
        $$settled = false;
      },
      group: ($$value) => {
        group = $$value;
        $$settled = false;
      },
      value: ($$value) => {
        value = $$value;
        $$settled = false;
      }
    }, {})}` : `${type === "url" ? `<input${(0, import_index_b5161435.h)([
      (0, import_index_b5161435.i)($$restProps),
      { class: (0, import_index_b5161435.j)(classes) },
      { type: "url" },
      { disabled: disabled || null },
      { name: (0, import_index_b5161435.j)(name) },
      {
        placeholder: (0, import_index_b5161435.j)(placeholder)
      },
      { readonly: readonly || null },
      { size: (0, import_index_b5161435.j)(size) }
    ], {})}${(0, import_index_b5161435.d)("value", value, 0)}${(0, import_index_b5161435.d)("this", inner, 0)}>` : `${type === "number" ? `<input${(0, import_index_b5161435.h)([
      (0, import_index_b5161435.i)($$restProps),
      { class: (0, import_index_b5161435.j)(classes) },
      { type: "number" },
      { readonly: readonly || null },
      { name: (0, import_index_b5161435.j)(name) },
      { disabled: disabled || null },
      {
        placeholder: (0, import_index_b5161435.j)(placeholder)
      }
    ], {})}${(0, import_index_b5161435.d)("value", value, 0)}${(0, import_index_b5161435.d)("this", inner, 0)}>` : `${type === "date" ? `<input${(0, import_index_b5161435.h)([
      (0, import_index_b5161435.i)($$restProps),
      { class: (0, import_index_b5161435.j)(classes) },
      { type: "date" },
      { disabled: disabled || null },
      { name: (0, import_index_b5161435.j)(name) },
      {
        placeholder: (0, import_index_b5161435.j)(placeholder)
      },
      { readonly: readonly || null }
    ], {})}${(0, import_index_b5161435.d)("value", value, 0)}${(0, import_index_b5161435.d)("this", inner, 0)}>` : `${type === "time" ? `<input${(0, import_index_b5161435.h)([
      (0, import_index_b5161435.i)($$restProps),
      { class: (0, import_index_b5161435.j)(classes) },
      { type: "time" },
      { disabled: disabled || null },
      { name: (0, import_index_b5161435.j)(name) },
      {
        placeholder: (0, import_index_b5161435.j)(placeholder)
      },
      { readonly: readonly || null }
    ], {})}${(0, import_index_b5161435.d)("value", value, 0)}${(0, import_index_b5161435.d)("this", inner, 0)}>` : `${type === "datetime" ? `<input${(0, import_index_b5161435.h)([
      (0, import_index_b5161435.i)($$restProps),
      { type: "datetime" },
      { readonly: readonly || null },
      { class: (0, import_index_b5161435.j)(classes) },
      { name: (0, import_index_b5161435.j)(name) },
      { disabled: disabled || null },
      {
        placeholder: (0, import_index_b5161435.j)(placeholder)
      }
    ], {})}${(0, import_index_b5161435.d)("value", value, 0)}${(0, import_index_b5161435.d)("this", inner, 0)}>` : `${type === "datetime-local" ? `<input${(0, import_index_b5161435.h)([
      (0, import_index_b5161435.i)($$restProps),
      { class: (0, import_index_b5161435.j)(classes) },
      { type: "datetime-local" },
      { disabled: disabled || null },
      { name: (0, import_index_b5161435.j)(name) },
      {
        placeholder: (0, import_index_b5161435.j)(placeholder)
      },
      { readonly: readonly || null }
    ], {})}${(0, import_index_b5161435.d)("value", value, 0)}${(0, import_index_b5161435.d)("this", inner, 0)}>` : `${type === "month" ? `<input${(0, import_index_b5161435.h)([
      (0, import_index_b5161435.i)($$restProps),
      { class: (0, import_index_b5161435.j)(classes) },
      { type: "month" },
      { disabled: disabled || null },
      { name: (0, import_index_b5161435.j)(name) },
      {
        placeholder: (0, import_index_b5161435.j)(placeholder)
      },
      { readonly: readonly || null }
    ], {})}${(0, import_index_b5161435.d)("value", value, 0)}${(0, import_index_b5161435.d)("this", inner, 0)}>` : `${type === "color" ? `<input${(0, import_index_b5161435.h)([
      (0, import_index_b5161435.i)($$restProps),
      { type: "color" },
      { readonly: readonly || null },
      { class: (0, import_index_b5161435.j)(classes) },
      { name: (0, import_index_b5161435.j)(name) },
      { disabled: disabled || null },
      {
        placeholder: (0, import_index_b5161435.j)(placeholder)
      }
    ], {})}${(0, import_index_b5161435.d)("value", value, 0)}${(0, import_index_b5161435.d)("this", inner, 0)}>` : `${type === "range" ? `<input${(0, import_index_b5161435.h)([
      (0, import_index_b5161435.i)($$restProps),
      { type: "range" },
      { readonly: readonly || null },
      { class: (0, import_index_b5161435.j)(classes) },
      { name: (0, import_index_b5161435.j)(name) },
      { disabled: disabled || null },
      {
        placeholder: (0, import_index_b5161435.j)(placeholder)
      }
    ], {})}${(0, import_index_b5161435.d)("value", value, 0)}${(0, import_index_b5161435.d)("this", inner, 0)}>` : `${type === "search" ? `<input${(0, import_index_b5161435.h)([
      (0, import_index_b5161435.i)($$restProps),
      { class: (0, import_index_b5161435.j)(classes) },
      { type: "search" },
      { disabled: disabled || null },
      { name: (0, import_index_b5161435.j)(name) },
      {
        placeholder: (0, import_index_b5161435.j)(placeholder)
      },
      { readonly: readonly || null },
      { size: (0, import_index_b5161435.j)(size) }
    ], {})}${(0, import_index_b5161435.d)("value", value, 0)}${(0, import_index_b5161435.d)("this", inner, 0)}>` : `${type === "tel" ? `<input${(0, import_index_b5161435.h)([
      (0, import_index_b5161435.i)($$restProps),
      { class: (0, import_index_b5161435.j)(classes) },
      { type: "tel" },
      { disabled: disabled || null },
      { name: (0, import_index_b5161435.j)(name) },
      {
        placeholder: (0, import_index_b5161435.j)(placeholder)
      },
      { readonly: readonly || null },
      { size: (0, import_index_b5161435.j)(size) }
    ], {})}${(0, import_index_b5161435.d)("value", value, 0)}${(0, import_index_b5161435.d)("this", inner, 0)}>` : `${type === "week" ? `<input${(0, import_index_b5161435.h)([
      (0, import_index_b5161435.i)($$restProps),
      { class: (0, import_index_b5161435.j)(classes) },
      { type: "week" },
      { disabled: disabled || null },
      { name: (0, import_index_b5161435.j)(name) },
      {
        placeholder: (0, import_index_b5161435.j)(placeholder)
      },
      { readonly: readonly || null }
    ], {})}${(0, import_index_b5161435.d)("value", value, 0)}${(0, import_index_b5161435.d)("this", inner, 0)}>` : `<input${(0, import_index_b5161435.h)([
      (0, import_index_b5161435.i)($$restProps),
      { type: (0, import_index_b5161435.j)(type) },
      { readonly: readonly || null },
      { class: (0, import_index_b5161435.j)(classes) },
      { name: (0, import_index_b5161435.j)(name) },
      { disabled: disabled || null },
      {
        placeholder: (0, import_index_b5161435.j)(placeholder)
      },
      { value: (0, import_index_b5161435.j)(value) }
    ], {})}>`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}` : `${tag === "textarea" ? `<textarea${(0, import_index_b5161435.h)([
      (0, import_index_b5161435.i)($$restProps),
      { class: (0, import_index_b5161435.j)(classes) },
      { disabled: disabled || null },
      { name: (0, import_index_b5161435.j)(name) },
      {
        placeholder: (0, import_index_b5161435.j)(placeholder)
      },
      { readonly: readonly || null }
    ], {})}${(0, import_index_b5161435.d)("this", inner, 0)}>${value || ""}</textarea>` : `${tag === "select" && !multiple ? `<select${(0, import_index_b5161435.h)([
      (0, import_index_b5161435.i)($$restProps),
      { class: (0, import_index_b5161435.j)(classes) },
      { name: (0, import_index_b5161435.j)(name) },
      { disabled: disabled || null },
      { readonly: readonly || null }
    ], {})}${(0, import_index_b5161435.d)("this", inner, 0)}>${slots.default ? slots.default({}) : ``}</select>

  ` : ``}`}`}
${feedback ? `${Array.isArray(feedback) ? `${(0, import_index_b5161435.f)(feedback, (msg) => {
      return `${(0, import_index_b5161435.v)(FormFeedback, "FormFeedback").$$render($$result, { valid }, {}, {
        default: () => {
          return `${(0, import_index_b5161435.e)(msg)}`;
        }
      })}`;
    })}` : `${(0, import_index_b5161435.v)(FormFeedback, "FormFeedback").$$render($$result, { valid }, {}, {
      default: () => {
        return `${(0, import_index_b5161435.e)(feedback)}`;
      }
    })}`}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
module.exports = __toCommonJS(stdin_exports);
