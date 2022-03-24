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
  Email: () => Email,
  EmailCount: () => EmailCount,
  Gender: () => Gender,
  Password: () => Password,
  id: () => id,
  isLoggedIn: () => isLoggedIn,
  nameCount: () => nameCount,
  passwordCount: () => passwordCount,
  users: () => users,
  usersStore: () => usersStore,
  usersStoreAll: () => usersStoreAll
});
var import_index_b5161435 = require("../../../chunks/index-b5161435.js");
var import_uuid = require("uuid");
var import_string_hash = require("string-hash");
const subscriber_queue = [];
function writable(value, start = import_index_b5161435.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_b5161435.a)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = import_index_b5161435.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_b5161435.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
const browser = false;
const Email = writable(browser);
Email.subscribe((val) => browser);
const Password = writable(browser);
Password.subscribe((val) => browser);
const id = writable(browser);
id.subscribe((val) => browser);
const users = writable(browser);
users.subscribe((val) => browser);
const isLoggedIn = writable(browser);
isLoggedIn.subscribe((val) => browser);
const Gender = writable(browser);
Gender.subscribe((val) => browser);
const usersStore = writable(browser);
usersStore.subscribe((val) => browser);
const usersStoreAll = writable(browser);
usersStoreAll.subscribe((val) => browser);
const EmailCount = writable(browser);
EmailCount.subscribe((val) => browser);
const nameCount = writable(browser);
nameCount.subscribe((val) => browser);
const passwordCount = writable(browser);
passwordCount.subscribe((val) => browser);
module.exports = __toCommonJS(stdin_exports);
