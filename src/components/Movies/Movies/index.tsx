import React,{ useEffect, useState }  from 'react';
import Movie from './Movie';


const API_KEY = '56b0bf5a' 

const series = ['Spider', 'fast and furious', 'iron man', 'harry potter']


const Movies: React.FC = props => {
    const [movies, setMovies] = useState([])
    useEffect (() => {
        const promises = series.map(series => {
            return fetch(`http://localhost:5000/movies`)
            .then(res => res.json())
            //.then(res => console.log(res))

            })
        

        Promise.all(promises).then((movies: any) => { 
            
            setMovies(movies.map((movie: any) => movie.Search))

        })
    }, []) 

    /*
    if(movies.length === 0) {
        return 
        <div>

        </div>
    }
    */


    return <>
       {movies.flat(2).map((movie: any)=> {
           return  <Movie
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                image={movie.Poster}
           />
       })
    }
    </>

} 

export default Movies