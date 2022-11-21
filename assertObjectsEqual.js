// IMPORTS
const assertEqual = require("./assertEqual");
const eqArrays    = require("./eqArrays");
const eqObjects   = require("./eqObjects");

// ASSERT OBJECTS EQUAL
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  eqObjects(actual, expected) ?
    console.log(`Objects are equal: "${inspect(actual)}" === "${inspect(expected)}"`) :
    console.log(`Objects are NOT equal: "${inspect(actual)}" !== "${inspect(expected)}"`);
};

// TEST
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(ab,ba);
assertObjectsEqual(cd,dc);

module.exports = assertObjectsEqual;