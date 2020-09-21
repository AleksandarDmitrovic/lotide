const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('returns [2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [6, 7] for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [6, false] for [true, 6, false]", () => {
    assert.deepEqual(tail([true, 6, false]), [6, false]);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []);
  });
});
