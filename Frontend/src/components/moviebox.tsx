import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { prependListener } from "cluster";
import Star from "../components/star";
import Heart from "../components/heart";
import starRatings from "./starRatings";
import IconButton from '@material-ui/core/IconButton';
import ThumbUp from '@material-ui/icons/ThumbUp'
import { ThumbUpSharp } from "@material-ui/icons";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';



function Moviebox(props: any) {



  //hanldeclik vil ikke bli kalt på nede i star
  const handleClick = () => {
    setColor (!color);
    console.log("halooo");
    
    if(color==false){
      //Trekker fra en like i databasen 
    }
    else{
      //Legger til en like i databasen 
    }


  }

  const [color, setColor]  = useState(false);
 
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
        {/*<Star isYellow={false} value={1} size={100} onclick={() => handleClick(isYellow(true))} />*/}
       
        <div className="divHeart" onClick = {handleClick} >
        <Heart isRed={color}  size={35} />
        </div>
       
        
        <div className = "card-star">
        
        
        
        <p>Antall som likte denne filmen: </p> 
        {props.starRating}

         {/*<StarRating sender inn average raating/>*/}

         </div>
       
        <h5>{props.rating}</h5>
        <p>{props.summary}</p>

        <i className="material-icons star"></i>
      </div>
     
    </div>
  );
}

export default Moviebox;
