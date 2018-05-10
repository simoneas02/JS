# ENTENDENDO O STRICT MODE

O “use strict” do JavaScript foi incluído no ECMAScript 5

## Mais para que serve o uso do Strict Mode?
Serve para fazer mais verificações!

O JavaScript é muito flexível e nós da uma grande liberdade em sua escrita, o problema é que toda essa liberdade pode nos causar grandes problemas de difícil identificação e correção.

O que o strict mode faz basicamente é melhorar a qualidade do código. Ou seja, o código será executado de forma mais rigorosa.

Ativando o strict mode somos obrigados a ser mais regrados na escrita de nossos códigos.

## Vamos a alguns exemplo
```
minhaIdade = 30;
```

No exemplo acima o JavaScript é válido, significa que você cria uma variável completamente global chamado minhaIdade.

```
'use strict'
minhaIdade = 30;
// Erro - ReferenceError: minhaIdade is not defined
```

Mas no modo estrito é um erro porque você não usou a palavra-chave “var” para declarar a variável.

## Mais um exemplo 😉

```
function minhaFuncao() {
  nome = "Fulano de Tal";
} 
minhaFuncao();
````

Sem habilitar o modo restrito, o código acima é executado sem lançar qualquer erro, ainda que seja uma má prática utilizar a variável “nome” sem declará-la

```
'use strict'
function minhaFuncao() {
  nome = "Fulano de Tal";
} 
minhaFuncao();

// Erro - ReferenceError: nome is not defined
```

Se habilitarmos o strict mode, será lançada um erro para notificar que temos um problema no código

## E como usar?
Basta adicionar ‘use strict’ no topo do seu código, antes de qualquer outra coisa ou chama-los dentro de funções. Se você inserir dentro no topo do seu código se aplicará para todo seu código.

## Conclusão
Pelo bem da legibilidade do seu código você deve usar o strict mode, além de evitar problemas futuros com novas versões do JavaScript. Isso irá lhe ajudar a detectar erros em seu código mais facilmente.

