let car = null;
console.log(typeof car); // "object"
if (car != null) {
  // car 是一个对象的引用
}

console.log(null == undefined); // true

let message = null;
let age;
if (message) {
  // 这个块不会执行
}
if (!message) {
  // 这个块会执行
}

if (age) {
  // 这个块不会执行
}
if (!age) {
  // 这个块会执行
}
