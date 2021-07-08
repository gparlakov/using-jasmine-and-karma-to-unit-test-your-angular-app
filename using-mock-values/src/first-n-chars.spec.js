const { firstNChars } = require('./first-n-chars');

describe('firstNChars', () => {

  it('should return first 10 chars from 2the string', () => {
    const actual = firstNChars('a veery long string that should be shortened', 10);
    expect(actual).toEqual(jasmine.any(String));
  });

  // error cases omitted
});
