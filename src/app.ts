export class ArithmeticExpression {
  expValidator: RegExp;
  charsValidator: RegExp;
  operators: string[];
  constructor() {
    this.expValidator = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
    this.charsValidator = /[^()+\-*/0-9.\s]/gi;
    this.operators = ['+', '-', '*', '/'];
  }

  check(exp: string): boolean {
    return this.expValidator.test(exp);
  }

  toPrefix(exp: string): string {
    const _exp = exp.split(' ');
    let operatorStack = [];
    let numberStack = [];
    let resultExp: string = '';
    for(const e of _exp) {
      if(this.operators.includes(e)) {
        operatorStack.push(e);
      } else if(e === ' ') {
        continue;
      } else {
        numberStack.push(e);
      }
    }
    resultExp = [...operatorStack, ...numberStack].join(' ');
    return resultExp;
  }

  toPostfix(exp: string): string {
    const _exp = exp.match(/(-?(?:\d+\.?\d*|-?\.\d*))|[()+\-*/]/gi);
    let stack: any[] = [];
    let resultExp: string = '';
    if(Array.isArray(_exp) && !this.charsValidator.test(exp)) {
      for(const e of _exp) {
        if(this.operators.indexOf(e) > -1) {
          while(stack.length && this.operators.indexOf(stack[stack.length-1]) > -1) {
            let s = stack.pop();
            resultExp += (' ' + s);
          }
          stack.push(e);
        } else if(e === '(') {
          stack.push(e);
        } else if(e === ')') {
          let s = stack.pop();
          while(s !== '(') {
            resultExp += (' ' + s);
            s = stack.pop();
          }
        } else if(e) {
          resultExp += (' ' + e);
        }
      }
    }

    while(stack.length) {
      let s = stack.pop();
      resultExp += (' ' + s);
    }

    return resultExp.trim();
  }

  parse(exp: string): number {
    return eval(exp);
  }
}