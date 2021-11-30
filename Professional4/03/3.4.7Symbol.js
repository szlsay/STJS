// let sym = Symbol();
// console.log(typeof sym); // symbol

// let genericSymbol = Symbol();
// let otherGenericSymbol = Symbol();
// let fooSymbol = Symbol('foo');
// let otherFooSymbol = Symbol('foo');
// console.log(genericSymbol == otherGenericSymbol); // false
// console.log(fooSymbol == otherFooSymbol); // false

// console.log(genericSymbol); // Symbol()
// console.log(fooSymbol); // Symbol(foo);

// let myBoolean = new Boolean();
// console.log(typeof myBoolean); // "object"
// let myString = new String();
// console.log(typeof myString); // "object"
// let myNumber = new Number();
// console.log(typeof myNumber); // "object"
// // let mySymbol = new Symbol(); // TypeError: Symbol is not a constructor
// // 如果你确实想使用符号包装对象，可以借用 Object()函数：
// let mySymbol = Symbol();
// let myWrappedSymbol = Object(mySymbol);
// console.log(typeof myWrappedSymbol); // "object"

// let fooGlobalSymbol = Symbol.for('foo');
// console.log(typeof fooGlobalSymbol); // symbol

// let otherFooGlobalSymbol = Symbol.for('foo'); // 重用已有符号
// console.log(fooGlobalSymbol === otherFooGlobalSymbol); // true

// let localSymbol = Symbol('foo');
// let globalSymbol = Symbol.for('foo');
// console.log(localSymbol === globalSymbol); // false

// let emptyGlobalSymbol = Symbol.for();
// console.log(emptyGlobalSymbol); // Symbol(undefined)

// // 创建全局符号
// let s = Symbol.for('foo');
// console.log(Symbol.keyFor(s)); // foo
// // 创建普通符号
// let s2 = Symbol('bar');
// console.log(Symbol.keyFor(s2)); // undefined
// // 如果传给 Symbol.keyFor()的不是符号，则该方法抛出 TypeError：
// Symbol.keyFor(123); // TypeError: 123 is not a symbol

// let s1 = Symbol("foo"),
//   s2 = Symbol("bar"),
//   s3 = Symbol("baz"),
//   s4 = Symbol("qux");
// let o = {
//   [s1]: "foo val",
// };
// // 这样也可以： o[s1] = 'foo val';
// console.log(o);
// // {Symbol(foo): foo val}
// Object.defineProperty(o, s2, { value: "bar val" });
// console.log(o);
// // {Symbol(foo): foo val, Symbol(bar): bar val}
// Object.defineProperties(o, {
//   [s3]: { value: "baz val" },
//   [s4]: { value: "qux val" },
// });
// console.log(o);
// // {Symbol(foo): foo val, Symbol(bar): bar val,
// // Symbol(baz): baz val, Symbol(qux): qux val}

// let s1 = Symbol('foo'),
// s2 = Symbol('bar');
// let o = {
// [s1]: 'foo val',
// [s2]: 'bar val',
// baz: 'baz val',
// qux: 'qux val'
// };
// console.log(Object.getOwnPropertySymbols(o));
// // [Symbol(foo), Symbol(bar)]
// console.log(Object.getOwnPropertyNames(o));
// // ["baz", "qux"]
// console.log(Object.getOwnPropertyDescriptors(o));
// // {baz: {...}, qux: {...}, Symbol(foo): {...}, Symbol(bar): {...}}
// console.log(Reflect.ownKeys(o));
// // ["baz", "qux", Symbol(foo), Symbol(bar)]

// let o = {
//   [Symbol('foo')]: 'foo val',
//   [Symbol('bar')]: 'bar val'
//   };
//   console.log(o);
//   // {Symbol(foo): "foo val", Symbol(bar): "bar val"}
//   let barSymbol = Object.getOwnPropertySymbols(o)
//   .find((symbol) => symbol.toString().match(/bar/));
//   console.log(barSymbol);
//   // Symbol(bar)

// class Foo {
//   async *[Symbol.asyncIterator]() {}
// }
// let f = new Foo();
// console.log(f[Symbol.asyncIterator]());
// // AsyncGenerator {<suspended>}

// class Emitter {
//   constructor(max) {
//     this.max = max;
//     this.asyncIdx = 0;
//   }
//   async *[Symbol.asyncIterator]() {
//     while(this.asyncIdx < this.max) {
//       yield new Promise((resolve) => resolve(this.asyncIdx++));
//     }
//   }
// }

// async function asyncCount() {
//   let emitter = new Emitter(5);
//   for await(const x of emitter) {
//    console.log(x);
//   }
// }

// asyncCount();
// 0
// 1
// 2
// 3
// 4

// function Foo() {}
// let f = new Foo();
// console.log(f instanceof Foo); // true
// class Bar {}
// let b = new Bar();
// console.log(b instanceof Bar); // true

// console.log(Foo[Symbol.hasInstance](f)); // true
// console.log(Bar[Symbol.hasInstance](b)); // true

// class Bar {}
// class Baz extends Bar {
//   static [Symbol.hasInstance]() {
//     return false;
//   }
// }
// let b = new Baz();
// console.log(Bar[Symbol.hasInstance](b)); // true
// console.log(b instanceof Bar); // true
// console.log(Baz[Symbol.hasInstance](b)); // false
// console.log(b instanceof Baz); // false

// let initial = ['foo'];
// let array = ['bar'];
// console.log(array[Symbol.isConcatSpreadable]); // undefined
// console.log(initial.concat(array)); // ['foo', 'bar']
// array[Symbol.isConcatSpreadable] = false;
// console.log(initial.concat(array)); // ['foo', Array(1)]

// let arrayLikeObject = { length: 1, 0: 'baz' };
// console.log(arrayLikeObject[Symbol.isConcatSpreadable]); // undefined
// console.log(initial.concat(arrayLikeObject)); // ['foo', {...}]
// arrayLikeObject[Symbol.isConcatSpreadable] = true;
// console.log(initial.concat(arrayLikeObject)); // ['foo', 'baz']
// let otherObject = new Set().add('qux');
// console.log(otherObject[Symbol.isConcatSpreadable]); // undefined
// console.log(initial.concat(otherObject)); // ['foo', Set(1)]
// otherObject[Symbol.isConcatSpreadable] = true;
// console.log(initial.concat(otherObject)); // ['foo']

// class Foo {
//   *[Symbol.iterator]() {}
// }

// let f = new Foo();
// console.log(f[Symbol.iterator]());
//  // Object [Generator] {}

// class Emitter {
//   constructor(max) {
//     this.max = max;
//     this.idx = 0;
//   }
//   *[Symbol.iterator]() {
//     while(this.idx < this.max) {
//       yield this.idx++;
//     }
//   }
// }

// function count() {
//   let emitter = new Emitter(5);
//   for (const x of emitter) {
//     console.log(x);
//   }
// }
// count();
// // 0 1 2 3 4 5

// console.log(RegExp.prototype[Symbol.match]);
// // [Function: [Symbol.match]]
// console.log('foobar'.match(/bar/));
// // ["bar", index: 3, input: "foobar", groups: undefined]

// class FooMatcher {
//   static [Symbol.match](target) {
//     return target.includes('foo');
//   }
// }

// console.log('foobar'.match(FooMatcher)); // true
// console.log('barbaz'.match(FooMatcher)); // false

// class StringMatcher {
//   constructor(str) {
//     this.str = str;
//   }
//   [Symbol.match](target) {
//     return target.includes(this.str);
//   }
// }
// console.log('foobar'.match(new StringMatcher('foo'))); // true
// console.log('barbaz'.match(new StringMatcher('qux'))); // false

// console.log(RegExp.prototype[Symbol.replace]);
// // ƒ [Function: [Symbol.replace]]
// console.log('foobarbaz'.replace(/bar/, 'qux'));
// // 'fooquxbaz'

// class FooReplacer {
//   static [Symbol.replace](target, replacement) {
//     return target.split('foo').join(replacement);
//   }
// }

// console.log('barfoobaz'.replace(FooReplacer, 'qux'));
// // "barquxbaz"
// class StringReplacer {
//   constructor(str) {
//     this.str = str;
//   }
//   [Symbol.replace](target, replacement) {
//     return target.split(this.str).join(replacement);
//   }
// }
// console.log('barfoobaz'.replace(new StringReplacer('foo'), 'qux'));
// // "barquxbaz"

// console.log(RegExp.prototype[Symbol.search]);
// // [Function: [Symbol.search]]
// console.log('foobar'.search(/bar/));
// // 3

// class FooSearcher {
//   static [Symbol.search](target) {
//     return target.indexOf('foo');
//   }
// }

// console.log('foobar'.search(FooSearcher)); // 0
// console.log('barfoo'.search(FooSearcher)); // 3
// console.log('barbaz'.search(FooSearcher)); // -1

// class StringSearcher {
//   constructor(str) {
//     this.str = str;
//   }
//   [Symbol.search](target) {
//     return target.indexOf(this.str);
//   }
// }
// console.log('foobar'.search(new StringSearcher('foo'))); // 0
// console.log('barfoo'.search(new StringSearcher('foo'))); // 3
// console.log('barbaz'.search(new StringSearcher('qux'))); // -1

// class Bar extends Array {}
// class Baz extends Array {
//   static get [Symbol.species]() {
//     return Array;
//   }
// }

// let bar = new Bar();
// console.log(bar instanceof Array); // true
// console.log(bar instanceof Bar); // true
// bar = bar.concat('bar');
// console.log(bar instanceof Array); // true
// console.log(bar instanceof Bar); // true
// let baz = new Baz();
// console.log(baz instanceof Array); // true
// console.log(baz instanceof Baz); // true
// baz = baz.concat('baz');
// console.log(baz instanceof Array); // true
// console.log(baz instanceof Baz); // false

// console.log(RegExp.prototype[Symbol.split]);
// // [Function: [Symbol.split]]
// console.log('foobarbaz'.split(/bar/));
// // ['foo', 'baz']

// class FooSplitter {
//   static [Symbol.split](target) {
//     return target.split('foo');
//   }
// }
// console.log('barfoobaz'.split(FooSplitter));
// // ["bar", "baz"]
// class StringSplitter {
//   constructor(str) {
//     this.str = str;
//   }
//   [Symbol.split](target) {
//     return target.split(this.str);
//   }
// }
// console.log('barfoobaz'.split(new StringSplitter('foo')));
// // ["bar", "baz"]

// class Foo {}
// let foo = new Foo();
// console.log(3 + foo); // "3[object Object]"
// console.log(3 - foo); // NaN
// console.log(String(foo)); // "[object Object]"
// class Bar {
//   constructor() {
//     this[Symbol.toPrimitive] = function(hint) {
//       switch (hint) {
//       case 'number':
//         return 3;
//       case 'string':
//         return 'string bar';
//       case 'default':
//         default:
//       return 'default bar';
//       }
//     }
//   }
// }

// let bar = new Bar();
// console.log(6 + bar); // "6default bar"
// console.log(6 - bar); // 3
// console.log(String(bar)); // "string bar"

// let s = new Set();
// console.log(s); // Set(0) {}
// console.log(s.toString()); // [object Set]
// console.log(s[Symbol.toStringTag]); // Set
// class Foo {}
// let foo = new Foo();
// console.log(foo); // Foo {}
// console.log(foo.toString()); // [object Object]
// console.log(foo[Symbol.toStringTag]); // undefined
// class Bar {
//   constructor() {
//     this[Symbol.toStringTag] = 'Bar';
//   }
// }
// let bar = new Bar();
// console.log(bar); // Bar { [Symbol(Symbol.toStringTag)]: 'Bar' }
// console.log(bar.toString()); // [object Bar]
// console.log(bar[Symbol.toStringTag]); // Bar

let o = { foo: "bar" };
with (o) {
  console.log(foo); // bar
}
o[Symbol.unscopables] = {
  foo: true,
};
with (o) {
  console.log(foo); // ReferenceError
}
