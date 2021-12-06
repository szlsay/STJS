// function double(value) {
//   setTimeout(() => setTimeout(console.log, 0, value * 2), 1000);
// }
// double(3);
// // 6（大约 1000 毫秒之后）

// function double(value, callback) {
//   setTimeout(() => callback(value * 2), 1000);
// }
// double(3, (x) => console.log(`I was given: ${x}`));
// // I was given: 6（大约 1000 毫秒之后）

// function double(value, success, failure) {
//   setTimeout(() => {
//     try {
//       if (typeof value !== 'number') {
//         throw 'Must provide number as first argument';
//       }
//       success(2 * value);
//     } catch (e) {
//       failure(e);
//     }
//   }, 1000);
// }
// const successCallback = (x) => console.log(`Success: ${x}`);
// const failureCallback = (e) => console.log(`Failure: ${e}`);
// double(3, successCallback, failureCallback);
// double('b', successCallback, failureCallback);
// // Success: 6（大约 1000 毫秒之后）
// // Failure: Must provide number as first argument（大约 1000 毫秒之后）

function double(value, success, failure) {
  setTimeout(() => {
    try {
      if (typeof value !== 'number') {
        throw 'Must provide number as first argument';
      }
      success(2 * value);
    } catch (e) {
      failure(e);
    }
  }, 1000);
}
const successCallback = (x) => {
  double(x, (y) => console.log(`Success: ${y}`));
};
const failureCallback = (e) => console.log(`Failure: ${e}`);
double(3, successCallback, failureCallback);
// Success: 12（大约 1000 毫秒之后）