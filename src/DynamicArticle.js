import React from "react";
import Acinfo from "./Acinfo.js";
import NavBar from "./NavBar.js";
import Footer from "./Footer.js"
import Content from "./Content.js";
import {useParams} from "react-router-dom"

import "./App.css";

export default function DynamicArticle() {
  const {productName} = useParams()
  return (

    <div className="container">
      <h1>{productName}</h1>
    <Acinfo />

          <div className="container2">
          
        
      
          
            
        </div>
        <Footer />
      </div>
  );
}