const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.load({ path: '.env' });

const PORT = process.env.PORT || 3100;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, '../build')));

// Controllers
const drugCtrl = require('./controllers/drugCtrl');
const reactionCtrl = require('./controllers/reactionCtrl');
const deathCtrl = require('./controllers/deathCtrl');

// Routes
app.post('/api/death', deathCtrl.postDeath);
app.post('/api/drug-info', drugCtrl.postDrug);
app.post('/api/reactions', reactionCtrl.postReaction);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});


// Server
app.listen(PORT, () => {
  console.log(`App is up on port ${PORT}`);
});
