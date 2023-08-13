import React from 'react';
import {NavLink} from 'react-router-dom';
export default function NavBar() {
  return (
    <nav>
        <ul>
            
            <li>
                <NavLink to="/Dornier" activeclassname="active">Dornier</NavLink>
            </li>
            <li>
                <NavLink to="/Mustang" activeclassname="active">Mustang</NavLink>
            </li>
            <li>
                <NavLink to="/Baron" activeclassname="active">Baron</NavLink>
            </li>
            <li>
                <NavLink to="/Hydroplanes" activeclassname="active">HydroPlanes</NavLink>
            </li>
            <li>
                <NavLink to="/BlackHawk" activeclassname="active">BlackHawk</NavLink>
            </li>
            <li>
                <NavLink to="/" activeclassname="active">Home</NavLink>
               
            </li>
            <li>
                <NavLink to="/Login" activeclassname="active">Login</NavLink>
               
            </li><li>
                <NavLink to="/Register" activeclassname="active">Register</NavLink>
               
            </li><li>
                <NavLink to="/Payment" activeclassname="active">Payment</NavLink>
               
            </li><li>
                <NavLink to="/Dash" activeclassname="active">Dash</NavLink>
               
            </li>
        </ul>
    </nav>
  )
}
