import {React, useState, useEffect} from "react";
import "./CardFetch.css";
import BasicExample from "./SearchMenu";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import LoginPanel from "./LoginPanel";

const CardFetch = ({keyword,currentView}) => {

    const [items,setItems] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 20;
    const [lightboxIndex, setLightboxIndex] = useState(-1);
    const [myArray,setMyArray] = useState([]);

    useEffect(() => {
        fetch(`https://api.tcgdex.net/v2/en/cards?name=eq:${keyword}`)
        .then((res) => res.json())
        .then((json) => {
        const cardArray = Array.isArray(json) ? json : Object.values(json);
        setItems(cardArray);
        setDataLoaded(true);
    });
    }, [keyword]);
    const totalPages = Math.ceil(items.length / cardsPerPage);
    const currentCards = items.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);
    return (
        <div className="App">
            <h1 className="pokeFetch">TcgDev card</h1>
            <div className = "containerAndButton">
            <div className="container">
                {dataLoaded && currentCards.map((card, index) => (
                    <div className="item" key={card.id}>
                        <ul>
                            <li><strong>ID:</strong> {card.id}</li>
                            <li><strong>Name:</strong> {card.name}</li>
                        </ul>
                        {card.image && (
                            <img src={`${card.image}/high.jpg`} alt={card.name}  onClick={() => setLightboxIndex(index)} style={{ cursor: 'pointer' }}/>
                        )}
                        <button onClick={() => {
                                myArray.push({
                                    id: card.id,
                                    name: card.name,
                                });
                                console.log(myArray);
                }}>
        Add Card To Collection
            </button>
            </div>
                ))}
                <div className = "lightbox">
                <Lightbox
                    open={lightboxIndex >= 0}
                    index={lightboxIndex}
                    close={() => setLightboxIndex(-1)}
                    slides={currentCards.map((card) => ({
                        src: `${card.image}/high.jpg`,
                        alt: card.name,
                    }))}
                />
                </div>
            </div>
            <div className="pagination">
                <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
                    Prev
                </button>
                <span>{currentPage} / {totalPages}</span>
                <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
                    Next
                </button>
                </div>
            </div>
        </div>
    );
    };
    export default CardFetch;