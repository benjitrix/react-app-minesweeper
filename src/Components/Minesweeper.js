import React, { Component } from "react";
import Heading from "./Heading";

import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";

import card0 from "../images/straight-face.png";
import card1 from "../images/happy-face.png";
import card2 from "../images/confused-face.png";
import card3 from "../images/straight-face.png";
import card4 from "../images/hushed-face.png";
import card5 from "../images/happy-face.png";
import card6 from "../images/straight-face.png";
import card7 from "../images/hushed-face.png";
import card8 from "../images/confused-face.png";

import card_0 from "../images/dynamite.png";
import card_1 from "../images/monkey.png";
import card_2 from "../images/monkey.png";
import card_3 from "../images/monkey.png";
import card_4 from "../images/monkey.png";
import card_5 from "../images/monkey.png";
import card_6 from "../images/dynamite.png";
import card_7 from "../images/monkey.png";
import card_8 from "../images/pot-of-gold.png";

// array storage for front of cards
const card_Front = [
  { pic: card0, val: "monkey" },
  { pic: card1, val: "monkey" },
  { pic: card2, val: "dynamite" },
  { pic: card3, val: "monkey" },
  { pic: card4, val: "gold" },
  { pic: card5, val: "monkey" },
  { pic: card6, val: "monkey" },
  { pic: card7, val: "dynamite" },
  { pic: card8, val: "gold" },
];

// array storage for underside of cards
const card_Back = [
  { pic: card_0, val: "dynamite" },
  { pic: card_1, val: "monkey" },
  { pic: card_2, val: "monkey" },
  { pic: card_3, val: "monkey" },
  { pic: card_4, val: "monkey" },
  { pic: card_5, val: "monkey" },
  { pic: card_6, val: "dynamite" },
  { pic: card_7, val: "monkey" },
  { pic: card_8, val: "gold" },
];

// random front of card image generator
let fArr = [];
let fArr1 = [];
let fArr2 = [];
let fArr3 = [];
let fArr4 = [];
let fArr5 = [];
let fArr6 = [];
let frontArr = [fArr1, fArr2, fArr3, fArr4, fArr5, fArr6];
let f = 8;

for (let i = 0; i <= f; ++i) {
  fArr.push(i);
}
let sortedFrontArr = fArr.sort(function () {
  return Math.random() - 0.5;
});
let uniqueFrontArr = sortedFrontArr.splice(1, 6);
for (let i = 0; i < uniqueFrontArr.length; i++) {
  frontArr[i].push(card_Front[uniqueFrontArr[i]]);
}

// random back of card image generator
let bArr = [];
let bArr1 = [];
let bArr2 = [];
let bArr3 = [];
let bArr4 = [];
let bArr5 = [];
let bArr6 = [];
let backArr = [bArr1, bArr2, bArr3, bArr4, bArr5, bArr6];
let b = 8;

for (let i = 0; i <= b; ++i) {
  bArr.push(i);
}
let sortedBackArr = bArr.sort(function () {
  return Math.random() - 0.5;
});
let uniqueBackArr = sortedBackArr.splice(1, 6);
for (let i = 0; i < uniqueBackArr.length; i++) {
  backArr[i].push(card_Back[uniqueBackArr[i]]);
}

class Minesweeper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabledCard1: "",
      isDisabledCard2: "",
      isDisabledCard3: "",
      isNotAllowed1: "",
      isNotAllowed2: "",
      isNotAllowed3: "",
      attempts: 0,
      showWin: false,
      showLoose: false,
      showMaxAttempt: false,
    };
  }

  // disables cards by changing state
  disableCard = (val, cursorVal) => {
    this.setState({
      isDisabledCard1: val,
      isDisabledCard2: val,
      isDisabledCard3: val,
      isNotAllowed1: cursorVal,
      isNotAllowed2: cursorVal,
      isNotAllowed3: cursorVal,
    });
  };

  // counts and records no. of times cards are clicked. Sets off alarm and disables game if allowed no. of play attempts is exceeded.
  attemptsCounter = () => {
    this.setState({
      attempts: this.state.attempts + 1,
    });
    if (this.state.attempts === 3) {
      console.log("You have reached the maximum number of attempts");
      this.disableCard("0.4", "none");
      this.showMaxAttemptAlarm();
      this.setState({ showLoose: false });
      this.setState({ showWin: false });
    }
  };

  //  alarm set-off function for win situation (finding pot of gold)
  showWinAlarm = () => {
    this.setState({ showWin: true });
  };

  // alarm set-off function for loose situation (finding dynamite)
  showLooseAlarm = () => {
    this.setState({ showLoose: true });
  };

  // alarm set-off for function for exceeding allowed no. of attempts
  showMaxAttemptAlarm = () => {
    this.setState({ showMaxAttempt: true });
  };

  render() {
    // change states for alarm css settings from hidden/inactive to visible/active fr win, loose, and max. attempts.
    const showHideWinClassName = this.state.showWin
      ? "winAlarm displayWinAlarm-Yes"
      : "winAlarm displayWinAlarm-No";
    const showHideLooseClassName = this.state.showLoose
      ? "bombAlarm displayBombAlarm-Yes"
      : "bombAlarm displayBombAlarm-No";
    const showHideMaxAttemptClassName = this.state.showMaxAttempt
      ? "limitAlarm displayLimitAlarm-Yes"
      : "limitAlarm displayLimitAlarm-No";

    return (
      <section className="cardGameBox">
        <Heading />

        <main className="cardWrapper">
          <div className={showHideWinClassName}>
            <p className="gold">Gold</p>
          </div>
          <div className={showHideLooseClassName}>
            <p className="bomb">Bomb!</p>
          </div>
          <div className="cardContainer">
          <div className={showHideMaxAttemptClassName}>
            <p className="limit">Max. attempts reached!</p>
          </div>

            <Card1
              cards_Front={fArr1}
              cards_Back={bArr1}
              isDisabledCard1={this.state.isDisabledCard1}
              isNotAllowed1={this.state.isNotAllowed1}
              changeCardState={this.disableCard}
              clickCounter={this.attemptsCounter}
              triggerWinAlarm={this.showWinAlarm}
              triggerLooseAlarm={this.showLooseAlarm}
            />
            <Card2
              cards_Front={fArr2}
              cards_Back={bArr2}
              isDisabledCard2={this.state.isDisabledCard2}
              isNotAllowed2={this.state.isNotAllowed2}
              changeCardState={this.disableCard}
              clickCounter={this.attemptsCounter}
              triggerWinAlarm={this.showWinAlarm}
              triggerLooseAlarm={this.showLooseAlarm}
            />
            <Card3
              cards_Front={fArr3}
              cards_Back={bArr3}
              isDisabledCard3={this.state.isDisabledCard3}
              isNotAllowed3={this.state.isNotAllowed3}
              changeCardState={this.disableCard}
              clickCounter={this.attemptsCounter}
              triggerWinAlarm={this.showWinAlarm}
              triggerLooseAlarm={this.showLooseAlarm}
            />
          </div>
          <div className="cardContainer">
            <Card4
              cards_Front={fArr4}
              cards_Back={bArr4}
              isDisabledCard1={this.state.isDisabledCard1}
              isNotAllowed1={this.state.isNotAllowed1}
              changeCardState={this.disableCard}
              clickCounter={this.attemptsCounter}
              triggerWinAlarm={this.showWinAlarm}
              triggerLooseAlarm={this.showLooseAlarm}
            />
            <Card5
              cards_Front={fArr5}
              cards_Back={bArr5}
              isDisabledCard2={this.state.isDisabledCard2}
              isNotAllowed2={this.state.isNotAllowed2}
              changeCardState={this.disableCard}
              clickCounter={this.attemptsCounter}
              triggerWinAlarm={this.showWinAlarm}
              triggerLooseAlarm={this.showLooseAlarm}
            />
            <Card6
              cards_Front={fArr6}
              cards_Back={bArr6}
              isDisabledCard3={this.state.isDisabledCard3}
              isNotAllowed3={this.state.isNotAllowed3}
              changeCardState={this.disableCard}
              clickCounter={this.attemptsCounter}
              triggerWinAlarm={this.showWinAlarm}
              triggerLooseAlarm={this.showLooseAlarm}
            />
          </div>
        </main>

        {/* Try Again and Quit buttons */}
        <div className="btns">
          <button
            className="gameBtn"
            id="btn1"
            onClick={(e) => window.location.reload()}
          >
            Try Again
          </button>
          <button
            className="gameBtn"
            onClick={(e) => (window.location.href = "/")}
          >
            Quit
          </button>
        </div>
      </section>
    );
  }
}

export default Minesweeper;
