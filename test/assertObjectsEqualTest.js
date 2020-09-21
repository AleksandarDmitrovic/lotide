const assertObjectsEqual = require('../assertObjectsEqual');

console.log(`******assertObjectsEqualTest****** \n`);

console.log('Primitives As Values (Tests)');

const ab = { a: "1",
  b: "2" };
const ba = { b: "2",
  a: "1" };

assertObjectsEqual(ab, ba);  // => true

const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, abc); // => false

console.log('\nArrays As Values (Tests)');

const cd = { c: "1",
  d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1",
  d: ["2", 3, 4] };

assertObjectsEqual(cd, cd2); // => false
console.log(`\n`);