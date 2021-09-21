import { ArithmeticExpression } from "../src/app";
import { expect } from 'chai';

describe('ArithmeticExpression', () => {
  // Check Unit Test
  it('Should return false with an incorrect expression (2 + 2 *).', () => {
    let arithmeticExpression = new ArithmeticExpression();
    expect(arithmeticExpression.check('2 + 2 *')).to.equal(false);
  });

  it('Should return true with a correct expression (2 + 2 * 5).', () => {
    let arithmeticExpression = new ArithmeticExpression();
    expect(arithmeticExpression.check('2 + 2 * 5')).to.equal(true);
  });

  // Parse Unit Test
  it('Should return the result although the input expression is a string (4).', () => {
    let arithmeticExpression = new ArithmeticExpression();
    expect(arithmeticExpression.parse('2 + 2')).to.equal(4);
  });

  it('Should return the result although the input expression is a string (0.8).', () => {
    let arithmeticExpression = new ArithmeticExpression();
    expect(arithmeticExpression.parse('2 + 2 * 3 / -5')).to.equal(0.8);
  });

});