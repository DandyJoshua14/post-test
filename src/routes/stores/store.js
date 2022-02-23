import { writable, readable } from 'svelte/store';
import { browser } from "$app/env";
import { v4 as uuid } from 'uuid'
import stringHash from 'string-hash';

export const readOnly = readable(browser && localStorage.getItem("readOnly"))
readOnly.subscribe((val) => browser && localStorage.setItem("readOnly", val));
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