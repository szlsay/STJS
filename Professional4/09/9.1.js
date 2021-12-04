// const target = {
//   id: "target",
// };
// const handler = {};
// const proxy = new Proxy(target, handler);
// // id 属性会访问同一个值
// console.log(target.id); // target
// console.log(proxy.id); // target
// // 给目标属性赋值会反映在两个对象上
// // 因为两个对象访问的是同一个值
// target.id = "foo";
// console.log(target.id); // foo
// console.log(proxy.id); // foo
// // 给代理属性赋值会反映在两个对象上
// // 因为这个赋值会转移到目标对象
// proxy.id = "bar";
// console.log(target.id); // bar
// console.log(proxy.id); // bar
// // hasOwnProperty()方法在两个地方
// // 都会应用到目标对象
// console.log(target.hasOwnProperty("id")); // true
// console.log(proxy.hasOwnProperty("id")); // true
// // Proxy.prototype 是 undefined
// // 因此不能使用 instanceof 操作符
// // console.log(target instanceof Proxy);
// // TypeError: Function has non-object prototype 'undefined' in instanceof check
// // console.log(proxy instanceof Proxy);
// // TypeError: Function has non-object prototype 'undefined' in instanceof check
// // 严格相等可以用来区分代理和目标
// console.log(target === proxy); // false

// const target = {
//   foo: "bar",
// };
// const handler = {
//   // 捕获器在处理程序对象中以方法名为键
//   get() {
//     return "handler override";
//   },
// };
// const proxy = new Proxy(target, handler);
// console.log(target.foo); // bar
// console.log(proxy.foo); // handler override
// console.log(target["foo"]); // bar
// console.log(proxy["foo"]); // handler override
// console.log(Object.create(target)["foo"]); // bar
// console.log(Object.create(proxy)["foo"]); // handler override

// const target = {
//   foo: "bar",
// };
// const handler = {
//   get(trapTarget, property, receiver) {
//     console.log(trapTarget === target);
//     console.log(property);
//     console.log(receiver === proxy);
//   },
// };
// const proxy = new Proxy(target, handler);
// proxy.foo;
// // true
// // foo
// // true

// const target = {
//   foo: "bar",
// };
// const handler = {
//   get(trapTarget, property, receiver) {
//     return trapTarget[property];
//   },
// };
// const proxy = new Proxy(target, handler);
// console.log(proxy.foo); // bar
// console.log(target.foo); // bar

// const target = {
//   foo: "bar",
// };
// const handler = {
//   get() {
//     return Reflect.get(...arguments);
//   },
// };
// const proxy = new Proxy(target, handler);
// console.log(proxy.foo); // bar
// console.log(target.foo); // bar

// const target = {
//   foo: "bar",
// };
// const handler = {
//   get: Reflect.get,
// };
// const proxy = new Proxy(target, handler);
// console.log(proxy.foo); // bar
// console.log(target.foo); // bar

// const target = {
//   foo: "bar",
// };
// const proxy = new Proxy(target, Reflect);
// console.log(proxy.foo); // bar
// console.log(target.foo); // bar

// const target = {
//   foo: "bar",
//   baz: "qux",
// };
// const handler = {
//   get(trapTarget, property, receiver) {
//     let decoration = "";
//     if (property === "foo") {
//       decoration = "!!!";
//     }
//     return Reflect.get(...arguments) + decoration;
//   },
// };
// const proxy = new Proxy(target, handler);
// console.log(proxy.foo); // bar!!!
// console.log(target.foo); // bar
// console.log(proxy.baz); // qux
// console.log(target.baz); // qux

// const target = {};
// Object.defineProperty(target, "foo", {
//   configurable: false,
//   writable: false,
//   value: "bar",
// });

// const handler = {
//   get() {
//     return "qux";
//   },
// };
// const proxy = new Proxy(target, handler);
// console.log(proxy.foo);
// // TypeError

// const target = {
//   foo: "bar",
// };
// const handler = {
//   get() {
//     return "intercepted";
//   },
// };
// const { proxy, revoke } = Proxy.revocable(target, handler);
// console.log(proxy.foo); // intercepted
// console.log(target.foo); // bar
// revoke();
// console.log(proxy.foo); // TypeError

// // 初始代码
// const o = {};
// try {
//   Object.defineProperty(o, "foo", "bar");
//   console.log("success");
// } catch (e) {
//   console.log("failure");
// }

// const o = {};
// if (Reflect.defineProperty(o, "foo", { value: "bar" })) {
//   console.log("success");
// } else {
//   console.log("failure");
// }

// const target = {
//   foo: "bar",
// };
// const firstProxy = new Proxy(target, {
//   get() {
//     console.log("first proxy");
//     return Reflect.get(...arguments);
//   },
// });
// const secondProxy = new Proxy(firstProxy, {
//   get() {
//     console.log("second proxy");
//     return Reflect.get(...arguments);
//   },
// });
// console.log(secondProxy.foo);
// // second proxy
// // first proxy
// // bar

// const target = {
//   thisValEqualsProxy() {
//     return this === proxy;
//   },
// };
// const proxy = new Proxy(target, {});
// console.log(target.thisValEqualsProxy()); // false
// console.log(proxy.thisValEqualsProxy()); // true

// const wm = new WeakMap();
// class User {
//   constructor(userId) {
//     wm.set(this, userId);
//   }
//   set id(userId) {
//     wm.set(this, userId);
//   }
//   get id() {
//     return wm.get(this);
//   }
// }

// // const user = new User(123);
// // console.log(user.id); // 123
// // const userInstanceProxy = new Proxy(user, {});
// // console.log(userInstanceProxy.id); // undefined

// const UserClassProxy = new Proxy(User, {});
// const proxyUser = new UserClassProxy(456);
// console.log(proxyUser.id);

// const target = new Date();
// const proxy = new Proxy(target, {});
// console.log(proxy instanceof Date); // true
// proxy.getDate(); // TypeError: 'this' is not a Date object
