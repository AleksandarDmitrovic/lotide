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

const middle = function(array) {
  let arrayLength = array.length;
  let arraysWithoutMiddles = (arrayLength === 0 || arrayLength === 1 || arrayLength === 2);
  let middleIndex = 0;
  let middleOfArray = [];

  if (arraysWithoutMiddles) {
    return middleOfArray;
  } else if (arrayLength % 2 === 0) {
    middleIndex = (arrayLength / 2) - 1;
    middleOfArray = array.slice(middleIndex, middleIndex + 2);
  } else if (arrayLength % 2 !== 0) {
    middleIndex = Math.floor(arrayLength / 2);
    middleOfArray = array.slice(middleIndex, middleIndex + 1);
  } else {
    console.log("something failed");
  }

  return middleOfArray;

};

console.log('EVEN TEST CASES');
assertArraysEqual(middle([1, 2, 3, 1]), [2, 3]);  // Should Pass Even length array
assertArraysEqual(middle([1, 2, 3, 1, 'TEN', 'hiHowAreYa', 4453, 2342]), [1, 'TEN']);  // Should Pass Even length array
console.log('ODD TEST CASES');
assertArraysEqual(middle(["1", "2", "3", 1, 2]), ["3"]); //  Should Pass Odd length array
assertArraysEqual(middle(["1", 1, "2", 2, 3, "3", 'hello', -4987, 'ok']), [3]); // Should Pass Odd length array
console.log('NO MIDDLE TEST CASES');
assertArraysEqual(middle([]), []);  // Should Pass No Middle Length 0 Array
assertArraysEqual(middle([1]), []);  // Should Pass No Middle Length 1 Array
assertArraysEqual(middle([1, 2]), []);  // Should Pass No Middle Length 2 Array