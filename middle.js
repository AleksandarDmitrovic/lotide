const middle = function(array) {
  let arrayLength = array.length;
  let arraysWithoutMiddles = (arrayLength === 0 || arrayLength === 1 || arrayLength === 2);
  let middleIndex = 0;
  let middleOfArray = [];

  if (arraysWithoutMiddles) {
    return 'No Middle';
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

module.exports = middle;