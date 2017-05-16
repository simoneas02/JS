# Testes de uma calculadora simples

```JS
`tests/main.spec.js`

var expect = require('chai').expect;
var calc = require('../src/main.js');

describe('Calc', () => {
    // smoke tests
    describe('Smokes Tests', () => {
        it('should exist the calc lib', ()=> {
            expect(calc).to.exist;
        });
    
        it('should extist the method `sum`', () => {
            expect(calc.sum).to.exist;
            expect(calc.sum).to.be.a.function;
        });

        it('should extist the method `sub`', () => {
            expect(calc.sub).to.exist;
            expect(calc.sub).to.be.a.function;
        });

        it('should extist the method `mult`', () => {
            expect(calc.mult).to.exist;
            expect(calc.mult).to.be.a.function;
        });

        it('should extist the method `div`', () => {
            expect(calc.div).to.exist;
            expect(calc.div).to.be.a.function;
        });
    });

    describe('Sum', () => {
        it('should return 4 when `sum(2,2`)', () => {
            expect(calc.sum(2,2)).to.be.equal(4);
        });
    });

    describe('Sub', () => {
        it('should return 4 when `sub(6,2`)', () => {
            expect(calc.sub(6,2)).to.be.equal(4);
        });

         it('should return -4 when `sub(6,10`)', () => {
            expect(calc.sub(6,10)).to.be.equal(-4);
        });
    });

    describe('Mult', () => {
        it('should return 4 when `mult(2,2`)', () => {
            expect(calc.mult(2,2)).to.be.equal(4);
        });
    });

    describe('Div', () => {
        it('should return 4 when `div(8,2`)', () => {
            expect(calc.div(8,2)).to.be.equal(4);
        });

        it('should return `Não é possível divisão por zero` when `div(8,0`)', () => {
            expect(calc.div(8,0)).to.be.equal(`Não é possível divisão por zero`);
        });
    });
});
```

```JS
`src/main.js`

module.exports = {
  sum: (num1, num2) => {
    return num1 + num2;
  },

  sub: (num1, num2) => {
    return num1 - num2;
  },

  mult: (num1, num2) => {
    return num1 * num2;
  },

  div: (num1, num2) => {
    return (num2 === 0) ? `Não é possível divisão por zero` : num1 / num2;
  }
};
```
> Convertendo para ES6
```JS
`tests/main.spec.js`

import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main.js';

describe('Calc', () => {
    // smoke tests
    describe('Smokes Tests', () => {
        it('should extist the method `sum`', () => {
            expect(sum).to.exist;
            expect(sum).to.be.a.function;
        });

        it('should extist the method `sub`', () => {
            expect(sub).to.exist;
            expect(sub).to.be.a.function;
        });

        it('should extist the method `mult`', () => {
            expect(mult).to.exist;
            expect(mult).to.be.a.function;
        });

        it('should extist the method `div`', () => {
            expect(div).to.exist;
            expect(div).to.be.a.function;
        });
    });

    describe('Sum', () => {
        it('should return 4 when `sum(2,2`)', () => {
            expect(sum(2,2)).to.be.equal(4);
        });
    });

    describe('Sub', () => {
        it('should return 4 when `sub(6,2`)', () => {
            expect(sub(6,2)).to.be.equal(4);
        });

         it('should return -4 when `sub(6,10`)', () => {
            expect(sub(6,10)).to.be.equal(-4);
        });
    });

    describe('Mult', () => {
        it('should return 4 when `mult(2,2`)', () => {
            expect(mult(2,2)).to.be.equal(4);
        });
    });

    describe('Div', () => {
        it('should return 4 when `div(8,2`)', () => {
            expect(div(8,2)).to.be.equal(4);
        });

        it('should return `Não é possível divisão por zero` when `div(8,0`)', () => {
            expect(div(8,0)).to.be.equal(`Não é possível divisão por zero`);
        });
    });
});
```

```JS
`src/main.js`

const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => (num2 === 0) ? `Não é possível divisão por zero` : num1 / num2;

export { sum, sub, mult, div }


```
