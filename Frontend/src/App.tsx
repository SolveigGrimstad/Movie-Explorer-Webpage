import React from "react";
import "../src/styling/App.css";
import Header from "./components/header";
import Footer from "./components/footer";
//import Searchbar from "./components/searchbar";
import Content from "./components/content";
import Homepage from "./components/homepage";
import Movieinfo from "./components/movieinfo";
import "../src/styling/materialize.css";
import "../src/styling/materialize.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Moviebox from "./components/moviebox";
//import Moviebox from "./components/moviebox";

//redux
import { Dispatch } from "redux"
import { useSelector, shallowEqual, useDispatch } from "react-redux"




function App() {
/*
  const movies: readonly Imovie[] = useSelector(
    (state: MovieState) => state.movie,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveMovie = React.useCallback(
    (movie: Imovie) => dispatch(searchMovie(movie)),
    [dispatch]
  )
  */
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/allmovies">
            <Content />
          </Route>

          <Route path="/movieinfo/">
            <Movieinfo />
          </Route>

          <Route path="/">
            <Homepage />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
