// let person = {};
// Object.defineProperty(person, "name", {
//   writable: false,
//   value: "Nicholas"
// });
// console.log(person.name); // "Nicholas"
// person.name = "Greg";
// console.log(person.name); // "Nicholas"

// let person = {};
// Object.defineProperty(person, "name", {
//   configurable: false,
//   value: "Nicholas"
// });
// console.log(person.name); // "Nicholas"
// delete person.name;
// console.log(person.name); // "Nicholas"

// let person = {};
// Object.defineProperty(person, "name", {
//   configurable: false,
//   value: "Nicholas"
// });
// // 抛出错误
// Object.defineProperty(person, "name", {
//   configurable: true,
//   value: "Nicholas"
// });

// // 定义一个对象，包含伪私有成员 year_和公共成员 edition
// let book = {
//   year_: 2017,
//   edition: 1
// };
// Object.defineProperty(book, "year", {
//   get() {
//     return this.year_;
//   },
//   set(newValue) {
//     if (newValue > 2017) {
//       this.year_ = newValue;
//       this.edition += newValue - 2017;
//     }
//   }
// });
// book.year = 2018;
// console.log(book.edition); // 2

// let book = {};
// Object.defineProperties(book, {
//   year_: {
//     value: 2017
//   },
//   edition: {
//     value: 1
//   },
//   year: {
//     get: function() {
//       return this.year_;
//     },
//     set: function(newValue) {
//       if (newValue > 2017) {
//         this.year_ = newValue;
//         this.edition += newValue - 2017;
//       }
//     }
//   }
// });
// // let descriptor = Object.getOwnPropertyDescriptor(book, "year_");
// // console.log(descriptor.value); // 2017
// // console.log(descriptor.configurable); // false
// // console.log(typeof descriptor.get); // "undefined"

// let descriptor = Object.getOwnPropertyDescriptor(book, "year");
// console.log(descriptor.value); // undefined
// console.log(descriptor.enumerable); // false
// console.log(typeof descriptor.get); // "function"

// console.log(Object.getOwnPropertyDescriptors(book));

// {
//   year_: {
//     value: 2017,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   },
//   edition: { value: 1, writable: false, enumerable: false, configurable: false },
//   year: {
//     get: [Function: get],
//     set: [Function: set],
//     enumerable: false,
//     configurable: false
//   }
// }

// let dest, src, result;
// /**
//  * 简单复制
//  */
// dest = {};
// src = { id: 'src' };
// result = Object.assign(dest, src);
// // Object.assign 修改目标对象
// // 也会返回修改后的目标对象
// console.log(dest === result); // true
// console.log(dest !== src); // true
// console.log(result); // { id: src }
// console.log(dest); // { id: src }
// /**
//  * 多个源对象
//  */
// dest = {};
// result = Object.assign(dest, { a: 'foo' }, { b: 'bar' });
// console.log(result); // { a: foo, b: bar }
// console.log(dest); // { a: foo, b: bar }

// /**
//  * 获取函数与设置函数
//  */
// dest = {
//   set a(val) {
//     console.log(`Invoked dest setter with param ${val}`);
//   }
// };
// src = {
//   get a() {
//     console.log('Invoked src getter');
//     return 'foo';
//   }
// };
// Object.assign(dest, src);
// // 调用 src 的获取方法
// // 调用 dest 的设置方法并传入参数"foo"
// // 因为这里的设置函数不执行赋值操作
// // 所以实际上并没有把值转移过来
// console.log(dest); // { set a(val) {...} }


// let dest, src, result;
// /**
//  * 覆盖属性
//  */
// dest = { id: 'dest' };
// result = Object.assign(dest, { id: 'src1', a: 'foo' }, { id: 'src2', b: 'bar' });
// // Object.assign 会覆盖重复的属性
// console.log(result); // { id: src2, a: foo, b: bar }
// // 可以通过目标对象上的设置函数观察到覆盖的过程：
// dest = {
//   set id(x) {
//     console.log(x);
//   }
// };
// Object.assign(dest, { id: 'first' }, { id: 'second' }, { id: 'third' });
// // first
// // second
// // third

// /**
//  * 对象引用
//  */
// dest = {};
// src = { a: {} };
// Object.assign(dest, src);
// // 浅复制意味着只会复制对象的引用
// console.log(dest); // { a :{} }
// console.log(dest.a === src.a); // true

// let dest, src, result;
// /**
//  * 错误处理
//  */
// dest = {};
// src = {
//   a: 'foo',
//   get b() {
//     // Object.assign()在调用这个获取函数时会抛出错误
//     throw new Error();
//   },
//   c: 'bar'
// };
// try {
//   Object.assign(dest, src);
// } catch (e) {}
// // Object.assign()没办法回滚已经完成的修改
// // 因此在抛出错误之前，目标对象上已经完成的修改会继续存在：
// console.log(dest); // { a: foo }

// console.log(Object.getOwnPropertyDescriptors(dest))

// // 这些是===符合预期的情况
// console.log(true === 1); // false
// console.log({} === {}); // false
// console.log("2" === 2); // false
// // 这些情况在不同 JavaScript 引擎中表现不同，但仍被认为相等
// console.log(+0 === -0); // true
// console.log(+0 === 0); // true
// console.log(-0 === 0); // true
// // 要确定 NaN 的相等性，必须使用极为讨厌的 isNaN()
// console.log(NaN === NaN); // false
// console.log(isNaN(NaN)); // true

// console.log(Object.is(true, 1)); // false
// console.log(Object.is({}, {})); // false
// console.log(Object.is("2", 2)); // false
// // 正确的 0、 -0、 +0 相等/不等判定
// console.log(Object.is(+0, -0)); // false
// console.log(Object.is(+0, 0)); // true
// console.log(Object.is(-0, 0)); // false
// // 正确的 NaN 相等判定
// console.log(Object.is(NaN, NaN)); // true

// // 要检查超过两个值，递归地利用相等性传递即可：
// function recursivelyCheckEqual(x, ...rest) {
//   return Object.is(x, rest[0]) &&
//     (rest.length < 2 || recursivelyCheckEqual(...rest));
// }

// let name = 'Matt';
// let person = {
//   name
// };
// console.log(person); // { name: 'Matt' }

// function makePerson(name) {
//   return {
//     name
//   };
// }
// let person = makePerson('Matt');
// console.log(person.name); // Matt

// const nameKey = 'name';
// const ageKey = 'age';
// const jobKey = 'job';
// let person = {};
// person[nameKey] = 'Matt';
// person[ageKey] = 27;
// person[jobKey] = 'Software engineer';
// console.log(person); // { name: 'Matt', age: 27, job: 'Software engineer' }

// const nameKey = 'name';
// const ageKey = 'age';
// const jobKey = 'job';
// let person = {
//   [nameKey]: 'Matt',
//   [ageKey]: 27,
//   [jobKey]: 'Software engineer'
// };
// console.log(person); // { name: 'Matt', age: 27, job: 'Software engineer' }

// const nameKey = 'name';
// const ageKey = 'age';
// const jobKey = 'job';
// let uniqueToken = 0;

// function getUniqueKey(key) {
//   return `${key}_${uniqueToken++}`;
// }
// let person = {
//   [getUniqueKey(nameKey)]: 'Matt',
//   [getUniqueKey(ageKey)]: 27,
//   [getUniqueKey(jobKey)]: 'Software engineer'
// };
// console.log(person); // { name_0: 'Matt', age_1: 27, job_2: 'Software engineer' }

// let person = {
//   sayName: function(name) {
//     console.log(`My name is ${name}`);
//   }
// };
// person.sayName('Matt'); // My name is Matt

// let person = {
//   sayName(name) {
//     console.log(`My name is ${name}`);
//   }
// };
// person.sayName('Matt'); // My name is Matt

// let person = {
//   name_: '',
//   get name() {
//     return this.name_;
//   },
//   set name(name) {
//     this.name_ = name;
//   },
//   sayName() {
//     console.log(`My name is ${this.name_}`);
//   }
// };
// person.name = 'Matt';
// person.sayName(); // My name is Matt

// const methodKey = 'sayName';
// let person = {
//   [methodKey](name) {
//     console.log(`My name is ${name}`);
//   }
// }
// person.sayName('Matt'); // My name is Matt

// // 不使用对象解构
// let person = {
//   name: 'Matt',
//   age: 27
// };

// let personName = person.name,
//   personAge = person.age;
// console.log(personName); // Matt
// console.log(personAge); // 27

// // 使用对象解构
// let person = {
//   name: 'Matt',
//   age: 27
// };
// let { name: personName, age: personAge } = person;
// console.log(personName); // Matt
// console.log(personAge); // 27

// let person = {
//   name: 'Matt',
//   age: 27
// };
// let { name, age } = person;
// console.log(name); // Matt
// console.log(age); // 27

// let person = {
//   name: 'Matt',
//   age: 27
// };
// let { name, job } = person;
// console.log(name); // Matt
// console.log(job); // undefined

// let person = {
//   name: 'Matt',
//   age: 27
// };
// let { name, job = 'Software engineer' } = person;
// console.log(name); // Matt
// console.log(job); // Software engineer

// let { length } = 'foobar';
// console.log(length); // 6
// let { constructor: c } = 4;
// console.log(c === Number); // true
// let { _ } = null; // TypeError
// let { _ } = undefined; // TypeError

// let personName, personAge;
// let person = {
//   name: 'Matt',
//   age: 27
// };
// ({ name: personName, age: personAge } = person);
// console.log(personName, personAge); // Matt, 27

// let person = {
//   name: 'Matt',
//   age: 27,
//   job: {
//     title: 'Software engineer'
//   }
// };
// let personCopy = {};
// ({
//   name: personCopy.name,
//   age: personCopy.age,
//   job: personCopy.job
// } = person);
// // 因为一个对象的引用被赋值给 personCopy，所以修改
// // person.job 对象的属性也会影响 personCopy
// person.job.title = 'Hacker'
// console.log(person);
// // { name: 'Matt', age: 27, job: { title: 'Hacker' } }
// console.log(personCopy);
// // { name: 'Matt', age: 27, job: { title: 'Hacker' } }

// let person = {
//   name: 'Matt',
//   age: 27,
//   job: {
//     title: 'Software engineer'
//   }
// };
// // 声明 title 变量并将 person.job.title 的值赋给它
// let { job: { title } } = person;
// console.log(title); // Software engineer

// let person = {
//   job: {
//     title: 'Software engineer'
//   }
// };
// let personCopy = {};
// // foo 在源对象上是 undefined
// ({
//   foo: {
//     bar: personCopy.bar
//   }
// } = person);
// // TypeError: Cannot destructure property 'bar' of 'undefined' or 'null'.
// // job 在目标对象上是 undefined
// ({
//   job: {
//     title: personCopy.job.title
//   }
// } = person);
// // TypeError: Cannot set property 'title' of undefined

// let person = {
//   name: 'Matt',
//   age: 27
// };
// let personName, personBar, personAge;
// try {
//   // person.foo 是 undefined，因此会抛出错误
//   ({ name: personName, foo: { bar: personBar }, age: personAge } = person);
// } catch (e) {}
// console.log(personName, personBar, personAge);
// // Matt, undefined, undefined

let person = {
  name: 'Matt',
  age: 27
};

function printPerson(foo, { name, age }, bar) {
  console.log(arguments);
  console.log(name, age);
}

function printPerson2(foo, { name: personName, age: personAge }, bar) {
  console.log(arguments);
  console.log(personName, personAge);
}
printPerson('1st', person, '2nd');
// ['1st', { name: 'Matt', age: 27 }, '2nd']
// 'Matt', 27
printPerson2('1st', person, '2nd');
// ['1st', { name: 'Matt', age: 27 }, '2nd']