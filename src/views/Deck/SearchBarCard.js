import React, {useState } from "react";

const SearchBarCard = ({onFormSubmit}) => {

    const [term, setTerm] = useState('');

    const submitForm = ev =>{
        ev.preventDefault();
        onFormSubmit(term)
    }

    const inputChange = event => {
        setTerm(event.target.value)
    }

    return(
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <label>MTGcard Search</label>
                    <input type="text" value={term} onChange={inputChange} />
                </div>
            </form>
        </div>
    )
}

export default SearchBarCard;