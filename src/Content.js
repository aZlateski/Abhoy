import React from "react";
import "./App.css";

import ReactPlayer from "react-player";
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import Ac from "./Ac";



function Content (){


 

    return(
  

        <div className="content">
             
            
            <div className="content-top">
                <h1>Gaming News</h1>
            </div>
            
            <div className="content-bot">
                <div className="Content-bot-top">
                  <div className="Content-bot-top-left">
                  <ReactPlayer
                      controls={true}
                      url="https://www.youtube.com/watch?v=ceQ2XFS1tUo"
                  />
                  </div>
                  <div className="Content-bot-top-right">
                      <h1>Dota2 - the International</h1>
                      <p>OG made history in Shanghai last August by successfully defending their hold on the Aegis of Champions, becoming not only the first team to win The International in back-to-back years, but the first ever to carve their names into the Aegis for a second time.
                      </p>
                      <p>Now, fans from around the globe can tune in live on Tuesday, January 28th at 7:00 p.m. CET to see exactly how the story unfolded as the teams themselves relive the epic journey at the world premiere event — hosted by Grand Finals casters ODPixel and Fogged, and joined by The International broadcast stalwarts Kaci and Slacks.</p>
                      <div className="button">
              <button className="myButton">Read More!</button>
            </div>
                  </div>
                </div>
                <div className="Content-bot-bot">
                <div className="Content-bot-bot-left">
                <h1>Assasins Creed - Valhalla </h1>
                      <p>Assassin's Creed Valhalla is an action role-playing video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth major installment and the twenty-second release in the Assassin's Creed series, and a successor to the 2018 game Assassin's Creed Odyssey.
                          </p>
                          <p>Assassin's Creed Valhalla is an open world action-adventure game, structured around several main story quests and numerous optional side missions. The player takes on the role of Eivor , a Viking raider, as he/she leads his/her fellow Vikings against the Anglo-Saxon kingdoms.</p>
                          
                     


  
                       
                       
                          <div className="button">
                      <button className="myButton"><Link to="/Ac">Read More</Link></button>
                      </div>
                     





                      </div>
                <div className="Content-bot-bot-right">
                <ReactPlayer className="video1"
                      controls={true}
                      url="https://www.youtube.com/watch?v=ssrNcwxALS4"
                  />
                </div>
              
            </div>
              
            
            </div>
        </div>
    )
}




export default Content