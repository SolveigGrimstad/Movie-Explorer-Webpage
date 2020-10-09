import React from 'react';

type Props = {
    title: string
    image: string 
    year: string
}

const Movie: React.FC<Props> = props => {
    return <div>
    <h2>{props.title}</h2>
    <img src={props.image}></img>
    <h3>{props.year }</h3>
    </div>
} 

export default Movie