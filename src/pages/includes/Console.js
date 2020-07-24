import React from "react";
import { routes } from "../../routes";
import { withRouter } from "react-router-dom";
import { ScreenContext } from "../../App";

function Console(props) {
  const { screenItems, dispatch } = React.useContext(ScreenContext);

  const handleEnterOnClick = () => {
    if (props.isMenuOpened)
      props.history.push(routes[props.indexOfSelectedRoute].path);
  };
  const handleAOnClick = () => {
    if (!props.isMenuOpened && props.numOfSelectableItems > 0)
      props.history.push(
        props.routeOfSelectableItems[props.indexOfSelectableItem]
      );
  };
  return (
    <div className="console">
      <div className="up">
        <span
          className="console-item direction-button"
          onClick={props.handleUpArrowOnClick}
        >
          ⬆︎
        </span>
      </div>
      <div className="right">
        <span className="console-item direction-button">➽</span>
      </div>
      <div className="left">
        <span className="console-item direction-button">☚</span>
      </div>
      <div className="down">
        <span
          className="console-item direction-button"
          onClick={props.handleDownArrowOnClick}
        >
          ⟱
        </span>
      </div>
      <div className="select">
        <span
          className="console-item control-button"
          onClick={() =>
            dispatch({
              type: "SELECT",
            })
          }
          // onClick={props.handleSelectOnClick}
        >
          SELECT
        </span>
      </div>
      <div className="enter">
        <span
          className="console-item control-button"
          onClick={handleEnterOnClick}
        >
          ENTER
        </span>
      </div>
      <div className="A" onClick={handleAOnClick}>
        <span className="console-item action-button">A</span>
      </div>
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

export default withRouter(Console);
