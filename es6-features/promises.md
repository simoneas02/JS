# Promises

## Introdução a Promises

> É um objeto com uma ação que será realizada no futuro, ela facilita bastante fazer o tratamento de dados assíncrono.

```JS
    //Criando objetos com promises
    const tasks = new Promise((resolve, seject) => {
        setTimeout(() => {
            if(true) {
                resolve("You is learning JS");
            } else {
                reject("Error!");
            }
        }, 2000);
    });

    //Manipulando o objeto
    tasks
        .then((data) => {
            console.log(data);
            return "foo";
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(data));
```