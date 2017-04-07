# Set

## Introdução ao Set

> É um objeto que permite guardar valores único de qualquer tipo. Existem vários métodos para trabalhar com o set, você pode pesquisar por eles [aqui](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

```JS
    let setSkills = new Set(["JS", "React", "Polymer"]);

    //para saber o tamanho do set
    setSkills.size

    //para adiconar valores use o método add() e mesmo que passe valores repetidos ou já existente ele só adicionará o valor uma vez, ou seja, ele não duplica valores.
    setSkills.add("Vue");
    setSkills.add("Vue");

    //para deletar
    setSkills.delete("Vue");

    //para verificar se existe um valor no set use o "has()"
    console.log(setSkills.has("JS"));

    //podemos usar o iterator do set 
    let it = setSkills.values();

    //com o iterator podemos percorrer todos os valores do set
    for(skill of it) {
        console.log(skill);
    }

    //podemos usar também o next()
    console.log(it.next());
```