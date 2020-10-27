import React, { useEffect, useState } from "react";
import Moviebox from "./moviebox";
import Filternav from "./filternav";
import Movieinfo from "./movieinfo";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import e from "express";
import { useSelector } from "react-redux";
import "../updateGenreFilter";
import { AppState } from "../store/store";

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
  const [title, setTitle] = useState<string>("");

  const filters: string[] = useSelector((state: AppState) => state.filter);
  //console.log(filters);
  const params = new URLSearchParams([["filter", filters.join()]]);
  //list of comma

  useEffect(() => {
    const getMovies = async () => {
     const api_url = "http://localhost:8000/api/movies";
     if(title=="") {
      await axios.get(api_url , { params }).then((response) => {
        setMovies(response.data.DATA);
      });
     } 
     else {
      await axios.get(`http://localhost:8000/api/search/${title}`).then((response) => {
        setMovies(response.data.DATA);
      });
     }
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
              <input name ="search" placeholder="Search for movie..." value={title} onChange={(e)=> setTitle(e.target.value)}/>
            </td>

            <td>
              <button
                onClick={() => setOpen(!open)}
                className="waves-effect deep-purple lighten-1 btn"
              >
                Filter
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
                  summary={movie.Plot}
                />
              </Route>

              <Route path="/movieinfo">
                <Movieinfo />
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
