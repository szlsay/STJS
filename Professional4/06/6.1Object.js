// let person = new Object();
// person.name = "Nicholas";
// person.age = 29;
// console.log(person);

// let person = {
//   name: "Nicholas",
//   age: 29,
// };
// console.log(person);

// let person = {}; // 与 new Object()相同
// person.name = "Nicholas";
// person.age = 29;
// console.log(person);

function displayInfo(args) {
  let output = "";
  if (typeof args.name == "string") {
    output += "Name: " + args.name + "\n";
  }
  if (typeof args.age == "number") {
    output += "Age: " + args.age + "\n";
  }
  console.log(output);
}
displayInfo({
  name: "Nicholas",
  age: 29,
});
displayInfo({
  name: "Greg",
});
