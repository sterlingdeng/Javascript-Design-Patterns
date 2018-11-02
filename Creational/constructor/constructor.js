// ES5 Syntax

function Hero(name, hp, mana, speed, attack) {
  // Set the basic attributes to `this`
  this.name = name;
  this.hp = hp;
  this.mana = mana;
  this.speed = speed;
  this.attack = attack;

  function greet() {
    console.log(`My name is ${this.name}`);
  }

  function fight() {
    console.log(`${this.name} uses ${this.attack}`);
    this.mana -= 5;
    console.log(`${this.mana} left`);
  }
}

var batman = new Hero("Batman", 100, 75, 50);

batman.name; // "Batman"
batman.hp; // 100
batman.mana; // 75
batman.speed; // 50

// New ES6 Class Syntax

class Villian {
  constructor(name, hp, mana, speed, attack) {
    this.name = name;
    this.hp = hp;
    this.mana = mana;
    this.speed = speed;
    this.attack = attack;
  }

  greet() {
    console.log(`My name is ${this.name}`);
  }

  fight() {
    console.log(`${this.name} uses ${this.attack}`);
    this.mana -= 5;
    console.log(`${this.mana} left`);
  }
}

const joker = new Villian("Joker", 125, 25, 25);
