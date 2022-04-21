import React, { useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar, Console } from './pages';
import './App.css';
import { routes } from './routes';
import reducer from './reducer';

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

          <Switch>
            <Route exact path="/">
              new home
            </Route>

            <Route path="/gb">
              <div className="container">
                <div className="content" ref={contentRef}>
                  <Switch>
                    {routes.map((r) => (
                      <Route exact path={r.path} component={r.component} key={r.name} />
                    ))}
                    <Route path="*"> 404 </Route>
                  </Switch>
                </div>
              </div>

              <div className="console-wrapper">
                <NavBar />
                <Console />
              </div>
            </Route>

          </Switch>
        </Router>
      </div>
    </ScreenContext.Provider>
  );
}

export default App;
