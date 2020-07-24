import React from "react";
import { routes } from "../../routes";
import { withRouter } from "react-router-dom";
import { ScreenContext } from "../../App";

function Console(props) {
  const { screenItems, dispatch } = React.useContext(ScreenContext);

  const handleEnterOnClick = () => {
    if (screenItems.isMenuOpened)
      props.history.push(routes[screenItems.indexOfSelectedRoute].path);
  };
  const handleAOnClick = () => {
    if (!screenItems.isMenuOpened && screenItems.numOfSelectableItems > 0) {
      props.history.push(
        screenItems.routesOfSelectableItems[screenItems.indexOfSelectableItem]
      );
    }
    // TODO: add rounte to stack for B to later navigate back
  };
  const handleBOnClick = () => {
    if (screenItems.isMenuOpened) {
      dispatch({
        type: "CLOSE_MENU",
      });
    }
  };
  const handleUpOnClick = () => {
    if (!screenItems.isMenuOpened && screenItems.numOfSelectableItems > 0) {
      dispatch({
        type: "UP",
      });
    }
  };
  const handleDownOnClick = () => {
    if (!screenItems.isMenuOpened && screenItems.numOfSelectableItems > 0) {
      dispatch({
        type: "DOWN",
      });
    }
  };
  return (
    <div className="console">
      <div className="up">
        <span
          className="console-item direction-button"
          onClick={handleUpOnClick}
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
          onClick={handleDownOnClick}
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
        <span className="console-item action-button" onClick={handleBOnClick}>
          B
        </span>
      </div>
    </div>
  );
}

export default withRouter(Console);
