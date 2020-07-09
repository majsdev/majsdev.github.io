import React from 'react';
import {
    Link
  } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/art">Art</Link>
            </li>
        </ul>
    </div>
  );
}

export default NavBar;
