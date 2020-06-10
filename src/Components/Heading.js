import React, { Component } from "react";

import Dashboard from "./Dashboard";
import "../../src/Heading.css";

class Heading extends Component {
  constructor(props) {
    super(props);

    this.child = React.createRef();
  }

  // function for displaying modal
  handleClick = () => {
    this.child.current.showModal();
  };

  render() {
    return (
      <div className="heading">
        <section className="headingBtn">
          <div className="helpBtn" onClick={this.handleClick}>
            <p>Help</p>
          </div>
        </section>
        <section className="heading">
          <h1>
            It's a <span>minefield</span> here!
          </h1>
          <h2>Looks can be deceiving. Find the gold. Pick carefully!</h2>
        </section>
        <Dashboard ref={this.child} />
      </div>
    );
  }
}

export default Heading;
