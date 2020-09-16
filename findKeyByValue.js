const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} === ${expected}`);

    
  }
};

const findKeyByValue = function(inputObject, inputValue) {
  let results = undefined;
  let arrayOfKeys = Object.keys(inputObject);
  // console.log(arrayOfKeys);

  for (const key of arrayOfKeys) {
    if (inputObject[key] === inputValue) {
      results = key;
    }
  }

  return results;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

console.log('NEW TEST CASES');

const charactersOfFairyTale = {
  mage:  "Merlin",
  knight:"Arthur",
  fairy: "Vila"
};

assertEqual(findKeyByValue(charactersOfFairyTale, "Merlin"), "mage");
assertEqual(findKeyByValue(charactersOfFairyTale, "chimp"), undefined);
assertEqual(findKeyByValue(charactersOfFairyTale, "Vila"), 'fairy');