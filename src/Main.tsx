import { Route, Switch } from "react-router";
import Home from "./components/Home";
import Study from "./components/Study";
import CreateDeck from "./components/CreateDeck";
import EditDeck from "./components/EditDeck";
import React, { FC, useEffect, useState } from "react";

const Main:FC = () => {
  const [deck, setDeck] = useState();
  useEffect(() =>{
    fetch("http://localhost:3000/getDecks")
      .then(results => results.json())
      .then(data => {
        setDeck(data)
      })
  }, []);

  return(
  <Study decks={deck}/>
  // <Switch>
  //   <Route exact path='/' component={() => (<Study decks={deck}/>)}></Route>
  //   <Route exact path='/Home' component={() => (<Home decks={deck}/>)}></Route>
  //   <Route exact path='/Study' component={() => (<Study decks={deck}/>)}></Route>
  //   <Route exact path='/CreateDeck' component={() => (<CreateDeck decks={deck}/>)}></Route>
  //   {/* <Route exact path='/EditDeck' component={EditDeck}></Route> */}
  // </Switch>
  );
}

export default Main;