const request = require('request');

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

    //console.log(data);
    if (data[0]) {
    callback(error, data[0].description);
    } else {
      callback('Breed not found', null);
    }

  });

};

module.exports = {fetchBreedDescription};
