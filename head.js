// IMPORTS
const assertEqual = require("./assertEqual");


// HEAD
function head(i) {
  if (i === null) {
    return undefined;
  } else {
  return i[0]; 
  }
}

module.exports = head;