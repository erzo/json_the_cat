const { fetchBreedDescription } = require('./breedFetcher');

let input = process.argv.slice(2);

// calling the function fetchBreedDescription()
fetchBreedDescription(input, function(error, description) {
  if (error === null) {
    console.log(description);
  } else {
    console.log(error);
  }
});