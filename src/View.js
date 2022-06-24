const cfonts = require('cfonts');

const style1 = {
  font: 'block', // define the font face
  align: 'center', // define text alignment
  background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
  letterSpacing: 1, // define letter spacing
  lineHeight: 1, // define the line height
  space: true, // define if the output text should have empty lines on top and on the bottom
  maxLength: '0', // define how many character can be on one line
  gradient: 'yellow,black', // define your two gradient colors
};
const style2 = {
  font: 'block', // define the font face
  align: 'center', // define text alignment
  background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
  letterSpacing: 1, // define letter spacing
  lineHeight: 1, // define the line height
  space: true, // define if the output text should have empty lines on top and on the bottom
  maxLength: '0', // define how many character can be on one line
  gradient: 'orange', // define your two gradient colors
};

// Сделаем отдельный класс для отображения игры в консоли.
class View {
  constructor({ track, hero }) {
    this.track = track;
    this.hero = hero;
  }

  render(track) {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();
    cfonts.say('BOOMERANG', style1);
    console.log(`${' '.repeat(88)}${'🟪'.repeat(53)}`);

    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${track.join('')}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);
    console.log(`${' '.repeat(88)}🟪${' '.repeat(102)}🟪`);

    console.log(`${' '.repeat(88)}${'🟪'.repeat(53)}`);
    console.log('\n');
    console.log(`${' '.repeat(89)}ENEMIES KILLED: ${this.hero.countDie}`);

    cfonts.say(`Created by "${yourTeamName}" with love`, style2);
  }
}

module.exports = View;
