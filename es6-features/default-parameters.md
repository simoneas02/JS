# Default Parameters

> Define valores como padrão dentro de uma função

```HTML
<!DOCTYPE html>
<html>
<head>
    <title>Default Parameters</title>
</head>
<body>
</body>

<script>
//ES5
    function love(learn, read){
        learn = learn || "ES6";
        read = read || "about React";
        console.log("I love " + learn +"and " + read + "!");
    }

//ES6
    function loveES6(learn = "ES6", read  "about React"){
        console.log(`I love ${learn} and ${read}!`);
    }
</script>

```