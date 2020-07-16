import React from 'react';
import {
  Link
} from "react-router-dom";
import './NavBar.css';
import {
  VISIBLE,
  HIDDEN,
  SELECTED_ITEM
} from './cssClasses';
import { routes } from '../../routes';

function NavBar(props) {
  const getNavBarVisibilityClass = () => props.isMenuOpened ? VISIBLE : HIDDEN;
  const getNavItemVisibilityClass = (indexOfNavItem) => {
    if (props.indexOfSelectedRoute === indexOfNavItem && props.isMenuOpened)
      return VISIBLE;
    return HIDDEN;
  }
  const getNavItemSelectedClass = (indexOfNavItem) => {
    if (props.indexOfSelectedRoute === indexOfNavItem && props.isMenuOpened)
      return SELECTED_ITEM;
  }
  const routesJSX = [];

  for (let [index, route] of routes.entries()) {
    routesJSX.push(
      <li 
        key={`${route.name}`}
        className={getNavItemSelectedClass(index)}
        onMouseEnter={props.handleMouseSelectNavItem(index)}
      > 
        <Link to={route.path}>
          <span 
            className={`greater-than ${getNavItemVisibilityClass(index)}`}
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
