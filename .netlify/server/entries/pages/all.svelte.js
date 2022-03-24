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
  default: () => All
});
var import_index_b5161435 = require("../../chunks/index-b5161435.js");
var import_string_hash = require("string-hash");
var import_test_svelte = __toESM(require("./test.svelte.js"));
var import_uuid = require("uuid");
var import_Button_f6c0dbc0 = require("../../chunks/Button-f6c0dbc0.js");
var import_Offcanvas_svelte_svelte_type_style_lang_c26d06b1 = require("../../chunks/Offcanvas.svelte_svelte_type_style_lang-c26d06b1.js");
var import_Input_36bca776 = require("../../chunks/Input-36bca776.js");
var import_store = require("../endpoints/stores/store.js");
var all_svelte_svelte_type_style_lang = "";
const css = {
  code: "hr.svelte-871a3c{border:solid;width:auto\n      }#button.svelte-871a3c{text-align:center}#logout.svelte-871a3c{text-align:right}main.svelte-871a3c{background-color:grey;text-decoration:double}p.svelte-871a3c{text-decoration-color:aqua}table.svelte-871a3c{font-family:Arial, Helvetica, sans-serif;border-collapse:collapse;width:100%}td.svelte-871a3c,th.svelte-871a3c{border:1px solid #dddddd;text-align:left;padding:8px}tr.svelte-871a3c:nth-child(even){background-color:#dddddd}form.svelte-871a3c{border-style:solid;border-radius:100px;padding:50px;border-color:blue}",
  map: null
};
const All = (0, import_index_b5161435.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_usersStore;
  let $usersStoreAll, $$unsubscribe_usersStoreAll;
  let $Password, $$unsubscribe_Password;
  let $users, $$unsubscribe_users;
  let $Email, $$unsubscribe_Email;
  let $id, $$unsubscribe_id;
  let $$unsubscribe_Gender;
  let $$unsubscribe_isLoggedIn;
  let $$unsubscribe_passwordCount;
  let $$unsubscribe_nameCount;
  let $$unsubscribe_EmailCount;
  $$unsubscribe_usersStore = (0, import_index_b5161435.b)(import_store.usersStore, (value) => value);
  $$unsubscribe_usersStoreAll = (0, import_index_b5161435.b)(import_store.usersStoreAll, (value) => $usersStoreAll = value);
  $$unsubscribe_Password = (0, import_index_b5161435.b)(import_store.Password, (value) => $Password = value);
  $$unsubscribe_users = (0, import_index_b5161435.b)(import_store.users, (value) => $users = value);
  $$unsubscribe_Email = (0, import_index_b5161435.b)(import_store.Email, (value) => $Email = value);
  $$unsubscribe_id = (0, import_index_b5161435.b)(import_store.id, (value) => $id = value);
  $$unsubscribe_Gender = (0, import_index_b5161435.b)(import_store.Gender, (value) => value);
  $$unsubscribe_isLoggedIn = (0, import_index_b5161435.b)(import_store.isLoggedIn, (value) => value);
  $$unsubscribe_passwordCount = (0, import_index_b5161435.b)(import_store.passwordCount, (value) => value);
  $$unsubscribe_nameCount = (0, import_index_b5161435.b)(import_store.nameCount, (value) => value);
  $$unsubscribe_EmailCount = (0, import_index_b5161435.b)(import_store.EmailCount, (value) => value);
  let filteredUsers = [];
  let username = "";
  let email = "";
  let password = "";
  let searchTerm = "";
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        filteredUsers = $usersStoreAll;
        if (searchTerm) {
          filteredUsers = $usersStoreAll.filter((array) => {
            return array.name.toString().toLowerCase().includes(searchTerm.toLowerCase()) || array.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) || array.email.toString().toLowerCase().includes(searchTerm.toLowerCase());
          });
        } else {
          filteredUsers = $usersStoreAll;
        }
      }
    }
    $$rendered = `${$$result.head += `${$id ? `${$$result.title = `<title>Home</title>`, ""}` : ``}`, ""}
    ${$id ? `<main class="${"svelte-871a3c"}">${(0, import_index_b5161435.v)(import_Offcanvas_svelte_svelte_type_style_lang_c26d06b1.C, "Container").$$render($$result, {}, {}, {
      default: () => {
        return `<br>
          <div id="${"logout"}" class="${"svelte-871a3c"}">${(0, import_index_b5161435.v)(import_Button_f6c0dbc0.B, "Button").$$render($$result, { color: "danger" }, {}, {
          default: () => {
            return `Logout`;
          }
        })}</div>
  <div class="${"form"}"><br>
    <br>
    <div><form class="${"svelte-871a3c"}"><label for="${"text"}">User name:</label>
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
        <p class="${"svelte-871a3c"}">Current User name is: ${(0, import_index_b5161435.e)($users)}</p>
        ${(0, import_index_b5161435.v)(import_Button_f6c0dbc0.B, "Button").$$render($$result, { color: "success" }, {}, {
          default: () => {
            return `Change...`;
          }
        })}
        <br>
        <br></form></div></div>
  <br>
  <br>
  <hr class="${"svelte-871a3c"}">
  <br>
  <div class="${"form"}"><br>
    <div><form class="${"svelte-871a3c"}"><label for="${"email"}">Email:</label>
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
        <p class="${"svelte-871a3c"}">Current Email is: ${(0, import_index_b5161435.e)($Email)}</p>
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
  <br>
  <br>
  <hr class="${"svelte-871a3c"}">
  <br>
  <div class="${"form"}"><br>
    <br>
    <div><form class="${"svelte-871a3c"}"><label for="${"text"}">Password:</label>
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
        <p class="${"svelte-871a3c"}">Current Password is: ${(0, import_index_b5161435.e)($Password)}</p>
        ${(0, import_index_b5161435.v)(import_Button_f6c0dbc0.B, "Button").$$render($$result, { color: "success" }, {}, {
          default: () => {
            return `Change...`;
          }
        })}
        <br>
        <br></form></div></div>
  <br>
  <div id="${"button"}" class="${"svelte-871a3c"}">${(0, import_index_b5161435.v)(import_Button_f6c0dbc0.B, "Button").$$render($$result, {
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
  
  ${(0, import_index_b5161435.v)(import_Input_36bca776.I, "Input").$$render($$result, {
          type: "text",
          placeholder: "Search User By Name, Email or Id",
          value: searchTerm
        }, {
          value: ($$value) => {
            searchTerm = $$value;
            $$settled = false;
          }
        }, {})}
  <p class="${"svelte-871a3c"}">Your Search Term Is: <b>${(0, import_index_b5161435.e)(searchTerm)}</b></p>
  <br>
  <br>
  <table class="${"svelte-871a3c"}"><tr class="${"svelte-871a3c"}"><th class="${"svelte-871a3c"}"><strong>N/O</strong></th>
          <th class="${"svelte-871a3c"}"><strong>User Names</strong></th>
          <th class="${"svelte-871a3c"}"><strong>Emails</strong></th>
          <th class="${"svelte-871a3c"}"><strong>Passwords</strong></th>
          <th class="${"svelte-871a3c"}"><strong>ID&#39;s</strong></th></tr>
      ${(0, import_index_b5161435.f)(filteredUsers, (user, index) => {
          return `<tr class="${"svelte-871a3c"}"><td class="${"svelte-871a3c"}">${(0, import_index_b5161435.e)(index + 1)}</td>
          <td class="${"svelte-871a3c"}">${(0, import_index_b5161435.e)(user.name)}</td>
          <td class="${"svelte-871a3c"}">${(0, import_index_b5161435.e)(user.email)}</td>
          <td class="${"svelte-871a3c"}">${(0, import_index_b5161435.e)(user.password)}</td>
          <td class="${"svelte-871a3c"}"><i>${(0, import_index_b5161435.e)(user.id)}</i></td>
        </tr>`;
        })}</table>`;
      }
    })}</main>` : `${(0, import_index_b5161435.v)(import_test_svelte.default, "Test").$$render($$result, {}, {}, {})}`}`;
  } while (!$$settled);
  $$unsubscribe_usersStore();
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
  return $$rendered;
});
module.exports = __toCommonJS(stdin_exports);
