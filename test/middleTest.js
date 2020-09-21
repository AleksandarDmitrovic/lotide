const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

console.log('EVEN TEST CASES');
assertArraysEqual(middle([1, 2, 3, 1]), [2, 3]);  // Should Pass Even length array
assertArraysEqual(middle([1, 2, 3, 1, 'TEN', 'hiHowAreYa', 4453, 2342]), [1, 'TEN']);  // Should Pass Even length array
console.log('ODD TEST CASES');
assertArraysEqual(middle(["1", "2", "3", 1, 2]), ["3"]); //  Should Pass Odd length array
assertArraysEqual(middle(["1", 1, "2", 2, 3, "3", 'hello', -4987, 'ok']), [3]); // Should Pass Odd length array
console.log('NO MIDDLE TEST CASES');
assertArraysEqual(middle([]), 'No Middle');  // Should Pass No Middle Length 0 Array
assertArraysEqual(middle([1]), 'No Middle');  // Should Pass No Middle Length 1 Array
assertArraysEqual(middle([1, 2]), 'No Middle');  // Should Pass No Middle Length 2 Array