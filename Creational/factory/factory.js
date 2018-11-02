// ES6 syntax for factory design pattern
// Use factory function over constructor functions when
// 1) You can't anticipate the class of objects it must create
// 2) A class wants it's subclass to specify the object it creates

class Spawn {
  createObject(type) {
    switch (type) {
      case "melee":
        return new MeleeCreep();
      case "ranged":
        return new RangedCreep();
      case "catapult":
        return new Catapult();
      default:
        return "Unexpected type";
    }
  }
}

class MeleeCreep {
  constructor() {
    this.attackType = "melee";
    this.hp = 400;
    this.dmg = 30;
  }
  attack() {
    return "I fight close range";
  }
}

class RangedCreep {
  constructor() {
    this.attackType = "ranged";
    this.hp = 250;
    this.dmg = 40;
  }
  attack() {
    return "I attack from a distance";
  }
}

class Catapult {
  constructor() {
    this.attackType = "ranged";
    this.hp = 800;
    this.dmg = 100;
  }
  attack() {
    return "I aggro towers over creeps";
  }
}

const MidLaneSpawn = new Spawn();
const rangedCreep = MidLaneSpawn.createObject("ranged");
console.log(rangedCreep.attack()); // I attack from a distance
