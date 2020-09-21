const assert = require('chai').assert;

const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it("returns true for eqArrays([[2, 3], [4]], [[2, 3], [4]]), NESTED ARRAY TEST", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it("returns true for eqArrays([[2, 3, [[2, 3], [4]], [[2, 3], [4]]], [4]], [[2, 3, [[2, 3], [4]], [[2, 3], [4]]], [4]]), NESTED ARRAY TEST", () => {
    assert.strictEqual(eqArrays([[2, 3, [[2, 3], [4]], [[2, 3], [4]]], [4]], [[2, 3, [[2, 3], [4]], [[2, 3], [4]]], [4]]), true);
  });
  it("returns false for eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]) NESTED ARRAY TEST", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
  it("returns true for eqArrays([1, 2, 3], [1, 2, 3]), equal integer arrays test", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for eqArrays([1, 2, 3], [3, 2, 1]), unequal integer arrays test", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("returns true for eqArrays(['1', '2', '3'], ['1', '2', '3']), equal string arrays", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });
  it("returns false for eqArrays(['1', '2', '3'], ['1', '2', 3]), unequal string/integer arrays", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
  });
  it("returns false for eqArrays(['1', '2', '3'], ['1', '2', '3', 5]), unequal array lengths", () => {
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', '3', 5]), false);
  }); 
});