# Iterators e Iterables

## Iterators e Iterables - for...of

> São novos protocolos que permitem iterar sobre alguma informação, ou seja, criar loops que é executado ate encontrar algo que eu passe como argumento. 

```JS   
    let text = "polymer"; //iterable
    let it = text[Symbol.iterator](); //iterator

    //com a função .next() podemos retonar cada valor passada como iterable
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());

    //com a função for...of temos um lopp que passa por cada valor do iterable.
    for(letter of text) {
        console.log(letter);
    };

    //podemos usar uma condicional pra informar um certo ponto onde a função deve parar a execução.
    for(letter of text) {
        console.log(letter);

        if(letter === "y") break;
    };
```