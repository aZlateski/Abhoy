import React from "react";
import Logor from "./logor.png"

import "./App.css";
import Bgp from "./bgp.png";



function NavBar(){



    return(
      <div className="NavBar">
          
       <div className="options">
       <div className="Logo">
           <img src={Logor}/>
       </div>
       <div className="menu">
        <ul>
      <li><a class="active" href="#home">Home</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#about">Free Games</a></li>
      <li><a href="#about">GIVEAWAY</a></li>
    </ul>
    </div>
    </div>
    </div>
        
        

      
    );
}


export default NavBar