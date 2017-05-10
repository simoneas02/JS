# Métodos do Chai

>  Chai é basicamente a biblioteca que vai fazer acontecer nossos testes, é responsável por cada `it`. O `it` no caso é bloco do nosso `mocha`, mas o que de fato vai testar é o `chai`. Veja todos os métodos [aqui](http://chaijs.com/guide/styles/#expect)

```JS
var expect = require('chai').expect;

describe('Main', () => {
    var arr;

    // roda uma vez, antes do bloco
    before(() => {
        // posso iniciar uma conexão no banco
        // posso riar um conjunto de dados
    });

    // roda uma vez, depois do bloco
    after(() => {
        // posso fechar uma conexão no banco
        // posso apagar o conjunto de dados criado em before
    });

    // roda todas as vezes, antes do CADA bloco
    beforeEach(() => {
        arr = [1, 2, 3];
    });

    // roda todas as vezes, depois do CADA bloco
    afterEach(() => {
        
    });

    // testar tipos ou se existe (smoke test)
    it('should be an array', () => {
        expect(arr).be.a('array');
    });

    it('should have a size of 4 when push other value to th array', () => {
        arr.push(4);
        expect(arr).to.have.length(4);
    });

    it('should have a size of 2 when pop a value from the array', () => {
        arr.pop();
        expect(arr).to.not.include(3);
    });

    it('should return true when pop 3 from array', () => {
        expect(arr.pop() === 3).to.be.true;
    });

    it('should remove removed 3 when use pop in the array', () => {
        arr.pop();
        expect(arr).to.have.length(2);
    });
});
```