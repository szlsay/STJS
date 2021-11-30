// let firstName = "John";
// let lastName = 'Jacob';
// let fullName = `Jingleheimerschmidt`;
// console.log(firstName);
// console.log(lastName);
// console.log(fullName);

// let lang = "Java";
// lang = lang + "Script";
// console.log(lang);

// let age = 11;
// let ageAsString = age.toString(); // 字符串"11"
// let found = true;
// let foundAsString = found.toString(); // 字符串"true"
// console.log(ageAsString)
// console.log((foundAsString));

// let num = 10;
// console.log(num.toString()); // "10"
// console.log(num.toString(2)); // "1010"
// console.log(num.toString(8)); // "12"
// console.log(num.toString(10)); // "10"
// console.log(num.toString(16)); // "a"

// let value1 = 10;
// let value2 = true;
// let value3 = null;
// let value4;
// console.log(String(value1)); // "10"
// console.log(String(value2)); // "true"
// console.log(String(value3)); // "null"
// console.log(String(value4)); // "undefined"

// let myMultiLineString = "first line\nsecond line";
// let myMultiLineTemplateLiteral = `first line
// second line`;
// console.log(myMultiLineString);
// // first line
// // second line"
// console.log(myMultiLineTemplateLiteral);
// // first line
// // second line
// console.log(myMultiLineString === myMultiLineTemplateLiteral);

// // 这个模板字面量在换行符之后有 22 个空格符
// let myTemplateLiteral = `first line
// second line`;
// console.log(myTemplateLiteral.length); // 22
// // 这个模板字面量以一个换行符开头
// let secondTemplateLiteral = `
// first line
// second line`;
// console.log(secondTemplateLiteral[0] === '\n'); // true
// // 这个模板字面量没有意料之外的字符
// let thirdTemplateLiteral = `first line
// second line`;
// console.log(thirdTemplateLiteral);
// // first line
// // second line

// let value = 5;
// let exponent = 'second';
// // 以前，字符串插值是这样实现的：
// let interpolatedString =
// value + ' to the ' + exponent + ' power is ' + (value * value);
// // 现在，可以用模板字面量这样实现：
// let interpolatedTemplateLiteral =
// `${ value } to the ${ exponent } power is ${ value * value }`;
// console.log(interpolatedString); // 5 to the second power is 25
// console.log(interpolatedTemplateLiteral); // 5 to the second power is 25

// console.log(`Hello, ${ `World` }!`); // Hello, World!
// // 将表达式转换为字符串时会调用 toString()：
// let foo = { toString: () => 'World' };
// console.log(`Hello, ${ foo }!`); // Hello, World!
// // 在插值表达式中可以调用函数和方法：
// function capitalize(word) {
// return `${ word[0].toUpperCase() }${ word.slice(1) }`;
// }
// console.log(`${ capitalize('hello') }, ${ capitalize('world') }!`); // Hello, World!
// // 此外，模板也可以插入自己之前的值：
// let value = '';
// function append() {
// value = `${value}abc`
// console.log(value);
// }
// append(); // abc
// append(); // abcabc
// append(); // abcabcabc

// let a = 6;
// let b = 9;
// function simpleTag(strings, aValExpression, bValExpression, sumExpression) {
// console.log(strings);
// console.log(aValExpression);
// console.log(bValExpression);
// console.log(sumExpression);
// return 'foobar';
// }
// let untaggedResult = `${ a } + ${ b } = ${ a + b }`;
// let taggedResult = simpleTag`${ a } + ${ b } = ${ a + b }`;
// // ["", " + ", " = ", ""]
// // 6
// // 9
// // 15
// console.log(untaggedResult); // "6 + 9 = 15"
// console.log(taggedResult); // "foobar"

// let a = 6;
// let b = 9;
// function zipTag(strings, ...expressions) {
//   console.log(strings);
//   expressions.map((e, i) => {
//     console.log(`e: ${e} ; i: ${i}`);
//   });
//   return (
//     strings[0] + expressions.map((e, i) => `${e}${strings[i + 1]}`).join("")
//   );
// }
// let untaggedResult = `${a} + ${b} = ${a + b}`;
// let taggedResult = zipTag`${a} + ${b} = ${a + b}`;
// console.log(untaggedResult); // "6 + 9 = 15"
// console.log(taggedResult); // "6 + 9 = 15"

// // Unicode 示例
// // \u00A9 是版权符号
// console.log(`\u00A9`); // ©
// console.log(String.raw`\u00A9`); // \u00A9
// // 换行符示例
// console.log(`first line\nsecond line`);
// // first line
// // second line
// console.log(String.raw`first line\nsecond line`); // "first line\nsecond line"
// // 对实际的换行符来说是不行的
// // 它们不会被转换成转义序列的形式
// console.log(`first line
// second line`);
// // first line
// // second line
// console.log(String.raw`first line
// second line`);
// // first line
// // second line

// function printRaw(strings) {
//   console.log('Actual characters:');
//   for (const string of strings) {
//   console.log(string);
//   }
//   console.log('Escaped characters;');
//   for (const rawString of strings.raw) {
//   console.log(rawString);
//   }
// }
//   printRaw`\u00A9${ 'and' }\n`;
//   // Actual characters:
//   // ©
//   //（换行符）
//   // Escaped characters:
//   // \u00A9
//   // \n

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

let o = { foo: 'bar' };
with (o) {
 console.log(foo); // bar
}
o[Symbol.unscopables] = {
 foo: true
};
with (o) {
 console.log(foo); // ReferenceError
}