import React from 'react';
import {
    Link
  } from "react-router-dom";

function Header() {
  return (
    <div>
        <div className="navbar-fixed">
         <nav>
            <div className="nav-wrapper">
                <a href="#" className="center brand-logo">MovieSelector</a>
                <ul id="nav-mobile " className="hand-on-med-and-down">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/allmovies">Movies</Link>
                    </li>
                </ul>
            </div>

        </nav>
    </div>
        
    </div>
  );
}

export default Header;
