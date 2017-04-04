# Class

## Herança Prototipal

> Permite construir classes e propriedades de objetos obtendo herança prototipal.

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