import React, { useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About, Art, Home, Posts, Work, NavBar, Console } from "./pages";
import "./App.css";
// import { NUMBER_OF_ROUTES } from "./routes";
import reducer from "./reducer";

export const ScreenContext = React.createContext();

function App() {
  const contentRef = useRef(null);

  // TODO: share this initial state with reducer
  const screenItems = {
    isMenuOpened: false,
    isContentScrollable: false,
    indexOfSelectedRoute: 0,
    numOfSelectableItems: 0,
    routesOfSelectableItems: [],
    indexOfSelectableItem: 0,
    contentRef,
  };

  const [screenItemsState, dispatch] = React.useReducer(reducer, screenItems);

  return (
    <ScreenContext.Provider value={{ screenItems: screenItemsState, dispatch }}>
      <div className="App">
        <Router>
          <div className="container">
            <div className="content" ref={contentRef}>
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
                <Route path="/posts">
                  <Posts />
                </Route>
                {/* <Route path="/work">
                  <Work />
                </Route> */}
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
