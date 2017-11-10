const expect = chai.expect


describe('calc', function() {
    it('is a function', function() {
      expect(calc).to.be.a('function')
    });
    it('adds numbers', function() {
      expect(calc(3+3)).to.deep.equal(6)
    });
    it('multiplies numbers', function() {
      expect(calc(3*3)).to.deep.equal(9)
    });
    it('divides numbers', function() {
      expect(calc(3/3)).to.deep.equal(1)
    });
});
