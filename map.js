// IMPORTS
const assertEqual       = require("./assertEqual");
const eqArrays          = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");


// MAP
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, cb) {
  const results = [];
  for (let item of array) {
    results.push(cb(item));
  }
  return results;
}

// TEST
// const results1 = map(words, word => word[0]);
// console.log(results1);

module.exports = map;