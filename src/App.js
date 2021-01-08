import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./pages/errorPage/NotFound"
import Home from "./pages/home/Home"
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
