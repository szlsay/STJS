// // 千万别这样做！
// let condition = false;
// if (condition) {
//   function sayHi() {
//     console.log("Hi!");
//   }
// } else {
//   function sayHi() {
//     console.log("Yo!");
//   }
// }

// sayHi();

// // 没问题
// let sayHi;
// if (condition) {
//   sayHi = function () {
//     console.log("Hi!");
//   };
// } else {
//   sayHi = function () {
//     console.log("Yo!");
//   };
// }

// function createComparisonFunction(propertyName) {
//   return function (object1, object2) {
//     let value1 = object1[propertyName];
//     let value2 = object2[propertyName];
//     if (value1 < value2) {
//       return -1;
//     } else if (value1 > value2) {
//       return 1;
//     } else {
//       return 0;
//     }
//   };
// }
