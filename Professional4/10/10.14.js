// function createComparisonFunction(propertyName) {
//   return function (object1, object2) {
//     let value1 = object1[propertyName];
//     let value2 = object2[propertyName];
//     if (value1 < value2) {
//       return -1;
//     } else if (value1 > value2) {
//       return 1;
//     } else {
//       return 0;
//     }
//   };
// }

// function compare(value1, value2) {
//   if (value1 < value2) {
//     return -1;
//   } else if (value1 > value2) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
// // let result = compare(5, 10);

// // 创建比较函数
// let compareNames = createComparisonFunction("name");
// // 调用函数
// let result = compareNames({ name: "Nicholas" }, { name: "Matt" });
// // 解除对函数的引用，这样就可以释放内存了
// compareNames = null;

// window.identity = "The Window";
// let object = {
//   identity: "My Object",
//   getIdentityFunc() {
//     return function () {
//       return this.identity;
//     };
//   },
// };
// console.log(object.getIdentityFunc()()); // 'The Window'

// window.identity = "The Window";
// let object = {
//   identity: "My Object",
//   getIdentityFunc() {
//     let that = this;
//     return function () {
//       return that.identity;
//     };
//   },
// };
// console.log(object.getIdentityFunc()()); // 'My Object'

// window.identity = "The Window";
// let object = {
//   identity: "My Object",
//   getIdentity() {
//     return this.identity;
//   },
// };

// object.getIdentity(); // 'My Object'
// object.getIdentity(); // 'My Object'
// (object.getIdentity = object.getIdentity)(); // 'The Window'

// function assignHandler() {
//   let element = document.getElementById("someElement");
//   element.onclick = () => console.log(element.id);
// }

// function assignHandler() {
//   let element = document.getElementById("someElement");
//   let id = element.id;
//   element.onclick = () => console.log(id);
//   element = null;
// }
