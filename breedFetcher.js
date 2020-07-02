const request = require('request');

let myArgs = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${myArgs}`, function(error,response,body) {
  // console.log(body);
  // console.log(body[0]);
  const data = JSON.parse(body);
  // console.log(data[0]);
  if (data.length === 0) {
    console.log('please try again');
  } else {
    console.log(data[0].description);
  }
});

// errors and data validation are two different concerns


