import React from 'react';
import { routes } from '../../routes';
// import { useHistory } from "react-router-dom";


function Console(props) {
    // const history = useHistory();
    const handleEnterOnClick = (path) => {

        // TODO: make sure this is strictly for when menu is opened
        // history.push(path);
    }
    return (
        <div className="console">
            <div className="up"><span className="console-item direction-button">⬆︎</span></div>
            <div className="right"><span className="console-item direction-button">➽</span></div>
            <div className="left"><span className="console-item direction-button">☚</span></div>
            <div className="down"><span className="console-item direction-button">⟱</span></div>
            <div className="select">
                <span 
                    className="console-item control-button"
                    onClick={props.handleSelectOnClick}
                >
                    SELECT
                </span>
            </div>
            <div className="enter">
                <span
                    className="console-item control-button"
                    onClick={handleEnterOnClick(routes[props.indexOfSelectedRoute].path)}
                >
                    ENTER
                </span>
            </div>
            <div className="A"><span className="console-item action-button">A</span></div>
            <div className="B">
                <span
                    className="console-item action-button"
                    onClick={props.handleBOnClick}
                >
                    B
                </span>
            </div>
        </div>
    );
}

export default Console;
