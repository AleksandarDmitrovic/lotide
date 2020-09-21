const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  let letterCount = {};

  for (const letter of sentence) {
    // console.log(letter);
    if (letter !== ' ') {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  }

  return letterCount;
};

const phrase = "lighthouse in the house";
console.log(countLetters(phrase));

assertEqual(countLetters(phrase)['l'], 1); //Pass Number of l
assertEqual(countLetters(phrase)['e'], 3); //Pass
assertEqual(countLetters(phrase)['u'], 2); //Pass
assertEqual(countLetters(phrase)['h'], 4); //Pass

module.exports = countLetters;