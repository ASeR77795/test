// const url = "https://api.sampleapis.com/countries/countries";
// const delay = (ms) => {
//   return new Promise((resolve, reject) => {
//     return setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// };
// const fetchAsyncTodos = async () => {
//   await delay(2000);
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// };
// fetchAsyncTodos();
// const xml = new XMLHttpRequest();
// const list = document.querySelector(".list");

// // xml.onreadystatechange = function () {
// //   console.log(this.readyState);
// //   console.log(this.status);
// //   console.log(JSON.parse(this.responseText));
// // };
// // xml.open("GET", url);
// // xml.send();
// let data1;
// fetch(url)
//   .then((data) => data.text())
//   .then((data) => (data1 = JSON.parse(data)));

// data1.forEach((element) => {
//   const h1 = document.createElement("h1");
//   const ob = Object.entries(element);
//   console.log(ob);
// });
