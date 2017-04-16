# Módulos

## Configurando o Webpack

- Webpack: É responsável por pegar os móulos JS e juntar para que sejam carregados no browser. O Webpack também consegue fazer inúmeras coisas como tratamento de imagens, conversão pre-processadores..., podendo ser utilizado para uma gama de coisas.

- Babel: É um transpiler que vai pegar nosso JS6 e converter para o JS mais antigo, para que nosso código consiga rodar nos browsers mais antigos.

>  Execute os comandos abaixo no terminal:

1. `npm init -y` - Para criar um projeto.
2. `npm install --save-dev webpack@beta babel-loader babel-core babel-preset-es2015-native-modules` - Para instalar os pacotes.
3. `./node_modules/.bin/webpack --help` - Para consultar os comandos disponíveis do webpack.
4. `npm install --save-dev ramda` - Para instalar a biblioteca ramda que iremos usar como exemplo de `import/ export` 


## Imports no ES6

> Serve para importar uma variável ou um método de uma lib para dentro do seu projeto.

1. Crie um arquivo app.js com os dados abaixo:
> Importando todos os métodos da lib ramda
```JS
    // import método from 'biblioteca';
    // * => carrega tudo da lib
    // as => alias para o método (novo nome)
    import * as R from 'ramda';

    const arr1 = [1, 1, 1, 2, 2, 2, 3, 4, 5, 6];
    const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 6, 1];

    const arr3 = R.union(arr1, arr2);
    const arr4 = R.uniq(arr1);

    console.log(arr3);
    console.log(arr4);
```

> Importando um método específico da lib ramda, posso adicionar alias também ao método `{ union as unifica }`, posso chamar mais de um método específico ao mesmo tempo `{ union, uniq }`

```JS
    // import método from 'biblioteca';
    // { nome_do_metodo } => carrega apenas o método especificado da lib
    import { union } from 'ramda';

    const arr1 = [1, 1, 1, 2, 2, 2, 3, 4, 5, 6];
    const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 6, 1];

    // Posso chamar o método importado diretamente
    const arr3 = union(arr1, arr2);

    console.log(arr3);
```

2. Crie um arquivo index.html com os dados abaixo:

```HTML
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Módulo JS</title>
    </head>
    <body>
        <script src="build.js"></script>
    </body>
    </html>
```

3. Crie um arquivo `webpack.config.js` com as configurações abaixo:

```JS
    const webpack = require('webpack');

    module.exports = {
        entry: {
            filename: './app.js'
        },
        output: {
            filename: './build.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: [
                            ['es2015', {modules: false}]
                        ]
                    }
                }
            ]
        }
    }
```
4. Crie um arquivo `.gitignore` e inclua nele as pastas/arquivos que você não quer que subam para o git, no nosso caso estamos a dicionando a pasa `node_modules/`

5. No um arquivo `package.json` configure os scripts conforme abaixo e depois execute no terminal `npm run build -- --watch` </br>
PS.: Você precisa está dentro da pasta onde criou o projeto.

```JSON
      "scripts": {
        "build": "./node_modules/.bin/webpack --colors --progress",
        "watch": "npm run build -- --watch"
    },
```

## Exports no ES6

> Serve para exportar uma variável ou um método para que outros arquivos possam utilizar.

1. Crie um arquivo `utils.js` com os dados abaixo, será a biblioteca com métodos e variáveis que serão reutilizadas em outros arquivos.

```JS
    function sum(a, b) {
    return a + b;
    }

    // método principal
    // só pode ter um default por arquivo
    // pode ser importado com qualquer nome
    // não precisar ser chamado com as chaves
    export default sum;

    /*--------------------------------*/

    export function sub(a, b) {
        return a - b;
    }

    // named export
    // permite ter vários exports dentro de um mesmo arquivo
    // só pode chamar com o mesmo nome 
    // o import precisa das chaves { sub }

    /*--------------------------------*/

    function mult(a, b) {
        return a * b;
    }

    function div(a, b) {
        return a / b;
    }

    const PI = 3.14;

    export { mult as multiplicacao, div, PI };

    // named export
    // permite ter vários exports dentro de um mesmo arquivo
    // só pode chamar com o mesmo nome 
    // o import precisa das chaves { sub }

```

2. Adicione os dados abaixo em app.js, para que possamos reutilizar os métodos/ variável do arquivo utils.JS

```JS
    
    // importando métodos/variável de utils.JS
    import sum, { sub, multiplicacao, div as dividir, PI } from './utils';

    // usando os métodos/variável de utils.JS
    console.log(sum(20, 10))
    console.log(sub(20, 10))
    console.log(multiplicacao(20, 10))
    console.log(dividir(20, 10))
    console.log(PI)
```