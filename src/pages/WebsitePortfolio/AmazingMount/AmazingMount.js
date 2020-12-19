import React from "react";
import "./styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AmazingMount() {
  return (
    <>
      <div className="website-body">
        <div className="back-to">
          <a href="/home">
            <i class="fas fa-backspace"></i>
          </a>
        </div>
        <header className="header">
          <div className="container">
            <div className="header-inner">
            <div className="logo">
              <a href="#">
                <h1>hill</h1>
              </a>            
            </div>
            <nav className="nav">
                <a href="#">home</a>
                <a href="#">about</a>
                <a href="#">projects</a>
                <a href="#">contacts</a>
              </nav>
            </div>
          </div>
          <div className="topic-box">
            <i class="fas fa-moon"></i>
          </div>
          <div className="top-header"></div>
        </header>
        <div className="inform-box-1">

        </div>
        <div  className="inform-box-2">
          <div className="dark-box">
            
          </div>
        </div>
      </div>
    </>
  );
}
