const Ninja = require('./Ninja.js')
class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.health = 200;
        this.speed = 10
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months")
    }
    showStats(){
        super.showStats();
        console.log("wisdom : " + this.wisdom);
    }
}
module.exports = Sensei;