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

## UglifyJS no Webpack

> É uma forma de otimizar o webpack para obter uma etrega melhor.

- Ajustando o arquivo `webpack.config.js` 

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
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: { warnings: false},
                output: { comments: false }
            })
        ]
    }
```
## Variáveis de Ambiente no Webpack

> Podemos criar variáveis para que de acordo com o seu valor a biblioteca pode ser mais ou menos comprimida.

1. Para exemplificar melhor, executamos no terminal o comando `npm --save install react react-dom` para importarmos as bibliotecas react e react-dom.
2. No arquivo `app.js` adicionamos as linhas abaixo para importar as duas bibliotecas.
```JS 
    import react from 'react';
    import reactDom from 'react-dom';
```
3. No arquivo `webpack.config` criamos uma variável chamada `nodeEnv` e dentro de `plugins` defiimos como ela irá se comportar, o arquivo final ficou assim:
```JS
const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';

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
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: { warnings: false},
                output: { comments: false }
            }),
            new webpack.DefinePlugin({
                'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
            })
        ]
    }
```

## Sourcemaps

> Serve para mapear todo o código fonte e informar ponto a ponto o que cada elemento referencia, ou seja, faz uma referência entre o arquivo que tinhámos antes com o arquivo já compilado, isso é muito útil no desevolvimento até para depuração e descoberta de bugs. Uma observação importante é nunca subir o arquivo `build.js.map` para produção, porque ele é muito extenso e só é útil para facilitar no desenvolvimento.

1. Para usar o Sourcemaps é necessário adicionar a variável `devtool: 'source-map'` dentro de `module.exports`
2. Em `UglifyJsPlugin` adicione `sourceMap: true`, o arquivo final ficou assim:
```JS
const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';

    module.exports = {
        devtool: 'source-map',
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
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: { warnings: false},
                output: { comments: false },
                sourceMap: true
            }),
            new webpack.DefinePlugin({
                'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
            })
        ]
    }
```

##  Inicializando um server com Webpack

> Possibilita criar um servidor via `webpack-dev-server` que é útil para servir os arquivos estáticos no ambiente de desenvolvimento.

1.  Execute no terminal o comando `npm install --save-dev webpack-dev-server` para instalar o webpack-dev-server.
2. No arquivo `package.json` crie a task `"server": "./node_modules/.bin/webpack-dev-server --inline --open"`, o arquivo final ficará assim:
```JS
{
  "name": "modulos-exemplos",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "build": "./node_modules/.bin/webpack --colors --progress",
    "watch": "npm run build -- --watch",
    "server": "./node_modules/.bin/webpack-dev-server --inline --open"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.24.1",
    "babel-loader": "^6.4.1",
    "babel-preset-es2015-native-modules": "^6.9.4",
    "ramda": "^0.23.0",
    "webpack": "^2.2.0",
    "webpack-dev-server": "^2.4.2"
  },
  "dependencies": {
    "react": "^15.5.4",
    "react-dom": "^15.5.4"
  }
}
```
3. Para testar, execute no terminal `npm run server`.
