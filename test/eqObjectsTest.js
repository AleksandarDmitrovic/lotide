const assert = require('chai').assert;

const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it("returns true for eqObjects({ a: {z: 1 },b: 2 },{ a: {z: 1 },b: 2 }), NESTED OBJECT TEST", () => {
    assert.strictEqual(eqObjects({ a: {
      z: 1 },
      b: 2 },
      { a: {
        z: 1 },
      b: 2 }), true);
  });
  it("returns false for eqObjects({ a: { y: 0, z: 1 }, b: 2 },{ a: { z: 1 }, b: 2 }), NESTED OBJECT TEST", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 },{ a: { z: 1 }, b: 2 }), false);
  });
  it("returns false for eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), NESTED OBJECT TEST", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
  it("returns true for eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: 1 }, b: 2 }), NESTED OBJECT TEST", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: 1 }, b: 2 }), true);
  });
  it("returns true for eqObjects({ a: '1', b: '2' }, { b: '2', a: '1' }), Primitives As Values", () => {
    assert.strictEqual(eqObjects({ a: '1', b: '2' }, { b: '2', a: '1' }), true);
  });
  it("returns true for eqObjects({ c: '1', d: ['2', 3] }, { d: ['2', 3], c: '1' }), Arrays As Values", () => {
    assert.strictEqual(eqObjects({ c: '1', d: ['2', 3] }, { d: ['2', 3], c: '1' }), true);
  });
  it("returns false for eqObjects({ c: '1', d: ['2', 3] }, { c: '1', d: ['2', 3, 4] }), Arrays As Values", () => {
    assert.strictEqual(eqObjects({ c: '1', d: ['2', 3] }, { c: '1', d: ['2', 3, 4] }), false);
  });
  
});