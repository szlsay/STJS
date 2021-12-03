// function SuperType() {
//   this.colors = ["red", "blue", "green"];
// }
// function SubType() {
//   // 继承 SuperType
//   SuperType.call(this);
// }
// let instance1 = new SubType();
// instance1.colors.push("black");
// console.log(instance1.colors); // "red,blue,green,black"
// let instance2 = new SubType();
// console.log(instance2.colors); // "red,blue,green"

// function SuperType(name) {
//   this.name = name;
// }
// function SubType() {
//   // 继承 SuperType 并传参
//   SuperType.call(this, "Nicholas");
//   // 实例属性
//   this.age = 29;
// }
// let instance = new SubType();
// console.log(instance.name); // "Nicholas";
// console.log(instance.age); // 29

// function SuperType(name) {
//   this.name = name;
//   this.colors = ["red", "blue", "green"];
// }
// SuperType.prototype.sayName = function () {
//   console.log(this.name);
// };
// function SubType(name, age) {
//   // 继承属性
//   SuperType.call(this, name);
//   this.age = age;
// }
// // 继承方法
// SubType.prototype = new SuperType();
// SubType.prototype.sayAge = function () {
//   console.log(this.age);
// };
// let instance1 = new SubType("Nicholas", 29);
// instance1.colors.push("black");
// console.log(instance1.colors); // "red,blue,green,black"
// instance1.sayName(); // "Nicholas";
// instance1.sayAge(); // 29
// let instance2 = new SubType("Greg", 27);
// console.log(instance2.colors); // "red,blue,green"
// instance2.sayName(); // "Greg";
// instance2.sayAge(); // 27

function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

// let person = {
//   name: "Nicholas",
//   friends: ["Shelby", "Court", "Van"],
// };
// let anotherPerson = object(person);
// anotherPerson.name = "Greg";
// anotherPerson.friends.push("Rob");
// let yetAnotherPerson = object(person);
// yetAnotherPerson.name = "Linda";
// yetAnotherPerson.friends.push("Barbie");
// console.log(person.friends); // "Shelby,Court,Van,Rob,Barbie"

// let person = {
//   name: "Nicholas",
//   friends: ["Shelby", "Court", "Van"],
// };
// let anotherPerson = Object.create(person);
// anotherPerson.name = "Greg";
// anotherPerson.friends.push("Rob");
// let yetAnotherPerson = Object.create(person);
// yetAnotherPerson.name = "Linda";
// yetAnotherPerson.friends.push("Barbie");
// console.log(person.friends); // "Shelby,Court,Van,Rob,Barbie"

// let person = {
//   name: "Nicholas",
//   friends: ["Shelby", "Court", "Van"],
// };
// let anotherPerson = Object.create(person, {
//   name: {
//     value: "Greg",
//   },
// });
// console.log(anotherPerson.name); // "Greg"

// function createAnother(original) {
//   let clone = object(original); // 通过调用函数创建一个新对象
//   clone.sayHi = function () {
//     // 以某种方式增强这个对象
//     console.log("hi");
//   };
//   return clone; // 返回这个对象
// }

// let person = {
//   name: "Nicholas",
//   friends: ["Shelby", "Court", "Van"],
// };
// let anotherPerson = createAnother(person);
// anotherPerson.sayHi(); // "hi"

// function SuperType(name) {
//   this.name = name;
//   this.colors = ["red", "blue", "green"];
// }
// SuperType.prototype.sayName = function () {
//   console.log(this.name);
// };
// function SubType(name, age) {
//   SuperType.call(this, name); // 第二次调用 SuperType()
//   this.age = age;
// }
// SubType.prototype = new SuperType(); // 第一次调用 SuperType()
// SubType.prototype.constructor = SubType;
// SubType.prototype.sayAge = function () {
//   console.log(this.age);
// };

// function inheritPrototype(subType, superType) {
//   let prototype = object(superType.prototype); // 创建对象
//   prototype.constructor = subType; // 增强对象
//   subType.prototype = prototype; // 赋值对象
// }

// function SuperType(name) {
//   this.name = name;
//   this.colors = ["red", "blue", "green"];
// }
// SuperType.prototype.sayName = function () {
//   console.log(this.name);
// };
// function SubType(name, age) {
//   SuperType.call(this, name);
//   this.age = age;
// }
// inheritPrototype(SubType, SuperType);
// SubType.prototype.sayAge = function () {
//   console.log(this.age);
// };
