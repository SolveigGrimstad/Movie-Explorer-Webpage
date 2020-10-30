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

function App() {
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
