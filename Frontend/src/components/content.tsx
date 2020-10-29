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
//import * from "materialize-css";

interface IMovie {
  _id: String;
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
  starRating: Number;
}

function Content() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState<string>("");
  const initiateSearch = (e: any) => {
    setTitle(e.target.value);
    setPage(1);
    //sets the page to be page nr 1, when user search
  };

  const filters: string[] = useSelector((state: AppState) => state.filter);
  //console.log(filters);
  const params = new URLSearchParams([["filter", filters.join()]]);
  //list of comma

  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(title);
    const getMovies = async () => {
      const api_url = "http://localhost:8000/api/movies/" + page;
      if (title == "") {
        //if the search field is empty, shows all the movies
        await axios.get(api_url, { params }).then((response) => {
          setMovies(response.data.DATA);
        });
      } else {
        //showing results based on the input field
        await axios
          .get(`http://localhost:8000/api/search/${title}/` + page)
          .then((response) => {
            setMovies(response.data.DATA);
          });
      }
    };
    getMovies();
  }, []);

  useEffect(() => {
    const dropdown = () => {
      var elems = document.querySelectorAll(".dropdown-trigger");
      var instances = M.Dropdown.init(elems, {});
    };
    dropdown();
  }, []);

  return (
    <div>
      <table className="searchbar">
        <tr>
          <div className="searchbar_buttons ">
            <td>
              {" "}
              <input
                name="search"
                placeholder="Search for movie..."
                value={title}
                onChange={(e) => initiateSearch(e)}
                //changes to page 1 when searching
              />
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
              <div>
                <a
                  id="sorting-button"
                  className="dropdown-trigger deep-purple lighten-1 btn"
                  href="#"
                  data-target="dropdown1"
                >
                  Sort
                  <i className="material-icons">arrow_drop_down</i>
                </a>
                <ul id="dropdown1" className="dropdown-content ">
                  <li>
                    <a href="#!">Name</a>
                  </li>
                  <li>
                    <a href="#!">Price</a>
                  </li>
                  <li>
                    <a href="#!">Stars</a>
                  </li>
                </ul>
              </div>
            </td>
          </div>
        </tr>
      </table>

      {open && <Filternav />}

      <ul className="pagination">
        <li className="waves-effect">
          <a href="#!">
            <i className="material-icons" onClick={() => setPage(page - 1)}>
              chevron_left
            </i>
          </a>
        </li>

        <li className="waves-effect">
          <a href="#!">
            <i className="material-icons" onClick={() => setPage(page + 1)}>
              {" "}
              chevron_right
            </i>
          </a>
        </li>
      </ul>

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
                  starRating={movie.starRating}
                  id={movie._id}
                />
              </Route>

              <Route path="/movieinfo">
                <Movieinfo />
              </Route>
            </Switch>
          );
        })}
      </div>
      <ul className="pagination">
        <li className="waves-effect">
          <a href="#!">
            <i className="material-icons" onClick={() => setPage(page - 1)}>
              chevron_left
            </i>
          </a>
        </li>

        <li className="waves-effect">
          <a href="#!">
            <i className="material-icons" onClick={() => setPage(page + 1)}>
              {" "}
              chevron_right
            </i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Content;

/**
 * card-reveal div with a span.card-title inside to make this work. Add the class activator to an element inside the card to allow it to open the card reveal.
 */
