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
import { ScreenContext } from "../../App";


function NavBar(props) {
  const { screenItems, dispatch } = React.useContext(ScreenContext);
  const getNavBarVisibilityClass = () => screenItems.isMenuOpened ? VISIBLE : HIDDEN;
  const getNavItemVisibilityClass = (indexOfNavItem) => {
    if (screenItems.indexOfSelectedRoute === indexOfNavItem && screenItems.isMenuOpened)
      return VISIBLE;
    return HIDDEN;
  }
  const getNavItemSelectedClass = (indexOfNavItem) => {
    if (screenItems.indexOfSelectedRoute === indexOfNavItem && screenItems.isMenuOpened)
      return SELECTED_ITEM;
  }
  const routesJSX = [];

  for (let [index, route] of routes.entries()) {
    routesJSX.push(
      <li
        key={`${route.name}`}
        className={getNavItemSelectedClass(index)}
        onMouseEnter={props.handleMouseSelectNavItem(index)}
        // TODO: use dispatch
      > 
        <Link to={route.path}>
          <span 
            className={`greater-than ${getNavItemVisibilityClass(index)}`}
          >
            <span>▶︎</span>
          </span>
          {route.name}
        </Link>
      </li>
    );
  }

  return (
    <div className={`NavBar menu ${getNavBarVisibilityClass()}`}>
        <ul className="nav-items">{routesJSX}</ul>
    </div>
  );
}

export default NavBar;
