# Entendendo _arrow function_ <3

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

### [<-- Back](https://github.com/simoneas02/JS)
