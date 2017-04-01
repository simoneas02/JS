# Promises

## Introdução a Promises

> É um objeto que contém uma ação programada para ser executada no futuro. Promises facilita bastante fazer o tratamento de dados assíncronos.

```JS
    //Criando objetos com promises
    const tasks = new Promise((resolve, reject) => {
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
        .catch((err) => console.log(err));
```