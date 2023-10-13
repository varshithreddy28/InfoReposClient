import React from "react";
import "./top.css";
import telanganaLogo from "../../assests/TelanganaLogo.svg";

export default function Top() {
  return (
    <div className="homeTop">
      <div className="allimgs">
        <div className="img3">
          <img src={telanganaLogo} alt="" srcset="" />
        </div>
        <div className="img2">
          <img
            src="https://res.cloudinary.com/dmumzo5xj/image/upload/v1696959975/Website/yxwqwulzuwik9qgp5a2k.jpg"
            alt=""
          />
        </div>
        <div className="img1">
          <img
            src="https://res.cloudinary.com/dmumzo5xj/image/upload/v1696960441/Website/mlzej92yliczldk3qfta.png"
            alt="Beti Bacho Beti Pado Image"
            srcset=""
          />
        </div>
      </div>
    </div>
  );
}
