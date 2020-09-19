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


console.log(`NESTED OBJECT TEST CASES`);
console.log(eqObjects({ a: {
  z: 1 },
b: 2 },
{ a: {
  z: 1 },
b: 2 }), 'Should be true'); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 },
  { a: { z: 1 }, b: 2 }), 'Should be false'); // => false

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), 'Should be false'); // => false

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), 'Should be false'); // => false

console.log(eqObjects({
  prop1: 1,
  prop2: "foo",
  prop3: {
    prop4: 2,
    prop5: "bar"
  },
  prop6: "new"
}, {
  prop1: 1,
  prop2: "foo",
  prop3: {
    prop4: 2,
    prop5: "bar"
  },
  prop6: "new"
}), 'Should be true'); // => true

console.log(eqObjects({
  prop1: 1,
  prop2: "foo",
  prop3: {
    prop4: 2,
    prop5: "bar"
  },
  prop6: {
    prop1: 1,
    prop2: "foo",
    prop3: {
      prop4: 2,
      prop5: "bar"
    },
    prop6: "new"
  }
}, {
  prop1: 1,
  prop2: "foo",
  prop3: {
    prop4: 2,
    prop5: "bar"
  },
  prop6: {
    prop1: 1,
    prop2: "foo",
    prop3: {
      prop4: 2,
      prop5: "bar"
    },
    prop6: "new"
  }
}), 'Should be true *multiple layers deep'); // => true

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