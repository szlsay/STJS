// function createPerson(name, age, job) {
//   let o = new Object();
//   o.name = name;
//   o.age = age;
//   o.job = job;
//   o.sayName = function () {
//     console.log(this.name);
//   };
//   return o;
// }
// let person1 = createPerson("Nicholas", 29, "Software Engineer");
// let person2 = createPerson("Greg", 27, "Doctor");
// person1.sayName();
// person2.sayName();

// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = function () {
//     console.log(this.name);
//   };
// }
// let person1 = new Person("Nicholas", 29, "Software Engineer");
// let person2 = new Person("Greg", 27, "Doctor");
// person1.sayName(); // Nicholas
// person2.sayName(); // Greg

// console.log(person1.constructor == Person); // true
// console.log(person2.constructor == Person); // true

// console.log(person1 instanceof Object); // true
// console.log(person1 instanceof Person); // true
// console.log(person2 instanceof Object); // true
// console.log(person2 instanceof Person); // true

// let Person = function (name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = function () {
//     console.log(this.name);
//   };
// };
// let person1 = new Person("Nicholas", 29, "Software Engineer");
// let person2 = new Person("Greg", 27, "Doctor");
// person1.sayName(); // Nicholas
// person2.sayName(); // Greg
// console.log(person1 instanceof Object); // true
// console.log(person1 instanceof Person); // true
// console.log(person2 instanceof Object); // true
// console.log(person2 instanceof Person); // true

// function Person() {
//   this.name = "Jake";
//   this.sayName = function () {
//     console.log(this.name);
//   };
// }
// let person1 = new Person();
// let person2 = new Person;

// person1.sayName(); // Jake
// person2.sayName(); // Jake

// console.log(person1 instanceof Object); // true
// console.log(person1 instanceof Person); // true
// console.log(person2 instanceof Object); // true
// console.log(person2 instanceof Person); // true

// let Person = function (name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = function () {
//     console.log(this.name);
//   };
// };
// // ??????????????????
// let person = new Person("Nicholas", 29, "Software Engineer");
// person.sayName(); // "Nicholas"
// // ??????????????????
// // Person("Greg", 27, "Doctor"); // ????????? window ??????
// // sayName(); // "Greg"
// // ???????????????????????????????????????
// let o = new Object();
// Person.call(o, "Kristen", 25, "Nurse");
// o.sayName(); // "Kristen"

// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = sayName;
// }
// function sayName() {
//   console.log(this.name);
// }
// let person1 = new Person("Nicholas", 29, "Software Engineer");
// let person2 = new Person("Greg", 27, "Doctor");
// person1.sayName(); // Nicholas
// person2.sayName(); // Greg

// function Person() {}
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job = "Software Engineer";
// Person.prototype.sayName = function () {
//   console.log(this.name);
// };
// let person1 = new Person();
// person1.sayName(); // "Nicholas"
// let person2 = new Person();
// person2.sayName(); // "Nicholas"
// console.log(person1.sayName == person2.sayName); // true

// let Person = function () {};
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job = "Software Engineer";
// Person.prototype.sayName = function () {
//   console.log(this.name);
// };
// let person1 = new Person();
// person1.sayName(); // "Nicholas"
// let person2 = new Person();
// person2.sayName(); // "Nicholas"
// console.log(person1.sayName == person2.sayName); // true

// /**
//  * ????????????????????????????????????
//  * ???????????????????????????????????????????????????????????????
//  * function Person() {}
//  * let Person = function() {}
//  */
// function Person() {}
// /**
//  * ??????????????????????????????????????????
//  * ??????????????????????????????
//  */
// console.log(typeof Person.prototype);
// console.log(Person.prototype);
// // {
// // constructor: f Person(),
// // __proto__: Object
// // }
// /**
//  * ???????????????????????????????????? prototype ??????
//  * ?????????????????????????????????????????????????????????
//  * constructor ?????????????????????????????????
//  * ????????????????????????????????????
//  */
// console.log(Person.prototype.constructor === Person); // true
// /**
//  * ????????????????????????????????? Object ???????????????
//  * Object ?????????????????? null
//  */
// console.log(Person.prototype.__proto__ === Object.prototype); // true
// console.log(Person.prototype.__proto__.constructor === Object); // true
// console.log(Person.prototype.__proto__.__proto__ === null); // true
// console.log(Person.prototype.__proto__);
// // {
// // constructor: f Object(),
// // toString: ...
// // hasOwnProperty: ...
// // isPrototypeOf: ...
// // ...
// // }
// let person1 = new Person(),
//   person2 = new Person();
// /**
//  * ????????????????????????????????????
//  * ??? 3 ???????????????????????????
//  */
// console.log(person1 !== Person); // true
// console.log(person1 !== Person.prototype); // true
// console.log(Person.prototype !== Person); // true
// /**
//  * ????????????__proto__????????????????????????
//  * ??????????????????????????????[[Prototype]]
//  *
//  * ?????????????????? prototype ???????????????????????????
//  *
//  * ????????????????????????????????????????????????????????????????????????
//  */
// console.log(person1.__proto__ === Person.prototype); // true
// console.log(person1.__proto__.constructor === Person); // true
// /**
//  * ??????????????????????????????????????????
//  * ??????????????????????????????
//  */
// console.log(person1.__proto__ === person2.__proto__); // true
// /**
//  * instanceof ???????????????????????????* ??????????????????????????????????????????
//  */
// console.log(person1 instanceof Person); // true
// console.log(person1 instanceof Object); // true
// console.log(Person.prototype instanceof Object); // true

// console.log(Person.prototype.isPrototypeOf(person1)); // true
// console.log(Person.prototype.isPrototypeOf(person2)); // true

// console.log(Object.getPrototypeOf(person1) == Person.prototype); // true
// console.log(Object.getPrototypeOf(person1).name); // "Nicholas"

// let biped = {
//   numLegs: 2,
// };
// let person = {
//   name: "Matt",
// };
// Object.setPrototypeOf(person, biped);
// console.log(person.name); // Matt
// console.log(person.numLegs); // 2
// console.log(Object.getPrototypeOf(person) === biped); // true

// let biped = {
//   numLegs: 2,
// };
// let person = Object.create(biped);
// person.name = "Matt";
// console.log(person.name); // Matt
// console.log(person.numLegs); // 2
// console.log(Object.getPrototypeOf(person) === biped); // true

// function Person() {}
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job = "Software Engineer";
// Person.prototype.sayName = function () {
//   console.log(this.name);
// };
// let person1 = new Person();
// let person2 = new Person();
// person1.name = "Greg";
// console.log(person1.name); // "Greg"???????????????
// console.log(person2.name); // "Nicholas"???????????????

// function Person() {}
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job = "Software Engineer";
// Person.prototype.sayName = function () {
//   console.log(this.name);
// };
// let person1 = new Person();
// let person2 = new Person();
// person1.name = "Greg";
// console.log(person1.name); // "Greg"???????????????
// console.log(person2.name); // "Nicholas"???????????????
// delete person1.name;
// console.log(person1.name); // "Nicholas"???????????????

// function Person() {}
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job = "Software Engineer";
// Person.prototype.sayName = function () {
//   console.log(this.name);
// };
// let person1 = new Person();
// let person2 = new Person();
// console.log(person1.hasOwnProperty("name")); // false
// person1.name = "Greg";
// console.log(person1.name); // "Greg"???????????????
// console.log(person1.hasOwnProperty("name")); // true
// console.log(person2.name); // "Nicholas"???????????????
// console.log(person2.hasOwnProperty("name")); // false
// delete person1.name;
// console.log(person1.name); // "Nicholas"???????????????
// console.log(person1.hasOwnProperty("name")); // false

// function Person() {}
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job = "Software Engineer";
// Person.prototype.sayName = function () {
//   console.log(this.name);
// };
// let person1 = new Person();
// let person2 = new Person();
// console.log(person1.hasOwnProperty("name")); // false
// console.log("name" in person1); // true
// person1.name = "Greg";
// console.log(person1.name); // "Greg"???????????????
// console.log(person1.hasOwnProperty("name")); // true
// console.log("name" in person1); // true
// console.log(person2.name); // "Nicholas"???????????????
// console.log(person2.hasOwnProperty("name")); // false
// console.log("name" in person2); // true
// delete person1.name;
// console.log(person1.name); // "Nicholas"???????????????
// console.log(person1.hasOwnProperty("name")); // false
// console.log("name" in person1); // true

// function hasPrototypeProperty(object, name) {
//   return !object.hasOwnProperty(name) && name in object;
// }

// function Person() {}
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job = "Software Engineer";
// Person.prototype.sayName = function () {
//   console.log(this.name);
// };
// let person = new Person();
// console.log(hasPrototypeProperty(person, "name")); // true
// person.name = "Greg";
// console.log(hasPrototypeProperty(person, "name")); // false

// function Person() {}
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job = "Software Engineer";
// Person.prototype.sayName = function () {
//   console.log(this.name);
// };
// let keys = Object.keys(Person.prototype);
// console.log(keys); // "name,age,job,sayName"
// let p1 = new Person();
// p1.name = "Rob";
// p1.age = 31;
// let p1keys = Object.keys(p1);
// console.log(p1keys); // "[name,age]"

// let keys = Object.getOwnPropertyNames(Person.prototype);
// console.log(keys); // "[constructor,name,age,job,sayName]"

// let k1 = Symbol("k1"),
//   k2 = Symbol("k2");
// let o = {
//   [k1]: "k1",
//   [k2]: "k2",
// };
// console.log(Object.getOwnPropertySymbols(o));
// // [Symbol(k1), Symbol(k2)]

// let k1 = Symbol("k1"),
//   k2 = Symbol("k2");
// let o = {
//   1: 1,
//   first: "first",
//   [k1]: "sym2",
//   second: "second",
//   0: 0,
// };
// o[k2] = "sym2";
// o[3] = 3;
// o.third = "third";
// o[2] = 2;
// console.log(Object.getOwnPropertyNames(o));
// // ["0", "1", "2", "3", "first", "second", "third"]
// console.log(Object.getOwnPropertySymbols(o));
// // [Symbol(k1), Symbol(k2)]

// const o = {
//   foo: "bar",
//   baz: 1,
//   qux: {},
// };
// console.log(Object.keys(o));
// // [ 'foo', 'baz', 'qux' ]
// console.log(Object.values(o));
// // ["bar", 1, {}]
// console.log(Object.entries(o));
// // [["foo", "bar"], ["baz", 1], ["qux", {}]]

// const o = {
//   qux: {},
// };
// console.log(Object.values(o)[0] === o.qux);
// // true
// console.log(Object.entries(o)[0][1] === o.qux);
// // true

// const sym = Symbol();
// const o = {
//   [sym]: "foo",
// };
// console.log(Object.values(o));
// // []
// console.log(Object.entries(o));
// // []

// function Person() {}
// Person.prototype = {
//   name: "Nicholas",
//   age: 29,
//   job: "Software Engineer",
//   sayName() {
//     console.log(this.name);
//   },
// };

// let friend = new Person();
// console.log(friend instanceof Object); // true
// console.log(friend instanceof Person); // true
// console.log(friend.constructor == Person); // false
// console.log(friend.constructor == Object); // true

// function Person() {}
// Person.prototype = {
//   constructor: Person,
//   name: "Nicholas",
//   age: 29,
//   job: "Software Engineer",
//   sayName() {
//     console.log(this.name);
//   },
// };
// // ?????? constructor ??????
// Object.defineProperty(Person.prototype, "constructor", {
//   enumerable: false,
//   value: Person,
// });

// let friend = new Person();
// console.log(friend instanceof Object); // true
// console.log(friend instanceof Person); // true
// console.log(friend.constructor == Person); // true
// console.log(friend.constructor == Object); // false

// function Person() {}
// let friend = new Person();
// Person.prototype.sayHi = function () {
//   console.log("hi");
// };
// friend.sayHi(); // "hi"???????????????

// function Person() {}
// let friend = new Person();
// Person.prototype = {
//   constructor: Person,
//   name: "Nicholas",
//   age: 29,
//   job: "Software Engineer",
//   sayName() {
//     console.log(this.name);
//   },
// };
// friend.sayName(); // ??????

// console.log(typeof Array.prototype.sort); // "function"
// console.log(typeof String.prototype.substring); // "function"

// String.prototype.startsWith = function (text) {
//   return this.indexOf(text) === 0;
// };
// let msg = "Hello world!";
// console.log(msg.startsWith("Hello")); // true

// function Person() {}
// Person.prototype = {
//   constructor: Person,
//   name: "Nicholas",
//   age: 29,
//   job: "Software Engineer",
//   friends: ["Shelby", "Court"],
//   sayName() {
//     console.log(this.name);
//   },
// };
// let person1 = new Person();
// let person2 = new Person();
// person1.friends.push("Van");
// console.log(person1.friends); // "Shelby,Court,Van"
// console.log(person2.friends); // "Shelby,Court,Van"
// console.log(person1.friends === person2.friends); // true

// function SuperType() {
//   this.property = true;
// }
// SuperType.prototype.getSuperValue = function () {
//   return this.property;
// };
// function SubType() {
//   this.subproperty = false;
// }
// // ?????? SuperType
// SubType.prototype = new SuperType();
// SubType.prototype.getSubValue = function () {
//   return this.subproperty;
// };
// let instance = new SubType();
// console.log(instance.getSuperValue()); // true

// console.log(instance instanceof Object); // true
// console.log(instance instanceof SuperType); // true
// console.log(instance instanceof SubType); // true

// console.log(Object.prototype.isPrototypeOf(instance)); // true
// console.log(SuperType.prototype.isPrototypeOf(instance)); // true
// console.log(SubType.prototype.isPrototypeOf(instance)); // true

// function SuperType() {
//   this.property = true;
// }
// SuperType.prototype.getSuperValue = function () {
//   return this.property;
// };
// function SubType() {
//   this.subproperty = false;
// }
// // ?????? SuperType
// SubType.prototype = new SuperType();
// // ?????????
// SubType.prototype.getSubValue = function () {
//   return this.subproperty;
// };
// // ?????????????????????
// SubType.prototype.getSuperValue = function () {
//   return false;
// };
// let instance = new SubType();
// console.log(instance.getSuperValue()); // false

// function SuperType() {
//   this.property = true;
// }
// SuperType.prototype.getSuperValue = function () {
//   return this.property;
// };
// function SubType() {
//   this.subproperty = false;
// }
// // ?????? SuperType
// SubType.prototype = new SuperType();
// // ??????????????????????????????????????????????????????????????????
// SubType.prototype = {
//   getSubValue() {
//     return this.subproperty;
//   },
//   someOtherMethod() {
//     return false;
//   },
// };
// let instance = new SubType();
// console.log(instance.getSuperValue()); // ?????????

function SuperType() {
  this.colors = ["red", "blue", "green"];
}
function SubType() {}
// ?????? SuperType
SubType.prototype = new SuperType();
let instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors); // "red,blue,green,black"
let instance2 = new SubType();
console.log(instance2.colors); // "red,blue,green,black"
