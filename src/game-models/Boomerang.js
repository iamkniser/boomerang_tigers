// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!
const {
  popal,
  smert,
  letit,
  MainTheme,
} = require('./Audio');

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = 0;
  }

  fly() {
    this.moveRight();
    this.moveLeft();
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    letit();

    this.position += 1;
  }
}

module.exports = Boomerang;
