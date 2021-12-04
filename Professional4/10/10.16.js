// function MyObject() {
//   // 私有变量和私有函数
//   let privateVariable = 10;
//   function privateFunction() {
//     return false;
//   }
//   // 特权方法
//   this.publicMethod = function () {
//     privateVariable++;
//     return privateFunction();
//   };
// }

// function Person(name) {
//   this.getName = function () {
//     return name;
//   };
//   this.setName = function (value) {
//     name = value;
//   };
// }
// let person = new Person("Nicholas");
// console.log(person.getName()); // 'Nicholas'
// person.setName("Greg");
// console.log(person.getName()); // 'Greg

// (function () {
//   // 私有变量和私有函数
//   let privateVariable = 10;
//   function privateFunction() {
//     return false;
//   }
//   // 构造函数
//   MyObject = function () {};
//   // 公有和特权方法
//   MyObject.prototype.publicMethod = function () {
//     privateVariable++;
//     return privateFunction();
//   };
// })();

// (function () {
//   let name = "";
//   Person = function (value) {
//     name = value;
//   };
//   Person.prototype.getName = function () {
//     return name;
//   };
//   Person.prototype.setName = function (value) {
//     name = value;
//   };
// })();
// let person1 = new Person("Nicholas");
// console.log(person1.getName()); // 'Nicholas'
// person1.setName("Matt");
// console.log(person1.getName()); // 'Matt'
// let person2 = new Person("Michael");
// console.log(person1.getName()); // 'Michael'
// console.log(person2.getName()); // 'Michael'

// let singleton = {
//   name: value,
//   method() {
//     // 方法的代码
//   },
// };

// let singleton = (function () {
//   // 私有变量和私有函数
//   let privateVariable = 10;
//   function privateFunction() {
//     return false;
//   }
//   // 特权/公有方法和属性
//   return {
//     publicProperty: true,
//     publicMethod() {
//       privateVariable++;
//       return privateFunction();
//     },
//   };
// })();

// let application = (function () {
//   // 私有变量和私有函数
//   let components = new Array();
//   // 初始化
//   components.push(new BaseComponent());
//   // 公共接口
//   return {
//     getComponentCount() {
//       return components.length;
//     },
//     registerComponent(component) {
//       if (typeof component == "object") {
//         components.push(component);
//       }
//     },
//   };
// })();

// let singleton = (function () {
//   // 私有变量和私有函数
//   let privateVariable = 10;
//   function privateFunction() {
//     return false;
//   }
//   // 创建对象
//   let object = new CustomType();
//   // 添加特权/公有属性和方法
//   object.publicProperty = true;
//   object.publicMethod = function () {
//     privateVariable++;
//     return privateFunction();
//   };
//   // 返回对象
//   return object;
// })();

// let application = (function () {
//   // 私有变量和私有函数
//   let components = new Array();
//   // 初始化
//   components.push(new BaseComponent());
//   // 创建局部变量保存实例
//   let app = new BaseComponent();
//   // 公共接口
//   app.getComponentCount = function () {
//     return components.length;
//   };
//   app.registerComponent = function (component) {
//     if (typeof component == "object") {
//       components.push(component);
//     }
//   };
//   // 返回实例
//   return app;
// })();
