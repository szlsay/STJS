// function sum(num1, num2) {
//   return num1 + num2;
// }

// let sum = function (num1, num2) {
//   return num1 + num2;
// };

// let sum = (num1, num2) => {
//   return num1 + num2;
// };

// let sum = new Function("num1", "num2", "return num1 + num2");
// console.log(sum(1, 2));

// let arrowSum = (a, b) => {
//   return a + b;
// };
// let functionExpressionSum = function (a, b) {
//   return a + b;
// };
// console.log(arrowSum(5, 8)); // 13
// console.log(functionExpressionSum(5, 8)); // 13

// let ints = [1, 2, 3];
// console.log(
//   ints.map(function (i) {
//     return i + 1;
//   })
// ); // [2, 3, 4]
// console.log(
//   ints.map((i) => {
//     return i + 1;
//   })
// ); // [2, 3, 4]

// // 以下两种写法都有效，而且返回相应的值
// let double = (x) => { return 2 * x; };
// let triple = (x) => 3 * x;
// // 可以赋值
// let value = {};
// let setName = (x) => x.name = "Matt";
// setName(value);
// console.log(value.name); // "Matt"
// // 无效的写法：
// // let multiply = (a, b) => return a * b;