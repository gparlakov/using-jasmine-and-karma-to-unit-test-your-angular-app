const { firstNChars } = require('./first-n-chars');

describe('firstNChars', () => {
  /**
   * part 1
   */
  it('should return first 10 chars from the string', () => {
    expect(firstNChars('a veery long string that should be shortened', 10)).toEqual('a veery lo');
  });

  // part 2
  it('should throw error expected text to be string got null or undefined', () => {
    expect(() => firstNChars(null, 10)).toThrow(new Error('Unexpected "text" type. Expected "string" got: null'));
    expect(() => firstNChars(undefined, 10)).toThrow(
      new Error('Unexpected "text" type. Expected "string" got: undefined')
    );
  });
  it('should throw error expected text to be string got other type', () => {
    expect(() => firstNChars(1, 10)).toThrow(new Error('Unexpected "text" type. Expected "string" got: number'));
    expect(() => firstNChars({}, 10)).toThrow(new Error('Unexpected "text" type. Expected "string" got: object'));
  });

  // part 3
  it('should throw error n expected number got null or undefined', () => {
    expect(() => firstNChars('test', null)).toThrow(new Error('Unexpected "n" type. Expected "number" got: null'));
    expect(() => firstNChars('test', undefined)).toThrow(
      new Error('Unexpected "n" type. Expected "number" got: undefined')
    );
  });

  it('should throw error n expected number got other type', () => {
    expect(() => firstNChars('test', '1')).toThrow(new Error('Unexpected "n" type. Expected "number" got: string'));
    expect(() => firstNChars('test', {})).toThrow(new Error('Unexpected "n" type. Expected "number" got: object'));
  });
});
