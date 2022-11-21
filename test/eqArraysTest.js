// IMPORTS
const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// TEST
let arr4 = [1, 2, 3];
let arr5 = [1, 2, 3];
(assertEqual(eqArrays(arr4, arr5), true));