// let intNum = 55; // 整数
// let octalNum1 = 070; // 八进制的 56
// let octalNum2 = 079; // 无效的八进制值，当成 79 处理
// let octalNum3 = 08; // 无效的八进制值，当成 8 处理

// let hexNum1 = 0xA; // 十六进制 10
// let hexNum2 = 0x1f; // 十六进制 31

// let floatNum1 = 1.1;
// let floatNum2 = 0.1;
// let floatNum3 = .1; // 有效，但不推荐

// let floatNum1 = 1.; // 小数点后面没有数字，当成整数 1 处理
// let floatNum2 = 10.0; // 小数点后面是零，当成整数 10 处理

// let floatNum = 3.125e7; // 等于 31250000

// let result = Number.MAX_VALUE + Number.MAX_VALUE;
// console.log(isFinite(result)); // false

// console.log(0/0); // NaN
// console.log(-0/+0); // NaN

// console.log(5/0); // Infinity
// console.log(5/-0); // -Infinity

// console.log(NaN == NaN); // false

// console.log(isNaN(NaN)); // true
// console.log(isNaN(10)); // false， 10 是数值
// console.log(isNaN("10")); // false，可以转换为数值 10
// console.log(isNaN("blue")); // true，不可以转换为数值
// console.log(isNaN(true)); // false，可以转换为数值 1

let num1 = Number("Hello world!"); // NaN
let num2 = Number(""); // 0
let num3 = Number("000011"); // 11
let num4 = Number(true); // 1