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

const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
 
  for (let key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {  //RECURSION
        return false;
      }
    } else if (typeof object1[key] === 'object') {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

console.log('Primitives As Values (Tests)');

const ab = { a: "1",
  b: "2" };
const ba = { b: "2",
  a: "1" };

assertObjectsEqual(ab, ba);  // => true

const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, abc); // => false

console.log('Arrays As Values (Tests)');

const cd = { c: "1",
  d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1",
  d: ["2", 3, 4] };

assertObjectsEqual(cd, cd2); // => false