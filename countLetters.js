// IMPORTS
const assertEqual = require("./assertEqual");


// COUNT LETTERS
const countLetters = function(string) {
  let lowerCase = string.toLowerCase();
  const answer = {};

  for (letter of lowerCase) {
    if (!answer[letter]) {
      answer[letter] = 1;
    } else {
      answer[letter]++;
    }
  }
  return answer;
}

module.exports = countLetters;