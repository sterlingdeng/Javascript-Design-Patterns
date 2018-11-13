// Decorator Pattern
// With ES6 and Class Syntax

class Hero {
  constructor(name, baseDamage) {
    this.name = name || "Axe";
    this.baseDamage = baseDamage || 100;
    this.currentDamage = baseDamage || 100;
    this.items = {};
  }

  setItem(itemObject) {
    let [name, dmg] = Object.entries(itemObject)[0];
    this.items[name] = dmg;
    return this;
  }

  getDamage() {
    this.currentDamage += Object.values(this.items).reduce((acc, curr) => {
      return acc + curr;
    });
    return this.currentDamage;
  }
}

const DrowRanger = new Hero("Drow Ranger", 36);

DrowRanger.setItem({ DivineRapier: 330 })
  .setItem({ BKB: 24 })
  .setItem({ ShadowBlade: 22 })
  .setItem({ Boots: 0 })
  .getDamage(); // Expect 412 damage

// The hero is decorated with items using the .setItem method, and the total damage is calculated with .getDamage()
