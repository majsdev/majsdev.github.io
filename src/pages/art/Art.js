import React, { useEffect } from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import * as themes from './themes';
import {
    SELECTED_ITEM
} from '../includes/cssClasses'; 
import ArtDisplay from './ArtDisplay';

function Art(props) {
    let { path } = useRouteMatch();
    let links = [];
    let routes = [];

    useEffect(() => {
        props.setNumOfSelectableItems(Object.entries(themes).length);
        return () => {
            props.setNumOfSelectableItems(0);
        }
    })

    let index = 0;
    Object.entries(themes).map( ([key,value]) => {
            links.push(
                <li
                    key={`link_${key}`}
                    className={`${props.indexOfSelectableItem === index ? SELECTED_ITEM: ''}`}
                >
                    <Link to={`${path}/${key}`}>• {key}</Link>
                </li>
            )
            routes.push(
                <Route path={`${path}/${key}`} key={`route_${key}`} >
                    <ArtDisplay 
                        artThemeName={key}
                        artThemeValues={value}
                    />
                </Route>
            )
            index++;
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
                    <ul className="inline-block">
                        {links}
                    </ul>
                </Route>

                {routes}
                
            </Switch>
        </div>
    );
}

export default Art;
