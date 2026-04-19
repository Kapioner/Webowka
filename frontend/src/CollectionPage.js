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
      <h1 style={{ margin: 0, color: 'white' }}>My Collection</h1>
      <div className="container">
        {cards.map((card, index) => (
          <div key={index} className="item">
            <p><strong>{card.name}</strong></p>
            {card.image && <img src={`${card.image}/high.jpg`} alt={card.name} />}
          </div>
        ))}
        {cards.length === 0 && <p style={{ margin: 0, color: 'white' }}>No cards in your collection</p>}
      </div>
    </div>
  );
};

export default CollectionPage;