// let colors = new Array(3); // 创建一个包含 3 个元素的数组
// let names = new Array("Greg"); // 创建一个只包含一个元素，即字符串"Greg"的数组

// let colors = Array(3); // 创建一个包含 3 个元素的数组
// let names = Array("Greg"); // 创建一个只包含一个元素，即字符串"Greg"的数组

// let colors = ["red", "blue", "green"]; // 创建一个包含 3 个元素的数组
// let names = []; // 创建一个空数组
// let values = [1, 2]; // 创建一个包含 2 个元素的数组
// console.log(colors);
// console.log(names);
// console.log(values);

// // 字符串会被拆分为单字符数组
// console.log(Array.from("Matt")); // ["M", "a", "t", "t"]
// // 可以使用 from()将集合和映射转换为一个新数组
// const m = new Map().set(1, 2).set(3, 4);
// const s = new Set().add(1).add(2).add(3).add(4);
// console.log(Array.from(m)); // [[1, 2], [3, 4]]
// console.log(Array.from(s)); // [1, 2, 3, 4]
// // Array.from()对现有数组执行浅复制
// const a1 = [1, 2, 3, 4];
// const a2 = Array.from(a1);
// console.log(a1); // [1, 2, 3, 4]
// console.log(a1 === a2); // false
// // 可以使用任何可迭代对象
// const iter = {
//   *[Symbol.iterator]() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//   },
// };
// console.log(Array.from(iter)); // [1, 2, 3, 4]

// // arguments 对象可以被轻松地转换为数组
// function getArgsArray() {
//   return Array.from(arguments);
// }
// console.log(getArgsArray(1, 2, 3, 4)); // [1, 2, 3, 4]
// // from()也能转换带有必要属性的自定义对象
// const arrayLikeObject = {
//   0: 1,
//   1: 2,
//   2: 3,
//   3: 4,
//   length: 4,
// };
// console.log(Array.from(arrayLikeObject)); // [1, 2, 3, 4]

// const a1 = [1, 2, 3, 4];
// const a2 = Array.from(a1, x => x**2);
// const a3 = Array.from(a1, function(x) {return x**this.exponent}, {exponent: 2});
// console.log(a2); // [1, 4, 9, 16]
// console.log(a3); // [1, 4, 9, 16]

// console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
// console.log(Array.of(undefined)); // [undefined]

// const options = [, , , , ,]; // 创建包含 5 个元素的数组
// console.log(options.length); // 5
// console.log(options); // [,,,,,]

// const options = [1,,,,5];
// for (const option of options) {
// console.log(option === undefined);
// }
// // false
// // true
// // true
// // true
// // false

// const a = Array.from([, , ,]); // 使用 ES6 的 Array.from()创建的包含 3 个空位的数组
// for (const val of a) {
//   console.log(val === undefined);
// }
// // true
// // true
// // true
// console.log(Array.of(...[, , ,])); // [undefined, undefined, undefined]
// for (const [index, value] of options.entries()) {
//   console.log(value);
// }
// // 1
// // undefined
// // undefined
// // undefined
// // 5

// let colors = ["red", "blue", "green"]; // 定义一个字符串数组
// console.log(colors[0]); // 显示第一项
// colors[2] = "black"; // 修改第三项
// colors[3] = "brown"; // 添加第四项

// let colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
// let names = []; // 创建一个空数组
// console.log(colors.length); // 3
// console.log(names.length); // 0

// let colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
// colors.length = 2;
// console.log(colors[2]); // undefined

// let colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
// colors.length = 4;
// console.log(colors[3]); // undefined

// let colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
// colors[colors.length] = "black"; // 添加一种颜色（位置 3）
// colors[colors.length] = "brown"; // 再添加一种颜色（位置 4）

// let colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
// colors[99] = "black"; // 添加一种颜色（位置 99）
// console.log(colors.length); // 100

// const a = ["foo", "bar", "baz", "qux"];
// // 因为这些方法都返回迭代器，所以可以将它们的内容
// // 通过 Array.from()直接转换为数组实例
// const aKeys = Array.from(a.keys());
// const aValues = Array.from(a.values());
// const aEntries = Array.from(a.entries());
// console.log(aKeys); // [0, 1, 2, 3]
// console.log(aValues); // ["foo", "bar", "baz", "qux"]
// console.log(aEntries); // [[0, "foo"], [1, "bar"], [2, "baz"], [3, "qux"]]

// const a = ["foo", "bar", "baz", "qux"];
// for (const [idx, element] of a.entries()) {
//   console.log(idx);
//   console.log(element);
// }
// // 0
// // foo
// // 1
// // bar
// // 2
// // baz
// // 3
// // qux

// const zeroes = [0, 0, 0, 0, 0];
// // 用 5 填充整个数组
// zeroes.fill(5);
// console.log(zeroes); // [5, 5, 5, 5, 5]
// zeroes.fill(0); // 重置
// // 用 6 填充索引大于等于 3 的元素
// zeroes.fill(6, 3);
// console.log(zeroes); // [0, 0, 0, 6, 6]
// zeroes.fill(0); // 重置
// // 用 7 填充索引大于等于 1 且小于 3 的元素
// zeroes.fill(7, 1, 3);
// console.log(zeroes); // [0, 7, 7, 0, 0];
// zeroes.fill(0); // 重置
// // 用 8 填充索引大于等于 1 且小于 4 的元素
// // (-4 + zeroes.length = 1)
// // (-1 + zeroes.length = 4)
// zeroes.fill(8, -4, -1);
// console.log(zeroes); // [0, 8, 8, 8, 0];

// //fill()静默忽略超出数组边界、零长度及方向相反的索引范围：
// const zeroes = [0, 0, 0, 0, 0];
// // 索引过低，忽略
// zeroes.fill(1, -10, -6);
// console.log(zeroes); // [0, 0, 0, 0, 0]
// // 索引过高，忽略
// zeroes.fill(1, 10, 15);
// console.log(zeroes); // [0, 0, 0, 0, 0]
// // 索引反向，忽略
// zeroes.fill(2, 4, 2);
// console.log(zeroes); // [0, 0, 0, 0, 0]
// // 索引部分可用，填充可用部分
// zeroes.fill(4, 3, 10)
// console.log(zeroes); // [0, 0, 0, 4, 4]

// let ints,
// reset = () => ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// reset();
// // 从 ints 中复制索引 0 开始的内容，插入到索引 5 开始的位置
// // 在源索引或目标索引到达数组边界时停止
// ints.copyWithin(5);
// console.log(ints); // [0, 1, 2, 3, 4, 0, 1, 2, 3, 4]
// reset();
// // 从 ints 中复制索引 5 开始的内容，插入到索引 0 开始的位置
// ints.copyWithin(0, 5);
// console.log(ints); // [5, 6, 7, 8, 9, 5, 6, 7, 8, 9]
// reset();
// // 从 ints 中复制索引 0 开始到索引 3 结束的内容
// // 插入到索引 4 开始的位置
// ints.copyWithin(4, 0, 3);
// console.log(ints); // [0, 1, 2, 3, 0, 1, 2, 7, 8, 9]
// reset();
// // JavaScript 引擎在插值前会完整复制范围内的值
// // 因此复制期间不存在重写的风险
// ints.copyWithin(2, 0, 6);
// console.log(ints); // [0, 1, 0, 1, 2, 3, 4, 5, 8, 9]
// reset();
// // 支持负索引值，与 fill()相对于数组末尾计算正向索引的过程是一样的
// ints.copyWithin(-4, -7, -3);
// console.log(ints); // [0, 1, 2, 3, 4, 5, 3, 4, 5, 6]

// // copyWithin()静默忽略超出数组边界、零长度及方向相反的索引范围：
// let ints,
// reset = () => ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// reset();
// // 索引过低，忽略
// ints.copyWithin(1, -15, -12);
// console.log(ints); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// reset()
// // 索引过高，忽略
// ints.copyWithin(1, 12, 15);
// console.log(ints); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// reset();
// // 索引反向，忽略
// ints.copyWithin(2, 4, 2);
// console.log(ints); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// reset();
// // 索引部分可用，复制、填充可用部分
// ints.copyWithin(4, 7, 10)
// console.log(ints); // [0, 1, 2, 3, 7, 8, 9, 7, 8, 9];

// let colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
// console.log(colors.toString()); // red,blue,green
// console.log(colors.valueOf()); // red,blue,green
// console.log(colors); // red,blue,green

// let person1 = {
//   toLocaleString() {
//     return "Nikolaos";
//   },
//   toString() {
//     return "Nicholas";
//   },
// };
// let person2 = {
//   toLocaleString() {
//     return "Grigorios";
//   },
//   toString() {
//     return "Greg";
//   },
// };
// let people = [person1, person2];
// console.log(people); // Nicholas,Greg
// console.log(people.toString()); // Nicholas,Greg
// console.log(people.toLocaleString()); // Nikolaos,Grigorios

// let colors = ["red", "green", "blue"];
// console.log(colors.join(",")); // red,green,blue
// console.log(colors.join("||")); // red||green||blue

// let colors = new Array(); // 创建一个数组
// let count = colors.push("red", "green"); // 推入两项
// console.log(count); // 2
// count = colors.push("black"); // 再推入一项
// console.log(count); // 3
// let item = colors.pop(); // 取得最后一项
// console.log(item); // black
// console.log(colors.length); // 2

// let colors = ["red", "blue"];
// colors.push("brown"); // 再添加一项
// colors[3] = "black"; // 添加一项
// console.log(colors.length); // 4
// let item = colors.pop(); // 取得最后一项
// console.log(item); // black

// let colors = new Array(); // 创建一个数组
// let count = colors.push("red", "green"); // 推入两项
// console.log(count); // 2
// count = colors.push("black"); // 再推入一项
// console.log(count); // 3
// let item = colors.shift(); // 取得第一项
// console.log(item); // red
// console.log(colors.length); // 2

// let colors = new Array(); // 创建一个数组
// let count = colors.unshift("red", "green"); // 从数组开头推入两项
// console.log(count); // 2
// count = colors.unshift("black"); // 再推入一项
// console.log(count); // 3
// let item = colors.pop(); // 取得最后一项
// console.log(item); // green
// console.log(colors.length); // 2

// let values = [1, 2, 3, 4, 5];
// values.reverse();
// console.log(values); // 5,4,3,2,1

// let values = [0, 1, 5, 10, 15];
// values.sort();
// console.log(values); // 0,1,10,15,5

// function compare(value1, value2) {
//   if (value1 < value2) {
//     return -1;
//   } else if (value1 > value2) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// let values = [0, 1, 5, 10, 15];
// values.sort(compare);
// console.log(values); // 0,1,5,10,15

// function compare(value1, value2) {
//   if (value1 < value2) {
//     return 1;
//   } else if (value1 > value2) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// let values = [0, 1, 5, 10, 15];
// values.sort(compare);
// console.log(values); // 15,10,5,1,0

// let colors = ["red", "green", "blue"];
// let colors2 = colors.concat("yellow", ["black", "brown"]);
// console.log(colors); // ["red", "green","blue"]
// console.log(colors2); // ["red", "green", "blue", "yellow", "black", "brown"]

// let colors = ["red", "green", "blue"];
// let newColors = ["black", "brown"];
// let moreNewColors = {
//   [Symbol.isConcatSpreadable]: true,
//   length: 2,
//   0: "pink",
//   1: "cyan",
// };
// newColors[Symbol.isConcatSpreadable] = false;
// // 强制不打平数组
// let colors2 = colors.concat("yellow", newColors);
// // 强制打平类数组对象
// let colors3 = colors.concat(moreNewColors);
// console.log(colors); // ["red", "green", "blue"]
// console.log(colors2); // ["red", "green", "blue", "yellow", ["black", "brown"]]
// console.log(colors3); // ["red", "green", "blue", "pink", "cyan"]

// let colors = ["red", "green", "blue", "yellow", "purple"];
// let colors2 = colors.slice(1);
// let colors3 = colors.slice(1, 4);
// console.log(colors2); // green,blue,yellow,purple
// console.log(colors3); // green,blue,yellow

// let colors = ["red", "green", "blue"];
// let removed = colors.splice(0,1); // 删除第一项
// console.log(colors); // green,blue
// console.log(removed); // red，只有一个元素的数组
// removed = colors.splice(1, 0, "yellow", "orange"); // 在位置 1 插入两个元素
// console.log(colors); // green,yellow,orange,blue
// console.log(removed); // 空数组
// removed = colors.splice(1, 1, "red", "purple"); // 插入两个值，删除一个元素
// console.log(colors); // green,red,purple,orange,blue
// console.log(removed); // yellow，只有一个元素的数组

// let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// console.log(numbers.indexOf(4)); // 3
// console.log(numbers.lastIndexOf(4)); // 5
// console.log(numbers.includes(4)); // true
// console.log(numbers.indexOf(4, 4)); // 5
// console.log(numbers.lastIndexOf(4, 4)); // 3
// console.log(numbers.includes(4, 7)); // false
// let person = { name: "Nicholas" };
// let people = [{ name: "Nicholas" }];
// let morePeople = [person];
// console.log(people.indexOf(person)); // -1
// console.log(morePeople.indexOf(person)); // 0
// console.log(people.includes(person)); // false
// console.log(morePeople.includes(person)); // true

// const people = [
//   {
//     name: "Matt",
//     age: 27,
//   },
//   {
//     name: "Nicholas",
//     age: 29,
//   },
// ];
// console.log(people.find((element, index, array) => element.age < 28));
// // {name: "Matt", age: 27}
// console.log(people.findIndex((element, index, array) => element.age < 28));
// // 0

// const evens = [2, 4, 6];
// // 找到匹配后，永远不会检查数组的最后一个元素
// evens.find((element, index, array) => {
//   console.log(element);
//   console.log(index);
//   console.log(array);
//   return element === 4;
// });
// // 2
// // 0
// // [2, 4, 6]
// // 4
// // 1
// // [2, 4, 6]

// let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// let everyResult = numbers.every((item, index, array) => item > 2);
// console.log(everyResult); // false
// let someResult = numbers.some((item, index, array) => item > 2);
// console.log(someResult); // true
// let mapResult = numbers.map((item, index, array) => item * 2);
// console.log(mapResult); // 2,4,6,8,10,8,6,4,2
// numbers.forEach((item, index, array) => {
//   console.log(item);
// });

// let values = [1, 2, 3, 4, 5];
// let sum = values.reduce((prev, cur, index, array) => prev + cur);
// console.log(sum); // 15

let values = [1, 2, 3, 4, 5];
let sum = values.reduceRight(function (prev, cur, index, array) {
  return prev + cur;
});
console.log(sum); // 15
