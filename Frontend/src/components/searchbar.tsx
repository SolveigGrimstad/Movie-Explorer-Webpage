import React from "react";

function Searchbar() {
  return (
    <div>
      <div className="searchbar">
        <input placeholder="Search for movie..." />
        <div className="searchbar_buttons">
          <a className="waves-effect waves-light btn">Search</a>
          <a className="waves-effect waves-light btn">Filter search</a>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
