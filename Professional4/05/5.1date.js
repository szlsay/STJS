// let now = new Date();
// console.log(now); //2021-11-30T09:36:02.068Z

// // let someDate = new Date(Date.parse("May 23, 2019"));
// let someDate = new Date("May 23, 2019");
// console.log(someDate);

// // GMT 时间 2000 年 1 月 1 日零点
// let y2k = new Date(Date.UTC(2000, 0));
// console.log(y2k)
// // GMT 时间 2005 年 5 月 5 日下午 5 点 55 分 55 秒
// let allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
// console.log(allFives)

// // 本地时间 2000 年 1 月 1 日零点
// let y2k = new Date(2000, 0);
// console.log(y2k)
// // 本地时间 2005 年 5 月 5 日下午 5 点 55 分 55 秒
// let allFives = new Date(2005, 4, 5, 17, 55, 55);
// console.log(allFives)

let date1 = new Date(2019, 0, 1); // 2019 年 1 月 1 日
let date2 = new Date(2019, 1, 1); // 2019 年 2 月 1 日
console.log(date1 < date2); // true
console.log(date1 > date2); // false