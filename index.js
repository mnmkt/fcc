// ES6 practice

//-------------------------------------------------
var SpaceShuttle = function(targetPlanet){
this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus)



class SpaceShuttle {
constructor(targetPlanet){
this.targetPlanet = targetPlanet;
}
}
const zeus = new SpaceShuttle('Jupiter');

console.log(zeus)

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable{
    constructor(name){
    this.name = name
  }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'


//-------------------------------------------------

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer(){
    return this._author;
  }
  // setter
  set writer(updatedAuthor){
    this._author = updatedAuthor;
  }
}
const lol = new Book('anonymous');
console.log(lol.writer);
lol.writer = 'wut';
console.log(lol.writer);





function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat{
    constructor(temperature){
      this._temperature = 5/9 * (temperature - 32) ;
    }
    get temperature(){
      return this._temperature
    }
    set temperature(newTemp){
      this._temperature = newTemp
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C



//-------------------------------------------------
