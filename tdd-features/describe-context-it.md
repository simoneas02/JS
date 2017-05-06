# Mocha(Describe, Context e It)

- Describe: Usamos para separar classes ou métodos.
- Context: Serve para separar os casos de teste que vamos ter.
- It: Passamos o que esperamos que aconteça.
```JS
describe('Main', function() {
    describe('Method A', function() {
        context('Case 1', function() {
            it('should happen this', function() {
                // espero que aconteça
                // entrada de dados / método sum(2,2)
                // espero retornar (4) => true | (3) => false => broken test
            });
        });

        context('Case 1', function() {
        
        });
    });

    describe('Method B', function() {

    });
});
```