import React from 'react';

function Header() {
  return (
    <div>
        <div className="navbar-fixed">
         <nav>
            <div className="nav-wrapper">
                <a href="#" className="center brand-logo">MovieSelector</a>
                <ul id="nav-mobile " className="hand-on-med-and-down">
                <li><a href="#">About</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Documentation</a></li>
                </ul>
            </div>

        </nav>
    </div>
        
    </div>
  );
}

export default Header;
