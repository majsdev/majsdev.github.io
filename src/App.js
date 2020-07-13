import React from 'react';
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
  NavBar
} from './pages';
import './App.css';


function App() {
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
            
            <NavBar />
        </Router>
      </div>

      {/* <div className="banner">
        majiasheng
      </div> */}

      <div className="console">
        <div className="up"><span className="console-item direction-button">⬆︎</span></div>
        <div className="right"><span className="console-item direction-button">➽</span></div>
        <div className="left"><span className="console-item direction-button">☚</span></div>
        <div className="down"><span className="console-item direction-button">⟱</span></div>
        <div className="select"><span className="console-item control-button">SELECT</span></div>
        <div className="enter"><span className="console-item control-button">ENTER</span></div>
        <div className="A"><span className="console-item action-button">A</span></div>
        <div className="B"><span className="console-item action-button">B</span></div>
      </div>

    </div>
  );
}

export default App;
