const assert = require('chai').assert;

const findKeyByValue = require('../findKeyByValue');

//Test Code
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const charactersOfFairyTale = {
  mage:  "Merlin",
  knight:"Arthur",
  fairy: "Vila"
};

describe('#findKeyByValue', () => {
  it(`returns "drama" for findKeyByValue(bestTVShowsByGenre, "The Wire")`, () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it(`returns "comedy" for findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine")`, () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  });
  it(`returns undefined for findKeyByValue(bestTVShowsByGenre, "That '70s Show")`, () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it(`returns "mage" for findKeyByValue(charactersOfFairyTale, "Merlin")`, () => {
    assert.deepEqual(findKeyByValue(charactersOfFairyTale, "Merlin"), "mage");
  });
  it(`returns undefined for findKeyByValue(charactersOfFairyTale, "chimp")`, () => {
    assert.deepEqual(findKeyByValue(charactersOfFairyTale, "chimp"), undefined);
  });
  it(`returns 'fairy' for findKeyByValue(charactersOfFairyTale, "Vila")`, () => {
    assert.deepEqual(findKeyByValue(charactersOfFairyTale, "Vila"), 'fairy');
  });
});