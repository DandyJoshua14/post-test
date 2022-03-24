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
  default: () => Test
});
var import_index_b5161435 = require("../../chunks/index-b5161435.js");
var import_string_hash = require("string-hash");
var import_uuid = require("uuid");
var import_Button_f6c0dbc0 = require("../../chunks/Button-f6c0dbc0.js");
var import_Offcanvas_svelte_svelte_type_style_lang_c26d06b1 = require("../../chunks/Offcanvas.svelte_svelte_type_style_lang-c26d06b1.js");
var import_store = require("../endpoints/stores/store.js");
var test_svelte_svelte_type_style_lang = "";
const css = {
  code: ".form.svelte-tw6blf{padding:10px;border-radius:10px;max-width:400px;margin:10% auto;text-align:center;background:linear-gradient(blue, purple)}p.svelte-tw6blf{font-weight:1000;color:white}a.svelte-tw6blf{text-decoration:none}input.svelte-tw6blf{border-radius:5px;height:fit-content}",
  map: null
};
const Test = (0, import_index_b5161435.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_nameCount;
  let $$unsubscribe_EmailCount;
  let $$unsubscribe_passwordCount;
  let $$unsubscribe_Gender;
  let $$unsubscribe_Password;
  let $$unsubscribe_Email;
  let $$unsubscribe_users;
  let $$unsubscribe_id;
  let $$unsubscribe_isLoggedIn;
  $$unsubscribe_nameCount = (0, import_index_b5161435.b)(import_store.nameCount, (value) => value);
  $$unsubscribe_EmailCount = (0, import_index_b5161435.b)(import_store.EmailCount, (value) => value);
  $$unsubscribe_passwordCount = (0, import_index_b5161435.b)(import_store.passwordCount, (value) => value);
  $$unsubscribe_Gender = (0, import_index_b5161435.b)(import_store.Gender, (value) => value);
  $$unsubscribe_Password = (0, import_index_b5161435.b)(import_store.Password, (value) => value);
  $$unsubscribe_Email = (0, import_index_b5161435.b)(import_store.Email, (value) => value);
  $$unsubscribe_users = (0, import_index_b5161435.b)(import_store.users, (value) => value);
  $$unsubscribe_id = (0, import_index_b5161435.b)(import_store.id, (value) => value);
  $$unsubscribe_isLoggedIn = (0, import_index_b5161435.b)(import_store.isLoggedIn, (value) => value);
  let gender = [{ id: 1, text: "male" }, { id: 2, text: "female" }];
  let password = "";
  let userName = "";
  let email = "";
  $$result.css.add(css);
  $$unsubscribe_nameCount();
  $$unsubscribe_EmailCount();
  $$unsubscribe_passwordCount();
  $$unsubscribe_Gender();
  $$unsubscribe_Password();
  $$unsubscribe_Email();
  $$unsubscribe_users();
  $$unsubscribe_id();
  $$unsubscribe_isLoggedIn();
  return `${$$result.head += `${$$result.title = `<title>Sign Up Form</title>`, ""}`, ""}
    ${(0, import_index_b5161435.v)(import_Offcanvas_svelte_svelte_type_style_lang_c26d06b1.C, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"form svelte-tw6blf"}"><br>
            <h3 style="${"color: white;"}">Sign Up!</h3>
            <br>
            <div><form><input type="${"text"}" class="${"svelte-tw6blf"}"${(0, import_index_b5161435.d)("value", userName, 0)}>
                <br>
                <label for="${"text"}" style="${"color: white;"}">Username</label>
                <br>
                <br>
                <input type="${"email"}" class="${"svelte-tw6blf"}"${(0, import_index_b5161435.d)("value", email, 0)}>
                <br>
                <label for="${"email"}" style="${"color: white;"}">Email</label>
                <br>
                <br>
                <input type="${"password"}" class="${"svelte-tw6blf"}"${(0, import_index_b5161435.d)("value", password, 0)}>
                <br>
                <label for="${"password"}" style="${"color: white;"}">Password</label>
                <br>
                <br>
                <select>${(0, import_index_b5161435.f)(gender, (question) => {
        return `<option${(0, import_index_b5161435.d)("value", question, 0)}>${(0, import_index_b5161435.e)(question.text)}
                    </option>`;
      })}</select>
                <br>
                <br>
                <p class="${"svelte-tw6blf"}">Don&#39;t have an account? <a href="${"/login"}" class="${"svelte-tw6blf"}">Log In</a></p>
                ${(0, import_index_b5161435.v)(import_Button_f6c0dbc0.B, "Button").$$render($$result, {
        color: "success",
        disabled: !userName
      }, {}, {
        default: () => {
          return `Sign Up`;
        }
      })}
                <br>
                <br></form></div></div>`;
    }
  })}`;
});
module.exports = __toCommonJS(stdin_exports);
