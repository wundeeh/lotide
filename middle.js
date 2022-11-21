// IMPORTS
const assertEqual       = require("./assertEqual");
const eqArrays          = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");


const middle = function(arr) {
  let newArray = [];
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    let midArray = Math.round(arr.length / 2);
    newArray.push(midArray, midArray + 1);
    return newArray;
  } else {
    let midArray = Math.round(arr.length / 2);
    newArray.push(midArray);
    return newArray;
  }
}

module.exports = middle;