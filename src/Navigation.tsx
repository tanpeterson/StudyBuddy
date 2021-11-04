import React, { FC } from "react";
import { NavLink } from "react-router-dom";

/**
 * Nav bar
 */

const Navigation:FC = () => (
  <nav>
    <ul>
      <li> <NavLink exact activeClassName="current" to='/Study'> Study </NavLink></li>
      <li> <NavLink exact activeClassName="current" to='/CreateDeck'> Add Cards </NavLink></li>
      <li> <NavLink exact activeClassName="current" to='/Home'> Songs </NavLink></li>
    </ul>
  </nav>
);

export default Navigation; 