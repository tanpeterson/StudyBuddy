import { useState } from "react";

/**
 * The page for when Edit Deck is clicked
 */

 const CreateDeck= ({decks}) => {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [currentDeck, setCurrentDeck] = useState('')
  const deckList = [<option> Choose Deck </option>]
  
  if(Array.isArray(decks)) {
    for(const deck of decks){
      deckList.push(<option key={`${deck.name}create`} value={deck.name}>{deck.name}</option>)
    }
  }

  const sendCards = async () => {
    const response = await fetch("http://localhost:3000/CreateDeck", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({front: front, back: back, deck: currentDeck}),
    })
  }

  return(
  <div className='addCards'>
    <div>
      <select id="Decks" value={currentDeck} onChange={ e => setCurrentDeck(e.target.value)}>
        {deckList}
      </select>
    </div>
    <div className='front'>
      <p>Front</p>
      <input className='front' value={front} onChange={ e => setFront(e.target.value) }/>
    </div>
    <div className='back'>
      <p>Back</p>
      <input className='back' value={back} onChange={ e => setBack(e.target.value) }/>
    </div>
    <button className='Submit' onClick={ e => sendCards() }>Submit</button>
  </div>
)}

export default CreateDeck;