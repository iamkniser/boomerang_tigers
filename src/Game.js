// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().
// const readline = require('readline');
//
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
// const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const runInteractiveConsole = require('./keyboard');

const { User, Session } = require('../db/models');
// const readline = require('readline');

// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero(0); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy(trackLength - 1);
    // this.boomerang = boomera
    this.view = new View();
    this.track = [];
    this.count = 0;
    this.time = 0;
    // this.name = process.argv[2];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
    // this.enemy.moveLeft();
    this.track[this.enemy.position] = this.enemy.skin;
    if (this.hero.boomerang) this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
    if (this.hero.boomerang) this.hero.boomerang.fly();
    // this.hero.attack();
  }

  async run() {
    const nick = process.argv[2];
    // console.log(nick);
    const nicknameq = await User.create({
      nickname: nick,
    });
    const result = await Session.create({
      time: this.time.toFixed(1),
      score: this.count,
      user_id: nicknameq.id,
    });
    // const leaderBoard = await fs.readFile('./')
  }

  async check() {
    const diff = Math.abs(this.enemy.position - this.hero.boomerang?.position);
    if (this.hero.position === this.enemy.position) {
      await this.hero.die();
      await this.run();
      // this.run();
      await process.exit();
    }
    if (this.hero.position !== this.enemy.position) {
      this.enemy.moveLeft();
      // this.count += 1;
      // this.boomerang.moveToMonster = false;
      // this.enemy = new Enemy(this.trackLength - 1);
    }
    if (diff <= 1) {
      this.enemy.die();
      this.count += 1;
      this.enemy.position = this.trackLength - 1;
      this.hero.boomerang.moveToMonster = false;
    }
    if (this.hero.position === this.hero.boomerang?.position && !this.hero.boomerang?.moveToMonster) {
      this.hero.boomerang = undefined;
    }
  }

  async bestResults() {
    const res = await Session.findAll({
      attributes: ['score', 'time'],
      order: [['score', 'DESC']],
      limit: 5,
      raw: true,
    });
    return res;
  }

  async play() {
    // this.vvediNick();
    runInteractiveConsole(this.hero);
    setInterval(() => {
      this.time += 0.2;
      // this.hero.attack()
      // Let's play!
      // this.hero.attack();
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
      console.log(this.count);
      console.log(this.time.toFixed(1));
      console.log(this.bestResults());
    }, 200);
    // console.log(await this.bestResults());
  }
}

module.exports = Game;
