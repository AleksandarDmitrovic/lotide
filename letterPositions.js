const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  let index = 0;
  
  for (const letter of sentence) {
    
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
      
    }
    index ++;
  }

  return results;
};

const helloPhrase = 'hello';

assertArraysEqual(letterPositions(helloPhrase)['h'], [0]); // Should Pass
assertArraysEqual(letterPositions(helloPhrase)['e'], [1]); // Should Pass
assertArraysEqual(letterPositions(helloPhrase)['l'], [2, 3]); // Should Pass
assertArraysEqual(letterPositions(helloPhrase)['o'], [4]); // Should Pass

console.log('NEW TEST CASE SENTENCE');

const phrase = "lighthouse in the house";

assertArraysEqual(letterPositions(phrase)['h'], [3, 5, 15, 18]); // Should Pass
assertArraysEqual(letterPositions(phrase)['e'], [9, 16, 22]); // Should Pass
assertArraysEqual(letterPositions(phrase)['s'], [8, 21]); // Should Pass

module.exports = letterPositions;