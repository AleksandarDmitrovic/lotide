const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


// The array to work with
// The callback (which Lodash calls "predicate")
// ...


const takeUntil = function(array, callback) {
  const results = [];
  
  for (const item of array) {
    if (callback(item)) {
      return results;
    } else {
      results.push(item);
    }
  }
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
// Expected Output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]


// TESTING takeUntil FUNCTION

const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(takeUntil(words, word => word === 'to'), ["ground", "control"]); // Should Pass

const phrases = ['hello', 'bonjour', 'zdravo', 'hola', 'ciao', 'bye', 'hasta luego'];
assertArraysEqual(takeUntil(phrases, phrase => phrase.length < 4), ['hello', 'bonjour', 'zdravo', 'hola', 'ciao']); // Should Pass

const numbers = [100, 54, 33, 14, 67, 77, 83, 60, 90]; //
assertArraysEqual(takeUntil(numbers, number => number < 20), [100, 54, 33]); // Should Pass

module.exports = takeUntil;