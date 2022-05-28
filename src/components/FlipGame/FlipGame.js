import React, { useState, useEffect, useRef } from "react";

import Card from "./Card";
import "./FlipGame.css";

const cards = [
  { src: "https://source.unsplash.com/featured?animal", matched: false },
  { src: "https://source.unsplash.com/featured?cat", matched: false },
  { src: "https://source.unsplash.com/featured?sea", matched: false },
  { src: "https://source.unsplash.com/featured?game", matched: false },
  { src: "https://source.unsplash.com/featured?car", matched: false },
  { src: "https://source.unsplash.com/featured?house", matched: false },
];

const FlipGame = () => {
  const ref = useRef();
  const [shuffledCards, setShuffledCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [cardOne, setCardOne] = useState(null);
  const [cardTwo, setCardTwo] = useState(null);

  const flipback = () => {
    setTurns((prev) => prev + 1);
    setCardOne(null);
    setCardTwo(null);
    ref.current.classList.remove("disabled");
  };

  useEffect(() => {
    if (cardOne && cardTwo) {
      ref.current.classList.add("disabled");
      if (cardOne.src === cardTwo.src) {
        const tempCards = [...shuffledCards];
        const modified = tempCards.map((card) => (card.src === cardOne.src ? { ...card, matched: true } : card));
        console.log({ modified });
        setShuffledCards(modified);
        flipback();
      } else {
        setTimeout(() => flipback(), 2000);
      }
    }
  }, [cardOne, cardTwo]);

  const newGame = () => {
    const shuffled = [...cards, ...cards].sort(() => Math.random() - 0.5).map((c) => ({ ...c, id: Math.random() }));
    console.log({ shuffled });
    setShuffledCards(shuffled);
    setTurns(0);
  };

  const handleCard = (card) => {
    cardOne ? setCardTwo(card) : setCardOne(card);
  };

  return (
    <div>
      <button onClick={newGame}>New Game</button>
      {shuffledCards.length > 0 && (
        <div>
          <h2>Turns: {turns}</h2>
          <div className="cardscontainer" ref={ref}>
            {shuffledCards.map((card) => (
              <Card card={card} key={card.id} handleCard={handleCard} flipped={card === cardOne || card === cardTwo || card.matched} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlipGame;
