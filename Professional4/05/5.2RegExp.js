// const re1 = /cat/g;
// console.log(re1); // "/cat/g"
// const re2 = new RegExp(re1);
// console.log(re2); // "/cat/g"
// const re3 = new RegExp(re1, "i");
// console.log(re3); // "/cat/i"

// let pattern1 = /\[bc\]at/i;
// console.log(pattern1.global); // false
// console.log(pattern1.ignoreCase); // true
// console.log(pattern1.multiline); // false
// console.log(pattern1.lastIndex); // 0
// console.log(pattern1.source); // "\[bc\]at"
// console.log(pattern1.flags); // "i"

// let pattern2 = new RegExp("\\[bc\\]at", "i");
// console.log(pattern2.global); // false
// console.log(pattern2.ignoreCase); // true
// console.log(pattern2.multiline); // false
// console.log(pattern2.lastIndex); // 0
// console.log(pattern2.source); // "\[bc\]at"
// console.log(pattern2.flags); // "i"

// let text = "ffmom and dad and baby";
// let pattern = /mom( and dad( and baby)?)?/gi;
// let matches = pattern.exec(text);
// console.log(matches.index); // 0
// console.log(matches.input); // "mom and dad and baby"
// console.log(matches[0]); // "mom and dad and baby"
// console.log(matches[1]); // " and dad and baby"
// console.log(matches[2]); // " and baby"

// let text = "cat, bat, sat, fat";
// let pattern = /.at/;
// let matches = pattern.exec(text);
// console.log(matches.index); // 0
// console.log(matches[0]); // cat
// console.log(pattern.lastIndex); // 0
// matches = pattern.exec(text);
// console.log(matches.index); // 0
// console.log(matches[0]); // cat
// console.log(pattern.lastIndex); // 0

// let text = "cat, bat, sat, fat";
// let pattern = /.at/g;
// let matches = pattern.exec(text);
// console.log(matches.index); // 0
// console.log(matches[0]); // cat
// console.log(pattern.lastIndex); // 3
// matches = pattern.exec(text);
// console.log(matches.index); // 5
// console.log(matches[0]); // bat
// console.log(pattern.lastIndex); // 8
// matches = pattern.exec(text);
// console.log(matches.index); // 10
// console.log(matches[0]); // sat
// console.log(pattern.lastIndex); // 13

// let text = "cat, bat, sat, fat";
// let pattern = /.at/y;
// let matches = pattern.exec(text);
// console.log(matches.index); // 0
// console.log(matches[0]); // cat
// console.log(pattern.lastIndex); // 3
// // 以索引 3 对应的字符开头找不到匹配项，因此 exec()返回 null
// // exec()没找到匹配项，于是将 lastIndex 设置为 0
// matches = pattern.exec(text);
// console.log(matches); // null
// console.log(pattern.lastIndex); // 0
// // 向前设置 lastIndex 可以让粘附的模式通过 exec()找到下一个匹配项：
// pattern.lastIndex = 5;
// matches = pattern.exec(text);
// console.log(matches.index); // 5
// console.log(matches[0]); // bat
// console.log(pattern.lastIndex); // 8

// let text = "000-00-0000";
// let pattern = /\d{3}-\d{2}-\d{4}/;
// if (pattern.test(text)) {
//   console.log("The pattern was matched.");
// }

// let pattern = new RegExp("\\[bc\\]at", "gi");
// console.log(pattern.toString()); // /\[bc\]at/gi
// console.log(pattern.toLocaleString()); // /\[bc\]at/gi
// console.log(pattern.valueOf());

// let text = "this has been a short summer";
// let pattern = /(.)hort/g;
// if (pattern.test(text)) {
// console.log(RegExp.input); // this has been a short summer
// console.log(RegExp.leftContext); // this has been a
// console.log(RegExp.rightContext); // summer
// console.log(RegExp.lastMatch); // short
// console.log(RegExp.lastParen); // s
// }

// let text = "this has been a short summer";
// let pattern = /(.)hort/g;
// /*
// * 注意： Opera 不支持简写属性名
// * IE 不支持多行匹配
// */
// if (pattern.test(text)) {
// console.log(RegExp.$_); // this has been a short summer
// console.log(RegExp["$`"]); // this has been a
// console.log(RegExp["$'"]); // summer
// console.log(RegExp["$&"]); // short
// console.log(RegExp["$+"]); // s
// }

let text = "this has been a short summer";
let pattern = /(..)or(.)/g;
if (pattern.test(text)) {
  console.log(RegExp.$1); // sh
  console.log(RegExp.$2); // t
}