import { defineReactive } from "./defineReactive";

const obj: any = {};

defineReactive(obj, "name", "klay");

console.log(obj.name);
