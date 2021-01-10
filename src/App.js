import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./pages/errorPage/NotFound";
import Home from "./pages/home/Home";
import Resort from "./pages/resort-block/components/Resort"
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/resort" component={Resort} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
