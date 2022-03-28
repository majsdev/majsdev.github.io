import React, { useEffect } from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import * as posts from "./_posts";
import { SELECTED_ITEM } from "../includes/cssClasses";
import Post from "./Post";
import { ScreenContext } from "../../App";

// TODO: add keyword prop
// TODO: add search
function Posts(props) {
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
      numOfSelectableItems: Object.entries(posts).length,
    });

    dispatch({
      type: "SET_ROUTES_OF_SELECTABLE_ITEMS",
      routesOfSelectableItems: Object.keys(posts).map(
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
  Object.entries(posts).map(([key, value]) => {
    linksJSX.push(
      <li
        key={`link_${key}`}
        className={`${
          screenItems.indexOfSelectableItem === index ? SELECTED_ITEM : ""
        }`}
        onMouseEnter={handleMouseSelectItem(index)}
      >
        <Link to={`${path}/${key}`}>• {value.title.toLocaleUpperCase()}</Link>
      </li>
    );
    routesJSX.push(
      <Route path={`${path}/${key}`} key={`route_${key}`}>
        <Post title={value.title} date={value.date} content={value.content} />
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
    <div className="posts">
      <h3>Posts <a href="./plain.html" title="Plain View">📄</a></h3>
      <hr />
      <Switch>
        <Route exact path={path}>
          <ul className="inline-block posts-list">{linksJSX}</ul>
        </Route>

        {routesJSX}
      </Switch>
    </div>
  );
}

export default withRouter(Posts);
