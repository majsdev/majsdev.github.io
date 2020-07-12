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
            <NavBar />

            <Switch>
              <Route exact path="/"> <Home /> </Route>
              <Route path="/about"> <About /> </Route>
              <Route path="/art"> <Art /> </Route>
              <Route path="/note"> <Note /> </Route>
              <Route path="/work"> <Work /> </Route>
              <Route path="*"> 404 </Route>
            </Switch>
        </Router>

        <div className="A"><button>A</button></div>
        <div className="B"><button>B</button></div>
      </div>
      <div className="console">
        <button>
          select
        </button>
      </div>
    </div>
  );
}

export default App;
