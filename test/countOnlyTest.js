const assert = require('chai').assert;

const countOnly = require('../countOnly');

//Test Code
const firstNames = ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];

const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('#countOnly', () => {
  it(`returns 1 for ["Jason"]`, () => {
    assert.deepEqual(result1['Jason'], 1);
  });
  it(`returns undefined for ["Karima"]`, () => {
    assert.deepEqual(result1["Karima"], undefined);
  });
  it(`returns 2 for ["Fang"]`, () => {
    assert.deepEqual(result1["Fang"], 2);
  });
  it(`returns undefined for ["Agouhanna"]`, () => {
    assert.deepEqual(result1["Agouhanna"], undefined);
  });
});