import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  About,
  Art,
  Home,
  Note,
  Work,
  NavBar,
  Console
} from './pages';
import './App.css';
import { NUMBER_OF_ROUTES } from './routes';


function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [indexOfSelectedRoute, setIndexOfSelectedRoute] = useState(0);
  const closeMenu = () => setIsMenuOpened(false);
  const openMenu = () => setIsMenuOpened(true);
  const handleSelectOnClick = () => {
    if (!isMenuOpened) {
      openMenu();
    } else {
      setIndexOfSelectedRoute((indexOfSelectedRoute+1)%NUMBER_OF_ROUTES);
    }
  }
  const handleBOnClick = () => {
    if (isMenuOpened) {
      closeMenu();
      setIndexOfSelectedRoute(0);
    }
  }

  return (
    <div className="App">

      <div className="container">
        <div className="content">
          <Router>
              <Switch>
                <Route exact path="/"> <Home /> </Route>
                <Route path="/about"> <About /> </Route>
                <Route path="/art"> <Art /> </Route>
                <Route path="/note"> <Note /> </Route>
                <Route path="/work"> <Work /> </Route>
                <Route path="*"> 404 </Route>
              </Switch>
              
              <NavBar 
                isMenuOpened={isMenuOpened}
                indexOfSelectedRoute={indexOfSelectedRoute}
              />
          </Router>
        </div>
      </div>

      {/* <div className="banner">
        majiasheng
      </div> */}

      <Console
        indexOfSelectedRoute={indexOfSelectedRoute}
        handleSelectOnClick={handleSelectOnClick}
        handleBOnClick={handleBOnClick}
      />
    </div>
  );
}

export default App;
