// IMPORTS
const assertEqual = require("./assertEqual");


//  FIND KEY BY VALUE
const findKeyByValue = function(input,answer) {
  for (let key of Object.keys(input)) {
    if (input[key].includes(answer)) {
     return key;
    }
  }
  return;
};


// TEST
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));

module.exports = findKeyByValue;