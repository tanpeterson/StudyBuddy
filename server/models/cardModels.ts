require('dotenv').config();
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_DB_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'flashCards'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  front: String,
  back: String,
});

const deckSchema = new Schema({
  name: String,
  cards: [{
    type: Schema.Types.ObjectId,
    ref: 'card',
    required: false,
  }]
})

const Card = mongoose.model('card', cardSchema, 'card');
const Deck = mongoose.model('deck', deckSchema, 'deck')

module.exports = { Card, Deck }