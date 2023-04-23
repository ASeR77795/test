const list = fetch("https://api.sampleapis.com/countries/countries");
list.then((data) => data.json()).then((countries) => console.log(countries));
