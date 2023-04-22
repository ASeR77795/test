let userAge = 36;
let userInfo = `Фрилансер ${userAge}`; /*Обратные скобки*/
console.log(userInfo);

let userHeight = 145 / 0;
console.log(userHeight); /* Значение infinite, не NaN*/

let userName;
console.log(typeof userName); /* значение undefined, не null*/

let userSize = "45" / "8";
console.log(typeof userSize); /*значение number.*/

console.log("35" + -"22");
// вернет 13
console.log("35" * "22");
// вернет 770
// console.log('550' > (22++));

let userCounter = 0;
let newUser = userCounter++;
console.log(newUser);

console.log((!false && 11) || (18 && !""));

let name = 0;
console.log(name ?? "без имени");
