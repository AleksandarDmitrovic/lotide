const flatten = function(array) {
  let flattenedArray = [];
  let nestedArray = [];

  for (const arrayElement of array) {
    if (Array.isArray(arrayElement)) {
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

module.exports = flatten;