// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }
  
  attack(){
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= damage
  }
}

/* let soldier1 = new Soldier(100,30)

soldier1.receiveDamage(10) */


// Viking
class Viking extends Soldier {
  constructor (name, health, strength) {
    super(health, strength);
    this.name = name
  }

  receiveDamage(damage) {
    this.health -= damage    
    if (this.health <= 0) {
      return `${this.name} has died in act of combat`
    } else {
      return `${this.name} has received ${damage} points of damage`
    }    
  }

  battleCry(){
    return "Odin Owns You All!"
  }

  vikingAttack(vAttack) {
    this.attack = vAttack
  }
}


/* let vikingMorto = new Viking('Ragnarok', 100, 80)
 console.log(vikingMorto.receiveDamage(200)) 
console.log(vikingMorto.battleCry())
*/


// Saxon
class Saxon extends Soldier{
  receiveDamage(damage) {
    this.health -= damage
    if (this.health <= 0) {
      return "A Saxon has died in combat"
    } else {
    return `A Saxon has received ${damage} points of damage`
    }
  }
};


// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
