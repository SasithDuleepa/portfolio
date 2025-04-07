import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-title-div">
        <p className="text-header-main">About Me</p>
        <div className="about-title-line1"></div>
        <div className="about-title-line2"></div>
      </div>

      <div className="about-intro-div">
        <p className="text-header">I'm sasith and a</p>
        <p className="about-intro-p">Full-stack developer</p>
      </div>

      <p className="text-content about-content">
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently
      </p>

      <div className="about-skills-container">
        <div className="about-skills-left-div">
          <div className="about-skills-left-p-div">
            <p className="about-skills-left-p1">Birthday :</p>
            <p className="about-skills-left-p2">1997 December 08</p>
          </div>

          <div className="about-skills-left-p-div">
            <p className="about-skills-left-p1">Birthday :</p>
            <p className="about-skills-left-p2">1997 December 08</p>
          </div>

          <div className="about-skills-left-p-div">
            <p className="about-skills-left-p1">Birthday :</p>
            <p className="about-skills-left-p2">1997 December 08</p>
          </div>

          <div className="about-skills-left-p-div">
            <p className="about-skills-left-p1">Birthday :</p>
            <p className="about-skills-left-p2">1997 December 08</p>
          </div>

          <div className="about-skills-left-p-div">
            <p className="about-skills-left-p1">Birthday :</p>
            <p className="about-skills-left-p2">1997 December 08</p>
          </div>

          <div className="about-skills-left-p-div">
            <p className="about-skills-left-p1">Birthday :</p>
            <p className="about-skills-left-p2">1997 December 08</p>
          </div>

          <div className="about-skills-left-p-div">
            <p className="about-skills-left-p1">Birthday :</p>
            <p className="about-skills-left-p2">1997 December 08</p>
          </div>

          <div className="about-skills-left-p-div">
            <p className="about-skills-left-p1">Birthday :</p>
            <p className="about-skills-left-p2">1997 December 08</p>
          </div>

          <div className="about-skills-left-p-div">
            <p className="about-skills-left-p1">Birthday :</p>
            <p className="about-skills-left-p2">1997 December 08</p>
          </div>

          <div className="about-skills-left-p-div">
            <p className="about-skills-left-p1">Birthday :</p>
            <p className="about-skills-left-p2">1997 December 08</p>
          </div>

          <div className="about-skills-left-btn-div">
            <button className="about-skills-left-btn">Download CV</button>
            <button className="about-skills-left-btn">Hire Me</button>
          </div>
        </div>
        <div className="about-skills-right-div">
          <p className="about-skills-right-p1">Skills</p>

          <ul>
            <li className="js about-skills-left-p2">JS</li>
            <li className="react about-skills-left-p2">React</li>
            <li className="html5 about-skills-left-p2">HTML5</li>
            <li className="css3 about-skills-left-p2">CSS3</li>
            <li className="sketch about-skills-left-p2">Sketch</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
