// // 使用嵌套数组初始化映射
// const m1 = new Map([
//   ["key1", "val1"],
//   ["key2", "val2"],
//   ["key3", "val3"],
// ]);
// console.log(m1.size); // 3
// console.log(typeof m1);

// // 使用自定义迭代器初始化映射
// const m2 = new Map({
//   [Symbol.iterator]: function* () {
//     yield ["key1", "val1"];
//     yield ["key2", "val2"];
//     yield ["key3", "val3"];
//   },
// });
// console.log(m2.size); // 3
// // 映射期待的键/值对，无论是否提供
// const m3 = new Map([[]]);
// console.log(m3.has(undefined)); // true
// console.log(m3.get(undefined)); // undefined

// const m = new Map();
// console.log(m.has("firstName")); // false
// console.log(m.get("firstName")); // undefined
// console.log(m.size); // 0
// m.set("firstName", "Matt").set("lastName", "Frisbie");
// console.log(m.has("firstName")); // true
// console.log(m.get("firstName")); // Matt
// console.log(m.size); // 2
// m.delete("firstName"); // 只删除这一个键/值对
// console.log(m.has("firstName")); // false
// console.log(m.has("lastName")); // true
// console.log(m.size); // 1
// m.clear(); // 清除这个映射实例中的所有键/值对
// console.log(m.has("firstName")); // false
// console.log(m.has("lastName")); // false
// console.log(m.size); // 0

// const m = new Map().set("key1", "val1");
// m.set("key2", "val2").set("key3", "val3");
// console.log(m.size); // 3

// const m = new Map();
// const functionKey = function() {};
// const symbolKey = Symbol();
// const objectKey = new Object();
// m.set(functionKey, "functionValue");
// m.set(symbolKey, "symbolValue");
// m.set(objectKey, "objectValue");
// console.log(m.get(functionKey)); // functionValue
// console.log(m.get(symbolKey)); // symbolValue
// console.log(m.get(objectKey)); // objectValue
// // SameValueZero 比较意味着独立实例不冲突
// console.log(m.get(function() {})); // undefined

// const m = new Map();
// const objKey = {},
//   objVal = {},
//   arrKey = [],
//   arrVal = [];
// m.set(objKey, objVal);
// m.set(arrKey, arrVal);
// objKey.foo = "foo";
// objVal.bar = "bar";
// arrKey.push("foo");
// arrVal.push("bar");
// console.log(m.get(objKey)); // {bar: "bar"}
// console.log(m.get(arrKey)); // ["bar"]

// const m = new Map();
// const a = 0 / "", // NaN
//   b = 0 / "", // NaN
//   pz = +0,
//   nz = -0;
// console.log(a === b); // false
// console.log(pz === nz); // true
// m.set(a, "foo");
// m.set(pz, "bar");
// console.log(m.get(b)); // foo
// console.log(m.get(nz)); // bar

// const m = new Map([
//   ["key1", "val1"],
//   ["key2", "val2"],
//   ["key3", "val3"],
// ]);
// console.log(m.entries === m[Symbol.iterator]); // true
// for (let pair of m.entries()) {
//   console.log(pair);
// }
// // [key1,val1]
// // [key2,val2]
// // [key3,val3]
// for (let pair of m[Symbol.iterator]()) {
//   console.log(pair);
// }
// // [key1,val1]
// // [key2,val2]
// // [key3,val3]

// //因为 entries()是默认迭代器，所以可以直接对映射实例使用扩展操作，把映射转换为数组：
// const m = new Map([
//   ["key1", "val1"],
//   ["key2", "val2"],
//   ["key3", "val3"],
// ]);
// console.log([...m]); // [[key1,val1],[key2,val2],[key3,val3]]

// const m = new Map([
//   ["key1", "val1"],
//   ["key2", "val2"],
//   ["key3", "val3"],
// ]);
// m.forEach((val, key) => console.log(`${key} -> ${val}`));
// // key1 -> val1
// // key2 -> val2
// // key3 -> val3

// const m = new Map([
//   ["key1", "val1"],
//   ["key2", "val2"],
//   ["key3", "val3"],
// ]);
// for (let key of m.keys()) {
//   console.log(key);
// }
// // key1
// // key2
// // key3
// for (let key of m.values()) {
//   console.log(key);
// }
// // value1
// // value2
// // value3

const m1 = new Map([["key1", "val1"]]);
// 作为键的字符串原始值是不能修改的
for (let key of m1.keys()) {
  key = "newKey";
  console.log(key); // newKey
  console.log(m1.get("key1")); // val1
}
const keyObj = { id: 1 };
const m = new Map([[keyObj, "val1"]]);
// 修改了作为键的对象的属性，但对象在映射内部仍然引用相同的值
for (let key of m.keys()) {
  key.id = "newKey";
  console.log(key); // {id: "newKey"}
  console.log(m.get(keyObj)); // val1
}
console.log(keyObj); // {id: "newKey"}
