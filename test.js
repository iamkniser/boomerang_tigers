const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
// const ask = (query) => new Promise((resolve) => rl.question(query, resolve));
const { User, Session } = require('./db/models');
const { sequelize } = require('./db/models');

// const createUser = (userName) => {
//   userName.forEach(async (nickname) => {
//     await User.create({ nickname });
//   });
// };

const nicknames = async () => new Promise((resolve) => {
  rl.question('Введите ваш ник \n', (answer) => {
    resolve(answer);
    rl.close();
  });
});
// nicknames();

const run = async () => {
  const nick = await nicknames();
  // console.log(nick);
  const nicknameq = await User.create({
    nickname: nick,
  });
  const result = await Session.create({
    time: 10,
    score: 10,
    user_id: nicknameq.id,
  });
  // const leaderBoard = await fs.readFile('./')
};

// const filter = async () => {
//   const bestResults = await User.findAll({
//     include: [{ model: Session }],
//     attributes:['nickname','time','score'],
//     order: [
//       ['score', 'DESC'],
//     ],
//     limit:5,
//     raw: true,
//   });
// };

run();
