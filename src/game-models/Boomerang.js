// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(position) {
    this.skin = '🌀';
    this.position = position;
    this.moveToMonster = true;
  }

  fly() {
    if (this.moveToMonster === true) {
      this.moveRight();
    } else {
      this.moveLeft();
    }
  }

  moveRight() {
    if (this.position < 30) {
      this.position += 1;
    }
  }

  moveLeft() {
    if (this.position !== 0) {
      this.position -= 1;
    }
  }

  // fly() {
  //   this.moveToMonster === true ? this.moveLeft() : this.moveRight()
  // }
  //   // const movetoEnemy = setInterval(() => {
  //   //   this.moveRight();
  //   // }, 200);
  //   // if (this.position === this.enemy.position || this.position === this.trackLength) {
  //   //   clearInterval(movetoEnemy);
  //   // }
  //   // const moveBack = setInterval(() => {
  //   //   this.moveLeft();
  //   // }, 200);
  //   // if (this.position === this.hero.position) {
  //   //   this.hero.hasBoomerang = true
  //   //   clearInterval(moveBack);
  //   // }
  //
  // moveLeft() {
  //   // Идём влево.
  //   this.position -= 1;
  // }
  //
  // moveRight() {
  //   // Идём вправо.
  //   this.position += 1;
  // }
}

module.exports = Boomerang;
