import React from 'react';


function Console(props) {
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
            <div className="enter"><span className="console-item control-button">ENTER</span></div>
            <div className="A"><span className="console-item action-button">A</span></div>
            <div className="B"><span className="console-item action-button">B</span></div>
        </div>
    );
}

export default Console;
