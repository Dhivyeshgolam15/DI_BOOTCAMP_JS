import React from "react"

const userFavoriteColurs = (props)=>{
    const favoriteAnimals = props.favAnimals;

    return(
        <div>
        <ul>
            {favoriteAnimals.map((animal,index)=>(
                <li key={index}>{animal}</li>
            ))}
        </ul>
        </div>
        );
    }

export default userFavoriteColurs;

