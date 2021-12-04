// function factorial(num) {
//   if (num <= 1) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }

// function factorial(num) {
//   if (num <= 1) {
//     return 1;
//   } else {
//     return num * arguments.callee(num - 1);
//   }
// }

// let trueFactorial = factorial;
// factorial = function () {
//   return 0;
// };
// console.log(trueFactorial(5)); // 120
// console.log(factorial(5)); // 0

// window.color = "red";
// let o = {
//   color: "blue",
// };
// function sayColor() {
//   console.log(this.color);
// }
// sayColor(); // 'red'
// o.sayColor = sayColor;
// o.sayColor(); // 'blue'

// window.color = "red";
// let o = {
//   color: "blue",
// };
// let sayColor = () => console.log(this.color);
// sayColor(); // 'red'
// o.sayColor = sayColor;
// o.sayColor(); // 'red'

// function King() {
//   this.royaltyName = "Henry";
//   // this 引用 King 的实例
//   setTimeout(() => console.log(this.royaltyName), 1000);
// }

// function Queen() {
//   this.royaltyName = "Elizabeth";
//   // this 引用 window 对象
//   setTimeout(function () {
//     console.log(this.royaltyName);
//   }, 1000);
// }
// new King(); // Henry
// new Queen(); // undefined

// function outer() {
//   inner();
// }
// function inner() {
//   console.log(inner.caller);
//   console.log(arguments.callee);
//   console.log(arguments.callee.caller);
// }
// outer();

// function King() {
//   if (!new.target) {
//     throw 'King must be instantiated using "new"';
//   }
//   console.log('King instantiated using "new"');
// }
// new King(); // King instantiated using "new"
// King(); // Error: King must be instantiated using "new"
