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

  - `\s` --> espaços em branco --> `texto.match(/\s/g);`
  - `\S` --> faz o match com todos caracteres q não sejam espaços em branco--> `texto.match(/\S/g)` --> `texto.match(/\S\s/g)` --> pega todos os carcteres
  - `\t` --> tabulação --> `texto.match(/\t/g);`
  - `\n` -->  quebra de linha --> `texto.match(/\n/g);`
  - `\W` -->  faz o match com todos caracteres q não sejam alfanuméricos --> `texto.match(/\W/g);`
  - `\D` -->  faz o match com todos caracteres q não sejam números --> `texto.match(/\D/g);`
  - `. `--> o ponto representa qualquer tipo de caracter menos quebra de linha --> `texto.match(/./g);`
  - `^ `--> representa a negação dentro de uma lista  --> `texto.match(/[^abc]/g); // faz o match com todos caracteres menos com 'a, b ou c';`
  - `{}` --> reprenta um intervalo --> `texto.match(/\d{2, 4}/g);` retorna um número que começa com no mínimo 2 dígitos e no máximo 4
           `texto.match(/\d{2,}/g);` --> retorna um número que começa com no mínimo 2 dígitos e no máximo quanquer quantidade
           `texto.match(/\d{2}/g);` --> retorna um número que tenha apenas 2 dígitos
  - `? `--> representa um valor opcional --> `texto.match(/\d\s?/g);` --> eu quero um dígito que pode ser ou não seguido de um espaço em branco;
  - `[]` --> reprenta uma lista
  - `+` --> uma mais vezes seguidas --> `texto.match(/\d?/g)` --> faz o match com um ou infinito dígitos...
  - `+` --> zero ou mais vezes seguidas -->  --> faz o match com zero ou infinito dígitos...
  - `()` --> reprenta uma captura de argumento 
      `regexEmail = /[\w+]+@\w+\.\w+\.?([\w]{2})?/`
      `regexRequest = /[?&](\w+)=(\w+)/`