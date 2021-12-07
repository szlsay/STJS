function sayHello(name: String) {
  if (typeof name === "string") {
    return "hello," + name;
  } else {
    throw new Error("name is not a string");
  }
}

let st1 = "st";
console.log(sayHello(st1));

// let st2 = 123;
// console.log(sayHello(st2)); //Argument of type 'number' is not assignable to parameter of type 'String'.
