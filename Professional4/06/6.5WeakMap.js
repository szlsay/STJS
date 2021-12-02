// const key1 = { id: 1 },
//   key2 = { id: 2 },
//   key3 = { id: 3 };
// // 使用嵌套数组初始化弱映射
// const wm1 = new WeakMap([
//   [key1, "val1"],
//   [key2, "val2"],
//   [key3, "val3"],
// ]);
// console.log(wm1.get(key1)); // val1
// console.log(wm1.get(key2)); // val2
// console.log(wm1.get(key3)); // val3

// // 初始化是全有或全无的操作
// // 只要有一个键无效就会抛出错误，导致整个初始化失败
// const wm2 = new WeakMap([
//   [key1, "val1"],
//   ["BADKEY", "val2"],
//   [key3, "val3"],
// ]);
// // TypeError: Invalid value used as WeakMap key
// typeof wm2;
// // ReferenceError: wm2 is not defined

// // 原始值可以先包装成对象再用作键
// const stringKey = new String("key1");
// console.log(typeof stringKey);
// const wm3 = new WeakMap([[stringKey, "val1"]]);
// console.log(wm3.get(stringKey)); // "val1"

// const wm = new WeakMap();
// const key1 = { id: 1 },
//   key2 = { id: 2 };
// console.log(wm.has(key1)); // false
// console.log(wm.get(key1)); // undefined
// wm.set(key1, "Matt").set(key2, "Frisbie");
// console.log(wm.has(key1)); // true
// console.log(wm.get(key1)); // Matt
// wm.delete(key1); // 只删除这一个键/值对
// console.log(wm.has(key1)); // false
// console.log(wm.has(key2)); // true

// const key1 = { id: 1 },
//   key2 = { id: 2 },
//   key3 = { id: 3 };
// const wm = new WeakMap().set(key1, "val1");
// wm.set(key2, "val2").set(key3, "val3");
// console.log(wm.get(key1)); // val1
// console.log(wm.get(key2)); // val2
// console.log(wm.get(key3)); // val3

// const wm = new WeakMap();
// wm.set({}, "val");
// console.log(wm);
// console.log(typeof wm);

// const wm = new WeakMap();
// const container = {
//   key: {},
// };
// wm.set(container.key, "val");
// console.log(wm.get(container.key));
// function removeReference() {
//   container.key = null;
// }
// removeReference();
// console.log(wm.get(container.key));

// const wm = new WeakMap();
// class User {
//   constructor(id) {
//     this.idProperty = Symbol("id");
//     this.setId(id);
//   }
//   setPrivate(property, value) {
//     const privateMembers = wm.get(this) || {};
//     privateMembers[property] = value;
//     wm.set(this, privateMembers);
//   }
//   getPrivate(property) {
//     return wm.get(this)[property];
//   }
//   setId(id) {
//     this.setPrivate(this.idProperty, id);
//   }
//   getId() {
//     return this.getPrivate(this.idProperty);
//   }
// }
// const user = new User(123);
// console.log(user.getId()); // 123
// user.setId(456);
// console.log(user.getId()); // 456
// // 并不是真正私有的
// console.log(wm.get(user)[user.idProperty]); // 456

// const User = (() => {
//   const wm = new WeakMap();
//   class User {
//     constructor(id) {
//       this.idProperty = Symbol("id");
//       this.setId(id);
//     }
//     setPrivate(property, value) {
//       const privateMembers = wm.get(this) || {};
//       privateMembers[property] = value;
//       wm.set(this, privateMembers);
//     }
//     getPrivate(property) {
//       return wm.get(this)[property];
//     }
//     setId(id) {
//       this.setPrivate(this.idProperty, id);
//     }
//     getId(id) {
//       return this.getPrivate(this.idProperty);
//     }
//   }
//   return User;
// })();
// const user = new User(123);
// console.log(user.getId()); // 123
// user.setId(456);
// console.log(user.getId()); // 456

const m = new Map();
const loginButton = { id: 1 };
// 给这个节点关联一些元数据
m.set(loginButton, { disabled: true });

const wm = new WeakMap();
const loginButton1 = { id: 1 };
// 给这个节点关联一些元数据
wm.set(loginButton1, { disabled: true });
