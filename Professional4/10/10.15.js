// let count = 10;
// // IIFE
// (function () {
//   for (var i = 0; i < count; i++) {
//     console.log(i);
//   }
// })();
// console.log(i); // 抛出错误

// let count = 10;
// 内嵌块级作用域
// {
//   let i;
//   for (i = 0; i < count; i++) {
//     console.log(i);
//   }
// }
// // console.log(i); // 抛出错误
// // 循环的块级作用域
// for (let i = 0; i < count; i++) {
//   console.log(i);
// }
// console.log(i); // 抛出错误

// let divs = document.querySelectorAll("div");
// // 达不到目的！
// for (var i = 0; i < divs.length; ++i) {
//   divs[i].addEventListener("click", function () {
//     console.log(i);
//   });
// }

// let divs = document.querySelectorAll("div");
// for (var i = 0; i < divs.length; ++i) {
//   divs[i].addEventListener(
//     "click",
//     (function (frozenCounter) {
//       return function () {
//         console.log(frozenCounter);
//       };
//     })(i)
//   );
// }

// let divs = document.querySelectorAll("div");
// for (let i = 0; i < divs.length; ++i) {
//   divs[i].addEventListener("click", function () {
//     console.log(i);
//   });
// }

let divs = document.querySelectorAll("div");
// 达不到目的！
let i;
for (i = 0; i < divs.length; ++i) {
  divs[i].addEventListener("click", function () {
    console.log(i);
  });
}
