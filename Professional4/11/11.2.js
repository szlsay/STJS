// let p1 = new Promise((resolve, reject) => resolve());
// setTimeout(console.log, 0, p1); // Promise <resolved>
// let p2 = new Promise((resolve, reject) => reject());
// setTimeout(console.log, 0, p2); // Promise <rejected>
// // Uncaught error (in promise)

// new Promise(() => setTimeout(console.log, 0, "executor"));
// setTimeout(console.log, 0, "promise initialized");
// // executor
// // promise initialized

// let p = new Promise((resolve, reject) => setTimeout(resolve, 1000));
// // 在 console.log 打印期约实例的时候，还不会执行超时回调（即 resolve()）
// setTimeout(console.log, 0, p); // Promise <pending>

// let p = new Promise((resolve, reject) => {
//   resolve();
//   reject(); // 没有效果
// });
// setTimeout(console.log, 0, p); // Promise <resolved>

// let p = new Promise((resolve, reject) => {
//   setTimeout(reject, 10000); // 10 秒后调用 reject()
//   // 执行函数的逻辑
// });
// setTimeout(console.log, 0, p); // Promise <pending>
// setTimeout(console.log, 11000, p); // 11 秒后再检查状态
// // (After 10 seconds) Uncaught error
// // (After 11 seconds) Promise <rejected>

// let p = Promise.resolve(7);
// setTimeout(console.log, 0, p === Promise.resolve(p));
// // true
// setTimeout(console.log, 0, p === Promise.resolve(Promise.resolve(p)));
// // true

// let p = new Promise(() => {});
// setTimeout(console.log, 0, p); // Promise <pending>
// setTimeout(console.log, 0, Promise.resolve(p)); // Promise <pending>
// setTimeout(console.log, 0, p === Promise.resolve(p)); // true

// let p = Promise.resolve(new Error("foo"));
// setTimeout(console.log, 0, p);
// // Promise <resolved>: Error: foo

// let p = Promise.reject(3);
// setTimeout(console.log, 0, p); // Promise <rejected>: 3
// p.then(null, (e) => setTimeout(console.log, 0, e)); // 3

// try {
//   throw new Error("foo");
// } catch (e) {
//   console.log(e); // Error: foo
// }
// try {
//   Promise.reject(new Error("bar"));
// } catch (e) {
//   console.log(e);
// }
// // Uncaught (in promise) Error: bar

// function onResolved(id) {
//   setTimeout(console.log, 0, id, "resolved");
// }
// function onRejected(id) {
//   setTimeout(console.log, 0, id, "rejected");
// }
// let p1 = new Promise((resolve, reject) => setTimeout(resolve, 3000));
// let p2 = new Promise((resolve, reject) => setTimeout(reject, 3000));
// p1.then(
//   () => onResolved("p1"),
//   () => onRejected("p1")
// );
// p2.then(
//   () => onResolved("p2"),
//   () => onRejected("p2")
// );
// //（ 3 秒后）
// // p1 resolved
// // p2 rejected

// function onResolved(id) {
//   setTimeout(console.log, 0, id, "resolved");
// }
// function onRejected(id) {
//   setTimeout(console.log, 0, id, "rejected");
// }
// let p1 = new Promise((resolve, reject) => setTimeout(resolve, 3000));
// let p2 = new Promise((resolve, reject) => setTimeout(reject, 3000));
// // 非函数处理程序会被静默忽略，不推荐
// p1.then("gobbeltygook");
// // 不传 onResolved 处理程序的规范写法
// p2.then(null, () => onRejected("p2"));
// // p2 rejected（ 3 秒后）

// let p1 = new Promise(() => {});
// let p2 = p1.then();
// setTimeout(console.log, 0, p1); // Promise <pending>
// setTimeout(console.log, 0, p2); // Promise <pending>
// setTimeout(console.log, 0, p1 === p2); // false

// let p1 = Promise.resolve("foo");
// // 若调用 then()时不传处理程序，则原样向后传
// let p2 = p1.then();
// setTimeout(console.log, 0, p2); // Promise <resolved>: foo
// // 这些都一样
// let p3 = p1.then(() => undefined);
// let p4 = p1.then(() => {});
// let p5 = p1.then(() => Promise.resolve());
// setTimeout(console.log, 0, p3); // Promise <resolved>: undefined
// setTimeout(console.log, 0, p4); // Promise <resolved>: undefined
// setTimeout(console.log, 0, p5); // Promise <resolved>: undefined

// // 这些都一样
// let p6 = p1.then(() => "bar");
// let p7 = p1.then(() => Promise.resolve("bar"));
// setTimeout(console.log, 0, p6); // Promise <resolved>: bar
// setTimeout(console.log, 0, p7); // Promise <resolved>: bar
// // Promise.resolve()保留返回的期约
// let p8 = p1.then(() => new Promise(() => {}));
// let p9 = p1.then(() => Promise.reject());
// // Uncaught (in promise): undefined
// setTimeout(console.log, 0, p8); // Promise <pending>
// setTimeout(console.log, 0, p9); // Promise <rejected>: undefined

// let p10 = p1.then(() => {
//   throw "baz";
// });
// // Uncaught (in promise) baz
// setTimeout(console.log, 0, p10); // Promise <rejected> baz

// let p1 = Promise.reject("foo");
// // 调用 then()时不传处理程序则原样向后传
// let p2 = p1.then();
// // Uncaught (in promise) foo
// setTimeout(console.log, 0, p2); // Promise <rejected>: foo
// // 这些都一样
// let p3 = p1.then(null, () => undefined);
// let p4 = p1.then(null, () => {});
// let p5 = p1.then(null, () => Promise.resolve());
// setTimeout(console.log, 0, p3); // Promise <resolved>: undefined
// setTimeout(console.log, 0, p4); // Promise <resolved>: undefined
// setTimeout(console.log, 0, p5); // Promise <resolved>: undefined
// // 这些都一样
// let p6 = p1.then(null, () => "bar");
// let p7 = p1.then(null, () => Promise.resolve("bar"));
// setTimeout(console.log, 0, p6); // Promise <resolved>: bar
// setTimeout(console.log, 0, p7); // Promise <resolved>: bar
// // Promise.resolve()保留返回的期约
// let p8 = p1.then(null, () => new Promise(() => {}));
// let p9 = p1.then(null, () => Promise.reject());
// // Uncaught (in promise): undefined
// setTimeout(console.log, 0, p8); // Promise <pending>
// setTimeout(console.log, 0, p9); // Promise <rejected>: undefined
// let p10 = p1.then(null, () => {
//   throw "baz";
// });
// // Uncaught (in promise) baz
// setTimeout(console.log, 0, p10); // Promise <rejected>: baz
// let p11 = p1.then(null, () => Error("qux"));
// setTimeout(console.log, 0, p11); // Promise <resolved>: Error: qux

// let p = Promise.reject();
// let onRejected = function (e) {
//   setTimeout(console.log, 0, "rejected");
// };
// // 这两种添加拒绝处理程序的方式是一样的：
// p.then(null, onRejected); // rejected
// p.catch(onRejected); // rejected

// let p1 = new Promise(() => {});
// let p2 = p1.catch();
// setTimeout(console.log, 0, p1); // Promise <pending>
// setTimeout(console.log, 0, p2); // Promise <pending>
// setTimeout(console.log, 0, p1 === p2); // false

// let p1 = Promise.resolve();
// let p2 = Promise.reject();
// let onFinally = function () {
//   setTimeout(console.log, 0, "Finally!");
// };
// p1.finally(onFinally); // Finally
// p2.finally(onFinally); // Finally

// let p1 = new Promise(() => {});
// let p2 = p1.finally();
// setTimeout(console.log, 0, p1); // Promise <pending>
// setTimeout(console.log, 0, p2); // Promise <pending>
// setTimeout(console.log, 0, p1 === p2); // false

// let p1 = Promise.resolve("foo");
// // 这里都会原样后传
// let p2 = p1.finally();
// let p3 = p1.finally(() => undefined);
// let p4 = p1.finally(() => {});
// let p5 = p1.finally(() => Promise.resolve());
// let p6 = p1.finally(() => "bar");
// let p7 = p1.finally(() => Promise.resolve("bar"));
// let p8 = p1.finally(() => Error("qux"));
// setTimeout(console.log, 0, p2); // Promise <resolved>: foo
// setTimeout(console.log, 0, p3); // Promise <resolved>: foo
// setTimeout(console.log, 0, p4); // Promise <resolved>: foo
// setTimeout(console.log, 0, p5); // Promise <resolved>: foo
// setTimeout(console.log, 0, p6); // Promise <resolved>: foo
// setTimeout(console.log, 0, p7); // Promise <resolved>: foo
// setTimeout(console.log, 0, p8); // Promise <resolved>: foo

// // Promise.resolve()保留返回的期约
// let p9 = p1.finally(() => new Promise(() => {}));
// let p10 = p1.finally(() => Promise.reject());
// // Uncaught (in promise): undefined
// setTimeout(console.log, 0, p9); // Promise <pending>
// setTimeout(console.log, 0, p10); // Promise <rejected>: undefined
// let p11 = p1.finally(() => {
//   throw "baz";
// });
// // Uncaught (in promise) baz
// setTimeout(console.log, 0, p11); // Promise <rejected>: baz

// let p1 = Promise.resolve("foo");
// // 忽略解决的值
// let p2 = p1.finally(
//   () => new Promise((resolve, reject) => setTimeout(() => resolve("bar"), 100))
// );
// setTimeout(console.log, 0, p2); // Promise <pending>
// setTimeout(() => setTimeout(console.log, 0, p2), 200);
// // 200 毫秒后：
// // Promise <resolved>: foo

// // 创建解决的期约
// let p = Promise.resolve();
// // 添加解决处理程序
// // 直觉上，这个处理程序会等期约一解决就执行
// p.then(() => console.log("onResolved handler"));
// // 同步输出，证明 then()已经返回
// console.log("then() returns");
// // 实际的输出：
// // then() returns
// // onResolved handler

// let synchronousResolve;
// // 创建一个期约并将解决函数保存在一个局部变量中
// let p = new Promise((resolve) => {
//   synchronousResolve = function () {
//     console.log("1: invoking resolve()");
//     resolve();
//     console.log("2: resolve() returns");
//   };
// });
// p.then(() => console.log("4: then() handler executes"));
// synchronousResolve();
// console.log("3: synchronousResolve() returns");
// // 实际的输出：
// // 1: invoking resolve()
// // 2: resolve() returns
// // 3: synchronousResolve() returns
// // 4: then() handler executes

// let p1 = Promise.resolve();
// p1.then(() => console.log("p1.then() onResolved"));
// console.log("p1.then() returns");
// let p2 = Promise.reject();
// p2.then(null, () => console.log("p2.then() onRejected"));
// console.log("p2.then() returns");
// let p3 = Promise.reject();
// p3.catch(() => console.log("p3.catch() onRejected"));
// console.log("p3.catch() returns");
// let p4 = Promise.resolve();
// p4.finally(() => console.log("p4.finally() onFinally"));
// console.log("p4.finally() returns");
// // p1.then() returns
// // p2.then() returns
// // p3.catch() returns
// // p4.finally() returns
// // p1.then() onResolved
// // p2.then() onRejected
// // p3.catch() onRejected
// // p4.finally() onFinally

let p1 = Promise.resolve();
let p2 = Promise.reject();
p1.then(() => setTimeout(console.log, 0, 1));
p1.then(() => setTimeout(console.log, 0, 2));
// 1
// 2
p2.then(null, () => setTimeout(console.log, 0, 3));
p2.then(null, () => setTimeout(console.log, 0, 4));
// 3
// 4
p2.catch(() => setTimeout(console.log, 0, 5));
p2.catch(() => setTimeout(console.log, 0, 6));
// 5
// 6
p1.finally(() => setTimeout(console.log, 0, 7));
p1.finally(() => setTimeout(console.log, 0, 8));
// 7
// 8

// ------ 7之后
// ------
