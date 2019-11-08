import React from 'react'
import { Link } from 'react-router-dom';

const Card = props => {
    return (
        <div>
            <h3>{props.smurf.name}</h3>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
            <Link to={`/update-form/`}>edit</Link>
        </div>
    )
}

export default Card;