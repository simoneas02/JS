# Symbol

## Introdução a Symbols

> É um tipo primitivo imutável e único. Permite criar objetos onde podemos ter propriedades do tipo Symbol o que ajuda a evitar conflito entre nomes.

```JS   
    let JS = Symbol("skill");
    let react = Symbol("skill");

    console.log(JS === react);

    let studying = {
        [Symbol("skill")]: "JS",
        [Symbol("time")]: "night",
        place: "home"
    };

    console.log(Object.keys(studying));

    const symbols = Object.getOwnPropertySymbols(studying);

    const studyingPlan = symbols.map(symbol => studying[symbol]);
    console.log(studyingPlan);
```