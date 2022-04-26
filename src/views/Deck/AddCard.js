import React, { useContext } from "react"
import {GlobalDeckList} from "./DeckList"

const AddCard = ({cardname}) => {

    const { addCard } = useContext(GlobalDeckList)
    
    const onSubmit = e => {
    e.preventDefault();
    const newCardinDeck = {
            id: Math.floor(Math.random() * 1000000),
            name: cardname
        };
        addCard(newCardinDeck);
    };

    return(
        <form onSubmit={onSubmit}>
            <button className="btn">Lägg till kort</button>
        </form>
    )
}

export default AddCard;