import React, { Component } from "react";
import Modal from "./Modal";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = { show: false };
  }

  // show modal function via state change
  showModal = () => {
    this.setState({ show: true });
  };

  // hide modal function via state change
  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          {/* modal content */}
          <h3>Rules</h3>
          <ol className="rules">
            <li>
              The goal is to get to a pot of gold on the underside of one of the
              cards.
            </li>
            <li>Clicking on a card reveals its underside</li>
            <li>
              Behind each card lies either a giggling monkey, an exploding
              dynamite, or a pot of gold
            </li>
            <li>Finding the pot of gold will end the game</li>
            <li>Finding a dynamite will end the game.</li>
            <li>Finding a monkey allows further attempts.</li>
            <li>Each play allows for a maximum of 3 attempts.</li>
            <li>"Try Again" button starts the game afresh.</li>
            <li>"Quit" button quits the game entirely.</li>
          </ol>
        </Modal>
      </main>
    );
  }
}

export default Dashboard;
