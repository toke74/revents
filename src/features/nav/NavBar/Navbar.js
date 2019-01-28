import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg  navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img className="mr-3" src="assets/logo.png" alt="logo" />
          Re-vents
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/link">
                Link
              </a>
            </li>
          </ul>
          <button
            className="btn btn-outline-success login mr-3 my-sm-0"
            type="submit"
          >
            Log in
          </button>
          <button
            className="btn btn-outline-success  signup my-sm-0"
            type="submit"
          >
            Sing up
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
