# Map

## Introdução ao Map

> Tem a mesma função do "Set" com a diferença que aceita qualquer tipo de valor que são repassados através de "chave: valor"

```JS
    let skills = new Map();

    //adicionando valores
    skills.set("front", "JS");
    skills.set("back", "python");

    //consultando tamanho
    skills.size  
```

## Introdução ao WeakMap

> Tem a mesma função do "Map" mas só aceita valores que sejam do tipo Objeto e não é um iterator. Serve para casos onde você quer guardar objetos únicos e que sejam apenas objetos.

```JS
    let studyMorning = {
        skill: "JS", 
        read: "Web Mobile"
    };

    let studyNigth = {
        skill: "React", 
        read: "Ted Talk"
    };

    let wmSkills = new WeakMap();

    //adicionando valores
    wmSkills.set(studyMorning, "CSS");
    wmSkills.set(studyNigth, "polymer");
```