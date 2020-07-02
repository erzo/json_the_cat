const { fetchBreedDescription } = require('./breedFetcher');

// calling the function()

let input = process.argv.slice(2);

fetchBreedDescription(input, function(error, description) {
  if (error === null) {
    console.log(description);
  } else {
    console.log(error);
  }
});