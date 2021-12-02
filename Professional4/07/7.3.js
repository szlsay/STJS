// function* generatorFn() {}
// const g = generatorFn();
// console.log(g); // Object [Generator] {}
// console.log(g.next); // [Function: next]

// function* generatorFn() {}
// let generatorObject = generatorFn();
// console.log(generatorObject); // generatorFn {<suspended>}
// console.log(generatorObject.next()); // { done: true, value: undefined }

// function* generatorFn() {
//   return "foo";
// }
// let generatorObject = generatorFn();
// console.log(generatorObject); // generatorFn {<suspended>}
// console.log(generatorObject.next()); // { done: true, value: 'foo' }
// console.log(generatorObject.next()); // { value: undefined, done: true }

// function* generatorFn() {
//   console.log("foobar");
// }
// // 初次调用生成器函数并不会打印日志
// let generatorObject = generatorFn();
// generatorObject.next(); // foobar

// function* generatorFn() {}
// console.log(generatorFn);
// // [GeneratorFunction: generatorFn]
// console.log(generatorFn()[Symbol.iterator]);
// // [Function: [Symbol.iterator]]
// console.log(generatorFn());
// // Object [Generator] {}
// console.log(generatorFn()[Symbol.iterator]());
// // Object [Generator] {}
// const g = generatorFn();
// console.log(g === g[Symbol.iterator]());
// // true

// function* generatorFn() {
//   yield;
// }
// let generatorObject = generatorFn();
// console.log(generatorObject.next()); // { done: false, value: undefined }
// console.log(generatorObject.next()); // { done: true, value: undefined }

// function* generatorFn() {
//   yield "foo";
//   yield "bar";
//   return "baz";
// }
// let generatorObject = generatorFn();
// console.log(generatorObject.next()); // { done: false, value: 'foo' }
// console.log(generatorObject.next()); // { done: false, value: 'bar' }
// console.log(generatorObject.next()); // { done: true, value: 'baz' }

// function* generatorFn() {
//   yield "foo";
//   yield "bar";
//   return "baz";
// }
// let generatorObject1 = generatorFn();
// let generatorObject2 = generatorFn();
// console.log(generatorObject1.next()); // { done: false, value: 'foo' }
// console.log(generatorObject2.next()); // { done: false, value: 'foo' }
// console.log(generatorObject2.next()); // { done: false, value: 'bar' }
// console.log(generatorObject1.next()); // { done: false, value: 'bar' }

// function* generatorFn() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// for (const x of generatorFn()) {
//   console.log(x);
// }
// // 1
// // 2
// // 3

// function* nTimes(n) {
//   while (n--) {
//     yield;
//   }
// }

// for (let _ of nTimes(3)) {
//   console.log("foo");
// }
// // foo
// // foo
// // foo

// function* generatorFn(initial) {
//   console.log(initial);
//   console.log(yield);
//   console.log(yield);
// }
// let generatorObject = generatorFn("foo");
// generatorObject.next("bar"); // foo
// generatorObject.next("baz"); // baz
// generatorObject.next("qux"); // qux

// function* generatorFn() {
//   return yield "foo";
// }
// let generatorObject = generatorFn();
// console.log(generatorObject.next()); // { done: false, value: 'foo' }
// console.log(generatorObject.next("bar")); // { done: true, value: 'bar' }

// function* generatorFn() {
//   for (let i = 0; ; ++i) {
//     yield i;
//   }
// }
// let generatorObject = generatorFn();
// console.log(generatorObject.next().value); // 0
// console.log(generatorObject.next().value); // 1
// console.log(generatorObject.next().value); // 2
// console.log(generatorObject.next().value); // 3
// console.log(generatorObject.next().value); // 4
// console.log(generatorObject.next().value); // 5

// function* nTimes(n) {
//   for (let i = 0; i < n; ++i) {
//     yield i;
//   }
// }
// for (let x of nTimes(3)) {
//   console.log(x);
// }
// 0
// 1
// 2

// function* nTimes(n) {
//   let i = 0;
//   while (n--) {
//     yield i++;
//   }
// }
// for (let x of nTimes(3)) {
//   console.log(x);
// }
// // 0
// // 1
// // 2

// function* range(start, end) {
//   while (end > start) {
//     yield start++;
//   }
// }
// for (const x of range(4, 7)) {
//   console.log(x);
// }
// // 4
// // 5
// // 6
// function* zeroes(n) {
//   while (n--) {
//     yield 0;
//   }
// }
// console.log(Array.from(zeroes(8))); // [0, 0, 0, 0, 0, 0, 0, 0]

// 等价的 generatorFn：
// function* generatorFn() {
// for (const x of [1, 2, 3]) {
// yield x;
// }
// }

// function* generatorFn() {
//   yield* [1, 2, 3];
// }
// let generatorObject = generatorFn();
// for (const x of generatorFn()) {
//   console.log(x);
// }
// // 1
// // 2
// // 3

// function* generatorFn() {
//   yield* [1, 2];
//   yield *[3, 4];
//   yield * [5, 6];
// }
// for (const x of generatorFn()) {
//   console.log(x);
// }
//   // 1
//   // 2
//   // 3
//   // 4
//   // 5
//   // 6

// function* generatorFnA() {
//   for (const x of [1, 2, 3]) {
//     yield x;
//   }
// }
// for (const x of generatorFnA()) {
//   console.log(x);
// }
// // 1
// // 2
// // 3
// function* generatorFnB() {
//   yield* [1, 2, 3];
// }
// for (const x of generatorFnB()) {
//   console.log(x);
// }
// // 1
// // 2
// // 3

// function* generatorFn() {
//   console.log("iter value:", yield* [1, 2, 3]);
// }
// for (const x of generatorFn()) {
//   console.log("value:", x);
// }
// // value: 1
// // value: 2
// // value: 3
// // iter value: undefined

// function* innerGeneratorFn() {
//   yield "foo";
//   return "bar";
// }
// function* outerGeneratorFn(genObj) {
//   console.log("iter value:", yield* innerGeneratorFn());
// }
// for (const x of outerGeneratorFn()) {
//   console.log("value:", x);
// }
// // value: foo
// // iter value: bar

// function* nTimes(n) {
//   if (n > 0) {
//     yield* nTimes(n - 1);
//     yield n - 1;
//   }
// }
// for (const x of nTimes(3)) {
//   console.log(x);
// }
// // 0
// // 1
// // 2

// class Node {
//   constructor(id) {
//     this.id = id;
//     this.neighbors = new Set();
//   }
//   connect(node) {
//     if (node !== this) {
//       this.neighbors.add(node);
//       node.neighbors.add(this);
//     }
//   }
// }
// class RandomGraph {
//   constructor(size) {
//     this.nodes = new Set();
//     // 创建节点
//     for (let i = 0; i < size; ++i) {
//       this.nodes.add(new Node(i));
//     }
//     // 随机连接节点
//     const threshold = 1 / size;
//     for (const x of this.nodes) {
//       for (const y of this.nodes) {
//         if (Math.random() < threshold) {
//           x.connect(y);
//         }
//       }
//     }
//   }
//   // 这个方法仅用于调试
//   print() {
//     for (const node of this.nodes) {
//       const ids = [...node.neighbors].map((n) => n.id).join(",");
//       console.log(`${node.id}: ${ids}`);
//     }
//   }
// }
// const g = new RandomGraph(6);
// g.print();
// // 示例输出：
// // 0: 2,3,5
// // 1: 2,3,4,5
// // 2: 1,3
// // 3: 0,1,2,4
// // 4: 2,3
// // 5: 0,4

// class Node {
//   constructor(id) {
//     this.id = id;
//     this.neighbors = new Set();
//   }
//   connect(node) {
//     if (node !== this) {
//       this.neighbors.add(node);
//       node.neighbors.add(this);
//     }
//   }
// }
// class RandomGraph {
//   constructor(size) {
//     this.nodes = new Set();
//     // 创建节点
//     for (let i = 0; i < size; ++i) {
//       this.nodes.add(new Node(i));
//     }
//     // 随机连接节点
//     const threshold = 1 / size;
//     for (const x of this.nodes) {
//       for (const y of this.nodes) {
//         if (Math.random() < threshold) {
//           x.connect(y);
//         }
//       }
//     }
//   }
//   // 这个方法仅用于调试
//   print() {
//     for (const node of this.nodes) {
//       const ids = [...node.neighbors].map((n) => n.id).join(",");
//       console.log(`${node.id}: ${ids}`);
//     }
//   }

//   isConnected() {
//     const visitedNodes = new Set();
//     function* traverse(nodes) {
//       for (const node of nodes) {
//         if (!visitedNodes.has(node)) {
//           yield node;
//           yield* traverse(node.neighbors);
//         }
//       }
//     }
//     // 取得集合中的第一个节点
//     const firstNode = this.nodes[Symbol.iterator]().next().value;
//     // 使用递归生成器迭代每个节点
//     for (const node of traverse([firstNode])) {
//       visitedNodes.add(node);
//     }
//     return visitedNodes.size === this.nodes.size;
//   }
// }
// const g = new RandomGraph(6);
// g.print();
// console.log(g.isConnected());

// class Foo {
//   constructor() {
//     this.values = [1, 2, 3];
//   }
//   *[Symbol.iterator]() {
//     yield* this.values;
//   }
// }
// const f = new Foo();
// for (const x of f) {
//   console.log(x);
// }
// // 1
// // 2
// // 3

// function* generatorFn() {}
// const g = generatorFn();
// console.log(g); // generatorFn {<suspended>}
// console.log(g.next); // f next() { [native code] }
// console.log(g.return); // f return() { [native code] }
// console.log(g.throw); // f throw() { [native code] }

// function* generatorFn() {
//   for (const x of [1, 2, 3]) {
//     yield x;
//   }
// }
// const g = generatorFn();
// console.log(g); // generatorFn {<suspended>}
// console.log(g.return(4)); // { done: true, value: 4 }
// console.log(g); // generatorFn {<closed>}

// function* generatorFn() {
//   for (const x of [1, 2, 3]) {
//     yield x;
//   }
// }

// const g = generatorFn();
// console.log(g.next()); // { done: false, value: 1 }
// console.log(g.return(4)); // { done: true, value: 4 }
// console.log(g.next()); // { done: true, value: undefined }
// console.log(g.next()); // { done: true, value: undefined }
// console.log(g.next()); // { done: true, value: undefined }

// function* generatorFn() {
//   for (const x of [1, 2, 3]) {
//     yield x;
//   }
// }
// const g = generatorFn();
// for (const x of g) {
//   if (x > 1) {
//     g.return(4);
//   }
//   console.log(x);
// }
// // 1
// // 2

// function* generatorFn() {
//   for (const x of [1, 2, 3]) {
//     yield x;
//   }
// }
// const g = generatorFn();
// console.log(g); // generatorFn {<suspended>}
// try {
//   g.throw("foo");
// } catch (e) {
//   console.log(e); // foo
// }
// console.log(g); // generatorFn {<closed>}

function* generatorFn() {
  for (const x of [1, 2, 3]) {
    try {
      yield x;
    } catch (e) {}
  }
}
const g = generatorFn();
console.log(g.next()); // { done: false, value: 1}
g.throw("foo");
console.log(g.next()); // { done: false, value: 3}
