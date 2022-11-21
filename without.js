// IMPORTS
const assertEqual       = require("./assertEqual");
const eqArrays          = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");


// WITHOUT
const without = function(source, remove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < remove.length; j++){
      if (source[i] === remove[j]) {
        source[i] += null;
    } else {
      newArray.push(source[i]);
      break;
     }
    }
  }
  return newArray;
}

module.exports = without;