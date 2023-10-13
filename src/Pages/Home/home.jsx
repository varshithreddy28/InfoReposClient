import React from "react";
import Top from "../../components/Home Top/top";
import Content from "../../components/HomeContent/content";
import "./home.css";

export default function Home() {
  return (
    <div className="homepage">
      <Top />
      <Content />
    </div>
  );
}
