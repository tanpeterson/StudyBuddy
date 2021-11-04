const models = require('../models/cardModels');
const browserObject = require('../../src/scraper/browser');
const pageController = require('../../src/scraper/pageController')

const deckController = {
  addCard(req, res, next){
    if(req.body.deck === ''){
      console.log('No deck selected');
      return next()
    }
    models.Card.find({ front:req.body.front, back:req.body.back }, (err, docs) => {
      if(docs.length){
        console.log('Card already exists')
      } else{
        models.Card.create(req.body, (err, card) => {
          if(err) return console.log(err);
          else {
            // console.log('Should add to: ', req.body.deck);
            models.Deck.findOneAndUpdate({name: req.body.deck}, {"$push": {cards: card._id.toString()}}, (err, doc) => {
              if(err) console.log(err);
              console.log('Card succesfully added');
            }) 
          };
        })
      }
    })
    return next();
  },

  getDecks(req, res, next){
    models.Deck.find({}, (err, docs) => {
      res.return = docs;
      next()
    })
  },

  displayCards(req, res, next){
    models.Deck.find({ name: req.body.deck }, (err, docs) => {
      const arrOfCards = docs[0].cards;
      models.Card.find({ '_id' : { $in: arrOfCards} }, (err, docs) => {
        res.return = docs;
        next()
      })
    })
  },

  getLyrics(req, res, next){
    let browserInstance = browserObject.startBrowser();
    pageController(browserInstance)
  }
}

module.exports = deckController;