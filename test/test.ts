import { ArithmeticExpression } from "../src/app";
import { expect } from 'chai';

describe('ArithmeticExpression', () => {
  it('Should return false with an incorrect expression (2 + 2 *)', () => {
    let arithmeticExpression = new ArithmeticExpression();
    expect(arithmeticExpression.check('2 + 2 *')).to.equal(false);
  });

  it('Should return true with a correct expression (2 + 2 *)', () => {
    let arithmeticExpression = new ArithmeticExpression();
    expect(arithmeticExpression.check('2 + 2 * 5')).to.equal(true);
  });

});