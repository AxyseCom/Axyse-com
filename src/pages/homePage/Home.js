import React, { Component } from "react";
import Gin from "../../img/gin-cat.svg";
const styleGin = {
  backgroundImage: `url(${Gin})`,
};

export default class Home extends Component {
  render() {
    return (
      <div className="home-main">
        <div className="page-info">
          <a href="www.axyse.com">
            <h1>axyse studio</h1>
          </a>
          <p>Ваш сайт будет огонь!</p>
        </div>
        <div className="gin-box">
          <div id="gin" style={styleGin}>
            <div className="circle">
              <div className="logo-link" id="link1">
                <i class="fab fa-html5"></i>
              </div>
              <div className="logo-link" id="link1-1">
                <i class="fab fa-css3-alt"></i>
              </div>
              <div className="logo-link" id="link2">
                <i class="fab fa-sass"></i>
              </div>
              <div className="logo-link" id="link2-1">
                <i class="fab fa-python"></i>
              </div>
              <div className="logo-link" id="link3">
                <i class="fab fa-js"></i>
              </div>
              <div className="logo-link" id="link3-1">
                <i class="fas fa-cat"></i>
              </div>
              <div className="logo-link" id="link4">
                <i class="fab fa-react"></i>
              </div>
              <div className="logo-link" id="link4-1">
                <i class="fab fa-node-js"></i>
              </div>
            </div>
            <div id="fireball"></div>
            <div id="fireball-2"></div>
          </div>
        </div>
      </div>
    );
  }
}
