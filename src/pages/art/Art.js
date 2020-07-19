import React from 'react';
import {
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";
import * as themes from './themes';
import {
    SELECTED_ITEM
} from '../includes/cssClasses'; 
import ArtDisplay from './ArtDisplay';

class Art extends React.Component {

    componentDidMount() {
        this.props.setNumOfSelectableItems(Object.entries(themes).length);
    }

    componentWillUnmount() {
        this.props.setNumOfSelectableItems(0);
        this.props.setIndexOfSelectableItem(0);
    }

    render() {
        let { path } = this.props.match;  /* `match` is from `withRouter` */
        let links = [];
        let routes = [];

        let index = 0;
        Object.entries(themes).map( ([key,value]) => {
                links.push(
                    <li
                        key={`link_${key}`}
                        className={`${this.props.indexOfSelectableItem === index ? SELECTED_ITEM : ''}`}
                    >
                        <Link to={`${path}/${key}`}>• {key}</Link>
                    </li>
                );
                routes.push(
                    <Route path={`${path}/${key}`} key={`route_${key}`} >
                        <ArtDisplay 
                            artThemeName={key}
                            artThemeValues={value}
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

    
}

export default withRouter(Art);
