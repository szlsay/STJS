// function sayName(name) {
//   console.log(name);
// }
// function sum(num1, num2) {
//   return num1 + num2;
// }
// function sayHi() {
//   console.log("hi");
// }
// console.log(sayName.length); // 1
// console.log(sum.length); // 2
// console.log(sayHi.length); // 0

// function sum(num1, num2) {
//   return num1 + num2;
// }
// function callSum1(num1, num2) {
//   return sum.apply(this, arguments); // 传入 arguments 对象
// }

// function callSum2(num1, num2) {
//   return sum.apply(this, [num1, num2]); // 传入数组
// }
// console.log(callSum1(10, 10)); // 20
// console.log(callSum2(10, 10)); // 20

// function sum(num1, num2) {
//   return num1 + num2;
// }
// function callSum(num1, num2) {
//   return sum.call(this, num1, num2);
// }
// console.log(callSum(10, 10)); // 20

// window.color = "red";
// let o = {
//   color: "blue",
// };
// function sayColor() {
//   console.log(this.color);
// }
// sayColor(); // red
// sayColor.call(this); // red
// sayColor.call(window); // red
// sayColor.call(o); // blue

// window.color = "red";
// var o = {
//   color: "blue",
// };
// function sayColor() {
//   console.log(this.color);
// }
// let objectSayColor = sayColor.bind(o);
// objectSayColor(); // blue
