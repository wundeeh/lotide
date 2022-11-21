// IMPORTS
const assertEqual = require("../assertEqual");
const assertArraysEqual = require("../assertArraysEqual");

// TEST
let arr4 = [1, 2, 3];
let arr5 = [1, 2, 3];
(assertEqual(assertArraysEqual(arr4, arr5), true));