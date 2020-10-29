import React, { useEffect } from "react";
//import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
//import M from 'materialize-css/dist/js/materialize.min.js'
import "../styling/App.css";

function Homepage() {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".slider");
    var instances = M.Slider.init(elems);
  });

  return (
    <div>
      <h1 className="homepageHeader">MOVIE SELECTOR</h1>

      <div className="slider">
        <ul className="slides">
          <li>
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-ccc2/k2-_3d500518-35d4-4228-8fb7-27ac84368a4f.v1.jpg?odnWidth=1360&odnHeight=410&odnBg=ffffff" />
            <div className="caption left-align">
              <h3></h3>
              <h5 className="light grey-text text-lighten-3"></h5>
            </div>
          </li>
          <li>
            <img src="https://dyn1.heritagestatic.com/lf?set=path%5B1%2F4%2F9%2F4%2F7%2F14947531%5D&call=url%5Bfile%3Aproduct.chain%5D" />
            <div className="caption left-align">
              <h3></h3>
              <h5 className="light grey-text text-lighten-3"></h5>
            </div>
          </li>
          <li>
            <img src="https://webneel.net/file/images/11-16/8-xmen-movie-poster-design.jpg" />
            <div className="caption right-align">
              <h3></h3>
              <h5 className="light grey-text text-lighten-3"></h5>
            </div>
          </li>
          <li>
            <img src="https://qph.fs.quoracdn.net/main-qimg-3d3d207e29205804f95526fc058c3f8c" />
            <div className="caption center-align">
              <h3></h3>
              <h5 className="light grey-text text-lighten-3"></h5>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Homepage;
