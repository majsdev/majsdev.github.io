import React from 'react';
import projects from './projects';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

function Work() {
    let { path } = useRouteMatch();
    let links = [];
    let routes = [];

    Object.entries(projects).map( ([key, value]) => {
            links.push(
                <li key={`link_${key}`}>
                    <Link to={`${path}/${value.id}`}>• {value.name}</Link>
                </li>
            )
            routes.push(
                <Route path={`${path}/${value.id}`} key={`route_${key}`} >
                    replace with generic work component with "{key}" content<br/><br/>
                    <div>{value.desc}</div>
                </Route>
            )
        }
    )
    routes.push(
        <Route path={`${path}/*`} key={`route_404`} >
            404
        </Route>
    )

    return (
        <div className="Work">
            <Switch>
                <Route exact path={path}>
                    <h3>Projects and work items</h3>
                    <ul>
                        {links}
                    </ul>
                </Route>

                {routes}
                
            </Switch>
        </div>
    );
}

export default Work;
