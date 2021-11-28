// if (true) {
//   var name = "Matt";
//   console.log(name); // Matt
// }
// console.log(name); // Matt

// if (true) {
//   let age = 26;
//   console.log(age); // 26
// }
// console.log(age); // ReferenceError: age 没有定义

// var name = "Nicholas";
// console.log(name); // 'Nicholas'
// if (true) {
//   var name = "Matt";
//   console.log(name); // 'Matt'
// }
// let age = 30;
// console.log(age); // 30
// if (true) {
//   let age = 26;
//   console.log(age); // 26
// }

// var name;
// let name; // SyntaxError
// let age;
// var age; // SyntaxError

// // name 会被提升
// console.log(name); // undefined
// var name = 'Matt';
// // age 不会被提升
// console.log(age); // ReferenceError： age 没有定义
// let age = 26;

// for (var i = 0; i < 5; ++i) {
//   // 循环逻辑
// }
// console.log(i); // 5

// for (let i = 0; i < 5; ++i) {
//   // 循环逻辑
// }
// console.log(i); // ReferenceError: i 没有定义

for (var i = 0; i < 5; ++i) {
  setTimeout(() => console.log(i), 0);
}
// 会输出 5、5、5、5、5

for (let i = 0; i < 5; ++i) {
  setTimeout(() => console.log(i), 0);
}
// 会输出 0、 1、 2、 3、 4
