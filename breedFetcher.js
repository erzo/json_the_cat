const request = require('request');

// errors and data validation are two different concerns


const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function (error,response,body) {
  // console.log(body);
  // console.log(body[0]);
  const data = JSON.parse(body);
  // console.log(data[0]);

    // if (data.length === 0) {
    //   console.log('please try again');
    // } else {
    //     console.log(data[0].description);
    //   }

    callback(error, data[0].description);

  });

};

module.exports = {fetchBreedDescription};
