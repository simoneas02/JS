# Conceitos JS Ecma6

> **const** – É uma variável que não pode ter seu valor reatribuido, ou seja, será constante toda vida, porém se for um objeto, os valores dentro dela poderão ser modificados. 
 
```JS
//Criando um objeto dog 

const  dog = {
        name: pug,
        age: 2 
    }; 
```

```JS
//Alterando o objeto adicionando uma nova propriedade 
//retornará erro porque o objeto é do tipo const 
 
const dog =  
{ 
   name:  pink, 
   age:  4 
}; 
 
```

```JS
//Alterando a propriedade do objeto dog

dog.name = bower;

```

> ***freeze*** - É possível deixar um objeto imutável passando ele como parâmetro no método _Object.freeze(object)_, feito isso não é possível reescrever nem modificar o objeto e suas propriedades.

```JS
Object.freeze(dog);

```

## Entendendo _arrow function_ <3

Primeiramente vamos definir uma função normal:

```JS
//declarando um array
    const brasil = ['Olinda', 'Recife', 'Rio de Janeiro']

//declarando uma function normal
    const love = brasil.map(function(name) {
        return `I love ${name}`;
    });
   
```

Transformando a função acima em _arrow function_

```JS
//declarando uma arrow function 
    const loveArrow = brasil.map((name) => {
        return `I love ${name}`
    }) 

```

```JS
//se só tiver um parâmetro não é necessário adiconar os parênteses.
    const loveArrowSingle = brasil.map(name => {
        return `I love ${name}`
    }) 

```

```JS
//se for possível declarar em uma única linha não é necessário usar as chaves e nem a palavra "return"
    const loveArrowOneline = brasil.map(name => `I love ${name}`) 

```