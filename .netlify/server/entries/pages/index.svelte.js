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
  default: () => Routes
});
var import_index_b5161435 = require("../../chunks/index-b5161435.js");
var import_string_hash = require("string-hash");
var import_test_svelte = __toESM(require("./test.svelte.js"));
var import_uuid = require("uuid");
var import_Button_f6c0dbc0 = require("../../chunks/Button-f6c0dbc0.js");
var import_Offcanvas_svelte_svelte_type_style_lang_c26d06b1 = require("../../chunks/Offcanvas.svelte_svelte_type_style_lang-c26d06b1.js");
var import_Input_36bca776 = require("../../chunks/Input-36bca776.js");
var import_store = require("../endpoints/stores/store.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "hr.svelte-migweq{border:solid;width:auto\n    }img.svelte-migweq{border-right:100px;border-radius:100%;border-right:500px}#profile.svelte-migweq{text-align:center}#button.svelte-migweq{text-align:center}main.svelte-migweq{background-color:grey}#logout.svelte-migweq{text-align:right}",
  map: null
};
const Routes = (0, import_index_b5161435.c)(($$result, $$props, $$bindings, slots) => {
  let $usersStoreAll, $$unsubscribe_usersStoreAll;
  let $Password, $$unsubscribe_Password;
  let $users, $$unsubscribe_users;
  let $Email, $$unsubscribe_Email;
  let $id, $$unsubscribe_id;
  let $Gender, $$unsubscribe_Gender;
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  let $$unsubscribe_passwordCount;
  let $$unsubscribe_nameCount;
  let $$unsubscribe_EmailCount;
  let $usersStore, $$unsubscribe_usersStore;
  $$unsubscribe_usersStoreAll = (0, import_index_b5161435.b)(import_store.usersStoreAll, (value) => $usersStoreAll = value);
  $$unsubscribe_Password = (0, import_index_b5161435.b)(import_store.Password, (value) => $Password = value);
  $$unsubscribe_users = (0, import_index_b5161435.b)(import_store.users, (value) => $users = value);
  $$unsubscribe_Email = (0, import_index_b5161435.b)(import_store.Email, (value) => $Email = value);
  $$unsubscribe_id = (0, import_index_b5161435.b)(import_store.id, (value) => $id = value);
  $$unsubscribe_Gender = (0, import_index_b5161435.b)(import_store.Gender, (value) => $Gender = value);
  $$unsubscribe_isLoggedIn = (0, import_index_b5161435.b)(import_store.isLoggedIn, (value) => $isLoggedIn = value);
  $$unsubscribe_passwordCount = (0, import_index_b5161435.b)(import_store.passwordCount, (value) => value);
  $$unsubscribe_nameCount = (0, import_index_b5161435.b)(import_store.nameCount, (value) => value);
  $$unsubscribe_EmailCount = (0, import_index_b5161435.b)(import_store.EmailCount, (value) => value);
  $$unsubscribe_usersStore = (0, import_index_b5161435.b)(import_store.usersStore, (value) => $usersStore = value);
  let filteredUsers = [];
  let username = "";
  let email = "";
  let password = "";
  console.log($usersStore, $users, $Email, $id, $Password, $isLoggedIn, $Gender, $usersStoreAll);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `${$id ? `${$$result.title = `<title>Home</title>`, ""}` : ``}`, ""}
  ${$id ? `<main class="${"svelte-migweq"}">${(0, import_index_b5161435.v)(import_Offcanvas_svelte_svelte_type_style_lang_c26d06b1.C, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `<br>
      <div id="${"logout"}" class="${"svelte-migweq"}">${(0, import_index_b5161435.v)(import_Button_f6c0dbc0.B, "Button").$$render($$result, { color: "danger" }, {}, {
          default: () => {
            return `Logout`;
          }
        })}</div>
<div class="${"form"}"><br>
  <br>
  <div><form><label for="${"text"}">User name:</label>
      ${(0, import_index_b5161435.v)(import_Input_36bca776.I, "Input").$$render($$result, {
          type: "text",
          placeholder: "Change User name...",
          value: username
        }, {
          value: ($$value) => {
            username = $$value;
            $$settled = false;
          }
        }, {})}
      <br>
      <p>Current User name is: ${(0, import_index_b5161435.e)($users)}</p>
      ${(0, import_index_b5161435.v)(import_Button_f6c0dbc0.B, "Button").$$render($$result, { color: "success" }, {}, {
          default: () => {
            return `Change...`;
          }
        })}
      <br>
      <br></form></div></div>
<br>
<br>
<hr class="${"svelte-migweq"}">
<br>
<br>
<div class="${"form"}"><br>
  <br>
  <div><form><label for="${"email"}">Email:</label>
      ${(0, import_index_b5161435.v)(import_Input_36bca776.I, "Input").$$render($$result, {
          type: "email",
          placeholder: "Change Your Email...",
          value: email
        }, {
          value: ($$value) => {
            email = $$value;
            $$settled = false;
          }
        }, {})}
      <br>
      <p>Current Email is: ${(0, import_index_b5161435.e)($Email)}</p>
      ${filteredUsers.emailStats === 2 ? `${(0, import_index_b5161435.v)(import_Button_f6c0dbc0.B, "Button").$$render($$result, { color: "success", disabled: true }, {}, {
          default: () => {
            return `Change...`;
          }
        })}` : `${(0, import_index_b5161435.v)(import_Button_f6c0dbc0.B, "Button").$$render($$result, { color: "success" }, {}, {
          default: () => {
            return `Change...`;
          }
        })}`}
      <br>
      <br></form></div></div>
<hr class="${"svelte-migweq"}">
<br>
<div class="${"form"}"><br>
  <br>
  <div><form><label for="${"text"}">Password:</label>
      ${(0, import_index_b5161435.v)(import_Input_36bca776.I, "Input").$$render($$result, {
          type: "password",
          id: "myInput",
          placeholder: "Change Password...",
          value: password
        }, {
          value: ($$value) => {
            password = $$value;
            $$settled = false;
          }
        }, {})}
      <input type="${"checkbox"}"> Show Password
      <br>
      <br>
      <p>Current Password is: ${(0, import_index_b5161435.e)($Password)}</p>
      ${(0, import_index_b5161435.v)(import_Button_f6c0dbc0.B, "Button").$$render($$result, { color: "success" }, {}, {
          default: () => {
            return `Change...`;
          }
        })}
      <br>
      <br></form></div></div>
<hr class="${"svelte-migweq"}">
<br>
<div id="${"button"}" class="${"svelte-migweq"}">${(0, import_index_b5161435.v)(import_Button_f6c0dbc0.B, "Button").$$render($$result, {
          style: "align-self: center",
          color: "danger"
        }, {}, {
          default: () => {
            return `Delete Account`;
          }
        })}</div>
<br>
<br>
<br>

<div id="${"profile"}" class="${"svelte-migweq"}"><img style="${""}" width="${"80"}" height="${"80"}" src="${"../profile-avatar.png"}" alt="${"User_Image"}" class="${"svelte-migweq"}">
  <p><strong>Name:</strong> <i>${(0, import_index_b5161435.e)($users)}</i></p>
  ${filteredUsers.gender === "his" ? `<p>Gender: Male</p>` : `<p>Gender: Female</p>`}
  <p>Email Address: ${(0, import_index_b5161435.e)(filteredUsers.email)}</p>
  <p>Password: ${(0, import_index_b5161435.e)(filteredUsers.password)}</p>
  <br>
  <br>
  <br>
  <br>
  <br></div>`;
      }
    })}</main>` : `${(0, import_index_b5161435.v)(import_test_svelte.default, "Test").$$render($$result, {}, {}, {})}`}`;
  } while (!$$settled);
  $$unsubscribe_usersStoreAll();
  $$unsubscribe_Password();
  $$unsubscribe_users();
  $$unsubscribe_Email();
  $$unsubscribe_id();
  $$unsubscribe_Gender();
  $$unsubscribe_isLoggedIn();
  $$unsubscribe_passwordCount();
  $$unsubscribe_nameCount();
  $$unsubscribe_EmailCount();
  $$unsubscribe_usersStore();
  return $$rendered;
});
module.exports = __toCommonJS(stdin_exports);
