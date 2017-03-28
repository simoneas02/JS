# Destructuring

## Introdução ao Destructuring

> Permite pegar elementos e criar variáveis a patir de objetos ou outros arays de forma mais fácil .

```JS
    const JS = 
        {
            name:'curso justen',
            time:'30min',
            place:'morning',
            projetoGithub: {
                react: "React Alarm Clock",
                polymer: "made-with-heart"
            }
        };

//ES5
        const JSName = JS.name;
        const JSTime = JS.time;
        const projetoGithub = JS.projetoGithub.react;
    console.log(JSName);

//ES6
    const {name, time} = JS;
    console.log(name, time);

    const {react, polymer} = JS.projetoGithub;
    console.log(react, polymer);

    const {react: rct} = JS.projetoGithub;
    console.log(rct);

    const {JS6 = "JS Notes"} = JS.projetoGithub;
    console.log(JS6);
);
```

## Destructuring em Arrays

> É possível fazer destructuring em Arrays assim como fazemos em objetos.

```JS
    const JS = ["react", "JS6", "polymer"];
    console.log(react, JS6, polymer);
```
## Fazendo swap de variáveis com destructuring

> É possível trocar valores entre variáveis sem criar variável extra (swap de variáveis)

```JS
    let learn = "JS6";
    let read = "Coletânea Frtont-end";

    //E5
    let temp;
    temp = learn;
    learn = read;
    read = temp

    //E6
    [learn, read] = [read, learn];
    console.log(read)

```