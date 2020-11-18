import React, { useState, useEffect } from "react";
import "./App.css";
import Movie from "./Movie";

var contentful = require("contentful");

function MovieList() {


  const [movies, setMovies] = useState([]);

  
  useEffect(() => {
    var client = contentful.createClient({
      space: "ol0cuvijnlfx",
      accessToken: "ojhu0MckBCIoRtRl1ZbPl6gM3x0vJgThlugsyXu4TPI",
    });

    client.getEntries().then((entries) => {
      setMovies(entries.items);
    });
  }, []);

console.log(movies)
  return(

    <div className="movie-list">        
    {movies.map((movie,index) => (
      <Movie 
        key={index}
        index={index}
        movie={movie}       
    
      
      />
    ))}
  </div>
  )
    }

    export default MovieList

