import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
// pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Details from "./pages/Details";
// components
import Nav from "./features/nav";
import ProtectedRoute from "./features/protectedRoute";

import "./App.scss";

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <main>
          <Switch>
            {/* app routes */}
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/details" component={Details} />
            <ProtectedRoute exact path="/" component={Home} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
