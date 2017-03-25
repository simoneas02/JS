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

```HTML
//Criando fragmentos de HTML com Template Literal
<!DOCTYPE html>
<html>
<head>
    <title>Template Literal</title>
</head>
<body>
</body>

<script>

const article = {
    title: "Hello Word",
    intro: "Welcome for my fantasy world, this are many cool thins and fun, you'll go like a lot :)",
    body: "A million ****ing diamonds! So Ann, the question is, do you want a man or a boy?.",
    tags: ["world", "welcome", "trip"],
    author: "Simone Amorim"
};

const markup= `
<article>
    <header>
        <h1>${article.title}</h1>
    </header>
    <section>
        <p>${article.intro}</p>
    </section>
    <footer>
        <ul>
            ${article.tags.map((tag) => `<li>${tag}</li>`).join(``)}
        </ul>
    </footer>
</article>
`;

document.body.innerHTML = markup;

</script>
</html>
```

## Tagged Template

> Utiliza uma função que varre um template literal e faz a alteração que você quiser.

```HTML
<!DOCTYPE html>
<html>
<head>
    <title>Template Literal</title>
</head>
<body>
</body>

<style>
    .purple {
        color: #6f10a;
        font-size: 30px;
    }
</style>

<script>

    const learn= "ES6";
    const wantLearn= "React";
    const loveTalk= "CSS Grid Layout";

    //1º parâmetro todo template literal, ou seja as variávis do meu template litera.
    //2º parâmetro estou usando rest que é representado "...values" para representar cada um dos argumentos d meu template (say)
    function green(template, ...values) {
        return template.reduce((acumulator, part, i) => {
            return `
                ${acumulator}
                <span class "green">${values[i - 1].toUpperCase()}</span>
                ${part}
                `
        });
    }

    //Usando a função green como una tagged para relizar as alterarções
    const say= green `I'am learning ${learn} but I want to learn ${ wantLearn} and I love talk about ${loveTalk}`

    document.body.innerHTML = say;

</script>


```


### [<-- Back](https://github.com/simoneas02/JS)
