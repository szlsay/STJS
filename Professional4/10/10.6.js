// let values = [1, 2, 3, 4];
// function getSum() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; ++i) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// console.log(getSum.apply(null, values)); // 10
// console.log(getSum.apply(getSum, values)); // 10
// console.log(getSum(...values)); // 10

// console.log(getSum(-1, ...values)); // 9
// console.log(getSum(...values, 5)); // 15
// console.log(getSum(-1, ...values, 5)); // 14
// console.log(getSum(...values, ...[5, 6, 7])); // 28

// let values = [1, 2, 3, 4];
// function countArguments() {
//   console.log(arguments.length);
// }
// countArguments(-1, ...values); // 5
// countArguments(...values, 5); // 5
// countArguments(-1, ...values, 5); // 6
// countArguments(...values, ...[5, 6, 7]); // 7

// function getProduct(a, b, c = 1) {
//   return a * b * c;
// }
// let getSum = (a, b, c = 0) => {
//   return a + b + c;
// };
// console.log(getProduct(...[1, 2])); // 2
// console.log(getProduct(...[1, 2, 3])); // 6
// console.log(getProduct(...[1, 2, 3, 4])); // 6
// console.log(getSum(...[0, 1])); // 1
// console.log(getSum(...[0, 1, 2])); // 3
// console.log(getSum(...[0, 1, 2, 3])); // 3

// function getSum(...values) {
//   // 顺序累加 values 中的所有值
//   // 初始值的总和为 0
//   return values.reduce((x, y) => x + y, 0);
// }
// console.log(getSum(1, 2, 3)); // 6

// 不可以
// function getProduct(...values, lastValue) {}
// 可以
// function ignoreFirst(firstValue, ...values) {
// console.log(values);
// }
// ignoreFirst(); // []
// ignoreFirst(1); // []
// ignoreFirst(1,2); // [2]
// ignoreFirst(1,2,3); // [2, 3]

// let getSum = (...values) => {
//   return values.reduce((x, y) => x + y, 0);
// };
// console.log(getSum(1, 2, 3)); // 6

// function getSum(...values) {
//   console.log(arguments.length); // 3
//   console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }
//   console.log(values); // [1, 2, 3]
//   console.log(arguments === values);
// }
// console.log(getSum(1, 2, 3));
