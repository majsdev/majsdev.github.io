import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";
import './NavBar.css';
import {
  VISIBLE,
  HIDDEN
} from './cssClasses';
import { routes } from '../../routes';

function NavBar(props) {
  const getNavBarVisibilityClass = () => props.isMenuOpened ? VISIBLE : HIDDEN;
  const getNavItemVisibilityClass = (indexOfNavItem) => props.indexOfSelectedRoute === indexOfNavItem? VISIBLE : HIDDEN;
  const routesJSX = [];

  for (let [index, route] of routes.entries()) {
    routesJSX.push(
      <li key={`${route.name}`}>
        <Link to={route.path}>
          <span 
            // className={`greater-than ${getNavItemVisibilityClass(index)}`}
          >
            <span>&gt;</span>
          </span>
          {route.name}
        </Link>
      </li>
    );
  }

  return (
    <div className={`NavBar menu ${getNavBarVisibilityClass()}`}>
        <ul id="nav-items">{routesJSX}</ul>
    </div>
  );
}

export default NavBar;
