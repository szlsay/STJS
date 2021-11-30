let s1 = "2";
let s2 = "z";
let b = false;
let f = 1.1;
let o = {
  valueOf() {
    return -1;
  }
};

console.log(s1++); // 值变成数值 3
console.log(s2++); // 值变成 NaN
console.log(b++); // 值变成数值 1
console.log(f--); 
console.log(f); // 值变成 0.10000000000000009（因为浮点数不精确）
console.log(o--); 
console.log(o); // 值变成-2