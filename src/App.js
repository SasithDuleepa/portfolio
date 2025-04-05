import React, { useState } from "react";
import "./App.css";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Projects from "./pages/projects/projects";

export default function App() {
  const [page, setPage] = useState(<Home />);
  const [prevPage, setPrevPage] = useState(<Home />);

  const [animClass, setAnimClass] = useState("right-left"); // default
  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-links-div">
          <button
            className="sidebar-btn"
            onClick={() => {
              setAnimClass(
                animClass === "right-left" ? "right_left" : "right-left"
              );
              setPage(<Home />);
              setTimeout(() => setPrevPage(<Home />), 1000);
            }}
          >
            Home
          </button>
          <button
            className="sidebar-btn"
            onClick={() => {
              setAnimClass(
                animClass === "right-left" ? "right_left" : "right-left"
              );
              setPage(<About />);
              setTimeout(() => setPrevPage(<About />), 1000);
            }}
          >
            About
          </button>

          <button
            className="sidebar-btn"
            onClick={() => {
              setAnimClass(
                animClass === "right-left" ? "right_left" : "right-left"
              );
              setPage(<Projects />);
              setTimeout(() => setPrevPage(<Projects />), 1000);
            }}
          >
            Projects
          </button>
          <button
            className="sidebar-btn"
            onClick={() => {
              setAnimClass(
                animClass === "right-left" ? "right_left" : "right-left"
              );
              setPage(<Contact />);
              setTimeout(() => setPrevPage(<Contact />), 1000);
            }}
          >
            Contact
          </button>
        </div>
      </div>
      <div className="page-div ">
        <div className="prev-page">{prevPage}</div>
        <div className={`page ${animClass}`}>{page}</div>
      </div>
    </div>
  );
}
