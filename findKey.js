const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} === ${expected}`);

    
  }
};


const findKey = (object, callback) => {
  let results = '';
  
  for (const key in object) {
    // if (object.hasOwnProperty(key)) {
    // console.log(key);
    if (callback(object[key])) {
      // console.log(key);
      results = key;
      break;
    }
    // }
  }
  return results;
};

console.log(
  findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) // => "noma"
);

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma'); // Should pass

assertEqual(findKey({
  "hola":   { language: 'Spanish' },
  "hello":  { language: 'English'},
  "zdravo": { language: 'Serbian'},
}, greet => greet.language === 'Serbian'), 'zdravo'); // Should pass