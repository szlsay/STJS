// const val1 = { id: 1 },
//   val2 = { id: 2 },
//   val3 = { id: 3 };
// // 使用数组初始化弱集合
// const ws1 = new WeakSet([val1, val2, val3]);
// console.log(ws1.has(val1)); // true
// console.log(ws1.has(val2)); // true
// console.log(ws1.has(val3)); // true
// // 初始化是全有或全无的操作
// // 只要有一个值无效就会抛出错误，导致整个初始化失败
// const ws2 = new WeakSet([val1, "BADVAL", val3]);
// // TypeError: Invalid value used in WeakSet
// typeof ws2;

// // ReferenceError: ws2 is not defined
// // 原始值可以先包装成对象再用作值
// const stringVal = new String("val1");
// const ws3 = new WeakSet([stringVal]);
// console.log(ws3.has(stringVal)); // true

// const ws = new WeakSet();
// const val1 = { id: 1 },
//   val2 = { id: 2 };
// console.log(ws.has(val1)); // false
// ws.add(val1).add(val2);
// console.log(ws.has(val1)); // true
// console.log(ws.has(val2)); // true
// ws.delete(val1); // 只删除这一个值
// console.log(ws.has(val1)); // false
// console.log(ws.has(val2)); // true
// add()方法返回弱集合实例，因此可以把多个操作连缀起来，包括初始化声明：
// const val1 = { id: 1 },
//   val2 = { id: 2 },
//   val3 = { id: 3 };
// const ws = new WeakSet().add(val1);
// ws.add(val2).add(val3);
// console.log(ws.has(val1)); // true
// console.log(ws.has(val2)); // true
// console.log(ws.has(val3)); // true

// const ws = new WeakSet();
// const container = {
//   val: {},
// };
// ws.add(container.val);
// function removeReference() {
//   container.val = null;
// }

// const disabledElements = new Set();
// const loginButton = document.querySelector("#login");
// // 通过加入对应集合，给这个节点打上“禁用”标签
// disabledElements.add(loginButton);

// const disabledElements = new WeakSet();
// const loginButton = document.querySelector("#login");
// // 通过加入对应集合，给这个节点打上“禁用”标签
// disabledElements.add(loginButton);
