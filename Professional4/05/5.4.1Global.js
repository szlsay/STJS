// let uri = "http://www.wrox.com/illegal value.js#start";
// console.log(encodeURI(uri));
// // "http://www.wrox.com/illegal%20value.js#start"
// console.log(encodeURIComponent(uri));
// // "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start"

// let uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start";
// console.log(decodeURI(uri));
// // http%3A%2F%2Fwww.wrox.com%2Fillegal value.js%23start
// console.log(decodeURIComponent(uri));
// // http:// www.wrox.com/illegal value.js#start

// eval("console.log('hi')"); //等价与 console.log("hi");

// let msg = "hello world";
// eval("console.log(msg)"); // "hello world

// eval("function sayHi() { console.log('hi'); }");
// eval('sayHi()')
// sayHi();

// eval("let msg = 'hello world';");
// console.log(msg); // Reference Error: msg is not defined

// "use strict";
// eval = "hi"; // 导致错误

// var color = "red";
// function sayColor() {
//   console.log(color);
// }
// sayColor(); // "red"

let global = (function () {
  return this;
})();

console.log(global)
