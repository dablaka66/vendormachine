import React from 'react'
import { useLocation , useNavigate } from 'react-router-dom';


export default function HydroPlanesPage() {
  const location =  useLocation();
  const history = useNavigate(); 
  const query = new URLSearchParams(location.search);
  const count = parseInt(query.get("count")) || 0;
  console.log('count: ', count);

  
  const  handleNext =() => {
    console.log("Next");
    query.set("count", count  + 1);
    
    history(`/Hydroplanes?${query.toString()}`);
    console.log("history" , history);
  }
  return (
    <div><h1>HydroPlanesPage</h1>
    <hr/>
    <h1>count : {count}</h1>

    <button onClick={handleNext}>Next</button>
    </div>
  )
}
