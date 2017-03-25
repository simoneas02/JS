# Shorthand Properties

> Pequenas melhorias para escrever códigos usando ES6

```HTML
<!DOCTYPE html>
<html>
<head>
    <title>Shorthand Properties</title>
</head>
<body>
</body>

<script>

//recebendo 3 dados aleatórios
    let learn = "ES6";
    let wantLearn = "React";
    let loveTalk = "CSS Grid Layout";

//construindo um objeto com os dados recebidos
//ES5
var skills = {
    learn: learn,
    wantLearn: wantLearn,
    loveTalk: loveTalk,

    love: function(){
        console.log("I love + skills.learn");
    }
};

//ES6 usando Shorthand Properties
//Se a propriedade e o valor tiverem o mesmo nome só preciso passar a varável
const skillsES6 = {
    learn,
    wantLearn,
    loveTalk,

//para declarar uma função não é necessário usar os dois pontos e a palavra function
    loveES6(){
        console.log(`I love ${skills.learn}!`);
    }
};

</script>

```