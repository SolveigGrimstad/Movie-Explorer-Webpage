import React, { useEffect, useState } from "react";
import Moviebox from "./moviebox";
import Filternav from "./filternav";
import Movieinfo from "./movieinfo";
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
  const [open, setOpen] = useState(false);

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
      <table className="searchbar">
        <tr>
          <div className="searchbar_buttons ">
            <td>
              {" "}
              <input placeholder="Search for movie..." />
            </td>

            <td>
              <button className="waves-effect deep-purple lighten-1 btn ">
                Search
              </button>
            </td>

            <td>
              <button
                onClick={() => setOpen(!open)}
                className="waves-effect deep-purple lighten-1 btn"
              >
                Filter search
              </button>
            </td>

            <td>
              <button className="waves-effect deep-purple lighten-1 btn">
                Sorty by
              </button>
            </td>
          </div>
        </tr>
      </table>

      {open && <Filternav />}

      <div className="movie_container">
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
