export class ArithmeticExpression {
  constructor() {}

  check(exp: string): boolean {
    return false;
  }

  toPrefix(exp: string): string {
    return '';
  }

  toPostfix(exp: string): string {
    return '';
  }

  parse(exp: string): number {
    return 0;
  }
}