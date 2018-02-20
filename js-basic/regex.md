# Expressões e operadores

## links:
  - https://regex101.com/ --> regex online
  - http://www.ftrain.com/unicode/ --> tabela unicode

## Símbolos e Tags
  - \w --> caracteres alfanuméricos e _ --> texto.match(/\w/);
  - \d --> números (dígitos) --> `texto.match(/\d/)`;
  - g --> global --> `texto.match(/\w/g)`;
  - i --> ignore case sensitive --> `texto.match(/\w/gi)`;
  - | --> lógico 'ou' --> `texto.match(/s|a\w/gi)`;
  - [] --> equivale ao | --> `texto.match(/[sa]\w/gi)`;
  - () --> serve pra fazer um agrupamento --> `texto.match(/(sa)|(si)\w/gi)`;
  - pegando uma sequência de caracteres --> 

    ```JS
      texto.match(/[A-Za-z0-9]/gi) /* equivale a */ texto.match(/\w/gi)
      texto.replace(/si/g, 'SI')
      texto.replace(/si/g, '--$1--') /*--> substitue pelo mesmo valor adicionando os tracinhos */
      texto.replace(/(s)(i)/g, '--$2--') /*--> substitue pelo segundo valor adicionando os tracinhos */
      texto.replace(/(s)(i)/g, '--$&--')
    ```
  - O código abaixo retorna todas as letras 's' e 'i' que estão alocadas na variável texto em maíúsculas!!!
  ```JS
    texto.replace(/(s)(i)/g, ( capturaTotal, s, i ) => {
      return (s + i).toUpperCase();
    })

    'simone'.replace(/(\w)(\w)/g, ( capturaTotal, letra1, letra2 ) => {
      return letra1.toUpperCase() + letra2.toLowerCase();
    })
  ```