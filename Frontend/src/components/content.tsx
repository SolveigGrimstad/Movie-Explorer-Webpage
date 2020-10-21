import React, { useEffect, useState } from "react";
import Moviebox from "./moviebox";
import Sidenav from "./sidenav";
import Movieinfo from "./movieinfo";
import "../styling/content.css";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

interface IMovie {
  Title: String;
  Year: String;
  Released: String;
  Runtime: String;
  Genre: String;
  Director: String;
  Actors: String;
  Plot: String;
  Language: String;
  Country: String;
  Poster: String;
  Ratings: String;
}

function Content() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const api_url = "http://localhost:8000/api/movies/";
      await axios.get(api_url).then((response) => {
        setMovies(response.data.DATA);
      });
    };
    getMovies();
  });

  return (
    <div>
      <div className="movie_container">
        <div className="sidemenu">
          <Sidenav />
        </div>

        {movies.map((movie) => {
          return (
            <Switch>
              <Route path="/allmovies">
                <Moviebox
                  title={movie.Title}
                  imageUrl={movie.Poster}
                  actors={movie.Actors}
                  rating={movie.Ratings}
                />
              </Route>

              <Route path="/movieinfo">
                <Movieinfo
                  title={movie.Title}
                  imageUrl={movie.Poster}
                  actors={movie.Actors}
                  rating={movie.Ratings}
                />
              </Route>
            </Switch>
          );
        })}
      </div>
    </div>
  );
}

export default Content;

/**
 * card-reveal div with a span.card-title inside to make this work. Add the class activator to an element inside the card to allow it to open the card reveal.
 */
