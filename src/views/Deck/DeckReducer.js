
const DeckReducer = (state, action) => {
    switch(action.type){
        case 'DELETE_CARD':
            return{
                ...state,
                card: state.card.filter(card => card.id !== action.payload)
            }
        case 'ADD_CARD':
            return{
                ...state,
                card: [action.payload, ...state.card]
            }
            default:
                return state;
    }
};

export default DeckReducer;