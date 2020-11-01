import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper deep-purple">
          <a href="#" className="center brand-logo">
            MovieSelector
          </a>
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
  );
}

export default Header;
