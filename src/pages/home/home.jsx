import React from "react";
import "./home.css";
import TypeWriter from "../../components/typeWritter";

import MyImg from "./../../assets/img/my-img.jpg";

export default function Home({ More }) {
  const typeWriter = [
    "Frontend Developer",
    "BackEnd Developer",
    "IoT Developer",
    "Full-Stack Developer",
  ];
  return (
    <div className="home">
      <div className="home-left">
        <div className="home-intro-container">
          <p className="text-header-main">Hello my name is</p>
          <p className="home-name">Sasith Duleepa</p>
        </div>

        <div className="home-my-intro">
          <p className="text-header">I am a</p>
          <p className="home-role">
            <TypeWriter className="home-role" data={typeWriter} />
          </p>
        </div>

        <div className="home-div2">
          <p className="text-content">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it
          </p>
        </div>

        <button className="home-more-btn" onClick={More}>
          More About Me
        </button>
      </div>
      <div className="home-right">
        <div className="">
          <img src={MyImg} className="home-img" />
        </div>
      </div>
    </div>
  );
}
