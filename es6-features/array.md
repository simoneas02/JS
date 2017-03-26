# Array

## `Array.from()`

> Transforma elementos que são similares ao array em array para que possa receber todas as propriedades e os métodos de um array.

```HTML
<!DOCTYPE html>
<html>
<head>
    <title>Array.from()</title>
</head>
<body>
    <ul id="skills">
        <li>JS</li>
        <li>React</li>
        <li>Polymer</li>
    </ul>
</body>

<script>

    const love = "JS";
    console.log(Array.from(love));

    const skills = document.querySelectorAll("#skills li");
    console.log(skills);

    const skillsArray = Array.from(skills);
    console.log(skillsArray);

    const skillsList = skillsArray.map((skill) => skill.textContent);
    console.log(skillsList);
</script>
</html>
```

## `Array.of()`

> Permite unir vários dados de tipos diferentes em um array

```JS
    const loveArray = Array.of("Simone", 30, 25, {skill: "JS"});
    console.log(Array.from(love));
```

## `Array.find() e Array.findIndex()`

> `Array.find()` Retorna o primeiro valor que esteja dentro do array e corresponda a condição passada e o `Array.findIndex()` o index.

```JS
    const Read = [
        {
            time: '25min',
            place: 'bus'
        },
        {
            time: '30min',
            place: 'lunch'
        }
    ];

    const sampleArray = [4, -5, 0, -1];
    const underZero = sampleArray.find(x => x < 0);
    console.log(underZero);

    const underZeroIndex = sampleArray.findIndex(x => x < 0);
    console.log(underZeroIndex);

    const ReadFind = Read.find(Read => Read.place === 'bus')
    const ReadFindIndex = Read.findIndex(Read => Read.place === 'bus')
```

## `Array.fill()`

> `Array.fill()` Preenche os arrays dentro do JS, pode receber três parâmetros onde o primeiro é o valor que será passado ao array, o segundo o index inicial e o terceiro é o index final onde o valor será repassado para o array.

```JS
    const love = new Array(20);
    love.fill("JS");
    console.log(love);

    love.fill("React", 2, 6);
    console.log(love);
```