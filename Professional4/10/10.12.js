// function factorial(num) {
//   if (num <= 1) {
//     return 1;
//   } else {
//     // return num * arguments.callee(num - 1);
//     return num * factorial(num - 1);
//   }
// }

// console.log(factorial(4));

// let anotherFactorial = factorial;
// factorial = null;
// console.log(anotherFactorial(4)); // 报错

const factorial = function f(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * f(num - 1);
  }
};
