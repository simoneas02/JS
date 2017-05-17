# Desafio FizzBuzz

## Escreva uma lib que receba um número e:

- Se o número for divisível por 3, no lugar do número escreva 'Fizz'
- Se o número for divisível por 5, no lugar do número escreva 'Buzz'
- Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz'
- Se não for múltiplo de nada, retorna o número

```JS
`tests/main.spec.js`

import { expect } from 'chai';
import { FizzBuzz } from '../src/main.js';

describe('FizzBuzz', () => {
    it('should return `Fizz` when multiple of 3', () => {
        expect(FizzBuzz(3)).to.be.equal(`Fizz`);
        expect(FizzBuzz(6)).to.be.equal(`Fizz`);
    });

    it('should return `Buzz` when multiple of 5', () => {
        expect(FizzBuzz(5)).to.be.equal(`Buzz`);
        expect(FizzBuzz(10)).to.be.equal(`Buzz`);
    });

    it('should return `FizzBuzz` when multiple of 3 and 5', () => {
        expect(FizzBuzz(15)).to.be.equal(`FizzBuzz`);
        expect(FizzBuzz(30)).to.be.equal(`FizzBuzz`);
    });

    it('should return number when no-multiple', () => {
        expect(FizzBuzz(7)).to.be.equal(7);
        expect(FizzBuzz(11)).to.be.equal(11);
    });
});
```

```JS
`src/main.js`

const FizzBuzz = (num) => {
  if(num % 3 === 0 && num % 5 === 0) return `FizzBuzz`;
  if(num % 3 === 0) return `Fizz`;
  if(num % 5 === 0) return `Buzz`;

  return num;
};

export { FizzBuzz }
```