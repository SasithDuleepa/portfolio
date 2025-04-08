import React from "react";
import "./about.css";

export default function About({ Hire }) {
  const DownloadCV = () => {
    const cvUrl = require("./../../assets/CV_SE_sasith.pdf"); // Correct path for Webpack to bundle the file

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Sasith_Duleepa_CV.pdf"; // Set the file name here

    // Append the link, trigger the download, and then remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
            <p className="about-skills-left-p1">Country :</p>
            <p className="about-skills-left-p2">Sri Lanka</p>
          </div>

          <div className="about-skills-left-p-div">
            <p className="about-skills-left-p1">Birthday :</p>
            <p className="about-skills-left-p2">1997 December 08</p>
          </div>

          <div className="about-skills-left-p-div">
            <p className="about-skills-left-p1">National Diploma :</p>
            <p className="about-skills-left-p2">IT</p>
          </div>

          <div className="about-skills-left-p-div">
            <p className="about-skills-left-p1">Degree :</p>
            <p className="about-skills-left-p2">BSc. (Hons.) Computing</p>
          </div>

          <div className="about-skills-left-p-div">
            <p className="about-skills-left-p1">Freelance :</p>
            <p className="about-skills-left-p2">Available</p>
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
            <p className="about-skills-left-p1">Email :</p>
            <p className="about-skills-left-p2">duleepajayathissa@gmail.com</p>
          </div>

          <div className="about-skills-left-p-div">
            <p className="about-skills-left-p1">Phone :</p>
            <p className="about-skills-left-p2">+94 779092516</p>
          </div>

          <div className="about-skills-left-btn-div">
            <button className="about-skills-left-btn" onClick={DownloadCV}>
              Download CV
            </button>
            <button className="about-skills-left-btn" onClick={Hire}>
              Hire Me
            </button>
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

      <p className="text-header">Technologies</p>

      <div className="about-tech-container">
        <TechCard
          src="https://img.icons8.com/3d-fluency/94/python.png"
          name="Python"
        />
        <TechCard
          src="https://img.icons8.com/fluency/94/javascript.png"
          name="JavaScript"
        />
        <TechCard
          src="https://img.icons8.com/arcade/94/html-5.png"
          name="Html"
        />
        <TechCard
          src="https://static.cdnlogo.com/logos/p/44/php.svg"
          name="PhP"
        />
        <TechCard src="https://img.icons8.com/color/94/css3.png" name="CSS" />
        <TechCard
          src="https://img.icons8.com/color/94/tailwind_css.png"
          name="Tailwind css"
        />
        <TechCard
          src="https://img.icons8.com/fluency/240/arduino.png"
          name="Arduino"
        />
        <TechCard
          src="https://img.icons8.com/fluency/240/node-js.png"
          name="Node js"
        />
        <TechCard
          src="https://img.icons8.com/ultraviolet/94/react--v1.png"
          name="React js"
        />
        <TechCard
          src="https://img.icons8.com/office/94/express-js.png"
          name="Express js"
        />
        <TechCard
          src="https://static.cdnlogo.com/logos/n/57/nestjs.svg"
          name="Nest js"
        />
        <TechCard
          src="https://static.cdnlogo.com/logos/n/80/next-js.svg"
          name="Next js"
        />
        <TechCard
          src="https://static.cdnlogo.com/logos/l/23/laravel.svg"
          name="Laravel"
        />
      </div>
    </div>
  );
}

const TechCard = (props) => {
  return (
    <div className="tech-card">
      <img
        className="tech-card-img"
        width="94"
        height="94"
        src={props.src}
        alt="python"
      />
      <p className="tech-card-p">{props.name}</p>
    </div>
  );
};
