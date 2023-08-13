import React from 'react';
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';

import MustangPage from '../Pages/MustangPage';
import DornierPage from '../Pages/DornierPage';
import BlackHawkPage from '../Pages/BlackHawkPage';
import BaronPage from '../Pages/BaronPage';
import ErrorPage from '../Pages/ErrorPage';
import NavBar from '../Components/NavBar';
import HomePage from '../Pages/HomePage';
import ProfilePage from '../Pages/ProfilePage';
import HydroPlanesPage from '../Pages/HydroPlanesPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import PaymentPage from '../Pages/PaymentPage';
import DashBoardPage from '../Pages/DashBoardPage';

export default function AppRouter() {
  return (
    <div>
        
        <Router>
          <NavBar />
          <hr />
            <Routes>
            <Route path="/Profile/:username" element={<ProfilePage />} />
            <Route path="/Mustang" element={<MustangPage />} />
            <Route path="/Dornier" element={<DornierPage />} />
            <Route path="/BlackHawk" element={<BlackHawkPage />} />
            <Route path="/Baron" element={<BaronPage />} />
            <Route path="/Hydroplanes" element={<HydroPlanesPage />} />
            <Route exact path="/" element={<HomePage />} />
            <Route path="/*" element={<ErrorPage />} />

            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/Payment" element={<PaymentPage />} />
            <Route path="/DashBoard" element={<DashBoardPage />} />
           
           
            </Routes>
        </Router>
        
    </div>
  )
}
