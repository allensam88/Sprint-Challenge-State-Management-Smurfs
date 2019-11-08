import React from 'react'
import { Link } from 'react-router-dom';

const Card = props => {
    return (
        <div>
            <h3>{props.smurf.name}</h3>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
            <Link to={{pathname: `/update-form/`, state: {smurf: props.smurf}}}>edit</Link>
            <Link to={{pathname: `/delete/`, state: {smurf: props.smurf}}}>delete</Link>
        </div>
    )
}

export default Card;