import {React, useState, useEffect} from "react";
import "./APIfetch.css";
import BasicExample from "./SearchMenu";

const APIfetch = ({keyword}) => {
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
    const extractedTypes = items?.types.map(items => items?.type.name);

    const extractedAbilities = items?.abilities.map(items => items?.ability.name);
        
    const extractedMoves = items?.moves.map(items => items?.move.name);
        return (
                <div className="App">
                    <h1 className="pokeFetch">Pokemon</h1>
                    <div className="pokemon-container">
                        {dataLoaded && items && (
                            <div className="pokemon-item">
                                <ul>
                                    <li><strong>ID:</strong> {items.id}</li>
                                    <li><strong>Name:</strong> {items.name}</li>
                                </ul>
                                {items.sprites && (
                                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                        <img 
                                            src={items.sprites.front_default} 
                                            alt={`${items.name} default`} 
                                            style={{ width: '45%', height: 'auto', margin: '5px'}}
                                        />
                                        <img 
                                            src={items.sprites.front_shiny} 
                                            alt={`${items.name} shiny`} 
                                            style={{ width: '45%', height: 'auto', margin: '5px'}}
                                        />
                                    </div>
                                )}
                                <div style={{ marginTop: '20px', width: '100%' }}>
                            <BasicExample 
                                types={extractedTypes} 
                                abilities={extractedAbilities} 
                                moves={extractedMoves} 
                            />
                        </div>
                            </div>
                        )}
                    </div>
                </div>
            );
};
export default APIfetch;