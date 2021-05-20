import React from "react";
import githubIcon from "../../images/icons/GitHub-Mark-32px.png";
import linkedinIcon from "../../images/icons/LI-In-Bug.png";
import MailIcon from "../../images/icons/Email-icon.png";

function Links() {
  return (
    <div className="contact">
      <h3>Links</h3>
      <hr />
      <ul className="inline-list">
        <li>
          <a
            href="mailto:jiasheng.ma&#64;yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="anchorHoverNoEffect"
          >
            <img alt="email" src={MailIcon} className="icon-height-16px"></img>
          </a>
        </li>
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
            href="https://www.linkedin.com/in/js-ma/"
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
  );
}

export default Links;
