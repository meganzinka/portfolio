import React from "react";
import { useState } from "react";
import CapstoneDescription from "./CapstoneDescription";
import logo from '../images/logo.png';

const Projects = () => {
  const [popup, setPopup] = useState(false);

  function showDescription(event) {
    setPopup(true);
    console.log("inside showDescription, popup=", popup);
  }
  return (
    <div>
      <div id="logo-container">
        <img class="logo" src={logo} />
      </div>
      Projects AdMagic/BCA Capstone Project: Interactive Sales Dashboard
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/R5kDFPjVVMk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <button onClick={showDescription}>View Project Description</button>
      <a target="_blank" href="https://github.com/tMinusZiro/ad-magic.git">
        <button>GitHub Repository</button>
      </a>
      {popup ? <CapstoneDescription popup={popup} setPopup={setPopup} /> : null}
      <div id="contact-info">
        <div id="left-side">
          <h3>meganzinka@gmail.com</h3>
        </div>
        <div id="right-side">
          <h3>linkedin.com/in/meganzinka</h3>
        </div>
      </div>
    </div>
  );
};

export default Projects;
