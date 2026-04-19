import { React, useState, useEffect } from "react";

const CollectionPage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://backend_endpoint')
      .then(res => res.json())
      .then(data => setCards(data))
  }, []);

  return (
    <div>
      <h1>My Collection</h1>
      <div className="container">
        {cards.map((card, index) => (
          <div key={index} className="item">
            <p><strong>{card.name}</strong></p>
            {card.image && <img src={`${card.image}/high.jpg`} alt={card.name} />}
          </div>
        ))}
        {cards.length === 0 && <p>No cards in your collection</p>}
      </div>
    </div>
  );
};

export default CollectionPage;