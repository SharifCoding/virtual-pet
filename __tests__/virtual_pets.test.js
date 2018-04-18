const { Pet } =
require ('../src/virtual_pets');
// Require the `pet` function into the unit test.

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });
});
// Testing the Pet function returns an object.

describe('constructor', () => {
  it('sets the name property', () => {
    const pet = new Pet('Fido');
    expect(pet.name).toEqual('Fido');
      
    const buster = new Pet('Buster');
    expect(buster.name).toEqual('Buster');
  });
});
// Testing the name property on the object being created by the Pet function.

describe('constructor', () => {
  it('has a initial age of 0', () => {
    const pet = new Pet('Fido');
    expect(pet.age).toEqual(0);
  });
});
// Checking the first call to 'pet.age' return '0' and not 'undefined'.

describe('growUp', () => {
  it('increments the age by 1', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.age).toEqual(1);
  });
});
// Checking 'pet.age' in growUp function increments the age by 1.

describe('growUp', () => {
  it('increments the hunger by 5', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });
});
// Checking 'pet.hunger' in growUp function increments the hunger by 5.

describe('growUp', () => {
  it('decrements the fitness by 3', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });
});
// Checking 'pet.fitness' in growUp function decrements the fitness by 3.

describe('walk', () => {
  it('increases fitness by 4', () =>{
    const pet = new Pet('Fido');
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });
});
// Testing 'pet.walk' function return additional +4 to 'pet.fitness'.

describe('walk', () => {
  it('increases fitness by a maximum of 10', () => {
    const pet = new Pet('Fido');
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
});
// Testing 'pet.walk' function with magic number 'MAXIMUM_FITNESS'.

describe('walk', () => {
  xit('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido'); 
    pet.fitness = 0;
    pet.walk();
    expect(pet.fitness).toThrow('Your pet is no longer alive :(');
  });
});
// Testing 'pet.walk' Throw statement added with Error object.

describe('feed', () => {
  it('decreases hunger by 3', () =>{
    const pet = new Pet('Fido');
    pet.hunger = 9;
    pet.feed();
    expect(pet.hunger).toEqual(6);
  });
});
// Testing 'pet.feed' function return substraction -3 to 'pet.hungry'.

describe('feed', () => {
  it('decreases hunger to a minimum of 0', () => {
    const pet = new Pet('Fido');
    pet.hunger = 3;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
});
// Testing 'pet.feed' function with magic number 'MINIMUM_HUNGER'.

describe('feed', () => {
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido'); 
    pet.hunger = 10;
    expect(pet.feed).toThrow('Your pet is no longer alive :(');
  });
});
// Testing 'pet.feed' Throw statement added with Error object.

describe('checkUp', () => {
  it('if the pets fitness is 3 or less, returns I need a walk', () => {
    const pet = new Pet('Fido');
    pet.fitness = 3;
    expect(pet.checkUp()).toEqual('I need a walk');
  });
});
// Testing control flow 'pet.checkUp' function when meeting .fitness condition.

describe('checkUp', () => {
  it('if the pets hunger is 5 or more, returns I am hungry', () => {
    const pet = new Pet('Fido');
    pet.hunger = 5;
    expect(pet.checkUp()).toEqual('I am hungry');
  });
});
// Testing control flow 'pet.checkUp' function when meeting .hungry condition.

describe('checkUp', () => {
  it('if both fitness and hungry are true, returns I am hungry AND I need a walk', () => {
    const pet = new Pet('Fido');
    pet.fitness = 3;
    pet.hunger = 5;
    expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
  });
});
// Testing control flow 'pet.checkUp' function when meeting both .fitness && .hungry condition.

describe('checkUp', () => {
  it('if neither of the fitness and hungry are true, returns I feel great!', () => {
    const pet = new Pet('Fido');
    pet.fitness = 4;
    pet.hunger = 4;
    expect(pet.checkUp()).toEqual('I feel great');
  });
});
// Testing control flow 'pet.checkUp' function when not meeting both .fitness && .hungry condition.

describe('isAlive', () => {
  it('if the pets fitness is 0 or less, it should return false', () => {
    const pet = new Pet('Fido');
    pet.fitness = 0;
    expect(pet.isAlive).toEqual(false);
    const buster = new Pet('Buster');
    pet.fitness = 1;
    expect(pet.isAlive).toEqual(true);
    const rex = new Pet('Rex');
    pet.fitness = -1;
    expect(pet.isAlive).toEqual(false);
  });
});
// Checking 'pet.isAlive' getter method is returning false when meeting .fitness condition.

describe('isAlive', () => {
  it('if the pets hunger is 10 or more, it should return false', () => {
    const pet = new Pet('Fido');
    pet.hunger = 10;
    expect(pet.isAlive).toEqual(false);
    const buster = new Pet('Buster');
    pet.hunger = 11;
    expect(pet.isAlive).toEqual(false);
    const rex = new Pet('Rex');
    pet.hunger = 9;
    expect(pet.isAlive).toEqual(true);
  });
});
// Checking 'pet.isAlive' getter method is returning false when meeting .hunger condition.

describe('isAlive', () => {
  it('if the pets age is 30 or more, it should return false', () => {
    const pet = new Pet('Fido');
    pet.age = 30;
    expect(pet.isAlive).toEqual(false);
    const buster = new Pet('Buster');
    pet.age = 31;
    expect(pet.isAlive).toEqual(false);
    const rex = new Pet('Rex');
    pet.age = 29;
    expect(pet.isAlive).toEqual(true);
  });
});
// Checking 'pet.isAlive' getter method is returning false when meeting .age condition.

describe('isAlive', () => {
  it('if the pets fitness >= 1, hunger <= 9, and age <= 29, it should return true', () => {
    const pet = new Pet('Fido');
    pet.fitness = 1;
    pet.hunger = 9;
    pet.age = 29;
    expect(pet.isAlive).toEqual(true);
    const buster = new Pet('Buster');
    pet.fitness = 0;
    pet.hunger = 10;
    pet.age = 30;
    expect(pet.isAlive).toEqual(false);
  });
});
// Checking 'pet.isAlive' getter method is returning true when meeting .fitness, .hunger, and .age conditions.

describe('checkUpDeath', () => {
  it('if the pets fitness is 0, returns Your pet is no longer alive', () => {
    const pet = new Pet('Fido');
    pet.fitness = 0;
    expect(pet.checkUp()).toEqual('Your pet is no longer alive :(');
  });
});
// Testing control flow 'pet.checkUp' function when meeting .fitness condition.

describe('checkUpDeath', () => {
  it('if the pets hunger is 5 or more, returns Your pet is no longer alive', () => {
    const pet = new Pet('Fido');
    pet.hunger = 10;
    expect(pet.checkUp()).toEqual('Your pet is no longer alive :(');
  });
});
// Testing control flow 'pet.checkUp' function when meeting .hungry condition.

describe('checkUpDeath', () => {
  it('if both fitness and hungry are true, returns Your pet is no longer alive', () => {
    const pet = new Pet('Fido');
    pet.fitness = 0;
    pet.hunger = 10;
    expect(pet.checkUp()).toEqual('Your pet is no longer alive :(');
  });
});
// Testing control flow 'pet.checkUp' function when meeting both .fitness && .hungry condition.
