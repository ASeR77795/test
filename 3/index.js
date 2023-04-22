// const person = {
//   name: "Pasha",
//   age: 27,
//   comments: 23,
// };
// const { name, age, comments } = person;
// console.log(name);
// console.log(age);
// console.log(comments);

// const newPost = (person, addDate = Date()) => {
//   return {
//     ...person,
//     addDate,
//   };
// };
// const firstPoste = {
//   id: 1,
//   nick: "Pasha",
// };
// const result = newPost(person);

// const myArr = [1, 2, 3, 4];
// myArr.pop();
// console.log(myArr);
// const myArr2 = myArr.pop();
// console.log(myArr2);
// console.log(myArr);
// const printReversedWordBySymbol = (text) => {
//   for (let i = text.length - 1; i >= 0; i--) {
//     console.log(text[i]);
//   }
// };
// printReversedWordBySymbol("Paul");
// const countChars = (text, elem) => {
//   const modText = text.toLowerCase();
//   console.log(text.length);
//   let count = 0;
//   for (let i = 0; i < modText.length; i++) {
//     if (modText[i] === elem.toLowerCase()) {
//       count += 1;
//     }
//   }
//   return count;
// };
// const result = countChars("paul helloaA", "a");
// console.log(result);
// const even = (text) => {
//   let result = "";
//   for (let i = 0; i < text.length; i++) {
//     if (i % 2 === 0) {
//       result = `${result}${text[i]}`;
//     }
//   }

//   return result;
// };
// const l = even("123456789");
// console.log(l);
// const filterString = (str, elem) => {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== elem) {
//       result = result + str[i];
//     }
//   }
//   return result;
// };
// const str = filterString("IIIiiiIII", "i");
// console.log(str);
// const encrypt = (str) => {
//   let text = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] % 2 === 0) {
//       text += str[i + 1];
//       console.log(text);
//     }
//     if (str[i] % 2 !== 0) {
//       text += str[i - 1];
//       console.log(text);
//     }
//   }
//   //   if (srt.length % 2 !== 0) {
//   //   }
// };
// const test = encrypt("pavel");
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };
// console.log(twoSum([2, 7, 11, 15], 9));
// var addTwoNumbers = function (l1, l2) {
//   const sum = +l1.reverse().join("") + +l2.reverse().join("");
//   const result = sum
//     .toString()
//     .split("")
//     .reverse()
//     .map((item) => +item);
//   return result;
// };
// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
// var isPalindrome = function (x) {
//   return x === +x.toString().split("").reverse().join("");
// };
// console.log(isPalindrome(121));
// var longestCommonPrefix = function (strs) {
//   let string = "";
//   console.log(string);
//   for (let i = 0; i < strs[1].length; i++) {
//     if (strs[0][i] === strs[1][i] && strs[0][i] === strs[2][i]) {
//       string = `${string}${strs[0][i]}`;
//     }
//   }
//   return string;
// };
var longestCommonPrefix = function (a) {
  let size = a.length;

  if (size === 0) return "";

  if (size === 1) return a[0];

  a.sort();

  let end = Math.min(a[0].length, a[size - 1].length);

  let i = 0;
  while (i < end && a[0][i] == a[size - 1][i]) i++;

  let pre = a[0].substring(0, i);
  return pre;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
f;
