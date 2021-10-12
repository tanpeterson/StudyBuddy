import { FC, useState } from "react";

/**
 * The page for when Edit Deck is clicked
 */

 const EditDeck:FC = () => {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  const sendCards = async () => {
    const response = await fetch("http://localhost:3000/EditDeck", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({front: front, back: back}),
    })
    console.log(response)
  }

  return(
  <div>
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

export default EditDeck;