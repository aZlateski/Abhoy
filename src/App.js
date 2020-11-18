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
import Ac from "./Ac";


import "./App.css";





function App() {

  return (

    <>
 
    <div className="container">
    <NavBar /> 
      <div className="container2">
       
         
        <NewGames />
        <MovieList />
        <Content />
        <Footer /> 
    </div>
      </div>
    </>
  );
}

export default App;