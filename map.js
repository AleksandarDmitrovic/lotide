const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')
// Our map function will take in two arguments:

// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }

  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);



// TESTING MAP FUNCTION

// const words = ["ground", "control", "to", "major", "tom"];


// const results1 = map(words, word => word[0]);
// console.log(results1);
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]); // Should Pass

const phrases = ['hello', 'bonjour', 'zdravo', 'hola', 'ciao', 'bye', 'hasta luego'];
assertArraysEqual(map(phrases, phrase => phrase.length), [ 5, 7, 6, 4, 4, 3, 11 ]); // Should Pass

const numbers = [100, 54, 33, 14, 67, 77, 83, 60, 90]; //
assertArraysEqual(map(numbers, number => number + 5), [105, 59, 38, 19, 72, 82, 88, 65, 95]); // Should Pass

module.exports = map;