const eqArrays = function(firstArray, secondArray) {
  // variable to store boolean value
  let arrayEquivalence = true;  //initally true for the case of two empty arrays
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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);


  }
};

const flatten = function(array) {
  let flattenedArray = [];
  let nestedArray = [];

  for (const arrayElement of array) {
    if(Array.isArray(arrayElement)) {
      nestedArray = arrayElement;
      for (const nestedArrayElement of nestedArray) {
        flattenedArray.push(nestedArrayElement);
      }
    } else {
      flattenedArray.push(arrayElement);
    }
  }
  return flattenedArray;
};

assertArraysEqual(flatten([1, 2, 3, [1]]), [1, 2, 3, 1]);  // Should Pass
assertArraysEqual(flatten(["1", "2", "3", [1, 2, "3"]]), ["1", "2", "3", 1, 2, "3"]); //  Should Pass
assertArraysEqual(flatten(["1", [1], "2", [2, 3], "3"]), ["1", 1, "2", 2, 3, "3"]); // Should Pass 


// console.log(eqArrays([], []));