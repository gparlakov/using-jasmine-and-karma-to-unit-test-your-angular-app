const firstNChars = require('./first-n-chars')
console.log(firstNChars)
describe('firstNChars', () => {
    it('should return first 10 chars from the string', () =>{
        expect(firstNChars('a veery long string that should be shortened', 10).toEqual('a veery lo'));
    })

});
