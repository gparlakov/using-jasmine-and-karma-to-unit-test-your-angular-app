/**
 *
 * @param {string} text
 * @param {number} n
 * @returns string
 */
exports.firstNChars = function firstNChars(text, n) {
  if (text === null || text === undefined) {
    throw new Error('Unexpected "text" type. Expected "string" got: ' + text);
  }
  if (typeof text !== 'string') {
    throw new Error(`Unexpected "text" type. Expected "string" got: ${typeof text}`);
  }

  if (n === null || n === undefined) {
    throw new Error('Unexpected "n" type. Expected "number" got: ' + n);
  }
  if (typeof n !== 'number') {
    throw new Error(`Unexpected "n" type. Expected "number" got: ${typeof n}`);
  }
  if(n <= 0) {
    throw new Error(`Unexpected "n" value. Expected positive number got: ${n}`)
  }
  return text.slice(0, n);
};
