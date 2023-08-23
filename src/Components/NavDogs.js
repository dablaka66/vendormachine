import React from 'react'
import { NavLink } from "react-router-dom"

export default function NavDogs({dogs}) {
    const links = dogs.map(dog => (
    <NavLink 
      key={dog.name} 
      to={`/dogs/${dog.name.toLowerCase()}`} 
    >
      {dog.name}
    </NavLink>
  ));
  
    return (
    <div>
        <h1>Dogs List</h1>
        <NavLink to="/dogs" end>
        Home
      </NavLink>
      {links}
    </div>
  )
}
