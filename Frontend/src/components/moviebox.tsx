import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { prependListener } from "cluster";
import Heart from "../components/heart";

import axios from "axios";

function Moviebox(props: any) {
  const [hearts, setHearts] = useState<number>(props.starRating);

  const handleClick = () => {
    setColor(!color);

    if (color == true) {
      axios.put(`http://localhost:8000/api/dislike/${props.id}`);

      setHearts(hearts - 1);
    } else {
      axios.put(`http://localhost:8000/api/like/${props.id}`);
      setHearts(hearts + 1);
    }
  };

  const [color, setColor] = useState(false);

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
          <Link to="/movieinfo">Trykk her</Link>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4 activator">
          {props.title}
          <i className="material-icons right activator">close</i>
        </span>

        {props.actors}

        <div className="card-star">
          <span className="divHeart" onClick={handleClick}>
            <Heart isRed={color} size={35} />
          </span>
          <p>Antall som anbefaler denne filmen: {hearts}</p>
        </div>

        <h5>{props.rating}</h5>
        <p>{props.summary}</p>

        <i className="material-icons star"></i>
      </div>
    </div>
  );
}

/*
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={props.imageUrl} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {props.title}

          <i className="material-icons right">more_vert</i>
        </span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4 activator">
          {props.title}
          <i className="material-icons right activator">close</i>
        </span>

        {props.actors}

        <div className="card-star">
          <span className="heartLike" onClick={handleClick}>
            <Heart isRed={color} size={40} />
            <p>Likes on this movie: {hearts}</p>
          </span>
        </div>

        <h6>IMDB rating:</h6>

        <i className="material-icons" style={{ color: "#ffb300" }}>
          star
        </i>

        <h5>{props.rating}</h5>
        <p>{props.summary}</p>
      </div>
    </div>
    
  );
}
*/
export default Moviebox;
