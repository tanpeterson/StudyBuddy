require('dontenv').config();
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
})

const Card = mongoose.model('card', cardSchema);

module.exports = { Card }