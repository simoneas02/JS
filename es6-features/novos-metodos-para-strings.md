# Novos métodos para Strings

- `startsWith()` - Valida se a variável passada inicialmente inicia com o valor do parâmetro e retorna true ou falso, passando o segundo parâmetro podemos informar a partir de qual valor queremos que inicie a validação.
- `endsWith()` - Valida se a variável passada inicialmente termina com o valor do parâmetro e retorna true ou falso, passando o segundo parâmetro podemos informar até quantos caracteres queremos que inicie a validação, a contagem da quantidade de caracteres inicia do primeiro caracter da string até o valor passado no segundo parâmetro.
- `repeat()` - Repete a quantidade de vezes passada como parâmetro o valor da variável passada inicialmente.
- `includes()` - Procura se uma strig existe dentro da variável passada inicialmente.

```HTML
<!DOCTYPE html>
<html>
<head>
    <title>Novos métodos para Strings</title>
</head>
<body>
</body>

<script>
    let love = `I love learn and read!`

    console.log(love.startsWith(`I love`));
    console.log(love.startsWith(`love`, 2));

    console.log(love.endsWith(`read!`));
    console.log(love.endsWith(`read`, 19));

    console.log(love.repeat(3));

    console.log(love.includes(`love`));

</script>
</html>

```

