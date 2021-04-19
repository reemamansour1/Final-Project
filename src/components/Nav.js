import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'

function Nav() {
  return (

   <nav>
       
          <ul className="nav-links">
            <Link to ='/'>
              <li><a>Home</a></li>
            </Link>
            <Link to ='/workout'>
              <li><a>Workout&Streches</a></li>
            </Link>
            <Link  to ='/food'>
              <li><a>Healthy Food</a></li>
            </Link>
            <Link to ='/mentalhealth'>
              <li><a>Mental Health</a></li>
            </Link>
          </ul>

   </nav>

  );
}

export default Nav;
