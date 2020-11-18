import React from "react";
import "./App.css";
import Ods from "./ods.jpg";
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';

function Acinfo (){
    return(
      <div className="dotac">
<div className="dotac-top">
    <img src={Ods} />
</div>
<div className="dotac-bot">
<p>Assassin's Creed Valhalla is an open world action-adventure game, structured around several main story quests and numerous optional side missions. The player takes on the role of Eivor (/ˈeɪvɔːr/),[4] a Viking raider, as he/she leads his/her fellow Vikings against the Anglo-Saxon kingdoms. The player will have the choice of playing Eivor as either male (voiced by Magnus Bruun) or female (voiced by Cecilie Stenspil)[5] and is able to customise Eivor's hair, warpaint, clothing, armor, and tattoos.[6] The variety of weapons available to the player has been expanded to include weapons such as flails and greatswords. Combat has been changed to allow dual wielding of almost any weapon, including shields,[7] and every piece of gear that the player collects is unique.[1] The Eagle Vision mechanic of previous titles will return in the form of "Odin Sight".[8] The player's companion animal will be a raven named Sýnin[9][10] (Old Norse for "insight")[11][d] who can be used to scout the nearby areas, much like previous avian companions had done in Origins and Odyssey, and other parts of the game world from afar before Eivor engages in combat.[12] There will be more focus on the stealth aspects for both traversing the game world and in combat. The "social stealth" concept from earlier Assassin's Creed games will return: Eivor can hide from enemies not only in stationary environmental objects, but can pull down their hood and slip into certain crowds to use them as cover. Eivor can feign death, use their raven to distract guards, and can access a hidden blade for near instantaneous assassinations. The game's key bosses will all, through specific combinations of approach, tactics, and weapon selection, be able to be assassinated through a single attack, but still can be defeated through numerous other routes.[13]

</p>
<p>Valhalla will have a advances through the game. The difficulty posed by enemies will be rated based on the player's collection of skills.[7]</p>
<div className="button">
                      <button className="myButton"><Link to="/">Back to Homepage</Link></button>
                      </div>
</div>
 </div>
    );
}


export default Acinfo 