// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().
const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const Keyboard = require('./keyboard');
// const Boomerang = require('./game-models/Boomerang');
const {
  popal,
  smert,
  letit,
  MainTheme,
} = require('./Audio')


// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength}) {
    this.time = 0
    this.track = [];
    this.trackLength = trackLength;
    this.hero = new Hero(); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.view = new View();
    this.boomerang = new Boomerang(this.hero.position);
    this.keyboard = new Keyboard({ hero: this.hero, boomerang: this.boomerang });
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.boomerang.position] = this.boomerang.skin;
    this.track[this.hero.position] = this.hero.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
      smert();
    }
    if (this.boomerang.position >= this.enemy.position) {
      this.enemy.die();
      popal();
      this.hero.countEnemyDie()    
      this.enemy = new Enemy({ position: this.trackLength - 5 });
      this.track[this.enemy.position] = this.enemy.skin;
      this.boomerang.moveLeft();
    }
    if (this.boomerang.position <= this.hero.position) {
      this.boomerang.position = this.hero.position;
    }

  }

  play() {
    MainTheme();
    this.keyboard.runInteractiveConsole()
    // let start = new Date() 
    setInterval(() => {
      //счетчик времени // let start = new Date()  if(this.hero.die() let end = new Date() const time = end - start * 1000 = 
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
      this.enemy.moveLeft();
    }, 100);
  //   if(this.hero.die()){ 
  //     let end = new Date()
  //    this.time = end.getTime() - start.getTime()
  // }
}
}

module.exports = Game;
