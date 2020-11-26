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
            <h1>axyse</h1>
          </a>
          <p>This is my website where I post my code, art and design</p>
        </div>
        <div className="gin-box">
          <div id="gin" style={styleGin}>
            <div className="circle">
              <div className="logo-link" id="link1">
                <a href="https://www.youtube.com/channel/UCoBnBDVTfucEjRzEK__LiSA" target="_blank">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
              <div className="logo-link" id="link2">
                <a href="https://vk.com/artiuga" target="_blank">
                  <i className="fab fa-vk"></i>
                </a>
              </div>
              <div className="logo-link" id="link3">
                <a href="https://www.instagram.com/a_axyse/" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div className="logo-link" id="link4">
                <a href="https://github.com/AxyseCom" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
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
