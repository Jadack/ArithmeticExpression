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

  // To Prefix Unit Test
  it('Should return the prefix expression of the infix entry (2 + ( (2 * 3) / -5 ) => + * / - 2 ( (2 3) ) 5 )).', () => {
    let arithmeticExpression = new ArithmeticExpression();
    expect(arithmeticExpression.toPrefix('2 + ( (2 * 3) / -5 )')).to.equal('+ * / 2 ( (2 3) -5 )');
  });

  it('Should return the prefix expression of the infix entry (2 + 2 => + 2 2).', () => {
    let arithmeticExpression = new ArithmeticExpression();
    expect(arithmeticExpression.toPrefix('2 + 2')).to.equal('+ 2 2');
  });

  it('Should return the prefix expression of the infix entry (2 + 2 * 5 => + * 2 2 5).', () => {
    let arithmeticExpression = new ArithmeticExpression();
    expect(arithmeticExpression.toPrefix('2 + 2 * 5')).to.equal('+ * 2 2 5');
  });

  // To Postfix Unit Test
  it('Should return the postfix expression of the infix entry 2 + 2 => 2 2 +.', () => {
    let arithmeticExpression = new ArithmeticExpression();
    expect(arithmeticExpression.toPostfix('2 + 2')).to.equal('2 2 +');
  });

  it('Should return the postfix expression of the infix entry 2 + 2 * 5 => 2 2 + 5 *.', () => {
    let arithmeticExpression = new ArithmeticExpression();
    expect(arithmeticExpression.toPostfix('2 + 2 * 5')).to.equal('2 2 + 5 *');
  });

  it('Should return the postfix expression of the infix entry (2 - 2 + 8) * 5 / 16 => 2 2 - 8 + 5 * 16 /.', () => {
    let arithmeticExpression = new ArithmeticExpression();
    expect(arithmeticExpression.toPostfix('(2 - 2 + 8) * 5 / 16')).to.equal('2 2 - 8 + 5 * 16 /');
  });
});