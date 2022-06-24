const player = require('play-sound')(opts = {});

async function popal() {
  await player.play('./src/sounds/popal.wav', (err) => {
    if (err) throw err;
  });
}
async function letit() {
  await player.play('./src/sounds/vistrel.wav', (err) => {
    if (err) throw err;
  });
}

async function MainTheme() {
  await player.play('./src/sounds/Thema.wav', (err) => {
    if (err) throw err;
  });
}

async function smert() {
  await player.play('smert.wav', (err) => {
    if (err) throw err;
  });
}

module.exports = {
  popal,
  smert,
  letit,
  MainTheme,
};
