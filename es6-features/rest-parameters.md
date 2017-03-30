# Rest Parameters

> Quando não sabemos quantos argumentos teremos que passar como parâmetro numa função, podemos usar o "Rest Parameters" no parâmetro, e quando for chamada a função passamos quantos parâmetros for necessário.

```JS
    //ES5
    function add(sum, num01, num02, num03) {
        var result = [];
        result.push(sum + num01);
        result.push(sum + num02);
        result.push(sum + num03);

        return result;
    };

    console.log(add(2,2,4,8));

    //ES6
    //sum é o operador, ... indica que a quantidade do parâmetro numbers é indefinida, podendo passar quantos parâmetros for necessário na chamada da função add.
    const add = (sum, ...numbers) => {
        return numbers.map((num) => num + sum);
    };
    console.log(add(2,2,4,8));
    console.log(add(2,2,4,8,10,20,5));
       
```