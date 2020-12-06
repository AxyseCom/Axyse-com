import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Header from './pages/homePage/Header'
import Home from './pages/homePage/Home'
import Design from './pages/designPage/Design'
import Cap from './pages/designPage/components/clothes/Cap'
import Graffiti from './pages/graffitiPage/Graffiti'
import NotFound from './pages/errorPage/NotFound'
import Footer from './pages/homePage/Footer'
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/design" component={Design} />
          <Route exact path="/graffiti" component={Graffiti} />
          <Route exact path="/cap" component={Cap} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
