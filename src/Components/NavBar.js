import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
export default function NavBar() {
  return (
    <nav>
        <ul>
            
            <li>
                <NavLink to="/Dornier" activeClassName="active">Dornier</NavLink>
            </li>
            <li>
                <NavLink to="/Mustang" activeClassName="active">Mustang</NavLink>
            </li>
            <li>
                <NavLink to='/Baron' activeClassName="active">Baron</NavLink>
            </li>
            <li>
                <NavLink to='/BlackHawk' activeClassName="active">BlackHawk</NavLink>
            </li>
            <li>
                <NavLink exact to='/' activeClassName="active">Home</NavLink>
            </li>
        </ul>
    </nav>
  )
}
