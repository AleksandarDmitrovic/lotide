const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);


  }
};

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
      }

    }

  } else {
    arrayEquivalence = false;
  }
  return arrayEquivalence;
};




assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should Pass equal integer arrays
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Should Fail unequal integer arrays

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Should Pass equal string arrays
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Should Fail unequal string/integer arrays

assertArraysEqual(["1", "2", "3"], ["1", "2", "3", 5]); // Should Fail unequal array lengths

