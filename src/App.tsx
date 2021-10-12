import './styles/App.css';
// import Card from './Card';
import React from 'react'
import Navigation from './Navigation';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navigation />
      <Main />
      </header>
    </div>
  );
}

export default App;
