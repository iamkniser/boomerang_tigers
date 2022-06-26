// Наш герой.
const Boomerang = require('./Boomerang');

class Hero {
  constructor(position) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = position;
    // this.boomerang = new Boomerang();
  }

  moveLeft() {
    // Идём влево.
    if (this.position !== 0) {
      this.position -= 1;
    }
  }

  moveRight() {
    // Идём вправо.
    if (this.position < 30) {
      this.position += 1;
    }
  }

  attack() {
    // Атакуем.
    this.boomerang = new Boomerang(this.position + 1);
    // if (this?.boomerang?.position <= this.hero.position) {
    //   this.boomerang = new Boomerang(this.position + 1);
    // }
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
  }
}

module.exports = Hero;
