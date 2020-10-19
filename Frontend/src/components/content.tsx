import React, { useEffect, useState } from 'react';
import Moviebox from './moviebox'
import Sidenav from './sidenav'
import '../styling/content.css'
import axios from 'axios'

interface IMovie {
    title: String,
    description: String,  

}


function Content() {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
       
        const getMovies = async() => {
            const api_url= ("http://localhost:8000/api/movies/");
            await axios.get(api_url).then(response => {setMovies(response.data.DATA)})
            
        }
        getMovies()
       
    })

  return (
    <div>
        <Sidenav/>

        <div className="movie_container">

            {movies.map((movie )=> {
                return (<Moviebox title={movie.title} description={movie.description}/>)
            })}

        </div>

    </div>
  );
}

export default Content;

/**
 * card-reveal div with a span.card-title inside to make this work. Add the class activator to an element inside the card to allow it to open the card reveal.
 */
