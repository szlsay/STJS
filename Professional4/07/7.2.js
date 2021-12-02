// let num = 1;
// let obj = {};
// // 这两种类型没有实现迭代器工厂函数
// console.log(num[Symbol.iterator]); // undefined
// console.log(obj[Symbol.iterator]); // undefined
// let str = "abc";
// let arr = ["a", "b", "c"];
// let map = new Map().set("a", 1).set("b", 2).set("c", 3);
// let set = new Set().add("a").add("b").add("c");
// // let els = document.querySelectorAll("div");
// // 这些类型都实现了迭代器工厂函数
// console.log(str[Symbol.iterator]); // f values() { [native code] }
// console.log(arr[Symbol.iterator]); // f values() { [native code] }
// console.log(map[Symbol.iterator]); // f values() { [native code] }
// console.log(set[Symbol.iterator]); // f values() { [native code] }
// // console.log(els[Symbol.iterator]); // f values() { [native code] }
// // 调用这个工厂函数会生成一个迭代器
// console.log(str[Symbol.iterator]()); // StringIterator {}
// console.log(arr[Symbol.iterator]()); // ArrayIterator {}
// console.log(map[Symbol.iterator]()); // MapIterator {}
// console.log(set[Symbol.iterator]()); // SetIterator {}
// // console.log(els[Symbol.iterator]()); // ArrayIterator {}

// let arr = ["foo", "bar", "baz"];
// // for-of 循环
// for (let el of arr) {
//   console.log(el);
// }
// // foo
// // bar
// // baz
// // 数组解构
// let [a, b, c] = arr;
// console.log(a, b, c); // foo, bar, baz
// // 扩展操作符
// let arr2 = [...arr];
// console.log(arr2); // ['foo', 'bar', 'baz']
// // Array.from()
// let arr3 = Array.from(arr);
// console.log(arr3); // ['foo', 'bar', 'baz']
// // Set 构造函数
// let set = new Set(arr);
// console.log(set); // Set(3) {'foo', 'bar', 'baz'}
// // Map 构造函数
// let pairs = arr.map((x, i) => [x, i]);
// console.log(pairs); // [['foo', 0], ['bar', 1], ['baz', 2]]
// let map = new Map(pairs);
// console.log(map); // Map(3) { 'foo'=>0, 'bar'=>1, 'baz'=>2 }

// // 可迭代对象
// let arr = ["foo", "bar"];
// // 迭代器工厂函数
// console.log(arr[Symbol.iterator]); // f values() { [native code] }
// // 迭代器
// let iter = arr[Symbol.iterator]();
// console.log(iter); // ArrayIterator {}
// // 执行迭代
// console.log(iter.next()); // { done: false, value: 'foo' }
// console.log(iter.next()); // { done: false, value: 'bar' }
// console.log(iter.next()); // { done: true, value: undefined }

// let arr = ["foo"];
// let iter = arr[Symbol.iterator]();
// console.log(iter.next()); // { done: false, value: 'foo' }
// console.log(iter.next()); // { done: true, value: undefined }
// console.log(iter.next()); // { done: true, value: undefined }
// console.log(iter.next()); // { done: true, value: undefined }

// let arr = ["foo", "bar"];
// let iter1 = arr[Symbol.iterator]();
// let iter2 = arr[Symbol.iterator]();
// console.log(iter1.next()); // { done: false, value: 'foo' }
// console.log(iter2.next()); // { done: false, value: 'foo' }
// console.log(iter2.next()); // { done: false, value: 'bar' }
// console.log(iter1.next()); // { done: false, value: 'bar' }

// let arr = ['foo', 'baz'];
// let iter = arr[Symbol.iterator]();
// console.log(iter.next()); // { done: false, value: 'foo' }
// // 在数组中间插入值
// arr.splice(1, 0, 'bar');
// console.log(iter.next()); // { done: false, value: 'bar' }
// console.log(iter.next()); // { done: false, value: 'baz' }
// console.log(iter.next()); // { done: true, value: undefined }

// // 这个类实现了可迭代接口（ Iterable）
// // 调用默认的迭代器工厂函数会返回
// // 一个实现迭代器接口（ Iterator）的迭代器对象
// class Foo {
//   [Symbol.iterator]() {
//     return {
//       next() {
//         return { done: false, value: "foo" };
//       },
//     };
//   }
// }
// let f = new Foo();
// // 打印出实现了迭代器接口的对象
// console.log(f[Symbol.iterator]()); // { next: f() {} }
// // Array 类型实现了可迭代接口（ Iterable）
// // 调用 Array 类型的默认迭代器工厂函数
// // 会创建一个 ArrayIterator 的实例
// let a = new Array();
// // 打印出 ArrayIterator 的实例
// console.log(a[Symbol.iterator]()); // Array Iterator {}

// class Counter {
//   // Counter 的实例应该迭代 limit 次
//   constructor(limit) {
//     this.count = 1;
//     this.limit = limit;
//   }
//   next() {
//     if (this.count <= this.limit) {
//       return { done: false, value: this.count++ };
//     } else {
//       return { done: true, value: undefined };
//     }
//   }
//   [Symbol.iterator]() {
//     return this;
//   }
// }
// let counter = new Counter(3);
// for (let i of counter) {
//   console.log(i);
// }
// // 1
// // 2
// // 3

// for (let i of counter) {
//   console.log(i);
// }
// // (nothing logged)

// class Counter {
//   constructor(limit) {
//     this.limit = limit;
//   }
//   [Symbol.iterator]() {
//     let count = 1,
//       limit = this.limit;
//     return {
//       next() {
//         if (count <= limit) {
//           return { done: false, value: count++ };
//         } else {
//           return { done: true, value: undefined };
//         }
//       },
//     };
//   }
// }
// let counter = new Counter(3);
// for (let i of counter) {
//   console.log(i);
// }
// // 1
// // 2
// // 3
// for (let i of counter) {
//   console.log(i);
// }
// // 1
// // 2
// // 3

// let arr = ["foo", "bar", "baz"];
// let iter1 = arr[Symbol.iterator]();
// console.log(iter1[Symbol.iterator]); // f values() { [native code] }
// let iter2 = iter1[Symbol.iterator]();
// console.log(iter1 === iter2); // true

// let arr = [3, 1, 4];
// let iter = arr[Symbol.iterator]();
// for (let item of arr) {
//   console.log(item);
// }
// // 3
// // 1
// // 4
// for (let item of iter) {
//   console.log(item);
// }
// // 3
// // 1
// // 4

// class Counter {
//   constructor(limit) {
//     this.limit = limit;
//   }
//   [Symbol.iterator]() {
//     let count = 1,
//       limit = this.limit;
//     return {
//       next() {
//         if (count <= limit) {
//           return { done: false, value: count++ };
//         } else {
//           return { done: true };
//         }
//       },
//       return() {
//         console.log("Exiting early");
//         return { done: true };
//       },
//     };
//   }
// }
// let counter1 = new Counter(5);
// for (let i of counter1) {
//   if (i > 2) {
//     break;
//   }
//   console.log(i);
// }
// // 1
// // 2
// // Exiting early
// let counter2 = new Counter(5);
// try {
//   for (let i of counter2) {
//     if (i > 2) {
//       throw "err";
//     }
//     console.log(i);
//   }
// } catch (e) {}
// // 1
// // 2
// // Exiting early
// let counter3 = new Counter(5);
// let [a, b] = counter3;
// // Exiting early

// let a = [1, 2, 3, 4, 5];
// let iter = a[Symbol.iterator]();
// for (let i of iter) {
//   console.log(i);
//   if (i > 2) {
//     break;
//   }
// }
// // 1
// // 2
// // 3
// for (let i of iter) {
//   console.log(i);
// }
// // 4
// // 5

// let a = [1, 2, 3, 4, 5];
// let iter = a[Symbol.iterator]();
// iter.return = function () {
//   console.log("Exiting early");
//   return { done: true };
// };
// for (let i of iter) {
//   console.log(i);
//   if (i > 2) {
//     break;
//   }
// }
// // 1
// // 2
// // 3
// // 提前退出
// for (let i of iter) {
//   console.log(i);
// }
// // 4
// // 5
