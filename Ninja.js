class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

        sayName(){
            console.log("Name : " + this.name);
        }

        showStats(){
            console.log("Name : " + this.name);
            console.log("Strength : " + this.strength);
            console.log("Speed : " + this.speed);
            console.log("Health : " + this.health);
        }

        drinkSake(){
            this.health += 10;
            console.log("slurp, ahhh")
            console.log("Health : " + this.health)
        }
}
module.exports = Ninja;