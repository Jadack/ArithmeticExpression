export class ArithmeticExpression {
  expValidator: RegExp;
  constructor() {
    this.expValidator = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
  }

  check(exp: string): boolean {
    return this.expValidator.test(exp);
  }

  toPrefix(exp: string): string {
    return '';
  }

  toPostfix(exp: string): string {
    return '';
  }

  parse(exp: string): number {
    return eval(exp);
  }
}