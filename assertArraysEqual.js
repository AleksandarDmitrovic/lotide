const eqArrays = function(firstArray, secondArray) {
  // variable to store boolean value
  let arrayEquivalence;
  //check to see arrays are equivalent length
  let arrayLengthEquivalence = firstArray.length === secondArray.length;

  if (arrayLengthEquivalence) {
    //Loop through each element of the arrays and compare each num
    for (let num = 0; num < firstArray.length; num++) {
      if (firstArray[num] === secondArray[num]) {
        arrayEquivalence = true;
      } else {
        arrayEquivalence = false;
        break;
      }

    }

  } else {
    arrayEquivalence = false;
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

