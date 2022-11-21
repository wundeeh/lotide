// IMPORTS
const assertEqual = require("./assertEqual");


// TAIL
const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};


module.exports = tail;