const Ninja = require('./Ninja.js')
const Sensei = require('./Sensei.js')

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

var superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();