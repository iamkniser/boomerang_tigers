// Основной файл.
// Запускает игру.
const Game = require('./src/Game');
const { User, Session } = require('./db/models');

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
});

game.play();

