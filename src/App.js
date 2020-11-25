import React from "react";
import MovieList from "./MovieList";
import NavBar from "./NavBar.js";
import Footer from "./Footer.js"
import NewGames from "./NewGames"
import Content from "./Content"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DynamicArticle from "./DynamicArticle";
import "./App.css";

function App() {
  return (
    <>
    <div className="container">
      <Switch>
          <Route exact path="/">
            <>
              <NavBar /> 
              <div className="container2">
                <NewGames />
                <MovieList />
                <Content />
                <Footer /> 
              </div>
            </>
          </Route>
          <Route path="/:productName" component={DynamicArticle} />
      </Switch>
      </div>
    </>
  );
}

export default App;