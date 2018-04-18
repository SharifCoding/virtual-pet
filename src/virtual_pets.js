// MAGIC NUMBERS
const MAXIMUM_FITNESS = 10;
// Implemented in this.walk function.
const MINIMUM_AGE = 0;
// Implemented in Pet function.
const MINIMUM_HUNGER = 0;
// Implemented in Pet function.
// Part of refactoring and magic number process.

// CONSTRUCTOR FUNCTION
function Pet(name) {
  this.name = name;
  this.age = MINIMUM_AGE;
  // .age starts from 0 and not undefined.
  this.hunger = MINIMUM_HUNGER;
  // The Pet has an initial .hunger of 0.
  this.fitness = MAXIMUM_FITNESS;
  // The Pet has an initial .fitness of 10.
};
/* Pet function defined. When using a constructor function, keyword 'this' is used, 'this.name = name' refers to the object returned from by calling 'new Pet()', 'this.name' refers to the name property of that object. */

// GETTER METHOD
Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  }
};
/* Getter methods should be placed after the constructor function definition and before the first method definition. True/False conditions:
- if the pet's fitness is 0 or less, it should return `false`.
- if the pet's hunger is 10 or more, it should return `false`.
- if the pet's age is 30 or more, it should return `false`.
- otherwise it should return `true`.
*/

// OBJECTS PROTOTYPE
Pet.prototype.growUp = function() {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};
// Prototype method .growUp added, part of Pet function.

Pet.prototype.walk = function() {
  if (!this.isAlive) throw new Error('Your pet is no longer alive :(');
  else if ((this.fitness + 4) <= MAXIMUM_FITNESS) return this.fitness += 4;
  else this.fitness = 10;
};
// Prototype method .walk added, part of Pet function.
// Throw statement added with Error object.
// Control flow implemented with maximum .fitness value of 10.
// Calling .walk will increase the Pet's fitness level by 4.

Pet.prototype.feed = function() {
  if (!this.isAlive) throw new Error('Your pet is no longer alive :(');
  else if ((this.hunger - 3) >= MINIMUM_HUNGER) return this.hunger -= 3;
  else this.hunger = 0;
};
// Prototype method .feed added, part of Pet function.
// Throw statement added with Error object.
// Control flow implemented with minimum .hunger value of 0.
// Calling .feed will decrease the Pet's hunger level by 3.

Pet.prototype.checkUp = function() {    
  if ((this.fitness <= 0) && (this.hunger >= 10)) return 'Your pet is no longer alive :(';  
  else if ((this.fitness <= 3) && (this.hunger >= 5)) return 'I am hungry AND I need a walk';
  else if (this.hunger >= 10) return 'Your pet is no longer alive :(';
  else if (this.hunger >= 5) return 'I am hungry';
  else if (this.fitness <= 0) return 'Your pet is no longer alive :(';
  else if (this.fitness <= 3) return 'I need a walk';
  else return 'I feel great';
};
/* Prototype method .checkUp that lets you know how the pet is feeling.
Control flow implemented to meet following conditions:
- if the pet's fitness is 3 or less, it should return 'I need a walk'.
- if the pet's hunger is 5 or more, it should return 'I am hungry'.
- if both of the above are true, it should return 'I am hungry AND I need a walk'
- if neither of the above are true, it should return 'I feel great!'
UPDATE: additional return values added if the pet is not alive.
*/

// RANDOM COMMANDS
const pet = new Pet('Fido');
pet.name;
// New instance of Pet created with 'Fido' assigned to 'pet.name'.

const fido = new Pet('Fido');
const rex = new Pet('Rex');
const fido2 = new Pet('fido');
// Instances of Pet, where both Fido and Rex will have their own distinct growUp functions.
// In this example, `fido` and `fido2` are both distinct objects, they are seperate entities from each other. So they each have a unique identity.

rex.growUp = function () {
  this.age += 5;
}
// Reassign the value of growUp on Rex, rex.growUp calling will make Rex age 5 years, but fido.growUp will only add 1 year to Fido's age.

// EXPORTS FUNCTION
module.exports = Pet;
// Exports function from the file.
