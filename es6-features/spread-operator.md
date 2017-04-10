# Spread Operator

## Introdução ao Spread Operator

> Serve para desmembrar elementos que são interáveis em pequenas partes, o Spread Operator é representado por três pontinhos "...".

```JS
    let JS = ["react", "JS6", "polymer"];
    let read = ["Coletânea Frtont-end", "O Programador Apaixonado", "Ted Talks"];

    //Transforma a string "react" em um array, onde cada letra será um índice, se remover os colchetes, é apresentado um simples texto com letras separadas por espaços.
    console.log([..."react"]);

    //Transforma o array em stings simples, onde cada valor de "JS" será um texto.
    console.log(...JS);

    //ES5
    //Unindo 2 arays
    let tasks = JS.concat(read);

    //Inserido um novo elemento no final do array "JS" e concatenando com o "read"
    let tasks = [];
    tasks = tasks.concat(JS);
    tasks.push("Vue");
    tasks = tasks.concat(read);
    console.log(tasks);

    //ES6
    //Unindo 2 arays
    let tasks = [...JS, ...read];
    console.log(tasks);  

    //Inserido um novo elemento no final do array "JS" e concatenando com o "read" 
    let tasks = [...JS, "Vue", ...read];
    console.log(tasks); 
```

## Usando Spread  dentro de funções

> Podemos usar o spread para desmembrar os elementos e repassar como argumentos em uma função, posicionando cada valor relacionado ao parâmetro da função.

```JS
    function tasksWork(skill, audio, read) {
        console.log(`You learned today ${skill}, ${audio} and ${read}!`)
    }

    const planDay = ["JS", "ZOFE", "O Programador Apaixonado"];

    //Usando o spread(...) cada valor do array planDay será repassado como parâmetro na função tasksWork.
    tasksWork(...planDay);
```