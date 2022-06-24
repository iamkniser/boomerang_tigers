const player = require('play-sound')(opts = {});

async function popal() {
  await player.play('./src/sounds/congratulations.wav', (err) => {
    if (err) throw err;
  });
}
async function wavFlyBoomerang() {
  await player.play('./src/sounds/hold-your-horses.wav', (err) => {
    if (err) throw err;
  });
}

async function wavMainTheme() {
  await player.play('./src/sounds/2.wav', (err) => {
    if (err) throw err;
  });
}

async function smert() {
  await player.play('*******', (err) => {
    if (err) throw err;
  });
}

module.exports = {
  popal,
  smert
  wavFlyBoomerang,
  wavMainTheme,
};
