import React from "react";
import "./Footer.css";
import Fb from "./fb.png"
import Insta from "./insta.png";
import Youtube from "./youtube.png";
import Twitch from "./twitch.png";


function Footer() {
  return (
  

    <div className="Footer">
        <div className="Footer1">
            <img src={Fb}/>
            <p>Facebook</p>
            <h6>./AB-Gaming</h6>
        </div>
        <div className="Footer1">
            <img src={Insta}/>
            <p>Instagram</p>
            <h6>#AB-Gaming</h6>
        </div>
        <div className="Footer1">
        <img src={Youtube}/>
            <p>Youtube</p>
            <h6>#AB-Gaming</h6>
        </div>
        <div className="Footer1">
            <img src={Twitch}/>
            <p>Twitch</p>
            <h6>@AB-Gaming</h6>
        </div>
       
    </div>
  
  );
}

export default Footer;