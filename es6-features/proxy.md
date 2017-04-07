# Proxy

## Introdução ao Proxy

> É uma forma de definir comportamento diferente para métodos dentro de objetos.

```JS
    let studying = {
        skill: "JS",
        place: "home"
    };
    
    let proxy = new Proxy(
                    studying, {
                        get(target, skill) {
                            console.log("Alguém está pedindo o skill");
                            return target[skill];
                        },
                        set(target, skill, value) {
                            console.log("Alguém está alterando o skill");
                            target[name] = value.toUpperCase();
                        }
                    });
    
    proxy.skill
    proxy.skill = "React"
```