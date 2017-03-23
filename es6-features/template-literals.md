# Template Literal

> Permite criar strings com variáveis internas e concatenar de uma forma bem mais fácil

```JS
const skill = {
    learn: 'Ecma6',
    love: 'React'
}

//Exemplo de strings com variáveis no método JS Ecma5
var texto = "Eu quero aprender " + skill.learn + " e " + skill.love

//com Ecma6
const literalTexto = `Eu quero aprender + ${skill.learn} e ${skill.love}`

const skills = 'JS'
               + '\n'
               + 'React'
               + '\n'
               + 'Polymer';

const literalSkills =
`JS
 React
 Polymer`;
```

### [<-- Back](https://github.com/simoneas02/JS)
