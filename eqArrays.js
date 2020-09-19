const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} === ${expected}`);


  }
};

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
        if (!eqArrays(array1[num], array2[num])) {
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

