import React, { Component } from "react";
import logo from "../../assets/images/logo-light.svg";
export default function NotFound() {
  return (
    <div className="container-fluid not-found-page">
      <div className="error-logo">
        <div className="err">
          <h1>404</h1>
        </div>
        <div className="cat-head"></div>
        <div className="left-ear1"></div>
        <div className="left-ear2"></div>
        <div className="right-ear1"></div>
        <div className="right-ear2"></div>
        <div className="left-eye">
          <a href="/home">
            <img
              display="block"
              src={logo}
              height="80"
              width="90"
              className="d-inline-block align-top"
              alt="Logo"
              href="/home"
            />
          </a>
        </div>
        <div className="right-eye">
          <a href="home">
            <img
              display="block"
              src={logo}
              height="80"
              width="90"
              className="d-inline-block align-top"
              alt="Logo"
              href="/home"
            />
          </a>
        </div>
        <div className="nose"></div>
        <div className="mouth1"></div>
        <div className="mouth2"></div>
        <div className="mouth3"></div>
        <div className="left-mustache1"></div>
        <div className="left-mustache2"></div>
        <div className="left-mustache3"></div>
        <div className="right-mustache1"></div>
        <div className="right-mustache2"></div>
        <div className="right-mustache3"></div>
      </div>
    </div>
  );
}
