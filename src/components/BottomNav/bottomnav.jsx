import React from "react";
import InfoRepoLogo from "../../assests/inforepologo.png";
import "./bottomnav.css";

export default function Bottomnav() {
  return (
    <div>
      <div className="btmnav">
        <span id="craftedby">Crafted with ❤️ by </span>
        <img id="craftimg" src={InfoRepoLogo} alt="" />
        <span id="craftedby">Developer</span>
      </div>
    </div>
  );
}
