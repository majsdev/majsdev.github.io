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


function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [indexOfSelectedRoute, setIndexOfSelectedRoute] = useState(0)
  const closeMenu = () => setIsMenuOpened(false);
  const openMenu = () => setIsMenuOpened(true);
  const handleSelectOnClick = () => {
    console.log(isMenuOpened)
    if (!isMenuOpened) {
      openMenu();
    } else {
      // TODO: show cursor at next menu item
      console.log('TODO: show cursor at next menu item');
    }
  }
  


  return (
    <div className="App">

      <div className="content container">
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

      {/* <div className="banner">
        majiasheng
      </div> */}

      <Console 
        handleSelectOnClick={handleSelectOnClick}
      />
    </div>
  );
}

export default App;
