import React, { useState } from "react";

const SearchBar = ({onFormSubmit}) => {

    const [term, setTerm] = useState('');

    const submitForm = ev => {
        ev.preventDefault();
        onFormSubmit(term);
    }

    const inputChange = event => {
        setTerm(event.target.value)
    }

    return (
        <div className="">
            <form onSubmit={submitForm} className="">
                <div>
                    <label>Spell search</label>
                    <input type="text" value={term} onChange={inputChange} />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;