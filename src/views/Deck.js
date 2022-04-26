import React, {useEffect, useState} from "react";
import mtgBase from '../api/mtgBase'
import SearchBar from './Deck/SearchBarCard';
import CardDetail from './Deck/CardDetail';
import CardList from './Deck/CardList'

const Deck = () => {

    const [selectCard, setSelectedCard] = useState(null);

    useEffect(() => {
        onTermSubmit('Black Lotus')
    }, [])

    const onTermSubmit = async Term => {
        const term = Term.replace(/ /g,"_");
        const response = await mtgBase.get('?name=' + term);
        setSelectedCard(response.data)
    }

    return(
        <div>
            <SearchBar onFormSubmit={onTermSubmit} />
            <CardDetail card={selectCard} />
            <CardList />
        </div>
    )
}

export default Deck;