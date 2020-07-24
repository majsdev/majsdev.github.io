import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About, Art, Home, Note, Work, NavBar, Console } from "./pages";
import "./App.css";
// import { NUMBER_OF_ROUTES } from "./routes";
import reducer from "./reducer";

export const ScreenContext = React.createContext();

function App() {
  // const [isMenuOpened, setIsMenuOpened] = useState(false);
  // const [indexOfSelectedRoute, setIndexOfSelectedRoute] = useState(0);
  // /* doubles as indicator of arrow selectable items on the screen */
  // const [numOfSelectableItems, setNumOfSelectableItems] = useState(0);
  // const [routesOfSelectableItems, setroutesOfSelectableItems] = useState("#");
  // const [indexOfSelectableItem, setIndexOfSelectableItem] = useState(0);
  // const closeMenu = () => setIsMenuOpened(false);
  // const openMenu = () => setIsMenuOpened(true);
  // const handleSelectOnClick = () => {
  //   if (!isMenuOpened) {
  //     openMenu();
  //   } else {
  //     setIndexOfSelectedRoute((indexOfSelectedRoute + 1) % NUMBER_OF_ROUTES);
  //   }
  // };
  // const handleBOnClick = () => {
  //   if (isMenuOpened) {
  //     closeMenu();
  //     setIndexOfSelectedRoute(0);
  //   }
  // };
  // const handleMouseSelectNavItem = (index) => () => {
  //   if (isMenuOpened) setIndexOfSelectedRoute(index);
  // };
  // const handleUpArrowOnClick = () => {
  //   if (!isMenuOpened && numOfSelectableItems > 0) {
  //     /* + numOfSelectableItems because negative number mod positive number will return negative */
  //     setIndexOfSelectableItem(
  //       (indexOfSelectableItem - 1 + numOfSelectableItems) %
  //         numOfSelectableItems
  //     );
  //   }
  // };
  // const handleDownArrowOnClick = () => {
  //   if (!isMenuOpened && numOfSelectableItems > 0)
  //     setIndexOfSelectableItem(
  //       (indexOfSelectableItem + 1) % numOfSelectableItems
  //     );
  // };

  const screenItems = {
    isMenuOpened: false,
    indexOfSelectedRoute: 0,
    numOfSelectableItems: 0,
    routesOfSelectableItems: [],
    indexOfSelectableItem: 0,
  };

  const [screenItemsState, dispatch] = React.useReducer(reducer, screenItems);

  return (
    <ScreenContext.Provider value={{ screenItems: screenItemsState, dispatch }}>
      <div className="App">
        <Router>
          <div className="container">
            <div className="content">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/art">
                  <Art />
                </Route>
                <Route path="/note">
                  <Note />
                </Route>
                <Route path="/work">
                  <Work />
                </Route>
                <Route path="*"> 404 </Route>
              </Switch>
            </div>
          </div>

          {/* <div className="banner">
            majiasheng
          </div> */}

          <div className="console-wrapper">
            <NavBar />
            <Console />
          </div>
        </Router>
      </div>
    </ScreenContext.Provider>
  );
}

export default App;
