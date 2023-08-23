
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Machine from './Machine';
import Dogs from './Dogs';
import HomeBar from '../Components/HomeBar';
import ErrorPage from './ErrorPage';
import DornierPage from './DornierPage';
import AppRouter from '../routers/AppRouter';
import RouterDogs from './RouterDogs';
import dogdb from './db.json';
import axios from "axios";
import React, { useState, useEffect } from "react";
import DogInformation from './DogInformation';
import BaronPage from './BaronPage';
import HydroPlanesPage from './HydroPlanesPage';
import MustangPage from './MustangPage';
import BlackHawkPage from './BlackHawkPage';



export default function HomePage() {
  const [dogs, setDogs] = useState({
    data: null,
    isLoading: true
  });
  const [ifdid,setifdid] = useState(false);
/* setDogs({
    data: dogdb,
    isLoading: false
}) */

 //temporary axios is gettin network protocol error. 
/*   useEffect(() => {
    async function loadDogs(){
      const response = await axios.get("https://localhost:3000/dogdb")
      setDogs({
        data: response.data,
        isLoading: false

      }
      
      )
      console.log('response: ', response);
    }

    loadDogs()
    console.log('loadDogs: ', loadDogs);
  }, []) */
  
  useEffect( () => {
    
    
      setDogs({
      data: dogdb,
      isLoading: false
    
  })
  setifdid(true);
  
  console.log('data: ', dogs.data);
  
    },[]
  )
  if (dogs.isLoading) {
    return <h1>Loading...</h1>
  } 
  else {
  if (ifdid) {
    console.log('data antes del render: ', dogs.data);
    //.se evita que la primera ves se renderice porque la variable dog no se ha cargado 
  return (
    
    <div>
        <div> <h1>hello</h1> </div>
        <Router>
          <HomeBar />
          <hr />
            <Routes>
            <Route path="/Machine/Dornier" element={<DornierPage />} />
            <Route path="/Machine/Baron" element={<BaronPage />} />
            <Route path="/Machine/Mustang" element={<MustangPage />} />
            <Route path="/Machine/BlackHawk" element={<BlackHawkPage />} />
            <Route path="/Machine/HydroPlanes" element={<HydroPlanesPage />} />
            <Route path="/Machine" element={<Machine />} />
            <Route path="/Dogs" element={<Dogs dogs={dogs.data.dogdb} />} />
            
            <Route path="/*" element={<ErrorPage />} />
            //I bring the RouterDogs.js code becouse doesn't allow children router
            <Route path="/Dogs" element={<Dogs dogs={dogs.data.dogdb}/>} /> 
            <Route path="/Dogs/:dog" element={<DogInformation dogs={dogs.data.dogdb} />} />
            <Route path="/*" element={<Navigate to="/Dogs" />} />
           
            </Routes>
        </Router>  
        
    </div>
  )
}
}}
