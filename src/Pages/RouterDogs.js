
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import DogInformation from './DogInformation';
import Dogs from './Dogs';

export default function RouterDogs({dogs}) {
  return (
    <Router>
          
          <hr />
            <Routes>
            <Route path="/Dogs" element={<Dogs dogs={dogs.data}/>} /> 
            <Route path="/Dogs/:dog" element={<DogInformation dogs={dogs} />} />
            <Route path="/*" element={<Navigate to="/Dogs" />} />
            </Routes>
        </Router>
  )
}
