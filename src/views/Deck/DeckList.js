import React, {createContext, useReducer} from "react";
import DeckReducer from "./DeckReducer";

const initialState = {
    card: [
        {id:1, name: 'Land'}
    ]
};

export const GlobalDeckList = createContext(initialState);

export const GlobalInfo = ({children}) => {
    const [state, dispatch] = useReducer(DeckReducer, initialState);

    function deleteCard(id){
        dispatch({
            type: 'DELETE_CARD',
            payload: id
        });
    }

    function addCard(card){
        dispatch({
            type: 'ADD_CARD',
            payload: card
        });
    }

    return(
        <GlobalDeckList.Provider value={{ card: state.card, deleteCard, addCard}}>
            {children}
        </GlobalDeckList.Provider>
    )
}