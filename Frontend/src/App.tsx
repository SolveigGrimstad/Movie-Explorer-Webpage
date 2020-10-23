import React from "react";
import "../src/styling/App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Searchbar from "./components/searchbar";
import Content from "./components/content";
import Homepage from "./components/homepage";
import Movieinfo from "./components/movieinfo";
import "../src/styling/materialize.css";
import "../src/styling/materialize.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//redux
import { Article } from "./components/Article"
import { AddArticle } from "./components/AddArticle"
import { addArticle, removeArticle } from "./store/actionCreators"
import { Dispatch } from "redux"
import { useSelector, shallowEqual, useDispatch } from "react-redux"




function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/allmovies">
            <Searchbar />
            <Content />
          </Route>

          <Route path="/movieinfo">
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
