# Generators

## Introdução a Generators

> É mais um tipo de iterator onde é interessante quando queremos executar um fluxo que seja executada cada iteração por vez assim que for necessário.

```JS   
    //para criar um generator, adicione um "*" após a palavra function e troque o "console.log" pela palavra "yield"
    function* genSkills() {
        yield "JS";
        yield "React";
        yield "Polymer";
    };

    //podemos usar uma condicional pra informar um certo ponto onde a função deve parar a execução.
    const skills = genSkills();
 
    console.log(skills.next());
```