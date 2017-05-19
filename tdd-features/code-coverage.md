# Code Coverage

> O Coverage tem o objetivo de analisar quanto % do seu código está coberto por teste, podemos utilizá-lo com o hoook no prepush para garantir que só seja posível realizar um push com x% do código coberto pelo teste.

Utiizaremos a biblioteca nyc para realizar o code coverage, execute o comanado `npm install --save-dev nyc` no terminal dentro da pasta do projeto.

Configure o package.json conforme abaixo:
```JS
/* package.json */
 "scripts": {
    "lint": "./node_modules/.bin/eslint src/*.js",
    "prepush": "npm run lint && npm run test:coverage", 
    "test": "./node_modules/.bin/mocha tests/**/*.spec.js --require babel-register",
    "test:tdd": "./node_modules/.bin/mocha tests/**/*.spec.js --require babel-register --watch",
    "test:coverage": "nyc npm test"
  },
  "nyc": {
    "functions": 80,
    "lines": 80,
    "check-coverage": true,
    "reporter": ["text", "html"],
    "exclude": ["tests/**"]
  },
```
A linha 12 garante que todos os push só rodem com sucesso se obtiver sucesso no lint(padrão do código) e sucesso no test:coverage(% de código testado conforme configurado no "nyc").<br/>
`"prepush": "npm run lint && npm run test:coverage"`

A linha 15 corresponde ao comando para executar o `test:coverage`<br/>
`"test:coverage": "nyc npm test"`

Na linha 17 está configurado como queremos nosso teste coverage
```JS
"nyc": {
    "functions": 80, //- 80% das funções devem ser cobertas por teste
    "lines": 80, //- 80% das linhas devem ser cobertas por teste
    "check-coverage": true, //- dever ser checkado o coverage
    "reporter": ["text", "html"], //- cria o arquivo coverage/index.html para visualisar o coverage no browser
    "exclude": ["tests/**"]
  },
```