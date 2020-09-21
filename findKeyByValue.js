const findKeyByValue = function(inputObject, inputValue) {
  let results = undefined;
  let arrayOfKeys = Object.keys(inputObject);

  for (const key of arrayOfKeys) {
    if (inputObject[key] === inputValue) {
      results = key;
    }
  }

  return results;
};

module.exports = findKeyByValue;