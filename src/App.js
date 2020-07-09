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
    NavBar
} from './pages';


function App() {
return (

    <div className="App">
        <Router>
            <NavBar />
            <Switch>

                <Route path="/about">
                    <About />
                </Route>
                
                <Route path="/art">
                    <Art />
                </Route>

                <Route path="/">
                    <Home />
                </Route>

            </Switch>
        </Router>
    </div>

);
}

export default App;
