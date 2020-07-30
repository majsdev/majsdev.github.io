import React, { useEffect } from "react";
import projects from "./projects";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { SELECTED_ITEM } from "../includes/cssClasses";
import WorkDisplay from "./WorkDisplay";
import { ScreenContext } from "../../App";

function Work(props) {
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
      numOfSelectableItems: Object.entries(projects).length,
    });

    dispatch({
      type: "SET_ROUTES_OF_SELECTABLE_ITEMS",
      routesOfSelectableItems: Object.entries(projects).map(
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
  let links = [];
  let routes = [];

  let index = 0;
  Object.entries(projects).map(([key, value]) => {
    links.push(
      <li
        key={`link_${key}`}
        className={`${
          screenItems.indexOfSelectableItem === index ? SELECTED_ITEM : ""
        }`}
        onMouseEnter={handleMouseSelectItem(index)}
      >
        <Link to={`${path}/${value.id}`} className="selectable-item">
          • {value.name}
        </Link>
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
      <h3>Projects</h3>
      <hr />
      <Switch>
        <Route exact path={path}>
          <ul className="inline-block">{links}</ul>
        </Route>

        {routes}
      </Switch>
    </div>
  );
}

// class Work extends React.Component {
//   componentDidMount() {
//     this.props.setNumOfSelectableItems(Object.entries(projects).length);
//   }

//   componentWillUnmount() {
//     this.props.setNumOfSelectableItems(0);
//     this.props.setIndexOfSelectableItem(0);
//   }

//   render() {
//     let { path } = this.props.match; /* `match` is from `withRouter` */
//     let links = [];
//     let routes = [];

//     let index = 0;
//     Object.entries(projects).map(([key, value]) => {
//       links.push(
//         <li
//           key={`link_${key}`}
//           className={`${
//             this.props.indexOfSelectableItem === index ? SELECTED_ITEM : ""
//           }`}
//         >
//           <Link to={`${path}/${value.id}`}  className="selectable-item">• {value.name}</Link>
//         </li>
//       );
//       routes.push(
//         <Route path={`${path}/${value.id}`} key={`route_${key}`}>
//           <WorkDisplay work={value} />
//         </Route>
//       );
//       index++;
//     });
//     routes.push(
//       <Route path={`${path}/*`} key={`route_404`}>
//         404
//       </Route>
//     );

//     return (
//       <div className="Work">
//         <h3>Projects</h3>
//         <Switch>
//           <Route exact path={path}>
//             <ul className="inline-block">{links}</ul>
//           </Route>

//           {routes}
//         </Switch>
//       </div>
//     );
//   }
// }

export default withRouter(Work);
