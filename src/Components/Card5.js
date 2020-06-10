import React, { Component } from "react";

class Card2 extends Component {
  constructor(props) {
    super(props);

    this.child = React.createRef();
    this.eachCard = [];
  }

  // click handler for card5
  handleClick = (index, val, e) => {
    const clickedCard = this.props.cards_Back[0].val;
    this.eachCard[index].classList.toggle("is-flipped");
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
    const isDisabled = { opacity: this.props.isDisabledCard2 };
    const isDisallowed = { pointerEvents: this.props.isNotAllowed2 };
    const cardFront = this.props.cards_Front;
    const cardBack = this.props.cards_Back;

    const cardList = cardFront.map((card, index) => {
      return (
        <div className="scene scene--card" key={index} style={isDisabled}>
          <div
            ref={(ref) => (this.eachCard[index] = ref)}
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

export default Card2;
