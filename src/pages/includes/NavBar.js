import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";
import './NavBar.css';
import {
  VISIBLE,
  HIDDEN
} from './cssClasses';

function NavBar() {
  const [gtVisiblility, setGtVisiblility] = useState(HIDDEN);

  const routes = [
    {path: '/', name: 'Home'},
    {path: '/about', name: 'About'},
    {path: '/art', name: 'Art'},
    {path: '/work', name: 'Work'},
    {path: '/note', name: 'Note'},
  ];
  const routesJSX = [];

  for (let route of routes) {
    routesJSX.push(
      <li key={`${route.name}`}>
        <Link to={route.path}>
          <span 
            className={`greater-than ${gtVisiblility}`}
          >
            <span>&gt;</span>
          </span>
          {route.name}
        </Link>
      </li>
    );
  }

  return (
    <div className="NavBar">
        <ul id="menu">{routesJSX}</ul>
    </div>
  );
}

export default NavBar;
