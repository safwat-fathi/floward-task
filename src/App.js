import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
// pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Details from "./pages/Details";
// components
import Nav from "./features/nav";

import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        {/* app routes */}
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/details" component={Details} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
