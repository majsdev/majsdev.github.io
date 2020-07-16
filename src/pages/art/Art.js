import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import * as themes from './themes'

function Art() {
    let { path } = useRouteMatch();
    let links = [];
    let routes = [];

    Object.entries(themes).map( ([key,value]) => {
            links.push(
                <li key={`link_${key}`}>
                    <Link to={`${path}/${key}`}>• {key}</Link>
                </li>
            )
            routes.push(
                <Route path={`${path}/${key}`} key={`route_${key}`} >
                    replace with generic art component witht "{key}" content
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
        <div className="Art">
            <Switch>
                <Route exact path={path}>
                    <h3>Art - The Explicables and Inexplicables</h3>
                    <ul>
                        {links}
                    </ul>
                </Route>

                {routes}
                
            </Switch>
        </div>
    );
}

export default Art;
