import React from "react";
import "./About.css";
import githubIcon from "../../images/icons/GitHub-Mark-32px.png";
import linkedinIcon from "../../images/icons/LI-In-Bug.png";
function About() {
  return (
    <div className="About">
      <div className="intro">
        <h3>Hello world</h3>
        <hr />
        <p>
          My name is Jia Sheng Ma.
          {/* <span role="img" aria-label="name-info">ℹ️</span> */}
        </p>
        <p>I am a software engineer,</p>
        <p>and I solve problems.</p>
      </div>
      <br />
      <div className="philosophy">
        <h4>Art/Design Philosophy</h4>
        <ul className="philosophy">
          <li>
            <p>• Integrity</p>
          </li>
          <li>
            <p>• Uniformity</p>
          </li>
          <li>
            <p>• Focus</p>
          </li>
        </ul>
      </div>
      <br />
      <div className="contact">
        <h4>Links</h4>
        <ul className="inline-list">
          <li>
            <a
              href="https://github.com/majiasheng/"
              target="_blank"
              rel="noopener noreferrer"
              className="anchorHoverNoEffect"
            >
              <img
                alt="github"
                src={githubIcon}
                className="icon-height-16px"
              ></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/majiasheng/"
              target="_blank"
              rel="noopener noreferrer"
              className="anchorHoverNoEffect"
            >
              <img
                alt="linkedin"
                src={linkedinIcon}
                className="icon-height-16px"
              ></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
