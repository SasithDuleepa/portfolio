import React, { useState } from "react";

import useLocalStorage from "use-local-storage";
import "./App.css";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Projects from "./pages/projects/projects";

export default function App() {
  const HandleMore = () => {
    setTimeout(() => {
      setAnimClass(animClass === "right-left" ? "right_left" : "right-left");
      setPage(<About />);
      setTimeout(() => setPrevPage(<About />), 1000);
    }, 500);
  };
  const HandleHire = () => {
    setTimeout(() => {
      setAnimClass(animClass === "right-left" ? "right_left" : "right-left");
      setPage(<Contact />);
      setTimeout(() => setPrevPage(<Contact />), 1000);
    }, 500);
  };

  const [page, setPage] = useState(<Home More={HandleMore} />);
  const [prevPage, setPrevPage] = useState(<Home />);

  const [animClass, setAnimClass] = useState("right-left"); // default

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const [themeColor, setThemeColor] = useLocalStorage("orange");

  const switchMode = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const switchTheme = (color) => {
    setThemeColor(color);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app" data-theme={theme} data-theme-color={themeColor}>
      <button
        onClick={() => {
          console.log("clicked");
          setMenuOpen(!menuOpen);
        }}
        className="menu-icon-btn"
      >
        {menuOpen === true ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
          </svg>
        ) : (
          <svg
            className="menu-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
          </svg>
        )}
      </button>

      <div className={menuOpen ? "sidebar-show" : "sidebar"}>
        <div className="sidebar-links-div">
          <button
            className="sidebar-btn"
            onClick={() => {
              const container = document.querySelector(".page-div");

              // Scroll to top first
              container.scrollTo({ top: 0, behavior: "smooth" });

              // Then load the new page AFTER scroll end
              setTimeout(() => {
                setAnimClass(
                  animClass === "right-left" ? "right_left" : "right-left"
                );
                setPage(<Home More={HandleMore} />);
                setTimeout(() => setPrevPage(<Home />), 1000);
              }, 500);
            }}
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/home.png"
              alt="home"
            />
            Home
          </button>
          <button
            className="sidebar-btn"
            onClick={() => {
              const container = document.querySelector(".page-div");

              // Scroll to top first
              container.scrollTo({ top: 0, behavior: "smooth" });

              // Then load the new page AFTER scroll end
              setTimeout(() => {
                setAnimClass(
                  animClass === "right-left" ? "right_left" : "right-left"
                );
                setPage(<About Hire={HandleHire} />);
                setTimeout(() => setPrevPage(<About />), 1000);
              }, 500);
            }}
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/guest-male--v1.png"
              alt="guest-male--v1"
            />
            About
          </button>

          <button
            className="sidebar-btn"
            onClick={() => {
              const container = document.querySelector(".page-div");

              // Scroll to top first
              container.scrollTo({ top: 0, behavior: "smooth" });

              // Then load the new page AFTER scroll end
              setTimeout(() => {
                setAnimClass(
                  animClass === "right-left" ? "right_left" : "right-left"
                );
                setPage(<Projects />);
                setTimeout(() => setPrevPage(<Projects />), 1000);
              }, 500);
            }}
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/100/group-of-projects.png"
              alt="group-of-projects"
            />
            Projects
          </button>
          <button
            className="sidebar-btn"
            onClick={() => {
              const container = document.querySelector(".page-div");

              // Scroll to top first
              container.scrollTo({ top: 0, behavior: "smooth" });

              // Then load the new page AFTER scroll end
              setTimeout(() => {
                setAnimClass(
                  animClass === "right-left" ? "right_left" : "right-left"
                );
                setPage(<Contact />);
                setTimeout(() => setPrevPage(<Contact />), 1000);
              }, 500);
            }}
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/100/speech-bubble-with-dots.png"
              alt="speech-bubble-with-dots"
            />
            Contact
          </button>
        </div>
      </div>

      <button className="theme-btn" onClick={switchMode}>
        <img
          width="26"
          height="26"
          className="theme-img"
          src={
            theme === "light"
              ? "https://img.icons8.com/external-others-amoghdesign/24/external-dark-multimedia-solid-30px-others-amoghdesign.png"
              : "https://img.icons8.com/sf-black-filled/64/FFFFFF/sun.png"
          }
          alt="external-dark-multimedia-solid-30px-others-amoghdesign"
        />
      </button>

      <div className="theme-div">
        <img
          className="theme-arrow"
          src="https://img.icons8.com/ios/100/double-left.png"
          alt="double-left"
        />

        <button className="theme-color-show"></button>
        <button
          onClick={() => switchTheme("orange")}
          className="theme-color-btn"
          style={{ backgroundColor: "rgb(255, 77, 0)" }}
        ></button>
        <button
          onClick={() => switchTheme("green")}
          className="theme-color-btn"
          style={{ backgroundColor: "rgb(0, 255, 26)" }}
        ></button>
        <button
          onClick={() => switchTheme("purple")}
          className="theme-color-btn"
          style={{ backgroundColor: "rgb(255, 0, 247)" }}
        ></button>
        <button
          onClick={() => switchTheme("blue")}
          className="theme-color-btn"
          style={{ backgroundColor: "rgb(0, 102, 255)" }}
        ></button>
      </div>

      <div className="page-div ">
        <div className="prev-page">{prevPage}</div>
        <div className={`page ${animClass}`}>{page}</div>
      </div>
    </div>
  );
}
