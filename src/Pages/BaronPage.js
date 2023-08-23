import React from 'react'
import {Link} from 'react-router-dom';

export default function BaronPage() {
  return (
    <div><h1>Baron</h1>
    <img src={require('./Images/baron.PNG')} />
    <Link to="/Machine">Go Back</Link> </div>
  )
}
