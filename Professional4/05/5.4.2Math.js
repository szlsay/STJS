// let max = Math.max(3, 54, 32, 16);
// console.log(max); // 54
// let min = Math.min(3, 54, 32, 16);
// console.log(min); // 3

// let values = [1, 2, 3, 4, 5, 6, 7, 8];
// let max = Math.max(...values);
// console.log(max)

// console.log(Math.ceil(25.9)); // 26
// console.log(Math.ceil(25.5)); // 26
// console.log(Math.ceil(25.1)); // 26
// console.log(Math.round(25.9)); // 26
// console.log(Math.round(25.5)); // 26
// console.log(Math.round(25.1)); // 25
// console.log(Math.fround(0.4)); // 0.4000000059604645
// console.log(Math.fround(0.5)); // 0.5
// console.log(Math.fround(25.9)); // 25.899999618530273
// console.log(Math.floor(25.9)); // 25
// console.log(Math.floor(25.5)); // 25
// console.log(Math.floor(25.1)); // 25

// let num = Math.floor(Math.random() * 10 + 1);
// console.log(num)

// let num = Math.floor(Math.random() * 9 + 2);
// console.log(num);

function selectFrom(lowerValue, upperValue) {
  let choices = upperValue - lowerValue + 1;
  return Math.floor(Math.random() * choices + lowerValue);
}
let num = selectFrom(2, 10);
console.log(num); // 2~10 范围内的值，其中包含 2 和 10

let colors = ["red", "green", "blue", "yellow", "black", "purple", "brown"];
let color = colors[selectFrom(0, colors.length-1)];
console.log(color)