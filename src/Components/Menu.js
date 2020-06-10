import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Menu extends Component {
  myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  render() {
    return (
      <div className="topnav" id="myTopnav">
        <a href="/" className="active">
          Home
        </a>
        <div className="dropdown">
          <button className="dropbtn">
            Game
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/Minesweeper">
              <h4>Minesweeper</h4>
            </Link>
          </div>
        </div>
        <a href="#about">About</a>
        <a
          href="#about"
          className="icon"
          onClick={this.myFunction}
        >
          &#9776;
        </a>
      </div>
    );
  }
}

export default Menu;
