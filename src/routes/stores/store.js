import { writable, readable } from 'svelte/store';
import { browser } from "$app/env";
import { v4 as uuid } from 'uuid'
import stringHash from 'string-hash';


export const Email = writable(browser && localStorage.getItem("Email"));
Email.subscribe((val) => browser && localStorage.setItem("Email", val));
export const Password = writable(browser && localStorage.getItem("Password"));
Password.subscribe((val) => browser && localStorage.setItem("Password", val));
export const id = writable(browser && localStorage.getItem("id"));
id.subscribe((val) => browser && localStorage.setItem("id", val));
export const users = writable(browser && localStorage.getItem("users"));
users.subscribe((val) => browser && localStorage.setItem("users", val));
export const isLoggedIn = writable(browser && localStorage.getItem("isLoggedIn"));
isLoggedIn.subscribe((val) => browser && localStorage.setItem("isLoggedIn", val));
export const Gender = writable(browser && localStorage.getItem("Gender"));
Gender.subscribe((val) => browser && localStorage.setItem("Gender", val));
export const usersStore = writable(browser && localStorage.getItem("usersStore"));
usersStore.subscribe((val) => browser && localStorage.setItem("usersStore", val));
export const usersStoreAll = writable(browser && localStorage.getItem("usersStoreAll"));
usersStoreAll.subscribe((val) => browser && localStorage.setItem("usersStoreAll", val));
export const EmailCount = writable(browser && localStorage.getItem("EmailCount"));
EmailCount.subscribe((val) => browser && localStorage.setItem("EmailCount", val));
export const nameCount = writable(browser && localStorage.getItem("nameCount"));
nameCount.subscribe((val) => browser && localStorage.setItem("nameCount", val));
export const passwordCount = writable(browser && localStorage.getItem("passwordCount"));
passwordCount.subscribe((val) => browser && localStorage.setItem("passwordCount", val));