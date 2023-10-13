import React from "react";
import "./loading.css";

const LoadingDots = () => {
  return (
    <div className="loading-spinner">
      <div className="dot dot1"></div>
      <div className="dot dot2"></div>
      <div className="dot dot3"></div>
      {/* <div className="dot dot4"></div> */}
    </div>
  );
};

export default LoadingDots;
