import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  About,
  Home
} from './pages';


function App() {
  return (

    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
