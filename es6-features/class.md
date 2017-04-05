# Class

## Herança Prototipal

> Permite construir propriedades de objetos obtendo herança prototipal.

```JS
    //class
    function Studying(skill, place) {
        //constructor
        this.skill = skill;
        this.place = place;
    }
    
    //methods
    Studying.prototype.allDay = function() {
        console.log(`I'm studying ${this.skill} in the ${this.place}`);
    };

    const JS = new Studying("JS", "morning");
    const react = new Studying("React", "afternoon");

    JS.allDay()
    react.allDay()
```

## Criando Classes do ES6

```JS
    //class
    class Studying {
        constructor(skill, place) {
            this.skill = skill;
            this.place = place;
        };

        allDay() {
            console.log(`I'm studying ${this.skill} in the ${this.place}`)
        }

        static info() {
            console.log(`This is a class for create study list`);
        };

        get skill() {
            console.log(`My preferred skill is ${JS}`);
        };

        set newSkill(name) {
            this.name = name;
        };
    };

    let JS = new Studying("JS", "morning");
    let react = new Studying("React", "afternoon");

    JS.allDay()
    react.allDay()
```
