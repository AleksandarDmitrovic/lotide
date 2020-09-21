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

module.exports = eqArrays;