import React, { useEffect } from 'react';
import projects from './projects';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import {
    SELECTED_ITEM
} from '../includes/cssClasses'; 
import WorkDisplay from './WorkDisplay';

function Work(props) {
    let { path } = useRouteMatch();
    let links = [];
    let routes = [];

    useEffect(() => {
        props.setNumOfSelectableItems(Object.entries(projects).length);
        return () => {
            props.setNumOfSelectableItems(0);
        }
    });

    let index = 0;
    Object.entries(projects).map( ([key, value]) => {
            links.push(
                <li
                    key={`link_${key}`}
                    className={`${props.indexOfSelectableItem === index ? SELECTED_ITEM : ''}`}
                >
                    <Link to={`${path}/${value.id}`}>• {value.name}</Link>
                </li>
            );
            routes.push(
                <Route path={`${path}/${value.id}`} key={`route_${key}`} >
                    <WorkDisplay
                        work={value}
                    />
                </Route>
            );
            index++;
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
                    <ul className="inline-block">
                        {links}
                    </ul>
                </Route>

                {routes}
                
            </Switch>
        </div>
    );
}

export default Work;
