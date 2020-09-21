const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

console.log(`NESTED ARRAY TEST CASES`);
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]]), 'Should be true'); // => true
console.log(eqArrays([[2, 3, [[2, 3], [4]], [[2, 3], [4]]], [4]], [[2, 3, [[2, 3], [4]], [[2, 3], [4]]], [4]]), 'Should be true Mega nested array'); // => true

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), 'Should be false'); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4]), 'Should be false'); // => false


console.log(`ARRAY TEST CASES`);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Should Pass equal integer arrays
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Should Pass unequal integer arrays

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // Should Pass equal string arrays
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // Should Pass unequal string/integer arrays

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", 5]), false); // Should Pass unequal array lengths

