import "./About.css";
import React, { useEffect } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import sections from './sections';
import { SELECTED_ITEM } from "../includes/cssClasses";
import { ScreenContext } from "../../App";

function About(props) {
  const { screenItems, dispatch } = React.useContext(ScreenContext);

  /* reason for passing in index is to create closure */
  const handleMouseSelectItem = (index) => {
    return (() => dispatch({
      type: 'MOUSE_SELECT_ITEM',
      index
    }));
  };

  useEffect(() => {
    dispatch({
      type: "SET_NUM_OF_SELECTABLE_ITEMS",
      numOfSelectableItems: Object.entries(sections).length,
    });

    dispatch({
      type: "SET_ROUTES_OF_SELECTABLE_ITEMS",
      routesOfSelectableItems: Object.entries(sections).map(
        ([key, value]) => `${props.match.path}/${value.id}`
      ),
    });

    return () => {
      dispatch({
        type: "SET_NUM_OF_SELECTABLE_ITEMS",
        numOfSelectableItems: 0,
      });
      dispatch({
        type: "SET_ROUTES_OF_SELECTABLE_ITEMS",
        routesOfSelectableItems: [],
      });
      dispatch({
        type: "SET_INDEX_OF_SELECTABLE_ITEM",
        indexOfSelectableItem: 0,
      });
    };
  }, []);

  let { path } = props.match; /* `match` is from `withRouter` */
  let linksJSX = [];
  let routesJSX = [];

  let index = 0;
  Object.entries(sections).map(([key, value]) => {
    linksJSX.push(
      <li
        key={`link_${key}`}
        className={`${
          screenItems.indexOfSelectableItem === index ? SELECTED_ITEM : ""
        }`}
        onMouseEnter={handleMouseSelectItem(index)}
      >
        <Link to={`${path}/${key}`}>• {value.displayName}</Link>
      </li>
    );
    routesJSX.push(
      <Route path={`${path}/${key}`} key={`route_${key}`}>
        {value.component}
      </Route>
    );
    index++;
  })



  return (
    <div className="About">

      <Switch>
        <Route exact path={path}>
        <div className="intro">
          <h3>Hello world</h3>
          <hr />
          <p>
            My name is Jia Sheng Ma.
            {/* <span role="img" aria-label="name-info">ℹ️</span> */}
          </p>
          <p>I am a software engineer,</p>
          <p>and I solve problems.</p>
          <hr />
          <br />
        </div>
          <ul className="inline-block">{linksJSX}</ul>
        </Route>

        {routesJSX}
      </Switch>
    </div>
  );
}

export default withRouter(About);
