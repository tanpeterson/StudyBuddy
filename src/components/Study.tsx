import { useState } from "react";
import '../styles/App.css';
import utils from "../utils/utils";

/**
 * The page for when Study is clicked
 */
const Study = ({decks}) => {
  const [currentDeck, setCurrentDeck] = useState('');
  const [deckOfCards, setDeckOfCards] = useState([]);
  const [value, setValue] = useState(0);
  const [side, setSide] = useState('front')
  let deckList = [<option> Choose Deck </option>];
  
  if(Array.isArray(decks)){
    for(const deck of decks){
      deckList.push(<option key={`${deck.name}study`} value={deck.name}>{deck.name}</option>)
    }
  }

  const sendDeck = async () => {
    if(currentDeck === ''){
      console.log('safety check')
      return
    }
    let data;
    const response = await fetch("http://localhost:3000/DisplayCards", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({deck: currentDeck}),
    })
    const body = await response.json();
    setDeckOfCards(utils.shuffleArray(body))
  }
  
  return(
      <div className='CardContainer'>
        <div>
          <select id="Decks" value={currentDeck} onChange={ e => setCurrentDeck(e.target.value)}>
            {deckList}
          </select>
          <button onClick={ e => sendDeck() }>Choose</button>
        </div>
          { deckOfCards.length > 0 ? 
          <div className='FlashCard'> 
            <p>{deckOfCards[value][side]}</p> 
            <div className='ButtonContainer'>
              <button onClick={e => setSide( side === 'front' ? 'back': 'front')}>Flip</button>
              <button onClick={e => {setValue( value < deckOfCards.length -1 ? value + 1 : (setDeckOfCards(utils.shuffleArray(deckOfCards)), 0)); setSide('front')}}>Next</button>
            </div> 
          </div>
          : null
          }
      </div>
  )
}

export default Study;