import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router, Link } from "react-router-dom";
// pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Details from "./pages/Details";

import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/details">Details</Link>
          </li>
        </ul>
      </nav>
      <div className="App">
        {/* app routes */}
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/details" component={Details} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
