import React from "react";

import "./FlipGame.css";

const Card = ({ card, handleCard, flipped }) => {
  return (
    <div className="card" onClick={() => handleCard(card)}>
      <img className={`cardimg ${flipped ? "flipped" : "front"}`} src={card.src} />
      <img className="cardimg back" src="./backpic.png" />
    </div>
  );
};

export default Card;
