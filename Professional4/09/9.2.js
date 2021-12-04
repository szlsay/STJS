// const myTarget = {};
// const proxy = new Proxy(myTarget, {
//   get(target, property, receiver) {
//     console.log("get()");
//     return Reflect.get(...arguments);
//   },
// });
// proxy.foo;
// // get()

// const myTarget = {};
// const proxy = new Proxy(myTarget, {
//   set(target, property, value, receiver) {
//     console.log("set()");
//     return Reflect.set(...arguments);
//   },
// });
// proxy.foo = "bar";
// // set()

// const myTarget = {};
// const proxy = new Proxy(myTarget, {
//   has(target, property) {
//     console.log("has()");
//     return Reflect.has(...arguments);
//   },
// });
// "foo" in proxy;
// // has()

// const myTarget = {};
// const proxy = new Proxy(myTarget, {
//   defineProperty(target, property, descriptor) {
//     console.log("defineProperty()");
//     return Reflect.defineProperty(...arguments);
//   },
// });
// Object.defineProperty(proxy, "foo", { value: "bar" });
// // defineProperty()

// const myTarget = {};
// const proxy = new Proxy(myTarget, {
//   getOwnPropertyDescriptor(target, property) {
//     console.log("getOwnPropertyDescriptor()");
//     return Reflect.getOwnPropertyDescriptor(...arguments);
//   },
// });
// Object.getOwnPropertyDescriptor(proxy, "foo");
// // getOwnPropertyDescriptor()

// const myTarget = {};
// const proxy = new Proxy(myTarget, {
//   deleteProperty(target, property) {
//     console.log("deleteProperty()");
//     return Reflect.deleteProperty(...arguments);
//   },
// });
// delete proxy.foo;
// // deleteProperty()

// const myTarget = {};
// const proxy = new Proxy(myTarget, {
//   ownKeys(target) {
//     console.log("ownKeys()");
//     return Reflect.ownKeys(...arguments);
//   },
// });
// Object.keys(proxy);
// // ownKeys()

// const myTarget = {};
// const proxy = new Proxy(myTarget, {
//   getPrototypeOf(target) {
//     console.log("getPrototypeOf()");
//     return Reflect.getPrototypeOf(...arguments);
//   },
// });
// Object.getPrototypeOf(proxy);
// // getPrototypeOf()

// const myTarget = {};
// const proxy = new Proxy(myTarget, {
//   setPrototypeOf(target, prototype) {
//     console.log("setPrototypeOf()");
//     return Reflect.setPrototypeOf(...arguments);
//   },
// });
// Object.setPrototypeOf(proxy, Object);
// // setPrototypeOf()

// const myTarget = {};
// const proxy = new Proxy(myTarget, {
//   isExtensible(target) {
//     console.log("isExtensible()");
//     return Reflect.isExtensible(...arguments);
//   },
// });
// Object.isExtensible(proxy);
// // isExtensible()

// const myTarget = {};
// const proxy = new Proxy(myTarget, {
//   preventExtensions(target) {
//     console.log("preventExtensions()");
//     return Reflect.preventExtensions(...arguments);
//   },
// });
// Object.preventExtensions(proxy);
// // preventExtensions()

const myTarget = () => {};
const proxy = new Proxy(myTarget, {
  apply(target, thisArg, ...argumentsList) {
    console.log("apply()");
    return Reflect.apply(...arguments);
  },
});
proxy();
// apply()
