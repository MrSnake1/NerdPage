import React from "react";
import AddCard from  "./AddCard";

const CardDetail = ({card}) => {

    if(!card){
        return<div>Please enter a card</div>
    }

    const cardInfo = Object.values(card)

    const dispalyCard = () => {
        return cardInfo[0].map(cards => {
            return(
                <article key={cards.id}>
                    <h2>{cards.name}</h2>
                    <img scr={cards.imageUrl} alt="card art" />
                    <p>{cards.text}</p>
                    <AddCard cardname={cards.name} />
                </article>
            )
        })
    }

    return(
        <div>
            {dispalyCard()}       
        </div>
    )
}

export default CardDetail;