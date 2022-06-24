// Наш герой.

class Hero {
  constructor({ position, countDie = 0 }) {
    this.skin = '💃'; // можете использовать любые emoji '💃'
    this.position = position;
    this.countDie = countDie
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('💀 W A S T E D 💀');
    process.exit();
  }

  countEnemyDie(){
    this.countDie +=1
  }
}

module.exports = Hero;
