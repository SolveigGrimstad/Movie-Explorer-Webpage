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
  const initiateSort = (e: any) => {
    setSort(e);
    setPage(1);
    //sets the page to be page nr 1, when user sort
  };
  //console.log(filters);
  const params = new URLSearchParams([
    ["filter", filters.join()],
    ["sort", sort],
  ]);
  //list of comma in filters

  useEffect(() => {
    // gets all the movies. Title is if the user search for something. If now, shows all the movies
    const getMovies = async () => {
      const api_url =
        "http://localhost:8000/api/movies/" +
        sort +
        "/" +
        page +
        "/?title=" +
        title;

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
                className="searchbarInput"
                name="search"
                placeholder="Search for movie..."
                value={title}
                onChange={(e) => initiateSearch(e)}
                //changes to page 1 when searching
              />
            </td>

            <td>
              <button
                //opens the filternav component
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
                  //changing the "sort by" button, depending on what the user wants to sort on
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
                    <a href="#!" onClick={() => initiateSort("Ratings")}>
                      Rating
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#!" onClick={() => initiateSort("Year")}>
                      Year
                    </a>
                  </li>
                  <li>
                    <a href="#!" onClick={() => initiateSort("starRating")}>
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
          //pagination, arrows for when page 1 and when less than 24 movies per page
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
          if (movie.Title == "The Revenant") {
            console.log(movie);
          }
          return (
            <Switch>
              <Route path="/allmovies">
                <Moviebox
                  //sending parameters
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
          //same pagination in the buttom of the page
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
