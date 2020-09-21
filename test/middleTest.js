const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('returns [2, 3] for [1, 2, 3, 1]', () => {
    assert.deepEqual(middle([1, 2, 3, 1]), [2, 3]);
  });
  it("returns [1, 'TEN'] for [1, 2, 3, 1, 'TEN', 'hiHowAreYa', 4453, 2342]", () => {
    assert.deepEqual(middle([1, 2, 3, 1, 'TEN', 'hiHowAreYa', 4453, 2342]), [1, 'TEN']);
  });
  it("returns ['3'] for ['1', '2', '3', 1, 2]", () => {
    assert.deepEqual(middle(['1', '2', '3', 1, 2]), ['3']);
  });
  it("returns [3] for ['1', 1, '2', 2, 3, '3', 'hello', -4987, 'ok']", () => {
    assert.deepEqual(middle(['1', 1, '2', 2, 3, '3', 'hello', -4987, 'ok']), [3]);
  });
  it("returns 'No Middle' for []", () => {
    assert.deepEqual(middle([]), 'No Middle');
  });
  it("returns 'No Middle' for ['5']", () => {
    assert.deepEqual(middle(['5']), 'No Middle');
  });
  it("returns 'No Middle' for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), 'No Middle');
  });
});