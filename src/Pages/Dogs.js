import React from 'react'
//import RouterDogs from './RouterDogs'
import { Link } from "react-router-dom";

/* export default function Dogs() {
  return (
    <div>
      <h1>Dogs</h1>
    <RouterDogs />
    </div>
  )
} */

 export default function Dogs({dogs}) {
  return (
    <div>
      <h1>Dogs</h1>
      <h2 className="text-center">
            THIS IS THE DOGS LIST AVILABLE IN THIS MOMENT.
          </h2>
     <div>
     {dogs.map(d => (
          <div className="col-3 text-center" key={d.name}>
            <img src={require(`./Images/${d.src}.jpg`)} alt={d.name} />
            <h3 className="mt-3">
              <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
            </h3>
          </div>
        ))}
      </div>     
    
    </div>
  )
} 