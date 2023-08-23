import React from 'react'
import { Link } from 'react-router-dom';
export default function MustangPage() {
  return (
    <div><h1>Mustangpage</h1>
    <img src={require('./Images/mustang.PNG')} />
    <Link to="/Machine">Go Back</Link> </div>
  )
}
