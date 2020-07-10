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
    Object.keys(themes).map( t =>
        links.push(
            <li key={`link_${t}`}>
                <Link to={`${path}/${t}`}>{t}</Link>
            </li>
        )
    )
    Object.entries(themes).map( ([key,value]) =>
        routes.push(
            <Route path={`${path}/${key}`} key={`route_${key}`} >
                replace with generic art component witht "{key}" content
            </Route>
        )
    )

    return (
        <div className="Art">

            <Switch>
                <Route exact path={path}>
                    <h3>The explicable and inexplicables</h3>
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
