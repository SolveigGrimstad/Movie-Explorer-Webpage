import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { prependListener } from "cluster";
import Heart from "../components/heart";

import axios from "axios";

function Moviebox(props: any) {
  const [hearts, setHearts] = useState<number>(props.starRating);
  const [like, setLike] = useState<number>(0);
  //likebutton

  useEffect(() => {
    setHearts(props.starRating);
  }, []);

  const handleClick = () => {
    //when liking, changing color and the count decreases/increases
    setColor(!color);

    if (color == true) {
      axios.put(`http://localhost:8000/api/dislike/${props.id}`);

      setHearts(hearts - 1);
      setLike(like - 1);
    } else {
      axios.put(`http://localhost:8000/api/like/${props.id}`);
      setHearts(hearts + 1);
      setLike(like + 1);
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
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4 activator">
          {props.title}
          <i className="material-icons right activator">close</i>
        </span>

        <div>
          <h6>{props.year}</h6>
          <p>
            <i className="material-icons">access_time</i>
            {props.runtime}
          </p>
        </div>

        <div className="card-star">
          <span className="divHeart" onClick={() => handleClick()}>
            <Heart isRed={color} size={35} />
          </span>
          <p>
            Likes on this movie: <b>{(props.starRating + like).toString()}</b>
          </p>
        </div>
        <h6>
          IMDB Rating: <b>{props.rating}</b>
          <i className="material-icons" style={{ color: "#ffca28" }}>
            star
          </i>
        </h6>

        <h5></h5>

        <p>{props.summary}</p>
      </div>
    </div>
  );
}

export default Moviebox;
