import React, { Component } from "react";

class Card1 extends Component {
  constructor(props) {
    super(props);

    this.child = React.createRef();
    this.eachCard = [];
  }

  // click handler for card4
  handleClick = (index, val, e) => {
    const clickedCard = this.props.cards_Back[0].val;
    this.child.current.classList.toggle("is-flipped");
    if (clickedCard === "gold") {
      this.props.changeCardState("0.4", "none");
      this.props.triggerWinAlarm();
    } else if (clickedCard === "dynamite") {
      this.props.changeCardState("0.4", "none");
      this.props.triggerLooseAlarm();
    }
    this.props.clickCounter();
  };

  render() {
    const isDisabled = { opacity: this.props.isDisabledCard1 };
    const isDisallowed = { pointerEvents: this.props.isNotAllowed1 };
    const cardFront = this.props.cards_Front;
    const cardBack = this.props.cards_Back;

    const cardList = cardFront.map((card, index) => {
      return (
        <div className="scene scene--card" key={index} style={isDisabled}>
          <div
            ref={this.child}
            className="card"
            onClick={() => this.handleClick(index)}
            style={isDisallowed}
          >
            <div className="card__face card__face--front">
              <img src={card.pic} alt="" />
            </div>
            <div className="card__face card__face--back">
              <img src={cardBack[0].pic} alt="" />
            </div>
          </div>
        </div>
      );
    });
    return (
      <section className="cardGame">
        <main className="cardContainer">{cardList}</main>
      </section>
    );
  }
}

export default Card1;
