import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/homePage/Home";
import Design from "./pages/designPage/Design";
import NotFound from "./pages/errorPage/NotFound";
import Footer from "./pages/components/Footer";
import AmazingMount from "./pages/WebsitePortfolio/AmazingMount/AmazingMount"
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/design" component={Design} />
          <Route exact path="/amazing-mount" component={AmazingMount} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
