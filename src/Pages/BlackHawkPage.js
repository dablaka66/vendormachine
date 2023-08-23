import React from 'react'
import { Link } from 'react-router-dom';
export default function BlackHawkPage() {
  return (
    <div><h1>BlackHawkPage</h1>
    <img src={require('./Images/blackhawk.PNG')} />
    <Link to="/Machine">Go Back</Link> </div>
    
  )
}
