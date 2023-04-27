let list = [];
const listPromise = fetch("https://api.sampleapis.com/countries/countries");
listPromise
  .then((data) => data.json())
  .then((countries) => {
    list.push(countries);
    console.log(list);
  });
