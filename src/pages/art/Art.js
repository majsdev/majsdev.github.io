import React from "react";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import * as themes from "./themes";
import { SELECTED_ITEM } from "../includes/cssClasses";
import ArtDisplay from "./ArtDisplay";

class Art extends React.Component {
  componentDidMount() {
    this.props.setNumOfSelectableItems(Object.entries(themes).length);
    this.props.setRouteOfSelectableItems(Object.keys(themes).map(key => `${this.props.match.path}/${key}`));
  }

  componentWillUnmount() {
    this.props.setNumOfSelectableItems(0);
    this.props.setIndexOfSelectableItem(0);
  }

  render() {
    let { path } = this.props.match; /* `match` is from `withRouter` */
    let linksJSX = [];
    let routesJSX = [];

    let index = 0;
    Object.entries(themes).map(([key, value]) => {
      linksJSX.push(
        <li
          key={`link_${key}`}
          className={`${
            this.props.indexOfSelectableItem === index ? SELECTED_ITEM : ""
          }`}
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
        <Switch>
          <Route exact path={path}>
            <h3>Art - The Explicables and Inexplicables</h3>
            <ul className="inline-block">{linksJSX}</ul>
          </Route>

          {routesJSX}
        </Switch>
      </div>
    );
  }
}

export default withRouter(Art);
