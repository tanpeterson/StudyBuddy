const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const SpotifyWebApi = require('spotify-web-api-node');
const PORT = 3000;

const deckControllers = require('./controllers/deckControllers');


app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));


app.post('/CreateDeck', deckControllers.addCard, (req, res) => {
  console.log('server: ');
})

app.get('/getDecks', deckControllers.getDecks, (req, res) => {
  res.status(200).send(res.return);
})

app.post('/getLyrics', (req, res) => {
  const options = {
    apiKey: '03TTVsJodMf8VyImV2re81LSLgOsauvA8-l5Mu98nlh05jGQa0JHwsICcdDGnOub',
    title: req.body.title,
    artist: req.body.artist,
    optimizeQuery: false //was true
  };
  res.status(200).send(options);
})

app.post('/DisplayCards', deckControllers.displayCards, (req, res) => {
  console.log('sending this back: ', res.return)
  res.status(200).set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }).json(res.return);
})

module.exports = app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
