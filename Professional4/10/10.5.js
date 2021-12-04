// function makeKing(name) {
//   name = typeof name !== "undefined" ? name : "Henry";
//   return `King ${name} VIII`;
// }
// console.log(makeKing()); // 'King Henry VIII'
// console.log(makeKing("Louis")); // 'King Louis VIII'

// function makeKing(name = "Henry") {
//   return `King ${name} VIII`;
// }
// console.log(makeKing("Louis")); // 'King Louis VIII'
// console.log(makeKing()); // 'King Henry VIII'

// function makeKing(name = "Henry", numerals = "VIII") {
//   return `King ${name} ${numerals}`;
// }
// console.log(makeKing()); // 'King Henry VIII'
// console.log(makeKing("Louis")); // 'King Louis VIII'
// console.log(makeKing(undefined, "VI")); // 'King Henry VI'

// function makeKing(name = "Henry") {
//   name = "Louis";
//   return `King ${arguments[0]}`;
// }
// console.log(makeKing()); // 'King undefined'
// console.log(makeKing("Louis")); // 'King Louis'

// let romanNumerals = ["I", "II", "III", "IV", "V", "VI"];
// let ordinality = 0;
// function getNumerals() {
//   // 每次调用后递增
//   return romanNumerals[ordinality++];
// }
// function makeKing(name = "Henry", numerals = getNumerals()) {
//   return `King ${name} ${numerals}`;
// }
// console.log(makeKing()); // 'King Henry I'
// console.log(makeKing("Louis", "XVI")); // 'King Louis XVI'
// console.log(makeKing()); // 'King Henry II'
// console.log(makeKing()); // 'King Henry III'

// let makeKing = (name = "Henry") => `King ${name}`;
// console.log(makeKing()); // King Henry

// function makeKing(name = "Henry", numerals = "VIII") {
//   return `King ${name} ${numerals}`;
// }

// function makeKing() {
//   let name = "Henry";
//   let numerals = "VIII";
//   return `King ${name} ${numerals}`;
// }
// console.log(makeKing()); // King Henry VIII

// function makeKing(name = "Henry", numerals = name) {
//   return `King ${name} ${numerals}`;
// }
// console.log(makeKing()); // King Henry Henry

// // 调用时不传第一个参数会报错
// function makeKing(name = numerals, numerals = "VIII") {
//   return `King ${name} ${numerals}`;
// }

// console.log(makeKing("s")); //King s VIII
// console.log(makeKing()); 
// //ReferenceError: Cannot access 'numerals' before initialization

// // 调用时不传第二个参数会报错
// function makeKing(name = "Henry", numerals = defaultNumeral) {
//   let defaultNumeral = "VIII";
//   return `King ${name} ${numerals}`;
// }

// console.log(makeKing('a',"s")); //King a s
// console.log(makeKing()); 
// //ReferenceError: defaultNumeral is not defined