import React from 'react'
import { Navigate , Link } from 'react-router-dom'

export default function DogInfo({dog}) {
    if (!dog) return  <Navigate to="/dogs" />
    return (

    <div>
        <h1>Dog Information</h1>
        <img src={require(`../Images/${dog.src}.jpg`)} alt={dog.name} />
        <h2>{dog.name}</h2>
        <h3>{dog.age} years old</h3>
        <ul>
          {dog.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
        <Link to="/dogs">Go Back</Link> 
    </div>
  )
}
