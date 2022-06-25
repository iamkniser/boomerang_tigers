const cfonts = require('cfonts');

const style1 = {
  font: 'simple3d', // define the font face
  align: 'center', // define text alignment
  background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
  letterSpacing: 1, // define letter spacing
  lineHeight: 1, // define the line height
  space: true, // define if the output text should have empty lines on top and on the bottom
  maxLength: '0', // define how many character can be on one line
  gradient: 'yellow,green', // define your two gradient colors
};
const style2 = {
  font: 'simple', // define the font face
  align: 'center', // define text alignment
  colors: 'green,blue',
  background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
  letterSpacing: 1, // define letter spacing
  lineHeight: 1, // define the line height
  space: false, // define if the output text should have empty lines on top and on the bottom
  maxLength: '0', // define how many character can be on one line
  // gradient: '', // define your two gradient colors
};

// Сделаем отдельный класс для отображения игры в консоли.
class View {
  constructor({ track, hero }) {
    this.track = track;
    this.hero = hero;
  }

  render(track) {
    const yourTeamName = 'Command';

    // Тут всё рисуем.
    console.clear();
    cfonts.say('BOOMERANG', style1);
    console.log(`${' '.repeat(88)}${'🍪'.repeat(53)}`);

    // console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    // console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    // console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    // console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    // console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    // console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    // console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    // console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    // console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🍪${' '.repeat(102)}🍪`);
    console.log(`${' '.repeat(88)}🍪${' '.repeat(102)}🍪`);
    console.log(`${' '.repeat(88)}🍪${' '.repeat(102)}🍪`);
    console.log(`${' '.repeat(88)}🍪${track.join('')}🍪`);
    console.log(`${' '.repeat(88)}🍪${' '.repeat(102)}🍪`);
    console.log(`${' '.repeat(88)}🍪${' '.repeat(102)}🍪`);
    console.log(`${' '.repeat(88)}🍪${' '.repeat(102)}🍪`);
    // console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    // console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    // console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    // console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    // console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    // console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    // console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    // console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    // console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);

    console.log(`${' '.repeat(88)}${'🍪'.repeat(53)}`);
    console.log('\n');
    console.log(`${' '.repeat(89)}ENEMIES KILLED: ${this.hero.countDie}`);

    cfonts.say('Created by', style2);
    cfonts.say('"fettuccine"', style2);
  }
}

module.exports = View;
