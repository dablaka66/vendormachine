import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Mustangpage from '../Pages/Mustangpage';
import DornierPage from '../Pages/DornierPage';
import BlackHawkPage from '../Pages/BlackHawkPage';
import BaronPage from '../Pages/BaronPage';
import ErrorPage from '../Pages/ErrorPage';
import NavBar from '../Components/NavBar';
import HomePage from '../Pages/HomePage';

export default function AppRouter() {
  return (
    <div>
        
        <Router>
          <NavBar />
            <Switch>
            <Route path="/Mustang" Component={Mustangpage} />
            <Route path="/Dornier" Component={DornierPage} />
            <Route path="/BlackHawk" Component={BlackHawkPage} />
            <Route path="/Baron" Component={BaronPage} />
            <Route exact path="/" Component={HomePage} />
            <Route path="/*" Component={ErrorPage} />
           
           
            </Switch>
        </Router>
        
    </div>
  )
}
