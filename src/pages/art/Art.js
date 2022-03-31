import React, { useEffect } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import * as themes from "./themes";
import { SELECTED_ITEM } from "../includes/cssClasses";
import ArtDisplay from "./ArtDisplay";
import { ScreenContext } from "../../App";
import twbm from "./assets/twbm-vol1-ed1.pdf";

function Art(props) {
  const { screenItems, dispatch } = React.useContext(ScreenContext);

  /* reason for passing in index is to create closure */
  const handleMouseSelectItem = (index) => {
    return () =>
      dispatch({
        type: "MOUSE_SELECT_ITEM",
        index,
      });
  };

  useEffect(() => {
    dispatch({
      type: "SET_NUM_OF_SELECTABLE_ITEMS",
      numOfSelectableItems: Object.entries(themes).length,
    });

    dispatch({
      type: "SET_ROUTES_OF_SELECTABLE_ITEMS",
      routesOfSelectableItems: Object.keys(themes).map(
        (key) => `${props.match.path}/${key}`
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
  Object.entries(themes).map(([key, value]) => {
    linksJSX.push(
      <li
        key={`link_${key}`}
        className={`${
          screenItems.indexOfSelectableItem === index ? SELECTED_ITEM : ""
        }`}
        onMouseEnter={handleMouseSelectItem(index)}
      >
        <Link to={`${path}/${key}`}>• {key}</Link>
      </li>
    );
    routesJSX.push(
      <Route path={`${path}/${key}`} key={`route_${key}`}>
        <ArtDisplay artThemeName={key} artThemeValues={value} />
      </Route>
    );
    index++;
  });

  routesJSX.push(
    <Route path={`${path}/*`} key={`route_404`}>
      404
    </Route>
  );

  return (
    <div className="Art">
      <h3>Art</h3>
      is whatever you make of it
      <hr />
      <h4>Collections</h4>
      <Switch>
        <Route exact path={path}>
          <ul className="inline-block art-collections">{linksJSX}</ul>
        </Route>

        {routesJSX}
      </Switch>
      <hr/>
      <h4>Volumes</h4>
      <a href={twbm} target="_blank">• TWBM Vol.1</a>
    </div>
  );
}

export default withRouter(Art);
