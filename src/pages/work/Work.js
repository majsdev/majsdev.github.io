import React from "react";
import projects from "./projects";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { SELECTED_ITEM } from "../includes/cssClasses";
import WorkDisplay from "./WorkDisplay";

class Work extends React.Component {
  componentDidMount() {
    this.props.setNumOfSelectableItems(Object.entries(projects).length);
  }

  componentWillUnmount() {
    this.props.setNumOfSelectableItems(0);
    this.props.setIndexOfSelectableItem(0);
  }

  render() {
    let { path } = this.props.match; /* `match` is from `withRouter` */
    let links = [];
    let routes = [];

    let index = 0;
    Object.entries(projects).map(([key, value]) => {
      links.push(
        <li
          key={`link_${key}`}
          className={`${
            this.props.indexOfSelectableItem === index ? SELECTED_ITEM : ""
          }`}
        >
          <Link to={`${path}/${value.id}`}>• {value.name}</Link>
        </li>
      );
      routes.push(
        <Route path={`${path}/${value.id}`} key={`route_${key}`}>
          <WorkDisplay work={value} />
        </Route>
      );
      index++;
    });
    routes.push(
      <Route path={`${path}/*`} key={`route_404`}>
        404
      </Route>
    );

    return (
      <div className="Work">
        <Switch>
          <Route exact path={path}>
            <h3>Projects and work items</h3>
            <ul className="inline-block">{links}</ul>
          </Route>

          {routes}
        </Switch>
      </div>
    );
  }
}

export default withRouter(Work);
