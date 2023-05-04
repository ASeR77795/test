// Array.prototype.last = function () {
//   if (this.length === 0) {
//     return -1;
//   } else {
//     return this[this.length - 1];
//   }
// };

// const arr = [1, 2, 3, 4, 5];
// arr.last(); // 3
// console.log(arr.last());
// /**
//  * @param {number} n
//  * @return {Function} counter
//  */
// var createCounter = (n) => () => n++;

// const counter = createCounter(10);
// // counter(); // 10
// // counter(); // 11
// // counter(); // 12
// console.log(counter());
// console.log(counter());
// console.log(counter());
// /**
//  * @param {number} millis
//  */
// async function sleep(millis) {
//   setTimeout(() => {

//   }, millis);
// }

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
/**
//  * @param {integer} init
//  * @return { increment: Function, decrement: Function, reset: Function }
//  */
// let createCounter = function (init) {
//   let count = init;
//   const increment = () => {
//     return ++count;
//   };
//   const decrement = () => {
//     return --count;
//   };
//   const reset = () => {
//     return (count = init);
//   };
//   return {
//     increment,
//     decrement,
//     reset,
//   };
// };

// const counter = createCounter(5); // 4
// // 6
// // 5
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
