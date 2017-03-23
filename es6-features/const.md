# Const e Freeze

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

### [<-- Back](https://github.com/simoneas02/JS)
