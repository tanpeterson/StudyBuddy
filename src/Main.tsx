import { Route, Switch } from "react-router";
import Home from "./components/Home";
import Study from "./components/Study";
import CreateDeck from "./components/CreateDeck";
import EditDeck from "./components/EditDeck";
import React, { FC } from "react";

const Main:FC = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/Home' component={Home}></Route>
    <Route exact path='/Study' component={Study}></Route>
    <Route exact path='/CreateDeck' component={CreateDeck}></Route>
    <Route exact path='/EditDeck' component={EditDeck}></Route>
  </Switch>
);

export default Main;