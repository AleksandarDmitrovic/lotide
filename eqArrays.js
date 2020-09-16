const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} === ${expected}`);


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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Should Pass equal integer arrays
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Should Pass unequal integer arrays

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // Should Pass equal string arrays
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // Should Pass unequal string/integer arrays

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", 5]), false); // Should Pass unequal array lengths

