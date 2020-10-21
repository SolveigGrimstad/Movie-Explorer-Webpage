import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Moviebox(props: any) {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={props.imageUrl} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {props.title}
          <i className="material-icons right">more_vert</i>
        </span>
        <p>
          <li>
            <Link to="/movieinfo">Trykk her</Link>
          </li>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4 activator">
          {props.title}
          <i className="material-icons right activator">close</i>
        </span>
        <p>{props.actors}</p>
        <h4>{props.rating}</h4>
        <i className="material-icons star"></i>
      </div>
    </div>
  );
}

export default Moviebox;
