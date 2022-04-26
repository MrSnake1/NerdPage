import React from "react";

const Display = ({object}) => {

    if(!object){
        return<div>Waiting for object</div>
    }

    return(
        <div>
            <article>
                <h2>{object.name}</h2>
                <p>{object.desc}</p>
            </article>
        </div>
    )
}

export default Display;