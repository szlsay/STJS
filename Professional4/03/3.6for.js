// let count = 10;
// for (let i = 0; i < count; i++) {
//   console.log(i);
// }

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let p = new Person("st", 18);
// for (const i in p) {
//   console.log(i);
//   console.log(p[i]);
// }

// for (const el of [2,4,6,8]) {
//   console.log(el);
// }

let num = 25;
switch (true) {
  case num < 0:
    console.log("Less than 0.");
    break;
  case num >= 0 && num <= 10:
    console.log("Between 0 and 10.");
    break;
  case num > 10 && num <= 20:
    console.log("Between 10 and 20.");
    break;
  default:
    console.log("More than 20.");
}
