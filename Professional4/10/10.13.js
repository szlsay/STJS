// "use strict";
// // 无优化：尾调用没有返回
// function outerFunction() {
//   innerFunction();
// }
// // 无优化：尾调用没有直接返回
// function outerFunction() {
//   let innerFunctionResult = innerFunction();
//   return innerFunctionResult;
// }
// // 无优化：尾调用返回后必须转型为字符串
// function outerFunction() {
//   return innerFunction().toString();
// }
// // 无优化：尾调用是一个闭包
// function outerFunction() {
//   let foo = "bar";
//   function innerFunction() {
//     return foo;
//   }
//   return innerFunction();
// }

// "use strict";
// // 有优化：栈帧销毁前执行参数计算
// function outerFunction(a, b) {
//   return innerFunction(a + b);
// }
// // 有优化：初始返回值不涉及栈帧
// function outerFunction(a, b) {
//   if (a < b) {
//     return a;
//   }
//   return innerFunction(a + b);
// }
// // 有优化：两个内部函数都在尾部
// function outerFunction(condition) {
//   return condition ? innerFunctionA() : innerFunctionB();
// }

// function fib(n) {
//   console.log("---");
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(0)); // 0
// console.log(fib(1)); // 1
// console.log(fib(2)); // 1
// console.log(fib(3)); // 2
// console.log(fib(4)); // 3
// console.log(fib(5)); // 5
// console.log(fib(6)); // 8

// ("use strict");
// // 基础框架
// function fib(n) {

//   return fibImpl(0, 1, n);
// }
// // 执行递归
// function fibImpl(a, b, n) {
//   console.log("---");
//   if (n === 0) {
//     return a;
//   }
//   return fibImpl(b, a + b, n - 1);
// }
// console.log(fib(6));
