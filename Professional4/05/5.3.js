// let s1 = "some text";
// console.log(typeof s1) //string
// s1.color = "red";
// console.log(typeof s1) //string
// console.log(s1.color); // undefined

// let obj = new Object("some text");
// console.log(obj instanceof String); // true

// let value = "25";
// let number = Number(value); // 转型函数
// console.log(typeof number); // "number"
// let obj = new Number(value); // 构造函数
// console.log(typeof obj); // "object"

// let booleanObject = new Boolean(true);
// console.log(booleanObject); //[Boolean: true]
// console.log(typeof booleanObject); //object
// console.log(booleanObject.valueOf()); //true

// let falseObject = new Boolean(false);
// let result = falseObject && true;
// console.log(result); // true
// let falseValue = false;
// result = falseValue && true;
// console.log(result); // false

// console.log(typeof falseObject); // object
// console.log(typeof falseValue); // boolean
// console.log(falseObject instanceof Boolean); // true
// console.log(falseValue instanceof Boolean); // false

// let numberObject = new Number(10);
// console.log(numberObject); //[Number: 10]
// console.log(typeof numberObject); //object
// console.log(numberObject.valueOf()); //10

// let num = 10;
// console.log(num.toString()); // "10"
// console.log(num.toString(2)); // "1010"
// console.log(num.toString(8)); // "12"
// console.log(num.toString(10)); // "10"
// console.log(num.toString(16)); // "a"

// let num = 10.005;
// console.log(num.toFixed(2)); // "10.01"

// let num = 10;
// console.log(num.toExponential(1)); // "1.0e+1"

// console.log(Number.isInteger(1)); // true
// console.log(Number.isInteger(1.00)); // true
// console.log(Number.isInteger(1.01)); // false

// console.log(Number.isSafeInteger(-1 * (2 ** 53))); // false
// console.log(Number.isSafeInteger(-1 * (2 ** 53) + 1)); // true
// console.log(Number.isSafeInteger(2 ** 53)); // false
// console.log(Number.isSafeInteger((2 ** 53) - 1)); // true

// let stringObject = new String('hello');
// console.log(stringObject); //[String: 'hello']
// console.log(typeof stringObject); //object
// console.log(stringObject.valueOf()); //'hello'

// let stringValue = "hello world";
// console.log(stringValue.length); // "11"

// let message = "abcde";
// console.log(message.charAt(2)); // "c"
// // Unicode "Latin small letter C"的编码是 U+0063
// console.log(message.charCodeAt(2)); // 99
// // 十进制 99 等于十六进制 63
// console.log(99 === 0x63); // true

// // Unicode "Latin small letter A"的编码是 U+0061
// // Unicode "Latin small letter B"的编码是 U+0062
// // Unicode "Latin small letter C"的编码是 U+0063
// // Unicode "Latin small letter D"的编码是 U+0064
// // Unicode "Latin small letter E"的编码是 U+0065
// console.log(String.fromCharCode(0x61, 0x62, 0x63, 0x64, 0x65)); // "abcde"
// // 0x0061 === 97
// // 0x0062 === 98
// // 0x0063 === 99
// // 0x0064 === 100
// // 0x0065 === 101
// console.log(String.fromCharCode(97, 98, 99, 100, 101)); // "abcde"

// "smiling face with smiling eyes" 表情符号的编码是 U+1F60A
// 0x1F60A === 128522
// let message = "ab☺de";
// console.log(message.length); // 5
// console.log(message.charAt(1)); // b
// console.log(message.charAt(2)); // ☺
// console.log(message.charAt(3)); // d
// console.log(message.charAt(4)); // e
// console.log(message.charCodeAt(1)); // 98
// console.log(message.charCodeAt(2)); // 9786
// console.log(message.charCodeAt(3)); // 100
// console.log(message.charCodeAt(4)); // 101
// console.log(String.fromCodePoint(0x1F60A)); // ☺
// console.log(String.fromCharCode(97, 98, 55357, 56842, 100, 101)); // ab☺de

// let message = "ab☺de";
// console.log(message.codePointAt(1)); // 98
// console.log(message.codePointAt(2)); // 9786
// console.log(message.codePointAt(3)); // 100
// console.log(message.codePointAt(4)); // 101

// console.log([..."ab☺de"]); // ["a", "b", "☺", "d", "e"]

// console.log(String.fromCharCode(97, 98, 55357, 56842, 100, 101)); // ab☺de
// console.log(String.fromCodePoint(97, 98, 128522, 100, 101)); // ab☺de

// // U+00C5：上面带圆圈的大写拉丁字母 A
// console.log(String.fromCharCode(0x00C5)); // Å
// // U+212B：长度单位“埃”
// console.log(String.fromCharCode(0x212B)); // Å
// // U+004：大写拉丁字母 A
// // U+030A：上面加个圆圈
// console.log(String.fromCharCode(0x0041, 0x030A)); // Å

// let a1 = String.fromCharCode(0x00C5),
// a2 = String.fromCharCode(0x212B),
// a3 = String.fromCharCode(0x0041, 0x030A);
// console.log(a1, a2, a3); // Å, Å, Å
// console.log(a1 === a2); // false
// console.log(a1 === a3); // false
// console.log(a2 === a3); // false

// let a1 = String.fromCharCode(0x00C5),
// a2 = String.fromCharCode(0x212B),
// a3 = String.fromCharCode(0x0041, 0x030A);
// // U+00C5 是对 0+212B 进行 NFC/NFKC 规范化之后的结果
// console.log(a1 === a1.normalize("NFD")); // false
// console.log(a1 === a1.normalize("NFC")); // true
// console.log(a1 === a1.normalize("NFKD")); // false
// console.log(a1 === a1.normalize("NFKC")); // true
// // U+212B 是未规范化的
// console.log(a2 === a2.normalize("NFD")); // false
// console.log(a2 === a2.normalize("NFC")); // false
// console.log(a2 === a2.normalize("NFKD")); // false
// console.log(a2 === a2.normalize("NFKC")); // false
// // U+0041/U+030A 是对 0+212B 进行 NFD/NFKD 规范化之后的结果
// console.log(a3 === a3.normalize("NFD")); // true
// console.log(a3 === a3.normalize("NFC")); // false
// console.log(a3 === a3.normalize("NFKD")); // true
// console.log(a3 === a3.normalize("NFKC")); // false

// // 选择同一种规范化形式可以让比较操作符返回正确的结果：
// let a1 = String.fromCharCode(0x00C5),
// a2 = String.fromCharCode(0x212B),
// a3 = String.fromCharCode(0x0041, 0x030A);
// console.log(a1.normalize("NFD") === a2.normalize("NFD")); // true
// console.log(a2.normalize("NFKC") === a3.normalize("NFKC")); // true
// console.log(a1.normalize("NFC") === a3.normalize("NFC")); // true

// let stringValue = "hello ";
// let result = stringValue.concat("world");
// console.log(result); // "hello world"
// console.log(stringValue); // "hello"

// let stringValue = "hello ";
// let result = stringValue.concat("world", "!");
// console.log(result); // "hello world!"
// console.log(stringValue); // "hello"

// let stringValue = "hello world";
// console.log(stringValue.slice(3)); // "lo world"
// console.log(stringValue.substring(3)); // "lo world"
// console.log(stringValue.substr(3)); // "lo world"
// console.log(stringValue.slice(3, 7)); // "lo w"
// console.log(stringValue.substring(3,7)); // "lo w"
// console.log(stringValue.substr(3, 7)); // "lo worl"

// let stringValue = "hello world";
// console.log(stringValue.slice(-3)); // "rld"
// console.log(stringValue.substring(-3)); // "hello world"
// console.log(stringValue.substr(-3)); // "rld"
// console.log(stringValue.slice(3, -4)); // "lo w"
// console.log(stringValue.substring(3, -4)); // "hel"
// console.log(stringValue.substr(3, -4)); // "" (empty string)

// let stringValue = "hello world";
// console.log(stringValue.indexOf("o")); // 4
// console.log(stringValue.lastIndexOf("o")); // 7

// let stringValue = "hello world";
// console.log(stringValue.indexOf("o", 6)); // 7
// console.log(stringValue.lastIndexOf("o", 6)); // 4

// let stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
// let positions = new Array();
// let pos = stringValue.indexOf("e");
// while(pos > -1) {
//   positions.push(pos);
//   pos = stringValue.indexOf("e", pos + 1);
// }
// console.log(positions); // [3,24,32,35,52]

// let message = "foobarbaz";
// console.log(message.startsWith("foo")); // true
// console.log(message.startsWith("bar")); // false
// console.log(message.endsWith("baz")); // true
// console.log(message.endsWith("bar")); // false
// console.log(message.includes("bar")); // true
// console.log(message.includes("qux")); // false

// let message = "foobarbaz";
// console.log(message.startsWith("foo")); // true
// console.log(message.startsWith("foo", 1)); // false
// console.log(message.includes("bar")); // true
// console.log(message.includes("bar", 4)); // false

// let message = "foobarbaz";
// console.log(message.endsWith("bar")); // false
// console.log(message.endsWith("bar", 6)); // true

// let stringValue = " hello world ";
// let trimmedStringValue = stringValue.trim();
// console.log(stringValue); // " hello world "
// console.log(trimmedStringValue); // "hello world"

// let stringValue = "na ";
// console.log(stringValue.repeat(16) + "batman");
// // na na na na na na na na na na na na na na na na batman

// let stringValue = "foo";
// console.log(stringValue.padStart(6)); // " foo"
// console.log(stringValue.padStart(9, ".")); // "......foo"
// console.log(stringValue.padEnd(6)); // "foo "
// console.log(stringValue.padEnd(9, ".")); // "foo......"

// let stringValue = "foo";
// console.log(stringValue.padStart(8, "bar")); // "barbafoo"
// console.log(stringValue.padStart(2)); // "foo"
// console.log(stringValue.padEnd(8, "bar")); // "foobarba"
// console.log(stringValue.padEnd(2)); // "foo"

// let message = "abc";
// let stringIterator = message[Symbol.iterator]();
// console.log(stringIterator.next()); // {value: "a", done: false}
// console.log(stringIterator.next()); // {value: "b", done: false}
// console.log(stringIterator.next()); // {value: "c", done: false}
// console.log(stringIterator.next()); // {value: undefined, done: true}

// for (const c of "abcde") {
//   console.log(c);
// }
// // a
// // b
// // c
// // d
// // e

// let message = "abcde";
// console.log([...message]); // ["a", "b", "c", "d", "e"]
// console.log(...message); //a b c d e

// let stringValue = "hello world";
// console.log(stringValue.toLocaleUpperCase()); // "HELLO WORLD"
// console.log(stringValue.toUpperCase()); // "HELLO WORLD"
// console.log(stringValue.toLocaleLowerCase()); // "hello world"
// console.log(stringValue.toLowerCase()); // "hello world"

// let text = "cat, bat, sat, fat";
// let pattern = /.at/;
// // 等价于 pattern.exec(text)
// let matches = text.match(pattern);
// console.log(matches.index); // 0
// console.log(matches[0]); // "cat
// console.log(pattern.lastIndex); // 0

// let text = "cat, bat, sat, fat";
// let pos = text.search(/at/);
// console.log(pos); // 1

// let text = "cat, bat, sat, fat";
// let result = text.replace("at", "ond");
// console.log(result); // "cond, bat, sat, fat"
// result = text.replace(/at/g, "ond");
// console.log(result); // "cond, bond, sond, fond"

// let text = "cat, bat, sat, fat";
// result = text.replace(/(.at)/g, "word ($1)");
// console.log(result); // word (cat), word (bat), word (sat), word (fat)

// function htmlEscape(text) {
//   return text.replace(/[<>"&]/g, function (match, pos, originalText) {
//     switch (match) {
//       case "<":
//         return "&lt;";
//       case ">":
//         return "&gt;";
//       case "&":
//         return "&amp;";
//       case '"':
//         return "&quot;";
//     }
//   });
// }
// console.log(htmlEscape('<p class="greeting">Hello world!</p>'));
// // "&lt;p class=&quot;greeting&quot;&gt;Hello world!</p>"

// let colorText = "red,blue,green,yellow";
// let colors1 = colorText.split(","); // ["red", "blue", "green", "yellow"]
// let colors2 = colorText.split(",", 2); // ["red", "blue"]
// let colors3 = colorText.split(/[^,]+/); // ["", ",", ",", ",", ""]
// console.log(colors1)
// console.log(colors2)
// console.log(colors3)

let stringValue = "yellow";
console.log(stringValue.localeCompare("brick")); // 1
console.log(stringValue.localeCompare("yellow")); // 0
console.log(stringValue.localeCompare("zoo")); // -1

function determineOrder(value) {
  let result = stringValue.localeCompare(value);
  if (result < 0) {
    console.log(`The string 'yellow' comes before the string '${value}'.`);
  } else if (result > 0) {
    console.log(`The string 'yellow' comes after the string '${value}'.`);
  } else {
    console.log(`The string 'yellow' is equal to the string '${value}'.`);
  }
}
determineOrder("brick");
determineOrder("yellow");
determineOrder("zoo");
