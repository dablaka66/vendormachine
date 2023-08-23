
import {NavLink} from 'react-router-dom';
export default function HomeBar() {
  return (
    <nav>
        <ul>
            
            <li>
                <NavLink to="/Machine" activeclassname="active">Machine</NavLink>
            </li>
            <li>
                <NavLink to="/Dogs" activeclassname="active">Dogs</NavLink>
            </li>
            
            <li>
                <NavLink to="/" activeclassname="active">Home</NavLink>
               
            </li>
            
        </ul>
    </nav>
  )
}
