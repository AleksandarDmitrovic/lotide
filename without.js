const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);


  }
};



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


//commented out using eqArrays function inside without function
const without = function(sourceArray, itemsToRemoveArray) {
  // output array variable to store new array
  let arrayWithout = [];

  // if (!eqArrays(sourceArray, itemsToRemoveArray)) {
  //compare each sourceArray index to all of the items to remove in the second parameter array
    
  for (let item of sourceArray) {

    if (!itemsToRemoveArray.includes(item)) {
      arrayWithout.push(item);
    
    }
    
  }
  return arrayWithout;
    
  // } else {
    
  //   return arrayWithout;
  // }
 
};

/*

//WITHOUT FUNCTION WITHOUT INCLUDES METHOD *** UNFINISHED***

const without = function (sourceArray, itemsToRemoveArray) {
  // output array variable to store new array
  let arrayWithout = [];
  let numTimesNotInArray = 0;

  if (!eqArrays(sourceArray, itemsToRemoveArray)) {
    //compare each sourceArray index to all of the items to remove in the second parameter array
    console.log('NEW TEST CASE');
    for (let i = 0; i < sourceArray.length; i++) {
      for (let j = 0; j < itemsToRemoveArray.length; j++) {

        if (sourceArray[i] !== itemsToRemoveArray[j]) {
          numTimesNotInArray++;
          console.log(numTimesNotInArray);
          // break;
        }
      } if (numTimesNotInArray === itemsToRemoveArray.length) {
        numTimesNotInArray = 0;
        arrayWithout.push(sourceArray[i]);
        console.log(`Array Without ${arrayWithout}`);
      }

    }
    return arrayWithout;

  } else {
    console.log("fail", arrayWithout);
    return arrayWithout;
  }

};

*/

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3] Should Pass
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"] Should Pass
// console.log(eqArrays([], []));
assertArraysEqual(without(["1", "2", "3"], ["1", "2", "3"]), []); // Should Pass Delete all the elements *****COME BACK TO THIS*****
assertArraysEqual(without([1, 2, 3], [2, 1]), [3]); // Should Pass
assertArraysEqual(without(["1", "2", "3"], ["1", "2", 3]), ['3']); // Should Pass

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Should Pass Original words Array not modified








