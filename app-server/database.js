const sqlite3 = require('sqlite3').verbose();
const Promise = require('bluebird');

const db = new sqlite3.Database('./results.db', ((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
}));


module.exports = db;

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize({
//   host: 'localhost',
//   dialect: 'sqlite',

//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000,
//   },

//   storage: './results.db',
// });


// module.exports = sequelize;
