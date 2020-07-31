import React from 'react';
import './About.css';

function About() {
  return (
    <div className="About">
      <p>
        Hello world!
      </p>
      <p>
        My name is Jia Sheng Ma.
        {/* <span role="img" aria-label="name-info">ℹ️</span> */}
      </p>
      <p>
        I solve problems.
      </p>
      <hr />
      <div className="philosophy">
        My philosophy on art and design:
        <ul className="philosophy">
          <li>• Integrity</li>
          <li>• Uniformity</li>
          <li>• Focus</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
