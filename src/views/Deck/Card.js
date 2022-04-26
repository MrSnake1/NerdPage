import React, { useContext} from "react";
import { GlobalDeckList } from "./DeckList";

const Card = () => {
    
    const { deleteCard, card } = useContext(GlobalDeckList);

    const displayCarditem = () => {
        return card.map(card => {
            return(
                <li key={card.id}>
                    <p>{card.name}</p>
                    <button onClick={() => deleteCard(card.id)}>X</button>
                </li>
            )
        });
    }

    return(
        <>
            {displayCarditem()}
        </>
    )
}

export default Card;