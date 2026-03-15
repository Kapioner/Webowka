import {React, useState, useEffect} from "react";
import "./APIfetch.css";
const APIfetch = () => {
    const [items,setItems] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(true);
    useEffect(() => {
        fetch("https://api.pokemontcg.io/v2/cards/swsh4-25", {headers: {
            "X-Api-Key": "c1e71664-cdd6-4357-9670-c6f71f9aeca2"
        }})
        .then((res) => res.json())
        .then((json) => {
            setItems(json.data);
            setDataLoaded(true);
        });
    }, []);
        return (
                <div className="App">
                    <h1 className="pokeFetch">PokeAPI card</h1>
                    <div className="container">
                        {dataLoaded && items && (
                            <div className="item">
                                <ul>
                                    <li><strong>ID:</strong> {items.id}</li>
                                    <li><strong>Name:</strong> {items.name}</li>
                                </ul>
                                {items.images && (
                                    <img src={items.images.small} alt={items.name} />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            );
};
export default APIfetch;