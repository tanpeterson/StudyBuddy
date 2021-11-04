import React, { useEffect, useState } from "react";
import { getLyrics, getSong } from 'genius-lyrics-api';


const Home = ({decks}) => {
  const [songTitle, setSongTitle] = useState('');
  const [songArtist, setSongArtist] = useState('');
  const [songLyrics, setSongLyrics] = useState('');
  const [frontCard, setFront] = useState('');
  const [backCard, setBack] = useState('');
  const [deck, setCurrentDeck] = useState('');
  const deckList = [<option> Choose Deck </option>]

  if(Array.isArray(decks)) {
    for(const deck of decks){
      deckList.push(<option key={`${deck.name}create`} value={deck.name}>{deck.name}</option>)
    }
  }

  // useEffect(
    // const options = fetch('http://localhost:3000/getLyrics') -> return the array fild({}) => all the links
    // const data = await options.json();
    // setLinks(data)

  // );

  const sendCards = async () => {
    const response = await fetch("http://localhost:3000/CreateDeck", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({front: frontCard, back: backCard, deck: deck}),
    })
  }

  const fetchLyrics = async (title, artist) => {
    const options = await fetch('http://localhost:3000/getLyrics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({title: title, artist: artist}),
    })
    const data = await options.json();
    console.log('Options is', data)
    const lyrics = await getLyrics(data)
    setSongLyrics(lyrics)
    console.log(lyrics)
  }


  return (
    <div className='ThisContainer'>
      <div className='LyricsContainer'>
        <div className='inputBox'>
          <div className='song/artist'>
            <p>Song</p>
            <input className='songTitle' value={songTitle} onChange={ e => setSongTitle(e.target.value)}/>
          </div>
          <div className='song/artist'>
            <p>Artist</p>
            <input className='songArtist' value={songArtist} onChange={ e => setSongArtist(e.target.value)}/>
          </div>
        </div>
        <button onClick={()=> fetchLyrics(songTitle, songArtist)}>Lyrics</button>      
      </div>      
        <div>
        { songLyrics === '' ? 
          null :
          <pre>{songLyrics}</pre>  
        }
        </div>
      <div className="wordBank">
        <select id="Decks" value={deck} onChange={ e => setCurrentDeck(e.target.value)}>
          {deckList}
        </select>
        <p className="bankP">Front</p>
        <input className='front' value={frontCard} onChange={ e => setFront(e.target.value) }/>
        <p className="bankP">Back</p>
        <input className='back' value={backCard} onChange={ e => setBack(e.target.value) }/>
        <button className="wordBankButton" onClick={ e => sendCards()}>Add</button>
      </div>

    </div>
  );
};

export default Home;
