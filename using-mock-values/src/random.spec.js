const { randomString, randomNumber } = require('./random');

describe('firstNChars', () => {
  it('should return a random string - 5 attempts', () => {
    expect(randomString()).toEqual(jasmine.any(String));
    expect(randomString()).toEqual(jasmine.any(String));
    expect(randomString()).toEqual(jasmine.any(String));
    expect(randomString()).toEqual(jasmine.any(String));
    expect(randomString()).toEqual(jasmine.any(String));
  });

  it('should return a random number - 5 attempts', () => {
    expect(randomNumber(5)).toEqual(jasmine.any(Number));
    expect(randomNumber(5)).toEqual(jasmine.any(Number));
    expect(randomNumber(5)).toEqual(jasmine.any(Number));
    expect(randomNumber(5)).toEqual(jasmine.any(Number));
    expect(randomNumber(5)).toEqual(jasmine.any(Number));
  });

  // part 2 - string matching
  it('showcase the jasmine.stringMatching', () => {
    expect('a string').toEqual(jasmine.stringMatching('string'));
    expect('a string').toEqual(jasmine.stringMatching('strin'));
    expect('a string').toEqual(jasmine.stringMatching('stri'));
    expect('a string').toEqual(jasmine.stringMatching('a'));
    expect('a string').toEqual(jasmine.stringMatching(' '));
  });

  xit('showcase the jasmine.stringMatching failing case', () => {
    expect('a string').toEqual(jasmine.stringMatching('not this'));
  });

  // part 3 object containing
  it('showcase jasmine.objectContaining', () => {
    expect({ x: 1, y: 2 }).toEqual(jasmine.objectContaining({ x: 1 }));
    expect({ x: 1 }).toEqual(jasmine.objectContaining({ x: 1 }));
    expect(Object.assign({ x: 1 }, {})).toEqual(jasmine.objectContaining({ x: 1 }));
  });

  it('showcase jasmine.objectContaining failing a test', () => {
    expect({ xx: 1, y: 2 }).toEqual(jasmine.objectContaining({ x: 1 }));
  });

  // part 4 array
  it('showcase jasmine.arrayContaining', () => {
    expect([1,2,3,4,5]).toEqual(jasmine.arrayContaining([2,5]));
    expect([2,5]).toEqual(jasmine.arrayContaining([2,5]));
    expect([1,2,3,4,5]).toEqual(jasmine.arrayContaining([5]));
  });

  // it('test the string matching', () => {
  //   expect(randomNumber(5)).toEqual(jasmine.stringMatching(''));

  //   expect(randomNumber(5)).toEqual(jasmine.objectContaining({ x: 1 }));
  //   expect(randomNumber(5)).toEqual(jasmine.arrayContaining(''));
  //   expect(randomNumber(5)).toEqual(jasmine.arrayWithExactContents(''));
  //   expect(randomNumber(5)).toEqual(jasmine.setContaining(new Set(['one', 'two'])));
  // });
});
