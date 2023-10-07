import React from "react";
import "./nav.css";
import unicefLogo from "../../assests/unicefLogo1.png";
import telanganaLogo from "../../assests/TelanganaLogo.svg";

export default function Nav() {
  return (
    <div className="navBar">
      <div className="imgs1">
        <img
          className="uniceflogo"
          src={unicefLogo}
          alt="unicef logo"
          srcset=""
        />
      </div>
      <div className="imgs2">
        <img
          className="telanganalogo"
          src={telanganaLogo}
          alt="telangana logo"
          srcset=""
        />
      </div>
    </div>
  );
}
