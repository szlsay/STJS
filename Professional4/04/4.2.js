// var color = "blue";
// function changeColor() {
//   if (color === "blue") {
//     color = "red";
//   } else {
//     color = "blue";
//   }
// }
// changeColor();
// console.log(color);

// function add(num1, num2) {
//   var sum = num1 + num2;
//   return sum;
// }
// let result = add(10, 20); // 30
// console.log(sum); // 报错： sum 在这里不是有效变量

// if (true) {
//   let a;
// }
// console.log(a); // ReferenceError: a 没有定义
// while (true) {
//   let b;
// }
// console.log(b); // ReferenceError: b 没有定义
// function foo() {
//   let c;
// }
// console.log(c); // ReferenceError: c 没有定义
// // 这没什么可奇怪的
// // var 声明也会导致报错
// // 这不是对象字面量，而是一个独立的块
// // JavaScript 解释器会根据其中内容识别出它来
// {
//   let d;
// }
// console.log(d); // ReferenceError: d 没有定义

// // const a; // SyntaxError: 常量声明时没有初始化
// const b = 3;
// console.log(b); // 3
// // b = 4; // TypeError: 给常量赋值
// // const 除了要遵循以上规则，其他方面与 let 声明是一样的：
// if (true) {
// const a = 0;
// }
// // console.log(a); // ReferenceError: a 没有定义

// const o1 = {};
// o1 = {}; // TypeError: 给常量赋值
// const o2 = {};
// o2.name = "Jake";
// console.log(o2.name); // 'Jake'

// const o3 = Object.freeze({});
// o3.name = 'Jake';
// console.log(o3.name); // undefined
