// const buf = new ArrayBuffer(16); // 在内存中分配 16 字节
// console.log(buf.byteLength); // 16

// const buf1 = new ArrayBuffer(16);
// const buf2 = buf1.slice(4, 12);
// console.log(buf2.byteLength); // 8

// const buf = new ArrayBuffer(16);
// // DataView 默认使用整个 ArrayBuffer
// const fullDataView = new DataView(buf);
// console.log(fullDataView.byteOffset); // 0
// console.log(fullDataView.byteLength); // 16
// console.log(fullDataView.buffer === buf); // true
// // 构造函数接收一个可选的字节偏移量和字节长度
// // byteOffset=0 表示视图从缓冲起点开始
// // byteLength=8 限制视图为前 8 个字节
// const firstHalfDataView = new DataView(buf, 0, 8);
// console.log(firstHalfDataView.byteOffset); // 0
// console.log(firstHalfDataView.byteLength); // 8
// console.log(firstHalfDataView.buffer === buf); // true
// // 如果不指定，则 DataView 会使用剩余的缓冲
// // byteOffset=8 表示视图从缓冲的第 9 个字节开始
// // byteLength 未指定，默认为剩余缓冲
// const secondHalfDataView = new DataView(buf, 8);
// console.log(secondHalfDataView.byteOffset); // 8
// console.log(secondHalfDataView.byteLength); // 8
// console.log(secondHalfDataView.buffer === buf); // true

// // 在内存中分配两个字节并声明一个 DataView
// const buf = new ArrayBuffer(2);
// const view = new DataView(buf);
// // 说明整个缓冲确实所有二进制位都是 0
// // 检查第一个和第二个字符
// console.log(view.getInt8(0)); // 0
// console.log(view.getInt8(1)); // 0
// // 检查整个缓冲
// console.log(view.getInt16(0)); // 0
// // 将整个缓冲都设置为 1
// // 255 的二进制表示是 11111111（ 2^8 - 1）
// view.setUint8(0, 255);
// // DataView 会自动将数据转换为特定的 ElementType
// // 255 的十六进制表示是 0xFF
// view.setUint8(1, 0xFF);
// // 现在，缓冲里都是 1 了
// // 如果把它当成二补数的有符号整数，则应该是-1
// console.log(view.getInt16(0)); // -1

// // 在内存中分配两个字节并声明一个 DataView
// const buf = new ArrayBuffer(2);
// const view = new DataView(buf);
// // 填充缓冲，让第一位和最后一位都是 1
// view.setUint8(0, 0x80); // 设置最左边的位等于 1
// view.setUint8(1, 0x01); // 设置最右边的位等于 1
// // 缓冲内容（为方便阅读，人为加了空格）
// // 0x8 0x0 0x0 0x1
// // 1000 0000 0000 0001
// // 按大端字节序读取 Uint16
// // 0x80 是高字节， 0x01 是低字节
// // 0x8001 = 2^15 + 2^0 = 32768 + 1 = 32769
// console.log(view.getUint16(0)); // 32769
// // 按小端字节序读取 Uint16
// // 0x01 是高字节， 0x80 是低字节
// // 0x0180 = 2^8 + 2^7 = 256 + 128 = 384
// console.log(view.getUint16(0, true)); // 384
// // 按大端字节序写入 Uint16
// view.setUint16(0, 0x0004);
// // 缓冲内容（为方便阅读，人为加了空格）
// // 0x0 0x0 0x0 0x4
// // 0000 0000 0000 0100
// console.log(view.getUint8(0)); // 0
// console.log(view.getUint8(1)); // 4
// // 按小端字节序写入 Uint16
// view.setUint16(0, 0x0002, true);
// // 缓冲内容（为方便阅读，人为加了空格）
// // 0x0 0x2 0x0 0x0
// // 0000 0010 0000 0000
// console.log(view.getUint8(0)); // 2
// console.log(view.getUint8(1)); // 0

// const buf = new ArrayBuffer(6);
// const view = new DataView(buf);
// // 尝试读取部分超出缓冲范围的值
// view.getInt32(4);
// // RangeError
// // 尝试读取超出缓冲范围的值
// view.getInt32(8);
// // RangeError
// // 尝试读取超出缓冲范围的值
// view.getInt32(-1);
// // RangeError
// // 尝试写入超出缓冲范围的值
// view.setInt32(4, 123);
// // RangeError

// const buf = new ArrayBuffer(1);
// const view = new DataView(buf);
// view.setInt8(0, 1.5);
// console.log(view.getInt8(0)); // 1
// view.setInt8(0, [4]);
// console.log(view.getInt8(0)); // 4
// view.setInt8(0, 'f');
// console.log(view.getInt8(0)); // 0
// view.setInt8(0, Symbol());
// // TypeError

// // 创建一个 12 字节的缓冲
// const buf = new ArrayBuffer(12);
// // 创建一个引用该缓冲的 Int32Array
// const ints = new Int32Array(buf);
// // 这个定型数组知道自己的每个元素需要 4 字节
// // 因此长度为 3
// console.log(ints.length); // 3
// // 创建一个长度为 6 的 Int32Array
// const ints2 = new Int32Array(6);
// // 每个数值使用 4 字节，因此 ArrayBuffer 是 24 字节
// console.log(ints2.length); // 6
// // 类似 DataView，定型数组也有一个指向关联缓冲的引用
// console.log(ints2.buffer.byteLength); // 24
// // 创建一个包含[2, 4, 6, 8]的 Int32Array
// const ints3 = new Int32Array([2, 4, 6, 8]);
// console.log(ints3.length); // 4
// console.log(ints3.buffer.byteLength); // 16
// console.log(ints3[2]); // 6
// // 通过复制 ints3 的值创建一个 Int16Array
// const ints4 = new Int16Array(ints3);
// // 这个新类型数组会分配自己的缓冲
// // 对应索引的每个值会相应地转换为新格式
// console.log(ints4.length); // 4
// console.log(ints4.buffer.byteLength); // 8
// console.log(ints4[2]); // 6
// // 基于普通数组来创建一个 Int16Array
// const ints5 = Int16Array.from([3, 5, 7, 9]);
// console.log(ints5.length); // 4
// console.log(ints5.buffer.byteLength); // 8
// console.log(ints5[2]); // 7
// // 基于传入的参数创建一个 Float32Array
// const floats = Float32Array.of(3.14, 2.718, 1.618);
// console.log(floats.length); // 3
// console.log(floats.buffer.byteLength); // 12
// console.log(floats[2]); // 1.6180000305175781

// // 定型数组的构造函数和实例都有一个 BYTES_PER_ELEMENT 属性，返回该类型数组中每个元素的大小：
// console.log(Int16Array.BYTES_PER_ELEMENT); // 2
// console.log(Int32Array.BYTES_PER_ELEMENT); // 4
// const ints = new Int32Array(1),
// floats = new Float64Array(1);
// console.log(ints.BYTES_PER_ELEMENT); // 4
// console.log(floats.BYTES_PER_ELEMENT); // 8

// // 如果定型数组没有用任何值初始化，则其关联的缓冲会以 0 填充：
// const ints = new Int32Array(4);
// console.log(ints[0]); // 0
// console.log(ints[1]); // 0
// console.log(ints[2]); // 0
// console.log(ints[3]); // 0

// const ints = new Int16Array([1, 2, 3]);
// const doubleints = ints.map(x => 2*x);
// console.log(doubleints instanceof Int16Array); // true

// const ints = new Int16Array([1, 2, 3]);
// for (const int of ints) {
//   console.log(int);
// }
// // 1
// // 2
// // 3
// console.log(Math.max(...ints)); // 3
