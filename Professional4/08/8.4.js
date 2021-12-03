// console.log(FunctionExpression); // undefined
// var FunctionExpression = function () {};
// console.log(FunctionExpression); // function() {}
// console.log(FunctionDeclaration); // FunctionDeclaration() {}
// function FunctionDeclaration() {}
// console.log(FunctionDeclaration); // FunctionDeclaration() {}
// console.log(ClassExpression); // undefined
// var ClassExpression = class {};
// console.log(ClassExpression); // class {}
// // console.log(ClassDeclaration); // ReferenceError: ClassDeclaration is not defined
// class ClassDeclaration {}
// console.log(ClassDeclaration); // class ClassDeclaration {}

// {
//   function FunctionDeclaration() {}
//   class ClassDeclaration {}
// }
// console.log(FunctionDeclaration); // FunctionDeclaration() {}
// console.log(ClassDeclaration); // ReferenceError: ClassDeclaration is not defined

// // 空类定义，有效
// class Foo {}
// // 有构造函数的类，有效
// class Bar {
//   constructor() {}
// }
// // 有获取函数的类，有效
// class Baz {
//   get myBaz() {}
// }
// // 有静态方法的类，有效
// class Qux {
//   static myQux() {}
// }

// let Person = class PersonName {
//   identify() {
//     console.log(Person.name, PersonName.name);
//   }
// };
// let p = new Person();
// p.identify(); // PersonName PersonName
// console.log(Person.name); // PersonName
// console.log(PersonName); // ReferenceError: PersonName is not defined

// class Animal {}
// class Person {
//   constructor() {
//     console.log("person ctor");
//   }
// }
// class Vegetable {
//   constructor() {
//     this.color = "orange";
//   }
// }
// let a = new Animal();
// let p = new Person(); // person ctor
// let v = new Vegetable();
// console.log(v.color); // orange

// class Person {
//   constructor(name) {
//     console.log(arguments.length);
//     this.name = name || null;
//   }
// }
// let p1 = new Person(); // 0
// console.log(p1.name); // null
// let p2 = new Person(); // 0
// console.log(p2.name); // null
// let p3 = new Person("Jake"); // 1
// console.log(p3.name); // Jake

// class Person {
//   constructor(override) {
//     this.foo = "foo";
//     if (override) {
//       return {
//         bar: "bar",
//       };
//     }
//   }
// }
// let p1 = new Person(),
//   p2 = new Person(true);
// console.log(p1); // Person{ foo: 'foo' }
// console.log(p1 instanceof Person); // true
// console.log(p2); // { bar: 'bar' }
// console.log(p2 instanceof Person); // false

// function Person() {}
// class Animal {}
// // 把 window 作为 this 来构建实例
// let p = Person();
// let a = Animal();
// // TypeError: class constructor Animal cannot be invoked without 'new

// class Person {}
// // 使用类创建一个新实例
// let p1 = new Person();
// // p1.constructor();
// // TypeError: Class constructor Person cannot be invoked without 'new'
// // 使用对类构造函数的引用创建一个新实例
// let p2 = new p1.constructor();

// class Person {}
// console.log(Person); // class Person {}
// console.log(typeof Person); // function

// class Person {}
// console.log(Person.prototype); // { constructor: f() }
// console.log(Person === Person.prototype.constructor); // true

// class Person {}
// let p = new Person();
// console.log(p instanceof Person); // true

// class Person {}
// let p1 = new Person();
// console.log(p1.constructor === Person); // true
// console.log(p1 instanceof Person); // true
// console.log(p1 instanceof Person.constructor); // false
// let p2 = new Person.constructor();
// console.log(p2.constructor === Person); // false
// console.log(p2 instanceof Person); // false
// console.log(p2 instanceof Person.constructor); // true

// // 类可以像函数一样在任何地方定义，比如在数组中
// let classList = [
//   class {
//     constructor(id) {
//       this.id_ = id;
//       console.log(`instance ${this.id_}`);
//     }
//   },
// ];
// function createInstance(classDefinition, id) {
//   return new classDefinition(id);
// }
// let foo = createInstance(classList[0], 3141); // instance 3141

// // 因为是一个类表达式，所以类名是可选的
// let p = new (class Foo {
//   constructor(x) {
//     console.log(x);
//   }
// })("bar"); // bar
// console.log(p); // Foo {}

// class Person {
//   constructor() {
//     // 这个例子先使用对象包装类型定义一个字符串
//     // 为的是在下面测试两个对象的相等性
//     this.name = new String("Jack");
//     this.sayName = () => console.log(this.name);
//     this.nicknames = ["Jake", "J-Dog"];
//   }
// }
// let p1 = new Person(),
//   p2 = new Person();
// p1.sayName(); // Jack
// p2.sayName(); // Jack
// console.log(p1.name === p2.name); // false
// console.log(p1.sayName === p2.sayName); // false
// console.log(p1.nicknames === p2.nicknames); // false
// p1.name = p1.nicknames[0];
// p2.name = p2.nicknames[1];
// p1.sayName(); // Jake
// p2.sayName(); // J-Dog

// class Person {
//   constructor() {
//     // 添加到 this 的所有内容都会存在于不同的实例上
//     this.locate = () => console.log("instance");
//   } // 在类块中定义的所有内容都会定义在类的原型上
//   locate() {
//     console.log("prototype");
//   }
// }
// let p = new Person();
// p.locate(); // instance
// Person.prototype.locate(); // prototype

// const symbolKey = Symbol("symbolKey");
// class Person {
//   stringKey() {
//     console.log("invoked stringKey");
//   }
//   [symbolKey]() {
//     console.log("invoked symbolKey");
//   }
//   ["computed" + "Key"]() {
//     console.log("invoked computedKey");
//   }
// }
// let p = new Person();
// p.stringKey(); // invoked stringKey
// p[symbolKey](); // invoked symbolKey
// p.computedKey(); // invoked computedKey

// class Person {
//   set name(newName) {
//     this.name_ = newName;
//   }
//   get name() {
//     return this.name_;
//   }
// }
// let p = new Person();
// p.name = "Jake";
// console.log(p.name); // Jake

// class Person {
//   constructor() {
//     // 添加到 this 的所有内容都会存在于不同的实例上
//     this.locate = () => console.log("instance", this);
//   }
//   // 定义在类的原型对象上
//   locate() {
//     console.log("prototype", this);
//   }
//   // 定义在类本身上
//   static locate() {
//     console.log("class", this);
//   }
// }
// let p = new Person();
// p.locate(); // instance, Person {}
// Person.prototype.locate(); // prototype, {constructor: ... }
// Person.locate(); // class, class Person {}

// class Person {
//   constructor(age) {
//     this.age_ = age;
//   }
//   sayAge() {
//     console.log(this.age_);
//   }
//   static create() {
//     // 使用随机年龄创建并返回一个 Person 实例
//     return new Person(Math.floor(Math.random() * 100));
//   }
// }
// console.log(Person.create()); // Person { age_: ... }

// class Person {
//   sayName() {
//     console.log(`${Person.greeting} ${this.name}`);
//   }
// }
// // 在类上定义数据成员
// Person.greeting = "My name is";
// // 在原型上定义数据成员
// Person.prototype.name = "Jake";
// let p = new Person();
// p.sayName(); // My name is Jake

// class Person {
//   // 在原型上定义生成器方法
//   *createNicknameIterator() {
//     yield "Jack";
//     yield "Jake";
//     yield "J-Dog";
//   }
//   // 在类上定义生成器方法
//   static *createJobIterator() {
//     yield "Butcher";
//     yield "Baker";
//     yield "Candlestick maker";
//   }
// }
// let jobIter = Person.createJobIterator();
// console.log(jobIter.next().value); // Butcher
// console.log(jobIter.next().value); // Baker
// console.log(jobIter.next().value); // Candlestick maker
// let p = new Person();
// let nicknameIter = p.createNicknameIterator();
// console.log(nicknameIter.next().value); // Jack
// console.log(nicknameIter.next().value); // Jake
// console.log(nicknameIter.next().value); // J-Dog

// class Person {
//   constructor() {
//     this.nicknames = ["Jack", "Jake", "J-Dog"];
//   }
//   *[Symbol.iterator]() {
//     yield* this.nicknames.entries();
//   }
// }
// let p = new Person();
// for (let [idx, nickname] of p) {
//   console.log(nickname);
// }
// // Jack
// // Jake
// // J-Dog

// class Person {
//   constructor() {
//     this.nicknames = ["Jack", "Jake", "J-Dog"];
//   }
//   [Symbol.iterator]() {
//     return this.nicknames.entries();
//   }
// }
// let p = new Person();
// for (let [idx, nickname] of p) {
//   console.log(nickname);
// }
// // Jack
// // Jake
// // J-Dog

// class Vehicle {}
// // 继承类
// class Bus extends Vehicle {}
// let b = new Bus();
// console.log(b instanceof Bus); // true
// console.log(b instanceof Vehicle); // true
// function Person() {}
// // 继承普通构造函数
// class Engineer extends Person {}
// let e = new Engineer();
// console.log(e instanceof Engineer); // true
// console.log(e instanceof Person); // true

// class Vehicle {
//   identifyPrototype(id) {
//     console.log(id, this);
//   }
//   static identifyClass(id) {
//     console.log(id, this);
//   }
// }
// class Bus extends Vehicle {}
// let v = new Vehicle();
// let b = new Bus();
// b.identifyPrototype("bus"); // bus, Bus {}
// v.identifyPrototype("vehicle"); // vehicle, Vehicle {}
// Bus.identifyClass("bus"); // bus, class Bus {}
// Vehicle.identifyClass("vehicle"); // vehicle, class Vehicle {}

// class Vehicle {
//   constructor() {
//     this.hasEngine = true;
//   }
// }
// class Bus extends Vehicle {
//   constructor() {
//     // 不要在调用 super()之前引用 this，否则会抛出 ReferenceError
//     super(); // 相当于 super.constructor()
//     console.log(this instanceof Vehicle); // true
//     console.log(this); // Bus { hasEngine: true }
//   }
// }
// new Bus();

// class Vehicle {
//   static identify() {
//     console.log("vehicle");
//   }
// }
// class Bus extends Vehicle {
//   static identify() {
//     super.identify();
//   }
// }
// Bus.identify(); // vehicle

// class Vehicle {
//   constructor() {
//     super();
//     // SyntaxError: 'super' keyword unexpected
//   }
// }

// class Vehicle {}
// class Bus extends Vehicle {
//   constructor() {
//     console.log(super);
//     // SyntaxError: 'super' keyword unexpected here
//   }
// }

// class Vehicle {}
// class Bus extends Vehicle {
//   constructor() {
//     super();
//     console.log(this instanceof Vehicle);
//   }
// }
// new Bus(); // true

// class Vehicle {
//   constructor(licensePlate) {
//     this.licensePlate = licensePlate;
//   }
// }
// class Bus extends Vehicle {
//   constructor(licensePlate) {
//     super(licensePlate);
//   }
// }
// console.log(new Bus("1337H4X")); // Bus { licensePlate: '1337H4X' }

// class Vehicle {
//   constructor(licensePlate) {
//     this.licensePlate = licensePlate;
//   }
// }
// class Bus extends Vehicle {}
// console.log(new Bus("1337H4X")); // Bus { licensePlate: '1337H4X' }

// class Vehicle {}
// class Bus extends Vehicle {
//   constructor() {
//     console.log(this);
//   }
// }
// new Bus();
// // ReferenceError: Must call super constructor in derived class
// // before accessing 'this' or returning from derived constructor

// class Vehicle {}
// class Car extends Vehicle {}
// class Bus extends Vehicle {
//   constructor() {
//     super();
//   }
// }
// class Van extends Vehicle {
//   constructor() {
//     return {};
//   }
// }
// console.log(new Car()); // Car {}
// console.log(new Bus()); // Bus {}
// console.log(new Van()); // {}

// // 抽象基类
// class Vehicle {
//   constructor() {
//     console.log(new.target);
//     if (new.target === Vehicle) {
//       throw new Error("Vehicle cannot be directly instantiated");
//     }
//   }
// }
// // 派生类
// class Bus extends Vehicle {}
// new Bus(); // class Bus {}
// new Vehicle(); // class Vehicle {}
// // Error: Vehicle cannot be directly instantiated

// // 抽象基类
// class Vehicle {
//   constructor() {
//     if (new.target === Vehicle) {
//       throw new Error("Vehicle cannot be directly instantiated");
//     }
//     if (!this.foo) {
//       throw new Error("Inheriting class must define foo()");
//     }
//     console.log("success!");
//   }
// }
// // 派生类
// class Bus extends Vehicle {
//   foo() {}
// }
// // 派生类
// class Van extends Vehicle {}
// new Bus(); // success!
// new Van(); // Error: Inheriting class must define foo()

// class SuperArray extends Array {
//   shuffle() {
//     // 洗牌算法
//     for (let i = this.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [this[i], this[j]] = [this[j], this[i]];
//     }
//   }
// }
// let a = new SuperArray(1, 2, 3, 4, 5);
// console.log(a instanceof Array); // true
// console.log(a instanceof SuperArray); // true
// console.log(a); // [1, 2, 3, 4, 5]
// a.shuffle();
// console.log(a); // [3, 1, 4, 5, 2]

// class SuperArray extends Array {}
// let a1 = new SuperArray(1, 2, 3, 4, 5);
// let a2 = a1.filter((x) => !!(x % 2));
// console.log(a1); // [1, 2, 3, 4, 5]
// console.log(a2); // [1, 3, 5]
// console.log(a1 instanceof SuperArray); // true
// console.log(a2 instanceof SuperArray); // true

// class SuperArray extends Array {
//   static get [Symbol.species]() {
//     return Array;
//   }
// }
// let a1 = new SuperArray(1, 2, 3, 4, 5);
// let a2 = a1.filter((x) => !!(x % 2));
// console.log(a1); // [1, 2, 3, 4, 5]
// console.log(a2); // [1, 3, 5]
// console.log(a1 instanceof SuperArray); // true
// console.log(a2 instanceof SuperArray); // false

// class Vehicle {}
// function getParentClass() {
//   console.log("evaluated expression");
//   return Vehicle;
// }
// class Bus extends getParentClass() {}
// // 可求值的表达式

// class Vehicle {}
// let FooMixin = (Superclass) =>
//   class extends Superclass {
//     foo() {
//       console.log("foo");
//     }
//   };
// let BarMixin = (Superclass) =>
//   class extends Superclass {
//     bar() {
//       console.log("bar");
//     }
//   };
// let BazMixin = (Superclass) =>
//   class extends Superclass {
//     baz() {
//       console.log("baz");
//     }
//   };
// class Bus extends FooMixin(BarMixin(BazMixin(Vehicle))) {}
// let b = new Bus();
// b.foo(); // foo
// b.bar(); // bar
// b.baz(); // baz

// class Vehicle {}
// let FooMixin = (Superclass) =>
//   class extends Superclass {
//     foo() {
//       console.log("foo");
//     }
//   };
// let BarMixin = (Superclass) =>
//   class extends Superclass {
//     bar() {
//       console.log("bar");
//     }
//   };
// let BazMixin = (Superclass) =>
//   class extends Superclass {
//     baz() {
//       console.log("baz");
//     }
//   };
// function mix(BaseClass, ...Mixins) {
//   return Mixins.reduce(
//     (accumulator, current) => current(accumulator),
//     BaseClass
//   );
// }
// class Bus extends mix(Vehicle, FooMixin, BarMixin, BazMixin) {}
// let b = new Bus();
// b.foo(); // foo
// b.bar(); // bar
// b.baz(); // baz


