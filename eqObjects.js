// IMPORTS
const assertEqual = require("./assertEqual");
const eqArrays    = require("./eqArrays");


// EQUALISE OBJECTS
const eqObjects = function (object1, object2) {
  //console.log("object1 is", object1, "object2 is", object2);
  if (Object.keys(object2).length !== Object.keys(object1).length) {
    //console.log("keys are different length");
    return false;
  }

  if (Array.isArray(object1) && Array.isArray(object2)) {
   // console.log("both are arrays", object1, object2);
    return eqArrays(object1, object2);
    //} else {
  }

  for (const key of Object.keys(object1)) {
    //console.log("current key is", key);
    if (!Object.keys(object2).includes(key)) {
      //console.log("object2 doesnt have ", key);
      return false;
    } else if (
      typeof object1[key] === "object" &&
      typeof object2[key] === "object"
    ) {
      if (!eqObjects(object1[key], object2[key])) {
        // console.log(
        //   "key",
        //   key,
        //   "object1key",
        //   "object1[key]",
        //   "object2key",
        //   object2[key]
        //);
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      //console.log("simply not equal", object1[key], object2[key]);
      return false;
    }
  }
  //console.log("after everything");
  return true;
};

// TEST
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), true));

module.exports = eqObjects;