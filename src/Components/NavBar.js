import React from 'react';
import {NavLink} from 'react-router-dom';
export default function NavBar() {
  return (
    <nav>
        <ul>
            
            <li>
                <NavLink to="/Machine/Dornier" activeclassname="active">Dornier</NavLink>
            </li>
            <li>
                <NavLink to="/Machine/Mustang" activeclassname="active">Mustang</NavLink>
            </li>
            <li>
                <NavLink to="/Machine/Baron" activeclassname="active">Baron</NavLink>
            </li>
            <li>
                <NavLink to="/Machine/Hydroplanes" activeclassname="active">HydroPlanes</NavLink>
            </li>
            <li>
                <NavLink to="/Machine/BlackHawk" activeclassname="active">BlackHawk</NavLink>
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
