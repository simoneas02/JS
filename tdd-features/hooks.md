# Introdução aos Hooks

> Hooks servem para não criar dependência entre os testes sem importância da ordem, gerando um ambiente limpo para os demais testes

Exemplo do uso do before, after, beforeEach e afterEach
```JS
describe('Main', () => {

    // roda uma vez, antes do bloco
    before(() => {
        console.log('before');
    });

    // roda uma vez, depois do bloco
    after(() => {
        console.log('after');
    });

    // roda todas as vezes, antes do CADA bloco
    beforeEach(() => {
        console.log('beforeEach');
    });

    // roda todas as vezes, depois do CADA bloco
    afterEach(() => {
        console.log('afterEach');
    });

    it('test 1', () => {
        console.log('test 1');
    });

    it('test 2', () => {
        console.log('test 2');
    });
});

//  Main
// before
// beforeEach
// test 1
//     √ test 1
// afterEach
// beforeEach
// test 2
//     √ test 2
// afterEach
// after
//   2 passing (16ms)

```

```JS
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

    it('should have a size of 4 when push other value to th array', () => {
        arr.push(4);
        console.log(arr.length); // 4
    });

    it('should have a size of 2 when pop a value from the array', () => {
        arr.pop();
        console.log(arr.length);
    });

    it('should remove removed 3 when use pop in the array', () => {
        console.log(arr.pop() === 3); // true
    });
});
```