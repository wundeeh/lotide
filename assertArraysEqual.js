// IMPORTS
const assertEqual = require("./assertEqual");


// ASSERT ARRAYS EQUAL
const assertArraysEqual = function (arr1,arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log("The arrays are not equal");
      return false;
  } 
    if (arr1[i] === arr2[i]) {
    }
  }
  console.log("The arrays are equal");
  return true;
}


module.exports = assertArraysEqual;