// let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
// p.then((x) => console.log(x)); // 3

// function handler(x) {
//   console.log(x);
// }
// let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
// p.then(handler); // 3

// async function foo() {}
// let bar = async function () {};
// let baz = async () => {};
// class Qux {
//   async qux() {}
// }

// async function foo() {}
// let bar = async function () {};
// let baz = async () => {};
// class Qux {
//   async qux() {}
// }

// async function foo() {
//   console.log(1);
// }
// foo();
// console.log(2);
// // 1
// // 2

// async function foo() {
//   console.log(1);
//   return 3;
// }
// // 给返回的期约添加一个解决处理程序
// foo().then(console.log);
// console.log(2);
// // 1
// // 2
// // 3

// async function foo() {
//   console.log(1);
//   return Promise.resolve(3);
// }
// // 给返回的期约添加一个解决处理程序
// foo().then(console.log);
// console.log(2);
// // 1
// // 2
// // 3

// // 返回一个原始值
// async function foo() {
//   return "foo";
// }
// foo().then(console.log);
// // foo
// // 返回一个没有实现 thenable 接口的对象
// async function bar() {
//   return ["bar"];
// }
// bar().then(console.log);
// // ['bar']
// // 返回一个实现了 thenable 接口的非期约对象
// async function baz() {
//   const thenable = {
//     then(callback) {
//       callback("baz");
//     },
//   };
//   return thenable;
// }
// baz().then(console.log);
// // baz

// // 返回一个期约
// async function qux() {
//   return Promise.resolve("qux");
// }
// qux().then(console.log);
// // qux

// async function foo() {
//   console.log(1);
//   throw 3;
// }
// // 给返回的期约添加一个拒绝处理程序
// foo().catch(console.log);
// console.log(2);
// // 1
// // 2
// // 3

// async function foo() {
//   console.log(1);
//   Promise.reject(3);
// }
// // Attach a rejected handler to the returned promise
// foo().catch(console.log);
// console.log(2);
// // 1
// // 2
// // Uncaught (in promise): 3

// let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
// p.then((x) => console.log(x)); // 3

// async function foo() {
//   let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
//   console.log(await p);
// }
// foo();
// // 3

// // 异步打印"foo"
// async function foo() {
//   console.log(await Promise.resolve("foo"));
// }
// foo();
// // foo
// // 异步打印"bar"
// async function bar() {
//   return await Promise.resolve("bar");
// }
// bar().then(console.log);
// // bar
// // 1000 毫秒后异步打印"baz"
// async function baz() {
//   await new Promise((resolve, reject) => setTimeout(resolve, 1000));
//   console.log("baz");
// }
// baz();
// // baz（ 1000 毫秒后）

// // 等待一个原始值
// async function foo() {
//   console.log(await "foo");
// }
// foo();
// // foo
// // 等待一个没有实现 thenable 接口的对象
// async function bar() {
//   console.log(await ["bar"]);
// }
// bar();
// // ['bar']
// // 等待一个实现了 thenable 接口的非期约对象
// async function baz() {
//   const thenable = {
//     then(callback) {
//       callback("baz");
//     },
//   };
//   console.log(await thenable);
// }
// baz();
// // baz
// // 等待一个期约
// async function qux() {
//   console.log(await Promise.resolve("qux"));
// }
// qux();
// // qux

// async function foo() {
//   console.log(1);
//   await (() => {
//     throw 3;
//   })();
// }
// // 给返回的期约添加一个拒绝处理程序
// foo().catch(console.log);
// console.log(2);
// // 1
// // 2
// // 3

// async function foo() {
//   console.log(1);
//   await Promise.reject(3);
//   console.log(4); // 这行代码不会执行
// }
// // 给返回的期约添加一个拒绝处理程序
// foo().catch(console.log);
// console.log(2);
// // 1
// // 2
// // 3

// async function foo() {
//   console.log(await Promise.resolve("foo"));
// }
// async function bar() {
//   console.log(await "bar");
// }
// async function baz() {
//   console.log("baz");
// }
// foo();
// bar();
// baz();
// // baz
// // bar
// // foo

async function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
async function foo() {
  const t0 = Date.now();
  await sleep(1500); // 暂停约 1500 毫秒
  console.log(Date.now() - t0);
}
foo();
// 1502
