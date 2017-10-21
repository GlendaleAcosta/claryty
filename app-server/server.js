const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// const sequelize = require('./sequelize');
const db = require('./database');

dotenv.load({ path: '.env' });

const PORT = process.env.PORT || 3100;
const app = express();

// Database connection
// sequelize.authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, '../build')));

// Controllers
const drugCtrl = require('./controllers/drugCtrl');

// Routes
app.get('/api/drug', drugCtrl.getDrug);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});


// Server
app.listen(PORT, () => {
  console.log(`App is up on port ${PORT}`);
});
