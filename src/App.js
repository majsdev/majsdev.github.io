import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About, Art, Home, Note, Work, NavBar, Console } from "./pages";
import "./App.css";
import { NUMBER_OF_ROUTES } from "./routes";

function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [indexOfSelectedRoute, setIndexOfSelectedRoute] = useState(0);
  /* doubles as indicator of arrow selectable items on the screen */
  const [numOfSelectableItems, setNumOfSelectableItems] = useState(0);
  const [routeOfSelectableItems, setRouteOfSelectableItems] = useState('#');
  const [indexOfSelectableItem, setIndexOfSelectableItem] = useState(0);
  const closeMenu = () => setIsMenuOpened(false);
  const openMenu = () => setIsMenuOpened(true);
  const handleSelectOnClick = () => {
    if (!isMenuOpened) {
      openMenu();
    } else {
      setIndexOfSelectedRoute((indexOfSelectedRoute + 1) % NUMBER_OF_ROUTES);
    }
  };
  const handleBOnClick = () => {
    if (isMenuOpened) {
      closeMenu();
      setIndexOfSelectedRoute(0);
    }
  };
  const handleMouseSelectNavItem = (index) => () => {
    if (isMenuOpened) setIndexOfSelectedRoute(index);
  };
  const handleUpArrowOnClick = () => {
    if (!isMenuOpened && numOfSelectableItems > 0) {
      /* + numOfSelectableItems because negative number mod positive number will return negative */
      setIndexOfSelectableItem(
        (indexOfSelectableItem - 1 + numOfSelectableItems) %
          numOfSelectableItems
      );
    }
  };
  const handleDownArrowOnClick = () => {
    if (!isMenuOpened && numOfSelectableItems > 0)
      setIndexOfSelectableItem(
        (indexOfSelectableItem + 1) % numOfSelectableItems
      );
  };

  return (
    <div className="App">
      <Router>
        <div className="container">
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home setNumOfSelectableItems={setNumOfSelectableItems} />
              </Route>
              <Route path="/about">
                <About setNumOfSelectableItems={setNumOfSelectableItems} />
              </Route>
              <Route path="/art">
                <Art
                  setNumOfSelectableItems={setNumOfSelectableItems}
                  setIndexOfSelectableItem={setIndexOfSelectableItem}
                  setRouteOfSelectableItems={setRouteOfSelectableItems}
                  indexOfSelectableItem={indexOfSelectableItem}
                />
              </Route>
              <Route path="/note">
                <Note setNumOfSelectableItems={setNumOfSelectableItems} />
              </Route>
              <Route path="/work">
                <Work
                  setNumOfSelectableItems={setNumOfSelectableItems}
                  setIndexOfSelectableItem={setIndexOfSelectableItem}
                  setRouteOfSelectableItems={setRouteOfSelectableItems}
                  indexOfSelectableItem={indexOfSelectableItem}
                />
              </Route>
              <Route path="*"> 404 </Route>
            </Switch>
          </div>
        </div>

        {/* <div className="banner">
          majiasheng
        </div> */}

        <div className="console-wrapper">
          <NavBar
            isMenuOpened={isMenuOpened}
            indexOfSelectedRoute={indexOfSelectedRoute}
            handleMouseSelectNavItem={handleMouseSelectNavItem}
          />
          <Console
            indexOfSelectedRoute={indexOfSelectedRoute}
            handleSelectOnClick={handleSelectOnClick}
            handleBOnClick={handleBOnClick}
            isMenuOpened={isMenuOpened}
            handleUpArrowOnClick={handleUpArrowOnClick}
            handleDownArrowOnClick={handleDownArrowOnClick}
            numOfSelectableItems={numOfSelectableItems}
            routeOfSelectableItems={routeOfSelectableItems}
            indexOfSelectableItem={indexOfSelectableItem}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;
