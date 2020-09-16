const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} === ${expected}`);

    
  }
};

const eqArrays = function(firstArray, secondArray) {
  let arrayEquivalence;
  let arrayLengthEquivalence = firstArray.length === secondArray.length;

  if (arrayLengthEquivalence) {
    
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


const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  
  for (let key1 of object1Keys) {

    if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
      if (!eqArrays(object1[key1], object2[key1])) {
        return false;
      }

    } else if (object1[key1] !== object2[key1]) {
      return false;
    }
  }
  return true;
};



console.log('Primitives As Values (Tests)');

const ab = { a: "1",
  b: "2" };
const ba = { b: "2",
  a: "1" };

assertEqual(eqObjects(ab, ba), true);  // => true

const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, abc), false); // => false

console.log('Arrays As Values (Tests)');

const cd = { c: "1",
  d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1",
  d: ["2", 3, 4] };

assertEqual(eqObjects(cd, cd2), false); // => false