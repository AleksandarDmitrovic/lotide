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

const letterPositions = function(sentence) {
  const results = {};
  let index = 0;
  
  for (const letter of sentence) {
    
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(index);
      } else {
        results[letter] = [index];
      }
      
    }
    index ++;
  }

  return results;
};

const helloPhrase = 'hello';

assertArraysEqual(letterPositions(helloPhrase)['h'], [0]); // Should Pass
assertArraysEqual(letterPositions(helloPhrase)['e'], [1]); // Should Pass
assertArraysEqual(letterPositions(helloPhrase)['l'], [2, 3]); // Should Pass
assertArraysEqual(letterPositions(helloPhrase)['o'], [4]); // Should Pass

console.log('NEW TEST CASE SENTENCE');

const phrase = "lighthouse in the house";

assertArraysEqual(letterPositions(phrase)['h'], [3, 5, 15, 18]); // Should Pass
assertArraysEqual(letterPositions(phrase)['e'], [9, 16, 22]); // Should Pass
assertArraysEqual(letterPositions(phrase)['s'], [8, 21]); // Should Pass