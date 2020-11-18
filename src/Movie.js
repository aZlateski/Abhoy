
import React from "react";
import "./App.css";


function Movie({movie}) {
      
    return (

  
      <div className="column">
         <div className="card">

            
            <div className="card-img">
              <div className="pics-c">
            <img className='pics' src={movie.fields.heroImg.fields.file.url} />
              </div>
            </div>


            


            <div className="info">
              <h3>{movie.fields.title}</h3>
              <p>Genre : {movie.fields.genre}</p>
              <p>Released by : {movie.fields.producer}</p>
              
              <h4>{movie.fields.description}</h4>
            </div>



            <div className="button">
              <button className="myButton">Read More!</button>
            </div>









          
       
         </div>
      </div>
  
  
    );
  }
  
  export default Movie;




/* <div className="movie"> 
<div className="left"><img className='pics' src={movie.fields.heroImg.fields.file.url} /></div>
 <div className="right"> 

 <div className="right-title"> 
   <h1>{movie.fields.title}</h1>  
 </div>

 <div className="right-Genre">
   <div className="genre"><h3>Genre:</h3></div>
   <div className="genre-content"><h4>{movie.fields.genre}</h4></div>
 </div>
 
 <div className="right-actors">
   <div className="actors-title"><h3>actors:</h3> </div>
   <div className="actors-content"><h4>{movie.fields.actors}</h4></div>
 </div>
 
 <div className="right-description">
   <h3>Description:</h3>  {movie.fields.description}
 </div>
 
 </div>       

 </div> */





 