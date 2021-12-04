// function sayHi(name, message) {
//   console.log("Hello " + name + ", " + message);
// }

// function sayHi() {
//   console.log("Hello " + arguments[0] + ", " + arguments[1]);
// }

// sayHi(1, 2);

// function howManyArgs() {
//   console.log(arguments.length);
// }
// howManyArgs("string", 45); // 2
// howManyArgs(); // 0
// howManyArgs(12); // 1

// function doAdd() {
//   if (arguments.length === 1) {
//     console.log(arguments[0] + 10);
//   } else if (arguments.length === 2) {
//     console.log(arguments[0] + arguments[1]);
//   }
// }

// function doAdd(num1, num2) {
//   if (arguments.length === 1) {
//     console.log(num1 + 10);
//   } else if (arguments.length === 2) {
//     console.log(arguments[0] + num2);
//   }
// }

// function doAdd(num1, num2) {
//   arguments[1] = 10;
//   console.log(arguments[0] + num2);
// }

// doAdd(10); // 20
// doAdd(30, 20); // 50

// function foo() {
//   console.log(arguments[0]);
// }
// foo(5); // 5
// let bar = () => {
//   console.log(arguments);
// };
// bar(5); // {}

function foo() {
  let bar = () => {
    console.log(arguments[0]); // 5
  };
  bar();
}
foo(5);
