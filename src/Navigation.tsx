import React, { FC } from "react";
import { NavLink } from "react-router-dom";

/**
 * Nav bar
 */

const Navigation:FC = () => (
  <nav>
    <ul>
      <li> <NavLink exact activeClassName="current" to='/Home'> Home </NavLink></li>
      <li> <NavLink exact activeClassName="current" to='/Study'> Study </NavLink></li>
      <li> <NavLink exact activeClassName="current" to='/CreateDeck'> Create Deck </NavLink></li>
      <li> <NavLink exact activeClassName="current" to='/EditDeck'> Edit Deck </NavLink></li>
    </ul>
  </nav>
);

export default Navigation; 