// let message;
// console.log(message == undefined); // true

// let message; // 这个变量被声明了，只是值为 undefined
// // 确保没有声明过这个变量
// // let age
// console.log(message); // "undefined"
// console.log(age); // 报错

// let message; // 这个变量被声明了，只是值为 undefined
// // 确保没有声明过这个变量
// // let age
// console.log(typeof message); // "undefined"
// console.log(typeof age); // "undefined"

let message; // 这个变量被声明了，只是值为 undefined
// age 没有声明
if (message) {
// 这个块不会执行
}
if (!message) {
// 这个块会执行
}
if (age) {
// 这里会报错
}