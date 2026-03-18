import {React, useState, useEffect} from "react";
import "./CardFetch.css";
import BasicExampleCard from "./SearchMenu";

const CardFetch = ({keyword}) => {
    const [items,setItems] = useState(null);
    const [dataLoaded, setDataLoaded] = useState(false);
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${keyword}`)
        .then((res) => res.json())
        .then((json) => {
            setItems(json);
            setDataLoaded(true);
            console.log(json);
        });
    }, [keyword]);
    const extractedAbilities = items?.abilities.map(items => items?.ability.name);
        
    const extractedMoves = items?.moves.map(items => items?.move.name);
        return (
                <div className="App">
                    <h1 className="pokeFetch">Pokemon</h1>
                    <div className="container">
                        {dataLoaded && items && (
                            <div className="item">
                                <ul>
                                    <li><strong>ID:</strong> {items.id}</li>
                                    <li><strong>Name:</strong> {items.name}</li>
                                </ul>
                                {items.sprites && (
                                    <img src={items.sprites.front_default} alt={items.name} />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            );
};
export default CardFetch;