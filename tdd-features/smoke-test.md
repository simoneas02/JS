# Smoke Tests

> Smoke Tests é o teste mais básico e mais simples de todos, ele verifica o funcionamento básico de um método, de uma API, de um sistema...

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
            expect(calc).to.be.a.function;
        });

        it('should extist the method `sub`', () => {
            expect(calc.sub).to.exist;
            expect(calc).to.be.a.function;
        });

        it('should extist the method `mult`', () => {
            expect(calc.mult).to.exist;
            expect(calc).to.be.a.function;
        });

        it('should extist the method `div`', () => {
            expect(calc.div).to.exist;
            expect(calc).to.be.a.function;
        });
    });
});
```

```JS
`src/main.js`

module.exports = {
  sum: () => {

  },

  sub: () => {

  },

  mult: () => {

  },

  div: () => {

  }
};
```