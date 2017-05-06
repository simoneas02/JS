# Mocha(Skip, Only e Bail)

## Skip
> Usamos qundo queremos pular um bloco de teste específico
```JS
describe('Main', function() {
    describe('Method A', function() {
        context('Case 1', function() {
            it.skip('should happen this', function() {
                // espero que aconteça
                // entrada de dados / método sum(2,2)
                // espero retornar (4) => true | (3) => false => broken test
                throw new Error('just on error');
            });
        });

        context.skip('Case 1', function() {
            throw new Error('just on error');
        });
    });

    describe('Method B', function() {

    });
});
```

## Only
> Usamos qundo queremos rodar apenas um bloco de teste específico.
```JS
describe('Main', function() {
    describe('Method A', function() {
        context.only('Case 1', function() {
            it('should happen this', function() {
                // espero que aconteça
                // entrada de dados / método sum(2,2)
                // espero retornar (4) => true | (3) => false => broken test
                throw new Error('just on error');
            });
        });

        context.only('Case 1', function() {
            throw new Error('just on error');
        });
    });

    describe('Method B', function() {

    });
});
```

## Bail
> `npm test -- --bail` quando rodamos esse comando no terminal, ele irá parar no primeiro erro que encontrar.
```JS
// --bai no console para parar no primeiro fail
describe('Main', function() {
    describe('Method A', function() {
        context('Case 1', function() {
            it('should happen this', function() {
                // espero que aconteça
                // entrada de dados / método sum(2,2)
                // espero retornar (4) => true | (3) => false => broken test
                throw new Error('just on error');
            });
        });

        context.skip('Case 1', function() {
            throw new Error('just on error');  
        });
    });

    describe('Method B', function() {

    });
});
```