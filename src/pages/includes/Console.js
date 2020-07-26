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
  };
  const handleBOnClick = () => {
    const routeSplitted = props.history.location.pathname.split("/");
    if (screenItems.isMenuOpened) {
      dispatch({
        type: "CLOSE_MENU",
      });
    } else if (routeSplitted.length > 1) {
      const parentRoute = routeSplitted
        .slice(0, routeSplitted.length - 1)
        .join("/");
      props.history.push(parentRoute);
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
    } else if (
      !screenItems.isMenuOpened &&
      screenItems.numOfSelectableItems < 1
    ) {
      /* FIXME: screenItems.numOfSelectableItems is still the number from 
        parent if current route is `/art/*` or `/work/*` */
      screenItems.contentRef.current.scrollTop -= 20;
    }
  };
  const handleLeftOnClick = () => {
    screenItems.contentRef.current.scrollLeft += 20;
  };
  const handleRightOnClick = () => {
    screenItems.contentRef.current.scrollLeft -= 20;
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
      {/* TODO: select specific element for left/right scroll */}
      <div className="right" onClick={handleRightOnClick}>
        <span className="console-item direction-button">➽</span>
      </div>
      <div className="left" onClick={handleLeftOnClick}>
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
