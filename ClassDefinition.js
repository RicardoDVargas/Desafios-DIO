class caracter{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    availableClasses(type){
        const classes = {
            0: ["Ninja"],
            1: ["Warrior"],
            2: ["Mage"],
            3: ["Monge"]
        }
        return classes[type]
    }
    availableMagics(type){
        const magics  = {
            0: ["Shuriken"],
            1: ["Sword"],
            2: ["Wizard"],
            3: ["Marcial Arts"]
        }
        return magics[type]
    }
    atack(){
        console.log(`${this.name} the ${this.availableClasses(this.type)} attacked using ${this.availableMagics(this.type)}`)
    }
}

let hero = new caracter("Ricardo", 21, 1)

hero.atack()