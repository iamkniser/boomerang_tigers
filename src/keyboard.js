// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.
function runInteractiveConsole(hero) {
  const keyboard = {
    space: () => (!hero.boomerang ? hero.attack() : null),
    d: () => hero.moveRight(),
    a: () => hero.moveLeft(),
  };
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      // вызываем бумеранг и циклом пролетаемся по массиву, до Врага
      if (key.name in keyboard) {
        keyboard[key.name]();
      }
      // Прерывание программы.
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}
// r: () => console.log('r'),
// t: () => console.log('t'),
// y: () => console.log('y'),

// Какая-то функция.

// Давай попробуем запустить этот скрипт!

module.exports = runInteractiveConsole;
