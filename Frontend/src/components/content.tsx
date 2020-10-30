import React, { useEffect, useState } from "react";
import Moviebox from "./moviebox";
import Filternav from "./filternav";
import Movieinfo from "./movieinfo";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
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
  starRating: Number;
  _id: String;
}

function Content() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [open, setOpen] = useState(false); //opens the filter bar
  const [title, setTitle] = useState<string>(""); //searching
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("Ratings");
  const filters: string[] = useSelector((state: AppState) => state.filter);
  const initiateSearch = (e: any) => {
    setTitle(e.target.value);
    setPage(1);
    //sets the page to be page nr 1, when user search
  };
  //console.log(filters);
  const params = new URLSearchParams([
    ["filter", filters.join()],
    ["sort", sort],
  ]);
  //list of comma in filters

  useEffect(() => {
    // gets all the movies
    const getMovies = async () => {
      const api_url =
        "http://localhost:8000/api/movies/" +
        sort +
        "/" +
        page +
        "/?title=" +
        title;

      console.log(api_url, { params });

      //if the search field is empty, shows all the movies
      await axios.get(api_url, { params }).then((response) => {
        setMovies(response.data.DATA);
      });
    };
    getMovies();
  }, [sort, filters, page, title]);
  // the variables thats going to change when the useEffect is called

  useEffect(() => {
    //triggers the drowdownbutton
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
                <button
                  className="dropdown-trigger waves-effect deep-purple lighten-1 btn"
                  data-target="dropdown1"
                >
                  Sort by{" "}
                  {sort === "Ratings" ? (
                    "Rating"
                  ) : <p></p> || sort === "Year" ? (
                    "Year"
                  ) : <p></p> || sort === "starRating" ? (
                    "Likes"
                  ) : (
                    <p></p>
                  )}
                  <i className="material-icons">arrow_drop_down</i>
                </button>
                <ul id="dropdown1" className="dropdown-content ">
                  <li>
                    <a href="#!" onClick={() => setSort("Ratings")}>
                      Rating
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#!" onClick={() => setSort("Year")}>
                      Year
                    </a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => setSort("starRating")}>
                      Likes
                    </a>
                  </li>
                </ul>
              </div>
            </td>
          </div>
        </tr>
      </table>

      {open && <Filternav />}
      <ul className="pagination">
        {page > 1 && (
          <li className="hei">
            <a href="#!">
              <i
                className={
                  page == 1
                    ? "disabled material-icons"
                    : "waves-effect material-icons"
                }
                onClick={() => setPage(page - 1)}
              >
                chevron_left
              </i>
            </a>
          </li>
        )}
        {movies.length >= 24 && (
          <li className="heo">
            <a href="#!">
              <i
                className={
                  movies.length < 24
                    ? "disabled material-icons"
                    : "waves-effect material-icons"
                }
                onClick={() => setPage(page + 1)}
              >
                {" "}
                chevron_right
              </i>
            </a>
          </li>
        )}
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
                  runtime={movie.Runtime}
                  year={movie.Year}
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
        {page > 1 && (
          <li className="hei">
            <a href="#!">
              <i
                className={
                  page == 1
                    ? "disabled material-icons"
                    : "waves-effect material-icons"
                }
                onClick={() => setPage(page - 1)}
              >
                chevron_left
              </i>
            </a>
          </li>
        )}
        {movies.length >= 24 && (
          <li className="heo">
            <a href="#!">
              <i
                className={
                  movies.length < 24
                    ? "disabled material-icons"
                    : "waves-effect material-icons"
                }
                onClick={() => setPage(page + 1)}
              >
                {" "}
                chevron_right
              </i>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Content;

/**
 * card-reveal div with a span.card-title inside to make this work. Add the class activator to an element inside the card to allow it to open the card reveal.
 */
