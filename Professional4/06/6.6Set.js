// // 使用数组初始化集合
// const s1 = new Set(["val1", "val2", "val3"]);
// console.log(s1.size); // 3
// // 使用自定义迭代器初始化集合
// const s2 = new Set({
//   [Symbol.iterator]: function* () {
//     yield "val1";
//     yield "val2";
//     yield "val3";
//   },
// });
// console.log(s2.size); // 3

// const s = new Set();
// console.log(s.has("Matt")); // false
// console.log(s.size); // 0
// s.add("Matt").add("Frisbie");
// console.log(s.has("Matt")); // true
// console.log(s.size); // 2

// s.delete("Matt");
// console.log(s.has("Matt")); // false
// console.log(s.has("Frisbie")); // true
// console.log(s.size); // 1

// s.clear(); // 销毁集合实例中的所有值
// console.log(s.has("Matt")); // false
// console.log(s.has("Frisbie")); // false
// console.log(s.size); // 0

// const s = new Set().add("val1");
// s.add("val2").add("val3");
// console.log(s.size); // 3

// const s = new Set();
// const functionVal = function () {};
// const symbolVal = Symbol();
// const objectVal = new Object();
// s.add(functionVal);
// s.add(symbolVal);
// s.add(objectVal);
// console.log(s.has(functionVal)); // true
// console.log(s.has(symbolVal)); // true
// console.log(s.has(objectVal)); // true
// // SameValueZero 检查意味着独立的实例不会冲突
// console.log(s.has(function () {})); // false

// const s = new Set();
// const objVal = {},
//   arrVal = [];
// s.add(objVal);
// s.add(arrVal);
// objVal.bar = "bar";
// arrVal.push("bar");
// console.log(s.has(objVal)); // true
// console.log(s.has(arrVal)); // true

// const s = new Set();
// s.add("foo");
// console.log(s.size); // 1
// s.add("foo");
// console.log(s.size); // 1
// // 集合里有这个值
// console.log(s.delete("foo")); // true
// // 集合里没有这个值
// console.log(s.delete("foo")); // false

// const s = new Set(["val1", "val2", "val3"]);
// console.log(s.values === s[Symbol.iterator]); // true
// console.log(s.keys === s[Symbol.iterator]); // true
// for (let value of s.values()) {
//   console.log(value);
// }
// // val1
// // val2
// // val3
// for (let value of s[Symbol.iterator]()) {
//   console.log(value);
// }
// // val1
// // val2
// // val3

// const s = new Set(["val1", "val2", "val3"]);
// console.log([...s]); // ["val1", "val2", "val3"]

// const s = new Set(["val1", "val2", "val3"]);
// for (let pair of s.entries()) {
//   console.log(pair);
// }
// // ["val1", "val1"]
// // ["val2", "val2"]
// // ["val3", "val3"]

// const s = new Set(["val1", "val2", "val3"]);
// s.forEach((val, dupVal) => console.log(`${val} -> ${dupVal}`));
// // val1 -> val1
// // val2 -> val2
// // val3 -> val3

// const s1 = new Set(["val1"]);
// // 字符串原始值作为值不会被修改
// for (let value of s1.values()) {
//   value = "newVal";
//   console.log(value); // newVal
//   console.log(s1.has("val1")); // true
// }
// const valObj = { id: 1 };
// const s2 = new Set([valObj]);
// // 修改值对象的属性，但对象仍然存在于集合中
// for (let value of s2.values()) {
//   value.id = "newVal";
//   console.log(value); // {id: "newVal"}
//   console.log(s2.has(valObj)); // true
// }
// console.log(valObj); // {id: "newVal"}

class XSet extends Set {
  union(...sets) {
    return XSet.union(this, ...sets);
  }
  intersection(...sets) {
    return XSet.intersection(this, ...sets);
  }
  difference(set) {
    return XSet.difference(this, set);
  }
  symmetricDifference(set) {
    return XSet.symmetricDifference(this, set);
  }
  cartesianProduct(set) {
    return XSet.cartesianProduct(this, set);
  }
  powerSet() {
    return XSet.powerSet(this);
  }
  // 返回两个或更多集合的并集
  static union(a, ...bSets) {
    const unionSet = new XSet(a);
    for (const b of bSets) {
      for (const bValue of b) {
        unionSet.add(bValue);
      }
    }
    return unionSet;
  }
  // 返回两个或更多集合的交集
  static intersection(a, ...bSets) {
    const intersectionSet = new XSet(a);
    for (const aValue of intersectionSet) {
      for (const b of bSets) {
        if (!b.has(aValue)) {
          intersectionSet.delete(aValue);
        }
      }
    }
    return intersectionSet;
  }
  // 返回两个集合的差集
  static difference(a, b) {
    const differenceSet = new XSet(a);
    for (const bValue of b) {
      if (a.has(bValue)) {
        differenceSet.delete(bValue);
      }
    }
    return differenceSet;
  }
  // 返回两个集合的对称差集
  static symmetricDifference(a, b) {
    // 按照定义，对称差集可以表达为
    return a.union(b).difference(a.intersection(b));
  }
  // 返回两个集合（数组对形式）的笛卡儿积
  // 必须返回数组集合，因为笛卡儿积可能包含相同值的对
  static cartesianProduct(a, b) {
    const cartesianProductSet = new XSet();
    for (const aValue of a) {
      for (const bValue of b) {
        cartesianProductSet.add([aValue, bValue]);
      }
    }
    return cartesianProductSet;
  }
  // 返回一个集合的幂集
  static powerSet(a) {
    const powerSet = new XSet().add(new XSet());
    for (const aValue of a) {
      for (const set of new XSet(powerSet)) {
        powerSet.add(new XSet(set).add(aValue));
      }
    }
    return powerSet;
  }
}
