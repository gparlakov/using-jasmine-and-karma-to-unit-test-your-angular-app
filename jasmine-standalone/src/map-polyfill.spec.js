const map = require('./map-polyfill');

describe('mapPolyfill', () => {
  it('should double the array', () => {
    expect(map([1, 2, 3], (x) => 2 * x)).toEqual([2, 4, 6]);
  });
});
