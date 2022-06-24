// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor() {
    this.skin = '🚽';
    this.position = 0;
  }

  fly() {
    this.moveRight();
    this.moveLeft();
  }

  moveLeft() {
    setInterval(() => {
      this.position -= 1;
    }, 25)
  }

  moveRight() {
    setInterval(() => {
      this.position += 1;
    }, 25)
  }
}

module.exports = Boomerang;
