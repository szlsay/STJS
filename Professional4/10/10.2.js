// function sum(num1, num2) {
//   return num1 + num2;
// }
// console.log(sum(10, 10)); // 20
// let anotherSum = sum;
// console.log(anotherSum(10, 10)); // 20
// sum = null;
// console.log(anotherSum(10, 10)); // 20

// function foo() {}
// let bar = function () {};
// let baz = () => {};
// console.log(foo.name); // foo
// console.log(bar.name); // bar
// console.log(baz.name); // baz
// console.log((() => {}).name); //（空字符串）
// console.log(new Function().name); // anonymous

// function foo() {}
// console.log(foo.bind(null).name); // bound foo
// let dog = {
//   years: 1,
//   get age() {
//     return this.years;
//   },
//   set age(newAge) {
//     this.years = newAge;
//   },
// };
// let propertyDescriptor = Object.getOwnPropertyDescriptor(dog, "age");
// console.log(propertyDescriptor.get.name); // get age
// console.log(propertyDescriptor.set.name); // set age
