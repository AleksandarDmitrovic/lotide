const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should Pass equal integer arrays
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Should Fail unequal integer arrays

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Should Pass equal string arrays
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Should Fail unequal string/integer arrays

assertArraysEqual(["1", "2", "3"], ["1", "2", "3", 5]); // Should Fail unequal array lengths