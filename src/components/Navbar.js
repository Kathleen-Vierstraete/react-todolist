import { NavLink } from 'react-router-dom';
import EnglishFlag from './../assets/img/united-kingdom.png';
import FrenchFlag from './../assets/img/france.png';
import SpanishFlag from './../assets/img/spain.png';


function Navbar() {
    return (
      
        <ul class="list">
            <li class="item">
                <NavLink to="/"> 
                <img src={EnglishFlag} alt="English flag" />
                </NavLink>
            </li>

            <li class="item">
                <NavLink to="/fr"> 
                <img src={FrenchFlag} alt="French flag" />
                </NavLink>
            </li>

            <li class="item">
                 <NavLink to="/es"> 
                <img src={SpanishFlag} alt="Spanish flag" />
                </NavLink>
            </li>
        </ul>
    )
}

export default Navbar;