const eqArrays = function(array1, array2) {
  // variable to store boolean value
  let arrayEquivalence;
  //check to see arrays are equivalent length
  let arrayLengthEquivalence = array1.length === array2.length;

  if (arrayLengthEquivalence === false) {
    return false;
  }

  if (arrayLengthEquivalence) {
    //Loop through each element of the arrays and compare each num
    for (let num = 0; num < array1.length; num++) {
      if (Array.isArray(array1[num]) && Array.isArray(array2[num])) {
        if (!eqArrays(array1[num], array2[num])) {   // RECURSION
          return false;
        } else {
          arrayEquivalence = true;
        }
      } else if (array1[num] === array2[num]) {
        arrayEquivalence = true;
      } else {
        arrayEquivalence = false;
        break;
      }

    }

  }

  return arrayEquivalence;
};

const assertArraysEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should Pass equal integer arrays
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Should Fail unequal integer arrays

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Should Pass equal string arrays
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Should Fail unequal string/integer arrays

assertArraysEqual(["1", "2", "3"], ["1", "2", "3", 5]); // Should Fail unequal array lengths

